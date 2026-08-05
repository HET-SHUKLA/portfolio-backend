# Portfolio Backend

Backend for Portfolio Website [Het Shukla](https://www.hetshukla.com/). Includes APIs for frontend and to update portfolio data.

Since It is a simple portfolio, architecture is specifically designed to keep cost of hosting and running this always stays 0.

All the decisions and tradeoffs mentioned in the [ADR](portfolio-backend/docs/adr) folder.

### Architecture

#### Diagram
```mermaid
flowchart LR

    Recruiter["👤 Recruiter"]

    subgraph Cloudflare
        Static["Static Portfolio (SEO Friendly)"]
        Worker["Cloudflare Worker"]
    end

    Recruiter --> Static

    Static -. Background API Request .-> Worker

    Worker -->|AWS SigV4 Signed Request| APIGateway["API Gateway<br/>(IAM Auth)"]

    subgraph AWS
        APIGateway --> Lambda["Fastify on AWS Lambda"]

        Lambda --> SSM["SSM Parameter Store<br/>(SecureString Secrets)"]

        Lambda --> Turso[(Turso Database)]

        Lambda --> Logs["CloudWatch Logs"]
    end

    Turso --> Lambda
    SSM --> Lambda

    Lambda -->|JSON Response| APIGateway
    APIGateway --> Worker

    Worker -. Updated Portfolio Data .-> Static

    Static --> Recruiter
```

#### Diagram (Development Flow)

```mermaid
flowchart TB
    %% =========================
    %% Developer & CI/CD
    %% =========================
    DEV["👨‍💻 Developer"]
    GH["GitHub Repository"]
    GHA["GitHub Actions"]

    DEV -->|git push| GH
    GH -->|Trigger Workflow| GHA

    subgraph Pipeline["CI/CD Pipeline"]
        LINT["Lint"]
        TYPE["Type Check"]
        TEST["Tests"]
        BUILD["Build"]
        SAM["Deploy with AWS SAM"]
    end

    GHA --> LINT
    LINT --> TYPE
    TYPE --> TEST
    TEST --> BUILD
    BUILD --> SAM

    %% =========================
    %% AWS
    %% =========================
    subgraph AWS["AWS"]
        APIGW["API Gateway"]
        LAMBDA["Fastify on AWS Lambda"]
        IAM["IAM Role"]
        SSM["SSM Parameter Store\n(SecureString)"]
        CW["CloudWatch Logs"]
    end

    SAM --> APIGW
    SAM --> LAMBDA
    SAM --> IAM

    IAM -. Grants Access .-> LAMBDA
    LAMBDA -->|Read Secrets| SSM
    LAMBDA -->|Structured Logs| CW

    %% =========================
    %% Database
    %% =========================
    TURSO["Turso Database"]

    LAMBDA --> TURSO

    %% =========================
    %% Portfolio
    %% =========================
    USER["👤 Recruiter"]

    subgraph CF["Cloudflare"]
        STATIC["Static Portfolio"]
        WORKER["Cloudflare Worker\n(Signs AWS SigV4 Requests)"]
    end

    USER --> STATIC

    STATIC -. Background Fetch .-> WORKER
    WORKER -->|AWS SigV4 + IAM| APIGW

    APIGW --> LAMBDA
    LAMBDA --> APIGW
    APIGW --> WORKER
    WORKER -. JSON Response .-> STATIC

    %% =========================
    %% Notes
    %% =========================
    classDef note fill:#eef7ff,stroke:#4b9fff,color:#000;

    NOTE1["Portfolio works even if backend is unavailable"]:::note
    NOTE2["Secrets never stored in GitHub repository"]:::note
    NOTE3["AWS authenticated via GitHub OIDC (no long-lived AWS keys)"]:::note

    STATIC --- NOTE1
    SSM --- NOTE2
    GHA --- NOTE3
```
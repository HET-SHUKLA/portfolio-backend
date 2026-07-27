# SSM for storing secrets

## Status
Decided

## Context

Need to store secrets so Lambda can access that at runtime.

For GHA, I can use ODIC + IAM to deploy on AWS. So there is no secret needed.

For Lambda runtime, I can use these things,

1. SSM - System manager with System manager parameter store. I can use secure string to store secrets in Parameter store. But during cold start and every initialization, It will add tiny delay. We need to cache data on 1st invocation.

2. AWS Secret Manager - It is perfect choice for storing secret, But it is paid for every secret.

3. Lambda environment variable - It is free for 4KB storage and also good choice. It is not ideal for a team, as someone with lambda configuration permission can read it. Also managing Lambda environment variable would be sligt complicated for this project as we need to use CDK as IaC which is going to be commited in repo, where we are supposed to add secret. So again we need to find another location to store secret, which CDK can fetch and use in lambda.

## Decision

Decided to use SSM.

## Consequences

There would be another network call for fetching secret.

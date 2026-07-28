# for IaC

## Status
Decided

## Context

I need IaC for managin Lambda in AWS, since we are going to use AWS Lambda for hosting.

I can think of,
1. CDK - AWS Native, TypeScript support and good for medium to complex projects.
2. SAM - AWS Native, YAML, Good for low level projects.
3. CloudFormation - AWS Native, YAML/JSON, Medium level, But slightly verbose and complicated for basic portfolio project.
4. Terraform - Not AWS Native, HCL, Medium to Complex project level. Again good choice for more complicated projects, but not ideal for this project.

So CDK and SAM could be ideal choice. I can either go with CDK just because of TS support or go with SAM because it is perfect for this level of project.

There aren't much dependencies and it is simple project, I should go with SAM.

## Decision

Decided to use SAM.

## Consequences

The only consequence I can think of is, If in future this project becomes complicated (Which I dont think it will ever become), It will be harder to maintain using SAM and YAML.

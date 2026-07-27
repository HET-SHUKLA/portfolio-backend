# GithHub Actions for CI/CD

## Status
Decided

## Context

Here are requirements

1. Simple and Reliable
2. Zero cost to maintain

There are many CI/CD tools like GHA, Concourse, Jenkis, AWS CodePipeline and CodeBuild.

Concourse and Jenkis are self hosted tools, and just for this project, Self Hosting CI/CD tool is not really necessary.

AWS CodePipeline and CodeBuild will have vendor lock in.

GHA gives 2000 min/month for CI/CD, Which is more than enough for this project. It will be simple and reliable.

## Decision

Decided to use GHA.

## Consequences

Pricing and Free mins are fluctuating.

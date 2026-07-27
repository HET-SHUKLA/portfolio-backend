# Cloudflare for Edge Rate limitting

## Status
Decided

## Context

Here are the requirements.

1. Need to protect my DB -> Simplest approach is rate limitting using in memory DB like redis.

- I can use Upstash since code is going to deploy on serverless, I can not really use Redis. I mean I can use Redis, since there wont be much traffic and in the end I will cap concurrent lambda initialization. So using redis is also fine in this particular case.

2. Need to protect Lamdba -> Redis can not protect lambda, Need something like API Gateway

- API Gateway is not free always. So technically can not use that.

3. Cost for maintaining this should stay 0.

Solution:
- Use some kind of entry point for every API call, like Edge Rate limitting using Cloudflare.

- It has free tier, the only downside is, in free tier, there is no Uptime SLA gurantee. For the backend it is fine, since according to the project's architecture, I am going to load frontend statically first. So user will stil be able to see all the content without backend.

- I can use SigV4 and AWS IAM to protect lambda in case someone bypass cloudflare and send request directly to Lambda.

- Technically this alone will add rate limitting, So adding redis is not ideal with this.


## Decision

Decided to use Cloudflare.

## Consequences

No uptime SLA gurantee can be problamatic if it stays down for too long.

If I ever decide to move out of cloudflare, I'll need to add rate limitting in code to protect DB from abuse.



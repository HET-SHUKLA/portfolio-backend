# AWS Lambda for Hosting

## Status
Decided

## Context

As this is simple project, Cost of developing, deploying and maintaing should always stay 0. Traffic at this application would be very low, almost zero.

Traffic is almost zero, cost should be zero, so using VPS and keep it running always litrally does not make any sense to me.

I need a simple place to host APIs which can be accesed from anywhere by anyone without any long cold start.

## Decision

Decided to use AWS Lambda to host API, So it meets all the requirement. As traffic is not the problem, AWS won't charge any money.

## Consequences

The only consequence I can think of is, 300-500ms cold start for Fastify application, Which is not really a problem for me.

**Solution** - I can keep pinging my API every 10 minutes to avoid this cold start, but this is not in the scope right now, and it would be overkill for this project.

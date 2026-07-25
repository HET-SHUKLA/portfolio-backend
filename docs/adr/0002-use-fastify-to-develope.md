# Fastify for Development

## Status
Decided

## Context

Since I am going to host this on AWS Lambda, I need to keep it lightweight so it does not add much time in Cold start.

I can think of Fastify, Express, Go, Spring boot, FastAPI for API creation.

Honestly I only know Fastify and Express, So I can skip all the other options as I dont want to spend time in learning some framework just for this project.

I would chose Fastify over Express because,

1. Logging is inbuilt
2. More structured and has natural schema validation (No need for zod or any other validator)
3. Slightly better performance


## Decision

Decided to use Fastify.

## Consequences

I can not think of any consequence for this decision.

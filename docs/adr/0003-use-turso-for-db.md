# Turso

## Status
Decided

## Context

Database is not really something important in this project.  According to the project's architecture, Rarely read and write is going to happen to the DB, but when it happens, It should be little quick.

Thats why, Cold start should not be there for DB.

Requirements:
1. Free tier
2. Simple relational database
3. Little latency during read and cold start
4. Should be compatible with serverless architecture
5. Portability
6. ORM Support

From multiple articles, I found **Neon** and **Turso** perfect fit for my requirements. Although Neon has a little cold start, So choosing **Turso** for the project.

Sources: [Algoroq](https://algoroq.io/compare-tech/turso-vs-neon/), [Devtools Academy](https://www.devtoolsacademy.com/blog/serverless-sql-databases)

Although Turso is using SQLite, But for my usecase, It is fine.

## Decision

Decided to use Turso.

## Consequences

Turso uses SQLite, Which has narrower SQL features. I wont be able to use Joins or other features.

Turso is, right now, new company, Which can have fluctuating pricing model. I might need to migrate entire DB in future if price changes, Which I am assuming wont take much time.

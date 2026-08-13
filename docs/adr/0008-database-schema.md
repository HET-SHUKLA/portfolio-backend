# Database Schema

## Status
Decided

## Context

I need to design schema for the database. I am using TURSO as a DB which is Relational DB.

There are total 8 objects.
experience, projects, skills, userData, contact, navbar, customData and version.

Now I can create separate table for each object, but each table is going to have 1 row only. Also at the time of page render, It is not ideal to call 8 DB requests.

I can merge few objects like, userData, contact, navbar, customData and skills. I'll keep projects and experience as a different table as they will have more than 1 row.

By this way I can get 1 DB call for best scenario or 3 DB calls for worst scenario.

3 DB calls are fine and far better than 8 DB calls.

But then there wont be any separation and at the time of updating, the whole flow will become complicated. The only reason backend exists for this portfolio is, It solves a problem for me to update a portfolio data very quickly using any APIs or something.

So I should go with 8 different tables only. But again 8 DB calls are the worst thing I can do with this project.

I can run a script or on any DB update, I'll add automation to at least once send request to API. By that way, data stored in DB will be cached in the CDN and no need to make 8 DB calls.

That is the best solution I can think of.

## Decision

Decided to create table for each object even if it contains only one row.

## Consequences

There will be 8 DB calls on the page loads, if data isnt cached. Need to make sure data always gets cached on update.
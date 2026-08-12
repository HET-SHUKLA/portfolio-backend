import { fastify } from "./app.ts";
import config from "./config/env.config.ts";

try {
  await fastify.listen({ port: config.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
import { drizzle } from 'drizzle-orm/libsql';
import config from "../config/env.config.ts";

export const db = drizzle({ connection: {
  url: config.DB_URL!,
  authToken: config.DB_TOKEN!,
}});
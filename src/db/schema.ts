import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import type { Navbar } from "../schemas/navbar";
import type { UserData } from "../schemas/userData";
import type { Skills } from "../schemas/skills";
import type { Contact } from "../schemas/contact";
import type { CustomData } from "../schemas/customData";

export const portfolioConfig = sqliteTable("portfolio_config", {
  id: integer("id").primaryKey(),

  navbar: text("navbar", { mode: "json" }).$type<Navbar>(),

  userData: text("user_data", { mode: "json" }).$type<UserData>(),

  skills: text("skills", { mode: "json" }).$type<Skills>(),

  contact: text("contact", { mode: "json" }).$type<Contact>(),

  customData: text("custom_data", { mode: "json" }).$type<CustomData>(),
});
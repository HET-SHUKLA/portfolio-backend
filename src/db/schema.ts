import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import type { Navbar } from "../schemas/navbar";
import type { UserData } from "../schemas/userData";
import type { Skills } from "../schemas/skills";
import type { Contact } from "../schemas/contact";
import type { CustomData } from "../schemas/customData";
import type { Experience } from "../schemas/experience";
import type { Project } from "../schemas/project";

export const navbar = sqliteTable("navbar", {
  id: integer("id").primaryKey(),

  left: text("left", { mode: "json" }).$type<Navbar["left"]>(),
  right: text("right", { mode: "json" }).$type<Navbar["right"]>(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});


export const userData = sqliteTable("user_data", {
  id: integer("id").primaryKey(),

  name: text("name").$type<UserData["name"]>(),
  role: text("role").$type<UserData["role"]>(),

  description: text("description", { mode: "json" })
    .$type<UserData["description"]>(),

  customData: text("custom_data", { mode: "json" })
    .$type<UserData["customData"]>(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const experience = sqliteTable("experience", {
  id: integer("id").primaryKey(),

  startDate: text("start_date").notNull(),
  endDate: text("end_date"),

  role: text("role").notNull(),
  company: text("company"),
  location: text("location"),

  description: text("description", { mode: "json" })
    .$type<Experience["description"]>()
    .notNull(),

  customData: text("custom_data", { mode: "json" })
    .$type<Experience["customData"]>(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(),

  name: text("name").notNull(),

  code: text("code"),
  live: text("live"),

  description: text("description", { mode: "json" })
    .$type<Project["description"]>()
    .notNull(),

  images: text("images", { mode: "json" })
    .$type<Project["images"]>(),

  tools: text("tools", { mode: "json" })
    .$type<Project["tools"]>(),

  technologies: text("technologies", { mode: "json" })
    .$type<Project["technologies"]>(),

  languages: text("languages", { mode: "json" })
    .$type<Project["languages"]>(),

  customData: text("custom_data", { mode: "json" })
    .$type<Project["customData"]>(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const skills = sqliteTable("skills", {
  id: integer("id").primaryKey(),

  data: text("data", { mode: "json" })
    .$type<Skills>()
    .notNull(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const contact = sqliteTable("contact", {
  id: integer("id").primaryKey(),

  email: text("email", { mode: "json" })
    .$type<Contact["email"]>(),

  socials: text("socials", { mode: "json" })
    .$type<Contact["socials"]>()
    .notNull(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const customData = sqliteTable("custom_data", {
  id: integer("id").primaryKey(),

  data: text("data", { mode: "json" })
    .$type<CustomData>()
    .notNull(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});

export const version = sqliteTable("version", {
  id: integer("id").primaryKey(),

  version: integer("version").notNull(),

  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
});
import { z } from "zod";

export const skillsSchema = z.array(z.string());

export type Skills = z.infer<typeof skillsSchema>;
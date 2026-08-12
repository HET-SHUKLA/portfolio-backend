import { z } from "zod";

export const projectInputSchema = z.object({
    name: z.string(),
    code: z.string().nullable(),
    live: z.string().nullable(),
    description: z.array(z.string()),
    images: z.array(z.string()).nullable(),
    tools: z.array(z.string()).nullable(),
    technologies: z.array(z.string()).nullable(),
    languages: z.array(z.string()).nullable(),
    customData: z.array(z.string()).nullable(),
});

export const projectSchema = projectInputSchema.extend({
    id: z.number().int().positive(),
});

export type ProjectInput = z.infer<typeof projectInputSchema>;
export type Project = z.infer<typeof projectSchema>;
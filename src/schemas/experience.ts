import { z } from "zod";

export const experienceInputSchema = z.object({
    startDate: z.iso.date(),
    endDate: z.iso.date().nullable(),
    role: z.string(),
    company: z.string().nullable(),
    location: z.string().nullable(),
    description: z.array(z.string()),
    customData: z.array(z.string()).nullable(),
});

export const experienceSchema = experienceInputSchema.extend({
    id: z.number().int().positive(),
});

export type ExperienceInput = z.infer<typeof experienceInputSchema>;
export type Experience = z.infer<typeof experienceSchema>;
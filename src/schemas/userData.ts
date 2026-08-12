import { z } from "zod";

export const userDataSchema = z.object({
    name: z.string(),
    role: z.string(),
    description: z.array(z.string()),
    customData: z.array(z.string()).nullable(),
});

export type UserData = z.infer<typeof userDataSchema>;
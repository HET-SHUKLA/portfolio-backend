import { z } from "zod";

export const versionSchema = z.object({
    version: z.number().int().nonnegative(),
});

export type Version = z.infer<typeof versionSchema>;
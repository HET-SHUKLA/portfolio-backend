import { z } from "zod";

export const customDataSchema = z.array(z.string());

export type CustomData = z.infer<typeof customDataSchema>;
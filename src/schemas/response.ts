import { z } from "zod";

export const successStatusSchema = z.literal("SUCCESS");
export const failureStatusSchema = z.literal("FAILURE");

export const successResponseSchema = <T extends z.ZodType>(data: T) =>
    z.object({
        status: successStatusSchema,
        code: z.literal(200),
        message: z.string(),
        data,
    });

export const createdResponseSchema = <T extends z.ZodType>(data: T) =>
    z.object({
        status: successStatusSchema,
        code: z.literal(201),
        message: z.string(),
        data,
    });

export const failureResponseSchema = z.object({
    status: failureStatusSchema,
    code: z.union([
        z.literal(400),
        z.literal(401),
        z.literal(403),
        z.literal(404),
        z.literal(409),
        z.literal(500),
    ]),
    message: z.string(),
});
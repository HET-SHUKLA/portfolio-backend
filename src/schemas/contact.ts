import { z } from "zod";

export const contactSocialSchema = z.object({
    name: z.string(),
    link: z.string(),
});

export const contactSchema = z.object({
    email: z.array(z.email()).nullable(),
    socials: z.array(contactSocialSchema),
});

export type ContactSocial = z.infer<typeof contactSocialSchema>;
export type Contact = z.infer<typeof contactSchema>;
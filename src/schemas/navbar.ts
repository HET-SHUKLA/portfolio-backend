import { z } from "zod";

export const navbarItemSchema = z.object({
    title: z.string(),
    link: z.string(),
});

export const navbarSchema = z.object({
    left: z.array(navbarItemSchema),
    right: z.array(navbarItemSchema),
});

export type NavbarItem = z.infer<typeof navbarItemSchema>;
export type Navbar = z.infer<typeof navbarSchema>;
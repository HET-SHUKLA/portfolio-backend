import { z } from "zod";

import { navbarSchema } from "./navbar";
import { userDataSchema } from "./userData";
import { experienceSchema } from "./experience";
import { projectSchema } from "./project";
import { skillsSchema } from "./skills";
import { contactSchema } from "./contact";
import { customDataSchema } from "./customData";

export const portfolioSchema = z.object({
    navbar: navbarSchema,
    userData: userDataSchema,
    experience: z.array(experienceSchema),
    projects: z.array(projectSchema),
    skills: skillsSchema,
    contact: contactSchema,
    customData: customDataSchema,
});

export type Portfolio = z.infer<typeof portfolioSchema>;
import { z } from "zod";

const envSchema = z.object({
    DB_URL: z.string({
        error: "DB_URL is required in the environment variables"
    }),

    DB_TOKEN: z.string({
        error: "DB_TOKEN is required in the environment variables"
    })
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error("----------- ENVIRONMENT VARIABLE NOT FOUND -----------");
    console.error(env.error);
    console.error("Exiting...!");
    process.exit(1);
}

export default env.data;


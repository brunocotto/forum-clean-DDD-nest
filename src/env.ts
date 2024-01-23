import { z } from 'zod'

export const envSchema = z.object({
  OCCURRENCE_DATABASE_URL: z.string(),
  USER_DATABASE_URL: z.string(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>

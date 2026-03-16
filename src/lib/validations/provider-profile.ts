import { z } from "zod";

export const providerProfileSchema = z.object({
  displayName: z.string().min(2),
  bio: z.string().min(20),
  city: z.string().min(2),
  categories: z.array(z.string()).min(1)
});

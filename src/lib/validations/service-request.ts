import { z } from "zod";

export const serviceRequestSchema = z.object({
  category: z.string().min(1),
  description: z.string().min(10),
  address: z.string().min(5),
  city: z.string().min(2),
  preferredDate: z.string().min(1)
});

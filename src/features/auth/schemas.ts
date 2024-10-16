import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8, "Minimum 8 character"),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().trim().email(),
  password: z.string().min(8, "Minimum 8 character"),
});

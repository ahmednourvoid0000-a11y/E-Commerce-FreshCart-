import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at 15 characters"),
    email: zod
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: zod
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at 15 characters"),
    rePassword: zod.string().nonempty("Please confirm your password"),
    phone: zod
      .string()
      .nonempty("Phone is required")
      .regex(/^\+?\d{10,15}$/, "Invalid phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

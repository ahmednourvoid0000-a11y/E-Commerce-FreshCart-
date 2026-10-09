"use server";
import { registerSchema } from "./register.schema";
import * as zod from "zod";
type registerObjectType = zod.infer<typeof registerSchema>;

export async function RegisterActions(data: registerObjectType) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      },
    );

    const payload = await res.json();
    console.log("payload", payload);

    if (res.ok) {
      return {
        success: true,
        message: payload.message,
      };
    } else {
      return {
        success: false,
        message: payload.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

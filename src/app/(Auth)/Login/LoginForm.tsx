"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as zod from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginSchema } from "./login.schema";
export type loginObjectType = zod.infer<typeof loginSchema>;
import { signIn } from "next-auth/react";
import { getCurrentloggedInUserCart } from "./login.action";
import { useCart } from "@/app/_context/cartContext";

export default function LoginForm() {
  const { updateNumberOfCartItem } = useCart();
  const router = useRouter();
  const { handleSubmit, control } = useForm<loginObjectType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function Submit(data: loginObjectType) {
    const res = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      ...data,
    });
    if (res?.ok && res.url) {
      router.replace(res.url);
    }

    if (res?.ok) {
      toast.success("Welcome");
      const resp = await getCurrentloggedInUserCart();
      updateNumberOfCartItem(resp?.[0]?.products?.length || 0);

      router.replace("/");
    } else {
      toast.error("Invalid email or password");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                id="password"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your password"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button className="mt-5 w-full text-2xl p-2 bg-green-700" type="submit">
          login
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
}

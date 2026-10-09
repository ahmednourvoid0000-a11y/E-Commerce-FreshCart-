import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function deCodeUserToken(): Promise<string | null> {
  const cookieStore = await cookies();

  const nextAuthToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (!nextAuthToken) return null;

  const jwt = await decode({
    token: nextAuthToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (jwt) {
    return jwt.routetoken as string;
  } else {
    return null;
  }
}

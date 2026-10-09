import { nextAuthConfig } from "@/next-auth/next-config";
import NextAuth from "next-auth";

export const routerHandeler = NextAuth(nextAuthConfig);

export { routerHandeler as GET, routerHandeler as POST };

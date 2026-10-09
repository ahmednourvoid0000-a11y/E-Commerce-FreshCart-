import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "fresh cart",

      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const payload = await res.json();

          if (!res.ok || !payload.user) {
            return null;
          }

          return {
            id: payload.user._id,
            name: payload.user.name,
            email: payload.user.email,
            tokenlog: payload.token,
          };
        } catch (error) {
          console.error("Authorize Error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.routetoken = (user as any).tokenlog;
      }
      return token;
    },

    async session({ session, token }) {
      (session as any).routetoken = token.routetoken;
      return session;
    },
  },

  jwt: {
    maxAge: 60 * 60 * 24,
  },

  pages: {
    signIn: "/",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

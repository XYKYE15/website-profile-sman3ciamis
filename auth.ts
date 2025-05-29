import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LoginForm } from "./lib/schemas/Schema";
import { compareSync } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const validatedFields = LoginForm.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            password: true,
            role: true,
          },
        });

        if (!user || !user.password) {
          throw new Error("Pengguna tidak ditemukan");
        }

        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) return null;

        if (user.role !== "admin") {
          throw new Error("Akses ditolak");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile}) {
      if (account?.provider === "google") {
        console.log(profile)
        console.log(account)
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { role: true },
        });

        if (!dbUser || dbUser.role !== "admin") {
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, profile }) {
      if (user) {
        token.role = user.role;
         token.image = user.image ?? profile?.picture;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.image = token.image as string;
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;
      const isAdminRoute = pathname.startsWith("/admin");

      if (!isLoggedIn && isAdminRoute) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      if (isAdminRoute && auth?.user?.role !== "admin") {
        return Response.redirect(new URL("/", nextUrl));
      }

      if (isLoggedIn && pathname.startsWith("/login")) {
        return Response.redirect(new URL("/admin", nextUrl));
      }

      return true;
    },
  },
});

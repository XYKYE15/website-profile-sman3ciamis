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
  },

  providers: [
    Google,
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
            password: true,
            role: true,
          },
        });

        if (!user || !user.password) {
          throw new Error("Pengguna tidak ditemukan");
        }

        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) return null;

        // Batasi hanya role admin
        if (user.role !== "admin") {
          return null; // login gagal
        }

        return user; // hanya admin yang lolos
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;
      const isAdminRoute = pathname.startsWith("/admin");

      // Belum login & akses admin → redirect login
      if (!isLoggedIn && isAdminRoute) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      // Login tapi bukan admin → redirect ke /
      if (isAdminRoute && auth?.user?.role !== "admin") {
        return Response.redirect(new URL("/", nextUrl));
      }

      //Sudah login dan coba akses /login atau /register → redirect ke admin
      if (
        isLoggedIn &&
        (pathname.startsWith("/login") || pathname.startsWith("/register"))
      ) {
        return Response.redirect(new URL("/admin", nextUrl));
      }

      return true;
    },
  },
});

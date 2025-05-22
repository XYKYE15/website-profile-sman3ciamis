import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { LoginForm } from "./lib/schemas/Schema";
import { compareSync } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  pages: {
    signIn: "/auth/login",
  },

  providers: [
    Credentials({
      credentials: {
        Email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const validatedFields = LoginForm.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if(!user || !user.password) {
          throw new Error("Pengguna tidak ditemukan");
        }

        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) return null;

        return user;
        
      },
    }),
  ],
});

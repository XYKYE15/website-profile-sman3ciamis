"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signInCredentials } from "@/lib/actions";
import { LoginButton } from "./button";

const LoginForm = () => {
  const [state, formAction] = useActionState(signInCredentials, null);
  return (
    <form action={formAction} className="space-y-4">
      {state?.message ? (
        <div
          className="p-4 text-sm text-red-900 rounded-lg bg-red-200"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full bg-gray-100 border border-gray-700 text-blue-900 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="email@example.com"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.email}
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="w-full bg-gray-100 border border-gray-700 text-blue-900 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.password}
            </span>
          </div>
        </div>
      </div>
      <LoginButton />
      <div className="mt-6 text-center text-sm text-gray-100">
        Belum Punya Akun?
        <Link
          href="/register"
          className="text-blue-900 pl-1"
          aria-label="Log in"
        >
          Daftar Disini
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

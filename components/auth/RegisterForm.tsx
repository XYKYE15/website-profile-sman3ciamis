"use client";

import { useActionState } from "react";
import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io";
import { signUpCredentials } from "@/lib/actions";
import { RegisterButton } from "./button";

const RegisterForm = () => {
  const [state, formAction] = useActionState(signUpCredentials, null);
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

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-md mb-6 hover:bg-gray-200 transition"
      >
        <IoLogoGoogle />
        Sign up with Google
      </button>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Nama Lengkap
          </label>
          <input
            name="name"
            type="text"
            autoComplete="username"
            required
            className="w-full bg-gray-100 border border-gray-700 text-blue-900 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.name}
            </span>
          </div>
        </div>

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

        <div>
          <label
            htmlFor="ConfirmPassword"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Konfirmasi Password
          </label>
          <input
            name="ConfirmPassword"
            type="password"
            required
            className="w-full bg-gray-100 border border-gray-700 text-blue-900 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.ConfirmPassword}
            </span>
          </div>
        </div>
      </div>
      <RegisterButton />
      <div className="mt-1 text-center text-sm text-gray-100">
        Sudah punya akun?
        <Link
          href="/login"
          className="text-blue-900 pl-1"
          aria-label="Log in"
        >
          Log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;

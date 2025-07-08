"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { signInCredentials } from "@/lib/actions";
import { LoginButton } from "./button";
import { IoAlertCircleOutline } from "react-icons/io5";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [state, formAction] = useActionState(signInCredentials, null);

  // Pesan dari query param (Google login, AccessDenied, dll)
  const [showQueryError, setShowQueryError] = useState(false);
  const errorMessage =
    {
      AccessDenied: "Akses ditolak. Anda bukan admin.",
      CredentialsSignin: "Email atau password salah.",
    }[error || ""] || null;

  useEffect(() => {
    if (errorMessage) {
      setShowQueryError(true);
      const timer = setTimeout(() => {
        setShowQueryError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Pesan dari hasil server action
  const [showStateError, setShowStateError] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setShowStateError(true);
      const timer = setTimeout(() => {
        setShowStateError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <>
      {/* Query Param Error */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showQueryError ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg shadow"
          role="alert"
        >
          <IoAlertCircleOutline className="text-red-600 w-5 h-5 mt-0.5" />
          <div className="text-sm font-medium">{errorMessage}</div>
        </div>
      </div>

      {/* Server Action Error */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showStateError ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        {state?.message && (
          <div
            className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg shadow"
            role="alert"
          >
            <IoAlertCircleOutline className="text-red-600 w-5 h-5 mt-0.5" />
            <div className="text-sm font-medium">{state.message}</div>
          </div>
        )}
      </div>

      <form action={formAction} className="space-y-4 py-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Username
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full bg-gray-100 border border-gray-700 text-blue-900 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Username"
          />
          <div className="min-h-[5px]">
            <p
              className={`text-sm text-red-500 mt-1 transition-opacity duration-300 ease-in-out ${
                state?.error?.email ? "opacity-100" : "opacity-0"
              }`}
            >
              {state?.error?.email ?? " "}
            </p>
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
          <div className="min-h-[20px]">
            <p
              className={`text-sm text-red-500 mt-1 transition-opacity duration-300 ease-in-out ${
                state?.error?.password ? "opacity-100" : "opacity-0"
              }`}
            >
              {state?.error?.password ?? " "}
            </p>
          </div>
        </div>

        <LoginButton />
      </form>
    </>
  );
};

export default LoginForm;

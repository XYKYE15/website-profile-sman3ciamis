"use client";
import { useFormStatus } from "react-dom";

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
    >
      {pending ? "Mendaftar..." : "Daftar"}
    </button>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
    >
      {pending ? "Masuk..." : "Masuk"}
    </button>
  );
};

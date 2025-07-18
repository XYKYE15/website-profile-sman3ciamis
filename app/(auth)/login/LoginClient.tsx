"use client";

import { Suspense } from "react";
import LogoutNotification from "@/components/admin/LogoutNotif";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginClient() {
  return (
    <>
      <Suspense fallback={null}>
        <LogoutNotification />
      </Suspense>

      <Suspense fallback={<div>Loading login form...</div>}>
        <LoginForm />
      </Suspense>
    </>
  );
}

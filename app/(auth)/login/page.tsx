"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import LogoutNotification from "@/components/admin/LogoutNotif";


const LoginForm = dynamic(() => import("@/components/auth/LoginForm"), {
  ssr: false,
  loading: () => <div>Memuat formulir login...</div>,
});

const LoginPage = () => {
  return (
    <AuthLayout title="" showOr={true}>
      <LogoutNotification />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
};

export default LoginPage;

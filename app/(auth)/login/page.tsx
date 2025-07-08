import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import LogoutNotification from "@/components/admin/LogoutNotif";

const LoginPage = () => {
  return (
    <AuthLayout title="" showOr={true}>
      {/* Tambahkan notifikasi logout */}
      <LogoutNotification />

      {/* Suspense untuk form login */}
      <Suspense fallback={<div>Loading login form...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
};

export default LoginPage;

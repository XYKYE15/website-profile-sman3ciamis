import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout title="" showOr={true}>
      <Suspense fallback={<div>Loading login form...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
};

export default LoginPage;

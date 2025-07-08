import AuthLayout from "@/components/auth/AuthLayout";
import LoginClient from "./LoginClient";

const LoginPage = () => {
  return (
    <AuthLayout title="" showOr={true}>
      <LoginClient />
    </AuthLayout>
  );
};

export default LoginPage;

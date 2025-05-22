import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" showOr={true}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

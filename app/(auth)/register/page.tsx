import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <AuthLayout 
      title="Join the largest space community"
      showOr={true}
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
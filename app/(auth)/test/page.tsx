import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <AuthLayout 
      title=""
      showOr={true}
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
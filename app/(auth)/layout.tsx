

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray">
        <div className="flex items-center justify-center px-6 py-8">
          <div className="w-full rounded-lg shadow mt-0 max-w-md  h-screen">
           {children}
          </div>
        </div>
    </div>
  );
};

export default AuthLayout;

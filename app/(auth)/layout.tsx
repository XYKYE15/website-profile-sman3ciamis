import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-auto">
        <div className="flex flex-col items-center justify-between mx-auto h-screen">
          <div className="w-full  bg-white rounded-lg shadow mt-0 max-w-md ">
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
        </div>
    </div>
  );
};

export default AuthLayout;

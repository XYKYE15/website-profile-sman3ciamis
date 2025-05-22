import { ReactNode } from "react";
import Image from "next/image";
import { GoggleButton } from "./SocialButton";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showOr?: boolean;
}

const AuthLayout = ({ children, title, showOr = false }: AuthLayoutProps) => {
  return (
    <div className="h-screen bg-blue-500 text-white flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20">
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/assets/logoSmantic.png"
              width={70}
              height={70}
              alt="Flowbite Logo"
              className="mr-1"
              priority
            />
            <h1 className="text-3xl font-bold mb-2 flex items-center flex-col">SMAN 3 CIAMIS</h1>
          </div>

          <p className="text-xl mb-8">{title}</p>

          {children}

          {showOr && (
            <div className="flex gap-2 items-center my-6">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="px-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>
          )}
          <GoggleButton />
        </div>
      </div>

      {/* Right Side - Banner */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-end p-12 relative">
        {/* Background Image dengan Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Gunakan div dengan background-image */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Overlay gelap untuk kontras teks */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Konten */}
        <div className="relative z-10 max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">SMA NEGRI 3 CIAMIS</h2>
          <p className="text-xl text-gray-300 mb-8">
            &quot;Membentuk Generasi yang Berkarakter, Berprestasi, dan
            Berwawasan Global&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

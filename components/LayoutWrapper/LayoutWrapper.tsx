"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPrivateLayout = pathname.startsWith("/admin") || pathname.startsWith("/register");

  return (
    <>
      {!isPrivateLayout && <Navbar />}
      <div className="bg-gray-200 w-full min-h-screen">{children}</div>
      {!isPrivateLayout && <Footer />}
    </>
  );
}

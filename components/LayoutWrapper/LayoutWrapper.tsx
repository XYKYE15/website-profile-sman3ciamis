// components/LayoutWrapper/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";

type SettingType = {
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  tiktok: string;
};

export default function LayoutWrapper({
  children,
  setting,
}: {
  children: ReactNode;
  setting: SettingType;
}) {
  const pathname = usePathname();
  const isPrivateLayout =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/login");

  return (
    <>
      {!isPrivateLayout && <Navbar />}
      <div className="bg-gray-200 w-full min-h-screen">{children}</div>
      {!isPrivateLayout && <Footer setting={setting} />}
    </>
  );
}

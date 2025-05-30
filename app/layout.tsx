// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import { getSocialMediaLinks } from "@/lib/data";

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "",
  description: "Profile SMAN 3 Ciamis",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setting = await getSocialMediaLinks();

  if (!setting) {
    // Handle error atau fallback sesuai kebutuhan
    // Misalnya, kamu bisa lempar error supaya build gagal
    throw new Error("Setting data not found");
    // Atau return fallback UI jika di client side
  }

  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased bg-amber-600`}>
        <LayoutWrapper setting={setting}>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

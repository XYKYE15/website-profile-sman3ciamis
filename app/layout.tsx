import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

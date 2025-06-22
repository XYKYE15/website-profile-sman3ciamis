import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import { getSocialMediaLinks } from "@/lib/data";
import AOSProvider from "@/components/AOSProvider";

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SMAN 3 Ciamis",
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

  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased`}>
        <AOSProvider>
          <LayoutWrapper setting={setting || {
            phone: "",
            email: "",
            instagram: "",
            youtube: "",
            tiktok: ""
          }}>{children}</LayoutWrapper>
        </AOSProvider>
      </body>
    </html>
  );
}

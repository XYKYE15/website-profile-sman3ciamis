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

  if (!setting) {
    return (
      <html lang="en">
        <body className={`${fontRoboto.className} antialiased`}>
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <h1 className="text-xl font-bold text-red-600 mb-2">
                Data pengaturan sosial media tidak ditemukan.
              </h1>
              <p className="text-gray-700">
                Silakan tambahkan data sosial media di halaman admin.
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased`}>
        <AOSProvider>
          <LayoutWrapper setting={setting}>{children}</LayoutWrapper>
        </AOSProvider>
      </body>
    </html>
  );
}

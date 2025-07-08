"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function LoginNotification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false); // untuk animasi opacity

  useEffect(() => {
    const loginSuccess = searchParams.get("login") === "success";

    if (loginSuccess) {
      setShow(true);
      setTimeout(() => setVisible(true), 100); // delay agar animasi masuk smooth

      const timer = setTimeout(() => {
        setVisible(false); // fade-out
        setTimeout(() => {
          setShow(false); // remove from DOM
          router.replace("/admin", { scroll: false });
        }, 500); // tunggu animasi selesai
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex items-start gap-3 bg-white border border-green-300 shadow-xl rounded-lg px-5 py-4 text-sm max-w-sm transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="alert"
    >
      <IoCheckmarkCircleOutline className="text-green-600 w-6 h-6 mt-0.5 flex-shrink-0" />
      <div className="text-green-700">
        <p className="font-semibold mb-0.5">Berhasil Login</p>
        <p className="text-xs text-green-600">
          Kamu berhasil masuk ke halaman admin.
        </p>
      </div>
    </div>
  );
}

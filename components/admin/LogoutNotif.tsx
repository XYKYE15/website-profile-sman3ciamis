"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function LogoutNotification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const logoutSuccess = searchParams.get("logout") === "success";

    if (logoutSuccess) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        router.replace("/login", { scroll: false }); // Hapus query param
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  if (!show) return null;

  return (
    <div
      className="fixed top-6 right-6 z-50 flex items-start gap-3 bg-white border border-green-300 shadow-xl rounded-lg px-5 py-4 
      animate-slide-in-fade text-sm max-w-sm transition-opacity duration-500 ease-in-out"
      role="alert"
    >
      <IoCheckmarkCircleOutline className="text-green-600 w-6 h-6 mt-0.5 flex-shrink-0" />
      <div className="text-green-700">
        <p className="font-semibold mb-0.5">Berhasil Keluar</p>
        <p className="text-xs text-green-600">Kamu telah keluar dari halaman admin.</p>
      </div>
    </div>
  );
}

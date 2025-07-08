import Link from "next/link";
import SideBar from "@/components/admin/sidebar/SideBar";
import Navbar from "@/components/admin/navbar/Navbar";
import { getStatistics } from "@/lib/data";
import { JSX } from "react";
import {
  IoPersonAddSharp,
  IoImagesSharp,
  IoNewspaperSharp,
  IoTrophySharp,
} from "react-icons/io5";
import { auth } from "@/auth";
import LoginNotification from "@/components/admin/LoginNotif";

const PageAdmin = async (): Promise<JSX.Element> => {
  const stats = await getStatistics();
  const session = await auth();
  const userName = session?.user?.name || "Administrator";

  const greeting = (() => {
    const hour = parseInt(
      new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        hour12: false,
      })
    );

    if (hour < 12) return "Selamat Pagi";
    if (hour < 15) return "Selamat Siang";
    if (hour < 18) return "Selamat Sore";
    return "Selamat Malam";
  })();

  const statData = [
    {
      label: "Guru",
      value: stats.jumlahGuru,
      href: "/admin/teacher",
      color: "blue",
    },
    {
      label: "Galeri",
      value: stats.jumlahGaleri,
      href: "/admin/gallery",
      color: "green",
    },
    {
      label: "Berita",
      value: stats.jumlahBerita,
      href: "/admin/news",
      color: "purple",
    },
    {
      label: "Prestasi",
      value: stats.jumlahPrestasi,
      href: "/admin/achievement",
      color: "amber",
    },
    {
      label: "Ekskul",
      value: stats.jumlahEkskul,
      href: "/admin/ekskul",
      color: "rose",
    },
    {
      label: "Pengaturan",
      value: stats.jumlahSetting,
      href: "/admin/settings",
      color: "slate",
    },
  ];

  const quickActions = [
    {
      label: "Tambah Guru",
      href: "/admin/teacher/create",
      icon: <IoPersonAddSharp className="text-2xl text-blue-600" />,
    },
    {
      label: "Tambah Galeri",
      href: "/admin/gallery/create",
      icon: <IoImagesSharp className="text-2xl text-green-600" />,
    },
    {
      label: "Tambah Berita",
      href: "/admin/news/create",
      icon: <IoNewspaperSharp className="text-2xl text-purple-600" />,
    },
    {
      label: "Tambah Prestasi",
      href: "/admin/achievement/create",
      icon: <IoTrophySharp className="text-2xl text-amber-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6 mt-25">
          <LoginNotification /> {/* ✅ Notifikasi login berhasil */}

          <h1 className="text-2xl font-bold mb-2">Dashboard Admin</h1>
          <p className="text-gray-600 mb-6">
            {greeting}, {userName} 👋
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {statData.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm transition-all"
              >
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className={`text-2xl font-bold text-${item.color}-600`}>
                  {item.value}
                </p>
              </Link>
            ))}
          </div>

          {/* Aksi Cepat */}
          <h2 className="text-lg font-semibold mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map((action, idx) => (
              <Link
                key={idx}
                href={action.href}
                className="p-4 bg-white border border-gray-200 rounded-xl text-center hover:bg-blue-50 transition-all"
              >
                <div className="mb-2 flex justify-center">{action.icon}</div>
                <p className="text-sm text-gray-700">{action.label}</p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageAdmin;

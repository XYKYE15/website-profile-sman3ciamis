import SideBar from "@/components/admin/sidebar/SideBar";
import CardAchievement from "@/components/CreateAchievement/card/card";
import Navbar from "@/components/admin/navbar/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SMAN 3 Ciamis | Manajemen Prestasi",
};

const AdminAchievement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-25">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Prestasi</h1>
          <Link
            href="/admin/achievement/create"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-medium px-5 py-2.5 rounded-lg shadow transition"
          >
            + Tambah Prestasi
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <CardAchievement />
        </div>
      </main>
    </div>
  );
};

export default AdminAchievement;

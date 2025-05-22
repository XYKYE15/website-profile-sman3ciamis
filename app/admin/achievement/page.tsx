import SideBar from "@/components/admin/sidebar/SideBar";
import CardAchievement from "@/components/CreateAchievement/card/card";
import Navbar from "@/components/admin/navbar/Navbar";
import Link from "next/link";

const AdminNews = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar/>
      <SideBar />
      <main className="flex-1 p-8 overflow-hidden mt-25">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Prestasi</h1>
          <Link
            href="/admin/achievement/create"
            className="bg-blue-500 hover:bg-blue-500 text-white px-5 py-2 rounded-md shadow transition-all"
          >
            + Tambah Prestasi
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow">
          <CardAchievement />
        </div>
      </main>
    </div>
  );
};

export default AdminNews;

import SideBar from "@/components/admin/sidebar/SideBar";
import CardNews from "@/components/CreateNews/card/card";
import Link from "next/link";

const AdminNews = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Berita</h1>
          <Link
            href="/admin/news/create"
            className="bg-blue-500 hover:bg-blue-500 text-white px-5 py-2 rounded-md shadow transition-all"
          >
            + Tambah Berita
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow">
          <CardNews />
        </div>
      </main>
    </div>
  );
};

export default AdminNews;

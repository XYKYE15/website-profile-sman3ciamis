import Navbar from "@/components/admin/navbar/Navbar";
import SideBar from "@/components/admin/sidebar/SideBar";
import CardSettings from "@/components/CreateSettings/card/card";
import Link from "next/link";
import { getSettings } from "@/lib/data";

export default async function AdminSettings() {
  const settings = await getSettings();

  const hasSettings = settings.length > 0;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <SideBar />

      <main className="flex-1 p-8 mt-25 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Pengaturan</h1>

          {hasSettings ? (
            <button
              disabled
              className="bg-blue-300 text-white px-5 py-2 rounded-md shadow cursor-not-allowed"
              title="Data sudah ada, tidak bisa menambah data lagi"
            >
              + Tambah Data
            </button>
          ) : (
            <Link
              href="/admin/settings/create"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow transition-all"
            >
              + Tambah Data
            </Link>
          )}
        </div>

        <div className="bg-white p-6 rounded-md shadow h-125">
          <CardSettings />
        </div>
      </main>
    </div>
  );
}

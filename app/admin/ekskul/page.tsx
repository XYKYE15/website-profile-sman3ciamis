import Navbar from "@/components/admin/navbar/Navbar";
import SideBar from "@/components/admin/sidebar/SideBar";
import CardEkskul from "@/components/CreateEkskul/card/cardEkskul";
import Link from "next/link";

const AdminEkskul = () => {
  return (
     <div className="flex min-h-screen bg-gray-100">
      <Navbar/>
      <SideBar />
      <main className="flex-1 p-8 overflow-hidden mt-25">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Ekskul</h1>
          <Link
            href="/admin/ek"
            className="bg-blue-500 hover:bg-blue-500 text-white px-5 py-2 rounded-md shadow transition-all"
          >
            + Tambah Ekskul
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow">
          <CardEkskul />
        </div>
      </main>
    </div>
  )
}

export default AdminEkskul;
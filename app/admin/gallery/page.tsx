import SideBar from "@/components/admin/sidebar/SideBar";
import CardGalleryAdmin from "@/components/CreateGallery/Card/Card";
import Navbar from "@/components/admin/navbar/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SMAN 3 Ciamis | Manajemen Gallery",
};

const AdminGallery = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <SideBar />
      <main className="flex-1 p-8 mt-25">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Manajemen Gallery
          </h1>
          <Link
            href="/admin/gallery/create"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow transition-all"
          >
            + Tambah Gallery
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow">
            <CardGalleryAdmin/>
        </div>
      </main>
    </div>
  );
};

export default AdminGallery;

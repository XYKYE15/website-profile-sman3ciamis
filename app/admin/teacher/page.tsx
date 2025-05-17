import SideBar from "@/components/admin/sidebar/SideBar";
import TeacherTable from "@/components/teacher/Card";
import Link from "next/link";

const AdminTeacherPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Manajemen Tenaga Pendidikan
          </h1>
          <Link
            href="/admin/teacher/create"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow transition-all"
          >
            + Tambah Tenaga Pendidikan
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow">
          <TeacherTable />
        </div>
      </main>
    </div>
  );
};

export default AdminTeacherPage;

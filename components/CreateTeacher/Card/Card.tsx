import { getImagesTeacher } from "@/lib/data";
import Image from "next/image";
import { DeleteButton, EditButton } from "../Button/button";
;

export default async function TeacherTable() {
  const images = await getImagesTeacher();

  if (!images || images.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
        <div className="text-gray-400 mb-2">
          <svg
            className="w-16 h-16 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Belum Ada Data Guru</h3>
        <p className="text-gray-500 text-sm">Tambahkan tenaga pendidik untuk mulai melihat data di sini</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          {/* Optional icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5v14"
            />
          </svg>
          Data Guru
        </h2>
      </div>

      {/* Table wrapper */}
      <div className="overflow-y-auto h-88">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Foto
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jabatan
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {images.map((item, index) => (
              <tr
                key={item.id}
                className={`transition-all duration-200 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-25"
                }`}
              >
                <td className="px-6 py-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={80}
                    className="rounded-lg object-cover border border-gray-200 shadow-sm w-50 h-30"
                    priority={index < 3}
                  />
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700 max-w-md">
                  <p className="font-medium">{item.description}</p>
                  {item.note && (
                    <p className="text-xs text-gray-500 italic">({item.note})</p>
                  )}
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  <div className="flex justify-center  items-center gap-2">
                    <EditButton id={item.id} />
                    <DeleteButton id={item.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-between text-sm text-gray-600">
        <span>Total: {images.length} guru</span>
        <span className="text-xs">Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</span>
      </div>
    </div>
  );
}

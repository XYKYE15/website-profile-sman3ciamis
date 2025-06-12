import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  DeleteButton,
  EditButton,
} from "@/components/CreateEkskul/button/button";
import { getImagesEkskul } from "@/lib/data";
import Link from "next/link";

const CardEkskul = async () => {
  const EkskulList = await getImagesEkskul();

  if (!EkskulList || EkskulList.length === 0) {
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
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          Belum Ada Data Ekstrakurikuler
        </h3>
        <p className="text-gray-500 text-sm">
          Tambahkan data ekskul untuk mulai menampilkannya di sini
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
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
              d="M3 5h12M9 3v2m6 4h6m-6 4h6m-6 4h6m-6 4h6"
            />
          </svg>
          Data Ekstrakurikuler
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-y-auto h-88">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gambar
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Ekskul
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sosial Media
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {EkskulList.map((data, index) => (
              <tr
                key={data.id}
                className={`hover:bg-gray-50 transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-25"
                }`}
              >
                <td className="px-6 py-3 text-center">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover border border-gray-300 shadow w-24 h-24 mx-auto"
                  />
                </td>
                <td className="px-6 py-3 text-center text-sm font-medium text-gray-800">
                  {data.name}
                </td>
                <td className="px-6 py-3 text-center text-sm text-gray-700">
                  <div className="flex flex-col items-center gap-2">
                    {data.tiktok && (
                      <Link
                        href={data.tiktok}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-3 py-1 text-white bg-pink-600 hover:bg-pink-500 rounded-full text-xs"
                      >
                        <FaTiktok className="w-4 h-4" /> TikTok
                      </Link>
                    )}
                    {data.instagram && (
                      <Link
                        href={data.instagram}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-3 py-1 text-white bg-purple-600 hover:bg-purple-500 rounded-full text-xs"
                      >
                        <AiFillInstagram className="w-4 h-4" /> Instagram
                      </Link>
                    )}
                  </div>
                </td>
                <td className="px-6 py-6 text-center space-x-2">
                  <div className="flex flex-col items-center">
                    <EditButton id={data.id} />
                    <DeleteButton id={data.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Total: {EkskulList.length} ekskul</span>
          <span className="text-xs">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardEkskul;

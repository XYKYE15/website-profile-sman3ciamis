import Image from "next/image";
import { getImagesAchievement } from "@/lib/data";
import {
  DeleteButton,
  EditButton,
} from "@/components/CreateAchievement/button/button";
import { JSX } from "react";

interface AchievementData {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
}

export default async function CardAchievement(): Promise<JSX.Element> {
  const images: AchievementData[] = await getImagesAchievement();

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
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          Belum Ada Data Pencapaian
        </h3>
        <p className="text-gray-500 text-sm">
          Mulai tambahkan pencapaian untuk melihat data di sini
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          Data Prestasi
        </h2>
      </div>

      {/* Table Container */}
      <div className="overflow-y-auto h-85">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gambar
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Judul Pencapaian
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deskripsi
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 h-full">
            {images.map((data, index) => (
              <tr
                key={data.id}
                className={`hover:bg-gray-50 transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-25"
                }`}
              >
                {/* Image */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative">
                    <Image
                      src={data.image}
                      alt={`Gambar prestasi: ${data.title}`}
                      width={80}
                      height={60}
                      className="rounded-lg object-cover shadow-sm border border-gray-200 w-50 h-30"
                      priority={index < 3}
                    />
                  </div>
                </td>

                {/* Title */}
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-5">
                      {data.title}
                    </h3>
                  </div>
                </td>

                {/* Description */}
                <td className="px-6 py-4">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-700 line-clamp-5 overflow-y-auto">
                      {data.description}
                    </p>
                  </div>
                </td>

                {/* Date Info */}
                <td className="px-6 py-4 text-xs text-gray-600">
                  <p>
                    Ditambahkan:{" "}
                    {new Date(data.createdAt).toLocaleDateString("id-ID", {
                      dateStyle: "medium",
                    })}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Jam:{" "}
                    {new Date(data.createdAt).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center space-x-2">
                  <div className="flex flex-col gap-2">
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
          <span>Total: {images.length} prestasi</span>
          <span className="text-xs">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}

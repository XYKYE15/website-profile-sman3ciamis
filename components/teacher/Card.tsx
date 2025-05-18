import { getImagesTeacher } from "@/lib/data";
import Image from "next/image";
import { EditButton, DeleteButton } from "../CreateTeacher/Button/button";

export default async function TeacherTable() {
  const images = await getImagesTeacher();
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow p-6">
      <h1 className="text-lg  font-bold mb-5">Data Guru</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Foto</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Nama</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Jabatan
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {images.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-3">
                <div className="w-30 h-30 rounded-full overflow-hidden border border-blue-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>
              <td className="px-4 py-3 text-sm font-medium w-60 text-gray-800 ">
                {item.title}
              </td>
              <td className="px-4 py-3 text-sm w-100 text-gray-700 ">
                <div className="line-clamp-5 overflow-y-auto">
                  <p className="font-medium">{item.description}</p>
                  {item.note && (
                    <p className="text-xs text-gray-500 italic">
                      ({item.note})
                    </p>
                  )}
                </div>
              </td>

              <td className="px-4 py-5 text-sm text-center space-x-2">
                <div>
                  <EditButton id={item.id} />
                  <DeleteButton id={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

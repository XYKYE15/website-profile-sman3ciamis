import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { DeleteButton } from "@/components/CreateEkskul/button/button";
import { getImagesEkskul } from "@/lib/data";

const CardEkskul = async () => {
  const EkskulList = await getImagesEkskul();
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow p-6 h-110">
      <h1 className="text-lg font-bold mb-5">Data Ekskul</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-center text-sm font-semibold">Foto</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">Ekskul</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">Sosial Media</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {EkskulList.map((data) => (
            <tr key={data.id}>
              <td className="py-1 flex justify-center">
                <div className="w-30 h-30 rounded-full overflow-hidden border border-blue-500">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>
              <td className="px-4 py-3 text-sm font-medium w-60 text-gray-800 text-center">
                {data.name}
              </td>
              <td className="px-4 py-3 text-sm w-50 text-gray-700 text-center">
                <div className="line-clamp-2 overflow-y-auto">
                  {data.tiktok && (
                    <p className="font-medium bg-blue-500 p-1 text-white rounded-lg mb-1 flex items-center justify-center gap-1">
                      <FaTiktok /><span>{data.tiktok}</span>
                    </p>
                  )}
                  {data.instagram && (
                    <p className="font-medium bg-blue-500 p-1 text-white rounded-lg flex items-center justify-center gap-1">
                      <AiFillInstagram /><span>{data.instagram}</span>
                    </p>
                  )}
                </div>
              </td>
              <td className="px-4 py-5 text-sm text-center space-x-2">
                <DeleteButton id={data.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardEkskul;

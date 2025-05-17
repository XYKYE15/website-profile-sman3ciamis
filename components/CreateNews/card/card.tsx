import CardBody from "./body/body";
import { getImages } from "@/lib/data";

export default async function CardNews() {
  const images = await getImages();
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr className="">
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Gambar
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Judul
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Deskripsi
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Aksi
            </th>
          </tr>
        </thead>
        {images.map((item) => (
            <CardBody key={item.id} data={item}/>
        ))}
      </table>
    </div>
  );
}

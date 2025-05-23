import { getImagesGallery } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { DeleteButton } from "../button/button";


const CardGalleryAdmin = async () => {
     const images = await getImagesGallery();
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow p-6 h-110">
      <h1 className="text-lg  font-bold mb-5">Gallery</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Foto</th>
            <th className="px-6 py-3 text-sm font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {images.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-3">
                <div className="w-30 h-30 rounded-full overflow-hidden border border-blue-500">
                  <Image
                    src={item.image}
                    alt="Gallery Image"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>

              <td className="py-5 text-sm text-center space-x-2">
                <div className="flex flex-col items-center justify-center">
                  <DeleteButton id={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardGalleryAdmin;

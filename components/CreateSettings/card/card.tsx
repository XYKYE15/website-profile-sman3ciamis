import Image from "next/image";
import React from "react";

const CardSettings = () => {
  return (
    <div className="h-full p-6 flex flex-col gap-6 overflow-y-auto bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Hero</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src="/hero.jpg"
            alt="Hero Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full md:w-1/2 h-60"
          />
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label className="text-sm text-gray-600">Judul</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1">
                <p className="text-gray-800">Judul di sini</p>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Deskripsi</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1">
                <p className="text-gray-800">Deskripsi di sini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Kontak</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">No Telp</h3>
            <p className="text-gray-600">08123456789</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Email</h3>
            <p className="text-gray-600">email@example.com</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Link Iframe Gmaps</h3>
            <p className="text-gray-600 break-all">
              https://maps.google.com/iframe-link
            </p>
          </div>
        </div>
      </section>

      {/* Media Sosial Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Media Sosial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Instagram</h3>
            <p className="text-gray-600">@namapengguna</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Youtube</h3>
            <p className="text-gray-600">Nama Channel</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Tiktok</h3>
            <p className="text-gray-600">@namapengguna</p>
          </div>
        </div>
      </section>

      {/* Link Video Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Link Video</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700 mb-1">YouTube / Vimeo</h3>
            <p className="text-gray-600 break-all">
              https://www.youtube.com/watch?v=example
            </p>
          </div>
          <div className="aspect-video w-full rounded-md overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/example"
              title="Embedded Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sejarah & Visi Misi Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Sejarah & Visi Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Sejarah</h3>
            <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">
              Tulis sejarah sekolah di sini...
            </p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Visi & Misi</h3>
            <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">
              Tulis visi dan misi sekolah di sini...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSettings;

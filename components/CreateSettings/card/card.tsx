import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { DeleteSettingButton, EditButtonSettings } from "../button/button";

function extractYouTubeVideoID(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }
    return null;
  } catch {
    return null;
  }
}

const CardSettings = async () => {
  const data = await prisma.setting.findFirst();

  if (!data) {
    return <p className="p-6 text-center text-gray-500">Data settings tidak ditemukan</p>;
  }

  const videoId = data.videoUrl ? extractYouTubeVideoID(data.videoUrl) : null;

  return (
    <div className="h-full p-6 flex flex-col gap-6 overflow-y-auto bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hero</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {data.imageHero ? (
            <Image
              src={data.imageHero}
              alt="Hero Image"
              width={300}
              height={200}
              className="rounded-xl object-cover w-full md:w-1/2 h-60"
            />
          ) : (
            <div className="w-full md:w-1/2 h-60 bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Tidak ada gambar</span>
            </div>
          )}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label className="text-sm text-gray-500">Judul</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1 text-base text-gray-800 leading-relaxed">
                {data.name}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500">Deskripsi</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1 text-base text-gray-800 leading-relaxed">
                {data.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "No Telp", value: data.phone },
            { label: "Email", value: data.email },
            { label: "Link Iframe Gmaps", value: data.gmapsLink },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow-sm break-words">
              <h3 className="font-medium text-gray-700">{item.label}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media Sosial Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Media Sosial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Instagram", value: data.instagram },
            { label: "YouTube", value: data.youtube },
            { label: "TikTok", value: data.tiktok },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow-sm ">
              <h3 className="font-medium text-gray-700">{item.label}</h3>
              <p className="text-gray-600 break-words">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Profil</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm break-words">
            <h3 className="font-medium text-gray-700 mb-1">URL Video</h3>
            <p className="text-blue-600">{data.videoUrl}</p>
          </div>
          {videoId ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Embedded Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="text-gray-500">Video tidak tersedia</p>
          )}
        </div>
      </section>

      {/* Sejarah, Visi, Misi, Tujuan Section */}
      {[
        { title: "Sejarah", value: data.sejarah },
        { title: "Visi", value: data.visi },
        { title: "Misi", value: data.misi },
        { title: "Tujuan", value: data.tujuan },
      ].map((item, idx) => (
        <section
          key={idx}
          className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
          <div className="prose prose-sm max-w-none bg-gray-100 rounded-md p-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {item.value}
          </div>
        </section>
      ))}

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 items-center">
        <EditButtonSettings id={data.id} />
        <DeleteSettingButton id={data.id}/>
      </div>
    </div>
  );
};

export default CardSettings;

import Image from "next/image";
import { prisma } from "@/lib/prisma";

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
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Hero</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {data.imageHero ? (
            <Image
              src={data.imageHero}
              alt="Hero Image"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full md:w-1/2 h-60"
            />
          ) : (
            <div className="w-full md:w-1/2 h-60 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label className="text-sm text-gray-600">Judul</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1">
                <p className="text-gray-800">{data.name}</p>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Deskripsi</label>
              <div className="bg-gray-100 rounded-md p-3 mt-1">
                <p className="text-gray-800">{data.description}</p>
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
            <p className="text-gray-600">{data.phone}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Email</h3>
            <p className="text-gray-600">{data.email}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm break-all">
            <h3 className="font-medium text-gray-700">Link Iframe Gmaps</h3>
            <p>{data.gmapsLink}</p>
          </div>
        </div>
      </section>

      {/* Media Sosial Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Media Sosial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Instagram</h3>
            <p className="text-gray-600">{data.instagram}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Youtube</h3>
            <p className="text-gray-600">{data.youtube}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700">Tiktok</h3>
            <p className="text-gray-600">{data.tiktok}</p>
          </div>
        </div>
      </section>

      {/* Link Video Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Link Video</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm break-all">
            <h3 className="font-medium text-gray-700 mb-1">YouTube / Vimeo</h3>
            <p>{data.videoUrl}</p>
          </div>
          {videoId ? (
            <div className="aspect-video w-full rounded-md overflow-hidden shadow-md">
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

      {/* Sejarah Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Sejarah</h2>
        <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">{data.sejarah}</p>
      </section>

      {/* Visi Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Visi</h2>
        <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">{data.visi}</p>
      </section>

      {/* Misi Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Misi</h2>
        <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">{data.misi}</p>
      </section>

      {/* Tujuan Section */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Tujuan</h2>
        <p className="bg-gray-100 rounded-md p-4 h-40 overflow-y-auto text-gray-600">{data.tujuan}</p>
      </section>
    </div>
  );
};

export default CardSettings;

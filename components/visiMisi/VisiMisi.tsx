import Image from "next/image";
import { getVisiMisiTujuan } from "@/lib/data";

const VisiMisi = async () => {
  const setting = await getVisiMisiTujuan();

  return (
    <div className="bg-white my-8 mx-auto w-full max-w-5xl p-6 rounded-xl border border-blue-500">
      {/* Gambar Hero */}
      <div className="mb-10 shadow-2xl h-80 rounded-2xl overflow-hidden border border-blue-500">
        <Image
          src={setting?.imageHero || "/hero.jpg"}
          width={800}
          height={400}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten Visi, Misi, Tujuan */}
      <div className="flex flex-col gap-6 text-blue-900 leading-relaxed">
        {/* Visi */}
        <div className="border border-blue-500 rounded-2xl p-6 bg-blue-50">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center mb-4">Visi</h2>
          <p className="text-justify whitespace-pre-line">{setting?.visi || "Belum tersedia."}</p>
        </div>

        {/* Misi */}
        <div className="border border-blue-500 rounded-2xl p-6 bg-blue-50">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center mb-4">Misi</h2>
          {setting?.misi ? (
            <ul className="pl-6 space-y-2 text-justify whitespace-pre-line">
              {setting.misi.split("\n").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          ) : (
            <p className="text-center">Belum tersedia.</p>
          )}
        </div>

        {/* Tujuan */}
        <div className="border border-blue-500 rounded-2xl p-6 bg-blue-50">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center mb-4">Tujuan</h2>
          <p className="text-justify whitespace-pre-line">{setting?.tujuan || "Belum tersedia."}</p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;

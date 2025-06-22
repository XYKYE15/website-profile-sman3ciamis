import Image from "next/image";
import { getSejarahSetting } from "@/lib/data";

const Sejarah = async () => {
  const setting = await getSejarahSetting();

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-5xl p-6 rounded-xl border border-blue-500 bg-white">
        {/* Gambar Hero */}
        <div className="mb-10 shadow-2xl h-80 rounded-2xl overflow-hidden border border-blue-500">
          <Image
            src={setting?.imageHero || "/hero.jpg"}
            width={800}
            height={400}
            alt="Hero Sejarah"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Sejarah */}
        <div className="border border-blue-500 rounded-2xl p-6 bg-blue-50 text-blue-900 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center mb-4">Sejarah</h2>
          <p className="text-justify whitespace-pre-line">
            {setting?.sejarah || "Sejarah belum tersedia."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;

import Image from "next/image";
import { getVisiMisiTujuan } from "@/lib/data"; // pastikan path sesuai struktur kamu

const VisiMisi = async () => {
  const setting = await getVisiMisiTujuan();

  return (
    <div className="bg-white my-5 mx-auto md:w-4/5 p-5 rounded-xl flex flex-col items-center justify-center">
      <div className="mb-10 shadow-2xl h-80 rounded-2xl w-full">
        <Image
          src={setting?.imageHero || "/hero.jpg"}
          width={300}
          height={200}
          alt="card image"
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {/* Visi */}
        <div className="border border-blue-500 rounded-2xl p-4">
          <h2 className="text-center text-xl font-semibold text-blue-800 mb-2">Visi:</h2>
          <p className="text-center text-blue-900 whitespace-pre-line">{setting?.visi || "Belum tersedia."}</p>
        </div>

        {/* Misi */}
        <div className="border border-blue-500 rounded-2xl p-4">
          <h2 className="text-center text-xl font-semibold text-blue-800 mb-2">Misi:</h2>
          {setting?.misi ? (
            <ol className="list-decimal list-inside text-blue-900 whitespace-pre-line">
              {setting.misi.split("\n").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ol>
          ) : (
            <p className="text-center">Belum tersedia.</p>
          )}
        </div>

        {/* Tujuan */}
        <div className="border border-blue-500 rounded-2xl p-4">
          <h2 className="text-center text-xl font-semibold text-blue-800 mb-2">Tujuan:</h2>
          <p className="text-center text-blue-900 whitespace-pre-line">{setting?.tujuan || "Belum tersedia."}</p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;

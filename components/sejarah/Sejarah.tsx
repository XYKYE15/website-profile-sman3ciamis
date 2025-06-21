// app/tentang/sejarah/page.tsx (atau file kamu yang menampilkan Sejarah)
import Image from "next/image";
import { getSejarahSetting } from "@/lib/data"; // pastikan path sesuai struktur kamu

const Sejarah = async () => {
  const setting = await getSejarahSetting();

  return (
    <div className="bg-white my-5 mx-auto md:w-250 w-110 p-5 rounded-xl flex flex-col items-center justify-center border border-blue-500">
      <div className="mb-10 shadow-2xl h-80 rounded-2xl">
        <Image
          src={setting?.imageHero || "/hero.jpg"}
          width={300}
          height={200}
          alt="card image"
          className="w-full h-full rounded-2xl object-cover border border-blue-500"
        />
      </div>

      <div className="border border-blue-500 rounded-2xl md:w-200 w-100 p-2">
        <p className=" leading-relaxed text-base text-blue-900 whitespace-pre-line text-center">
          {setting?.sejarah || "Sejarah belum tersedia."}
        </p>
      </div>
    </div>
  );
};

export default Sejarah;

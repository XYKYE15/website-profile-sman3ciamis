import Image from "next/image";

function VisiMisi() {
  return (
    <div className="bg-white my-5 mx-auto md:w-250 p-5 rounded-xl flex flex-col items-center justify-center">
      <div className="mb-10 shadow-2xl h-80 rounded-2xl">
        <Image
          src={"/hero.jpg"}
          width={300}
          height={200}
          alt="card image"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-blue-500 rounded-2xl w-230 p-2">
          <div className="">
            <h2 className="text-center text-xl font-semibold">Visi :</h2>
            <p className="text-center">
              &quot;Menjadi sekolah yang berprestasi, amanah, naik kualitasnya,
              gesit, kreatif, inovatif, dan taat akan nilai-nilai
              ke-Tuhanan.&quot;
            </p>
          </div>
        </div>
        <div className="border border-blue-500 rounded-2xl w-230 p-2">
          <div className="">
            <h2 className="text-center text-xl font-semibold">Visi :</h2>
            <div className="flex justify-center">
              <ol className="list-decimal list-inside text-justify">
                <li>
                  Mengembangkan sikap religius, disiplin, kreatif, proaktif, dan
                  inovatif
                </li>
                <li>Meningkatkan kualitas pembelajaran dan layanan sekolah</li>
                <li>
                  Menumbuhkan semangat kebersamaan dengan semua stakeholder.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="border border-blue-500 rounded-2xl w-230 p-2">
          <div className="">
            <h2 className="text-center text-xl font-semibold">Tujuan :</h2>
            <p className="text-center">
              &quot;Menjadi sekolah yang unggul dan berkualitas, serta mampu
              menghasilkan lulusan yang kompeten dan berintegritas.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;

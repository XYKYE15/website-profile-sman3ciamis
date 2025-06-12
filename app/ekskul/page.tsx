// app/ekskul/page.tsx
import { prisma } from "@/lib/prisma";
import EkskulCard from "@/components/ekskul/Ekskul";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ekstrakurikuler SMAN 3 Ciamis",
};

const PageEkskul = async () => {
  const ekskullist = await prisma.ekskul.findMany();

  return (
    <div className="pt-30 pb-15 flex flex-col items-center min-h-screen">
      <div className="md:mx-10 mx-3 my-5">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-10 text-center">
          Ekstrakurikuler SMAN 3 Ciamis
        </h1>
        <div className=" bg-white md:p-10 p-2 rounded-2xl md:w-230 w-auto shadow-lg border border-blue-500">
          <div className="grid md:grid-cols-2 grid-cols-1">
            {ekskullist.map((ekskul) => (
              <EkskulCard
                key={ekskul.id}
                name={ekskul.name}
                image={ekskul.image}
                instagram={ekskul.instagram ?? undefined}
                tiktok={ekskul.tiktok ?? undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEkskul;

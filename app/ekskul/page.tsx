import EkskulCard from "@/components/ekskul/Ekskul";
import { Ekskul } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";


const PageEkskul = async () => {
  const ekskullist: Ekskul[] = await prisma.ekskul.findMany({});
  return (
    <div className="flex flex-col pt-30 md:flex-row justify-center">
      <div className="md:mx-10 mx-3">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-10 text-center">
          Ekstrakulikuler SMAN 3 Ciamis
        </h1>
        <div className="bg-white md:p-10 p-2 rounded-2xl md:w-210 w-auto mb-5 shadow-lg border border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ekskullist.map((ekskul) => (
              <EkskulCard key={ekskul.id} data={ekskul}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEkskul;

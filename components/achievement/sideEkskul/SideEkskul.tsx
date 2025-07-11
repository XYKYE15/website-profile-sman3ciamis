import SideLinkClient from "./SideEkskulLink";
import { getEkskul } from "@/lib/data";

async function SideEkskul() {
  const ekskulList = await getEkskul();

  return (
    <div className="min-h-35 mt-10 flex flex-col items-center">
      <div className="bg-white py-2 w-80 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-2">
        <h3 className="text-blue-900 text-xl font-semibold">Ekstrakurikuler</h3>
      </div>
      <SideLinkClient ekskulList={ekskulList} />
    </div>
  );
}

export default SideEkskul;

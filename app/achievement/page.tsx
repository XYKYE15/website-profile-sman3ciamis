import Card from "../../components/achievement/card/Card";
import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import SideNews from "@/components/achievement/sideNews/SideNews";
import { getImagesAchievement} from "@/lib/data";
import Pagination from "@/components/pagination/Pagination";

export default async function PageAchievement() {
    const images = await getImagesAchievement();
  return (
      <div className="flex flex-col md:flex-row justify-center py-30">
      <div className="mx-10">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-7 text-center ">
          Prestasi SMAN 3 Ciamis
        </h1>
        {images.map((item) => (
          <Card key={item.id} data={item}/>
        ))}
        <Pagination />
      </div>
      <div className="mx-5 text-center md:w-85 p-5">
        <SideEkskul />
        <div className="bg-white py-2 w-65 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto">
          <h3 className="text-blue-900 text-xl font-semibold">Berita</h3>
        </div>
        <SideNews />
        <SideNews />
      </div>
    </div>
  );
}

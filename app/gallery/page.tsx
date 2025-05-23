
import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import SideNews from "@/components/sideAchievement/SideAchievement";
import Gallery from "@/components/gallery/Gallery";
import Pagination from "@/components/pagination/Pagination";

function PageGallery() {
  return (
    <div className="flex flex-col pt-30 md:flex-row justify-center">
      <div className="md:mx-10 mx-3">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-7 text-center ">
          Foto Random SMAN 3 Ciamis
        </h1>
        <div className="bg-white md:p-10 p-5  rounded-2xl md:w-211 w-auto mb-5 shadow-lg border  border-blue-500">
          <div className="grid grid-cols-3 md:gap-4 gap-2">
            <Gallery/>
            <Gallery/>
            <Gallery/>
            <Gallery/>
            <Gallery/>
            <Gallery/>
          </div>
        </div>
            <Pagination/>
      </div>
      <div className="mx-5 md:my-18 text-center md:w-85 p-5">
        <SideEkskul />
        <div className="bg-white w-65 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto">
          <h3 className="text-blue-900 text-xl font-semibold p-2">Berita</h3>
        </div>
        <SideNews />
        <SideNews />
        <SideNews />
      </div>
    </div>
  );
}

export default PageGallery;

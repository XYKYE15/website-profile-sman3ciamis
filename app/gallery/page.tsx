import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import Gallery from "@/components/gallery/Gallery";
import Pagination from "@/components/pagination/Pagination";
import SideNews from "@/components/sideNews/SideNews";
import { getImages, getImagesGallery } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Random SMAN 3 Ciamis",
};

interface PageGalleryProps {
  searchParams: Promise<{ page?: string }>;
}

async function PageGallery({ searchParams }: PageGalleryProps) {
  const sp = await searchParams; // await karena searchParams Promise
  const page = parseInt(sp.page ?? "1", 10);
  const perPage = 8;

  const allNews = await getImages();
  const allGallery = await getImagesGallery();
  const totalPages = Math.ceil(allGallery.length / perPage);
  const paginatedGallery = allGallery.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="flex flex-col pt-30 md:flex-row justify-center">
      <div className="md:mx-10 mx-3">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-10 text-center ">
          Foto Random SMAN 3 Ciamis
        </h1>
        <div className="bg-white md:p-10 p-2 rounded-2xl max-w-6xl mx-auto mb-5 shadow-lg border border-blue-500">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {paginatedGallery.map((item) => (
              <div key={item.id} className="flex justify-center">
                <Gallery imageUrl={item.image} />
              </div>
            ))}
          </div>
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/gallery"
        />
      </div>
      <div className="mx-5 md:my-9 text-center md:w-85">
        <SideEkskul />
        <div className="bg-white md:w-65 w-80 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto">
          <h3 className="text-blue-900 text-xl font-semibold p-2">Berita</h3>
        </div>
        {allNews.slice(0, 2).map((item) => (
          <SideNews key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PageGallery;

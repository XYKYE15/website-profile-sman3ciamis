import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import CardNews from "@/components/news/Card";
import { getImages, getImagesAchievement } from "@/lib/data";
import Pagination from "@/components/pagination/Pagination";
import SideAchievement from "@/components/sideAchievement/SideAchievement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita SMAN 3 Ciamis",
};

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function PageNews({ searchParams }: PageProps) {
  const { page: pageStr = "1" } = await searchParams;

  const page = parseInt(pageStr, 10);
  const perPage = 3;

  const allNews = await getImages();
  const allAchievement = await getImagesAchievement();

  const totalPages = Math.ceil(allNews.length / perPage);
  const paginatedNews = allNews.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex flex-col md:flex-row justify-center py-30">
      {/* Bagian Kiri - Berita */}
      <div className="mx-10">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-7 text-center">
          Berita Random SMAN 3 Ciamis
        </h1>

        {paginatedNews.map((item) => (
          <CardNews key={item.id} data={item} />
        ))}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/news"
        />
      </div>

      {/* Bagian Kanan - Side Panel */}
      <div className="mx-5 text-center md:w-85 p-5">
        <SideEkskul />

        <div className="bg-white py-2 md:w-65 w-80 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto p-5">
          <h3 className="text-blue-900 text-xl font-semibold">Prestasi</h3>
        </div>

        {allAchievement.slice(0, 2).map((item) => (
          <SideAchievement key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

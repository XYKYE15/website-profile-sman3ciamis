import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import SideNews from "@/components/achievement/sideNews/SideNews";
import CardNews from "@/components/news/Card";
import { getImages } from "@/lib/data"; // Ambil semua berita (array)
import Pagination from "@/components/pagination/Pagination";

interface PageNewsProps {
  searchParams?: {
    page?: string;
  };
}

export default async function PageNews({ searchParams }: PageNewsProps) {
  const page = parseInt(searchParams?.page ?? "1", 10); // default page 1
  const perPage = 3;

  const allNews = await getImages(); 
  const totalPages = Math.ceil(allNews.length / perPage);
  const paginatedNews = allNews.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex flex-col md:flex-row justify-center py-30">
      <div className="mx-10">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-7 text-center">
          Berita Random SMAN 3 Ciamis
        </h1>

        {paginatedNews.map((item) => (
          <CardNews key={item.id} data={item} />
        ))}

        <Pagination currentPage={page} totalPages={totalPages} basePath="/news" />
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

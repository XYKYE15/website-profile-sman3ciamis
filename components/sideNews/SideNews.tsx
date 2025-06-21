import Link from "next/link";
import Image from "next/image";
import { News } from "@/lib/generated/prisma";

const SideNews = ({ data }: { data: News }) => {
  if (!data) return null;

  return (
    <div className="w-full flex justify-center mb-6">
      <Link
        href={`/news/detail/${data.id}`}
        className="bg-white rounded-xl border border-blue-500 w-full max-w-xs sm:max-w-sm md:max-w-[15rem] shadow-lg hover:shadow-md transition-all"
      >
        <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover border-b border-blue-500"
          />
        </div>
        <div className="p-3">
          <h2 className="text-sm font-semibold text-blue-900 line-clamp-2">
            {data.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default SideNews;

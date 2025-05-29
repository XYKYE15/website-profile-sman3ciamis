
import Image from "next/image";
import Link from "next/link";
import type { News } from "@/lib/generated/prisma";

const CardNews = ({ data }: { data: News }) => {
  return (
    <Link
      href={`/news/detail/${data.id}`}
      className="bg-white min-w-50 mb-5 gap-5 flex mx-auto md:flex-row flex-col p-5 rounded-2xl md:w-auto w-100 shadow-lg hover:shadow-sm border border-blue-500"
    >
      <div className="border-2 border-blue-500 w-full ">
        <Image
          src={data.image}
          width={300}
          height={200}
          alt={data.title}
          className="h-45 w-75"
        />
      </div>
      <div className="my-4 h-30">
        <div className="md:w-120 h-8 mb-3 line-clamp-1">
          <h1 className="font-semibold text-xl">{data.title}</h1>
        </div>
        <div className="md:w-120 h-25 line-clamp-4">
          <p className="">{data.description}</p>
        </div>
      </div>
    </Link>
  );
};
export default CardNews;

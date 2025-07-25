import Image from "next/image";
import Link from "next/link";
import type { News } from "@/lib/generated/prisma";

const CardNewsHome = ({ data }: { data: News }) => {
  return (
    <div className="">
      <div
        className="h-[250px] w-auto relative mb-3 overflow-hidden px-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Image
          src={data.image}
          width={300}
          height={300}
          alt={data.title}
          className="object-center w-full h-full rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div
          className="text-xl font-medium text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h1 className="line-clamp-1">{data.title}</h1>
        </div>

        <div
          className="px-20 py-2.5 md:px-10 mx-auto centerfont-semibold text-white rounded-sm bg-blue-500 hover:bg-blue-400 transition duration-150 shadow-lg"
          data-aos="flip-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <Link href={`/news/detail/${data.id}`}>Cek Selengkapnya</Link>
        </div>
      </div>
    </div>
  );
};

export default CardNewsHome;

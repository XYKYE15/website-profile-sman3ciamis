import { Achievement } from "@/lib/generated/prisma";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }: { data: Achievement }) => {
  return (
    <Link
      href={`/achievement/detail/${data.id}`}
      className="bg-white min-w-50 mb-5 gap-5 flex mx-auto md:flex-row flex-col p-5 rounded-2xl md:w-auto w-100 shadow-lg hover:shadow-sm border border-blue-500"
    >
      <div className="border-2 border-blue-500 md:w-50 md:h-50 h-50">
        <Image src={data.image} width={300} height={200} alt="card image"  className="w-full h-full"/>
      </div>
      <div className="my-4 h-30">
        <div className="md:w-120 h-8 mb-3 line-clamp-1">
          <h1 className="font-semibold text-xl">
            {data.title}
          </h1>
        </div>
        <div className="md:w-120 h-25 line-clamp-4">
          <p>
            {data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
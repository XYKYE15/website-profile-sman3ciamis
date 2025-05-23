import Link from "next/link";
import Image from "next/image";
import { Achievement } from "@/lib/generated/prisma";

const SideAchievement = ({ data }: { data: Achievement }) => {
  if (!data) return null;
  {
    return (
      <div className="min-h-35 flex flex-col items-center">
        <Link
          href={`/achievement/detail/${data.id}`}
          className="bg-white rounded-xl border border-blue-500 mb-10 flex flex-col items-center justify-center w-60 h-60 mx-auto shadow-lg hover:shadow-sm"
        >
          <Image
            src={data.image}
            width={200}
            height={150}
            alt={data.title}
            className="border border-blue-500 w-50 h-35"
          ></Image>
          <h2 className="line-clamp-2 text-ellipsis min-h-1 font-semibold mt-5">
            {data.title}
          </h2>
        </Link>
      </div>
    );
  }
};

export default SideAchievement;

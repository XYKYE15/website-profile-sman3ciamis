import SideEkskul from "@/components/achievement/sideEkskul/SideEkskul";
import SideAchievement from "@/components/sideAchievement/SideAchievement";
import Image from "next/image";
import { getImagesAchievement, getImagesById } from "@/lib/data";
import { notFound } from "next/navigation";

const Details = async ({ params }: { params: { id: string } }) => {
  const allAchievement = await getImagesAchievement();
  const data = await getImagesById(params.id);
  if (!data) return notFound();
  return (
    <div className="flex flex-col pt-30 md:flex-row justify-center">
      <div className="md:mx-10 mx-5">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-15 text-center md:w-210 bg-white border-t-5 border-blue-500 rounded-b-xl p-5">
          {data.title}
        </h1>
        <div className="bg-white mb-5 gap-5 flex mx-auto flex-col p-5 rounded-2xl md:w-211 w-77 shadow-lg border border-blue-500 ">
          <div className="border-2 border-blue-500 md:w-full md:h-150">
            <Image
              src={data.image}
              width={300}
              height={200}
              alt="card image"
              className="md:w-full md:h-full object-center h-50"
            />
          </div>
          <div className="md:w-auto prose prose-sm md:prose-base max-w-none whitespace-pre-line">
            {data.description}
          </div>
        </div>
      </div>
      <div className="mx-5 md:my-18 text-center md:w-85 p-5">
        <SideEkskul />
        <div className="bg-white w-65 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto">
          <h3 className="text-blue-900 text-xl font-semibold">Prestasi</h3>
        </div>
        {allAchievement.slice(0, 2).map((item) => (
          <SideAchievement key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Details;

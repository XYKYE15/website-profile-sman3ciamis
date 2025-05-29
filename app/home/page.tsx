import Other from "@/components/home/other/Other";
import CardSlider from "../../components/home/slider/CardSlider";
import Contact from "../../components/footer/Contact";
import CardNewsHome from "@/components/home/card/Card";
import { News, Achievement } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import VideoSection from "@/components/home/video/video";

const PageHome = async () => {
  const newsList: News[] = await prisma.news.findMany({
    orderBy: { createdAt: "desc" }, // misalnya urut berdasarkan terbaru
    take: 3, // ambil 3 berita terbaru
  });

  
  const achievementList: Achievement[] = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
    take: 5, // ambil 5 prestasi terbaru, bisa disesuaikan
  });


  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-20 bg-gray-100">
      <h1 className="text-2xl font-semibold text-blue-900 text-center mt-10">
        Berita Terbaru
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-15 md:gap-0">
        {newsList.map((news) => (
          <CardNewsHome key={news.id} data={news} />
        ))}
      </div>
      <div className="my-30 md:my-20">
        <Other />
      </div>

      <CardSlider data={achievementList} />
      <VideoSection/>
      <Contact />
    </div>
  );
};
export default PageHome;

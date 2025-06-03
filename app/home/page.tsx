import Other from "@/components/home/other/Other";
import CardSlider from "@/components/home/slider/CardSlider";
import Contact from "@/components/footer/Contact";
import CardNewsHome from "@/components/home/card/Card";
import VideoSection from "@/components/home/video/video";
import { News, Achievement } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";

function extractYouTubeVideoID(url: string | null) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }
    return null;
  } catch {
    return null;
  }
}

const PageHome = async () => {
  const newsList: News[] = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const achievementList: Achievement[] = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const setting = await prisma.setting.findFirst();

  const videoId = extractYouTubeVideoID(setting?.videoUrl || "") || null;
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-20 bg-gray-100">
      <h1
        className="text-2xl font-semibold text-blue-900 text-center mt-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
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

      {embedUrl ? (
        <VideoSection videoUrl={embedUrl} />
      ) : (
        <p className="text-center text-gray-500">
          Video profil belum tersedia.
        </p>
      )}

      <Contact />
    </div>
  );
};

export default PageHome;

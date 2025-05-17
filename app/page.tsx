import Hero from "@/components/hero/Hero";
import PageHome from "@/app/home/page";

export default function Home() {
  return (
    <div className="max-h-screen-2xl">
      <Hero />
      <div className=" min-h-screen w-full">
      <PageHome />
      </div>
      </div>
  );
}

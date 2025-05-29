import Hero from "@/components/hero/Hero";
import PageHome from "@/app/home/page";

export default function Home() {
  return (
    <div className="max-h-screen-lg w-full bg-amber-500">
      <Hero />
      <div className="min-h-screen">
        <PageHome />
      </div>
    </div>
  );
}

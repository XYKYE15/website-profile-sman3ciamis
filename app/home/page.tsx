import Card from "@/components/home/card/Card";
import Other from "@/components/home/other/Other";
import CardSlider from "../../components/home/slider/CardSlider";
import Contact from "../../components/footer/Contact";

const PageHome = () => {
  return (
    <div className="w-full py-10 flex flex-col gap-20">
      <h1 className="text-2xl font-semibold text-blue-900 text-center mt-10">
        Berita Terbaru
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-15 md:gap-0">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="my-30 md:my-20">
        <Other />
      </div>
      <CardSlider/>
      <Contact/>
      </div>
  );
};
export default PageHome;

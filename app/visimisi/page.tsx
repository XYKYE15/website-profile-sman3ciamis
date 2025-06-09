import VisiMisi from "@/components/visiMisi/VisiMisi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visi & Misi SMAN 3 Ciamis",
};

function page() {
  return (
    <div className="py-25 flex justify-center items-center w-full">
      <div className=" w-300 my-10">
        <h1 className="text-center text-xl font-semibold mb-7">Visi & Misi</h1>
        <VisiMisi />
      </div>
    </div>
  );
}

export default page;

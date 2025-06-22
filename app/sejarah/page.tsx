import Sejarah from "@/components/sejarah/Sejarah"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sejarah SMAN 3 Ciamis",
};

function PageSejarah() {
  return (
    <div className="py-25">
        <div className="mx-auto md:w-300 my-10">
            <h1 className="text-center text-xl font-semibold text-blue-900">Sejarah SMAN 3 Ciamis</h1>
        </div>
      <Sejarah/>
    </div>
  )
}

export default PageSejarah;

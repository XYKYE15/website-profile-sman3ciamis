import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

const EkskulCard = () => {
  return (
    <div className="flex w-95">
      <Image
        src="/ekskul.jpg"
        width={800}
        height={600}
        alt="Ekstrakulikuler SMAN 3 Ciamis"
        className="w-30 h-30 rounded-lg bg-gray-200"
      />
      <div className=" flex flex-col p-2 w-full">
        <h2>PMR</h2>
        <div className="flex justify-center gap-2 mt-1 mr-15">
          <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg text-white">
            <FaTiktok size={22} />
          </div>
          <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg text-white">
            <AiFillInstagram size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkskulCard;

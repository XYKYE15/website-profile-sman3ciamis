import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

type EkskulCardProps = {
  name: string;
  image: string;
  instagram?: string;
  tiktok?: string;
};

const EkskulCard = ({ name, image, instagram, tiktok }: EkskulCardProps) => {
  return (
    <div className=" my-3 md:w-100">
      <div className="flex">
        <div className="w-70 h-40">
          <Image
            src={image}
            width={800}
            height={800}
            alt={name}
            className="w-full h-full rounded-lg bg-gray-200 border border-blue-500"
          />
        </div>
        <div className="w-full">
          <h2 className="font-semibold mb-3 mx-3 my-6">{name}</h2>
          <div className="flex gap-2 mx-6">
            {tiktok && (
              <a
                href={tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg text-white"
              >
                <FaTiktok size={22} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg text-white"
              >
                <AiFillInstagram size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkskulCard;

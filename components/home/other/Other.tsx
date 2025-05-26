import Link from "next/link";
import { FaImages } from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";

const Other = () => {
  return (
    <div className=" w-full md:bg-blue-500 flex justify-center items-center md:shadow-xl h-5 text-xl">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        <Link
          href={"/gallery"}
          className="bg-white hover:bg-gray-50 py-5 px-20  rounded-lg font-semibold shadow-xl hover:shadow-sm text-blue-900 space-x-2 flex flex-col items-center mx-5"
        >
          <FaImages size={30} />
          <span>Galeri</span>
        </Link>

        <Link
          href={"/ekskul"}
          className="bg-white hover:bg-gray-50  py-6 px-20 rounded-lg font-semibold shadow-xl hover:shadow-sm text-blue-900 space-x-2 flex flex-col items-center mr-5"
        >
          <IoFootballSharp size={30} />
          <span>Ekskul</span>
        </Link>

        <Link
          href={"/teacher"}
          className="bg-white hover:bg-gray-50  py-5 px-10   rounded-lg font-semibold shadow-xl hover:shadow-sm text-blue-900 space-x-2 flex flex-col items-center col-span-2  md:col-span-1 mx-5"
        >
          <FaUserGroup size={30} />
          <span>Tenaga Pendidikan</span>
        </Link>
      </div>
    </div>
  );
};
export default Other;

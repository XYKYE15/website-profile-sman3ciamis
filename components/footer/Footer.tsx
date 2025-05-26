import Link from "next/link";
import { TfiReload } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="">
      <div className="bg-blue-500 shadow-lg py-5">
        <div className=" md:max-w-screen-xl py-5 mx-auto bg-white rounded-lg shadow-2xl w-100  md:w-full">
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-10 md:gap-0">
            <div className="md:border-3 border-3 border-blue-500 h-90 w-85 md:min-w-100 rounded-2xl flex flex-col items-center py-10  mx-auto">
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/assets/logoSmantic.png"
                  width={75}
                  height={75}
                  alt="Flowbite Logo"
                  className="mr-1"
                  priority
                />
                <h2 className="flex flex-col items-center text-2xl uppercase font-semibold text-blue-900 leading-6 ">
                  SMAN 3<span>Ciamis</span>
                </h2>
              </Link>
              <div className="md:w-90 mx-auto border-b-3 border-blue-900 p-2 md:text-lg mt-5 md:10 text-lg text-center w-70 md:min-w-0">
                <h3 className="text-blue-900 font-medium">
                  Jl. Bojonghuni No.87, Maleber, Kec. Ciamis, Kabupaten Ciamis,
                  Jawa Barat 46214
                </h3>
              </div>
                <div className="mx-auto md:w-100 w-60 mt-5 px-10 min-w-full md:min-w-0">
                  <p className="flex items-center gap-2 text-blue-900 font-medium">
                    <FaPhone size={20}/>
                    <span>0812-3456-7890</span>
                  </p>
                  <p className="flex items-center gap-2 text-blue-900 font-medium">
                    <MdEmail size={20}/>
                    <span>smaan3Ciamis@gmail.com</span>
                  </p>
                </div>
            </div>

            <div className="md:border-3 border-3 border-blue-500 h-90 w-85 md:min-w-100 rounded-2xl flex flex-col items-center gap-5 md:gap-0 mx-auto">
              <h2 className="my-2 text-center font-semibold text-2xl text-blue-900">
                Tentang Kami
              </h2>
              <div className="md:border-3 border-3 border-blue-500 mt-5 rounded-2xl md:h-65 md:w-95 w-75 h-60 mx-auto flex flex-col justify-center gap-5">
                <Link
                  href={"/sejarah"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center space-x-2"
                >
                  <TfiReload />
                  <span>sejarah</span>
                </Link>
                <Link
                  href={"/visimisi"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center space-x-2"
                >
                  <FaEye />
                  <span>Visi dan Misi</span>
                </Link>
              </div>
            </div>
            <div className="md:border-3 border-3 border-blue-500 h-90 w-85 md:w-100 rounded-2xl flex flex-col items-center gap-5 md:gap-0 mx-auto">
              <h2 className="my-2 text-center font-semibold text-2xl text-blue-900">
                Hubungi Kami :
              </h2>
              <div className="md:border-3 border-3 border-blue-500 mt-5 rounded-2xl md:h-65 md:w-95 w-75 h-60 mx-auto flex flex-col justify-center gap-5">
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <AiFillInstagram size={22} />
                  Instagram
                </Link>
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <FaYoutube size={22} />
                  Youtube
                </Link>
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <FaTiktok size={22} />
                  Tiktok
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl py-5 text-center text-base font-bold bg-white text-blue-900 items-center">
        &copy;Copyright 2025 | SMAN 3 Ciamis
      </div>
    </footer>
  );
}

export default Footer;

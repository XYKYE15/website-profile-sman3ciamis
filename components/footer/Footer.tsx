import Link from "next/link";
import { TfiReload } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <div className="bg-blue-500 shadow-lg py-5">
        <div className=" md:max-w-screen-lg  py-10 mx-auto bg-white rounded-lg shadow-2xl w-85  md:w-full">
          <div className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-10 md:gap-0">
            <div className="md:border-3 border-3 border-blue-500 h-90 w-72 md:min-w-100 rounded-2xl flex flex-col items-center gap-5 md:gap-0 mx-auto">
              <h2 className="my-2 text-center font-semibold text-2xl text-blue-900">
                Tentang Kami
              </h2>
              <div className="md:border-3 border-3 border-blue-500 mt-5 rounded-2xl md:h-65 md:w-95 w-60 h-60 mx-auto flex flex-col justify-center gap-5">
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
            <div className="md:border-3 border-3 border-blue-500 h-90 w-72 md:w-100 rounded-2xl flex flex-col items-center gap-5 md:gap-0 mx-auto">
              <h2 className="my-2 text-center font-semibold text-2xl text-blue-900">
                Hubungi Kami :
              </h2>
              <div className="md:border-3 border-3 border-blue-500 mt-5 rounded-2xl md:h-65 md:w-95 w-60 h-60 mx-auto flex flex-col justify-center gap-5">
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <AiFillInstagram size={22}/>
                  Instagram
                </Link>
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <FaYoutube size={22}/>
                  Youtube
                </Link>
                <Link
                  href={"/"}
                  className="bg-blue-500 hover:bg-blue-400 w-50 h-10 mx-auto rounded-2xl text-white flex justify-center items-center gap-2"
                >
                  <FaTiktok size={22}/>
                  Tiktok
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl py-5 text-center text-base font-bold  text-blue-900 items-center">
        &copy;Copyright 2025 | SMAN 3 Ciamis
      </div>
    </footer>
  );
}

export default Footer;

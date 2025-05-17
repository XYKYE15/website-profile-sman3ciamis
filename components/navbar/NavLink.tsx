"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { HiMiniTrophy } from "react-icons/hi2";
import { HiNewspaper } from "react-icons/hi2";

function Navlink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {!isOpen ? <IoMenu size={30} /> : <IoClose size={24} />}
      </button>

      <div
        className={clsx(
          "absolute top-full py-2 px-5 left-0 bg-slate-100 w-full shadow-lg md:shadow-none md:space-x-6 spa md:bg-transparent md:static md:flex",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul className="md:flex gap-5 text-blue-900 md:text-white font-semibold">
          <li className="my-3 ">
            <Link href="/" className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl">
              <GoHomeFill />
              Beranda
            </Link>
          </li>

          <li className="my-3">
            <Link href="/achievement" className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl">
              <HiMiniTrophy />
              Prestasi
            </Link>
          </li>

          <li className="my-3">
            <Link href="/news" className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl">
              <HiNewspaper />
              Berita
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navlink;

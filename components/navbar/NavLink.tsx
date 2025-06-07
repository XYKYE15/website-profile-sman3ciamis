"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { HiMiniTrophy, HiNewspaper } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";

function Navlink() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          "absolute top-full py-2 px-5 left-0 bg-slate-100 w-full shadow-lg md:shadow-none md:space-x-6 md:bg-transparent md:static md:flex",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul className="md:flex gap-5 text-blue-900 md:text-white font-semibold">
          <li className="my-3">
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl"
            >
              <GoHomeFill />
              Beranda
            </Link>
          </li>

          <li className="my-3">
            <Link
              href="/achievement"
              className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl"
            >
              <HiMiniTrophy />
              Prestasi
            </Link>
          </li>

          <li className="my-3">
            <Link
              href="/news"
              className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl"
            >
              <HiNewspaper />
              Berita
            </Link>
          </li>

          {/* Dropdown Profil */}
          <li className="relative my-3">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:bg-gray-600/30 md:p-3 p-2 transition ease-in duration-300 rounded-xl w-full md:w-auto"
            >
              <span>Profil</span>
              <FaChevronDown size={14} />
            </button>

            <ul
              className={clsx(
                "md:absolute md:top-full md:left-0 md:bg-white md:text-blue-900 md:shadow-lg md:rounded-md md:min-w-[150px] overflow-hidden transition-all duration-300",
                {
                  hidden: !isDropdownOpen && !isOpen,
                  "block md:block": isDropdownOpen,
                }
              )}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <li>
                <Link
                  href="/sejarah"
                  className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-gray-200"
                >
                  Sejarah
                </Link>
              </li>
              <li>
                <Link
                  href="/visimisi"
                  className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-gray-200"
                >
                  Visi & Misi
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navlink;

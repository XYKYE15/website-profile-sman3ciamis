"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { HiMiniTrophy, HiNewspaper } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

function Navlink() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {/* Toggle Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose size={28} /> : <IoMenu size={30} />}
      </button>

      {/* Navigation Links */}
      <div
        className={clsx(
          "absolute top-full left-0 w-full bg-white text-blue-900 shadow-md px-4 py-4 z-50 transition-all duration-300 md:static md:flex md:bg-transparent md:text-white md:shadow-none md:items-center md:px-0 md:py-0",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:gap-5 font-semibold">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-blue-100 md:hover:bg-white/20 md:text-white p-2 rounded-lg transition"
            >
              <GoHomeFill size={20} />
              Beranda
            </Link>
          </li>

          <li>
            <Link
              href="/achievement"
              className="flex items-center gap-2 hover:bg-blue-100 md:hover:bg-white/20 md:text-white p-2 rounded-lg transition"
            >
              <HiMiniTrophy size={20} />
              Prestasi
            </Link>
          </li>

          <li>
            <Link
              href="/news"
              className="flex items-center gap-2 hover:bg-blue-100 md:hover:bg-white/20 md:text-white p-2 rounded-lg transition"
            >
              <HiNewspaper size={20} />
              Berita
            </Link>
          </li>

          {/* Dropdown Profil */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:bg-blue-100 md:hover:bg-white/20 md:text-white p-2 rounded-lg transition w-full md:w-auto"
            >
              <span>Profil</span>
              <FaChevronDown size={16} />
            </button>

            <ul
              className={clsx(
                "md:absolute md:top-full md:left-0 md:bg-white md:text-blue-900 md:shadow-lg md:rounded-md overflow-hidden transition-all duration-200 mt-2 md:mt-0",
                {
                  hidden: !isDropdownOpen,
                  "block": isDropdownOpen,
                }
              )}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <li>
                <Link
                  href="/sejarah"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sejarah
                </Link>
              </li>
              <li>
                <Link
                  href="/visimisi"
                  className="block px-4 py-2 hover:bg-gray-100"
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

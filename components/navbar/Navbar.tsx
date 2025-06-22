"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoMenuSharp,
  IoCloseSharp,
  IoChevronDownSharp,
  IoHomeSharp,
  IoTrophySharp,
  IoNewspaperSharp,
  IoImagesSharp,
  IoInformationCircleSharp,
  IoTimeSharp,
  IoBulbSharp,
} from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowMobileSubmenu(false);
    setShowDropdown(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 z-50 shadow-xl">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 md:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logoSmantic.png"
            width={50}
            height={50}
            alt="Logo"
            priority
          />
          <h2 className="flex flex-col leading-tight text-white font-semibold uppercase text-sm sm:text-base md:text-xl lg:text-2xl">
            SMAN 3 <span>Ciamis</span>
          </h2>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoCloseSharp size={28} /> : <IoMenuSharp size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 relative">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:bg-blue-400 hover:text-blue-100 px-3 py-1 rounded-md transition"
          >
            <IoHomeSharp className="text-inherit" />
            Beranda
          </Link>

          <Link
            href="/achievement"
            className="flex items-center gap-2 text-white hover:bg-blue-400 hover:text-blue-100 px-3 py-1 rounded-md transition"
          >
            <IoTrophySharp className="text-inherit" />
            Prestasi
          </Link>

          <Link
            href="/news"
            className="flex items-center gap-2 text-white hover:bg-blue-400 hover:text-blue-100 px-3 py-1 rounded-md transition"
          >
            <IoNewspaperSharp className="text-inherit" />
            Berita
          </Link>

          <Link
            href="/gallery"
            className="flex items-center gap-2 text-white hover:bg-blue-400 hover:text-blue-100 px-3 py-1 rounded-md transition"
          >
            <IoImagesSharp className="text-inherit" />
            Galeri
          </Link>

          {/* Dropdown Tentang Kami */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-2 text-white hover:bg-blue-400 hover:text-blue-100 px-3 py-1 rounded-md transition"
            >
              <IoInformationCircleSharp className="text-inherit" />
              Tentang Kami
              <IoChevronDownSharp
                className={`ml-1 transform transition duration-200 ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 min-w-[180px] z-50">
                <Link
                  href="/sejarah"
                  onClick={handleClose}
                  className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:bg-blue-100 transition"
                >
                  <IoTimeSharp className="text-inherit" />
                  Sejarah
                </Link>
                <Link
                  href="/visimisi"
                  onClick={handleClose}
                  className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:bg-blue-100 transition"
                >
                  <IoBulbSharp className="text-inherit" />
                  Visi & Misi
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 shadow-inner transition-all duration-300">
          <nav className="flex flex-col items-start px-6 py-4 gap-2">
            <Link
              href="/"
              onClick={handleClose}
              className="flex items-center gap-2 text-white w-full py-2 px-3 rounded-md hover:bg-blue-400 transition"
            >
              <IoHomeSharp className="text-inherit" />
              Beranda
            </Link>
            <Link
              href="/achievement"
              onClick={handleClose}
              className="flex items-center gap-2 text-white w-full py-2 px-3 rounded-md hover:bg-blue-400 transition"
            >
              <IoTrophySharp className="text-inherit" />
              Prestasi
            </Link>
            <Link
              href="/news"
              onClick={handleClose}
              className="flex items-center gap-2 text-white w-full py-2 px-3 rounded-md hover:bg-blue-400 transition"
            >
              <IoNewspaperSharp className="text-inherit" />
              Berita
            </Link>
            <Link
              href="/gallery"
              onClick={handleClose}
              className="flex items-center gap-2 text-white w-full py-2 px-3 rounded-md hover:bg-blue-400 transition"
            >
              <IoImagesSharp className="text-inherit" />
              Galeri
            </Link>

            {/* Mobile Dropdown: Tentang Kami */}
            <button
              onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
              className="flex justify-between items-center gap-2 text-white w-full py-2 px-3 rounded-md hover:bg-blue-400 transition"
            >
              <span className="flex items-center gap-2">
                <IoInformationCircleSharp className="text-inherit" />
                Tentang Kami
              </span>
              <IoChevronDownSharp
                className={`ml-2 transform transition ${
                  showMobileSubmenu ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {showMobileSubmenu && (
              <div className="pl-6 flex flex-col gap-1">
                <Link
                  href="/sejarah"
                  onClick={handleClose}
                  className="flex items-center gap-2 text-white py-1 px-3 rounded hover:bg-blue-400 transition"
                >
                  <IoTimeSharp className="text-inherit" />
                  Sejarah
                </Link>
                <Link
                  href="/visimisi"
                  onClick={handleClose}
                  className="flex items-center gap-2 text-white py-1 px-3 rounded hover:bg-blue-400 transition"
                >
                  <IoBulbSharp className="text-inherit" />
                  Visi & Misi
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

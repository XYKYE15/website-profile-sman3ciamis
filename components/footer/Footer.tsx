"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { FaEye, FaYoutube, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type SettingType = {
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  tiktok: string;
};

export default function Footer({ setting }: { setting: SettingType }) {
  return (
    <footer className="w-full bg-blue-500 text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1 */}
          <div className="flex flex-col items-center text-center gap-4">
            <Link href="/" className="flex flex-col items-center gap-2">
              <Image
                src="/assets/logoSmantic.png"
                width={75}
                height={75}
                alt="Logo"
                priority
              />
              <h2 className="text-xl font-bold uppercase text-white">
                SMAN 3 Ciamis
              </h2>
            </Link>
            <p className="text-sm">
              Jl. Bojonghuni No.87, Maleber, Kec. Ciamis, Kabupaten Ciamis,
              Jawa Barat 46214
            </p>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <FaPhone />
                <span>{setting.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span>{setting.email}</span>
              </div>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold">Tentang Kami</h2>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Link
                href="/sejarah"
                className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
              >
                <TfiReload />
                Sejarah
              </Link>
              <Link
                href="/visimisi"
                className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
              >
                <FaEye />
                Visi & Misi
              </Link>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold">Media Sosial</h2>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {setting.instagram && (
                <Link
                  href={setting.instagram}
                  target="_blank"
                  className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                >
                  <AiFillInstagram size={20} />
                  Instagram
                </Link>
              )}
              {setting.youtube && (
                <Link
                  href={setting.youtube}
                  target="_blank"
                  className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                >
                  <FaYoutube size={20} />
                  YouTube
                </Link>
              )}
              {setting.tiktok && (
                <Link
                  href={setting.tiktok}
                  target="_blank"
                  className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                >
                  <FaTiktok size={20} />
                  TikTok
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-white text-sm text-blue-600 font-bold">
        &copy; 2025 SMAN 3 Ciamis | By Rizki Rinaldi
      </div>
    </footer>
  );
}

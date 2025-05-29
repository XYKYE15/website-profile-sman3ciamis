import Link from "next/link";
import { IoLogOut } from "react-icons/io5";
import { signOut, auth } from "@/auth";

const LinkSideBar = async () => {
  const session = await auth();
  return (
    <div className="pt-6 max-w-xs flex items-center justify-center gap-30 flex-col">
      <ul className="flex flex-col items-center gap-4 w-full">
        <li>
          <Link
            href="/admin"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/achievement"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Prestasi
          </Link>
        </li>
        <li>
          <Link
            href="/admin/news"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Berita
          </Link>
        </li>
        <li>
          <Link
            href="/admin/gallery"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/admin/ekskul"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Ekskul
          </Link>
        </li>
        <li>
          <Link
            href="/admin/teacher"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Tenaga Pendidikan
          </Link>
        </li>
        <li>
          <Link
            href="/admin/settings"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Pengaturan
          </Link>
        </li>
      </ul>
      {session ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="max-w-screen-lg bg-red-400 text-white w-full px-5 py-2 rounded-md hover:bg-red-500 flex"
            >
              <IoLogOut size={25}/>
              Keluar
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Masuk
          </Link>
        )}
    </div>
  );
};

export default LinkSideBar;

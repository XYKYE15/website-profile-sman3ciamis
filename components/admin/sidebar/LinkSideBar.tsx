import Link from "next/link";

const LinkSideBar = () => {
  return (
    <div className="pt-6 max-w-xs mx-auto">
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
            href="#"
            className="block w-60 text-center py-3 rounded-xl bg-white text-blue-900 font-semibold text-lg shadow-md
          hover:bg-blue-100 transition-colors duration-200"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="#"
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
      </ul>
    </div>
  );
};

export default LinkSideBar;

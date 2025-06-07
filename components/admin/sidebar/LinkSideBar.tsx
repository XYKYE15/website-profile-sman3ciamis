import Link from "next/link";
import { 
  IoLogOut, 
  IoStatsChart, 
  IoTrophy, 
  IoNewspaper, 
  IoImages, 
  IoFootball, 
  IoPeople, 
  IoSettings,
  IoLockClosed 
} from "react-icons/io5";
import { signOut, auth } from "@/auth";

const LinkSideBar = async () => {
  const session = await auth();

  return (
    <div className="py-8 px-6 w-full max-w-xs flex flex-col h-full bg-blue-500 ">
      {/* Navigation Links */}
      <nav className="flex-1 mt-20">
        <ul className="space-y-2">
          {[
            { label: "Dashboard", href: "/admin", icon: IoStatsChart },
            { label: "Prestasi", href: "/admin/achievement", icon: IoTrophy },
            { label: "Berita", href: "/admin/news", icon: IoNewspaper },
            { label: "Gallery", href: "/admin/gallery", icon: IoImages },
            { label: "Ekskul", href: "/admin/ekskul", icon: IoFootball },
            { label: "Tenaga Pendidikan", href: "/admin/teacher", icon: IoPeople },
            { label: "Pengaturan", href: "/admin/settings", icon: IoSettings },
          ].map(({ label, href, icon: IconComponent }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg 
                bg-white/70 text-slate-700 font-medium text-sm border border-slate-200/50
                hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 hover:shadow-md
                transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                active:scale-[0.98] backdrop-blur-sm"
              >
                <IconComponent 
                  size={18} 
                  className="group-hover:scale-110 transition-transform duration-200 text-slate-600 group-hover:text-blue-600" 
                />
                <span className="flex-1">{label}</span>
                <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="mt-1 pt-6 border-t border-slate-200">
        {session ? (
          <div className="space-y-3">
            {/* User Info */}
            <div className="px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-600 font-medium">Selamat datang,</p>
              <p className="text-sm text-blue-800 font-semibold truncate">
                {session.user?.name || session.user?.email || "Admin"}
              </p>
            </div>
            
            {/* Logout Button */}
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 w-full px-4 py-3 
                bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md
                hover:from-red-600 hover:to-red-700 hover:shadow-lg
                transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                active:scale-[0.98] font-medium text-sm"
              >
                <IoLogOut 
                  size={18} 
                  className="group-hover:rotate-12 transition-transform duration-200" 
                />
                <span>Keluar</span>
              </button>
            </form>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 
            bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md
            hover:from-blue-600 hover:to-blue-700 hover:shadow-lg
            transition-all duration-300 ease-in-out transform hover:scale-[1.02]
            active:scale-[0.98] font-medium text-sm"
          >
            <IoLockClosed size={16} />
            <span>Masuk</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LinkSideBar;
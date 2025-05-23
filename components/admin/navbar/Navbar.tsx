import Image from "next/image";
import { auth, signOut } from "@/auth";
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";

const navbar = async () => {
  const session = await auth();

  return (
    <div className="fixed top-0 w-full bg-blue-500 z-50 py-4 mx-70">
      <div className="md:max-w-screen-xl flex items-center justify-end mx-1 md:p-1 p-3 items-cente w-285">
        {session && (
          <div className="flex gap-3 items-center">
            <div className="flex flex-col justify-center -space-y-1">
              <span className="font-semibold text-gray-100 text-right capitalize">
                {session.user.name}
              </span>
              <span className="font-xs text-blue-900 text-right font-bold capitalize">
                {session.user.role}
              </span>
            </div>
            <button
              type="button"
              className="text-sm ring-2 bg-gray-100 rounded-full cursor-pointer"
            >
              <Image
                src={session.user.image || "/assets/user-avatar.svg"}
                alt="avatar"
                width={64}
                height={64}
                className="w-10  h-10 rounded-full"
              />
            </button>
          </div>
        )}

        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="bg-red-400 text-white px-2 py-2 rounded-md hover:bg-red-500 ml-5"
            >
              <IoLogOut size={25}/>
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
    </div>
  );
};

export default navbar;

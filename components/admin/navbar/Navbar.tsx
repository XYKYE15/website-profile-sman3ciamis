import Image from "next/image";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="fixed top-0 w-full bg-blue-500 z-50 py-4 mx-70">
      <div className="md:max-w-screen-xl flex items-center justify-end mx-1 md:p-1 p-3 w-285">
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
              className="text-sm bg-gray-100 rounded-full"
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
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="fixed top-0 w-full bg-blue-500  z-50 flex">
      <div className="text-white text-center text-2xl font-semibold  px-6 py-5 w-full flex">
         <Image
                    src="/assets/logoSmantic.png"
                    width={50}
                    height={50}
                    alt="Flowbite Logo"
                    className="mr-1"
                    priority
                  />
        <span className="flex items-center justify-center">SMAN 3 CIAMIS</span>
      </div>
      <div className="mx-auto w-full max-w-screen-xl flex items-center justify-end px-4 py-3">
        {session && (
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-medium capitalize leading-tight">
                {session.user.name}
              </p>
              <p className="text-sm text-blue-200 capitalize font-semibold">
                {session.user.role}
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border-2 border-white hover:opacity-90 transition"
            >
              <Image
                src={session.user.image || "/assets/user-avatar.svg"}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

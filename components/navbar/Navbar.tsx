import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/NavLink";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-blue-500 z-50 shadow-xl md:px-40">
      <div className="md:max-w-screen-xl flex justify-between md:mx-auto mx-1 md:p-1 p-3 items-center">
        <Link href="/" className="flex">
          <Image
            src="/assets/logoSmantic.png"
            width={50}
            height={50}
            alt="Flowbite Logo"
            className="mr-1"
            priority
          />
          <h2 className="flex flex-col items-center md:text-2xl text-xl uppercase font-semibold text-white leading-6 ">
            SMAN 3<span>Ciamis</span>
          </h2>
        </Link>
        <Navlink />
      </div>
    </div>
  );
}

export default Navbar;

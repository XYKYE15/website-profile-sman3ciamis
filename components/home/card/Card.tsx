import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-screen-lg w-auto mx-5">
      <div className="h-[250px]  w-auto relative mb-3 overflow-hidden px-4">
        <Image
          src={"/hero.jpg"}
          width={300}
          height={300}
          alt="card image"
          className="object-cover object-center w-full h-full rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-xl font-medium text-center">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis.
          </h1>
        </div>
        <div className="px-20 py-2.5 md:px-10  mx-auto centerfont-semibold text-white rounded-sm bg-blue-500 hover:bg-blue-400 transition duration-150 shadow-lg">
          <Link
            href="/"
          >
            Cek Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;

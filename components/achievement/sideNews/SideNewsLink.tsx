import Link from "next/link";
import Image from "next/image";

function SideNewsLink() {
  return (
    <Link
      href={"/"}
      className="bg-white rounded-xl border border-blue-500 mb-10 flex flex-col items-center justify-center w-60 h-60 mx-auto shadow-lg hover:shadow-sm"
    >
      <Image
        src={"/hero.jpg"}
        width={200}
        height={200}
        alt="card image"
        className="border border-blue-500"
      ></Image>
      <h2 className="line-clamp-2 text-ellipsis min-h-1 font-semibold mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h2>
    </Link>
  );
}

export default SideNewsLink;

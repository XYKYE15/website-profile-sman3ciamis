import Link from "next/link";

function SideNewsLink() {
  return (
    <div className="flex md:flex-row justify-center mb-5">
      <div className="grid grid-cols-2 gap-1 mx-auto">
        <Link
          href={"/"}
          className="bg-blue-500 p-3 min-w-35 rounded-lg text-white font-semibold hadow-lg hover:shadow-sm hover:bg-blue-400"
        >
          <h2>Sciene Club</h2>
        </Link>
        <Link
          href={"/"}
          className="bg-blue-500 p-3 min-w-35 rounded-lg text-white font-semibold hadow-lg hover:shadow-sm hover:bg-blue-400"
        >
          <h2>Basket Club</h2>
        </Link>
        <Link
          href={"/"}
          className="bg-blue-500 p-3 w-30 ml-5 rounded-lg text-white font-semibold hadow-lg hover:shadow-sm hover:bg-blue-400"
        >
          <h2>Paskibra</h2>
        </Link>
        <Link
          href={"/"}
          className="bg-blue-500 p-3 w-30 rounded-lg text-white font-semibold shadow-lg hover:shadow-sm hover:bg-blue-400"
        >
          <h2>PMR</h2>
        </Link>
      </div>
    </div>
  );
}

export default SideNewsLink;

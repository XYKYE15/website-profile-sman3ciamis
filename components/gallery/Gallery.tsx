import Image from "next/image";
function Gallery() {
  return (
    <div className="border-1 border-blue-500 md:w-60 md:h-40 w-25 h-25 bg-amber-900">
      <Image
        src={"/hero.jpg"}
        width={300}
        height={300}
        alt="card image"
        className="w-full h-full"
      />
    </div>
  );
}

export default Gallery;

import Image from "next/image";

interface TeacherImageProps {
  imageUrl: string;
}

function Gallery({ imageUrl}: TeacherImageProps) {
  return (
    <div className="border-1 border-blue-500  md:h-40 w-full h-25 rounded-lg">
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="card image"
        className="w-full h-full rounded-lg"
      />
    </div>
  );
}

export default Gallery;

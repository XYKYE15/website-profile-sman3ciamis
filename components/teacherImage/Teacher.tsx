import Image from "next/image";

interface TeacherImageProps {
  name: string;
  position: string;
  imageUrl: string;
}

function TeacherImage({ name, position, imageUrl }: TeacherImageProps) {
  return (
    <div className="flex flex-col bg-blue-500 shadow-2xl rounded-xl p-5 gap-3 w-full">
      <div className="rounded-full w-50 h-50">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="text-white">
        <p>Nama : {name}</p>
        <p>Jabatan : {position}</p>
      </div>
    </div>
  );
}

export default TeacherImage;

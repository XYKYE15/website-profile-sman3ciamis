import Image from "next/image";

interface TeacherImageProps {
  name: string;
  position?: string;
  imageUrl: string;
  note: string | null;
  nip?: string | null;
  nuptk?: string | null;
}

function TeacherImage({ name, imageUrl, note, nip, nuptk }: TeacherImageProps) {
  return (
    <div className="flex flex-col items-center bg-blue-500 shadow-2xl rounded-xl p-5 gap-3 w-full">
      <div className="rounded-xl w-55 h-50 overflow-hidden bg-white flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className=" object-center w-full h-full"
        />
      </div>

      <div className="text-white text-center">
        {note && <p className="font-bold">{note}</p>}
        <h1 className="text-sm">{name}</h1>
        {nip && <p className="text-sm">NIP: {nip}</p>}
        {nuptk && <p className="text-sm">NUPTK: {nuptk}</p>}
      </div>
    </div>
  );
}

export default TeacherImage;

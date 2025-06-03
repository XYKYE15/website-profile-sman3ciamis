import Image from "next/image";
import { getHero } from "@/lib/data";

export default async function Hero() {
  const data = await getHero();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-screen text-white overflow-hidden w-full">
      <div className="absolute inset-0 border-b-10 border-blue-500">
        {/* Gambar Hero */}
        <Image
          src={data.imageHero || "/hero.jpg"}
          fill
          className="object-cover object-center w-full h-full"
          alt="hero image"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <h1
            className="text-8xl font-extrabold leading-tight flex flex-col mb-3 uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {data.name || ""}
            <span
              className="text-lg text-gray-100 mt-2"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              {data.description || ""}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";


function Hero() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 border-b-10 border-blue-500">
            <Image
                src="/hero.jpg"
                fill
                className="object-cover object-center w-full h-full"
                alt="hero image"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative flex flex-col  justify-center items-center h-full text-center">
              <h1 className="text-8xl font-extrabold leading-tight flex flex-col mb-3 capitalize">selamat datang di <span className="text-7xl">SMAN 3 Ciamis</span> </h1>
            </div>
        </div>
    </div>
  )
}

export default Hero;

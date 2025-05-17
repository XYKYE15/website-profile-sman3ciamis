"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {
  return (
    <div className="py-5 px-5 ">
      <h2 className="text-2xl font-bold mb-20 md:mb-25 text-blue-900 text-center">
        Prestasi Siswa & Siswi
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="md:h-83 h-80"
      >
        <SwiperSlide>
          <Link href={"/"} className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm">
            <div className="w-115">
              <Image
                src="/hero.jpg"
                alt="card image"
                width={500}
                height={300}
                className=" h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute rounded-3xl top-50 max-w-[300px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 line-clamp-3 text-ellipsis overflow-hidden shadow-lg md:min-h-25">
              <h3 className=" mx-auto text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti ullam quia, repellat tempore, 
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"} className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm">
            <div className="w-115">
              <Image
                src="/hero.jpg"
                alt="card image"
                width={500}
                height={300}
                className=" h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute rounded-3xl top-50 max-w-[300px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 line-clamp-3 text-ellipsis overflow-hidden shadow-lg md:min-h-25">
              <h3 className=" mx-auto text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti ullam quia, repellat tempore, 
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"} className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm">
            <div className="w-115">
              <Image
                src="/hero.jpg"
                alt="card image"
                width={500}
                height={300}
                className=" h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute rounded-3xl top-50 max-w-[300px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 line-clamp-3 text-ellipsis overflow-hidden shadow-lg md:min-h-25">
              <h3 className=" mx-auto text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti ullam quia, repellat tempore, 
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"} className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm">
            <div className="w-115">
              <Image
                src="/hero.jpg"
                alt="card image"
                width={500}
                height={300}
                className=" h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute rounded-3xl top-50 max-w-[300px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 line-clamp-3 text-ellipsis overflow-hidden shadow-lg md:min-h-25">
              <h3 className=" mx-auto text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti ullam quia, repellat tempore, 
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"} className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm">
            <div className="w-115">
              <Image
                src="/hero.jpg"
                alt="card image"
                width={500}
                height={300}
                className=" h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute rounded-3xl top-50 max-w-[300px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 line-clamp-3 text-ellipsis overflow-hidden shadow-lg md:min-h-25">
              <h3 className=" mx-auto text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti ullam quia, repellat tempore, 
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;

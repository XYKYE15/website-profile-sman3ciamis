"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Achievement } from "@/lib/generated/prisma";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = ({ data }: { data: Achievement[] }) => {
  return (
    <div className="py-5 px-5">
      <h2
        className="text-2xl font-bold mb-20 md:mb-15 text-blue-900 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Prestasi Siswa & Siswi
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="md:h-83 h-80"
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/achievement/detail/${item.id}`}
              className="flex justify-center rounded-2xl shadow-xl hover:shadow-sm"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="900"
            >
              <div className="">
                <Image
                  src={item.image || "/images/achievement.jpg"}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-65 w-150 rounded-2xl shadow-lg object-center"
                />
              </div>
              <div className="absolute rounded-3xl top-50 max-w-[400px] md:max-w-[500px] md:w-100 bg-white p-1 px-5 text-ellipsis overflow-hidden shadow-lg md:min-h-25 h-25 flex items-center justify-center">
                <h3 className="mx-auto text-lg font-medium text-center line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;

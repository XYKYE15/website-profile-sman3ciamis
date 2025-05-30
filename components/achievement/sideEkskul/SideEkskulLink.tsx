"use client";

import { Ekskul } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";
import { IoLogoInstagram, IoLogoTiktok, IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function SideLinkClient({
  ekskulList,
}: {
  ekskulList: Ekskul[];
}) {
  const [selectedEkskul, setSelectedEkskul] = useState<Ekskul | null>(null);

  // ✅ Mencegah scroll dengan class overflow-hidden pada <html>
  useEffect(() => {
    const html = document.documentElement;

    if (selectedEkskul) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }

    return () => {
      html.classList.remove("overflow-hidden");
    };
  }, [selectedEkskul]);

  const useSlider = ekskulList.length > 4;
  const groupedEkskul = useSlider ? chunkArray(ekskulList, 4) : [];

  return (
    <>
      <div className="flex justify-center items-center mb-5 w-full max-w-xl mx-auto relative">
        {useSlider ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
          >
            {groupedEkskul.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 gap-1 md:px-10  px-15">
                  {group.map((ekskul) => (
                    <button
                      key={ekskul.id}
                      onClick={() => setSelectedEkskul(ekskul)}
                      className="bg-blue-500   py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-sm hover:bg-blue-400"
                    >
                      <h2>{ekskul.name}</h2>
                    </button>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
            {ekskulList.map((ekskul) => (
              <button
                key={ekskul.id}
                onClick={() => setSelectedEkskul(ekskul)}
                className="bg-blue-500 p-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-sm hover:bg-blue-400"
              >
                <h2>{ekskul.name}</h2>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedEkskul && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          onClick={() => setSelectedEkskul(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-blue-500 text-xl"
              onClick={() => setSelectedEkskul(null)}
              aria-label="Close modal"
            >
              <IoClose />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {selectedEkskul.name}
            </h3>
            <div className="flex flex-col gap-3">
              {selectedEkskul.instagram && (
                <a
                  href={selectedEkskul.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
                >
                  <IoLogoInstagram /> Instagram
                </a>
              )}
              {selectedEkskul.tiktok && (
                <a
                  href={selectedEkskul.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  <IoLogoTiktok /> TikTok
                </a>
              )}
              {!selectedEkskul.instagram && !selectedEkskul.tiktok && (
                <p className="text-center text-sm text-gray-500">
                  Tidak ada media sosial tersedia.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

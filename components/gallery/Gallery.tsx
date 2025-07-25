"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface TeacherImageProps {
  imageUrl: string;
}

function Gallery({ imageUrl }: TeacherImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Mencegah scroll saat modal zoom aktif
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  return (
    <>
      {/* Thumbnail image */}
      <div
        className="border border-blue-500 md:h-50 md:w-50 w-65 h-65 rounded-lg cursor-pointer overflow-hidden"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt="card image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zoom modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
            >
              <IoClose />
            </button>

            <Image
              src={imageUrl}
              alt="Zoomed image"
              width={800}
              height={800}
              className="rounded-lg object-contain max-w-full h-150"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;

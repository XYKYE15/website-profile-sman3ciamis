"use client";

import React from "react";

const VideoSection = () => {
  const videoUrl = "https://www.youtube.com/embed/example"; // Ganti dengan URL asli dari backend jika tersedia

  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Video Profil Sekolah
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Saksikan video profil sekolah kami untuk mengenal lebih dekat visi, misi, dan berbagai kegiatan menarik di sekolah.
        </p>
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Video Profil Sekolah"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

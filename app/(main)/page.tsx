"use client";

import React, { useRef, useState } from "react"; // Thêm useRef và useState
import Image from "next/image";

// Import Swiper React components và styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HomePage() {
  // 1. Khởi tạo Ref để điều khiển video và State để track trạng thái
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // 2. Hàm xử lý Bật/Tắt video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Dữ liệu nhân vật
  const characters = [
    { name: "Ken Kaneki", image: "/kaneki.jpg" }, 
    { name: "Touka Kirishima", image: "/touka.jpg" }, 
    { name: "Shuu Tsukiyama", image: "/shuu.jpg" }, 
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#000000] text-white">
      {/* -------------------- SECTION 1: HERO -------------------- */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/LIVE WALLPAPER.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>

        <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 lg:px-32">
          {/* Thêm pr-10 để tạo không gian cho độ nghiêng của chữ 'e', và w-fit để container không bó hẹp chữ */}
          <h1 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter title-scan-effect drop-shadow-[0_5px_15px_rgba(223,37,49,0.3)] pr-10 w-fit overflow-visible">
            Tokyo Ghoul:re
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-bold tracking-widest uppercase text-left">
            For a future where we no longer have to lose everything just to understand each other.
          </p>
        </div>
      </div>

      {/* -------------------- SECTION 2: CHARACTERS -------------------- */}
      <div className="relative py-20 px-10 md:px-20 lg:px-32 bg-white">
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-black">
            Characters
          </h2>
          <div className="flex items-center gap-2 mt-4 md:absolute md:right-0 md:mt-0">
            <button className="swiper-button-prev-custom text-[#555] hover:text-black transition-colors cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="swiper-button-next-custom w-10 h-10 border border-[#df2531]/30 rounded-full flex items-center justify-center text-[#df2531] hover:bg-[#df2531] hover:text-[#ffffff] transition-all cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="character-swiper"
        >
          {characters.map((char, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#df2531]/20 rounded-sm overflow-hidden group hover:border-[#df2531] transition-all duration-300">
                <div className="relative aspect-3/4 bg-[#1a1a1a]">
                  <Image src={char.image} alt={char.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="px-6 py-5 bg-white text-center border-t border-[#df2531]/20">
                  <span className="inline-block px-6 py-2 border border-black/10 rounded-sm text-sm font-bold uppercase tracking-widest text-black group-hover:border-[#df2531] group-hover:text-[#df2531] transition-all">
                    {char.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* -------------------- SECTION 3: TRAILER (ĐÃ THÊM NÚT) -------------------- */}
      <div className="relative py-24 px-10 md:px-20 lg:px-32 bg-[#df2531]">
        <div className="max-w-6xl mx-auto">
          {/* Box video giữ nguyên, thêm onClick để bấm vào đâu cũng dừng/chạy được */}
          <div 
            className="relative aspect-video bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef} // Gắn Ref vào đây
              src="/trailer.mp4"
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Lớp phủ Overlay và Nút Play/Pause ở chính giữa */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-black/0 group-hover:bg-black/20' : 'bg-black/30'}`}>
              <div className={`w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100'}`}>
                {isPlaying ? (
                  /* Icon Pause */
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  /* Icon Play */
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="ml-2"><path d="M8 5v14l11-7z"/></svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- SECTION 4: CSS -------------------- */}
      <style jsx global>{`
        .title-scan-effect {
          background: linear-gradient(to right, #ffffff 35%, #df2531 50%, #ffffff 65%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: scanRed 4s infinite linear;
        }
        @keyframes scanRed {
          0% { background-position: 200% 0%; }
          100% { background-position: -100% 0%; }
        }
        .character-swiper .swiper-button-prev,
        .character-swiper .swiper-button-next {
          display: none !important;
        }
        video { border-radius: inherit; }
      `}</style>
    </main>
  );
}
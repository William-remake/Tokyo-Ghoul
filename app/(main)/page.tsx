"use client";

import React from "react";
import Image from "next/image";

// Import Swiper React components và styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HomePage() {
  // Dữ liệu nhân vật
  const characters = [
    { name: "Ken Kaneki", image: "/kaneki.jpg" }, 
    { name: "Touka Kirishima", image: "/touka.jpg" }, 
    { name: "Shuu Tsukiyama", image: "/shuu.jpg" }, 
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#000000] text-white">
      {/* -------------------- SECTION 1: HERO (VIDEO NỀN & CHỮ) -------------------- */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video LOCAL */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/LIVE WALLPAPER.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Lớp phủ Overlay làm tối nền */}
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>

        {/* Nội dung chính - Căn sang bên trái */}
        <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 lg:px-32">
          {/* SỬA LỖI: Sử dụng class title-scan-effect để khớp với CSS Animation bên dưới */}
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter title-scan-effect drop-shadow-[0_5px_15px_rgba(223,37,49,0.3)]">
            Tokyo Ghoul
          </h1>

          <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-bold tracking-widest uppercase text-left">
            Everything for the sake of a world where ghouls can live normally.
          </p>
        </div>
      </div>

      {/* -------------------- SECTION 2: CHARACTERS (SLIDER) -------------------- */}
      <div className="relative py-20 px-10 md:px-20 lg:px-32 bg-white">
        
        {/* SỬA: Căn giữa tiêu đề Characters bằng cách dùng justify-center hoặc text-center */}
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-black">
            Characters
          </h2>
          
          {/* Nút Navigation - Đẩy sang hai bên hoặc giữ nguyên tùy biến của bạn */}
          <div className="flex items-center gap-2 mt-4 md:absolute md:right-0 md:mt-0">
            <button className="swiper-button-prev-custom text-[#555] hover:text-black transition-colors cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="swiper-button-next-custom w-10 h-10 border border-[#df2531]/30 rounded-full flex items-center justify-center text-[#df2531] hover:bg-[#df2531] hover:text-[#ffffff] transition-all cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* SWIPER CONTAINER */}
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
              {/* Character Card Style */}
              <div className="border border-[#df2531]/20 rounded-sm overflow-hidden group hover:border-[#df2531] transition-all duration-300">
                {/* Phần Ảnh Nhân vật */}
                <div className="relative aspect-3/4 bg-[#1a1a1a]">
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Phần Tên Nhân vật */}
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

      {/* -------------------- SECTION 3: CSS ANIMATIONS -------------------- */}
      <style jsx global>{`
        /* SỬA: Đồng bộ dải màu quét đỏ với text-transparent và bg-clip-text */
        .title-scan-effect {
          background: linear-gradient(
            to right, 
            #ffffff 35%, 
            #df2531 50%, 
            #ffffff 65%
          );
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

        /* Ẩn các nút navigation mặc định của Swiper */
        .character-swiper .swiper-button-prev,
        .character-swiper .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
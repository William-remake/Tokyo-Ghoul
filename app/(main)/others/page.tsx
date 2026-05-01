"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GamePage() {
  const bookList = [
    { id: 1, title: "Tokyo Ghoul RE Vol 1", image: "/vol 1.jpg" },
    { id: 2, title: "Tokyo Ghoul RE Vol 2", image: "/vol 2.jpg" },
    { id: 3, title: "Tokyo Ghoul RE Vol 3", image: "/vol 3.jpg" },
    { id: 4, title: "Tokyo Ghoul RE Vol 4", image: "/vol 4.jpg" },
  ];

  return (
    <section className="bg-white min-h-screen text-black selection:bg-[#df2531] selection:text-white pb-20">
      {/* Cấu hình màu cho dấu chấm Pagination bằng CSS Inline */}
      <style jsx global>{`
        .book-pagination .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.3;
          width: 12px;
          height: 12px;
        }
        .book-pagination .swiper-pagination-bullet-active {
          background: #df2531 !important;
          opacity: 1;
        }
      `}</style>

      {/* Header */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
          The <br className="md:hidden" /> Game
        </h1>
        <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Video Section */}
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-video border-4 border-black shadow-[15px_15px_0px_0px_#df2531] overflow-hidden bg-black">
              <video className="w-full h-full object-cover" controls autoPlay loop muted>
                <source src="/trailer game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Game Info */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-6">
            <div className="text-4xl font-black uppercase tracking-tighter leading-tight">
              <h2>TOKYO GHOUL:re</h2>
              <h2 className="text-[#df2531]">[CALL to EXIST]</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-bold italic text-gray-500 uppercase">It may not be stylish, but... Live.</p>
              <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                Eat or be eaten. <span className="font-black">TOKYO GHOUL:re [CALL to EXIST]</span> is a co-op survival action game.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 py-4">
              {["Co-op", "Survival", "Action", "Multiplayer"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <div className="pt-6">
              <Link href="https://store.steampowered.com/app/756530/" target="_blank" className="inline-block w-full md:w-auto text-center px-10 py-4 bg-[#df2531] text-white font-black uppercase tracking-widest text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Get Game
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- PHẦN BOOKS VỚI HIỆU ỨNG MỚI --- */}
      <div className="max-w-7xl mx-auto px-6 mt-32 relative">
        <h2 className="text-5xl font-black text-center uppercase tracking-tighter mb-16">Books</h2>
        
        <div className="relative group px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: '.book-prev', nextEl: '.book-next' }}
            pagination={{ clickable: true, el: '.book-pagination' }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
          >
            {bookList.map((book) => (
              <SwiperSlide key={book.id}>
                {/* Đã sửa Hover: Không dùng shadow đỏ, thay bằng đổi màu Border và Scale nhẹ */}
                <div className="border-[3px] border-black rounded-[40px] p-8 flex flex-col items-center justify-center bg-white aspect-square transition-all duration-300 hover:border-[#df2531] group/card">
                  <div className="relative w-full h-56 mb-6 overflow-hidden">
                    <Image 
                      src={book.image} 
                      alt={book.title} 
                      fill 
                      className="object-contain transition-transform duration-500 group-hover/card:scale-105"
                    />
                  </div>
                  <span className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-bold uppercase tracking-tight text-black group-hover/card:bg-[#df2531] group-hover/card:text-white group-hover/card:border-[#df2531] transition-all duration-300">
                    {book.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          {/* Nút bên trái: Đẩy ra ngoài thêm bằng -left-4 hoặc -left-8 */}
          <button className="book-prev absolute -left-4 md:-left-8 top-[40%] -translate-y-1/2 z-10 text-3xl font-black hover:text-[#df2531] transition-all duration-300">
            ←
          </button>

          {/* Nút bên phải: Đẩy ra ngoài thêm bằng -right-4 hoặc -right-8 */}
          <button className="book-next absolute -right-4 md:-right-8 top-[40%] -translate-y-1/2 z-10 w-12 h-12 border-2 border-[#df2531] rounded-full text-[#df2531] flex items-center justify-center font-bold hover:bg-[#df2531] hover:text-white transition-all duration-300">
            →
          </button>

          {/* Pagination Container (Dấu chấm màu đỏ nằm ở đây) */}
          <div className="book-pagination flex justify-center gap-3 mt-4"></div>
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/books" className="px-14 py-4 bg-[#df2531] text-white font-black text-2xl rounded-full border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:bg-black transition-all uppercase tracking-tighter">
            More
          </Link>
        </div>
      </div>
    </section>
  );
}
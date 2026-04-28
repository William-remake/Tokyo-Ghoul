"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video từ YouTube */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          className="w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none"
          // Các tham số để ẩn tối đa giao diện YouTube
          src="https://youtu.be/MY8jo2Qswr4?si=1Bn1Z1zAm5-cUcgT"
          allow="autoplay; encrypted-media"
          loading="lazy"
        ></iframe>
        {/* Lớp phủ Overlay làm tối nền và chặn tương tác chuột */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Nội dung chính - Căn sang bên trái (items-start) */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 lg:px-32">
        {/* Hiệu ứng chữ Tokyo Ghoul đổi màu và căn trái */}
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter animate-color-loop drop-shadow-[0_5px_15px_rgba(223,37,49,0.3)]">
          Tokyo Ghoul
        </h1>
        
        <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-bold tracking-widest uppercase text-left">
          Everything for the sake of a world where ghouls can live normally.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-10 py-4 bg-[#df2531] text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#df2531] transition-all duration-500 rounded-sm shadow-[0_0_20px_rgba(223,37,49,0.4)] active:scale-95">
            Explore
          </button>
          <button className="px-10 py-4 border border-white text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 rounded-sm active:scale-95">
            Manga
          </button>
        </div>
      </div>

      {/* CSS Animation cho màu sắc */}
      <style jsx>{`
        @keyframes colorChange {
          0%, 100% { color: #ffffff; } /* Trắng */
          50% { color: #df2531; }    /* Đỏ */
        }
        .animate-color-loop {
          animation: colorChange 4s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
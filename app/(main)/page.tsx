"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video từ YouTube */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none"
          // CHÚ Ý: Đã đổi sang /embed/ và thêm các tham số để tự chạy & lặp lại
          src="https://www.youtube.com/embed/MY8jo2Qswr4?autoplay=1&mute=1&loop=1&playlist=MY8jo2Qswr4&controls=0&showinfo=0&rel=0&modestbranding=1"
          allow="autoplay; encrypted-media"
          loading="lazy"
        ></iframe>
        {/* Lớp phủ Overlay làm tối nền và chặn tương tác chuột */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Nội dung chính - Căn sang bên trái */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 lg:px-32">
        {/* Chữ Tokyo Ghoul với hiệu ứng thanh màu chạy qua */}
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter animate-scan-red drop-shadow-[0_5px_15px_rgba(223,37,49,0.3)] bg-gradient-to-r from-white via-[#df2531] to-white bg-[length:200%_100%] bg-clip-text text-transparent">
          Tokyo Ghoul
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-bold tracking-widest uppercase text-left">
          Everything for the sake of a world where ghouls can live normally.
        </p>
      </div>

      {/* 3. CSS ANIMATION */}
      <style jsx>{`
        /* Hiệu ứng thanh đỏ quét qua chữ */
        @keyframes scanRed {
          0% {
            background-position: 120% 0%;
          }
          100% {
            background-position: -120% 0%;
          }
        }

        .animate-scan-red {
          animation: scanRed 4s infinite linear;
        }

        /* Đảm bảo iframe không có viền khi focus */
        iframe:focus {
          outline: none;
        }
      `}</style>
    </main>
  );
}
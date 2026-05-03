"use client";

import React, { useRef, useState } from "react";

export default function AnimePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-[#df2531]">
      {/* 1. BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/trailer anime.mp4" 
          autoPlay
          muted={muted}
          loop
          playsInline
          className="h-full w-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-black z-20"></div>
        {/* Hiệu ứng hạt bụi/noise nhẹ để trông cinematic hơn */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-40 flex h-screen w-full items-center justify-end px-10 md:px-20 lg:px-40">
        <div className="max-w-2xl text-right flex flex-col items-end space-y-6">
          
          {/* Label nhỏ phía trên */}
          <div className="flex items-center gap-3 animate-fade-in-right">
            <span className="h-0.5 w-12 bg-[#df2531]"></span>
            <span className="text-[#df2531] font-black uppercase tracking-[0.4em] text-xs">Featured Series</span>
          </div>

          {/* Title chính */}
          <div className="relative animate-fade-in-right [animation-delay:200ms] pr-2">
            <h1 className="text-7xl md:text-9xl font-black uppercase title-scan-effect leading-[0.95] drop-shadow-2xl">
              Tokyo Ghoul:re
            </h1>
          </div>

          {/* Description - Cải thiện độ đọc và font spacing */}
          <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-md animate-fade-in-right [animation-delay:400ms] border-r-4 border-[#df2531] pr-6">
            In the dark streets of Tokyo, the line between man and monster blurs. 
            Follow <span className="text-white font-bold">Haise Sasaki</span> as he leads the Quinx Squad in a desperate struggle 
            for identity and survival.
          </p>

          {/* Nút Watch Action - Hiệu ứng Hover mạnh mẽ hơn */}
          <div className="flex flex-col items-end gap-4 w-full animate-fade-in-right [animation-delay:600ms]">
            <a 
              href="https://www.netflix.com/vn-en/title/80023687?s=a&trkid=13747225&shareType=Title&shareUuid=4913f4b2-8bcf-4df9-8d9c-45b75fc72b71&trg=cp&unifiedEntityIdEncoded=Video%3A80023687&vlang=en&clip=81910686" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden w-full md:w-80 py-5 bg-[#df2531] text-white font-black uppercase tracking-[0.3em] italic text-xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(223,37,49,0.3)] cursor-pointer text-center"
            >
              {/* Hiệu ứng ánh sáng chạy qua khi hover */}
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
              <span className="relative z-10">Watch Now</span>
            </a>

            {/* Nút bật/tắt âm thanh */}
            <button 
              onClick={toggleMute}
              className="group flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-all duration-300"
            >
              <span className="h-4 w-4 flex items-center justify-center border border-white rounded-full text-[8px] group-hover:bg-white group-hover:text-black transition-colors">
                {muted ? "✕" : "●"}
              </span>
              {muted ? "Sound Muted" : "Sound Playing"}
            </button>
          </div>
        </div>
      </div>

      {/* 4. CUSTOM ANIMATIONS */}
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

        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.05); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slow-zoom { animation: slow-zoom 20s infinite ease-in-out; }
        .animate-fade-in-right { animation: fade-in-right 1s forwards cubic-bezier(0.16, 1, 0.3, 1); opacity: 0; }
        .animate-fade-in { animation: fade-in 1.5s forwards; opacity: 0; }
      `}</style>
    </main>
  );
}
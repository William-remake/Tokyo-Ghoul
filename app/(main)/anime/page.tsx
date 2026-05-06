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
        <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10"></div>
        {/* Mobile: Gradient bottom-up | Desktop: Gradient right-to-left */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent md:bg-linear-to-r md:from-transparent md:via-black/20 md:to-black z-20"></div>
        
        {/* Grain Noise */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      {/* Thay đổi: justify-center trên mobile, justify-end trên desktop */}
      <div className="relative z-40 flex min-h-screen w-full items-center justify-center md:justify-end px-6 md:px-20 lg:px-40 py-20">
        {/* Thay đổi: items-center + text-center trên mobile, items-end + text-right trên desktop */}
        <div className="max-w-2xl text-center md:text-right flex flex-col items-center md:items-end space-y-6 md:space-y-8">
          
          {/* Label nhỏ phía trên */}
          <div className="flex items-center gap-3 animate-fade-in-right">
            <span className="hidden md:block h-0.5 w-12 bg-[#df2531]"></span>
            <span className="text-[#df2531] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs">
              Featured Series
            </span>
            <span className="md:hidden h-0.5 w-6 bg-[#df2531]"></span>
          </div>

          {/* Title chính - Responsive font size */}
          <div className="relative animate-fade-in-right [animation-delay:200ms] md:pr-2">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase title-scan-effect leading-[0.95] drop-shadow-2xl">
              Tokyo Ghoul:re
            </h1>
          </div>

          {/* Description - Responsive border và alignment */}
          <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-sm md:max-w-md animate-fade-in-right [animation-delay:400ms] border-b-2 md:border-b-0 md:border-r-4 border-[#df2531] pb-4 md:pb-0 md:pr-6">
            In the dark streets of Tokyo, the line between man and monster blurs. 
            Follow <span className="text-white font-bold">Haise Sasaki</span> as he leads the Quinx Squad in a desperate struggle 
            for identity and survival.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center md:items-end gap-4 w-full animate-fade-in-right [animation-delay:600ms]">
            <a 
              href="https://www.netflix.com/vn-en/title/80023687" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden w-full max-w-70 md:w-80 py-4 md:py-5 bg-[#df2531] text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic text-lg md:text-xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(223,37,49,0.3)] cursor-pointer text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
              <span className="relative z-10">Watch Now</span>
            </a>

            {/* Sound Toggle */}
            <button 
              onClick={toggleMute}
              className="group flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-widest opacity-60 md:opacity-40 hover:opacity-100 transition-all duration-300"
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
          50% { transform: scale(1.12); }
          100% { transform: scale(1.05); }
        }

        @keyframes fade-in-right {
          from { 
            opacity: 0; 
            transform: translateY(20px); /* Đổi sang Y để mobile mượt hơn */
            filter: blur(10px); 
          }
          to { 
            opacity: 1; 
            transform: translate(0); 
            filter: blur(0); 
          }
        }

        @media (min-width: 768px) {
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); filter: blur(10px); }
            to { opacity: 1; transform: translateX(0); filter: blur(0); }
          }
        }

        .animate-slow-zoom { animation: slow-zoom 20s infinite ease-in-out; }
        .animate-fade-in-right { animation: fade-in-right 1s forwards cubic-bezier(0.16, 1, 0.3, 1); opacity: 0; }
      `}</style>
    </main>
  );
}
"use client";

import React from "react";
import Link from "next/link";

export default function GamePage() {
  return (
    <section className="bg-white min-h-screen text-black selection:bg-[#df2531] selection:text-white pb-20">
      {/* Header - Đã bỏ border-b-2 border-black */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
          The <br className="md:hidden" /> Game
        </h1>
        {/* Thêm một gạch ngang trang trí ở giữa cho cân đối nếu muốn */}
        <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Local Video Section */}
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-video border-4 border-black shadow-[15px_15px_0px_0px_#df2531] overflow-hidden bg-black">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
              >
                <source src="/trailer game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Game Information */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-6">
            <h2 className="text-4xl  font-black uppercase tracking-tighter leading-tight">
              TOKYO GHOUL:re 
              <h2 className="text-[#df2531]">[CALL to EXIST]</h2>
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg font-bold italic text-gray-500 uppercase">
                It may not be stylish, but... Live.
              </p>
              <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                Eat or be eaten. <span className="font-black">TOKYO GHOUL:re [CALL to EXIST]</span> is a co-op survival action game that lets you experience the exciting world of Tokyo Ghoul and Tokyo Ghoul:re for yourself.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 py-4">
              {["Co-op", "Survival", "Action", "Multiplayer"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <Link 
                href="https://store.steampowered.com/app/756530/TOKYO_GHOULre_CALL_to_EXIST/"
                target="_blank"
                className="inline-block w-full md:w-auto text-center px-10 py-4 bg-[#df2531] text-white font-black uppercase tracking-widest text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Get Game
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
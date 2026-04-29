"use client";

import React from "react";
import Image from "next/image";

export default function Page() {
  const works = [
    { title: "The Tale of Longing for Sex", year: "2009", type: "Webcomic" },
    { title: "THE PENISMAN", year: "2010", type: "Webcomic" },
    { title: "Tokyo Ghoul", year: "2010/2011", type: "Oneshot" },
    { title: "Tokyo Ghoul", year: "2011", type: "Series" },
    { title: "Tokyo Ghoul: Rize", year: "2011", type: "Oneshot" },
    { title: "Tokyo Ghoul: Jack", year: "2013", type: "Series" },
    { title: "Tokyo Ghoul: Joker", year: "2014", type: "Oneshot" },
    { title: "Tokyo Ghoul:re", year: "2014", type: "Series" },
    { title: "Hisoka Story Draft", year: "2016", type: "Oneshot" },
    { title: "Animal Rap", year: "2017", type: "Webcomic / YouTube" },
    { title: "Choujin X", year: "2021", type: "Series" },
    { title: "Jack Jeanne", year: "2021", type: "Videogame" },
    { title: "This Gorilla Will Die 1 Day", year: "2021", type: "Webcomic" },
    { title: "Parasite NoThankYou", year: "2021", type: "Webcomic" },
  ];

  return (
    <section className="bg-white text-black selection:bg-[#df2531] selection:text-white">
      {/* -------------------- PHẦN GIỚI THIỆU TÁC GIẢ (Ảnh bo góc) -------------------- */}
      <div className="py-24 px-10 md:px-20 lg:px-32 border-b-2 border-black">
        <div className="flex flex-col md:flex-row gap-16 items-start max-w-7xl mx-auto">
          
          {/* Ảnh profile bo góc lớn giống trailer */}
          <div className="w-full md:w-1/3 aspect-4/5 relative border-2 border-black bg-gray-100 rounded-4xl md:rounded-[4rem] overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/Sui Ishiada.jpg" // Đảm bảo bạn có ảnh này trong public
              alt="Sui Ishida Profile Manga Style"
              fill
              // ĐÃ CẬP NHẬT: Loại bỏ grayscale để hiện màu gốc
              className="object-cover" 
            />
          </div>

          {/* Nội dung bên phải */}
          <div className="flex-1 space-y-6 pt-6">
            <div className="border-l-8 border-[#df2531] pl-6">
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Sui <br /> Ishida
              </h1>
              <p className="text-xl font-bold mt-2 text-gray-500 uppercase tracking-widest">
                石田 スイ | Manga Artist
              </p>
            </div>

            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-justify">
              <p className="font-semibold">
                Sui Ishida (Japanese: 石田 スイ, Hepburn: Ishida Sui; born December 28, 1986) is a Japanese manga artist. He is popularly known for his dark fantasy manga series <span className="font-bold">Tokyo Ghoul</span> and <span className="font-bold">Choujin X</span>.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                He created a 69-page storyboard of a manga chapter based on Yoshihiro Togashi is <span className="italic">Hunter × Hunter</span> series, depicting the past of Hisoka. On May 10, 2021, Ishida started the manga series <span className="italic">Choujin X</span> on Shueisha is Tonari no Young Jump website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- PHẦN DANH SÁCH TÁC PHẨM (Màu đỏproject) -------------------- */}
      <div className="py-24 px-10 md:px-20 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-black">
              Works
            </h2>
            <div className="h-0.5 flex-1 bg-black opacity-20"></div>
          </div>

          {/* Grid: 1 cột mobile, 2 cột tablet, 3 cột desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div 
                key={index} 
                className="border-2 border-black p-8 bg-white"
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-black px-3 py-1 border border-black uppercase text-black">
                    {work.year}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#df2531]">
                    {work.type}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase leading-tight text-black">
                  {work.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
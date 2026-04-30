"use client";

import React from "react";
import Image from "next/image";

export default function ArtistsPage() {
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

  const illustrations = [
    // --- NHÓM ẢNH DỌC (PORTRAIT) ---
    { title: "Rei Ayanami (Evangelion)", date: "Birthday Illustration", src: "/art 1.jpg", layout: "portrait" },
    { title: "Kuja (Final Fantasy IX)", date: "March 22, 2015", src: "/art 3.jpg", layout: "portrait" },
    { title: "Hisoka Morow (H×H)", date: "April 1, 2015", src: "/art 5.jpg", layout: "portrait" },
    { title: "Howl’s Moving Castle", date: "October 2, 2015", src: "/art 6.jpg", layout: "portrait" },
    { title: "Sasuke Uchiha (Naruto)", date: "March 10, 2015", src: "/art 7.jpg", layout: "portrait" },
    { title: "Hotaru Shidare (Dagashi Kashi)", date: "August 14, 2016", src: "/art 8.jpg", layout: "portrait" },
    
    // --- NHÓM ẢNH NGANG (LANDSCAPE) - ĐƯA XUỐNG DƯỚI ---
    { title: "Kainé (NieR)", date: "May 18, 2015", src: "/art 2.jpg", layout: "landscape" },
    { title: "Nao & Taiga (Honey)", date: "November 29, 2015", src: "/art 4.jpg", layout: "landscape" },
    { title: "Goubaru-kun & Son Goku", date: "Staff Illustration", src: "/art 10.jpg", layout: "landscape" },
    { title: "Eren Yeager (AOT)", date: "April 9, 2021", src: "/art 11.jpg", layout: "landscape" },
  ];

  return (
    <section className="bg-white text-black selection:bg-[#df2531] selection:text-white">
      {/* -------------------- PHẦN GIỚI THIỆU TÁC GIẢ -------------------- */}
      <div className="py-24 px-10 md:px-20 lg:px-32 border-b-2 border-black">
        <div className="flex flex-col md:flex-row gap-16 items-start max-w-7xl mx-auto">
          <div className="w-full md:w-1/3 aspect-4/5 relative border-2 border-black bg-gray-100 rounded-4xl md:rounded-[4rem] overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/Sui Ishiada.jpg"
              alt="Sui Ishida Profile"
              fill
              className="object-cover" 
            />
          </div>

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
              
              <div className="pt-4">
                <a 
                  href="https://x.com/sotonami" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-black font-black uppercase tracking-widest hover:bg-[#df2531] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  Follow @sotonami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- PHẦN DANH SÁCH TÁC PHẨM -------------------- */}
      <div className="py-24 px-10 md:px-20 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-black">
              Works
            </h2>
            <div className="h-0.5 flex-1 bg-black opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div key={index} className="border-2 border-black p-8 bg-white">
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

      {/* -------------------- PHẦN GALLERY ART (Sắp xếp ngang dọc) -------------------- */}
      <div className="py-24 px-10 md:px-20 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-black">
              Illustrations
            </h2>
            <div className="h-0.5 flex-1 bg-black opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {illustrations.map((art, index) => (
              <div key={index} className={`group relative ${art.layout === 'landscape' ? 'lg:col-span-2' : ''}`}>
                <div className={`relative border-2 border-black overflow-hidden bg-[#f3f3f3] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all
                  ${art.layout === 'landscape' ? 'aspect-video' : 'aspect-3/4'}
                `}>
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    /* Sử dụng object-contain cho ảnh ngang để hiện đầy đủ không bị mất chi tiết.
                       Sử dụng object-cover cho ảnh dọc để đảm bảo tính thẩm mỹ của grid.
                    */
                    className={`${art.layout === 'landscape' ? 'object-contain p-2' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-black uppercase text-sm leading-tight">{art.title}</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mt-1 tracking-widest">{art.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
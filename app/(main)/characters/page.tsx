"use client";

import Image from "next/image";

interface Character {
  name: string;
  image: string;
}

export default function CharactersPage() {
  // 1. Dữ liệu nhân vật chia theo nhóm
  const mainCharacters: Character[] = [
    { name: "Haise Sasaki", image: "/Haise.jpg" },
    { name: "Ginshi Shirazu", image: "/ginshi.jpg" },
    { name: "Kuki Urie", image: "/kuki.jpg" },
    { name: "Saiko Yonebayashi", image: "/saiko.jpg" },
    { name: "Tooru Mutsuki", image: "/tooru.jpg" },
  ];

  const secondaryCharacters: Character[] = [
    { name: "Touka Kirishima", image: "/touka 2.jpg" },
    { name: "Shuu Tsukiyama", image: "/shuu.jpg" },
    { name: "Kishou Arima", image: "/kishou.jpg" },
    { name: "Juuzou Suzuya", image: "/juuzou.jpg" },
    { name: "Akira Mado", image: "/akira.jpg" },
    { name: "Nimura Furuta", image: "/nimura.jpg" },
    { name: "Kanae Von Rosewald", image: "/kanae.jpg" },
  ];

  // Reusable Component cho từng Card nhân vật
  const CharacterCard = ({ char }: { char: Character }) => (
    <div className="group border border-black/10 hover:border-[#df2531] transition-all duration-300 bg-white overflow-hidden">
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <Image
          src={char.image}
          alt={char.name}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-black font-black uppercase italic tracking-tighter group-hover:text-[#df2531] transition-colors">
          {char.name}
        </h3>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#df2531] selection:text-white">
      {/* Header Section */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">Characters</h2>
          <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* SECTION 1: MAIN CHARACTERS */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Main</h2>
            <div className="h-2 grow bg-black mb-1"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mainCharacters.map((char, idx) => (
              <CharacterCard key={idx} char={char} />
            ))}
          </div>
        </section>

        {/* SECTION 2: SECONDARY CHARACTERS */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Secondary</h2>
            <div className="h-2 grow bg-[#df2531] mb-1"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {secondaryCharacters.map((char, idx) => (
              <CharacterCard key={idx} char={char} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
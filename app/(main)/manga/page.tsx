"use client";

import React from "react";
import Image from "next/image";

interface MangaData {
  title: string;
  author: string;
  totalChapters: number;
  vol: number;
  format: string;
  status: string;
  publishYear: string;
  magazine: string;
  description: string;
  tags: string[];
  coverImage: string;
}

const MANGA_INFO: MangaData = {
  title: "TOKYO GHOUL:re",
  author: "Sui Ishida",
  totalChapters: 179,
  vol: 16,
  format: "Manga / Artbook",
  status: "Completed",
  publishYear: "2014 - 2018",
  magazine: "Weekly Young Jump",
  description: "Haise Sasaki has been tasked with teaching Qs Squad how to be outstanding investigators, but his assignment is complicated by the troublesome personalities of his students and his own uncertain grasp of his Ghoul powers. Can he pull them together as a team, or will Qs Squad first assignment be their last?",
  tags: ["Action", "Drama", "Horror", "Seinen", "Detectives", "Psychological", "Supernatural", "Thriller"],
  coverImage: "/cover vol 1.jpg", 
};

export default function MangaPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#df2531] selection:text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 py-6 border-y border-black/10 text-sm font-medium text-gray-600">
          <div className="flex items-center justify-center gap-2"> <SVG.Stack /> Vol: {MANGA_INFO.vol}; Ch: {MANGA_INFO.totalChapters} </div>
          <div className="flex items-center justify-center gap-2 text-[#df2531] font-bold italic"> {MANGA_INFO.magazine} </div>
          <div className="flex items-center justify-center gap-2"> <SVG.Calendar /> {MANGA_INFO.publishYear} </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="relative aspect-2/3 border-4 border-black shadow-[20px_20px_0px_0px_#df2531] overflow-hidden group">
              <Image src={MANGA_INFO.coverImage} alt={MANGA_INFO.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <p className="text-xs font-black uppercase tracking-widest text-white opacity-90">Chapter {MANGA_INFO.totalChapters} / Finished</p>
              </div>
            </div>
            <button className="w-full py-4 bg-black text-white font-black uppercase tracking-tighter text-xl shadow-[6px_6px_0px_0px_#df2531] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3">
              <SVG.Book /> Read Now
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-2/3 space-y-10">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">{MANGA_INFO.title}</h1>

            <section className="space-y-4">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Synopsis</h3>
               <p className="text-gray-700 leading-relaxed text-lg italic border-l-2 border-[#df2531] pl-6">{MANGA_INFO.description}</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {MANGA_INFO.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 border border-black/5 text-[10px] font-black uppercase tracking-widest hover:bg-[#df2531] hover:text-white transition-all cursor-default text-gray-800">{tag}</span>
                ))}
              </div>
            </section>

            <section className="space-y-4 pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Series Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 border-t border-black/10 pt-6">
                <InfoRow icon={<SVG.User />} label="Author" value={MANGA_INFO.author} />
                <InfoRow icon={<SVG.Stack />} label="Total Chapters" value={MANGA_INFO.totalChapters} />
                <InfoRow icon={<SVG.Stack />} label="Format" value={MANGA_INFO.format} />
                <InfoRow icon={<SVG.Clock />} label="Status" value={MANGA_INFO.status} isHighlight />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoRow({ label, value, icon, isHighlight = false }: { label: string; value: string | number; icon: React.ReactNode; isHighlight?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors">
        {icon} <span className="text-[11px] font-black uppercase tracking-wider">{label}</span>
      </div>
      <span className={`text-sm font-bold ${isHighlight ? 'text-[#df2531]' : 'text-black'}`}>{value}</span>
    </div>
  );
}

const SVG = {
  Book: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  User: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Stack: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
  Clock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
};
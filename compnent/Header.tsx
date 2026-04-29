"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Hàm tạo style cho Link để code ngắn gọn hơn
    const getLinkStyle = (href: string) => {
        const isActive = pathname === href;
        return `px-4 py-1.5 text-[13px] font-bold uppercase transition-all duration-200 ${
            isActive 
            ? "bg-[#df2531] text-white rounded-sm" 
            : "text-white hover:text-[#df2531]"
        }`;
    };

    return (
        <nav className="bg-[#000000] text-[#ffffff] sticky top-0 z-50 px-6 lg:px-10 py-5 font-sans border-b border-[#ffffff]/10">
            <div className="flex items-center justify-between max-w-full mx-auto">

                {/* Logo Tokyo Ghoul - Style MOKOTO */}
                <Link href="/" className="group">
                    <span className="font-black text-2xl tracking-tighter uppercase italic hover:text-[#df2531] transition-colors duration-300">
                        Tokyo Ghoul:re
                    </span>
                </Link>

                {/* Menu desktop - Viết trực tiếp */}
                <div className="hidden md:flex gap-1 items-center">
                    <Link href="/storyline" className={getLinkStyle("/storyline")}>Storyline</Link>
                    <Link href="/characters" className={getLinkStyle("/characters")}>Characters</Link>
                    <Link href="/manga" className={getLinkStyle("/manga")}>Manga</Link>
                    <Link href="/anime" className={getLinkStyle("/anime")}>Anime</Link>
                    <Link href="/artists" className={getLinkStyle("/artists")}>Artists</Link>
                    <Link href="/others" className={getLinkStyle("/others")}>Others</Link>
                    <Link
                        href="/creators"
                        className="bg-[#df2531] text-[#ffffff] px-6 py-2 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#df2531] transition-all duration-300 shadow-lg active:scale-95"
                    >
                        Creators
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>
             
            {/* Menu mobile */}
            {open && (
                <div className="flex flex-col mt-4 pb-6 gap-2 md:hidden border-t border-[#ffffff]/10 pt-6 animate-in slide-in-from-top">
                    <Link href="/storyline" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Storyline</Link>
                    <Link href="/characters" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Characters</Link>
                    <Link href="/manga" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Manga</Link>
                    <Link href="/anime" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Anime</Link>
                    <Link href="/artists" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Artists</Link>
                    <Link href="/others" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Others</Link>
                    <Link href="/creator" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#df2531]">Creator</Link>
                </div>
            )}
        </nav>
    );
}
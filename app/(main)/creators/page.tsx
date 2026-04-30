"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatorsPage() {
  const creators = [
    {
      role: "Lead Developer",
      name: "William",
      major: "IT Student",
      description: "Responsible for the complete technical architecture, logic, and codebase of this project. Dedicated to transforming Sui Ishida's artistic vision into a seamless, high-performance digital experience.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript", "UI/UX Architecture"],
      image: "/creator 1.jpg", 
      themeColor: "#df2531", 
    },
    {
      role: "Editor & Translator",
      name: "Willston",
      major: "English Linguistics",
      description: "In charge of linguistic integrity, translating specialized content, and refining all textual elements. Ensuring that every message is accurate, evocative, and stays true to the series' dark aesthetic.",
      skills: ["Localization", "Copy Editing", "Content Strategy", "Linguistics"],
      image: "/creator 2.jpg",
      themeColor: "#df2531",
    }
  ];

  return (
    <section className="bg-white min-h-screen text-black selection:bg-[#df2531] selection:text-white pb-20">
      {/* Header Section */}
      <div className="py-24 px-10 md:px-20 lg:px-32 border-b-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            The <br /> Creators
          </h1>
          <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
          <p className="mt-6 text-xl font-bold text-gray-500 uppercase tracking-[0.4em]">
            Behind the project
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-32 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {creators.map((person, index) => (
            <div 
              key={index} 
              className="group flex flex-col space-y-8"
            >
              {/* Profile Image - Clean Minimalist Style */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 ring-1 ring-black/5 group-hover:ring-black transition-all duration-500 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] group-hover:shadow-[20px_20px_0px_0px_#df2531]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                {/* Badge */}
                <div className="absolute bottom-6 left-0 bg-black text-white px-6 py-2 font-black uppercase text-xs tracking-[0.3em]">
                  {person.role}
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter transition-colors duration-300 group-hover:text-[#df2531]">
                    {person.name}
                  </h2>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mt-1">
                    {person.major}
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 font-medium italic border-l-4 border-black/10 pl-6 group-hover:border-[#df2531] transition-colors">
                  {person.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {person.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#df2531] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-32 border-t-2 border-black pt-16 flex justify-center">
          <Link 
            href="/" 
            className="group relative px-12 py-4 bg-white border-2 border-black font-black uppercase tracking-[0.2em] transition-all hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_#df2531]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
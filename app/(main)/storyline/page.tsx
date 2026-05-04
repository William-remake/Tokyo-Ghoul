"use client";

import React from "react";

const arcs = [
  {
    title: "Torso Investigation Arc",
    description: "Introduces Haise Sasaki and the Quinx Squad (QS) as they hunt down the ghoul known as 'Torso'. Haise begins to struggle with fragmented, haunting memories of his hidden past."
  },
  {
    title: "Nutcracker Investigation Arc",
    description: "The Quinx Squad goes undercover to infiltrate the underworld and investigate Nutcracker, a key figure leading to large-scale ghoul auctions."
  },
  {
    title: "Auction Mopping-Up Operation Arc",
    description: "The CCG launches a massive raid on the Ghoul Auction. A brutal confrontation between Haise and Takizawa (Owl) triggers a partial awakening of Kaneki's dormant power."
  },
  {
    title: "Rose Investigation Arc",
    description: "Focuses on the investigation into the Tsukiyama family (Rosewald). Haise begins to reconnect with Shuu Tsukiyama and starts questioning the truth of his identity."
  },
  {
    title: "Tsukiyama Family Extermination Operation Arc",
    description: "A climactic battle on the rooftop of the Lunatic Building. Haise fully embraces his Kaneki persona and Kakuja form to defeat Eto Yoshimura, emerging as the 'Black Reaper'."
  },
  {
    title: "Third Cochlea Raid / Rushima Landing Operation",
    description: "A dual-front war on Rushima Island and the Cochlea prison. Kaneki betrays the CCG to rescue Hinami, defeats Kishou Arima, and inherits the title of the One-Eyed King."
  },
  {
    title: "Clown Siege / CCG Lab Infiltration Arc",
    description: "The Clown organization launches a city-wide assault. Kaneki leads the 'Goat' organization in a raid on CCG laboratories to find a cure for the weakening ghouls."
  },
  {
    title: "24th Ward Raid",
    description: "Under Furuta's leadership, the CCG discovers and raids Goat's underground base in the 24th Ward. Desperate to protect Touka, Kaneki loses control and transforms into 'Dragon'."
  },
  {
    title: "Dragon War Arc",
    description: "The final battle where Ghouls and CCG unite against the Dragon threat. Kaneki enters the Dragon's core to destroy it and faces Furuta in a final duel to end the cycle of tragedy."
  }
];

export default function StorylinePage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-[#df2531] py-20 px-6 md:px-20 lg:px-40">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#df2531] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#df2531] blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-12 bg-[#df2531]"></span>
            <span className="text-[#df2531] font-black uppercase tracking-[0.4em] text-xs">Storyline</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter title-scan-effect leading-none">
            Tokyo Ghoul:re Arcs
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl uppercase tracking-widest text-[10px] font-bold leading-loose">
            The journey from Haise Sasaki to the One-Eyed King and the final salvation.
          </p>
        </div>

        {/* Arcs List */}
        <div className="grid gap-8">
          {arcs.map((arc, index) => (
            <div 
              key={index}
              className="group relative border-l-2 border-white/10 hover:border-[#df2531] pl-8 py-6 transition-all duration-500 hover:bg-white/2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Index Number */}
              <span className="absolute left-[-1.2rem] top-7 bg-black text-[#df2531] font-black italic px-1 text-sm group-hover:scale-125 transition-transform duration-300">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Arc Title */}
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#df2531] transition-colors duration-300 mb-3 italic">
                {arc.title}
              </h2>

              {/* Arc Description */}
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-3xl group-hover:text-gray-200 transition-colors">
                {arc.description}
              </p>

              {/* Decorative Glow */}
              <div className="absolute right-0 top-0 h-full w-40 bg-linear-to-l from-[#df2531]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for Scan Effect */}
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

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s forwards ease-out; opacity: 0; }
        .animate-fade-in { animation: fade-in 1.5s forwards; }
      `}</style>
    </main>
  );
}
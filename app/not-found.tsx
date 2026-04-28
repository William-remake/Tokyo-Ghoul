// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[#000000] z-9999 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* SỐ 404 NỀN - Màu đỏ mờ đặc trưng */}
      <h1 className="absolute font-sans font-black text-[#df2531]/10 select-none pointer-events-none tracking-tighter italic"
          style={{ fontSize: 'min(30rem, 60vw)', lineHeight: '0.8' }}>
        404
      </h1>

      <div className="relative z-10 space-y-6">
        {/* TIÊU ĐỀ CHÍNH - Chữ trắng và đỏ */}
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-[#ffffff] tracking-tighter">
          Page <span className="text-[#df2531]">Not Found</span>
        </h2>
        
        <p className="text-gray-400 max-w-sm mx-auto font-medium text-lg leading-relaxed uppercase tracking-widest">
          Lost in the darkness? Let us get you back to safety.
        </p>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-block bg-[#df2531] text-[#ffffff] px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-white hover:text-[#df2531] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(223,37,49,0.4)] active:scale-95"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
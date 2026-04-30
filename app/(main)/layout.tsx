import Header from "@/compnent/Header"
import Footer from "@/compnent/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header/>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer/>
        
        {/* Vercel Speed Insights component */}
        <SpeedInsights />
      </body>
    </html>
  );
}
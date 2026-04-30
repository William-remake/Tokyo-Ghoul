import Header from "@/compnent/Header"
import Footer from "@/compnent/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <Header />

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
        
        {/* Vercel Monitoring Tools */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
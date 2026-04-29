import Header from "@/compnent/Header"
import Footer from "@/compnent/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="min-h-full flex flex-col">
            <body>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}
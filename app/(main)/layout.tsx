import Header from "@/compnent/Header"
import Footer from "@/compnent/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-1 flex flex-col">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}
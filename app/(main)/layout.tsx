import Header from "@/compnent/Header"
import Footer from "@/compnent/Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <Footer/>
    </>
  );
}
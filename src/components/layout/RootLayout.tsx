import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 relative font-sans overflow-hidden">
      {/* Mesh Background Decorative Elements */}
      <div className="fixed top-[-200px] right-[-100px] w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <ScrollRestoration />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
      
      {/* Floating CTA */}
      <a 
        href="/quote"
        className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-black hover:scale-105 transition-transform flex items-center gap-2 border border-slate-700 hover:shadow-brand-yellow/20"
      >
        <span className="hidden sm:inline">Get Free Quote</span>
        <span className="sm:hidden">Quote</span>
      </a>
    </div>
  );
}

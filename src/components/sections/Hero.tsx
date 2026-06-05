import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-white/40 bg-white/60 backdrop-blur px-4 py-1.5 text-[11px] font-bold tracking-widest text-brand-yellow uppercase mb-6">
              #1 RATED SOLAR INSTALLER 
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-8"
          >
            Cut Your Electricity Bills by <span className="text-brand-yellow">Up to 90%</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
             Premium solar solutions for homes and businesses. Maximize your savings, energy independence, and property value with smart clean energy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 group rounded-xl shadow-xl hover:bg-black bg-slate-900 text-white">
              Get Free Solar Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:border-slate-400">
              <Link to="#calculator">Calculate Savings</Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 opacity-60 mt-8 border-t border-slate-200/50"
          >
             <div className="flex items-center gap-3">
               <CheckCircle2 className="h-6 w-6 text-brand-green" />
               <span className="text-slate-700 font-bold tracking-tight">25-Year Warranty</span>
             </div>
             <div className="w-[1px] h-4 bg-slate-300 hidden md:block"></div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="h-6 w-6 text-brand-green" />
               <span className="text-slate-700 font-bold tracking-tight">Zero Down Financing</span>
             </div>
             <div className="w-[1px] h-4 bg-slate-300 hidden md:block"></div>
             <div className="flex items-center gap-3">
               <CheckCircle2 className="h-6 w-6 text-brand-green" />
               <span className="text-slate-700 font-bold tracking-tight">Award-Winning Service</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

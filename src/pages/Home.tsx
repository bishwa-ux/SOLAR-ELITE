import { HeroSection } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BenefitsSection } from "@/components/sections/Benefits";
import { CalculatorSection } from "@/components/sections/Calculator";
import { ServicesSection } from "@/components/sections/Services";
import { FAQSection } from "@/components/sections/FAQ";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function TestimonialSection() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Hear From Our Customers</h2>
          <p className="text-lg text-slate-600">Join thousands of businesses and homeowners who have achieved true energy independence.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              name: "Sarah Jenkins",
              type: "Residential Solar",
              quote: "Our electric bill dropped from $350 a month to just the $12 connection fee. The installation was fast, clean, and the app makes monitoring production incredibly satisfying.",
              rating: 5
            },
            {
              name: "Michael Chen",
              type: "Commercial Array - Tech Park",
              quote: "Solaris handled our complete 500kW commercial deployment. Not only did we hit our corporate sustainability ESG goals, but the financial ROI tracking is exceeding expectations by 15%.",
              rating: 5
            },
            {
              name: "Emily Rodriguez",
              type: "Home + Battery Backup",
              quote: "During the recent grid outages, our house was the only one on the block with lights on. The whole-home battery backup system is the best investment we've made.",
              rating: 5
            }
          ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[32px] text-slate-800 flex-1 relative shadow-xl"
             >
               <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-yellow text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                 Verified
               </div>
               <div className="flex text-brand-yellow mb-6 drop-shadow-sm">
                 {[...Array(item.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
               </div>
               <p className="text-lg leading-relaxed mb-6 font-medium text-slate-700 selection:bg-brand-yellow/20">"{item.quote}"</p>
               <div>
                 <div className="font-black text-lg text-slate-900">{item.name}</div>
                 <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mt-1">{item.type}</div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 bg-white/40 backdrop-blur-xl border-y border-white/60 relative z-20">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 max-w-3xl mx-auto leading-tight">
          Start Your Transition to Clean Energy Today
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
          Whether you need a residential system or a massive commercial array, our engineers are ready to design your optimal solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-slate-900 text-white hover:bg-black h-14 px-10 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all">
            Book Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-slate-200 bg-white text-slate-700 hover:border-slate-400 h-14 px-10 text-lg rounded-xl shadow-sm transition-all focus:outline-none">
            View Our Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <CalculatorSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

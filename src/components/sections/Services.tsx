import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2, Factory, Wrench, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  {
    title: "Residential Solar",
    description: "Premium rooftop solar and battery storage solutions tailored for homeowners. Cut costs and protect against outages.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop",
    link: "/residential",
  },
  {
    title: "Commercial Solar",
    description: "High-yield commercial solar PV systems. Boost your bottom line, harness tax depreciation, and achieve ESG goals.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
    link: "/commercial",
  },
  {
    title: "Industrial & Utility",
    description: "Large-scale MW deployments, ground mounts, and microgrids for heavy industry and utility-scale energy generation.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    link: "/industrial",
  },
  {
    title: "Solar Maintenance (AMC)",
    description: "Proactive panel cleaning, inverter diagnostics, and long-term Annual Maintenance Contracts to ensure peak efficiency.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    link: "/process",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur border border-white/40 rounded-full text-[11px] font-bold tracking-widest text-brand-yellow uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-6 mb-4">Comprehensive Solar Solutions</h2>
            <p className="text-lg text-slate-600">From single-family homes to mega-watt industrial campuses, we manage everything from engineering to activation.</p>
          </div>
          <Button variant="outline" size="lg" className="shrink-0 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:border-slate-400" asChild>
            <Link to="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-[32px] overflow-hidden bg-slate-100 shadow-xl"
              >
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors duration-500" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 h-12 w-12 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-8 relative z-20 bg-white/60 backdrop-blur-md border-t border-white/60 group-hover:-translate-y-4 transition-transform duration-300">
                  <h3 className="text-2xl font-bold font-display text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 font-medium">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-brand-yellow font-bold uppercase tracking-widest text-[11px] hover:text-brand-yellow-hover transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export function TrustBar() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Installations" },
    { value: "500MW", label: "Clean Energy Deployed" },
    { value: "4.9/5", label: "Customer Satisfaction" },
  ];

  return (
    <div className="bg-white/40 backdrop-blur-sm border-y border-white/40 text-slate-900 relative z-20 py-8 lg:mx-12 lg:rounded-3xl shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="text-center px-4 space-y-1"
            >
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
              <div className="text-3xl md:text-4xl font-black font-display text-slate-900">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

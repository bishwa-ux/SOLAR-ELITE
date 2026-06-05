import { Shield, Zap, TrendingDown, SunDim, Award, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Lower Electricity Bills",
    description: "Lock in lower rates and protect yourself against rising utility costs. Save up to 90% immediately.",
    icon: TrendingDown,
  },
  {
    title: "Energy Independence",
    description: "Generate your own power and reduce reliance on aging grid infrastructure and foreign energy.",
    icon: Zap,
  },
  {
    title: "Increased Property Value",
    description: "Homes with solar sell for 4.1% more on average, representing a significant return on investment.",
    icon: HomeIcon, // Will implement simple custom icon mapping
  },
  {
    title: "Environmental Impact",
    description: "Offset tons of CO2 emissions annually. A standard system has the impact of planting 100+ trees a year.",
    icon: SunDim,
  },
  {
    title: "Government Incentives",
    description: "Leverage federal tax credits (ITC) and local net metering programs for faster ROI.",
    icon: Award,
  },
  {
    title: "Long-term Reliability",
    description: "Tier 1 panels with no moving parts designed to weather extreme conditions with a 25-yr guarantee.",
    icon: Shield,
  },
];

// Helper icon
function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


export function BenefitsSection() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BadgeCheck className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Why Go Solar Today?</h2>
          <p className="text-lg text-slate-600">The economics of solar energy have never been better. Take control of your energy costs and secure a sustainable future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-xl p-8 rounded-[32px] shadow-xl border border-white/60 hover:shadow-2xl transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand-yellow flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-yellow/30">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

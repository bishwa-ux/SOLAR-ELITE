import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Coins, Home, Factory, Building2 } from "lucide-react";

export function CalculatorSection() {
  const [bill, setBill] = useState(250);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | "industrial">("residential");

  // Basic calculation logic for demonstration
  // Assuming $0.15 / kWh, so $250 bill = ~1666 kWh/month = ~20 MWh/year
  // Solar rule of thumb: 1kW panel generates ~1.5MWh/year. So need ~13kW system.
  // Cost: ~$3/watt before incentives.
  
  const estimatedAnnualConsumptionMWh = (bill * 12) / 150; 
  const recommendedSystemSizeKw = Math.max(3, Math.round(estimatedAnnualConsumptionMWh / 1.5));
  const estimatedSavingsPerYear = bill * 12 * 0.9; // 90% savings
  const estimatedSavings25Years = estimatedSavingsPerYear * 25;
  const treesPlantedEq = Math.round(recommendedSystemSizeKw * 10);

  return (
    <section className="py-24 bg-transparent text-slate-800 overflow-hidden relative z-10" id="calculator">
      <div className="container mx-auto px-4 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Calculate Your Solar Savings</h2>
          <p className="text-lg text-slate-600">Discover how much you could save on your electricity bills over the next 25 years with a custom solar installation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10 items-center">
          
          {/* Calculator Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-xl rounded-[32px] border border-white/60 p-8 lg:p-10 shadow-2xl text-slate-800 space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-bold font-display text-slate-800">Your Details</h3>
              <p className="text-sm text-slate-500 font-medium">See how much solar can save you instantly.</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">Property Type</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPropertyType("residential")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${propertyType === 'residential' ? 'border-brand-yellow bg-white/60 text-slate-900 shadow-md' : 'border-white bg-white/20 text-slate-500 hover:bg-white/40'}`}
                  >
                    <Home className={`h-6 w-6 mb-2 ${propertyType === 'residential' ? 'text-brand-yellow' : ''}`} />
                    <span className="text-sm font-bold">Home</span>
                  </button>
                  <button
                    onClick={() => setPropertyType("commercial")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${propertyType === 'commercial' ? 'border-brand-yellow bg-white/60 text-slate-900 shadow-md' : 'border-white bg-white/20 text-slate-500 hover:bg-white/40'}`}
                  >
                    <Building2 className={`h-6 w-6 mb-2 ${propertyType === 'commercial' ? 'text-brand-yellow' : ''}`} />
                    <span className="text-sm font-bold">Business</span>
                  </button>
                  <button
                    onClick={() => setPropertyType("industrial")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${propertyType === 'industrial' ? 'border-brand-yellow bg-white/60 text-slate-900 shadow-md' : 'border-white bg-white/20 text-slate-500 hover:bg-white/40'}`}
                  >
                    <Factory className={`h-6 w-6 mb-2 ${propertyType === 'industrial' ? 'text-brand-yellow' : ''}`} />
                    <span className="text-sm font-bold">Industrial</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                  <span>Monthly Electricity Bill</span>
                  <span className="text-xl font-bold text-slate-900">${bill}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max={propertyType === "residential" ? 1000 : 10000}
                  step={propertyType === "residential" ? 10 : 100}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-brand-yellow shadow-inner"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-bold">
                  <span>$50</span>
                  <span>${propertyType === "residential" ? '1k+' : '10k+'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/40">
                <Button className="w-full text-lg h-14 bg-slate-900 hover:bg-black text-white rounded-xl shadow-xl hover:shadow-2xl" size="lg">
                  Get Detailed Proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Calculator Outputs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl col-span-1 sm:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated Lifetime Savings</span>
                  <span className="text-3xl lg:text-4xl font-black text-brand-yellow font-display">
                    ${estimatedSavings25Years.toLocaleString()}
                  </span>
                </div>
                <div className="h-[1px] bg-white/10 my-6"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Payback Period</div>
                    <div className="text-2xl font-bold text-white">4.2 Years</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">System Size</div>
                    <div className="text-2xl font-bold text-white">{recommendedSystemSizeKw} <span className="text-lg">kW</span></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur border border-white/60 rounded-3xl p-6 shadow-xl">
                 <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-3xl font-black text-slate-800 font-display mb-1">
                  {treesPlantedEq}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Trees Equivalent<br/>Planted</div>
              </div>

               <div className="bg-white/60 backdrop-blur border border-white/60 rounded-3xl p-6 shadow-xl">
                 <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-brand-yellow" />
                </div>
                <div className="text-3xl font-black text-slate-800 font-display mb-1">
                  ${estimatedSavingsPerYear.toLocaleString()}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">First Year<br/>Savings</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

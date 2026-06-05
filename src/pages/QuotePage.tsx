import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-8 space-y-6 rounded-2xl shadow-xl border border-gray-100 text-center"
        >
          <div className="h-20 w-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold font-display text-brand-blue">Quote Requested!</h2>
          <p className="text-slate-600">
            Thank you! A Solaris energy consultant will review your details and contact you within 24 hours to schedule your free site assessment.
          </p>
          <Button asChild className="w-full">
            <a href="/">Return to Home</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-transparent px-4 relative z-10">

        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 relative z-10 items-center">
          <div className="md:w-1/2 text-slate-900 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-display font-black mb-6">Get Your Free Solar Proposal</h1>
            <p className="text-slate-600 font-medium text-lg mb-8 leading-relaxed">
              Find out exactly how much you can save with a custom solar & storage solution designed specifically for your property structure and energy usage.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 shadow-sm border border-white/60">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                 </div>
                 <span className="font-bold text-slate-700">No obligation, 100% free consultation</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 shadow-sm border border-white/60">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                 </div>
                 <span className="font-bold text-slate-700">Custom satellite roof design</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 shadow-sm border border-white/60">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                 </div>
                 <span className="font-bold text-slate-700">Accurate financial ROI projections</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-2xl relative">
              <div className="mb-6 flex gap-2">
                <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-brand-yellow' : 'bg-gray-100'}`} />
                <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-brand-yellow' : 'bg-gray-100'}`} />
                <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-brand-yellow' : 'bg-gray-100'}`} />
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                       <h3 className="text-2xl font-bold font-display text-brand-blue mb-6">Property Details</h3>
                       <div className="space-y-4 mb-8">
                         <div>
                           <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                           <select required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent">
                             <option value="">Select an option</option>
                             <option value="residential">Residential Home</option>
                             <option value="commercial">Commercial Building</option>
                             <option value="industrial">Industrial Facility</option>
                           </select>
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-slate-700 mb-2">Average Monthly Electric Bill ($)</label>
                           <input type="number" min="0" required placeholder="e.g. 200" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-slate-700 mb-2">Zip Code</label>
                           <input type="text" required placeholder="Enter zip code" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                         </div>
                       </div>
                       <Button type="button" onClick={() => setStep(2)} className="w-full text-lg h-12 bg-slate-900 rounded-xl hover:bg-black text-white hover:scale-[1.01] transition-transform">
                         Next Step <ArrowRight className="ml-2 h-5 w-5" />
                       </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                       <h3 className="text-2xl font-bold font-display text-brand-blue mb-6">Contact Information</h3>
                       <div className="space-y-4 mb-8">
                         <div className="grid grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                             <input type="text" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                           </div>
                           <div>
                             <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                             <input type="text" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                           </div>
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                           <input type="email" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                         </div>
                         <div>
                           <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                           <input type="tel" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent" />
                         </div>
                       </div>
                       <Button type="button" onClick={() => setStep(3)} className="w-full text-lg h-12 bg-slate-900 rounded-xl hover:bg-black text-white hover:scale-[1.01] transition-transform">
                         Final Step <ArrowRight className="ml-2 h-5 w-5" />
                       </Button>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                       <h3 className="text-2xl font-bold font-display text-slate-800 mb-6">Review & Submit</h3>
                       <div className="bg-white/60 rounded-xl p-4 text-sm text-slate-600 mb-8 border border-white/60 font-medium leading-relaxed">
                         By clicking submit, you authorize Solaris Energy solutions and its partners to contact you at the phone number provided, including using automated technology. Consent is not a condition of purchase.
                       </div>
                       <Button type="submit" variant="default" className="w-full text-lg h-14 bg-brand-yellow text-white hover:bg-brand-yellow-hover rounded-xl shadow-xl hover:-translate-y-1 transition-transform">
                         Get My Free Proposal
                       </Button>
                       <button type="button" onClick={() => setStep(2)} className="w-full mt-4 text-sm font-medium text-slate-500 hover:text-brand-blue underline underline-offset-4">
                         Go back to edit details
                       </button>
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </form>
            </div>
          </div>
       </div>
    </div>
  );
}

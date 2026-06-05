import { CalculatorSection } from "@/components/sections/Calculator";

export default function CalculatorPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-transparent relative z-10">
      <div className="container mx-auto px-4 max-w-4xl text-center mb-0 mt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-display mb-6">Interactive Solar Estimator</h1>
        <p className="text-xl text-slate-600 font-medium">Your transition to clean energy starts with understanding your potential savings. Use our enterprise-grade calculator below.</p>
      </div>
      <CalculatorSection />
    </div>
  );
}

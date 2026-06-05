import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How much does a solar panel system cost?",
    a: "The cost varies depending on system size, location, and equipment chosen. On average, residential systems range from $15,000 to $25,000 before tax credits. Our free consultation provides a precise estimate tailored to your energy needs.",
  },
  {
    q: "How do government solar subsidies and tax credits work?",
    a: "In many regions, you can claim the Federal Solar Investment Tax Credit (ITC), which currently covers 30% of the installation cost. There may also be state and local rebates. Our team handles all the paperwork to ensure you maximize your incentives.",
  },
  {
    q: "What happens during a power outage? Will I have electricity?",
    a: "Standard grid-tied solar systems automatically shut down during an outage for safety. However, if you add a solar battery backup system (such as a Tesla Powerwall) to your installation, you will have continuous power during grid outages.",
  },
  {
    q: "Do solar panels require maintenance?",
    a: "Solar panels require very little maintenance because they have no moving parts. Occasional cleaning (once or twice a year) is recommended to ensure maximum efficiency. We also offer active monitoring to detect any performance issues instantly.",
  },
  {
    q: "Will my roof need to be replaced before going solar?",
    a: "It depends on the condition of your roof. Solar panels last 25+ years, so we recommend having at least 15 years of life left on your roof. Our site survey will determine if any roof repairs are necessary before installation.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know about making the switch to solar energy.</p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white/40 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl border border-white/60">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-white/40 last:border-0 py-2">
              <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-brand-yellow hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 font-medium text-base leading-relaxed pt-2 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center bg-slate-900 text-white p-10 rounded-[32px] shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold font-display mb-2">Still have questions?</h3>
              <p className="text-slate-400">Our solar experts are here to help you understand your options.</p>
            </div>
            <Button variant="default" size="lg" className="whitespace-nowrap w-full md:w-auto rounded-xl">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

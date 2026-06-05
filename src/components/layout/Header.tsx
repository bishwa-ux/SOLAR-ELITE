import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Residential", href: "/residential" },
    { name: "Commercial", href: "/commercial" },
    { name: "Calculator", href: "/calculator" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/20 bg-white/40 backdrop-blur-md py-3"
          : "bg-white/40 backdrop-blur-md py-4 lg:bg-transparent lg:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className={cn("text-xl font-bold font-display tracking-tight text-brand-blue")}>
              SOLAR<span className="text-brand-yellow">ELITE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-yellow",
                  location.pathname === link.href ? "text-brand-yellow border-b-2 border-brand-yellow pb-1" : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+18001234567" className={cn("flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand-yellow text-slate-600")}>
              <PhoneCall className="h-4 w-4" />
              <span>1-800-123-4567</span>
            </a>
            <Button asChild variant="default" className="rounded-full shadow-lg hover:shadow-brand-yellow/20">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 z-50 text-brand-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col py-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-4 text-lg font-semibold border-b border-gray-50 flex items-center justify-between",
                  location.pathname === link.href ? "text-brand-yellow bg-gray-50" : "text-brand-blue"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6 flex flex-col gap-4">
              <a href="tel:+18001234567" className="flex items-center justify-center gap-2 w-full py-3 mt-4 text-brand-blue font-semibold border border-brand-blue rounded-md">
                <PhoneCall className="h-5 w-5" />
                <span>Call Us Today</span>
              </a>
              <Button asChild variant="default" size="lg" className="w-full">
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-sm border-t border-white/20 pt-16 pb-8 text-slate-600 relative z-20">
      <div className="container mx-auto px-4 md:px-6 border-b border-white/40 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-slate-800">
                SOLAR<span className="text-brand-yellow">ELITE</span>
              </span>
            </Link>
            <p className="text-slate-600 pr-4">
              Accelerating the world's transition to sustainable energy. Premium solar installations for residential, commercial, and industrial clients with unbeatable ROI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-brand-yellow hover:text-white transition-colors border border-white/60">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-brand-yellow hover:text-white transition-colors border border-white/60">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-brand-yellow hover:text-white transition-colors border border-white/60">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-brand-yellow hover:text-white transition-colors border border-white/60">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-6 text-slate-800">Quick Links</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link to="/residential" className="hover:text-slate-900 transition-colors">Residential Solar</Link></li>
              <li><Link to="/commercial" className="hover:text-slate-900 transition-colors">Commercial Solar</Link></li>
              <li><Link to="/calculator" className="hover:text-slate-900 transition-colors">Savings Calculator</Link></li>
              <li><Link to="/process" className="hover:text-slate-900 transition-colors">Installation Process</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-6 text-slate-800">Resources</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link to="/subsidy" className="hover:text-slate-900 transition-colors">Government Subsidies</Link></li>
              <li><Link to="/projects" className="hover:text-slate-900 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-slate-900 transition-colors">Solar Blog</Link></li>
              <li><Link to="/faq" className="hover:text-slate-900 transition-colors">FAQ</Link></li>
              <li><Link to="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-6 text-slate-800">Contact Us</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-brand-yellow shrink-0" />
                <span className="hover:text-slate-900">100 Solar Innovation Way,<br />Tech Park, CA 94025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-yellow shrink-0" />
                <a href="tel:+18001234567" className="hover:text-slate-900 transition-colors">1-800-123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-yellow shrink-0" />
                <a href="mailto:hello@solarisenergy.com" className="hover:text-slate-900 transition-colors">hello@solarisenergy.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
        <p>&copy; {new Date().getFullYear()} Solaris Energy Solutions. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

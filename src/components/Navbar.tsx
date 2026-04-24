import { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-2xl border-b border-border">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="SV Service Centre" className="w-full h-full object-contain" />
          </div>
          <span className="text-[13px] sm:text-[15px] font-semibold text-text tracking-tight leading-tight">
            Sri Venkateswara<span className="hidden sm:inline"> Service Centre</span>
            <span className="sm:hidden"> Service</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-text-secondary">
          <a href="#" className="hover:text-text transition-colors">Home</a>
          <a href="#services" className="hover:text-text transition-colors">Services</a>
          <a href="#about" className="hover:text-text transition-colors">About</a>
          <a href="#contact" className="hover:text-text transition-colors">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a href="#booking" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white bg-primary rounded-full hover:bg-blue-700 transition-colors">
            Book Service
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2">
          <div className="flex flex-col gap-1">
            {[
              { label: 'Home', href: '#' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 text-[15px] font-medium text-text-secondary hover:text-text hover:bg-bg rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 px-5 text-center text-[15px] font-semibold text-white bg-primary rounded-full hover:bg-blue-700 transition-colors"
            >
              Book Service
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[hsl(162_16%_21%)] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="text-2xl font-display font-bold text-white">
            Nikhil V<span className="text-[hsl(209_87%_50%)]">.dev</span>
          </a>


          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-6">
            <p className="text-white/60 text-sm">
              © {currentYear} Nikhil V. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[hsl(209_87%_21%)] text-white flex items-center justify-center hover:scale-110 hover:bg-[hsl(209_87%_28%)] transition-all duration-300"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

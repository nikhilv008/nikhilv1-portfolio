import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="font-display font-bold gradient-text">Nikhil V</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" />
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

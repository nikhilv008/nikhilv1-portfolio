import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const badges = [
  { label: 'React', color: 'primary' },
  { label: 'JavaScript', color: 'accent' },
  { label: 'Frontend Focused', color: 'secondary' },
];

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 blob animate-blob animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/30 to-primary/20 blob animate-blob animate-pulse-slow" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-accent/20 to-secondary/20 blob animate-blob" style={{ animationDelay: '-2s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {badges.map((badge, index) => (
              <span
                key={badge.label}
                className="skill-pill flex items-center gap-2 opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Sparkles size={14} className="text-primary" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="gradient-text">Nikhil V</span>
            <span className="text-primary"> →</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Web Developer crafting{' '}
            <span className="text-foreground font-semibold">modern</span>,{' '}
            <span className="text-foreground font-semibold">fast</span>, and{' '}
            <span className="text-foreground font-semibold">interactive</span> websites.
          </p>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I build responsive web apps with clean code, smooth UI, and strong performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => handleNavClick('#projects')}
              className="btn-primary flex items-center gap-2 group"
            >
              <span>🚀</span>
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

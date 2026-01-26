import { useEffect, useRef } from 'react';
import { Instagram, Dribbble, Linkedin, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Top row with name and intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left side - Name */}
          <div className="reveal">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight">
              <span className="yellow-underline">Carlos</span>
              <br />
              Mendoza
            </h1>
          </div>

          {/* Right side - Introduction */}
          <div className="reveal delay-200 lg:pt-8">
            <span className="section-label">Introduction</span>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a multi-disciplinary designer and developer based in San Francisco, 
              crafting premium digital experiences that blend aesthetics with functionality. 
              I believe in the power of thoughtful design to transform businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Let's Talk
                <ArrowUpRight size={18} />
              </a>
              <a href="#works" className="btn-outline">
                View Work
              </a>
            </div>
          </div>
        </div>

        {/* Profile image and social links */}
        <div className="grid lg:grid-cols-3 gap-8 items-end">
          {/* Social links */}
          <div className="reveal delay-300 order-2 lg:order-1">
            <span className="section-label">Follow Me</span>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Dribbble size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="reveal delay-400 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-border">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Carlos Mendoza"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm">
                Available for work
              </div>
            </div>
          </div>

          {/* Quick stat */}
          <div className="reveal delay-500 order-3 text-right">
            <span className="section-label">Based In</span>
            <p className="text-2xl font-display font-semibold">San Francisco, CA</p>
            <p className="text-muted-foreground">UTC -8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

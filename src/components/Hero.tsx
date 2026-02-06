import { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

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
    <section ref={sectionRef} id="home" className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Top row with name and intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          {/* Left side - Name */}
          <div className="reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] tracking-tight">
              Nikhil V
            </h1>
            <p className="text-2xl md:text-3xl font-display font-medium text-muted-foreground mt-4">
              Web Developer
            </p>
          </div>

          {/* Right side - Introduction */}
          <div className="reveal delay-200 lg:pt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a web developer specializing in modern website design and full-stack web applications. I build responsive, high-performance websites that help businesses grow and establish a strong digital presence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#works" className="btn-primary flex items-center gap-2">
                View Work
                <ArrowUpRight size={18} />
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
                href="https://github.com/nikhilv008" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nikhil-v-879156283/" 
                target="_blank"
                rel="noopener noreferrer"
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
                  src={profileImage}
                  alt="Nikhil V"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Availability text below image */}
            <p className="text-center text-muted-foreground mt-6 text-sm">
              Available for freelance and internship opportunities.
            </p>
          </div>

          {/* Quick stat */}
          <div className="reveal delay-500 order-3 text-right">
            <span className="section-label">Based In</span>
            <p className="text-2xl font-display font-semibold">Chennai, TamilNadu</p>
            <p className="text-muted-foreground">India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

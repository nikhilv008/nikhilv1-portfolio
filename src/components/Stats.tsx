import { useEffect, useRef } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

const Stats = () => {
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
    <section ref={sectionRef} className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {/* Query Card */}
          <div className="reveal bento-card flex flex-col justify-center items-center text-center p-4 min-h-[120px]">
            <MessageCircle size={24} className="text-primary mb-2" />
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1 text-primary font-medium text-sm group"
            >
              Contact
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Experience Stat */}
          <div className="reveal delay-100 bento-card flex flex-col justify-center items-center text-center p-4 min-h-[120px]">
            <span className="text-2xl font-display font-bold text-foreground">Fresher</span>
            <p className="text-muted-foreground text-xs mt-1">Eager to Explore</p>
          </div>

          {/* Clients Stat */}
          <div className="reveal delay-200 bento-card flex flex-col justify-center items-center text-center p-4 min-h-[120px]">
            <span className="text-2xl font-display font-bold text-foreground">2</span>
            <p className="text-muted-foreground text-xs mt-1">Internships Done</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

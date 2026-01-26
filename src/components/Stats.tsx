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
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Query Card */}
          <div className="reveal bento-card flex flex-col justify-between min-h-[200px]">
            <div>
              <MessageCircle size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">
                Any Type of Query
              </h3>
              <p className="text-muted-foreground text-sm">
                Feel free to reach out for projects, collaborations, or just to say hello.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary font-medium mt-4 group"
            >
              Get in Touch
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Experience Stat */}
          <div className="reveal delay-100 bento-card flex flex-col justify-center items-center text-center min-h-[200px]">
            <span className="stat-number">14</span>
            <p className="text-muted-foreground mt-2">Years of Experience</p>
          </div>

          {/* Clients Stat */}
          <div className="reveal delay-200 bento-card flex flex-col justify-center items-center text-center min-h-[200px]">
            <span className="stat-number">187</span>
            <p className="text-muted-foreground mt-2">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

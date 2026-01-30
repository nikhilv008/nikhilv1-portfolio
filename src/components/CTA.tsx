import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
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
        <div className="reveal text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-6">
            Have a project in <span className="text-primary">mind?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            I design and build modern, high-performance digital experiences. Let's create something impactful together.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

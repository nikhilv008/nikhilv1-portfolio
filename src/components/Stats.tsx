import { useEffect, useRef } from 'react';

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
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {/* Internships Stat */}
          <div className="reveal bento-card flex flex-col justify-center items-center text-center p-4 min-h-[120px]">
            <span className="text-2xl font-display font-bold text-foreground">2</span>
            <p className="text-muted-foreground text-xs mt-1">Internships</p>
          </div>

          {/* Projects Stat */}
          <div className="reveal delay-100 bento-card flex flex-col justify-center items-center text-center p-4 min-h-[120px]">
            <span className="text-2xl font-display font-bold text-foreground">4</span>
            <p className="text-muted-foreground text-xs mt-1">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

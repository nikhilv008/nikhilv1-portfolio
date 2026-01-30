import { useEffect, useRef } from 'react';

const skills = [
  'UI/UX Design',
  'React.js',
  'HTML',
  'CSS',
  'JavaScript',
  'Git & GitHub',
  'API Integration',
  'Responsive Layouts',
  'UI Prototyping',
];

const Skills = () => {
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
    <section ref={sectionRef} id="skills" className="py-16">
      <div className="container mx-auto px-6">
        {/* Availability Strip */}
        <div className="reveal text-center mb-12">
          <p className="text-sm text-primary font-medium">
            Available for freelance and internship opportunities.
          </p>
        </div>

        <div className="reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-heading mb-12">
            Skills & <span className="text-primary">Tools</span>
          </h2>
        </div>

        <div className="reveal delay-200 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useEffect, useRef } from 'react';
import { Cloud, Shield, HardDrive, Award, Brain, ExternalLink } from 'lucide-react';

const experiences = [
  {
    icon: Cloud,
    title: 'Cloud Virtual Intern',
    company: 'AICTE (Virtual Internship)',
    date: 'Apr 2025 – Jun 2025',
    points: [
      'Learned cloud computing fundamentals, deployment models, and real-world cloud workflows',
      'Worked with virtual cloud environments and service models (IaaS, PaaS, SaaS)',
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Virtual Intern',
    company: 'AICTE (Virtual Internship)',
    date: 'Oct 2024 – Dec 2024',
    points: [
      'Gained hands-on knowledge of cybersecurity principles and threat prevention',
      'Covered network security, data protection, and safe computing practices',
    ],
  },
  {
    icon: HardDrive,
    title: 'Microsoft OneDrive Digital Training',
    company: 'Microsoft',
    date: 'Apr 2024',
    points: [
      'Trained in cloud storage management and file collaboration',
      'Improved productivity workflows using OneDrive tools',
    ],
  },
  {
    icon: Award,
    title: 'Microsoft 365 Certified Trainee',
    company: 'Naan Mudhalvan',
    date: 'Feb 2024',
    points: [
      'Certified in Microsoft 365 productivity and collaboration tools',
      'Gained skills in digital workplace and enterprise tool usage',
    ],
  },
  {
    icon: Brain,
    title: 'Generative AI Fundamentals',
    company: 'LinkedIn Learning',
    date: 'Jul 2023',
    points: [
      'Learned core concepts of generative AI and its applications',
      'Explored AI tools used for content creation and automation',
    ],
  },
];

const Experience = () => {
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
    <section ref={sectionRef} id="experience" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal mb-12 text-center">
          <h2 className="section-heading">
            Experience & <span className="text-primary">Background</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="reveal bento-card p-5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <exp.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-display font-semibold text-foreground leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                </div>
              </div>
              
              <div className="text-xs text-primary font-medium mb-3 flex items-center gap-1.5">
                <span>📅</span> {exp.date}
              </div>
              
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="reveal text-center mt-10">
          <a
            href="https://flowcv.com/resume/dhbv63it2jko"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View My Resume
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useEffect, useRef } from 'react';
import { Palette, Layers, Code2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Product Designer',
    description: 'Creating intuitive user experiences and beautiful interfaces that drive engagement and conversion.',
    isAccent: true,
  },
  {
    icon: Layers,
    title: 'Branding Designer',
    description: 'Building memorable brand identities that resonate with your target audience and stand out.',
    isAccent: false,
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Developing robust, scalable applications using modern technologies and best practices.',
    isAccent: false,
  },
];

const Services = () => {
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
    <section ref={sectionRef} id="services" className="py-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal mb-12">
          <span className="section-label">What I Do</span>
          <h2 className="section-heading">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Motivated to build real-world digital solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal ${service.isAccent ? 'bento-card-accent' : 'bento-card'} flex flex-col min-h-[320px] ${!service.isAccent ? 'shadow-lg border-border/60 hover:border-primary/40' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.isAccent 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-primary/10'
              }`}>
                <service.icon size={28} className={service.isAccent ? 'text-primary-foreground' : 'text-primary'} />
              </div>

              <h3 className={`text-2xl font-display font-bold mb-4 ${
                service.isAccent ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {service.title}
              </h3>

              <p className={`flex-grow ${
                service.isAccent ? 'text-primary-foreground/80' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>

              <a 
                href="#contact" 
                className={`inline-flex items-center gap-2 font-medium mt-6 group ${
                  service.isAccent ? 'text-primary-foreground' : 'text-primary'
                }`}
              >
                Learn More
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

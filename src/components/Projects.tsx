import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Bitcoin Price Prediction',
    category: 'Web App',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    description: 'A web app that predicts Bitcoin price trends using data-driven analysis.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop',
  },
  {
    title: 'Blood Donation Management',
    category: 'Web App',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    description: 'A platform to manage donors, requests, and blood availability efficiently.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop',
  },
  {
    title: 'Ogenz Company Website',
    category: 'Full-Stack',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    description: 'A full-stack website built for a digital marketing company, actively used by the business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'ShelterCastle Real Estate',
    category: 'Full-Stack',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    description: 'A fully functional real estate platform for property listings and client inquiries.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  },
];

const Projects = () => {
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
    <section ref={sectionRef} id="works" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">Portfolio</span>
          <h2 className="section-heading">
            <span className="text-primary">Projects</span>
          </h2>
          </div>
        </div>

        {/* Projects Grid - Clean 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

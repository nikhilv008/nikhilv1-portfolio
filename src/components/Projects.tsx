import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Seone',
    category: 'Web Design',
    techStack: 'React • Tailwind • API Integration',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    size: 'large',
  },
  {
    title: 'BeServer',
    category: 'Brand Identity',
    techStack: 'Figma • Illustrator • Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    size: 'small',
  },
  {
    title: 'Energetic Tumbler',
    category: 'Product Design',
    techStack: 'Figma • Prototyping • 3D',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    size: 'small',
  },
  {
    title: 'Luminous',
    category: 'UI/UX Design',
    techStack: 'React • Framer Motion • CSS',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=800&fit=crop',
    size: 'tall',
  },
  {
    title: 'Artisan',
    category: 'Web Application',
    techStack: 'React • Node.js • MongoDB',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    size: 'wide',
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
    <section ref={sectionRef} id="works" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-heading">
              Featured <span className="text-primary">Works</span>
            </h2>
          </div>
          <a 
            href="#" 
            className="btn-outline mt-6 md:mt-0 inline-flex items-center gap-2 w-fit"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Projects Grid - Asymmetrical Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured project */}
          <div className="reveal lg:col-span-2 lg:row-span-2">
            <div className="project-card h-full group">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-2xl">
                <img 
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary text-sm font-medium mb-2 block">{projects[0].category}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-1">{projects[0].title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{projects[0].techStack}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    View Project <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1, 4).map((project, index) => (
            <div 
              key={project.title}
              className={`reveal ${index === 2 ? 'lg:row-span-1' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="project-card group h-full">
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-xs font-medium mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-display font-bold">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.techStack}</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 text-primary-foreground font-semibold">
                      View Project <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Wide project */}
          <div className="reveal lg:col-span-3" style={{ animationDelay: '0.4s' }}>
            <div className="project-card group">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl">
                <img 
                  src={projects[4].image}
                  alt={projects[4].title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary text-sm font-medium mb-2 block">{projects[4].category}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{projects[4].title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{projects[4].techStack}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

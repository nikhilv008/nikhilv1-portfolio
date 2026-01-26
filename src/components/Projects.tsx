import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A clean and intuitive task manager with drag-and-drop functionality, categories, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Application',
    description: 'Beautiful weather app with location-based forecasts, animated backgrounds, and detailed weather metrics.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tags: ['React', 'API Integration', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template with smooth animations, dark mode support, and contact form integration.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-primary/10 blob blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">My Work</span>
            <h2 className="section-heading">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mt-4">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group gradient-border rounded-2xl overflow-hidden bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                      title="View Live"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Folder className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

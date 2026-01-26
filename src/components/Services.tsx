import { Monitor, Rocket, Figma, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks and best practices.',
    features: ['React & JavaScript', 'Responsive Design', 'Performance Optimized'],
  },
  {
    icon: Rocket,
    title: 'Web Applications',
    description: 'Creating dynamic apps using modern JavaScript tools that are fast, scalable, and user-friendly.',
    features: ['Single Page Apps', 'API Integration', 'State Management'],
  },
  {
    icon: Figma,
    title: 'UI to Code',
    description: 'Turning designs into clean, pixel-perfect websites that match your vision exactly.',
    features: ['Pixel Perfect', 'Design Systems', 'Smooth Animations'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">What I Do</span>
            <h2 className="section-heading">
              Services I{' '}
              <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subheading mt-4">
              From concept to code, I help bring your digital ideas to life with modern web technologies.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

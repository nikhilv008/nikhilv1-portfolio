import { Code2, Palette, Zap, Globe } from 'lucide-react';

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'APIs',
  'Responsive Design',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
];

const highlights = [
  { icon: Code2, label: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: Palette, label: 'Modern UI', description: 'Crafting beautiful interfaces' },
  { icon: Zap, label: 'Performance', description: 'Optimized for speed' },
  { icon: Globe, label: 'Responsive', description: 'Works on all devices' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Me</span>
            <h2 className="section-heading">
              Passionate About{' '}
              <span className="gradient-text">Web Development</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer who loves building{' '}
                <span className="text-foreground font-medium">clean interfaces</span> and
                bringing ideas to life on the web. I focus on{' '}
                <span className="text-foreground font-medium">performance</span>,{' '}
                <span className="text-foreground font-medium">usability</span>, and{' '}
                <span className="text-foreground font-medium">modern design</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project I take on is an opportunity to learn, grow, and create something
                that users will love. I believe in writing code that's not just functional,
                but elegant and maintainable.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Skills */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-large">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </span>
                  Skills & Technologies
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="skill-pill"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "I turn ideas into interactive web experiences."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

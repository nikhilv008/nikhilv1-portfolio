import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
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
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="reveal max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Quote size={32} className="text-primary" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-relaxed mb-12">
            "Carlos delivered exceptional work that exceeded our expectations. 
            His attention to detail and creative vision transformed our brand 
            into something truly <span className="text-primary">remarkable</span>."
          </blockquote>

          {/* Author */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                alt="Sarah Mitchell"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-lg">Sarah Mitchell</p>
              <p className="text-muted-foreground">CEO, TechVentures Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

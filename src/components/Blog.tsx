import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    date: 'Feb 26',
    title: 'The Future of Design Systems in 2024',
    category: 'Design',
  },
  {
    date: 'Feb 14',
    title: 'Building Scalable React Applications',
    category: 'Development',
  },
  {
    date: 'Feb 08',
    title: 'Why Minimalism Wins in Product Design',
    category: 'Product',
  },
  {
    date: 'Jan 30',
    title: 'Creating Memorable Brand Experiences',
    category: 'Branding',
  },
];

const Blog = () => {
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
    <section ref={sectionRef} id="blog" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">Blog & News</span>
            <h2 className="section-heading">
              Latest <span className="text-primary">Articles</span>
            </h2>
          </div>
          <a 
            href="#" 
            className="btn-outline mt-6 md:mt-0 inline-flex items-center gap-2 w-fit"
          >
            View All Posts
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Blog List */}
        <div className="reveal">
          {blogPosts.map((post, index) => (
            <a 
              key={post.title}
              href="#"
              className="blog-item group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-primary font-mono text-sm min-w-[60px]">{post.date}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground min-w-[100px]">
                  {post.category}
                </span>
                <h3 className="text-lg md:text-xl font-display font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
              <ArrowUpRight size={20} className="blog-arrow transition-all text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

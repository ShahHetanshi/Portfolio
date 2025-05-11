import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'about', offset: document.getElementById('about')?.offsetTop - 150 },
        { id: 'projects', offset: document.getElementById('projects')?.offsetTop - 150 },
        { id: 'contact', offset: document.getElementById('contact')?.offsetTop - 150 }
      ].filter(s => s.offset !== undefined && s.offset !== null);
      
      const currentScrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (currentScrollY >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; 
    }, 2800); 
    
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CustomCursor />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans antialiased">
        <Navbar activeSection={activeSection} />
        
        <main>
          <section id="home" className="relative">
            <Hero />
          </section>
          
          <motion.section 
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 md:py-32"
          >
            <About />
          </motion.section>
          
          <motion.section 
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="py-24 md:py-32 bg-secondary/20 dark:bg-secondary/5"
          >
            <Projects />
          </motion.section>
                    
          <motion.section 
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 md:py-32"
          >
            <Contact />
          </motion.section>
        </main>
        
        <Footer />
        <Toaster />
      </div>

      <style jsx global>{`
        html {
          overflow-y: scroll;
        }
        body {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--primary)) transparent;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: hsl(var(--primary));
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: hsl(var(--primary) / 0.8);
        }
      `}</style>
    </ThemeProvider>
  );
};

export default App;
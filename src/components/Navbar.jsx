
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "circOut" },
    }),
  };
  
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const mobileLinkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };


  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "circOut", delay: 2.6 }} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 
                  ${isScrolled ? 'bg-background/80 dark:bg-background/75 backdrop-blur-lg shadow-md dark:shadow-primary/5' 
                               : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div variants={logoVariants} initial="hidden" animate="visible" className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
              className="flex items-center text-2xl font-semibold group tracking-tight"
            >
              <Code size={26} className="mr-2 text-primary group-hover:text-primary/80 transition-colors duration-300"/>
              <span className="text-foreground group-hover:text-primary transition-colors duration-300">SHetanshi</span>
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out transform hover:bg-primary/10
                            ${activeSection === link.id ? 'text-primary font-semibold bg-primary/5' 
                                                        : 'text-foreground/60 hover:text-primary'}`}
              >
                {link.name}
              </motion.a>
            ))}
             <motion.div custom={navLinks.length} variants={navItemVariants} initial="hidden" animate="visible">
                <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full ml-2 text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
            </motion.div>
          </nav>
          
          <div className="md:hidden flex items-center">
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full mr-0.5 text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="md:hidden absolute top-full left-0 right-0 bg-background/90 dark:bg-background/85 backdrop-blur-md shadow-lg overflow-hidden"
        >
          <motion.div 
            className="px-4 pt-2 pb-3 space-y-1 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }}
            exit={{opacity: 0}}
            >
            {navLinks.map((link) => (
              <motion.a
                variants={mobileLinkVariants}
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-300
                            ${activeSection === link.id ? 'text-primary bg-primary/10' 
                                                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

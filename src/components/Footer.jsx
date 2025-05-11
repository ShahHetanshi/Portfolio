
import React from 'react';
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "mailto:hetushah2812@gmail.com", label: "Email", icon: Mail },
    { href: "https://github.com/ShahHetanshi", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/hetanshi-shah-61b399268/", label: "LinkedIn", icon: Linkedin }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "circOut" },
    }),
  };

  return (
    <motion.footer 
      className="bg-secondary/20 dark:bg-secondary/5 text-foreground/80 py-16 md:py-20"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{duration: 0.8, ease: "circOut"}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <motion.div variants={footerItemVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('#home');}} className="flex items-center text-2xl font-bold group mb-4">
              <Code size={28} className="mr-2 text-primary group-hover:rotate-[15deg] transition-transform duration-300"/>
              <span className="gradient-text">Hetanshi Shah</span>
            </a>
            <p className="text-foreground/70 mb-5 text-sm leading-relaxed">
              Aspiring developer transforming ideas into innovative digital experiences. Let's build something great together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a 
                  key={link.label}
                  href={link.href} 
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer" 
                  aria-label={link.label}
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <link.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={footerItemVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-foreground mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                 <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {e.preventDefault(); scrollToSection(link.href);}}
                    className="text-foreground/70 hover:text-primary hover:underline underline-offset-4 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={footerItemVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <h3 className="text-xl font-semibold text-foreground mb-5">Let's Connect</h3>
             <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
              Interested in collaborating or have a question? I'd love to hear from you.
            </p>
            <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('#contact');}}>
                <button className="group relative h-10 w-36 overflow-hidden rounded-lg bg-background text-lg shadow border border-border/30">
                    <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-foreground group-hover:text-primary-foreground text-sm">Get in Touch</span>
                </button>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/30 pt-10 text-center text-foreground/60 text-sm"
          initial={{ opacity: 0, y:10 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "circOut"}}
        >
          <p className="flex items-center justify-center">
            Designed & Built with <Heart size={14} className="mx-1.5 text-red-500" /> by Hetanshi Shah.
          </p>
          <p>&copy; {currentYear}. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

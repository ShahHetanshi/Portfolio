
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    controls.start("visible"); 
  }, [controls]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
       const yOffset = -80; 
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const name = "Hetanshi Shah";
  const taglineLines = [
    "Computer Science Student,",
    "Aspiring Developer.",
  ];

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.8 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 25, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 12, stiffness: 200, duration: 0.5 } }
  };
  
  const taglineLineVariants = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.5 + delay, ease: "circOut" } }
  });


  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20 md:py-0">
       <motion.div 
        className="absolute inset-0 z-0 opacity-20 dark:opacity-10"
        initial={{ opacity:0 }}
        animate={{ opacity: [0.05, 0.15, 0.05], transition: { duration: 20, repeat: Infinity, ease: "linear" } }}
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.1) 0.5px, transparent 0.5px), radial-gradient(hsl(var(--primary) / 0.05) 0.5px, transparent 0.5px)`,
          backgroundSize: `30px 30px, 30px 30px`,
          backgroundPosition: `0 0, 15px 15px`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, y:0 }, hidden: { opacity: 0, scale: 0.8, y:20 } }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <img    
              class="w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full border-2 border-primary/30 shadow-xl mb-8 object-cover hover:scale-105 transition-transform duration-300"
              alt="Hetanshi Shah Profile Picture"
              src="src\components\WhatsApp Image 2025-05-06 at 22.36.58_4b9ada4b.jpg" />
          </motion.div>
          
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate={controls}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-foreground flex justify-center flex-wrap perspective"
            style={{ perspective: '1000px' }}
          >
            {name.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants} 
                className={`inline-block ${char === " " ? "mx-1 md:mx-1.5" : (index > 8 ? "gradient-text-hero" : "")}`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
           <div className="text-lg md:text-xl text-foreground/60 dark:text-foreground/50 mb-10 max-w-md mx-auto">
            {taglineLines.map((line, index) => (
              <motion.p
                key={index}
                variants={taglineLineVariants(index * 0.2)}
                initial="hidden"
                animate={controls}
                className="leading-tight"
              >
                {line}
              </motion.p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="flex justify-center space-x-3 sm:space-x-4 mb-12"
          >
            {[
              { href: "mailto:hetushah2812@gmail.com", label: "Email", icon: Mail },
              { href: "https://github.com/ShahHetanshi", label: "GitHub", icon: Github },
              { href: "https://www.linkedin.com/in/hetanshi-shah-61b399268/", label: "LinkedIn", icon: Linkedin }
            ].map((link) => (
              <motion.a 
                key={link.label}
                href={link.href} 
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer" 
                aria-label={link.label}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button variant="outline" size="icon" className="rounded-full text-foreground/70 border-border hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all duration-200 w-11 h-11 sm:w-12 sm:h-12">
                  <link.icon size={20} />
                </Button>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale:0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale:1 }, hidden: { opacity: 0, scale:0.9 } }}
            transition={{ duration: 0.5, delay: 2.2, type: "spring", stiffness:120 }}
          >
            <Button
              onClick={scrollToAbout}
              className="rounded-full group bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/30 text-sm md:text-base px-6 py-5"
              size="lg"
            >
              Scroll to Explore
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
        transition={{ delay: 2.8, duration: 2, ease:"easeInOut", repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-foreground/40" />
      </motion.div>
    </div>
  );
};

export default Hero;

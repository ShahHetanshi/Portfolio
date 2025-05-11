
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Preloader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5, delay: 2.5 } },
  };

  const iconVariants = {
    initial: { scale: 0.5, opacity: 0, rotate: -90 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: 'spring', 
        stiffness: 200, 
        damping: 10,
        delay: 0.2,
        duration: 0.8
      } 
    },
  };

  const textVariants = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.8 + delay, 
        duration: 0.6, 
        ease: 'circOut' 
      } 
    },
  });
  
  const barVariants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 2, delay: 1.5, ease: "easeInOut" } }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
    >
      <motion.div variants={iconVariants}>
        <Code size={80} className="text-primary mb-6" />
      </motion.div>
      
      <motion.h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 overflow-hidden">
        <motion.span variants={textVariants(0)} className="inline-block">Hetanshi Shah</motion.span>
      </motion.h1>
      <motion.p className="text-lg text-foreground/70 mb-8 overflow-hidden">
         <motion.span variants={textVariants(0.2)} className="inline-block">Crafting Digital Experiences</motion.span>
      </motion.p>
      
      <div className="w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          variants={barVariants}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;

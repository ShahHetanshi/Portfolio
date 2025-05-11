
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';

const About = () => {
  const education = {
      school: 'NIRMA UNIVERSITY',
      degree: 'Bachelor in Computer Science And Engineering',
      period: 'Oct 2022 - Present',
      location: 'Ahmedabad, Gujarat',
  };
  
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.7, delay: i * 0.1 }
    })
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl opacity-40 -z-10 animate-blob"
        style={{ animationDelay: '0s' }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-accent/5 dark:bg-accent/10 rounded-full filter blur-3xl opacity-40 -z-10 animate-blob"
        style={{ animationDelay: '1.5s' }}
      />
      
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 items-center">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-md opacity-30 group-hover:opacity-50 transition duration-500 group-hover:duration-300 animate-tilt"></div>
            <img   
              className="w-full h-full rounded-full object-cover shadow-lg relative border-2 border-background group-hover:scale-105 transition-transform duration-300"
              alt="Hetanshi Shah looking thoughtfully towards the side"
             src="src\components\image.png" />
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-3 space-y-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ onscreen: { transition: { staggerChildren: 0.15 }}}}
        >
          <motion.div variants={cardVariants} custom={1} className="bg-card/70 dark:bg-card/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-border/20 card-hover-subtle">
            <div className="flex items-start mb-2.5">
              <div className="p-2 bg-primary/10 rounded-md mr-3.5 mt-0.5">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{education.degree}</h3>
                <p className="text-primary/90 font-medium text-md sm:text-lg">{education.school}</p>
              </div>
            </div>
            <div className="ml-[46px] text-sm text-foreground/60">
              <p>{education.period}</p>
              <p>{education.location}</p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} custom={2} className="bg-card/70 dark:bg-card/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-border/20 card-hover-subtle">
            <div className="flex items-center mb-3.5">
               <div className="p-2 bg-primary/10 rounded-md mr-3.5">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">My Journey & Passions</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-3">
              As a Computer Science enthusiast at Nirma University, I'm deeply immersed in the world of technology. My journey is fueled by a relentless curiosity and a drive to craft innovative solutions. I thrive on challenges that push my boundaries and expand my understanding of what's possible with code.
            </p>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Beyond algorithms and data structures, I'm passionate about the creative side of development—transforming ideas into tangible, impactful applications. I believe in continuous learning and am always exploring new tools and techniques to refine my craft. My interests also extend to competitive programming and active participation in tech communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, onOpenModal }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 15 } }
  };

  return (
    <motion.div
      variants={itemVariants}
      layout
      className="bg-card/60 dark:bg-card/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden flex flex-col border border-border/20 card-hover-subtle group cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img  
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          alt={`${project.title} project image`}
          src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-background/70 dark:bg-card/60 shadow-sm group-hover:scale-105 transition-transform duration-300">
          {project.icon}
        </div>
        <p className="absolute bottom-2.5 left-2.5 text-xs text-background bg-primary/70 px-1.5 py-0.5 rounded-md shadow-sm backdrop-blur-sm">{project.category}</p>
      </div>
      
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1.5 leading-tight group-hover:text-primary transition-colors duration-200">{project.title}</h3>
        <p className="text-foreground/60 dark:text-foreground/50 mb-3 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-2">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center text-xs text-foreground/50 dark:text-foreground/40 mb-2.5">
            <Calendar className="h-3 w-3 mr-1.5 text-primary/60" />
            <span>{project.date}</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="skill-badge-sm text-xs">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && <span className="skill-badge-sm text-xs">+{project.technologies.length - 3} more</span>}
          </div>
          <Button variant="link" className="p-0 h-auto text-primary/80 text-xs sm:text-sm hover:text-primary hover:underline">
            View Details <ChevronRight size={14} className="ml-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

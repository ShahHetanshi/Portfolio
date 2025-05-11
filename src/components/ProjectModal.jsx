
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, X as CloseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="bg-card rounded-lg shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-7 border border-border/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full text-foreground/50 hover:text-destructive hover:bg-destructive/10 h-8 w-8 sm:h-9 sm:w-9">
          <CloseIcon size={20} />
        </Button>
        
        <div className="flex items-start mb-4 sm:mb-5">
          <div className="p-2.5 bg-primary/10 rounded-lg mr-3.5 sm:mr-4 mt-0.5">
            {project.icon}
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{project.title}</h2>
            <p className="text-xs sm:text-sm text-primary font-medium">{project.category}</p>
          </div>
        </div>

        <div className="h-52 sm:h-64 rounded-md overflow-hidden mb-4 sm:mb-5 shadow-md">
          <img    
            class="w-full h-full object-cover" 
            alt={`${project.title} detailed view image`}
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
        </div>

        <div className="mb-4 sm:mb-5">
          <h4 className="text-md sm:text-lg font-medium text-foreground/80 mb-1.5">About this project:</h4>
          <p className="text-foreground/60 dark:text-foreground/50 text-sm sm:text-base leading-relaxed">{project.longDescription || project.description}</p>
        </div>

        <div className="mb-4 sm:mb-5">
          <h4 className="text-md sm:text-lg font-medium text-foreground/80 mb-1.5">Technologies Used:</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-badge-sm text-xs bg-secondary text-secondary-foreground dark:bg-primary/10 dark:text-primary/80">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center text-xs sm:text-sm text-foreground/50 dark:text-foreground/40 mb-5 sm:mb-6">
          <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
          <span>Completed: {project.date}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full group border-border hover:border-primary/60 hover:bg-primary/5 text-sm sm:text-base">
                <Github size={16} className="mr-1.5 text-primary/70 group-hover:text-primary transition-colors" /> View on GitHub
              </Button>
            </a>
          )}
          {(project.live || project.website) && (
            <a href={project.live || project.website} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" className="w-full group text-sm sm:text-base">
                <ExternalLink size={16} className="mr-1.5 group-hover:scale-105 transition-transform" /> 
                {project.live ? "Live Demo" : "View Website"}
              </Button>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;

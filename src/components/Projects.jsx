
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Palette, Code2, ChevronDown, Filter, Bot, Link, FileText, Users, ShoppingCart, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

const allProjectsData = [
  {
    id: 'textutils-react',
    title: 'Graphora',
    description: 'A React-based web application offering various text manipulation utilities like case conversion, word count, and more.',
    technologies: ['Python', 'JavaScript', 'Bootstrap'],
    date: 'Apr 2025',
    github: 'https://github.com/ShahHetanshi/Graphora',
    live: null,
    category: 'Web Development',
    icon: <FileText className="h-6 w-6 text-primary" />,
    imageDescription: "Clean interface of a text utility tool showing various manipulation options",
    longDescription: "",
    image: "src\components\Screenshot 2025-05-06 231613.png",
  },
  {
    id: 'ecommerce',
    title: 'Intelligent IDE: We Code, You Chill!',
    description: 'Intelligent IDE is an AI-powered code editor with smart suggestions, real-time collaboration, and interactive tools to enhance productivity and streamline coding.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Socket.IO', 'Gemini API'],
    date: 'Feb 2025',
    github: 'https://github.com/ShahHetanshi/Developer-Productivity-Intelligent-IDE',
    live: null,
    category: 'Web developement, Machine learning, AI',
    icon: <Bot className="h-6 w-6 text-primary" />,
    imageDescription: "",
    longDescription: "Google Girl Hackathon Finalist 2025 Project: Intelligent IDE is an AI-driven code editor designed to boost productivity through intelligent suggestions, real-time collaboration, and interactive development tools."
  },
  {
    id: 'ecommerce',
    title: 'AI Job Finder',
    description: 'This helps you find job using your skills by uploading the resume.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Gemini API'],
    date: 'Feb 2025',
    github: 'https://github.com/ShahHetanshi/Job_Finder',
    live: 'https://ai-job-finder.netlify.app/',
    category: 'Web developement, Machine learning, AI',
    icon: <Bot className="h-6 w-6 text-primary" />,
    imageDescription: "",
    longDescription: "JobFinder is an AI-driven tool that analyzes resumes and matches them with relevant job opportunities. By leveraging NLP and machine learning, it helps job seekers discover positions tailored to their skills and experience."
  },
  {
    id: 'ai-stock-predictor',
    title: 'Stock Market Analysis And Forecasting',
    description: 'Deep learning model analyzing market data to forecast stock trends, offering actionable insights for investments.',
    technologies: ['Python', 'PyTorch', 'Pandas', 'LSTM', 'Scikit-learn', 'Matplotlib'],
    date: 'Jan 2025',
    github: 'https://github.com/ShahHetanshi/Stock_Market_Analysis_And_Forecasting',
    live: null,
    category: 'Machine Learning, Web Development',
    icon: <Cpu className="h-6 w-6 text-primary" />,
    imageDescription: "Abstract financial chart with glowing lines representing stock market trends",
    longDescription: "This project leverages deep learning to analyze historical stock market data and predict future trends. It combines advanced neural networks with financial data to provide accurate forecasting and actionable insights."
  },
  {
    id: 'chatbot-ai',
    title: 'IntelliChat AI Assistant',
    description: 'Relational database schema for an e-commerce platform, optimized for product, customer, and order management.',
    technologies: ['Python', 'NLP', 'AI', 'TensorFLow', 'Flask'],
    date: 'Oct 2024',
    github: 'https://github.com/ShahHetanshi/ChatBot',
    live: null,
    category: 'Machine Learning',
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    imageDescription: "Futuristic interface of a chatbot conversation with glowing text bubbles",
    longDescription: "This repository contains a chatbot that engages in Natural Language Conversations using Microsoft DialoGPT and Flask."
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    description: 'Custom URL shortener with alias generation, analytics, and link expiration, built with Node.js and MySQL.',
    technologies: ['Node.JS', 'Express.JS', 'MySQL', 'REST API'],
    date: 'Sep 2024',
    github: 'https://github.com/ShahHetanshi/URL-Shortner-Service',
    live: null,
    category: 'Web Development',
    icon: <Link className="h-6 w-6 text-primary" />,
    imageDescription: "Minimalist design showing a long URL transforming into a short one",
    longDescription: "URL Shortner is a full-featured URL shortening service. Users can create short, memorable links from long URLs. Advanced features include the ability to set custom aliases, track click-through rates and referral sources for each link, and set expiration dates for temporary links. The backend is powered by Node.js and Express, with MySQL handling data storage and JWT for secure user sessions."
  },
  {
    id: 'linkedin-clone',
    title: 'ConnectSphere Pro Network',
    description: 'LinkedIn clone with user profiles, posts, connections, and messaging using React and Firebase.',
    technologies: ['React.JS', 'Firebase', 'Firebase Auth', 'Firestore'],
    date: 'Jun 2024',
    github: 'https://github.com/ShahHetanshi/LinkedIN_Clone',
    live: null,
    category: 'Web Development',
    icon: <Users className="h-6 w-6 text-primary" />,
    imageDescription: "Mockup of a professional social network interface with profiles and posts",
    longDescription: "ConnectSphere aims to replicate the core social networking functionalities of LinkedIn. Users can create detailed profiles, publish posts, build a professional network by connecting with others, and communicate via a real-time messaging system. State management is handled by Redux, and Firebase provides backend services including authentication (Firebase Auth) and a real-time database (Firestore)."
  },
  {
    id: 'travel-planner',
    title: 'Wanderlust Journey Planner',
    description: 'Travel platform for seamless trip organization, destination browsing, itinerary creation, and live security features.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'OpenStreetMap API'],
    date: 'May 2024',
    github: 'https://github.com/ShahHetanshi/Travel-and-Tour-Website',
    website: 'https://travel-and-tour-website-gules.vercel.app/index1.html',
    category: 'Web Design, Web Development',
    icon: <Plane className="h-6 w-6 text-primary" />,
    imageDescription: "Collage of travel destinations with a map overlay and planning icons",
    longDescription: "Wanderlust Journey Planner helps users discover new destinations, create detailed travel itineraries, and manage bookings. It integrates with mapping services (OpenStreetMap API) for location-based information and includes innovative security features like live location sharing (simulated for demo) during trips. The frontend is built with responsive HTML, CSS, and JavaScript, enhanced by Bootstrap."
  },
  {
    id: 'cpu',
    title: 'CPU Scheduling Algorithms',
    description: 'It is an CPU Scheduling Algorithms which consists of First Come First Serve(FCFS), Shortest Job First(SJF),Shortest Remaining Job First(SRTF),Round Robin(RR),Priority',
    technologies: ['HTML', 'CSS', 'Javascrpit'],
    date: 'Apr 2024',
    github: 'https://github.com/ShahHetanshi/CPU-Scheduling-Algorithms',
    live: null,
    category: 'Web Development',
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    imageDescription: "Futuristic interface of a chatbot conversation with glowing text bubbles",
    longDescription: "It is an CPU Scheduling Algorithms which are present in the Operating systems. "
  }
];



const categories = ["All", ...new Set(allProjectsData.map(p => p.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? allProjectsData 
    : allProjectsData.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="absolute -top-16 right-5 w-72 h-72 sm:w-80 sm:h-80 bg-accent/5 dark:bg-accent/10 rounded-full filter blur-3xl opacity-50 -z-10 animate-blob"
        style={{ animationDelay: '0.8s' }}
      />
       <motion.div 
        className="absolute -bottom-16 left-5 w-72 h-72 sm:w-80 sm:h-80 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl opacity-50 -z-10 animate-blob"
        style={{ animationDelay: '2.5s' }}
      />

      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      >
        My <span className="text-primary">Creations</span>
      </motion.h2>

      <div className="mb-10 flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="group text-base sm:text-lg px-5 py-4 sm:px-6 sm:py-5 rounded-lg border-border hover:border-primary/60 hover:bg-primary/5 transition-colors duration-200">
              <Filter size={16} className="mr-2 text-primary/70 group-hover:text-primary transition-colors" />
              Filter by: <span className="ml-1.5 font-medium text-primary">{selectedCategory}</span>
              <ChevronDown size={18} className="ml-1.5 text-foreground/50 group-hover:text-primary transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-card border-border/40 shadow-xl">
            <DropdownMenuLabel className="text-foreground/70">Categories</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border/20" />
            {categories.map(category => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={selectedCategory === category}
                onCheckedChange={() => setSelectedCategory(category)}
                className="text-foreground/80 focus:bg-primary/10 focus:text-primary cursor-pointer"
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <motion.div
        key={selectedCategory} 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenModal={openModal} />
        ))}
      </motion.div>

      <AnimatePresence>
        {modalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

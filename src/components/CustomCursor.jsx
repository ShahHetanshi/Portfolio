
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a') || e.target.classList.contains('cursor-pointer')) {
        setCursorVariant("link");
      } else if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);


  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "hsl(var(--primary))",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 700, damping: 30, mass:0.1 }
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "hsl(var(--primary))",
      opacity: 0.3,
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 500, damping: 20, mass:0.2 }
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 12,
      width: 2,
      height: 24,
      backgroundColor: "hsl(var(--primary))",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 700, damping: 30, mass:0.1 }
    }
  };
  
  const dotVariants = {
     default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      width: 4,
      height: 4,
      backgroundColor: "hsl(var(--primary))",
      opacity: 0.7,
      transition: { type: "spring", stiffness:1000, damping: 20, mass:0.1, delay:0.05 }
    },
    link: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      width: 0,
      height: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 500, damping: 20, mass:0.2 }
    },
     text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      width: 0,
      height: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 500, damping: 20, mass:0.2 }
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default CustomCursor;


import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C++', level: 'Proficient' },
        { name: 'Python', level: 'Proficient' },
        { name: 'Java', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
        { name: 'HTML', level: 'Proficient' },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'Bootstrap/CSS', level: 'Proficient' },
        { name: 'React.JS', level: 'Familiar' },
        { name: 'Node.JS', level: 'Familiar' },
        { name: 'Express.JS', level: 'Familiar' },
        { name: 'Spring', level: 'Familiar' },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'SQL', level: 'Familiar' },
        { name: 'MongoDB', level: 'Familiar' },
        { name: 'PostgreSQL', level: 'Familiar' },
      ]
    },
    {
      category: 'Other Interests',
      skills: [
        { name: 'Coding', level: '' },
        { name: 'Chess', level: '' },
        { name: 'Drawing and Painting', level: '' },
        { name: 'Classical Dance: Kathak', level: '' },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-heading text-center">Skills & Interests</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600">{category.category}</h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={item}
                  className="flex items-center"
                >
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-sm text-gray-500">{skill.level}</span>
                      )}
                    </div>
                    
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
                          style={{ 
                            width: skill.level === 'Proficient' ? '90%' : 
                                  skill.level === 'Familiar' ? '70%' : '50%' 
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-4">Coding Profiles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-semibold text-blue-600">CodeForces</h4>
            <p className="text-gray-600">Specialist (1496) HetanshiShah</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-semibold text-blue-600">LeetCode</h4>
            <p className="text-gray-600">Knight (1985) HetanshiShah</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-semibold text-blue-600">CodeChef</h4>
            <p className="text-gray-600">3 star (1834) hetanshi28</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

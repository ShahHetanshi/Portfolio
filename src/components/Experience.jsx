
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Mathematics Teacher',
      company: 'KEYSTONE UNIVERSE OF EDUCATION',
      period: 'Jul 2022 - Sept 2022',
      location: 'Ahmedabad, Gujarat',
      description: 'Taught mathematics at 12th grade level.'
    }
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Object Oriented Programming',
    'Operating Systems | Computer Networks',
    'Database Management Systems',
    'Machine Learning | Deep Learning',
    'Web Technologies'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-heading text-center">Experience & Coursework</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            Work Experience
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 card-hover"
              >
                <h4 className="text-lg font-semibold">{exp.position}</h4>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-700">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-blue-50 rounded-lg p-6"
          >
            <p className="text-gray-700 italic">
              Currently focused on academic pursuits and building practical skills through projects and competitions.
            </p>
          </motion.div>
        </div>
        
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            Relevant Coursework
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {coursework.map((course, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md p-5 flex items-center card-hover"
              >
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-800">{course}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h4 className="text-xl font-semibold mb-4">Certification</h4>
            <div className="bg-white rounded-lg shadow-md p-6 card-hover">
              <h5 className="font-medium">Python for Data Science</h5>
              <p className="text-gray-600">IBM | Aug 2023 | Certificate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

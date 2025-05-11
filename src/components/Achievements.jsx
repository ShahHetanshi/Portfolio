
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'ICPC AlgoQueen24 Finalist',
      description: 'Rank 60',
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      title: 'Participated in Meta Hacker Cup',
      description: 'Rank 2684 out of 22k in Round 1',
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      title: 'Leetcode Biweekly Contest 145',
      description: 'Rank 391 out of 25k',
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Leetcode Biweekly Contest 134',
      description: 'Rank 1443 out of 40k',
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'CodeChef Starters 134',
      description: 'Div 2) Global Rank 231',
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Solved over 1000 problems',
      description: 'On various programming sites',
      icon: <Award className="h-6 w-6 text-purple-500" />
    }
  ];

  const positions = [
    {
      organization: 'CODEADDA.CLUB',
      position: 'General Secretary',
      period: 'Oct 2023 - Present',
      description: 'Conducted coding contests and taught competitive programming concepts'
    },
    {
      organization: 'CODESS.CAFE',
      position: 'Mentee',
      period: 'Mar 2023 - Present',
      description: 'Participated in different programs of coding and made new connections'
    },
    {
      organization: 'SAVE EARTH NGO',
      position: 'Volunteer',
      period: 'Jun 2023 - Jul 2023',
      description: 'Helped in making the nature more green with 100+ trees planted'
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
      <h2 className="section-heading text-center">Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            Technical Achievements
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md p-5 flex items-start card-hover"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
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
            Positions of Responsibility
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {positions.map((position, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 card-hover"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{position.organization}</h4>
                    <p className="text-purple-600 font-medium">{position.position}</p>
                  </div>
                  <span className="text-sm text-gray-500">{position.period}</span>
                </div>
                <p className="mt-3 text-gray-700">{position.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6"
          >
            <h4 className="font-semibold mb-2">Continuous Learning</h4>
            <p className="text-gray-700">
              Always seeking new challenges and opportunities to grow both technically and personally.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

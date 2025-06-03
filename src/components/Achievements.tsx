import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star } from 'lucide-react';

interface Achievement {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    icon: <Trophy size={28} />,
    title: "Hackathon Winner",
    description: "First place at regional web development hackathon, building a solution for local businesses."
  },
  {
    id: 2,
    icon: <Medal size={28} />,
    title: "Coding Competition",
    description: "2nd place in national-level coding competition showcasing algorithm optimization skills."
  },
  {
    id: 3,
    icon: <Award size={28} />,
    title: "Open Source Contributor",
    description: "Recognized contributor to several open-source projects with multiple accepted pull requests."
  },
  {
    id: 4,
    icon: <Star size={28} />,
    title: "Design Award",
    description: "Received award for outstanding UI/UX design in university project showcase."
  }
];

const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <div className="text-orange-500 mb-4">{achievement.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
      <p className="text-gray-400">{achievement.description}</p>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
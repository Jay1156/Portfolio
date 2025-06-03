import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, ServerCog, Palette, Smartphone } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Skill: React.FC<SkillProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:shadow-orange-500/20 hover:shadow-lg"
    >
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Skill
            icon={<Code size={32} />}
            title="Frontend Development"
            description="HTML5, CSS3, JavaScript, React, TypeScript, Tailwind CSS, and responsive design principles."
          />
          <Skill
            icon={<Database size={32} />}
            title="Backend Development"
            description="Node.js, Express, REST APIs, MySQL, MongoDB, and authentication systems."
          />
          <Skill
            icon={<Globe size={32} />}
            title="Web Performance"
            description="Code optimization, image optimization, and best practices for fast-loading websites."
          />
          <Skill
            icon={<ServerCog size={32} />}
            title="DevOps"
            description="Git, GitHub, Docker basics, CI/CD pipelines, and deployment strategies."
          />
          <Skill
            icon={<Palette size={32} />}
            title="UI/UX Design"
            description="Figma, wireframing, prototyping, and user-centered design principles."
          />
          <Skill
            icon={<Smartphone size={32} />}
            title="Mobile Development"
            description="React Native basics and responsive design for mobile applications."
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
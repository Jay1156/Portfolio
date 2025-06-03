import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with product listings, cart functionality, and user authentication.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: 2,
    title: "Social Media Clone",
    description: "A Facebook-inspired social platform with posts, comments, likes, and user profiles.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: 3,
    title: "Interactive Game",
    description: "A browser-based game with animations, scoring system, and leaderboard.",
    tags: ["JavaScript", "HTML Canvas", "CSS"],
    image: "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: 4,
    title: "IoT Dashboard",
    description: "A real-time dashboard for monitoring IoT devices and visualizing sensor data.",
    tags: ["React", "Node.js", "Chart.js", "MQTT"],
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors duration-300"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-orange-500 transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
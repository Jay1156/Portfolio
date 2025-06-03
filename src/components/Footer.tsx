import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [heartRed, setHeartRed] = useState(false);

  return (
    <footer className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-white">
              JB<span className="text-orange-500">.</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-8 mb-6 md:mb-0"
          >
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#achievements" className="text-gray-400 hover:text-white transition-colors duration-300">
              Achievements
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a 
              href="https://www.linkedin.com/in/jay-bharne-7940a6352/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#0077B5' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:bharnejay127@gmail.com" 
              whileHover={{ y: -5, color: '#EA4335' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com/Jay1156" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#FFFFFF' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 flex items-center justify-center">
            © {new Date().getFullYear()} Jay Bharne. Made with
            <span
              className="mx-1 cursor-pointer"
              onClick={() => setHeartRed(!heartRed)}
            >
              <Heart
                size={16}
                className={heartRed ? "text-red-600" : "text-orange-500"}
                fill={heartRed ? "#dc2626" : "none"}
              />
            </span>
            in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
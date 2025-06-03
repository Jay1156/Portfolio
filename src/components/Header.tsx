import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, FolderOpen } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="text-white hover:text-orange-400 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="text-2xl font-bold text-white">
            JB<span className="text-orange-500">.</span>
          </a>
         
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#skills">
            <div className="flex items-center">
              <Code size={16} className="mr-2" />
              Skills
            </div>
          </NavLink>
          <NavLink href="#projects">
            <div className="flex items-center">
              <FolderOpen size={16} className="mr-2" />
              Projects
            </div>
          </NavLink>
          <NavLink href="#achievements">
            <div className="flex items-center">
              <Award size={16} className="mr-2" />
              Awards
            </div>
          </NavLink>
        </nav>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-black font-medium py-2 px-4 rounded-md hover:bg-orange-400 transition-colors duration-300"
        >
          <a href="#contact" className="flex items-center">
            Designer / Developer
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
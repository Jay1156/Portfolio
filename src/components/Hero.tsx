import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [contactHovered, setContactHovered] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    setContactClicked(!contactClicked);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 flex flex-col"
          >
            <div className="bg-gray-900/50 p-3 inline-block rounded-md mb-2 w-fit ml-10 md:ml-20">
              <p className="text-gray-300">Hey, I am</p>
            </div>
            <div className="mb-6 ml-10 md:ml-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white flex items-center gap-4 mb-2">
                Jay
                <span className="inline-block w-16 h-1 bg-orange-500"></span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Bharne
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
                onClick={handleContactClick}
                className={`w-fit px-8 py-3 border mt-6 ${
                  contactClicked 
                    ? 'bg-orange-500 text-white border-orange-500' 
                    : contactHovered
                      ? 'bg-black text-orange-500 border-orange-500'
                      : 'bg-black text-white border-white'
                } transition-all duration-300 rounded-sm`}
              >
                contact me
              </motion.button>
              <div className="mt-8">
                <p className="text-gray-400 mb-3">my socials ~</p>
                <div className="flex gap-6">
                  <motion.a 
                    href="https://www.linkedin.com/in/jay-bharne-7940a6352/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#0077B5' }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href="mailto:bharnejay127@gmail.com" 
                    whileHover={{ y: -5, color: '#EA4335' }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Mail size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/Jay1156" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#FFFFFF' }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 flex justify-center md:mr-20"
          >
            <div className="relative w-[300px] h-[380px] bg-orange-500 rounded-2xl overflow-hidden">
              <img 
                  src="E:\Java FullStack\project\Public\1000060333-removebg-preview.png"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Description and Motto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-3 flex flex-col md:items-start ml-10 md:mr-20"
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-2">FULLSTACK</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Web Developer</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              A passionate front-end developer skilled in HTML, CSS, JavaScript, and React. I enjoy
              building clean, responsive, and user-friendly websites. Currently pursuing my B.Tech in
              Electronics & Telecommunication, I've worked on several projects including an e-commerce site,
              a Facebook clone, and interactive games. I'm also exploring backend development with Node.js and have
              hands-on experience with MySQL and IoT systems.
            </p>
            
            {/* Life Motto */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h4 className="text-lg text-gray-400 mb-2">my life motto ~</h4>
              <p className="text-white text-xl">
                <span className="text-orange-500">"Code</span> with purpose, <span className="text-orange-500">design</span> with clarity, and <span className="text-orange-500">build</span> with impact."
              </p>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

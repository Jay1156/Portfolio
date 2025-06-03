import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Make the right column take less space and shift content left */}
          <div className="hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:ml-[-130px]" // Shift content to the left on large screens
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">bharnejay127@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+91 7620734055</p>
                </div>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1gUy6k66P7M3LU8PMhxagfmopiAILBWPY/view?usp=drive_link"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Download My Resume
              </motion.button>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'about', 'skills', 'projects', 'githubStats', 'contact'];

  const handleResumeDownload = () => {
    // Open the URL in a new tab
    window.open(
      'https://drive.google.com/file/d/1QbZF9ZCw0sdL8pDt738MWiMwvyjM7Qrj/view?usp=sharing',
      '_blank'
    );
    
    // Trigger PDF download
    const link = document.createElement('a');
    link.href = '/MyResume.pdf';
    link.download = 'Kajal Tiwari Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-gray-900/95 text-white p-4 fixed w-full top-0 shadow-md z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <Link to="home" smooth={true} duration={500}>
            <span className="text-blue-400">KT</span> Portfolio
          </Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link 
                to={item} 
                smooth={true} 
                duration={500} 
                offset={-80}
                spy={true}
                className="cursor-pointer px-3 py-2 flex items-center transition-colors duration-300 hover:text-blue-400"
                activeClass="text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.span 
                  className="absolute left-0 -bottom-1 h-0.5 bg-blue-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </motion.li>
          ))}
          {/* Updated Resume Button */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="ml-4"
          >
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              <FiDownload className="text-lg" />
              View Resume
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl z-50"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-lg hover:text-blue-400 transition-colors"
                    activeClass="text-blue-400"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
              {/* Mobile Resume Button */}
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="w-full text-center"
              >
                <button
                  onClick={handleResumeDownload}
                  className="w-full flex items-center justify-center gap-2 py-2 text-lg bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <FiDownload className="text-lg" />
                  View Resume
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

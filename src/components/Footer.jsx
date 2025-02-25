import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Portfolio Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kajal Tiwari
            </h3>
            <p className="text-gray-400 text-lg">
              Frontend Developer 💻
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com/Kajaltiwari892"
                target="_blank"
                whileHover={{ y: -5 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                <FiGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kajal-tiwari-46802034a/"
                target="_blank"
                whileHover={{ y: -5 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                <FiLinkedin className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-center"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-300">Explore</h4>
            <ul className="space-y-4">
              {['home', 'about', 'skills', 'projects', 'gitStats'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:text-right"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-300">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 justify-end text-gray-400">
                <FiMapPin className="text-blue-400" />
              Bihar , India
              </li>
              <li className="flex items-center gap-2 justify-end text-gray-400">
                <FiMail className="text-blue-400" />
               kanjal55567@gmail.com
              </li>
              <li className="flex items-center gap-2 justify-end text-gray-400">
                <FiPhone className="text-blue-400" />
                +91 9508440934
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 mt-16 border-t border-gray-800 text-center text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Kajal Tiwari. All rights reserved
          </p>
          <p className="mt-2 text-sm">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

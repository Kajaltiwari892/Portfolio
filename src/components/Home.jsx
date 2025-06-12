import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Particles from "./Particles";
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from "../assets/ProfilePicNew.jpg";

const Home = () => {
  const socialLinks = {
    github: "https://github.com/Kajaltiwari892",
    linkedin: "https://www.linkedin.com/in/kajal-tiwari-46802034a/",
  };
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#3B82F6', '#60A5FA']}
          particleCount={2000}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-blue-400 font-mono text-lg mb-2">Hello, I'm</p>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kajal Tiwari
            </h1>

            <div className="text-3xl font-semibold text-gray-300 h-14">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
          
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-400 max-w-xl">
            A frontend developer passionate about creating responsive, user-friendly websites. I specialize in creating responsive 
              web applications that are both functional and visually stunning.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
            <motion.a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                <FiGithub className="text-2xl" />
              </motion.a>
              <motion.a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                <FiLinkedin className="text-2xl" />
              </motion.a>
          
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link to="projects" smooth={true} duration={500}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
              
              <Link to="contact" smooth={true} duration={500}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <img 
              src={Image}
              alt="Kajal Tiwari" 
              className="rounded-full w-96 h-100 object-cover border-8 border-gray-800 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-6 py-2 rounded-full shadow-lg">
              <span className="text-blue-400 font-semibold">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


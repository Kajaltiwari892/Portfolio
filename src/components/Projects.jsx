import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ecommerceImage from "../assets/Ecommerce Image.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A responsive online store built with pure HTML, CSS, and JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Kajaltiwari892/Ecommerce-A",
      demo: "https://kajaltiwari892.github.io/Ecommerce-A/",
      image: ecommerceImage,
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
      />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Projects 🚀
        </motion.h2>

        <div className="flex justify-center">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl p-8 shadow-2xl relative overflow-hidden group w-full max-w-4xl"
            >
              {/* Website Screenshot */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-8 overflow-hidden rounded-lg border-2 border-gray-700"
              >
                <img 
                  src={project.image} 
                  alt="E-commerce Website Screenshot" 
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Fixed gradient overlay with pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content wrapper with relative positioning */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-blue-400 text-center">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-lg text-center">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-4 py-2 rounded-full text-md ${
                        tech === "HTML5" ? "bg-orange-500/20 text-orange-400" :
                        tech === "CSS3" ? "bg-blue-500/20 text-blue-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-lg cursor-pointer"
                  >
                    <FiGithub className="text-xl" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg cursor-pointer"
                  >
                    <FiExternalLink className="text-xl" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
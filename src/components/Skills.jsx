import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiBootstrap,} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; 

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-cyan-400" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-200" },
    { name: "VSCode", icon: <VscCode />, color: "text-blue-500" },
  ];

  // Floating animation variants
  const floatVariants = {
    float: {
      y: ["0%", "-10%", "0%"],
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-purple-900/20" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Technical Skills 🤹
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={floatVariants}
              initial="float"
              animate="float"
              custom={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 } 
              }}
              className="p-6 bg-gray-800 rounded-xl shadow-2xl cursor-default relative overflow-hidden group"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className={`text-5xl mb-4 ${skill.color} transition-colors duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;



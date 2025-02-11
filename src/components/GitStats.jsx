import { motion } from "framer-motion";
import { FaGithub, FaCode, FaStar } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

const GitStats = () => {
  const githubUsername = "Kajaltiwari892";

  // Glowing variants
  const glowVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <section id="githubStats" className="py-30 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-x"
      />

      <div className="max-w-10xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          <FaGithub className="inline-block mr-4 mb-1" />
         Github Stats
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-4">
              <FaGithub className="text-3xl text-pink-400 animate-pulse" />
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profile Overview
              </h3>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0d1117&hide_border=true`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg border-2 border-gray-700 hover:border-purple-400 transition-all"
              />
            </motion.div>
          </motion.div>

          {/* Language Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm relative group"
          >
            <div className="absolute -top-3 -right-3 text-blue-400 text-sm font-mono">
              <FaCode className="text-2xl animate-spin-slow" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Top Languages
            </h3>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=0d1117&hide_border=true`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg border-2 border-gray-700 hover:border-blue-400 transition-all"
              />
            </motion.div>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Daily Streak
            </h3>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&background=0d1117&hide_border=true`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg border-2 border-gray-700 hover:border-pink-400 transition-all"
              />
            </motion.div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm relative group"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Contributions
              </h3>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img
                src={`https://ghchart.rshah.org/${githubUsername}`}
                alt="GitHub Contributions"
                className="w-full h-auto rounded-lg border-2 border-gray-700 hover:border-green-400 transition-all"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated GitHub Button */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(88, 101, 242, 0.5)"
            }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            <FaGithub className="text-2xl text-purple-400" />
            <span className="text-xl font-semibold">Explore My GitHub</span>
            <FiDownloadCloud className="text-xl ml-2 animate-bounce" />
          </motion.a>
        </motion.div>

        {/* Floating Code Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400 text-xs font-mono pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          >
            {Math.random() > 0.5 ? "<Code/>" : "const();"}
          </motion.div>
        ))}

        {/* Glowing Orbs */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default GitStats;

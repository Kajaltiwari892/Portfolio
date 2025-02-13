import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">


      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me 👈
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p className="text-2xl font-semibold">
              Hi, I'm <span className="text-blue-400">Kajal Tiwari</span>
            </p>
            
            <p className="text-xl leading-relaxed">
              A passionate Frontend Developer with expertise in modern web technologies. 
              I specialize in creating dynamic, responsive, and user-friendly interfaces 
              that combine aesthetic appeal with robust functionality.
            </p>

            <p className="text-xl leading-relaxed">
            Although I’m at the beginning of my career, I’ve already worked on several personal projects that allow me to put my knowledge to use in real-world scenarios. I enjoy solving problems and constantly strive to improve my coding abilities by taking on new challenges.
            </p>

            <motion.a
              href="${https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67a30a6df97830ef5e980c79}/Resume.pdf.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="ProfilePic.jpg"
                alt="Kajal Tiwari"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-6 py-2 rounded-full shadow-lg">
                <span className="text-blue-400 font-semibold">Frontend Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

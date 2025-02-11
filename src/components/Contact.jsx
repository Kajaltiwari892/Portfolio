import { motion } from "framer-motion";
import { FiMail, FiSmartphone, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Feel Free To Contact 📞
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative group">
              <div className="flex items-center gap-4">
                <FiSmartphone className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Phone Number</h3>
                  <a href="tel:+919284958047" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 9508440934
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative group">
             
              <div className="flex items-center gap-4">
                <FiMail className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Email Address</h3>
                  <a href="mailto:kanjal55567@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    kanjal55567@gmail.com
                  </a>
                </div>          
              </div>
            </div>

           
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="text-xl" />
               
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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

export default Contact;
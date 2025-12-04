import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaLightbulb } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/personal';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: FaGraduationCap, label: 'Education', value: 'MS + Gold Medalist' },
    { icon: FaAward, label: 'Publications', value: '3+ Papers' },
    { icon: FaLightbulb, label: 'Projects', value: '13+ Projects' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative elements - subtle */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get To Know More
              </p>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <motion.div
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 text-center overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <stat.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio Section */}
            <motion.div
              className="lg:col-span-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-lg md:text-xl"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl border-l-4 border-blue-500 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Currently Learning</p>
                    <p className="text-gray-700 dark:text-gray-300">{personalInfo.currentlyLearning}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



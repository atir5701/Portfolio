import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { education } from '../data/education';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.p
              className="text-blue-500 font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              My Academic Journey
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Education
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg">
                  <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping" />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-500 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-blue-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-blue-500" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mb-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-green-700 dark:text-green-400 font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.slice(0, 6).map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;



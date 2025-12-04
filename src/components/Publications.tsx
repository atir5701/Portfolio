import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt, FaQuoteLeft, FaCalendar, FaUsers } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { publications } from '../data/publications';

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'journal':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'workshop':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <section id="publications" className="section-padding bg-white dark:bg-black">
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
              Research Contributions
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Publications
            </motion.h2>
          </div>

          {/* Publications List */}
          <div className="max-w-5xl mx-auto space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    <FaBook />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Type Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase ${getTypeColor(
                        publication.type
                      )}`}
                    >
                      {publication.type}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      <FaQuoteLeft className="inline text-blue-500 text-sm mr-2" />
                      {publication.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <FaUsers className="text-blue-500" />
                      <p className="text-sm">{publication.authors.join(', ')}</p>
                    </div>

                    {/* Venue and Year */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-semibold text-blue-500">
                        {publication.venue}
                      </span>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-blue-500" />
                        <span>{publication.year}</span>
                      </div>
                      {publication.citations && (
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-xs font-semibold">
                          {publication.citations} citations
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                      >
                        <span>View Publication</span>
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://scholar.google.com/citations?hl=en&user=2rMc_jYAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Publications on Google Scholar</span>
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;



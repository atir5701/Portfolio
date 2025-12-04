import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaTerminal, FaReact, FaDatabase, FaTools, FaServer,
  FaPython, FaJava, FaJs, FaNode, FaDocker, FaGitAlt, FaCss3Alt, FaHtml5, FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiMysql, 
  SiDjango, SiSpringboot, SiTailwindcss, SiPostgresql,
  SiRedis, SiGraphql, SiNextdotjs, SiVuedotjs, SiExpress,
  SiFastapi, SiJest, SiPostman, SiNginx, SiFigma
} from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skillCategories, getSkillsByCategory } from '../data/skills';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons: { [key: string]: any } = {
    FaCode, FaTerminal, FaReact, FaDatabase, FaTools, FaServer, FaDocker
  };

  const skillIcons: { [key: string]: any } = {
    // Languages
    Python: FaPython,
    Java: FaJava,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    
    // Frontend
    React: FaReact,
    'Next.js': SiNextdotjs,
    'Vue.js': SiVuedotjs,
    'Tailwind CSS': SiTailwindcss,
    
    // Backend
    'Node.js': FaNode,
    Express: SiExpress,
    Django: SiDjango,
    'Spring Boot': SiSpringboot,
    FastAPI: SiFastapi,
    GraphQL: SiGraphql,
    
    // Databases
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    Redis: SiRedis,
    
    // DevOps & Tools
    Docker: FaDocker,
    Git: FaGitAlt,
    AWS: FaAws,
    Nginx: SiNginx,
    Jest: SiJest,
    Postman: SiPostman,
    Figma: SiFigma,
  };

  const displayedSkills = getSkillsByCategory(selectedCategory);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-black">
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
              My Technical Expertise
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Skills
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {skillCategories.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon />
                  {category.label}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            layout
          >
            {displayedSkills.map((skill, index) => {
              const Icon = skillIcons[skill.name] || FaCode;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center group hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  {skill.proficiency && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.proficiency}%` } : {}}
                        transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            className="mt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learner & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With a strong foundation across the full software development stack, I'm constantly expanding my skillset 
              through hands-on projects, open-source contributions, and staying updated with the latest technologies 
              in Web Development, Cloud Architecture, and System Design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



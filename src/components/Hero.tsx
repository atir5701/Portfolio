import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo, socialLinks, roles } from '../data/personal';

const Hero = () => {
  const typedText = useTypewriter(roles, 100, 50, 1500);

  const iconMap: { [key: string]: any } = {
    FaGithub,
    FaLinkedin,
    FaGraduationCap,
    SiHackerrank,
    SiLeetcode,
    MdEmail,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32 relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Text Content */}
          <motion.div variants={item} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6"
              variants={item}
            >
              <p className="text-sm md:text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                👋 Welcome to my portfolio
              </p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 font-medium"
              variants={item}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              variants={item}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-4xl font-bold mb-4 h-14 flex items-center justify-center lg:justify-start"
              variants={item}
            >
              <span className="text-gradient">{typedText}</span>
              <span className="animate-pulse ml-1 text-blue-500">|</span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={item}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 justify-center lg:justify-start mb-8 text-gray-600 dark:text-gray-400"
              variants={item}
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <HiLocationMarker className="text-blue-500" />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              variants={item}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="group px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:text-gradient-hover">Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 justify-center lg:justify-start"
              variants={item}
            >
              {socialLinks.slice(0, 5).map((social, index) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 glow-on-hover group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.platform}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={item}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-blob" />
              
              {/* Profile image container with modern border */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl md:text-7xl font-bold">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-20px' }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-35px' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-current rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


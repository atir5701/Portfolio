import { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Atir Shakhrelia',
  title: 'Full Stack Developer | Software Engineer | Problem Solver',
  tagline: 'Master\'s Student at Northeastern University specializing in Software Development',
  bio: [
    'Greetings! My name is Atir Sakhrelia. I hold an undergraduate degree in B.Tech CSE from Nirma University and am pursuing MS in CS from Northeastern University.',
    'I am passionate about building scalable web applications and crafting elegant solutions to complex problems. With hands-on experience across the full software development lifecycle, I\'ve worked on diverse projects ranging from enterprise applications to innovative startups.',
    'Currently exploring cloud architecture and microservices while continuously expanding my expertise in modern web technologies. I thrive on creating impactful software that makes a difference.'
  ],
  email: 'shakhreliaatir@gmail.com',
  location: 'Boston, MA, USA',
  university: 'Northeastern University',
  currentlyLearning: 'Cloud Architecture & System Design',
  resumeUrl: '/assets/Resume_Atir_Shakhrelia.pdf'
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/atir5701',
    icon: 'FaGithub'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/atirsakhrelia28/',
    icon: 'FaLinkedin'
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/valak_5701/',
    icon: 'SiLeetcode'
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/valak_5701',
    icon: 'SiHackerrank'
  },
  {
    platform: 'Google Scholar',
    url: 'https://scholar.google.com/citations?hl=en&user=2rMc_jYAAAAJ',
    icon: 'FaGraduationCap'
  },
  {
    platform: 'Email',
    url: 'mailto:shakhreliaatir@gmail.com',
    icon: 'MdEmail'
  }
];

export const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Backend Developer',
  'Frontend Developer',
  'Problem Solver'
];



import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'language', proficiency: 92 },
  { name: 'TypeScript', category: 'language', proficiency: 90 },
  { name: 'Java', category: 'language', proficiency: 90 },
  { name: 'Python', category: 'language', proficiency: 88 },
  { name: 'C++', category: 'language', proficiency: 85 },
  { name: 'C', category: 'language', proficiency: 85 },
  { name: 'SQL', category: 'language', proficiency: 88 },
  { name: 'HTML5', category: 'language', proficiency: 95 },
  { name: 'CSS3', category: 'language', proficiency: 92 },
  
  // Frontend Development
  { name: 'React', category: 'frontend', proficiency: 90 },
  { name: 'Next.js', category: 'frontend', proficiency: 85 },
  { name: 'Vue.js', category: 'frontend', proficiency: 80 },
  { name: 'Redux', category: 'frontend', proficiency: 88 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 92 },
  { name: 'Bootstrap', category: 'frontend', proficiency: 88 },
  { name: 'Material-UI', category: 'frontend', proficiency: 85 },
  { name: 'Sass/SCSS', category: 'frontend', proficiency: 85 },
  { name: 'Webpack', category: 'frontend', proficiency: 80 },
  
  // Backend Development
  { name: 'Node.js', category: 'backend', proficiency: 90 },
  { name: 'Express', category: 'backend', proficiency: 90 },
  { name: 'Spring Boot', category: 'backend', proficiency: 88 },
  { name: 'FastAPI', category: 'backend', proficiency: 85 },
  { name: 'Django', category: 'backend', proficiency: 82 },
  { name: 'REST API', category: 'backend', proficiency: 92 },
  { name: 'GraphQL', category: 'backend', proficiency: 80 },
  { name: 'Microservices', category: 'backend', proficiency: 85 },
  
  // Databases & Caching
  { name: 'MongoDB', category: 'database', proficiency: 88 },
  { name: 'PostgreSQL', category: 'database', proficiency: 85 },
  { name: 'MySQL', category: 'database', proficiency: 88 },
  { name: 'Redis', category: 'database', proficiency: 82 },
  { name: 'Firebase', category: 'database', proficiency: 80 },
  { name: 'SQLite', category: 'database', proficiency: 82 },
  
  // DevOps & Cloud
  { name: 'Docker', category: 'devops', proficiency: 85 },
  { name: 'Git', category: 'devops', proficiency: 95 },
  { name: 'GitHub Actions', category: 'devops', proficiency: 80 },
  { name: 'AWS', category: 'devops', proficiency: 78 },
  { name: 'CI/CD', category: 'devops', proficiency: 82 },
  { name: 'Linux', category: 'devops', proficiency: 88 },
  { name: 'Nginx', category: 'devops', proficiency: 75 },
  
  // Tools & Others
  { name: 'VS Code', category: 'tool', proficiency: 95 },
  { name: 'Postman', category: 'tool', proficiency: 90 },
  { name: 'Jest', category: 'tool', proficiency: 85 },
  { name: 'JUnit', category: 'tool', proficiency: 85 },
  { name: 'Selenium', category: 'tool', proficiency: 80 },
  { name: 'Figma', category: 'tool', proficiency: 75 },
  { name: 'Android Studio', category: 'tool', proficiency: 78 }
];

export const skillCategories = [
  { id: 'all', label: 'All Skills', icon: 'FaCode' },
  { id: 'language', label: 'Languages', icon: 'FaTerminal' },
  { id: 'frontend', label: 'Frontend', icon: 'FaReact' },
  { id: 'backend', label: 'Backend', icon: 'FaServer' },
  { id: 'database', label: 'Databases', icon: 'FaDatabase' },
  { id: 'devops', label: 'DevOps & Cloud', icon: 'FaDocker' },
  { id: 'tool', label: 'Tools', icon: 'FaTools' }
];

export const getSkillsByCategory = (category: string): Skill[] => {
  if (category === 'all') return skills;
  return skills.filter(skill => skill.category === category);
};



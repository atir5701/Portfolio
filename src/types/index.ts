export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  stars?: number;
  category: 'ml' | 'web' | 'blockchain' | 'nlp' | 'other' | 'fullstack' | 'backend' | 'ai' | 'desktop' | 'algorithms';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  link?: string;
  type: 'conference' | 'journal' | 'workshop';
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'ml' | 'frontend' | 'backend' | 'devops';
  proficiency?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  university: string;
  currentlyLearning: string;
  profileImage?: string;
  resumeUrl?: string;
}



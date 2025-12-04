import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'United Imaging Intelligence',
    position: 'Software Engineering Intern',
    location: 'Boston, United States',
    duration: 'May 2025 – Dec 2025',
    startDate: '2025-05',
    endDate: '2025-12',
    achievements: [
      'Developed FastAPI microservices with RPC and REST APIs to integrate ASR and TTS models, Dockerized the backend for scalable deployment, and synchronization with React frontend using Context API for state management',
      'Built an agentic workflow for conversational user registration, integrated Milvus and PostgreSQL to store user data and history, and implemented RAG to enable the agent to answer user queries about company products accurately',
      'Integrated LiveKit RTC pipeline for low-latency voice/video streaming, synchronized avatar animations for real-time conversations, deployed the project on Jetson Nano, and managed collaboration using Git and GitLab'
    ],
    technologies: ['FastAPI', 'Python', 'Docker', 'React', 'Context API', 'ASR', 'TTS', 'Milvus', 'PostgreSQL', 'RAG', 'LiveKit', 'RTC', 'Jetson Nano', 'Git', 'GitLab']
  },
  {
    id: 2,
    company: 'Johnson Control',
    position: 'Mobile App Development and Embedded Systems Intern',
    location: 'Ahmedabad, India',
    duration: 'Jan 2024 – June 2024',
    startDate: '2024-01',
    endDate: '2024-06',
    achievements: [
      'Developed an Android application in Java using the Android SDK to emulate IR remote control functionality, providing an intuitive user interface and integrating BLE communication via the EK410A embedded module',
      'Designed and implemented a nested hashing algorithm to enhance BLE communication efficiency, reducing payload size, accelerating packet transmission, and improving data exchange reliability and latency performance'
    ],
    technologies: ['Java', 'Android SDK', 'BLE', 'Embedded Systems', 'IR Remote Control', 'EK410A', 'Mobile Development', 'Hashing Algorithms']
  },
  {
    id: 3,
    company: 'Sixth Sense Info',
    position: 'Software Developer Intern',
    location: 'Ahmedabad, India',
    duration: 'June 2022 – Sept 2022',
    startDate: '2022-06',
    endDate: '2022-09',
    achievements: [
      'Engineered a full-stack workspace booking application using React with Tailwind CSS for responsive styling, integrating 20+ RESTful APIs to streamline operations and enhance the user experience',
      'Implemented a scalable backend using Java Spring Boot, integrating JWT authentication along with role-based access control to ensure secure, efficient, and maintainable user management for multiple user roles',
      'Integrated MongoDB with Hibernate ORM and implemented Redis caching to ensure consistent and high-performance data management, performed unit and API testing of backend services using JUnit and Mockito'
    ],
    technologies: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'JWT', 'MongoDB', 'Hibernate', 'Redis', 'REST API', 'JUnit', 'Mockito', 'Role-Based Access Control']
  }
];



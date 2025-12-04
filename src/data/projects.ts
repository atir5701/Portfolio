import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'StayMate: Home Booking Platform',
    description: 'Full-stack MERN application for travelers to search, book, and review homes while hosts can list and manage properties. Features secure JWT authentication, role-based access control, responsive design, and real-time updates for seamless user experience.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/atir5701/StayMate',
    featured: true,
    stars: 0,
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Bitly URL Shortener',
    description: 'Enterprise-grade URL shortening service built with Spring Boot featuring comprehensive analytics dashboard. Tracks clicks, geographic data, referrer sources, and provides detailed statistics with RESTful APIs for integration.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Analytics', 'Hibernate'],
    githubUrl: 'https://github.com/atir5701/Bitly',
    featured: true,
    stars: 0,
    category: 'backend'
  },
  {
    id: 3,
    title: 'Drowsiness Detection for Intelligent Transportation',
    description: 'Innovative IoT solution combining computer vision with blockchain technology. Implemented real-time driver monitoring system with secure data storage using smart contracts, ensuring privacy and accountability in intelligent transportation systems.',
    technologies: ['Python', 'Computer Vision', 'Blockchain', 'Smart Contracts', 'OpenCV', 'FastAPI'],
    githubUrl: 'https://github.com/atir5701/Drowsiness-Detection-for-Intelligent-Transportation-Systems',
    featured: true,
    stars: 2,
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'ImageLab: Advanced Image Processing Tool',
    description: 'Comprehensive desktop application for image manipulation and processing. Features advanced filters, transformations, edge detection, and batch processing capabilities with an intuitive Swing-based GUI. Perfect for photographers and designers.',
    technologies: ['Java', 'Swing', 'Image Processing', 'GUI', 'Design Patterns'],
    githubUrl: 'https://github.com/atir5701/ImageLab',
    featured: true,
    stars: 0,
    category: 'desktop'
  },
  {
    id: 5,
    title: 'Resume ATS Optimizer',
    description: 'AI-powered web application that helps job seekers optimize their resumes for Applicant Tracking Systems. Analyzes resume content against job descriptions and provides actionable feedback with scoring and keyword suggestions.',
    technologies: ['Python', 'Streamlit', 'AI', 'NLP', 'Google AI', 'PDF Processing'],
    githubUrl: 'https://github.com/atir5701/Resume-ATS',
    featured: false,
    stars: 0,
    category: 'ai'
  },
  {
    id: 6,
    title: 'Cold Email Generator',
    description: 'Intelligent automation tool for job seekers that generates personalized cold emails using advanced AI. Integrates LLAMA-3.1 for natural language generation and Chroma DB for efficient data retrieval and matching.',
    technologies: ['Python', 'LLAMA-3.1', 'Chroma DB', 'NLP', 'AI', 'Streamlit'],
    githubUrl: 'https://github.com/atir5701/cold-email-generator',
    featured: false,
    stars: 0,
    category: 'ai'
  },
  {
    id: 7,
    title: 'Stock Pattern Detection System',
    description: 'Hackathon-winning algorithmic trading tool that identifies stock patterns using advanced signal processing. Implements Perceptually Important Points (PIPs) with sliding window approach for real-time pattern recognition.',
    technologies: ['Python', 'Algorithms', 'Time Series Analysis', 'NumPy', 'Pandas', 'Data Visualization'],
    githubUrl: 'https://github.com/atir5701/Stock-Pattern-Detection-using-sliding-window',
    featured: false,
    stars: 0,
    category: 'ai'
  },
  {
    id: 8,
    title: 'Soccer Scout: Smart Player Recommendation',
    description: 'Data-driven recommendation engine for FIFA e-sports team building. Analyzes player statistics, gameplay styles, and budget constraints to suggest optimal team compositions using collaborative filtering and content-based algorithms.',
    technologies: ['Python', 'Recommendation Systems', 'Data Analysis', 'Scikit-learn', 'Pandas', 'Flask'],
    githubUrl: 'https://github.com/atir5701/Soccer-Scout-A-Smart-Player-Recommendation',
    featured: false,
    stars: 0,
    category: 'ai'
  },
  {
    id: 9,
    title: 'BookNest: Book Recommendation Platform',
    description: 'Sophisticated recommendation system combining multiple algorithms for personalized book suggestions. Published research at International Conference on Computing, Communication, and Cyber Security (IC4S\'05).',
    technologies: ['Python', 'Ensemble Learning', 'NLP', 'Recommendation Systems', 'Scikit-learn', 'Flask'],
    githubUrl: 'https://github.com/atir5701/BookNest-Ensemle-based-Book-Recommendation-System',
    featured: false,
    stars: 1,
    category: 'ai'
  },
  {
    id: 10,
    title: 'Humour Detection System',
    description: 'NLP-powered web application that classifies text as humorous or non-humorous. Implements multiple feature extraction methods (TF-IDF, Word2Vec) with Django backend for real-time text classification.',
    technologies: ['Python', 'NLP', 'Django', 'Scikit-learn', 'REST API', 'Machine Learning'],
    githubUrl: 'https://github.com/atir5701/Humour-Detection',
    featured: false,
    stars: 1,
    category: 'ai'
  },
  {
    id: 11,
    title: 'Multilingual Digit Recognition',
    description: 'Computer vision system for handwritten digit recognition across 5 regional languages. Implements custom deep learning architecture with multiplexer-based model selection for improved accuracy.',
    technologies: ['Python', 'Deep Learning', 'Computer Vision', 'CNN', 'Image Processing'],
    githubUrl: 'https://github.com/atir5701/Multilingual-Handwritten-Digit-Recognition-Using-DeepLearning-Model',
    featured: false,
    stars: 0,
    category: 'ai'
  },
  {
    id: 12,
    title: 'DFA Minimization Algorithm',
    description: 'Implementation of automata theory algorithm for optimizing deterministic finite automatons. Reduces state complexity while preserving behavior - essential for compiler design and formal language processing.',
    technologies: ['Python', 'Algorithms', 'Automata Theory', 'Data Structures', 'Graph Theory'],
    githubUrl: 'https://github.com/atir5701/DFA-Minimization',
    featured: false,
    stars: 0,
    category: 'algorithms'
  },
  {
    id: 13,
    title: 'Deep Eutectic Solvents Property Prediction',
    description: 'Research-focused machine learning pipeline for predicting physical properties of synthetic solvents. Achieved 99.23% accuracy in density prediction and 98.45% in viscosity prediction using advanced regression models.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Analysis', 'Feature Engineering'],
    githubUrl: 'https://github.com/atir5701/mlproject',
    featured: false,
    stars: 0,
    category: 'ai'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  { id: 'ai', label: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
  { id: 'desktop', label: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length },
  { id: 'algorithms', label: 'Algorithms', count: projects.filter(p => p.category === 'algorithms').length },
];



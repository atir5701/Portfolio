# 🚀 Atir Shakhrelia - Portfolio Website

A modern, high-performance portfolio website showcasing my projects, skills, and experience. Built with cutting-edge web technologies for optimal user experience and performance.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Dark/Light Theme** - Seamless theme switching with persistence across sessions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful user interactions
- 🎯 **Type-Safe** - 100% TypeScript for robust, maintainable code
- 💅 **Modern UI/UX** - Clean, professional design with Tailwind CSS
- 🔍 **SEO Optimized** - Meta tags and semantic HTML for better discoverability
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 📊 **Performance Optimized** - Code splitting and lazy loading for faster page loads

## 📸 Screenshots

### Light Mode
Modern, clean interface with excellent readability

### Dark Mode
Eye-friendly dark theme for comfortable viewing

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework:** [React 18](https://reactjs.org/) - Latest version with concurrent features
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Build Tool:** [Vite 5](https://vitejs.dev/) - Next generation frontend tooling
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework

### Libraries & Tools
- **Animation:** [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Linting:** ESLint with TypeScript support
- **Code Quality:** Prettier for consistent formatting

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atir5701/portfolio-react.git
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
portfolio-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Education.tsx  # Education details
│   │   ├── Experience.tsx # Work experience
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Hero.tsx       # Landing/Hero section
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Publications.tsx # Academic publications
│   │   ├── Skills.tsx     # Technical skills
│   │   └── ThemeToggle.tsx # Dark/Light mode toggle
│   ├── context/
│   │   └── ThemeContext.tsx # Theme state management
│   ├── data/              # Data files for content
│   │   ├── education.ts   # Education data
│   │   ├── experience.ts  # Work experience data
│   │   ├── personal.ts    # Personal information
│   │   ├── projects.ts    # Projects data
│   │   ├── publications.ts # Publications data
│   │   └── skills.ts      # Skills data
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrollAnimation.ts # Scroll-based animations
│   │   └── useTypewriter.ts     # Typewriter effect
│   ├── styles/
│   │   └── index.css      # Global styles & Tailwind imports
│   ├── types/
│   │   └── index.ts       # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── dist/                  # Production build output
├── .eslintrc.cjs         # ESLint configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 🎨 Customization

### Updating Personal Information

1. **Personal Details:** Edit `src/data/personal.ts`
2. **Projects:** Update `src/data/projects.ts`
3. **Skills:** Modify `src/data/skills.ts`
4. **Experience:** Change `src/data/experience.ts`
5. **Education:** Edit `src/data/education.ts`
6. **Publications:** Update `src/data/publications.ts`

### Styling

- **Colors:** Modify `tailwind.config.js` to change the color palette
- **Fonts:** Update font imports in `src/styles/index.css`
- **Animations:** Customize transitions in individual components using Framer Motion

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### GitHub Pages
1. Update `vite.config.ts` with your repo base path
2. Build the project
3. Deploy the `dist` folder to `gh-pages` branch

## 🌟 Key Sections

- **Hero** - Eye-catching introduction with animated typewriter effect
- **About** - Personal background and interests
- **Experience** - Professional work history with achievements
- **Education** - Academic background and coursework
- **Skills** - Technical proficiencies with categorized view
- **Projects** - Portfolio of featured projects with live demos
- **Publications** - Academic publications and research
- **Contact** - Get in touch section with social links

## 🔧 Performance Optimizations

- ✅ Code splitting for faster initial load
- ✅ Lazy loading of components
- ✅ Optimized images and assets
- ✅ Minimal bundle size (~121KB gzipped)
- ✅ Tree-shaking for unused code elimination
- ✅ CSS purging for production builds

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Atir Shakhrelia**

- 📧 Email: shakhreliaatir@gmail.com
- 🐙 GitHub: [@atir5701](https://github.com/atir5701)
- 💼 LinkedIn: [atirsakhrelia28](https://www.linkedin.com/in/atirsakhrelia28/)
- 🎓 HackerRank: [atir_shakhrelia](https://www.hackerrank.com/atir_shakhrelia)
- 💻 LeetCode: [atir5701](https://leetcode.com/atir5701/)

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Built with ❤️ by Atir Shakhrelia</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

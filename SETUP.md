# Portfolio Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory:**
```bash
cd portfolio-react
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Publications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/          # React Context
│   │   └── ThemeContext.tsx
│   ├── data/             # Data files
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   └── publications.ts
│   ├── hooks/            # Custom hooks
│   │   ├── useTypewriter.ts
│   │   └── useScrollAnimation.ts
│   ├── styles/           # CSS styles
│   │   └── index.css
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/personal.ts` to update your name, bio, email, location, etc.

### Add/Modify Projects
Edit `src/data/projects.ts` to add or modify your projects.

### Update Experience
Edit `src/data/experience.ts` to update your work experience.

### Modify Education
Edit `src/data/education.ts` to update your educational background.

### Update Skills
Edit `src/data/skills.ts` to add or modify your skills.

### Add Publications
Edit `src/data/publications.ts` to add your research publications.

### Add Profile Photo
1. Place your profile photo in `public/assets/` directory
2. Update the image reference in the Hero component

### Add Project Images
1. Place project images in `public/assets/projects/` directory
2. Update image paths in `src/data/projects.ts`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI (optional):**
```bash
npm install -g vercel
```

2. **Deploy using Vercel CLI:**
```bash
vercel
```

Or simply:
- Push your code to GitHub
- Import the repository on [Vercel](https://vercel.com)
- Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `dist` folder to Netlify:**
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts:**
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Deploy:**
```bash
npm run deploy
```

## 🎯 Features

### ✅ Implemented Features

- [x] Dark/Light theme toggle with persistence
- [x] Fully responsive design (mobile, tablet, desktop)
- [x] Smooth animations with Framer Motion
- [x] Typewriter effect in hero section
- [x] Scroll-triggered animations
- [x] Project filtering by category
- [x] Skills categorization and filtering
- [x] Experience carousel
- [x] Contact form with validation
- [x] Timeline-based education section
- [x] Publications display
- [x] Social media links
- [x] Resume download
- [x] SEO optimized
- [x] Fast loading with Vite

### 🔄 Optional Enhancements

- [ ] Add actual email backend for contact form
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add certifications section
- [ ] Integrate Google Analytics
- [ ] Add more animations
- [ ] Add loading screen
- [ ] Add particle background effect
- [ ] Add achievement badges
- [ ] Add timeline for career journey

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📝 Content Updates

All content is stored in separate data files in `src/data/`. Simply edit these files to update:

- **Personal Info:** `personal.ts`
- **Projects:** `projects.ts` (13 projects from your GitHub)
- **Experience:** `experience.ts` (3 internships)
- **Education:** `education.ts` (MS + B.Tech)
- **Skills:** `skills.ts` (40+ skills)
- **Publications:** `publications.ts` (3 publications)

## 🎨 Theme Customization

The theme colors can be modified in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0f',
    surface: '#16213e',
    border: '#334155',
  },
  light: {
    bg: '#ffffff',
    surface: '#f8fafc',
    border: '#e2e8f0',
  }
}
```

## 🐛 Troubleshooting

### Port already in use
If port 3000 is already in use, Vite will automatically use the next available port.

### Dependencies installation fails
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
Ensure you're using Node.js 18+ :
```bash
node --version
```

## 📧 Support

For issues or questions, contact: shakhreliaatir@gmail.com

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Made with ❤️ by Atir Shakhrelia



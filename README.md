# Redstone Engineer 🚀

Welcome to the **Redstone Engineer** repository! This is a modern, highly interactive web application serving as a dynamic portfolio and experimental technology hub. Built with performance, fluid animations, and aesthetics in mind, the platform showcases various projects, interactive experiments, and a dedicated invention lab.

## 🌟 Features

| Feature | Description |
|---------|-------------|
| **Dynamic User Interface** | Crafted with the latest React concepts and styled beautifully using Tailwind CSS |
| **Advanced Animations** | Complex, high-performance interactions powered by both GSAP and Framer Motion |
| **Invention Lab & Experiments** | Dedicated modules for showcasing cutting-edge tech explorations |
| **Monoliths Showcase** | A structured display of major projects and architectural achievements |
| **Secure Admin Dashboard** | Administrative portal for seamless content management |
| **Real-time Data Integration** | Powered by Firebase for robust backend services and authentication |
| **Optimized Routing** | Client-side routing handled natively for a seamless Single Page Application (SPA) experience |

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Tool

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.5 | UI library for building component-based interfaces |
| React DOM | ^19.2.5 | React package for working with the DOM |
| Vite | ^8.0.10 | Next-generation frontend tooling for ultra-fast HMR and optimized builds |

### Styling & UI

| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | ^3.4.19 | Utility-first CSS framework for rapid UI development |
| PostCSS | ^8.5.14 | CSS transformation tool |
| Autoprefixer | ^10.5.0 | CSS vendor prefix automation |
| Lucide React | ^1.14.0 | Beautiful, consistent icon toolkit |

### Animation & Motion

| Technology | Version | Purpose |
|------------|---------|---------|
| GSAP | ^3.15.0 | Professional-grade JavaScript animation suite |
| @gsap/react | ^2.1.2 | React integration for GSAP |
| Framer Motion | ^12.38.0 | Declarative motion library for React components |

### Routing & Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| React Router DOM | ^7.15.0 | Dynamic routing for seamless page transitions |
| Firebase | ^12.12.1 | Backend-as-a-Service for database, hosting, and authentication |

## ⚙️ Development Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start Dev Server | `npm run dev` | Fires up the Vite development server with instant HMR |
| Build for Production | `npm run build` | Compiles the React app into optimized static assets in `dist` folder |
| Lint Codebase | `npm run lint` | Runs ESLint across the codebase to ensure code quality |
| Preview Production Build | `npm run preview` | Boots up a local static web server to preview production build |

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | v18 or higher |
| npm or yarn | Latest stable |

### Installation Steps

| Step | Action | Command |
|------|--------|---------|
| 1 | Clone the repository | `git clone https://github.com/yourusername/redstone-engineer.git` |
| 2 | Navigate to project | `cd redstone-engineer` |
| 3 | Install dependencies | `npm install` |
| 4 | Set up environment variables | Create `.env` file (see table below) |
| 5 | Start development server | `npm run dev` |

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase authentication domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project identifier |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket URL |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase application ID |

**Application URL:** `http://localhost:5173`

## 📁 Project Architecture

| Directory/File | Purpose |
|----------------|---------|
| `public/` | Static assets, manifest, and deployment redirects |
| `src/assets/` | Images, global SVGs, and visual assets |
| `src/components/` | Reusable UI modules (Navbar, Hero, AdminDashboard, etc.) |
| `src/hooks/` | Custom React hooks for state and lifecycle management |
| `src/App.jsx` | Main application layout and routing configuration |
| `src/main.jsx` | Application entry point |
| `src/firebase.js` | Firebase configuration and initialization |
| `.gitignore` | Git ignore rules |
| `eslint.config.js` | Linting rules configuration |
| `package.json` | Dependency mapping and scripts |
| `postcss.config.js` | CSS transformation rules |
| `tailwind.config.js` | Tailwind CSS utility class configurations |
| `vite.config.js` | Vite bundler settings |

## 👨‍💻 Author

| Attribute | Details |
|-----------|---------|
| **Name** | Sayan Maity |
| **Education** | Electrical Engineering Student at Haldia Institute of Technology |
| **Live Website** | [redstoneengineer.site](https://redstoneengineer.site) |

## 📄 License

This project is open-source and available under the **MIT License**.

# Alief Fahdal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Beautiful gradient backgrounds, smooth animations, and intuitive navigation
- **Fast Performance** - Optimized with Vite for quick builds and fast load times
- **Dark Theme** - Eye-friendly dark mode design with blue accent colors
- **Smooth Scrolling** - Elegant page navigation with smooth scroll behavior
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero** - Engaging welcome section with call-to-action buttons
2. **About** - Personal introduction and showcase of expertise
3. **Skills** - Categorized technical skills and technologies
4. **Projects** - Featured projects with descriptions and tech stack
5. **Contact** - Contact form and social media links
6. **Footer** - Copyright and social links

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Project Structure

```
my-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── styles/             # Component-specific CSS
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   ├── Navbar.css
│   │   └── Footer.css
│   ├── App.tsx            # Main app component
│   ├── App.css            # Global styles
│   ├── index.css          # Base styles
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite types
├── public/                # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies

.github/
└── workflows/
    └── deploy.yml        # GitHub Actions deployment workflow
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

   The built files will be in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 🔧 Development

### Make Changes

- Update components in `src/components/`
- Modify styles in `src/styles/` or `src/App.css`
- Test changes in development server (`npm run dev`)

### Linting

```bash
npm run lint
```

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The portfolio is automatically deployed to GitHub Pages when you push to the `main` branch.

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   ```

2. **Push to main:**
   ```bash
   git push origin main
   ```

3. **Your site will be deployed automatically!**

Visit your portfolio at: [https://alieffahdal.github.io](https://alieffahdal.github.io)

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push the `dist/` folder to GitHub Pages**

## 📝 Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
2. **About Section** - Edit `src/components/About.tsx`
3. **Projects** - Update the projects array in `src/components/Projects.tsx`
4. **Skills** - Modify the skills array in `src/components/Skills.tsx`
5. **Contact Links** - Update contact information in `src/components/Contact.tsx`

### Styling

- Global styles are in `src/index.css` and `src/App.css`
- Component-specific styles are in `src/styles/`
- Colors use CSS variables defined in the CSS files
- Customize colors by editing the hex values in the CSS files

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full layout with all features visible
- **Tablet**: Optimized grid layouts
- **Mobile**: Stack-based layouts for better readability

## 🎨 Color Scheme

- **Primary**: #3b82f6 (Blue)
- **Secondary**: #2563eb (Dark Blue)
- **Accent**: #60a5fa (Light Blue)
- **Background**: #0a0e27 (Dark)
- **Text**: rgba(255, 255, 255, 0.87)

## 🔐 Security

- No sensitive information stored in client-side code
- Form submissions are handled client-side (no backend integration)
- All external links have proper security attributes

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, reach out through the contact form on the website or via GitHub.

---

**Built with ❤️ by Alief Fahdal**

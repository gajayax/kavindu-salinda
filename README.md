# 🚀 Modern 3D Developer & Designer Portfolio Template

A high-performance, interactive, and fully responsive developer portfolio template built with **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. Designed with modern 3D parallax effects, glassmorphic cards, smooth light/dark mode switching, and a centralized configuration system.

---

## ✨ Features

- ⚡ **Vite & React 18** – Ultra-fast development and optimized production builds.
- 🎨 **Tailwind CSS & shadcn/ui** – Clean, modern, and easily customizable styles with dark/light mode support.
- 🌟 **3D Parallax & Tilt Effects** – Interactive perspective transforms, orbital badges, and particle backdrops.
- 📁 **Centralized Configuration (`src/content.tsx`)** – Customize all your text, social links, skills, and projects in a single file without modifying component logic.
- 📱 **Fully Responsive** – Pixel-perfect on mobile devices, tablets, laptops, and ultra-wide screens.
- 🖼️ **Dedicated Project Gallery Page** – Clean modal views and expandable project showcases (`/gallery`).
- 📬 **Working Contact Form** – Built-in support for **Web3Forms** and **FormSubmit** (no backend server required).
- 📄 **ATS-Friendly CV Component** – Clean, printable resume template ready to export or embed.
- ♿ **Accessibility & Reduced Motion** – Respects user system preferences (`prefers-reduced-motion`).

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

### 2. Installation
Clone or extract the repository, navigate into the directory, and install dependencies:

```bash
# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:8080` (or the port shown in your terminal).

### 4. Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory.

---

## 🛠️ Customization Guide

### 1. Update Your Information (`src/content.tsx`)
All portfolio data is located in `src/content.tsx`. Simply open this file to update:

- **Hero Details:** Name, job title, email, and short introduction.
- **About Section:** Bio paragraphs and quick facts (experience, education, role, languages).
- **Skills:** Technical skills by category, soft skills, and associated icons.
- **Social Links:** GitHub, LinkedIn, Twitter/X, and custom links.
- **Projects:** Title, description, tags, live URLs, GitHub repository links, and featured status.

```typescript
// Example from src/content.tsx
export const heroSectionTitle = "Alex Morgan";
export const heroSectionSubtitle = "Full Stack Software Engineer";
export const heroEmail = "alex.morgan@example.com";
```

### 2. Replace Photos and Project Images
- **Profile Photo:** Place your photo in `src/assets/profile-photo.jpg` (or import your custom image path into `src/components/Hero.tsx`).
- **Project Screenshots:** Add your image assets inside `src/assets/projects/` and import them in `src/content.tsx`.

### 3. Contact Form Setup
The contact form works out of the box using **FormSubmit** or **Web3Forms**:

#### Option A: Web3Forms (Recommended)
1. Get a free access key at [web3forms.com](https://web3forms.com/).
2. Create a `.env` file in the root folder:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

#### Option B: FormSubmit
If no `.env` key is provided, the contact form will automatically fallback to FormSubmit using the `heroEmail` defined in `src/content.tsx`.

---

## 📂 Project Structure

```
├── public/                 # Static assets (robots.txt, icons)
├── src/
│   ├── assets/             # Images, project screenshots, and photos
│   ├── components/
│   │   ├── effects/        # 3D TiltCard, ParticleField, ScrollStage
│   │   ├── ui/             # Radix UI & shadcn/ui components
│   │   ├── About.tsx       # About Me & Quick Facts section
│   │   ├── Contact.tsx     # Contact form & social media links
│   │   ├── Cv.tsx          # Printable ATS-friendly CV component
│   │   ├── Hero.tsx        # 3D Hero introduction & orbital avatar
│   │   ├── Navigation.tsx  # Sticky header with dark/light mode toggle
│   │   ├── Projects.tsx    # Stacked 3D featured projects cards
│   │   ├── ProjectGallery.tsx # Mosaic interactive gallery
│   │   └── Skills.tsx      # Categorized skill badges
│   ├── hooks/              # Custom React hooks (motion, scroll, toast)
│   ├── pages/
│   │   ├── Index.tsx       # Main single-page portfolio
│   │   ├── Gallery.tsx     # Full project gallery view
│   │   └── NotFound.tsx    # 404 Error page
│   ├── content.tsx         # ⭐ Central content configuration
│   ├── App.tsx             # Route definitions & theme providers
│   ├── index.css           # Global CSS variables & 3D utility classes
│   └── main.tsx            # React application entry point
├── package.json
├── tailwind.config.ts      # Tailwind configuration and color palette
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to **GitHub**.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📄 License

This template is licensed for personal and commercial use to build individual portfolios and client websites. Reselling or redistributing the source code template itself as an unmodified competing digital product is prohibited.

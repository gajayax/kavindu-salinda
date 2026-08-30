import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code2, Palette, Database, Smartphone, Cloud, GitBranch, Zap, Users } from "lucide-react";
import popyPosImg from "@/assets/projects/popyPosImg.png";
import tinkertaleImg from "@/assets/projects/tinkertaleImg.png";
import proImage from "@/assets/projects/proImage.png";
// ============================================================================
// 1. HERO SECTION CONFIGURATION
// ============================================================================
export const heroSectionTitle = "Alex Morgan";
export const heroSectionSubtitle = "Full Stack Software Engineer";
export const heroEmail = "alex.morgan@example.com";
export const heroSectionDescription = "Passionate full-stack engineer specializing in crafting scalable, responsive web applications with React, TypeScript, and modern backend architectures.";

// ============================================================================
// 2. ABOUT SECTION CONFIGURATION
// ============================================================================
export const descriptionPart1 = "I am a dedicated software engineer with 3+ years of experience building performant, user-centric web applications. I specialize in modern JavaScript/TypeScript ecosystems, React, Node.js, and clean API design.";
export const descriptionPart2 = "Experienced in both remote and agile team environments. I prioritize writing clean, maintainable code, optimizing system performance, and continuously adapting to emerging technologies.";

// Quick Facts Data (displayed on the About card)
export const experience = "3+ Years"; 
export const education = "B.S. in Computer Science";
export const currentRole = "Full Stack Engineer";
export const languages = "English, Spanish";

export const quickFacts = [
  {
    title: "Experience",
    value: experience,
  },
  {
    title: "Education",
    value: education,
  },
  {
    title: "Current Role",
    value: currentRole,
  },
  {
    title: "Languages",
    value: languages,
  },
];

// ============================================================================
// 3. SKILLS CONFIGURATION
// ============================================================================
export const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-8 w-8" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux Toolkit"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Backend Development",
    icon: <Database className="h-8 w-8" />,
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "UI/UX & Design Systems",
    icon: <Palette className="h-8 w-8" />,
    skills: ["Figma", "Design Tokens", "Radix UI", "shadcn/ui", "Responsive Design", "Accessibility (a11y)"],
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    skills: ["React Native", "Expo", "Mobile-First UX", "Cross-Platform Optimization"],
    color: "from-orange-500 to-yellow-600",
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-8 w-8" />,
    skills: ["Docker", "AWS (S3, EC2)", "Vercel", "CI/CD Pipelines", "Linux"],
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-8 w-8" />,
    skills: ["Git", "GitHub", "Vite", "Vitest", "Jest", "Postman"],
    color: "from-gray-500 to-slate-600",
  },
];

export const softSkills = [
  { name: "Leadership", icon: <Users className="h-5 w-5" /> },
  { name: "Problem Solving", icon: <Zap className="h-5 w-5" /> },
  { name: "Communication", icon: <Users className="h-5 w-5" /> },
  { name: "Adaptability", icon: <Zap className="h-5 w-5" /> },
];

// ============================================================================
// 4. CONTACT & SOCIAL CONFIGURATION
// ============================================================================
export const contactSectionDescription = "I'm always open to discussing new opportunities, innovative projects, or collaborative engineering efforts. Feel free to reach out anytime!";

export const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "alex.morgan@example.com",
    href: "mailto:alex.morgan@example.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone", 
    value: "+1 (555) 234-5678",
    href: "tel:+15552345678",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
  },
];

export const socialLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-gray-400",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn", 
    href: "https://linkedin.com",
    color: "hover:text-blue-500",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    label: "Twitter",
    href: "https://twitter.com", 
    color: "hover:text-sky-400",
  },
];

// ============================================================================
// 5. PROJECTS DATA
// ============================================================================
export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  isLive: boolean;
  githubUrl: string;
  hasCode: boolean;
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    title: "OmniFlow - SaaS Analytics Platform",
    description: "Engineered a real-time analytics dashboard with customizable metrics, multi-tenant workspace isolation, and automated reporting workflows.",
    image: popyPosImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Recharts"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: true,
    featured: true,
  },
  {
    title: "ApexStore - E-Commerce Engine",
    description: "Built a high-performance headless e-commerce store with real-time stock sync, Stripe integration, and optimized sub-second page loads.",
    image: tinkertaleImg,
    technologies: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS", "Redis"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: true,
    featured: true,
  },
  {
    title: "PulseAI - Workflow Automation",
    description: "Created an AI-assisted workspace tool integrating LLM pipelines, prompt chaining, and asynchronous background worker processing.",
    image: proImage,
    technologies: ["React", "Python", "FastAPI", "OpenAI API", "Docker"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: true,
    featured: true,
  },
  {
    title: "FleetTrack 360",
    description: "Developed an IoT fleet monitoring portal featuring live GPS telemetry mapping, maintenance alerts, and driver scheduling.",
    image: popyPosImg,
    technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Mapbox"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: false,
    featured: false,
  },
  {
    title: "DocuVault - Knowledge Base",
    description: "A fast, indexed technical documentation portal with instant fuzzy search, markdown rendering, and collaborative versioning.",
    image: tinkertaleImg,
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Algolia"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: true,
    featured: false,
  },
  {
    title: "Minimalist Dev Portfolio",
    description: "A sleek, responsive dark/light themed portfolio template built for developers and designers to showcase creative work.",
    image: proImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://example.com",
    isLive: true,
    githubUrl: "https://github.com",
    hasCode: true,
    featured: false,
  },
];

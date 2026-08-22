import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectGallery from "@/components/ProjectGallery";
import Contact from "@/components/Contact";
import SceneBackdrop from "@/components/effects/SceneBackdrop";
import ScrollProgress from "@/components/effects/ScrollProgress";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <SceneBackdrop />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <ProjectGallery />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SceneBackdrop from "@/components/effects/SceneBackdrop";
import ScrollProgress from "@/components/effects/ScrollProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <SceneBackdrop />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { heroEmail, heroSectionDescription, heroSectionSubtitle, heroSectionTitle, socialLinks } from "@/content";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background max-md:mt-24 max-lg:mt-32 mt-32 max-lg:mb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
                {heroSectionTitle}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light italic">
                {heroSectionSubtitle}
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <Globe size={20} />
              <span className="text-lg">{heroEmail}</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {heroSectionDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-elegant transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href={socialLinks[0].href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href={socialLinks[1].href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${heroEmail}`}
                className="text-muted-foreground hover:text-foreground transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-8 ring-border shadow-2xl my-8">
                <img 
                  src={profilePhoto} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
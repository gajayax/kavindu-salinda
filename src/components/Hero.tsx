import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { heroEmail, heroSectionDescription, heroSectionSubtitle, heroSectionTitle, socialLinks } from "@/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollY } from "@/hooks/use-scroll-y";

const Hero = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const y = useScrollY();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo || reduced) return;

    const onMove = (event: MouseEvent) => {
      const rect = photo.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      photo.style.transform = `rotateX(${py * -14}deg) rotateY(${px * 18}deg) translateZ(24px)`;
    };

    const onLeave = () => {
      photo.style.transform = "rotateX(6deg) rotateY(-10deg) translateZ(0)";
    };

    photo.addEventListener("mousemove", onMove);
    photo.addEventListener("mouseleave", onLeave);
    onLeave();

    return () => {
      photo.removeEventListener("mousemove", onMove);
      photo.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  const depth = reduced ? 0 : Math.min(1, y / (typeof window === "undefined" ? 1 : window.innerHeight * 0.85));

  return (
    <section id="hero" className="scene-3d relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent pt-28 max-lg:mb-16">
      <div
        className="container relative z-10 mx-auto px-4"
        style={
          reduced
            ? undefined
            : {
                transform: `translate3d(0, ${depth * 70}px, ${depth * -220}px) rotateX(${depth * 16}deg) scale(${1 - depth * 0.08})`,
                opacity: 1 - depth * 0.85,
                transformOrigin: "center top",
              }
        }
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="text-glow mb-4 font-display text-6xl font-bold text-foreground md:text-8xl">
                {heroSectionTitle}
              </h1>
              <p className="text-xl font-light italic text-muted-foreground md:text-2xl">
                {heroSectionSubtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Globe size={20} />
              <span className="text-lg">{heroEmail}</span>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {heroSectionDescription}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border/80 bg-background/40 backdrop-blur-md"
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
                className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <Github size={24} />
              </a>
              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${heroEmail}`}
                className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative" style={{ perspective: "1200px" }}>
              <div
                ref={photoRef}
                className="photo-frame my-8 h-80 w-80 md:h-96 md:w-96"
              >
                <div className="photo-ring" />
                <div className="photo-ring-inner" />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-8 ring-border/60 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Professional headshot"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

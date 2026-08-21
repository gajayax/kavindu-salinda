import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import ScrollStage from "./effects/ScrollStage";
import TiltCard from "./effects/TiltCard";

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const stackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = stackRef.current;
    if (!root || reduced) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"));
    let frame = 0;

    const update = () => {
      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) {
          card.style.transform = "translate3d(0,0,0) scale(1)";
          card.style.filter = "none";
          return;
        }

        const nextTop = next.getBoundingClientRect().top;
        const start = window.innerHeight * 0.92;
        const end = 120;
        const raw = (start - nextTop) / Math.max(1, start - end);
        const p = Math.min(1, Math.max(0, raw));
        const eased = p * p;

        card.style.transform = `translate3d(0, ${eased * -28}px, ${eased * -120}px) scale(${1 - eased * 0.08}) rotateX(${eased * 8}deg)`;
        card.style.filter = `brightness(${1 - eased * 0.28})`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section id="projects" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollStage>
            <h2 className="mb-16 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
              Featured Projects
            </h2>
          </ScrollStage>

          <div ref={stackRef} className="mb-20">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="sticky mb-6 flex min-h-[70vh] items-center py-4 md:mb-8"
                style={{ top: "6rem", zIndex: index + 1, perspective: "1400px" }}
              >
                <div data-stack-card className="w-full" style={{ transformStyle: "preserve-3d" }}>
                  <TiltCard>
                    <Card className="glass-panel overflow-hidden rounded-3xl border-0 shadow-hover">
                      <div className="grid lg:grid-cols-2">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 lg:aspect-auto lg:min-h-[360px]">
                          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-center p-6 md:p-8">
                          <h3 className="mb-3 font-display text-2xl font-semibold text-foreground">
                            {project.title}
                          </h3>

                          <p className="mb-4 leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>

                          <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border bg-skill-gradient px-3 py-1 text-sm font-medium text-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            {project.isLive && (
                              <Button asChild size="sm" className="flex-1 rounded-full">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <ExternalLink size={16} />
                                  Go to Website
                                </a>
                              </Button>
                            )}

                            {project.hasCode && (
                              <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <Github size={16} />
                                  Code
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TiltCard>
                </div>
              </article>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <ScrollStage>
              <div className="mb-12 text-center">
                <h3 className="mb-4 font-display text-3xl font-bold text-foreground">
                  Other Projects
                </h3>
                <p className="text-muted-foreground">
                  A selection of other projects I've worked on
                </p>
              </div>
            </ScrollStage>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ScrollStage key={project.title}>
                <TiltCard intensity={8}>
                  <Card className="glass-panel rounded-3xl border-0 p-6 shadow-card transition-all duration-300">
                    <h4 className="mb-3 font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h4>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-skill-gradient px-2 py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.isLive && (
                        <Button asChild size="sm" variant="outline" className="flex-1 rounded-full text-xs">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} />
                            Go to Website
                          </a>
                        </Button>
                      )}

                      {project.hasCode && (
                        <Button asChild size="sm" variant="outline" className="flex-1 rounded-full text-xs">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                </TiltCard>
              </ScrollStage>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

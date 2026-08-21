import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/content";
import Navigation from "@/components/Navigation";
import SceneBackdrop from "@/components/effects/SceneBackdrop";
import ScrollProgress from "@/components/effects/ScrollProgress";
import ScrollStage from "@/components/effects/ScrollStage";
import TiltCard from "@/components/effects/TiltCard";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <SceneBackdrop />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <section className="px-4 pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="container mx-auto max-w-7xl">
            <ScrollStage>
              <div className="mb-12 md:mb-16">
                <Link
                  to="/"
                  className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft size={16} />
                  Portfolio
                </Link>
                <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">
                  Project Gallery
                </h1>
              </div>
            </ScrollStage>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ScrollStage key={project.title} intensity={0.85 + (index % 2) * 0.15}>
                  <TiltCard className="project-tilt h-full">
                    <div className="project-card h-full">
                      <div className="project-card-offset" aria-hidden />
                      <div className="project-card-shell compact h-full">
                        <div className="project-screen gallery-landscape mb-5 overflow-hidden rounded-2xl">
                          <div className="project-chrome" aria-hidden>
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="project-shot">
                            <img src={project.image} alt={project.title} />
                          </div>
                        </div>

                        <h2 className="mb-3 font-display text-2xl font-semibold text-foreground">
                          {project.title}
                        </h2>
                        <p className="mb-4 leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="project-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.isLive && (
                            <Button asChild size="sm" className="flex-1 rounded-full">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
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
                              >
                                <Github size={16} />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollStage>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;

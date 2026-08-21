import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, LayoutGrid } from "lucide-react";
import { projects } from "@/content";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import ScrollStage from "./effects/ScrollStage";
import TiltCard from "./effects/TiltCard";

type Project = (typeof projects)[number];

interface ProjectGalleryProps {
  heading?: string;
  showPageLink?: boolean;
}

const ProjectGallery = ({
  heading = "Project Gallery",
  showPageLink = true,
}: ProjectGalleryProps) => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="gallery" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <ScrollStage>
            <div className="mb-12 flex flex-col items-center gap-6 text-center md:mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
                {heading}
              </h2>
              {showPageLink && (
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/gallery" className="flex items-center gap-2">
                    <LayoutGrid size={16} />
                    Open full gallery
                  </Link>
                </Button>
              )}
            </div>
          </ScrollStage>

          <div className="gallery-mosaic">
            {projects.map((project, index) => (
              <ScrollStage key={project.title} intensity={0.7 + (index % 3) * 0.12}>
                <TiltCard intensity={10} className="h-full rounded-[1.5rem]">
                  <button
                    type="button"
                    className="gallery-tile"
                    onClick={() => setActive(project)}
                  >
                    <img src={project.image} alt={project.title} />
                    <span className="gallery-tile-overlay">
                      <span className="font-display text-lg font-semibold md:text-xl">
                        {project.title}
                      </span>
                    </span>
                  </button>
                </TiltCard>
              </ScrollStage>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border/70 bg-background/90 p-0 sm:max-w-3xl sm:rounded-3xl [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-background/80 [&>button]:p-1">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <div className="project-screen gallery-landscape rounded-t-3xl">
                <div className="project-chrome" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-shot">
                  <img src={active.image} alt={active.title} />
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {active.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span key={tech} className="project-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {active.isLive && (
                    <Button asChild className="rounded-full">
                      <a href={active.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Go to Website
                      </a>
                    </Button>
                  )}
                  {active.hasCode && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={active.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGallery;

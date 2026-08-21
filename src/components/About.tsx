import { Card } from "./ui/card";
import { descriptionPart1, descriptionPart2, quickFacts } from "@/content";
import ScrollStage from "./effects/ScrollStage";

const About = () => {
  return (
    <section id="about" className="scene-3d relative scroll-mt-28 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <ScrollStage>
            <h2 className="mb-16 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
              About Me
            </h2>
          </ScrollStage>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollStage className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {descriptionPart1}
              </p>

              {descriptionPart2 && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {descriptionPart2}
                </p>
              )}
            </ScrollStage>

            <ScrollStage intensity={1.15}>
              <Card className="glass-panel rounded-3xl border-0 p-8 shadow-card transition-all duration-300 hover:shadow-hover">
                <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">Quick Facts</h3>

                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between ${index < quickFacts.length - 1 ? "border-b border-border pb-3" : ""}`}
                    >
                      <span className="text-muted-foreground">{fact.title}</span>
                      <span className="text-right font-semibold text-balance text-foreground">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollStage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card } from "./ui/card";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Zap,
  Users
} from "lucide-react";
import ScrollStage from "./effects/ScrollStage";
import TiltCard from "./effects/TiltCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-8 w-8" />,
      skills: ["React", "React Native", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8" />,
      skills: ["Django", "Node.js", "Python", "MySQL", "MongoDB", "Firebase"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-8 w-8" />,
      skills: ["Figma", "Adobe Photoshop", "WordPress", "n8n"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      skills: ["React Native", "Mobile UI/UX"],
      color: "from-orange-500 to-yellow-600"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub", "Cursor", "ClickUp", "Jira", "Slack"],
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Other Technologies",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["OpenAI APIs", "Brevo", "DigitalOcean", "Vercel", "Octave", "Arduino"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Zap className="h-5 w-5" /> },
    { name: "Communication", icon: <Users className="h-5 w-5" /> },
    { name: "Adaptability", icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="scene-3d relative scroll-mt-28 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollStage>
            <h2 className="mb-16 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
              Skills & Expertise
            </h2>
          </ScrollStage>

          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <ScrollStage key={category.title} intensity={0.9 + (index % 3) * 0.15}>
                <TiltCard intensity={9}>
                  <Card className="glass-panel h-full rounded-3xl border-0 p-6 shadow-card">
                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r p-3 text-white ${category.color}`}>
                      {category.icon}
                    </div>

                    <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-skill-gradient px-3 py-1 text-sm font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </TiltCard>
              </ScrollStage>
            ))}
          </div>

          <ScrollStage>
            <Card className="glass-panel rounded-3xl border-0 p-8 shadow-card">
              <h3 className="mb-8 text-center font-display text-2xl font-semibold text-foreground">
                Soft Skills
              </h3>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="mb-3 rounded-full bg-skill-gradient p-4 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollStage>
        </div>
      </div>
    </section>
  );
};

export default Skills;

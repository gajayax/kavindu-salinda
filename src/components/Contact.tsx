import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, socialLinks, contactSectionDescription } from "@/content";
import ScrollStage from "./effects/ScrollStage";
import TiltCard from "./effects/TiltCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="scene-3d relative scroll-mt-28 py-24 md:py-32 pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollStage>
            <h2 className="mb-16 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
              Let's Work Together
            </h2>
          </ScrollStage>

          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollStage>
              <TiltCard intensity={6}>
                <Card className="glass-panel rounded-3xl border-0 p-8 shadow-card">
                  <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
                    Send me a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-background/60"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-background/60"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px] w-full rounded-xl bg-background/60"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-hero-gradient text-white transition-opacity hover:opacity-90"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </TiltCard>
            </ScrollStage>

            <ScrollStage intensity={1.1} className="space-y-8">
              <div>
                <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
                  Get in Touch
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {contactSectionDescription}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-panel group flex items-center space-x-4 rounded-2xl p-4 transition-all duration-300 hover:shadow-hover"
                  >
                    <div className="rounded-full bg-skill-gradient p-3 text-foreground transition-transform group-hover:scale-110">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="mb-4 text-lg font-semibold text-foreground">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full bg-skill-gradient p-3 text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollStage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

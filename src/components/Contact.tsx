import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, socialLinks, contactSectionDescription, heroEmail } from "@/content";
import ScrollStage from "./effects/ScrollStage";
import TiltCard from "./effects/TiltCard";

const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) return;

    setSending(true);
    try {
      if (web3AccessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3AccessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: formData.name,
            subject: `Portfolio message from ${formData.name}`,
          }),
        });
        const result = await response.json();
        if (!response.ok || result.success === false) {
          throw new Error(result.message || "Failed to send");
        }
      } else {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(heroEmail)}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            _subject: `Portfolio message from ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        });
        const result = await response.json();
        if (!response.ok || result.success === "false" || result.success === false) {
          throw new Error(result.message || "Failed to send");
        }
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch {
      toast({
        variant: "destructive",
        title: "Couldn't send message",
        description: "Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
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
                    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

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
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
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

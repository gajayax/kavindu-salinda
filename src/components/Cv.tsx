import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import {
  heroSectionTitle,
  heroSectionSubtitle,
  heroEmail,
  descriptionPart1,
  experience,
  education,
  currentRole,
  languages,
  contactInfo,
  socialLinks,
  projects,
} from '@/content';

const ATSFriendlyCV = () => {
    const phone = contactInfo.find(c => c.label === "Phone")?.value || "+1 (555) 234-5678";
    const location = contactInfo.find(c => c.label === "Location")?.value || "San Francisco, CA";
    const github = socialLinks.find(s => s.label === "GitHub")?.href || "https://github.com";
    const linkedin = socialLinks.find(s => s.label === "LinkedIn")?.href || "https://linkedin.com";

    return (
        <div className="max-w-4xl mx-auto bg-white p-8">
            {/* Header */}
            <header className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2 uppercase">{heroSectionTitle}</h1>
                <h2 className="text-xl text-gray-700 mb-4">{heroSectionSubtitle}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>{heroEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin size={16} />
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {linkedin.replace("https://", "")}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Github size={16} />
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {github.replace("https://", "")}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={16} />
                        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            portfolio-demo.com
                        </a>
                    </div>
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
                <p className="text-gray-700 leading-relaxed">
                    {descriptionPart1}
                </p>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
                <div className="mb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold text-gray-900">{education}</p>
                            <p className="text-gray-700">Top Tier University - Graduated with Honors</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">TECHNICAL SKILLS</h3>
                <div className="space-y-2">
                    <div>
                        <span className="font-semibold text-gray-900">Frontend:</span>
                        <span className="text-gray-700 ml-2">React, TypeScript, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Vite</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Backend:</span>
                        <span className="text-gray-700 ml-2">Node.js, Express, Python, Django, REST APIs, GraphQL</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Databases:</span>
                        <span className="text-gray-700 ml-2">PostgreSQL, MySQL, MongoDB, Redis, Firebase</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">DevOps & Cloud:</span>
                        <span className="text-gray-700 ml-2">Docker, AWS, Vercel, CI/CD, Git, GitHub Actions</span>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h3>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{currentRole}</h4>
                        <span className="text-gray-600 text-sm">{experience}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Developed performant and scalable web applications using React, TypeScript, and modern component libraries.</li>
                        <li>Designed and integrated resilient backend APIs and microservices with automated testing pipelines.</li>
                        <li>Collaborated in agile, cross-functional teams to deliver high-quality software on schedule.</li>
                        <li>Enhanced web performance metrics, resulting in faster load times and improved Lighthouse scores.</li>
                    </ul>
                </div>
            </section>

            {/* Key Projects */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1 mt-6">KEY PROJECTS</h3>

                {projects.slice(0, 3).map((project) => (
                    <div key={project.title} className="mb-4">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-gray-900">{project.title}</h4>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                                    {project.liveUrl}
                                </a>
                            )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{project.technologies.join(", ")}</p>
                        <p className="text-gray-700 text-sm ml-4">{project.description}</p>
                    </div>
                ))}
            </section>

            {/* Languages */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">LANGUAGES</h3>
                <div className="text-gray-700">
                    {languages}
                </div>
            </section>
        </div>
    );
};

export default ATSFriendlyCV;

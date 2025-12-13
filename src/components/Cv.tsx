import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const ATSFriendlyCV = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8">
            {/* Header */}
            <header className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">KAVINDU SALINDA</h1>
                <h2 className="text-xl text-gray-700 mb-4">Full Stack Software Engineer</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>kavindus26@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>+94 769734690</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Colombo, Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin size={16} />
                        <a href="https://www.linkedin.com/in/kavindu-salinda/" className="text-blue-600 hover:underline">linkedin.com/in/kavindu-salinda</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Github size={16} />
                        <a href="https://github.com/KavinduSalinda" className="text-blue-600 hover:underline">github.com/KavinduSalinda</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={16} />
                        <a href="https://kavindu-salinda.vercel.app/" className="text-blue-600 hover:underline">kavindu-salinda.vercel.app</a>
                    </div>
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
                <p className="text-gray-700 leading-relaxed">
                    Self motivated Full Stack Software Engineer with over 2 years of experience specializing in React and Django,
                    with additional proficiency in MERN stack development. Experienced in both remote and onsite work environments,
                    with a reputation as a fast learner who quickly adapts to new tools and technologies. Dedicated to delivering
                    high quality solutions while continuously expanding skills and expertise.
                </p>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
                <div className="mb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold text-gray-900">Bachelor of Science in Electronics & IT</p>
                            <p className="text-gray-700">University of Colombo - 2020 - 2024</p>
                            <p className="text-gray-700">GPA: 3.2</p>
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
                        <span className="text-gray-700 ml-2">React, React Native, Next.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Vite</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Backend:</span>
                        <span className="text-gray-700 ml-2">Django, Node.js, Python, Express</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Databases:</span>
                        <span className="text-gray-700 ml-2">MySQL, MongoDB, Firebase</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Design & Tools:</span>
                        <span className="text-gray-700 ml-2">Figma, Adobe Photoshop, WordPress, n8n</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Development Tools:</span>
                        <span className="text-gray-700 ml-2">Git, GitHub, Cursor, ClickUp, Jira, Slack</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-900">Other Technologies:</span>
                        <span className="text-gray-700 ml-2">OpenAI APIs, RAG Agents, Brevo, DigitalOcean, Vercel, WordPress REST API, text.lk, Arduino, Octave</span>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h3>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">Full Stack Software Engineer</h4>
                        <span className="text-gray-600 text-sm">2+ Years</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Specialized in React and Django development with proficiency in MERN stack technologies</li>
                        <li>Successfully delivered multiple full stack web applications with integrated AI capabilities</li>
                        <li>Experienced in both remote and onsite work environments with proven adaptability</li>
                        <li>Demonstrated expertise in API integration, database management, and responsive UI development</li>
                        <li>Built AI powered applications using OpenAI APIs and RAG agents for intelligent data processing</li>
                    </ul>
                </div>
            </section>

            {/* Key Projects */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1 mt-12">KEY PROJECTS</h3>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">FleetUp360 - Vehicle Rental Platform</h4>
                        <a href="https://fleetup.sprintcodelabs.com/" className="text-blue-600 text-sm hover:underline">fleetup.sprintcodelabs.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Django, Tailwind CSS, HTML, CSS, JavaScript, Python, MySQL, Brevo</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Developed comprehensive website for vehicle rental company using Django framework</li>
                        <li>Implemented responsive design with Tailwind CSS for optimal user experience</li>
                        <li>Built MySQL database architecture for efficient data management</li>
                        <li>Integrated Brevo email service for automated customer communications</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Negombo Taxi - Vehicle Booking Platform</h4>
                        <a href="https://www.negombotaxi.com/" className="text-blue-600 text-sm hover:underline">negombotaxi.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Vite, Lovable, Django, WordPress REST API, MySQL, Brevo, text.lk</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Developed tourist focused vehicle booking website with Django backend</li>
                        <li>Implemented efficient MySQL database for data management</li>
                        <li>Integrated SMS notifications using text.lk and email services with Brevo</li>
                        <li>Connected WordPress REST API for dynamic content management</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Hyvv - Research Checker Platform</h4>
                        <a href="https://app.thehyvv.com/" className="text-blue-600 text-sm hover:underline">app.thehyvv.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">React, Bootstrap, Django, n8n, RAG agents, OpenAI, Brevo</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Developed user friendly interface for Research Checker using React and Bootstrap</li>
                        <li>Implemented secure Django backend with OpenAI assistant integration</li>
                        <li>Built RAG agents for intelligent document analysis and research verification</li>
                        <li>Integrated email automation using Brevo and workflow automation with n8n</li>
                    </ul>
                </div>

                

                {/* <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Dubsea.com - Web Application Rebuild</h4>
                        <a href="https://www.dubsea.com/" className="text-blue-600 text-sm hover:underline">dubsea.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Next.js, Django, WordPress REST API, Brevo, Tailwind CSS</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Rebuilt web application using Next.js to optimize frontend performance</li>
                        <li>Integrated with Django backend and WordPress REST API for blog functionality</li>
                        <li>Improved page load times and overall user experience significantly</li>
                    </ul>
                </div> */}

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Tuition Center Website</h4>
                        <a href="https://sachiradilanka.com/" className="text-blue-600 text-sm hover:underline">sachiradilanka.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Django, WordPress, Tailwind CSS, Figma, MySQL</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Developed website for tuition center using Django and WordPress integration</li>
                        <li>Designed UI/UX in Figma and implemented with Tailwind CSS</li>
                        <li>Built content management system for easy updates by non-technical staff</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">Blubizlanka.com - Business Web Platform</h4>
                        <a href="https://bluebizlanka.com/" className="text-blue-600 text-sm hover:underline">bluebizlanka.com</a>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">React, Node.js, MongoDB, Express, Tailwind CSS</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Contributed to development of comprehensive MERN stack web platform</li>
                        <li>Created reusable UI components for improved development efficiency</li>
                        <li>Performed debugging and optimization to enhance user experience</li>
                    </ul>
                </div>
            </section>

            {/* Soft Skills */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">SOFT SKILLS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
                    <div>• Leadership</div>
                    <div>• Problem Solving</div>
                    <div>• Communication</div>
                    <div>• Adaptability</div>
                </div>
            </section>

            {/* Languages */}
            <section className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">LANGUAGES</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
                    <div>• English</div>
                    <div>• Sinhala</div>
                </div>
            </section>
        </div>
    );
};

export default ATSFriendlyCV;


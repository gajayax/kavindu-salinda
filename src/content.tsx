import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import negomboTaxiImg from "@/assets/projects/negomboTaxiImg.png";
import hyvvImg from "@/assets/projects/hyvvImg.png";
import tutionWebsiteImg from "@/assets/projects/tutionWebsiteImg.png";
import blubizlankaImg from "@/assets/projects/blubizlankaImg.png";
import dubseaImg from "@/assets/projects/dubseaImg.png";
import fleetup360Img from "@/assets/projects/fleetup360Img.png";



// hero section
export const heroSectionTitle = "Kavindu Salinda";
export const heroSectionSubtitle = "Full Stack Software Engineer";
export const heroEmail = "kavindus26@gmail.com";
export const heroSectionDescription = "Self motivated professional with over 2 years of experience specializing in React and Django, with additional proficiency in MERN stack development";

// about section
export const descriptionPart1 = "A self motivated professional with over 2 years of experience in the tech industry. I specialize in React and Django as main stack technologies, with additional proficiency in MERN stack development including Node.js and MongoDB.";
export const descriptionPart2 = "I'm experienced in both remote and onsite work environments, with a reputation as a fast learner who quickly adapts to new tools and technologies. I'm dedicated to delivering high quality solutions while continuously expanding my skills and expertise.";

// quick facts section
export const experience = "2+ Years"; 
export const education = "BSc Electronics & IT (University of Colombo)";
export const currentRole = "Full Stack Software Engineer";
export const languages = "English, Sinhala";

// Quick Facts Data  about section
export const quickFacts = [
    {
        title: "Experience",
        value: experience
    },
    
    {
        title: "Education",
        value: education
    },
    {
        title: "Current Role",
        value: currentRole
    },
    {
        title: "Languages",
        value: languages
    }
];

// contact section
export const contactSectionDescription = "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to say hello, I'd love to hear from you!";

// contact info section
export const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kavindus26@gmail.com",
      href: "mailto:kavindus26@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "+94 769734690",
      href: "tel:+94769734690"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "https://maps.google.com"
    }
  ];

// social links section
  export const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/KavinduSalinda",
      color: "hover:text-gray-600"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kavindu-salinda/",
      color: "hover:text-blue-600"
    },
    // {
    //   icon: <Twitter className="h-6 w-6" />,
    //   label: "Twitter",
    //   href: "https://twitter.com", 
    //   color: "hover:text-blue-400"
    // }
  ];

// Projects Data  projects section
export const projects = [
    {
      title: "fleetup360",
      description: "Developed a website for a vehicle rental company using Django, Tailwind CSS, HTML, CSS, JavaScript, Python, MySQL, and Brevo.",
      image: fleetup360Img,
      technologies: ["Django", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Python", "MySQL", "Brevo"],
      liveUrl: "https://fleetup.sprintcodelabs.com/",
      isLive: true,
      // githubUrl: "https://github.com",
      hasCode: false,
      featured: true
    },
    {
      title: "Hyvv",
      description: "Developed a user friendly interface for the Research Checker using React and Bootstrap, with a secure Django back end and OpenAI assistant integration.",
      image: hyvvImg, // image pathales
      technologies: ["React", "Bootstrap", "Django", "n8n", "RAG agents","OpenAI", "Brevo"],
      liveUrl: "https://app.thehyvv.com/",
      isLive: true, // true or false for live url
      githubUrl: "https://github.com",
      hasCode: false, // true or false for github url
      featured: true // true or false for featured project
    },
    {
      title: "Negombo Taxi",
      description: "Developed a website for booking vehicles aimed at tourists. Built with Django backend and MySQL database for efficient data management.",
      image: negomboTaxiImg, 
      technologies: ["Vite", "Lovable", "Django", "WordPress REST API", "MySQL", "Brevo", "text.lk"],
      liveUrl: "https://www.negombotaxi.com/",
      isLive: true,
      githubUrl: "https://github.com",
      hasCode: false,
      featured: true
    },
    {
      title: "Dubsea.com",
      description: "Rebuilt a web application using Next.js to optimize the frontend, integrated with Django backend and WordPress REST API for blogs.",
      image: dubseaImg,
      technologies: ["Next.js", "Django", "WordPress", "Brevo", "Tailwind CSS"],
      liveUrl: "https://www.dubsea.com/",
      isLive: true,
      githubUrl: "https://github.com",
      hasCode: false,
      featured: false
    },
    {
      title: "Tution Website",
      description: "Developed a website for a tution center using Django and WordPress.",
      image: tutionWebsiteImg,
      technologies: ["Django", "WordPress", "Tailwind CSS","figma"],
      liveUrl: "https://sachiradilanka.com/",
      isLive: true,
      githubUrl: "https://github.com",
      hasCode: false,
      featured: false
    },
    {
      title: "Blubizlanka.com",
      description: "Contributed to the development of a comprehensive web platform, focusing on creating reusable UI components and debugging to enhance user experience.",
      image: blubizlankaImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://bluebizlanka.com/",
      isLive: true,
      githubUrl: "https://github.com",
      hasCode: false,
      featured: false
    }
  ];
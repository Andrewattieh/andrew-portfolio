import {
  Globe,
  Smartphone,
  Brain,
  Database,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Central content store — edit everything about the site from this file.    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Andrew Attieh",
  shortName: "Andrew.",
  role: "Software Engineer & Freelance Developer",
  location: "Beirut, Lebanon",
  email: "andrewattieh21@gmail.com",
  phone: "+961 71 969 525",
  phoneHref: "+96171969525",
  bio: "Passionate about AI and building intelligent, data-driven systems. I bring a strong engineering foundation across backend development, database architecture, and AI pipelines — and I build websites and mobile apps for clients who want smarter, more intuitive products.",
  shortBio:
    "Software Engineer & freelance web & mobile developer building intelligent, data-driven products.",
  // PLACEHOLDER: drop a real photo at public/profile.jpg
  photo: "/profile.jpg",
  roles: [
    "Software Engineer",
    "Backend Developer",
    "Web & Mobile Developer",
    "AI & RAG Systems",
  ],
};

export const social = {
  linkedin: "https://www.linkedin.com/in/andrew-attieh",
  email: `mailto:${profile.email}`,
  github: "https://github.com/Andrewattieh",
  // PLACEHOLDER: add hosted resume link (e.g. a public PDF)
  resume: "#",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web apps and REST APIs built with .NET, React, and modern tooling. From concept to deployment.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with React Native, backed by real-time data and clean UX.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "RAG pipelines, fine-tuned chatbots, and document Q&A systems using LangChain, LlamaIndex, and Streamlit.",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description:
      "Scalable database architecture and APIs with SQL Server, PostgreSQL, Supabase, and Firebase.",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Brains SARL",
    location: "Beirut",
    period: "Mar 2025 – Present",
    tags: ["C#", ".NET", "SQL Server", "REST APIs", "Windows Forms", "SSRS/RDLC"],
    bullets: [
      "Audited a 30+ year old enterprise accounting system across architecture, data flows, access controls, and deployment.",
      "Tested financial controls across multi-branch environments, including data sync, POS integration, and transaction authorization.",
      "Used SQL to verify calculations, trace transactions, and identify control gaps across linked databases.",
      "Built RDLC reports for invoices, financial statements, and client-specific reporting needs.",
      "Built .NET and C# solutions with SQL Server covering REST APIs, Windows Forms, and complex stored procedures.",
      "Owned full project delivery solo across multiple clients — from requirements through deployment.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "INMIND.AI",
    location: "Beirut",
    period: "Dec 2024 – Feb 2025",
    tags: ["C#", ".NET", "PostgreSQL", "Docker", "Clean Architecture", "N-Tier"],
    bullets: [
      "Built database-driven apps using N-Tier and clean architecture patterns in C# .NET.",
      "Containerized a university management backend using Docker.",
      "Implemented a full N-Tier project with PostgreSQL Code-First migrations and working API endpoints.",
      "Applied dependency injection, caching, and database seeding in production-like environments.",
    ],
  },
  {
    role: "IT Intern",
    company: "INMIND.AI",
    location: "Beirut",
    period: "Sep 2024 – Nov 2024",
    tags: ["Linux", "Windows", "Apache", "Nginx", "Ubuntu"],
    bullets: [
      "Configured workstations across Linux and Windows and managed Apache and Nginx web server deployments.",
      "Administered a VM server hosting web apps on Ubuntu and Windows.",
      "Rolled out security monitoring agents across multiple systems to strengthen threat visibility.",
    ],
  },
  {
    role: "IT Operations Control Intern",
    company: "Bank Audi Head Office",
    location: "Beirut",
    period: "Oct 2023 – Jan 2024",
    tags: ["Security", "Risk Assessment", "Cybersecurity"],
    bullets: [
      "Maintained data integrity and security across regulated financial systems.",
      "Contributed to risk assessments and cybersecurity implementation efforts.",
      "Resolved hardware and software issues with minimal disruption to operations.",
    ],
  },
];

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "C#", "SQL", "JavaScript"],
  },
  {
    category: "Backend & Frameworks",
    skills: [".NET", "ASP.NET Web API", "REST APIs", "Windows Forms"],
  },
  {
    category: "Mobile",
    skills: ["React Native"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "RAG Pipelines",
      "Fine-tuned Chatbots",
      "LangChain",
      "LlamaIndex",
      "Streamlit",
    ],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "IIS", "SSMS", "n8n", "SSRS/RDLC"],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  stack: string[];
  description: string;
  features: string[];
  // PLACEHOLDER: replace with real cover images in public/projects/
  image: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Food & Recipe App",
    subtitle: "Final Year Project",
    stack: ["React Native", "Firebase"],
    description:
      "A mobile app with a user-preference-based recommendation system and a fine-tuned chatbot scoped to in-app data for accurate, context-aware responses.",
    features: [
      "Personalized recipe recommendations based on user preferences",
      "Context-aware AI chatbot grounded in in-app data",
      "Built with React Native and Firebase",
    ],
    image: "/projects/food-recipe.svg",
    // PLACEHOLDER: github, live
  },
  {
    title: "Services Marketplace App",
    stack: ["React Native", "Supabase", "PostgreSQL"],
    description:
      "A platform for posting and discovering freelance services, featuring a client-matching system and real-time built-in messaging.",
    features: [
      "Post and discover freelance services",
      "Client-matching system",
      "Real-time in-app messaging",
    ],
    image: "/projects/marketplace.svg",
    // PLACEHOLDER: github, live
  },
  {
    title: "RAG Pipeline Development",
    stack: ["LangChain", "LlamaIndex", "Streamlit"],
    description:
      "Retrieval-augmented generation systems with interactive Streamlit interfaces for document Q&A and intelligent data retrieval.",
    features: [
      "Document Q&A over custom knowledge bases",
      "Interactive Streamlit interfaces",
      "Built with LangChain and LlamaIndex",
    ],
    image: "/projects/rag-pipeline.svg",
    // PLACEHOLDER: github, live
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Notre Dame University (NDU)",
    period: "2021 – 2025",
  },
  {
    degree: "BAC II, General Sciences",
    school: "Val Pere Jacques",
    period: "2006 – 2021",
  },
];

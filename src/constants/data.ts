// ============================================================
// Portfolio Data Constants
// All content in one structured file for easy editing
// ============================================================

import type {
  NavItem,
  SocialLink,
  Stat,
  SkillCategory,
  Experience,
  Project,
  Service,
  Testimonial,
  Certification,
  ContactInfo,
  PersonalInfo,
} from "@/types";

// ─── Personal Information ────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Tanushree Kumawat",
  firstName: "Tanushree",
  lastName: "Kumawat",
  title: "MERN Stack Developer",
  titles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "AI-Assisted Developer",
    "Cloud & DevOps Enthusiast",
  ],
  summary:
    "Full Stack MERN Developer with 3+ years of experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, MySQL, and TypeScript. Experienced in developing microservices, REST APIs, and cloud deployments on AWS.",
  about:
    "I'm a passionate MERN Stack Developer with 3+ years of experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, MySQL, and TypeScript. I am experienced in developing microservices, REST APIs, cloud deployments on AWS, and integrating AI-powered solutions using OpenAI APIs. I am proficient with AI-assisted development tools including Cursor, Claude, and Antigravity to accelerate software delivery, automate workflows, and improve code quality. I have strong expertise in system design, third-party integrations, and performance optimization.",
  image: "/profile.jpg", // Placeholder until user uploads
  resume: "/resume.pdf",
  location: "Indore, M.P., India",
  education: "Bachelor of Computer Applications",
  university: "Prestige Institute Of Management",
  degree: "BCA",
  currentCompany: "Mindcrew Technologies",
  yearsOfExperience: "3+",
};

// ─── Navigation ──────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tanushree-kumawat-4a5174228", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Tanushreekumawat", icon: "github" },
  { name: "Email", url: "mailto:shreekumawat888@gmail.com", icon: "mail" },
];

// ─── Statistics ──────────────────────────────────────────────
export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years Experience", icon: "calendar" },
  { value: 7, suffix: "+", label: "Projects Delivered", icon: "folder" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "activity" },
];

// ─── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "Redux", icon: "SiRedux", color: "#764ABC" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "HTML5/CSS3", icon: "SiHtml5", color: "#E34F26" },
      { name: "Webpack", icon: "SiWebpack", color: "#8DD6F9" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
      { name: "Nest.js", icon: "SiNestjs", color: "#E0234E" },
      { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
      { name: "REST APIs", icon: "SiOpenapiinitiative", color: "#6BA539" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" },
      { name: "Docker", icon: "SiDocker", color: "#2496ED" },
      { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" },
      { name: "Microsoft Azure", icon: "SiMicrosoftazure", color: "#0089D6" },
    ],
  },
  {
    title: "AI & Tools",
    icon: "brain",
    skills: [
      { name: "OpenAI API", icon: "SiOpenai", color: "#ffffff" },
      { name: "Claude AI", icon: "SiAnthropic", color: "#D4A574" },
      { name: "Cursor", icon: "SiCursor", color: "#ffffff" },
      { name: "Antigravity", icon: "SiGoogle", color: "#FF9900" },
      { name: "Amazon Q", icon: "SiAmazonwebservices", color: "#FF9900" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "Stripe", icon: "SiStripe", color: "#008CDD" },
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    company: "Mindcrew Technologies",
    role: "MERN Stack Developer",
    duration: "Apr 2023 – Present",
    startDate: "2023-04",
    endDate: "Present",
    location: "Indore, India",
    type: "full-time",
    description: "Developing robust full-stack applications and integrating third-party APIs.",
    responsibilities: [
      "Developed full-stack web applications using React.js, Node.js, TypeScript, MongoDB, and MySQL.",
      "Built microservices, REST APIs, and integrated third-party services such as Stripe, OpenAI, Twilio, and Mailgun.",
      "Managed cloud deployments on AWS and implemented CI/CD pipelines for automated releases.",
      "Collaborated with cross-functional teams to deliver scalable and high quality software solutions.",
    ],
    achievements: [],
    technologies: [
      "React.js", "Node.js", "TypeScript", "MongoDB", "MySQL", "AWS", "Stripe", "OpenAI"
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "big-fish-dart",
    title: "Big Fish Dart",
    subtitle: "Backend & Admin Panel Architecture",
    description:
      "A role-based dart gaming platform where I developed the complete Backend and Admin Panel. It features real-time score tracking, automated game result calculations, and Stripe IAP subscription integration for player access management.",
    image: "/projects/dart.jpg", // Placeholder
    techStack: ["Node.js", "Express.js", "MongoDB", "Stripe", "Socket.IO", "React"],
    features: [
      "Backend API Architecture",
      "Admin Panel Development",
      "Real-time score tracking",
      "Stripe IAP subscriptions",
    ],
    category: "backend",
    isFeatured: true,
  },
  {
    id: "lead-management",
    title: "Lead Management System (LMS)",
    subtitle: "Full Stack AI & Third-Party Integration",
    description:
      "Developed as a Full Stack application, this AI-powered lead management platform features lead enrichment, email validation, and automated outreach. Integrated with OpenAI and third-party APIs, and fully deployed on AWS.",
    image: "/projects/lms.jpg", // Placeholder
    techStack: ["React", "Node.js", "Express.js", "OpenAI", "Twilio", "AWS"],
    features: [
      "Full Stack Development",
      "OpenAI Integration",
      "Third-party API integration",
      "AWS Cloud Deployment",
    ],
    category: "fullstack",
    isFeatured: false,
  },
  {
    id: "buying-power-analysis",
    title: "Buying Power Analysis (BPA)",
    subtitle: "Full Stack Fintech Application",
    description:
      "A loan prequalification Full Stack system with automated BPA/DTI calculations. I implemented AI-driven recommendations via OpenAI, third-party credit report integrations, and deployed the entire architecture on AWS.",
    image: "/projects/bpa.jpg", // Placeholder
    techStack: ["React", "Node.js", "TypeScript", "AWS", "MySQL", "OpenAI"],
    features: [
      "Full Stack Implementation",
      "OpenAI & AI Recommendations",
      "Credit API Integrations",
      "AWS Architecture & Deployment",
    ],
    category: "fullstack",
    isFeatured: false,
  },
];

// ─── Services ────────────────────────────────────────────────
export const services: Service[] = [];
export const testimonials: Testimonial[] = [];
export const certifications: Certification[] = [];

// ─── Contact ─────────────────────────────────────────────────
export const contactInfo: ContactInfo = {
  email: "shreekumawat888@gmail.com",
  phone: "+91 9630713643",
  location: "Indore, M.P., India",
  availability: "Available for new opportunities",
  responseTime: "Usually responds within 24 hours",
};

// ─── Coding Stats ────────────────────────────────────────────
export const codingStats = {
  repositories: 20,
  stars: 10,
  commits: 500,
  contributions: 300,
  languages: [
    { name: "TypeScript", percentage: 40, color: "#3178C6" },
    { name: "JavaScript", percentage: 35, color: "#F7DF1E" },
    { name: "HTML/CSS", percentage: 20, color: "#E34F26" },
    { name: "Other", percentage: 5, color: "#8b5cf6" },
  ],
};

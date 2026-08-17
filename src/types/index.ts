// ============================================================
// Portfolio Type Definitions
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  companyUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  features: string[];
  category: "frontend" | "backend" | "fullstack" | "ai" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  isFeatured?: boolean;
  architecture?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  credentialUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  responseTime: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  titles: string[];
  summary: string;
  about: string;
  image: string;
  resume: string;
  location: string;
  education: string;
  university: string;
  degree: string;
  currentCompany: string;
  yearsOfExperience: string;
}

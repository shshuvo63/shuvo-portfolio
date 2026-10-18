export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  features: string[];
  repo: string;
  demo: string;
  image: string;
  challenges: string[];
  future: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Entry {
  title: string;
  meta?: string;
  text?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  photo: string;
  available: boolean;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  resume: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  result: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  logoText: string;
  logoBg?: string;
  stack: string[];
  projects: ProjectDetail[];
  summary?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  role?: string;
  highlights?: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'architecture';
  icon: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  status: string;
}

export interface CertificateItem {
  name: string;
  year: string;
  issuer: string;
}

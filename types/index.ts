export interface ProjectDetail {
  title: string;
  titleVi?: string;
  description: string;
  descriptionVi?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  roleVi?: string;
  period: string;
  periodVi?: string;
  location?: string;
  logoText: string;
  logoBg?: string;
  stack: string[];
  projects: ProjectDetail[];
  summary?: string;
  summaryVi?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  titleVi?: string;
  tagline: string;
  taglineVi?: string;
  description: string;
  descriptionVi?: string;
  tags: string[];
  link?: string;
  github?: string;
  role?: string;
  roleVi?: string;
  highlights?: string[];
  highlightsVi?: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'architecture';
  icon: string;
}

export interface EducationItem {
  school: string;
  schoolVi?: string;
  degree: string;
  degreeVi?: string;
  period: string;
  gpa: string;
  status: string;
  statusVi?: string;
}

export interface CertificateItem {
  name: string;
  year: string;
  issuer: string;
}

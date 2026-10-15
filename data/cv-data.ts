import { ExperienceItem, ProjectItem, TechItem, EducationItem, CertificateItem } from '../types';

export const PERSONAL_INFO = {
  name: "Dao Duc Thinh",
  title: "Full-stack Developer",
  experienceYears: "4+",
  location: "Ho Chi Minh City, Vietnam",
  phone: "+84 975 647 951",
  email: "daothinh1105@gmail.com",
  linkedin: "https://linkedin.com/in/thinh-dao-73622317a",
  github: "https://github.com/daothinh1105",
  shortBio: "Most of my work begins with complex architectures and ends with robust, high-performance web and mobile platforms that scale seamlessly. I specialize in .NET 8, React, TypeScript, and cloud containerization on AWS.",
  fullSummary: "Full-stack Developer with over 4 years of experience in architecting and delivering scalable web and mobile applications. Expertise in .NET 8, React, and TypeScript, with a deep understanding of Clean Architecture, SOLID principles, and system design. Proven track record of optimizing performance and deploying robust containerized solutions on AWS.",
  tags: ["4+ Years Exp", "Full-stack Engineer", ".NET 8 & React", "AWS & Docker"],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hongthai",
    company: "HONGTHAI Technical",
    role: "Full-stack Developer",
    period: "Oct 2024 – Present",
    location: "Vietnam",
    logoText: "HT",
    logoBg: "from-blue-600 to-indigo-800",
    stack: ["React", "Ionic", "C# / .NET", "Ruby", "Vue.js", "GraphQL", "Python", "Docker", "AWS"],
    summary: "Architecting high-scale cross-platform web/mobile applications, real-time messaging engines, and automated crawling pipelines.",
    projects: [
      {
        title: "Ratemate",
        description: "Developed hybrid mobile/web applications and admin systems using React, Ionic, and .NET with modular architecture, reusable components, offline support, and JWT/RBAC authentication."
      },
      {
        title: "WayJet",
        description: "Built scalable mobile/web platforms with lazy loading, virtualization, optimized rendering, and performance tuning to improve user experience and application responsiveness."
      },
      {
        title: "WiseChat",
        description: "Implemented real-time chat systems using Ruby, Vue.js, and WebSocket with typing indicators, read receipts, attachments, search, and infinite scrolling."
      },
      {
        title: "Python Content Crawler",
        description: "Created automated scraping pipelines using Scrapy, Requests, and BeautifulSoup with scheduling, de-duplication, proxy rotation, and SEO data exporting workflows."
      },
      {
        title: "WordPress GraphQL Admin",
        description: "Developed React/Vue dashboards integrated with WPGraphQL and optimized API performance through caching, batching, and pagination strategies."
      },
      {
        title: "DevOps & Deployment",
        description: "Managed Docker-based deployment pipelines, Nginx reverse proxy configuration, CI/CD workflows, and AWS EC2 production releases."
      }
    ]
  },
  {
    id: "fpt-software-fs",
    company: "FPT Software",
    role: "Full-stack Developer",
    period: "Oct 2023 – Oct 2024",
    location: "Ho Chi Minh City",
    logoText: "FPT",
    logoBg: "from-orange-500 to-red-600",
    stack: ["React", "Angular", "Node.js", "C# / .NET", "Docker", "AWS"],
    summary: "Engineered airline e-commerce and loyalty modules for international tier-1 aviation carriers (Singapore Airlines & Scoot).",
    projects: [
      {
        title: "OLSP SIA (Singapore Airlines)",
        description: "Developed reusable React components and integrated Node.js APIs for Singapore Airlines' Online Sales Platform while improving UI maintainability, testing quality, and cross-browser consistency."
      },
      {
        title: "KrisFlyer Scoot",
        description: "Built Angular modules integrated with .NET backend services and optimized front-end performance for customer-facing airline loyalty systems."
      },
      {
        title: "Enterprise Delivery",
        description: "Participated in deployment support, bug fixing, performance optimization, and release workflows across enterprise production projects."
      }
    ]
  },
  {
    id: "freelance",
    company: "Part-time Freelance Full-stack Developer",
    role: "Full-stack Consultant",
    period: "May 2024 – May 2025",
    location: "Remote",
    logoText: "FL",
    logoBg: "from-emerald-500 to-teal-700",
    stack: ["Next.js", "NestJS", "React Native", "PostgreSQL", "MongoDB", "WebSocket", "Docker", "CI/CD", "Python"],
    summary: "Delivered production full-stack systems for diverse clients including Thomi, SolMedia, and Green Sky Architecture.",
    projects: [
      {
        title: "Vinfire & Nexa",
        description: "Architected RBAC systems, audit logging, operational dashboards, and secure workflow management solutions for public-sector police departments."
      },
      {
        title: "Logistics & Delivery Platforms",
        description: "Developed cross-platform delivery applications with real-time synchronization, notifications, route tracking, proof-of-delivery, and offline support."
      },
      {
        title: "AIColors",
        description: "Built web/mobile systems for product browsing, dealer management, CMS integration, and color workflow management."
      },
      {
        title: "Architecture & Media Platforms",
        description: "Delivered full-stack features including API development, database modeling, CMS integration, and responsive UI implementation."
      }
    ]
  },
  {
    id: "beanhop",
    company: "BeanHop",
    role: "Front-end Developer",
    period: "May 2023 – Oct 2023",
    location: "Ho Chi Minh City",
    logoText: "BH",
    logoBg: "from-amber-600 to-yellow-700",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    summary: "Created responsive modern trading interfaces for commercial coffee buyers and sellers.",
    projects: [
      {
        title: "Coffee Trading Platform",
        description: "Developed responsive interfaces for a coffee trading platform using React and TypeScript. Improved accessibility, responsive behavior, and cross-browser compatibility across multiple mobile and desktop devices."
      }
    ]
  },
  {
    id: "fpt-it-support",
    company: "FPT Software",
    role: "IT Support / Front-end Transition",
    period: "Sep 2022 – May 2023",
    location: "Ho Chi Minh City",
    logoText: "FPT",
    logoBg: "from-zinc-600 to-stone-800",
    stack: ["ServiceNow ITSM", "ReactJS", "JavaScript"],
    summary: "Managed enterprise IT workflows and created ReactJS internal automation tools.",
    projects: [
      {
        title: "ITSM Systems & Tooling",
        description: "Provided L1/L2 support for ServiceNow ITSM systems including incident handling, issue analysis, and operational support. Configured business rules, client scripts, forms, and validation workflows while developing ReactJS internal mini-features."
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ratemate-wayjet",
    number: "01",
    title: "Ratemate & WayJet Enterprise Platforms",
    tagline: "Scalable hybrid web/mobile applications with virtualized UI and robust RBAC.",
    description: "Multi-platform enterprise systems built for high throughput. Features offline-first synchronizations, JWT and Role-Based Access Control, lazy loading, and list virtualization for lag-free rendering over massive datasets.",
    tags: ["React", "Ionic", ".NET 8", "AWS", "Docker", "JWT / RBAC", "Clean Architecture"],
    role: "Lead Full-stack Developer",
    link: "https://github.com/daothinh1105",
    highlights: [
      "Modular micro-component architecture with reusable UI primitives",
      "Offline cache synchronization and background state restoration",
      "Sub-100ms API response latency on AWS EC2 containerized infrastructure"
    ]
  },
  {
    id: "singapore-airlines",
    number: "02",
    title: "Singapore Airlines (OLSP) & Scoot E-Commerce",
    tagline: "Mission-critical airline booking & loyalty portal components for tier-1 carriers.",
    description: "Enterprise front-end modules serving millions of global travelers. Built modular React booking widgets and integrated Node.js backend microservices, alongside Angular customer-facing loyalty portals for Scoot airline.",
    tags: ["React", "Node.js", "Angular", ".NET Core", "Docker", "AWS"],
    role: "Full-stack Developer @ FPT Software",
    link: "https://www.singaporeair.com",
    highlights: [
      "Rigorous unit testing and UI regression workflows for high-reliability ticketing",
      "Optimized bundle size and code-splitting reducing initial page load by 35%",
      "Seamless integration with international payment gateways and seat selection APIs"
    ]
  },
  {
    id: "wisechat",
    number: "03",
    title: "WiseChat Real-Time Messaging Platform",
    tagline: "Low-latency WebSocket messaging system with infinite feed & multimedia sharing.",
    description: "Collaborative real-time communication platform engineered with Vue.js, Ruby on Rails, and WebSockets. Incorporates live typing indicators, delivery/read receipts, full-text message search, media attachments, and virtualized infinite scrolling.",
    tags: ["Vue.js", "Ruby", "WebSocket", "Redis", "Docker", "Nginx"],
    role: "Full-stack Developer",
    link: "https://github.com/daothinh1105",
    highlights: [
      "Real-time bidirectional message dispatching via Redis Pub/Sub",
      "Optimized infinite scrolling viewport handling 10,000+ cached chat items smoothly",
      "Instant media thumbnail generation and secure presigned upload tokens"
    ]
  },
  {
    id: "vinfire-nexa",
    number: "04",
    title: "Vinfire & Nexa Public-Sector Solutions",
    tagline: "Secure operational dashboards and audit logging for municipal police departments.",
    description: "Specialized administrative software engineered to meet strict government security standards. Features comprehensive audit trail logging, granular role-based permissions, and end-to-end encrypted operational incident management.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RBAC", "Docker", "CI/CD"],
    role: "Full-stack Architect & Lead",
    link: "https://github.com/daothinh1105",
    highlights: [
      "Strict data protection compliance with cryptographically signed audit logs",
      "Dynamic permission matrices with real-time access revocation",
      "High-availability PostgreSQL replication and automated backup pipelines"
    ]
  },
  {
    id: "aicolors-logistics",
    number: "05",
    title: "Logistics Tracking & AIColors Workflow Suite",
    tagline: "Real-time delivery fleet tracking, proof-of-delivery & digital color management.",
    description: "Cross-platform mobile and web fleet suite providing live driver location updates, route optimization, customer notifications, electronic signature proof-of-delivery, and catalog management for industrial color formulations.",
    tags: ["React Native", "Next.js", "MongoDB", "WebSocket", "Python", "Docker"],
    role: "Full-stack Engineer",
    link: "https://github.com/daothinh1105",
    highlights: [
      "Live GPS telematics streaming with background geolocation polling",
      "Offline signature capture with resilient queue-and-retry synchronizer",
      "Rich web analytics dashboard with route replay and ETA predictions"
    ]
  },
  {
    id: "python-crawler",
    number: "06",
    title: "Enterprise Scraping & Data Extraction Engine",
    tagline: "Automated distributed crawler pipelines with proxy rotation and SEO export.",
    description: "Robust data harvesting architecture utilizing Scrapy, Requests, and BeautifulSoup. Engineered with cron-based task scheduling, hash-based record de-duplication, intelligent rotating proxy pool, and structured data transformation into PostgreSQL.",
    tags: ["Python", "Scrapy", "BeautifulSoup", "PostgreSQL", "Redis", "Docker"],
    role: "Backend & Automation Engineer",
    link: "https://github.com/daothinh1105",
    highlights: [
      "Overcoming anti-bot mechanisms using rotating headers and headless browser fallbacks",
      "Ingesting over 500,000+ records daily with automated data normalization",
      "Instant WPGraphQL / REST export feeds for downstream consumption"
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  // Backend & Architecture
  { name: ".NET 8 / Core", category: "backend", icon: "dotnet" },
  { name: "C#", category: "backend", icon: "csharp" },
  { name: "Node.js", category: "backend", icon: "nodedotjs" },
  { name: "NestJS", category: "backend", icon: "nestjs" },
  { name: "RESTful APIs", category: "backend", icon: "api" },
  { name: "GraphQL", category: "backend", icon: "graphql" },
  { name: "SignalR / WebSocket", category: "backend", icon: "websocket" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "Scrapy", category: "backend", icon: "scrapy" },

  // Frontend
  { name: "React", category: "frontend", icon: "react" },
  { name: "Next.js", category: "frontend", icon: "nextdotjs" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
  { name: "Angular", category: "frontend", icon: "angular" },
  { name: "Vue.js", category: "frontend", icon: "vuedotjs" },
  { name: "Ionic", category: "frontend", icon: "ionic" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
  { name: "Redux / Zustand", category: "frontend", icon: "redux" },

  // Databases
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "SQL Server", category: "database", icon: "sqlserver" },
  { name: "MySQL", category: "database", icon: "mysql" },
  { name: "Redis", category: "database", icon: "redis" },
  { name: "MongoDB", category: "database", icon: "mongodb" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", category: "devops", icon: "aws" },
  { name: "Docker", category: "devops", icon: "docker" },
  { name: "Nginx", category: "devops", icon: "nginx" },
  { name: "GitHub Actions", category: "devops", icon: "githubactions" },
  { name: "Linux", category: "devops", icon: "linux" },
  { name: "Git", category: "devops", icon: "git" },

  // Architecture & AI
  { name: "Clean Architecture", category: "architecture", icon: "architecture" },
  { name: "CQRS & DDD", category: "architecture", icon: "cqrs" },
  { name: "SOLID Principles", category: "architecture", icon: "solid" },
  { name: "AI Integration (GPT/Copilot)", category: "architecture", icon: "ai" }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "FPT University HCMC",
    degree: "Bachelor of Software Engineering",
    period: "2019 – 2023",
    gpa: "GPA: 7.2 / 10",
    status: "Graduated"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    name: "Google Project Management",
    year: "2023",
    issuer: "Google"
  },
  {
    name: "IBM Front-End Developer Professional Certificate",
    year: "2023",
    issuer: "IBM"
  },
  {
    name: "User Experience Research and Design",
    year: "2023",
    issuer: "Coursera / HCMC"
  },
  {
    name: "Software Development Lifecycle (SDLC)",
    year: "2022",
    issuer: "Specialization Certificate"
  }
];

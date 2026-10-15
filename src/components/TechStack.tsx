import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  Terminal, 
  Globe, 
  Zap,
  Box
} from 'lucide-react';

interface TechBadge {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const ROW_1: TechBadge[] = [
  { name: ".NET 8 / C#", category: "Backend", icon: <Server className="h-5 w-5 text-indigo-400" /> },
  { name: "React", category: "Frontend", icon: <Code2 className="h-5 w-5 text-cyan-400" /> },
  { name: "TypeScript", category: "Language", icon: <Terminal className="h-5 w-5 text-blue-400" /> },
  { name: "Next.js", category: "Full-stack", icon: <Globe className="h-5 w-5 text-white" /> },
  { name: "Node.js (NestJS)", category: "Backend", icon: <Server className="h-5 w-5 text-emerald-400" /> },
  { name: "PostgreSQL", category: "Database", icon: <Database className="h-5 w-5 text-blue-500" /> },
  { name: "Docker", category: "DevOps", icon: <Box className="h-5 w-5 text-sky-400" /> },
  { name: "AWS (EC2/S3)", category: "Cloud", icon: <Cloud className="h-5 w-5 text-amber-400" /> },
  { name: "GraphQL", category: "API", icon: <Zap className="h-5 w-5 text-pink-400" /> },
  { name: "Redis", category: "Cache", icon: <Database className="h-5 w-5 text-red-400" /> },
];

const ROW_2: TechBadge[] = [
  { name: "Python & Scrapy", category: "Backend / Scraping", icon: <Terminal className="h-5 w-5 text-yellow-400" /> },
  { name: "Vue.js", category: "Frontend", icon: <Code2 className="h-5 w-5 text-emerald-400" /> },
  { name: "Angular", category: "Frontend", icon: <Code2 className="h-5 w-5 text-red-500" /> },
  { name: "Ionic Mobile", category: "Mobile", icon: <Cpu className="h-5 w-5 text-blue-400" /> },
  { name: "Tailwind CSS", category: "Styling", icon: <Layers className="h-5 w-5 text-teal-400" /> },
  { name: "SQL Server", category: "Database", icon: <Database className="h-5 w-5 text-blue-400" /> },
  { name: "SignalR (WebSocket)", category: "Real-time", icon: <Zap className="h-5 w-5 text-purple-400" /> },
  { name: "Clean Architecture", category: "Design", icon: <Layers className="h-5 w-5 text-indigo-300" /> },
  { name: "CQRS & SOLID", category: "Architecture", icon: <Layers className="h-5 w-5 text-emerald-300" /> },
  { name: "GitHub Actions CI/CD", category: "DevOps", icon: <Box className="h-5 w-5 text-neutral-300" /> },
];

export const TechStack: React.FC = () => {
  return (
    <motion.section 
      id="tech"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-6 pb-8 px-4 xs:px-8 border-b border-dashed border-white/10"
    >
      <h2 className="text-2xl xs:text-3xl text-neutral-100 italic font-instrument font-normal">
        Tech Stack
      </h2>
      <p className="mt-1 mb-6 max-w-2xl text-sm leading-6 text-neutral-400">
        Primary technologies I rely on for architecting resilient backend services, responsive interfaces, and automated cloud workflows.
      </p>

      {/* Marquee Container with Gradient Edge Fades */}
      <div className="relative overflow-hidden py-2 space-y-4">
        {/* Left and Right Gradient Fades */}
        <div className="from-[#1b1b1b] pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r to-transparent z-10" />
        <div className="from-[#1b1b1b] pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l to-transparent z-10" />

        {/* Row 1: Leftward scroll */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex shrink-0 items-center gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...ROW_1, ...ROW_1].map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-800/80 cursor-default select-none shrink-0"
              >
                <div className="p-1 rounded-lg bg-black/40">
                  {tech.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-neutral-200 whitespace-nowrap">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-mono">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward scroll */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex shrink-0 items-center gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...ROW_2, ...ROW_2].map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-800/80 cursor-default select-none shrink-0"
              >
                <div className="p-1 rounded-lg bg-black/40">
                  {tech.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-neutral-200 whitespace-nowrap">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-mono">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

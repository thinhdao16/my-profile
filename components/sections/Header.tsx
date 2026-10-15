'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileText, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/cv-data';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.3 },
      colors: ['#ffffff', '#10b981', '#60a5fa', '#f59e0b'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full">
      {/* Cover Banner */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient Dark Wallpaper */}
          <div 
            className="h-36 sm:h-48 md:h-52 w-full object-cover object-center brightness-75 contrast-110 relative bg-neutral-900"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-90" />
          </div>
        </motion.div>

        {/* Profile Avatar Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-10 left-6 xs:left-8"
        >
          <div className="relative group">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-4 ring-neutral-700/60 ring-offset-2 ring-offset-[#1b1b1b] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center shadow-xl">
              <span className="font-instrument italic text-3xl sm:text-4xl text-neutral-200 select-none font-medium">
                DT
              </span>
            </div>
            {/* Live Status Indicator */}
            <span 
              className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-[#1b1b1b]" 
              title="Open to Work & Collaborations"
            />
          </div>
        </motion.div>
      </div>

      {/* Profile Info Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-14 px-4 xs:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-dashed border-white/10 pb-8"
      >
        <div>
          <h1 className="text-3xl xs:text-4xl text-neutral-100 italic font-instrument font-normal tracking-wide">
            {PERSONAL_INFO.name}
          </h1>

          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-400 font-medium">Full-stack Developer</span>
            <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
            <span className="text-xs text-neutral-400">4+ Years Exp</span>
            <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
            <span className="text-xs text-neutral-400">.NET 8 & React</span>
            <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
            <span className="text-xs text-neutral-400">{PERSONAL_INFO.location}</span>
          </div>

          <button 
            type="button" 
            onClick={scrollToProjects}
            className="group cursor-pointer mt-3.5 inline-flex items-center text-xs text-neutral-300 transition-colors hover:text-white focus:outline-none"
          >
            See projects 
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Social Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* GitHub */}
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            title="GitHub Profile"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* LinkedIn */}
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            title="LinkedIn Profile"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* Email / Copy with Confetti */}
          <button 
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy Email" 
            title={copied ? "Email copied!" : "Copy: " + PERSONAL_INFO.email}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white focus:outline-none relative"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Mail className="h-4 w-4" />}
          </button>

          {/* Phone */}
          <a 
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
            aria-label="Call Phone" 
            title={PERSONAL_INFO.phone}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
          >
            <Phone className="h-4 w-4" />
          </a>

          {/* Resume PDF Download */}
          <a 
            href="/Dao_Duc_Thinh_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume / CV" 
            title="Download / View Dao Duc Thinh CV (PDF)"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
          >
            <FileText className="h-4 w-4" />
          </a>
        </div>
      </motion.section>
    </header>
  );
};

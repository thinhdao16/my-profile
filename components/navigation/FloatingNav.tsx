'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  Layers,
  Cpu,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/cv-data';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'tech', label: 'Tech Stack', icon: Cpu, href: '#tech' },
  { id: 'projects', label: 'Projects', icon: Layers, href: '#projects' },
  { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
];

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#ffffff', '#10b981', '#60a5fa'],
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-full px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#181818]/90 backdrop-blur-xl border border-[#333333] shadow-2xl shadow-black/80"
      >
        {/* Nav Links */}
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative p-2 sm:px-3 sm:py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'text-white bg-[#2c2c2c]'
                  : 'text-[#888888] hover:text-[#eeeeee] hover:bg-[#252525]'
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">{item.label}</span>
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-[1px] h-4 bg-[#333333] mx-1" />

        {/* External Socials */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-[#888888] hover:text-white hover:bg-[#252525] transition-colors"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-[#888888] hover:text-white hover:bg-[#252525] transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* Copy Email Confetti */}
        <button
          onClick={handleCopyEmail}
          className="p-2 rounded-full text-[#888888] hover:text-emerald-400 hover:bg-[#252525] transition-colors relative cursor-pointer"
          title="Copy Email"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Mail className="w-4 h-4" />
          )}
        </button>
      </motion.div>
    </div>
  );
};

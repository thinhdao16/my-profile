'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/cv-data';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, ShieldCheck, Zap, Cloud } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-6 pb-8 px-4 xs:px-8 border-b border-dashed border-white/10"
    >
      <p className="max-w-3xl text-[15px] leading-relaxed text-neutral-300">
        {language === 'vi' ? PERSONAL_INFO.fullSummary : PERSONAL_INFO.fullSummaryEn}
      </p>

      {/* Highlights Bar */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-white/5">
          <Layers className="h-4 w-4 text-neutral-400 shrink-0" />
          <span className="text-xs text-neutral-300 truncate">Clean Architecture & CQRS</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-white/5">
          <ShieldCheck className="h-4 w-4 text-neutral-400 shrink-0" />
          <span className="text-xs text-neutral-300 truncate">SOLID & DDD Principles</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-white/5">
          <Zap className="h-4 w-4 text-neutral-400 shrink-0" />
          <span className="text-xs text-neutral-300 truncate">Real-time WebSockets</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-white/5">
          <Cloud className="h-4 w-4 text-neutral-400 shrink-0" />
          <span className="text-xs text-neutral-300 truncate">AWS & Docker CI/CD</span>
        </div>
      </div>
    </motion.section>
  );
};

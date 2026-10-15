'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/cv-data';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 text-xs text-[#666666] font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Identity & Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-[#888888]" suppressHydrationWarning>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t.footerRights}
          </p>
          <p className="text-[#555555]">
            {t.footerBuiltWith}
          </p>
        </div>

        {/* Right: Location & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#777777]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === 'vi' ? PERSONAL_INFO.location : PERSONAL_INFO.locationEn} (UTC+7)
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-[#888888] hover:text-[#dddddd] border border-[#2e2e2e] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>{t.top}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

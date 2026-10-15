'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATES } from '@/data/cv-data';

export const EducationCertificates: React.FC = () => {
  return (
    <section id="education" className="py-12 border-b border-[#2a2a2a]">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="text-xs uppercase tracking-widest text-[#888888] font-mono">
            Credentials
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-instrument italic text-[#eeeeee]">
          Education & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[#aaaaaa] uppercase tracking-wider mb-2 font-mono">
            <GraduationCap className="w-4 h-4 text-[#10b981]" />
            Academic Background
          </div>

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-2xl bg-[#222222]/60 border border-[#2e2e2e] hover:border-[#444444] transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-[#f0f0f0] group-hover:text-emerald-400 transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-[#aaaaaa] mt-0.5">
                    {edu.degree}
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#10b981]/10 text-emerald-400 border border-[#10b981]/20 shrink-0">
                  {edu.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#777777] font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[#aaaaaa] uppercase tracking-wider mb-2 font-mono">
            <Award className="w-4 h-4 text-amber-400" />
            Professional Credentials
          </div>

          <div className="grid grid-cols-1 gap-3">
            {CERTIFICATES.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-4 rounded-xl bg-[#222222]/40 border border-[#2a2a2a] hover:border-[#3d3d3d] hover:bg-[#252525] transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#2b2b2b] flex items-center justify-center shrink-0 border border-[#383838] group-hover:border-amber-400/40 transition-colors">
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-[#e0e0e0] truncate group-hover:text-amber-200 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] text-[#777777]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#888888] bg-[#1d1d1d] px-2.5 py-1 rounded-md border border-[#2a2a2a] shrink-0">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

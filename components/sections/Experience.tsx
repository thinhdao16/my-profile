'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';
import { EXPERIENCES } from '@/data/cv-data';

export const Experience: React.FC = () => {
  // Default open the first and second experience
  const [openIds, setOpenIds] = useState<string[]>(['hongthai', 'fpt-software-fs']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-6 pb-8 px-4 xs:px-8 border-b border-dashed border-white/10"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl xs:text-3xl text-neutral-100 italic font-instrument font-normal">
          Professional Experience
        </h2>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
          4+ Years In Tech
        </span>
      </div>

      <div className="divide-y divide-white/10">
        {EXPERIENCES.map((exp) => {
          const isOpen = openIds.includes(exp.id);

          return (
            <div key={exp.id} className="py-2.5">
              <button
                type="button"
                onClick={() => toggleAccordion(exp.id)}
                className="w-full flex items-center justify-between py-3 px-2 rounded-lg transition-colors hover:bg-neutral-800/40 text-left group focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex w-full min-w-0 items-center gap-3.5 pr-3">
                  {/* Company Monogram Badge */}
                  <div
                    className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${
                      exp.logoBg || 'from-neutral-700 to-neutral-900'
                    } flex items-center justify-center font-bold text-xs text-white shadow-md select-none`}
                  >
                    {exp.logoText}
                  </div>

                  {/* Company + Role */}
                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex flex-col transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <p className="truncate text-[15px] font-medium text-neutral-100">
                        {exp.company}
                      </p>
                      <p className="text-[13px] text-neutral-400">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto sm:ml-auto">
                      <span className="text-[12px] text-neutral-400 font-mono flex items-center gap-1">
                        <Calendar className="h-3 w-3 opacity-60" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown 
                  className={`h-4 w-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`} 
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4 pl-3 sm:pl-14 pr-2 space-y-3.5 text-sm">
                      {/* Short summary */}
                      {exp.summary && (
                        <p className="text-xs text-neutral-400 italic">
                          {exp.summary}
                        </p>
                      )}

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] font-medium text-neutral-400 mr-1">Stack:</span>
                        {exp.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-neutral-900/80 px-2.5 py-0.5 text-[11px] text-neutral-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Projects / Responsibilities */}
                      <ul className="space-y-2 pt-1.5 text-neutral-300 text-[13px] leading-relaxed">
                        {exp.projects.map((proj, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-neutral-500 select-none mt-1">•</span>
                            <div>
                              <strong className="text-neutral-100 font-medium">
                                {proj.title}:
                              </strong>{' '}
                              <span className="text-neutral-300">
                                {proj.description}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

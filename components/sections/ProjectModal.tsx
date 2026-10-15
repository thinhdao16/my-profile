'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  if (!project) return null;

  const titleDisplay = language === 'vi' ? project.titleVi || project.title : project.title;
  const descriptionDisplay = language === 'vi' ? project.descriptionVi || project.description : project.description;
  const roleDisplay = language === 'vi' ? project.roleVi || project.role : project.role;
  const highlightsDisplay = language === 'vi' ? project.highlightsVi || project.highlights : project.highlights;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#1e1e1e] border border-[#333333] shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-[#2d2d2d] bg-[#222222]/50">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                {language === 'vi' ? 'Dự án' : 'Project'} {project.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-instrument italic text-[#f0f0f0] mt-1">
                {titleDisplay}
              </h3>
              {roleDisplay && (
                <p className="text-xs text-[#888888] font-mono mt-0.5">
                  {language === 'vi' ? 'Vai trò' : 'Role'}: {roleDisplay}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-[#2e2e2e] transition-colors cursor-pointer"
              aria-label={t.modalClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#cccccc] leading-relaxed invisible-scrollbar">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
                {t.modalOverview}
              </h4>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#dddddd]">
                {descriptionDisplay}
              </p>
            </div>

            {/* Highlights */}
            {highlightsDisplay && highlightsDisplay.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2.5">
                  {t.modalDeliverables}
                </h4>
                <ul className="space-y-2">
                  {highlightsDisplay.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bbbbbb]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2.5">
                {t.modalTechUsed}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#282828] text-neutral-300 border border-[#353535]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-[#2d2d2d] bg-[#1a1a1a] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#282828] text-neutral-300 hover:text-white hover:bg-[#333333] border border-[#383838] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {t.modalSourceCode}
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.modalLivePreview}
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-mono bg-[#2a2a2a] text-[#aaaaaa] hover:text-white hover:bg-[#333333] transition-colors cursor-pointer"
            >
              {t.modalClose}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

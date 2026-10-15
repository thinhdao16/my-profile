import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#222222] border border-white/15 p-6 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-neutral-400 hover:text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
            <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 font-semibold">
              Project {project.number}
            </span>
            {project.role && <span>• {project.role}</span>}
          </div>

          <h3 className="text-xl sm:text-2xl font-medium text-white mt-2">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 my-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="border-white/10 my-4" />

          {/* Deep dive info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" /> Architecture & Implementation
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Key Technical Achievements
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 shrink-0 select-none">✔</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              Close
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-white text-black hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                View Live Demo <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/cv-data';
import { ProjectItem } from '@/types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <motion.section 
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-6 pb-8 px-4 xs:px-8 border-b border-dashed border-white/10"
      >
        <h2 className="text-2xl xs:text-3xl text-neutral-100 italic font-instrument font-normal">
          Selected work
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-6 text-neutral-400">
          A few high-scale platforms and systems I have architected and built recently.
        </p>

        <div className="w-full divide-y divide-white/10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="relative">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative block w-full text-left overflow-hidden py-5 focus:outline-none cursor-pointer"
              >
                <div className="flex xs:items-center justify-between gap-6 sm:gap-8">
                  <div className="flex xs:items-center gap-4 sm:gap-6">
                    {/* Index Number */}
                    <span className="mt-1 w-5 text-xs font-mono tracking-tighter text-neutral-500 tabular-nums transition-all duration-300 group-hover:text-neutral-200 group-hover:translate-x-1 xs:mt-0 select-none">
                      {project.number}
                    </span>

                    {/* Project Title & Summary */}
                    <div className="space-y-1.5 max-w-2xl">
                      <h3 className="font-medium text-[15px] text-neutral-200 transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 transition-all duration-300 group-hover:text-neutral-300 group-hover:translate-x-2 delay-75">
                        {project.tagline}
                      </p>

                      {/* Tech Tags */}
                      <ul className="flex flex-wrap gap-1.5 pt-1.5">
                        {project.tags.map((tag, idx) => (
                          <li
                            key={idx}
                            className="rounded-full border border-white/10 bg-neutral-900/60 px-2 py-0.5 text-[11px] text-neutral-400 font-mono transition-colors group-hover:border-white/20"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex mt-1 xs:mt-0 xs:items-center shrink-0">
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:text-white group-hover:rotate-45 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

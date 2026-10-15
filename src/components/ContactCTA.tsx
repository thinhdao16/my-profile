import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/cv-data';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#ffffff', '#10b981', '#60a5fa', '#f59e0b']
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 border-b border-[#2a2a2a] relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252525] border border-[#333333] text-xs font-mono text-emerald-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Currently Open to Work & Senior Roles
        </div>

        <h2 className="text-4xl sm:text-5xl font-instrument italic text-[#f5f5f5] mb-4">
          Let’s build something remarkable.
        </h2>

        <p className="text-sm sm:text-base text-[#999999] leading-relaxed mb-8">
          Whether you need high-throughput .NET backend microservices, intuitive modern React/TypeScript frontends, or full-stack architectural leadership, feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Main Mailto Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#f0f0f0] text-[#111111] font-medium text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/5"
          >
            <Send className="w-4 h-4" />
            Send an Email
          </a>

          {/* Copy Email Button with confetti */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#242424] text-[#cccccc] hover:text-white border border-[#383838] hover:border-[#555555] hover:bg-[#2c2c2c] transition-all text-sm font-mono"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Social links */}
        <div className="flex items-center justify-center gap-6 mt-8 text-xs text-[#777777] font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffffff] transition-colors flex items-center gap-1"
          >
            GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffffff] transition-colors flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <span className="text-[#555555]">
            {PERSONAL_INFO.phone}
          </span>
        </div>
      </div>
    </section>
  );
};

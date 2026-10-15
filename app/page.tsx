'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { SideHatchBands } from '@/components/layout/SideHatchBands';
import { Header } from '@/components/sections/Header';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { ActivityCalendar } from '@/components/sections/ActivityCalendar';
import { EducationCertificates } from '@/components/sections/EducationCertificates';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/navigation/FloatingNav';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-[#1b1b1b] text-[#eaeaea] selection:bg-emerald-500/25 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
        {/* Side Decorative Hatched Stripes */}
        <SideHatchBands />

        {/* Main Centered Container (Max-w-215 / 860px) */}
        <div className="relative z-10 max-w-215 mx-auto bg-[#1c1c1c] border-x border-[#2a2a2a] min-h-screen shadow-2xl">
          {/* Hero & Profile Header */}
          <Header />

          {/* About & Core Architecture Philosophy */}
          <About />

          {/* Work Experience Accordion */}
          <Experience />

          {/* Tech Stack Marquee Ticker */}
          <TechStack />

          {/* Selected Projects Showcase with Detail Modal */}
          <Projects />

          {/* GitHub Engineering Activity Heatmap */}
          <ActivityCalendar />

          {/* Education & Certifications */}
          <div className="px-4 xs:px-8">
            <EducationCertificates />
          </div>

          {/* Call To Action / Contact */}
          <div className="px-4 xs:px-8">
            <ContactCTA />
          </div>

          {/* Footer */}
          <div className="px-4 xs:px-8">
            <Footer />
          </div>
        </div>

        {/* Floating Bottom Quick Dock */}
        <FloatingNav />
      </main>
    </LanguageProvider>
  );
}

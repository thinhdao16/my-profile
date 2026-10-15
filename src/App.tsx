import React from 'react';
import { SideHatchBands } from './components/SideHatchBands';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ActivityCalendar } from './components/ActivityCalendar';
import { EducationCertificates } from './components/EducationCertificates';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#1b1b1b] text-[#eaeaea] selection:bg-emerald-500/25 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
      {/* Side Decorative Hatched Stripes (like krisht0) */}
      <SideHatchBands />

      {/* Main Centered Container */}
      <div className="relative z-10 max-w-215 mx-auto bg-[#1c1c1c] border-x border-[#2a2a2a] min-h-screen shadow-2xl">
        {/* Hero & Profile Header */}
        <Header />

        {/* About & Core Architecture Philosophy */}
        <About />

        {/* Work Experience Accordion */}
        <Experience />

        {/* Tech Stack Marquee */}
        <TechStack />

        {/* Selected Projects List with Modal Deep-dive */}
        <Projects />

        {/* GitHub / Engineering Activity Heatmap */}
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
    </div>
  );
};

export default App;

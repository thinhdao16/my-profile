import React from 'react';

export const SideHatchBands: React.FC = () => {
  return (
    <>
      {/* Left Hatch Band */}
      <div 
        className="absolute left-0 w-12 h-full overflow-hidden md:block hidden pointer-events-none select-none z-10" 
        style={{ top: 0 }}
      >
        <div 
          className="absolute inset-0 w-12 h-full border-r border-white/10 opacity-[0.06] diagonal-stripes"
        />
      </div>

      {/* Right Hatch Band */}
      <div 
        className="absolute right-0 w-12 h-full overflow-hidden md:block hidden pointer-events-none select-none z-10" 
        style={{ top: 0 }}
      >
        <div 
          className="absolute inset-0 w-12 h-full border-l border-white/10 opacity-[0.06] diagonal-stripes"
        />
      </div>
    </>
  );
};

import React from 'react';

export const SideHatchBands: React.FC = () => {
  return (
    <>
      {/* Left Hatched Stripe Band */}
      <div 
        className="pointer-events-none fixed inset-y-0 left-0 hidden w-12 md:block z-0 text-white/[0.04] diagonal-stripes border-r border-[#2a2a2a]/40" 
        aria-hidden="true" 
      />

      {/* Right Hatched Stripe Band */}
      <div 
        className="pointer-events-none fixed inset-y-0 right-0 hidden w-12 md:block z-0 text-white/[0.04] diagonal-stripes border-l border-[#2a2a2a]/40" 
        aria-hidden="true" 
      />
    </>
  );
};

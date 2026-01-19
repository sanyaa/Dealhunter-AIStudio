import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Dark Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-bg-tertiary via-bg-primary to-bg-primary -z-20" />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Floating Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-purple/20 blur-[100px] animate-pulse-slow -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-neon-cyan/10 blur-[120px] animate-float -z-10" />
    </>
  );
};

export default BackgroundEffects;
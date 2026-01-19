import React from 'react';

const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative px-6 py-20 md:py-32 text-center overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-cyan/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono text-xs uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          System Architecture
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          The <span className="text-neon-cyan">Neural</span> Engine
        </h1>
        
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          DealHunter AI isn't just a scraper. It's a distributed intelligence network that perceives, analyzes, and predicts market movements in milliseconds.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksHero;
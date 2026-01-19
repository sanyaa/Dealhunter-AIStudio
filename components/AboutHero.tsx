import React from 'react';
import { Network, Cpu, Globe2 } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative px-6 py-16 md:py-24 lg:py-32 text-center overflow-visible">
      
      {/* Background Decorative Elements for Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-mono text-xs uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          Established 2023
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Decoding The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-cyan drop-shadow-[0_0_20px_rgba(180,0,255,0.4)]">
            Commerce Matrix
          </span>
        </h1>
        
        <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We are not just another price comparison tool. We are the <span className="text-neon-cyan font-semibold">neural layer</span> of the shopping internet, dissecting billions of data points to find value where others see noise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          
          <div className="p-6 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm hover:border-neon-cyan/30 transition-all group">
            <Network className="w-8 h-8 text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl font-bold text-white mb-2">Neural Discovery</h3>
            <p className="text-text-tertiary text-sm">Autonomous agents that map product relationships across the entire web.</p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm hover:border-neon-magenta/30 transition-all group">
            <Cpu className="w-8 h-8 text-neon-magenta mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl font-bold text-white mb-2">Real-time Inference</h3>
            <p className="text-text-tertiary text-sm">Price prediction models running at the edge with &lt;50ms latency.</p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm hover:border-neon-purple/30 transition-all group">
            <Globe2 className="w-8 h-8 text-neon-purple mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl font-bold text-white mb-2">Global Index</h3>
            <p className="text-text-tertiary text-sm">Indexing 150+ countries and 40+ currencies simultaneously.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
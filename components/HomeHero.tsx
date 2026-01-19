import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const HomeHero: React.FC = () => {
  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neon-purple/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-neon-cyan/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4 -z-10" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">System Operational • v2.4.0</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Algorithmic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-neon-blue">
              Dominance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Stop searching. Start acquiring. Our autonomous agents scan 50,000+ global retailers in real-time to secure the absolute floor price on premium assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <button className="group relative px-8 py-4 bg-white text-bg-primary font-bold font-mono uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              <div className="absolute inset-0 bg-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Start Free Trial <ArrowRight size={18} />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-wider rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
              <Play size={18} className="fill-current" /> Watch Demo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-text-tertiary animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-neon-cyan" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-neon-cyan" />
              <span>14-Day Enterprise Access</span>
            </div>
          </div>
        </div>

        {/* Right Graphic - Abstract Interface */}
        <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative w-full aspect-square max-w-[600px]">
            {/* Main Circle Ring */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow [animation-duration:30s]" />
            <div className="absolute inset-12 border border-neon-cyan/20 rounded-full animate-spin-slow [animation-duration:20s] border-dashed" />
            <div className="absolute inset-24 border border-neon-purple/20 rounded-full animate-spin-slow [animation-duration:15s] direction-reverse" />
            
            {/* Floating Cards Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-bg-secondary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
               <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-status-error" />
                   <div className="w-3 h-3 rounded-full bg-status-warning" />
                   <div className="w-3 h-3 rounded-full bg-status-success" />
                 </div>
                 <div className="font-mono text-xs text-neon-cyan">LIVE_FEED_V2</div>
               </div>
               <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-bg-primary/50 border border-white/5">
                     <div className="w-10 h-10 rounded bg-white/5 animate-pulse" />
                     <div className="flex-1 space-y-2">
                       <div className="h-2 w-2/3 bg-white/10 rounded" />
                       <div className="h-2 w-1/3 bg-white/10 rounded" />
                     </div>
                     <div className="text-right">
                       <div className="text-neon-cyan font-mono text-sm">-{(45 - i * 5)}%</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-cyan/20 blur-xl rounded-full animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
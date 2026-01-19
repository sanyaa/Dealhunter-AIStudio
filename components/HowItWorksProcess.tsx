import React from 'react';
import { Globe, ScanLine, TrendingDown, BellRing } from 'lucide-react';

const STEPS = [
  {
    icon: Globe,
    title: "Planetary Ingestion",
    desc: "Our distributed crawlers scan over 50,000 retailers every 60 seconds, ingesting raw HTML, JSON, and API responses.",
    color: "text-neon-cyan",
    border: "border-neon-cyan",
    bg: "bg-neon-cyan/10"
  },
  {
    icon: ScanLine,
    title: "Visual & Semantic Analysis",
    desc: "Computer vision models match product images across sites, while NLP standardizes disparate descriptions into a single entity.",
    color: "text-neon-purple",
    border: "border-neon-purple",
    bg: "bg-neon-purple/10"
  },
  {
    icon: TrendingDown,
    title: "Predictive Modeling",
    desc: "Historical data is fed into LSTM networks to forecast price trajectories. We don't just show current prices; we predict future drops.",
    color: "text-neon-magenta",
    border: "border-neon-magenta",
    bg: "bg-neon-magenta/10"
  },
  {
    icon: BellRing,
    title: "Instant Dissemination",
    desc: "When a target price is hit, the signal is pushed to edge nodes and delivered to user devices with sub-second latency.",
    color: "text-status-success",
    border: "border-status-success",
    bg: "bg-status-success/10"
  }
];

const HowItWorksProcess: React.FC = () => {
  return (
    <section className="px-6 py-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent -translate-x-1/2 md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-primary border-2 border-neon-cyan rounded-full z-10 shadow-[0_0_10px_#00F0FF]">
                     <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`inline-flex p-3 rounded-xl mb-4 border border-white/10 bg-bg-secondary/50 backdrop-blur-sm group hover:border-white/30 transition-colors ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Empty side for layout balance */}
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksProcess;
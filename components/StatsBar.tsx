import React from 'react';
import { StatItem } from '../types';

const STATS: StatItem[] = [
  { label: 'Deals Analyzed Daily', value: '1.2', suffix: 'B+' },
  { label: 'Retailers Indexed', value: '45', suffix: 'k+' },
  { label: 'User Savings', value: '142', suffix: 'M$' },
  { label: 'AI Accuracy', value: '99.8', suffix: '%' },
];

const StatsBar: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-bg-secondary/20 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="flex items-center justify-center gap-1 font-display font-bold text-4xl md:text-5xl text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                <span>{stat.value}</span>
                <span className="text-neon-cyan">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs md:text-sm text-text-tertiary uppercase tracking-widest group-hover:text-text-secondary transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
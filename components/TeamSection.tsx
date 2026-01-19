import React from 'react';
import { TeamMember } from '../types';
import { Linkedin, Twitter, Github } from 'lucide-react';

const TEAM: TeamMember[] = [
  { name: 'Dr. Sarah Chen', role: 'Founder & CEO', bio: 'Ex-DeepMind researcher. Ph.D. in Computer Vision from Stanford. Obsessed with optimization.', initials: 'SC' },
  { name: 'Marcus Thorne', role: 'CTO', bio: 'Built high-frequency trading systems for Wall Street. Now optimizing for user savings instead of profit.', initials: 'MT' },
  { name: 'Elena Rodriguez', role: 'Head of Product', bio: '15 years in e-commerce UX. Believes the best interface is no interface at all.', initials: 'ER' },
  { name: 'David Kim', role: 'Lead AI Engineer', bio: 'Creator of the open-source "PriceNet" library. Contributor to major LLM projects.', initials: 'DK' },
];

const TeamSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-bg-secondary/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">The Architects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A diverse team of researchers, engineers, and designers united by a single purpose: to solve the commerce equation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl" />
              
              <div className="h-full bg-bg-primary border border-white/10 rounded-2xl p-6 hover:border-neon-cyan/40 transition-all duration-300 flex flex-col items-center text-center">
                
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-tertiary mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                  <span className="font-display font-bold text-2xl text-neon-cyan">{member.initials}</span>
                  <div className="absolute inset-0 border border-white/5 rounded-2xl" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">{member.name}</h3>
                <div className="font-mono text-xs text-neon-cyan uppercase tracking-wider mb-4">{member.role}</div>
                <p className="text-text-tertiary text-sm mb-6 leading-relaxed flex-grow">{member.bio}</p>

                {/* Socials */}
                <div className="flex gap-4 pt-6 border-t border-white/5 w-full justify-center">
                  <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
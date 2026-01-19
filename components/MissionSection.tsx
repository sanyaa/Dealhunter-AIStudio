import React from 'react';
import { BrainCircuit, Target, Lightbulb } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section className="px-6 py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
              Democratizing Market <br />
              <span className="text-neon-magenta">Transparency</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-text-secondary text-lg leading-relaxed">
                The modern e-commerce landscape is a black box. Dynamic pricing algorithms, hidden fees, and regional restrictions make it impossible for humans to know the true market value of a product.
              </p>
              
              <p className="text-text-secondary text-lg leading-relaxed">
                DealHunter AI builds the counter-intelligence. Our mission is to level the playing field by arming consumers with an AI that is faster, smarter, and more persistent than any retailer's pricing algorithm.
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">Precision Targeting</h4>
                    <p className="text-text-tertiary text-sm leading-relaxed mt-1">We don't just find low prices; we find the <i>right</i> price based on history and trajectory.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-neon-magenta/10 flex items-center justify-center shrink-0 mt-1">
                    <BrainCircuit className="w-5 h-5 text-neon-magenta" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">Adaptive Learning</h4>
                    <p className="text-text-tertiary text-sm leading-relaxed mt-1">Our models retrain every 6 hours, adapting to new retail strategies instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Abstract Art */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full bg-bg-secondary/30 rounded-3xl border border-white/10 overflow-hidden group">
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            
            {/* Center Glowing Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="w-32 h-32 bg-neon-cyan/20 rounded-full blur-xl animate-pulse" />
               <div className="w-24 h-24 bg-gradient-to-br from-bg-tertiary to-bg-primary rounded-full border border-neon-cyan relative z-10 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <Lightbulb className="w-10 h-10 text-neon-cyan" />
               </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neon-magenta rounded-full shadow-[0_0_10px_#FF00E5]" />
              <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_15px_#B400FF]" />
            </div>
            
             {/* Connection Lines (Simulated with SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
               <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#00F0FF" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#B400FF" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#FF00E5" strokeWidth="1" />
             </svg>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-primary to-transparent">
               <div className="font-mono text-xs text-neon-cyan mb-1">NEURAL_ENGINE_V4.2</div>
               <div className="font-mono text-xs text-text-muted">PROCESSING_NODES: 4,096 | EFFICIENCY: 99.9%</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
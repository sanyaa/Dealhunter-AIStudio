import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative px-6 py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Invest in <span className="text-neon-cyan">Superiority</span></h1>
        <p className="text-text-secondary text-xl mb-12">Choose the power level that fits your acquisition strategy.</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!annual ? 'text-white' : 'text-text-tertiary'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-16 h-8 bg-bg-secondary border border-white/20 rounded-full relative transition-colors"
          >
            <div className={`absolute top-1 bottom-1 w-6 bg-neon-cyan rounded-full transition-all duration-300 ${annual ? 'left-8 shadow-[0_0_10px_#00F0FF]' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-bold ${annual ? 'text-white' : 'text-text-tertiary'}`}>
            Yearly <span className="text-neon-cyan text-xs ml-1">(Save 20%)</span>
          </span>
        </div>

        {/* Cards */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Starter */}
          <div className="p-8 rounded-3xl bg-bg-secondary/20 border border-white/5 flex flex-col">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Scout</h3>
            <p className="text-text-tertiary text-sm mb-6">For casual deal hunters.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white font-mono">{annual ? '$0' : '$0'}</span>
              <span className="text-text-tertiary">/mo</span>
            </div>
            <button className="w-full py-3 border border-white/20 rounded-xl text-white font-bold hover:bg-white/5 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 flex-1">
              {['5 Active Alerts', 'Daily Scans', 'Public Deal Feed', 'Community Support'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                  <Check size={16} className="text-text-muted" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="relative p-8 rounded-3xl bg-bg-secondary/60 border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Hunter</h3>
            <p className="text-text-tertiary text-sm mb-6">For serious arbitrage.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white font-mono">{annual ? '$29' : '$39'}</span>
              <span className="text-text-tertiary">/mo</span>
            </div>
            <button className="w-full py-3 bg-neon-cyan text-bg-primary rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all mb-8">
              Start Trial
            </button>
            <ul className="space-y-4 flex-1">
              {[
                'Unlimited Alerts', 
                'Real-time Scans (1min)', 
                'Price Trajectory AI', 
                'Cross-Border Search',
                'Mobile App Access',
                'Priority Support'
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white">
                  <Check size={16} className="text-neon-cyan" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-3xl bg-bg-secondary/20 border border-white/5 flex flex-col">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Syndicate</h3>
            <p className="text-text-tertiary text-sm mb-6">For automated scale.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white font-mono">Custom</span>
            </div>
            <button className="w-full py-3 border border-white/20 rounded-xl text-white font-bold hover:bg-white/5 transition-colors mb-8">
              Contact Sales
            </button>
            <ul className="space-y-4 flex-1">
              {[
                'API Access', 
                'Auto-Checkout Bots', 
                'Dedicated IP Pools', 
                'White Label Reports',
                'Account Manager'
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                  <Check size={16} className="text-neon-purple" /> {feat}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PricingPage;
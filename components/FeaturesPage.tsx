import React from 'react';
import { Cpu, Zap, ShieldCheck, Globe2, BarChart4, RefreshCw } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-blue/10 blur-[120px] rounded-full -z-10" />
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
          Architected for <br />
          <span className="text-neon-cyan">Market Dominance</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
          A comprehensive suite of autonomous tools designed to give you an unfair advantage in the global marketplace.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            {
              icon: Cpu,
              title: "Neural Indexing",
              desc: "Our proprietary crawler processes 1.2 billion data points daily, structuring unstructured web data into actionable intelligence.",
              color: "text-neon-cyan"
            },
            {
              icon: Zap,
              title: "Zero-Latency Alerts",
              desc: "Direct-to-device push notifications delivered within 50ms of a confirmed price drop event.",
              color: "text-neon-magenta"
            },
            {
              icon: ShieldCheck,
              title: "Fraud Detection",
              desc: "Computer vision models analyze seller images and reviews to flag counterfeits and scam listings automatically.",
              color: "text-status-success"
            },
            {
              icon: Globe2,
              title: "Cross-Border Arbitrage",
              desc: "Automatically calculates import duties, shipping, and currency conversion to find deals in foreign markets.",
              color: "text-neon-purple"
            },
            {
              icon: BarChart4,
              title: "Price Trajectory",
              desc: "LSTM networks predict future price movements with 94% accuracy based on 5-year historical data.",
              color: "text-neon-blue"
            },
            {
              icon: RefreshCw,
              title: "Auto-Checkout",
              desc: "Configure buy limits and let our agents secure limited-stock items while you sleep (Enterprise only).",
              color: "text-white"
            }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-bg-secondary/20 border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-bg-secondary/40">
              <div className={`w-14 h-14 rounded-2xl bg-bg-primary border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Visual Section */}
      <section className="px-6 py-24 bg-bg-secondary/20 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-bold text-white mb-6">See What Others Miss</h2>
            <p className="text-text-secondary text-lg mb-8">
              Standard search engines only index the surface web. DealHunter AI goes deeper, accessing unlisted inventory, B2B liquidation tiers, and regional clearance data.
            </p>
            <ul className="space-y-4">
              {['Shadow Inventory Access', 'Wholesale Pricing Layers', 'Direct-to-Manufacturer Links'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-mono text-sm">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_8px_#00F0FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative">
             <div className="aspect-video bg-bg-primary rounded-xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="font-mono text-xs text-neon-cyan bg-bg-secondary/80 px-4 py-2 rounded border border-neon-cyan/30 backdrop-blur">
                      SCANNING_NODE_CLUSTERS...
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
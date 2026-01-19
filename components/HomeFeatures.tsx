import React from 'react';
import { Zap, Shield, Search, BarChart3, Globe, Smartphone } from 'lucide-react';

const HomeFeatures: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-bg-primary relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Enterprise Capabilities</h2>
          <p className="text-text-secondary text-lg">
            Built for power users who demand precision, speed, and depth in their market analysis.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Large Left Item */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-bg-secondary/30 border border-white/5 p-8 flex flex-col justify-between hover:border-neon-cyan/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-bg-primary border border-white/10 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Deep Web Indexing</h3>
              <p className="text-text-secondary max-w-md leading-relaxed">
                Our crawlers don't just scratch the surface. We index shadow inventory, unlisted clearance sections, and B2B pricing tiers to find opportunities invisible to standard search engines.
              </p>
            </div>
            <div className="relative mt-8 h-64 w-full bg-bg-primary/50 rounded-xl border border-white/5 overflow-hidden">
               {/* Abstract Grid Visualization */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-mono text-xs text-neon-cyan/50">
                 Scanning 1,402,392 nodes...
               </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="relative group overflow-hidden rounded-3xl bg-bg-secondary/30 border border-white/5 p-8 hover:border-neon-purple/30 transition-all duration-500">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-white/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-neon-purple" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Microsecond Latency</h3>
            <p className="text-sm text-text-tertiary">
              Edge-deployed infrastructure ensures you receive price alerts before the browser even renders the page.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="relative group overflow-hidden rounded-3xl bg-bg-secondary/30 border border-white/5 p-8 hover:border-neon-magenta/30 transition-all duration-500">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-white/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-neon-magenta" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Verified Authenticity</h3>
            <p className="text-sm text-text-tertiary">
              AI visual verification confirms product authenticity and seller reputation automatically.
            </p>
          </div>

        </div>

        {/* Bottom Row of Smaller Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { icon: BarChart3, title: "Price Forecasting", desc: "Predicts price drops with 94% accuracy." },
            { icon: Globe, title: "Global Currency", desc: "Auto-conversion for 40+ currencies." },
            { icon: Smartphone, title: "Mobile Command", desc: "Full control via our native iOS/Android apps." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-bg-secondary/20 border border-white/5 hover:bg-bg-secondary/40 transition-colors">
              <item.icon className="w-6 h-6 text-text-secondary mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-text-tertiary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeFeatures;
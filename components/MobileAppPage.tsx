import React from 'react';
import { Smartphone, Bell, Map, Wifi } from 'lucide-react';

const MobileAppPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-6 py-20 lg:py-32 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
          Command Center in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Your Pocket</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-16">
          The full power of the Neural Engine, optimized for mobile. Manage alerts, track portfolio value, and execute buy orders on the go.
        </p>

        {/* Device Mockups */}
        <div className="flex justify-center gap-8 mb-20 flex-wrap">
           {/* Phone 1 */}
           <div className="w-[280px] h-[580px] bg-bg-primary border-4 border-bg-tertiary rounded-[3rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-bg-tertiary rounded-b-xl z-20" />
              <div className="w-full h-full bg-bg-secondary/50 flex flex-col p-6 pt-12">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="font-display font-bold text-xl text-white">Watchlist</h3>
                    <Bell size={20} className="text-neon-cyan" />
                 </div>
                 {[1,2,3,4].map(i => (
                    <div key={i} className="bg-bg-primary/80 p-3 rounded-xl mb-3 border border-white/5">
                       <div className="h-2 w-1/2 bg-white/20 rounded mb-2" />
                       <div className="h-2 w-1/3 bg-neon-cyan/40 rounded" />
                    </div>
                 ))}
              </div>
           </div>

           {/* Phone 2 (Translated down) */}
           <div className="w-[280px] h-[580px] bg-bg-primary border-4 border-bg-tertiary rounded-[3rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10 lg:translate-y-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-bg-tertiary rounded-b-xl z-20" />
              <div className="w-full h-full bg-bg-secondary/50 flex flex-col items-center justify-center p-6 relative">
                 <div className="w-32 h-32 rounded-full border-4 border-neon-cyan/20 flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-neon-cyan/10 flex items-center justify-center animate-pulse">
                        <span className="font-display font-bold text-2xl text-neon-cyan">SCAN</span>
                    </div>
                 </div>
                 <div className="text-center">
                    <div className="font-mono text-xs text-text-tertiary mb-2">TARGET ACQUIRED</div>
                    <div className="font-bold text-white text-xl">$499.00</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
           {[
             { icon: Bell, title: "Push Notifications", desc: "Instant alerts that bypass email clutter." },
             { icon: Map, title: "Geofencing", desc: "Unlock local clearance deals when you walk near a store." },
             { icon: Wifi, title: "Offline Sync", desc: "Browse your cached deals even in the subway." }
           ].map((feat, i) => (
             <div key={i} className="p-6 rounded-2xl bg-bg-secondary/30 border border-white/5">
                <feat.icon className="w-8 h-8 text-white mb-4" />
                <h4 className="font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-sm text-text-tertiary">{feat.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-16 flex justify-center gap-4">
           <button className="px-8 py-3 bg-white text-bg-primary rounded-lg font-bold hover:bg-gray-200 transition-colors">Download for iOS</button>
           <button className="px-8 py-3 border border-white/20 text-white rounded-lg font-bold hover:bg-white/5 transition-colors">Get it on Android</button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;
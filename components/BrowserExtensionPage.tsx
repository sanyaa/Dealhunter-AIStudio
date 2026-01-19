import React from 'react';
import { Chrome, Search, Tag, AlertTriangle } from 'lucide-react';

const BrowserExtensionPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-5xl font-bold mb-6">
              The <span className="text-neon-cyan">Invisible Edge</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Seamlessly integrates into your browsing workflow. Our lightweight extension overlays crucial market data directly onto retailer product pages.
            </p>

            <ul className="space-y-6 mb-10">
               {[
                 { icon: Search, text: "Auto-Scout: Instantly checks 50+ other retailers for a better price." },
                 { icon: Tag, text: "Coupon Injection: Tests 10,000+ codes in <2 seconds at checkout." },
                 { icon: AlertTriangle, text: "Fake Review Warning: Flags suspicious review patterns instantly." }
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-bg-secondary border border-white/10 flex items-center justify-center shrink-0">
                       <item.icon size={16} className="text-neon-cyan" />
                    </div>
                    <span className="text-text-secondary pt-1">{item.text}</span>
                 </li>
               ))}
            </ul>

            <button className="flex items-center gap-3 px-8 py-4 bg-neon-cyan text-bg-primary rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
               <Chrome size={24} /> Add to Chrome
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-cyan/5 blur-[100px] rounded-full -z-10" />
             
             {/* Browser Mockup */}
             <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {/* Browser Bar */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-4 border-b border-black">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                   </div>
                   <div className="bg-[#1e1e1e] flex-1 rounded text-xs text-gray-500 px-3 py-1 font-mono">
                      amazon.com/product/xyz...
                   </div>
                   <div className="w-6 h-6 rounded bg-neon-cyan text-bg-primary flex items-center justify-center font-bold text-xs">DH</div>
                </div>
                
                {/* Content */}
                <div className="p-8 h-[300px] relative bg-white">
                   <div className="w-1/3 h-40 bg-gray-200 rounded mb-4" />
                   <div className="w-2/3 h-6 bg-gray-800 rounded mb-2" />
                   <div className="w-1/4 h-8 bg-gray-800 rounded mb-4" />

                   {/* Overlay UI */}
                   <div className="absolute top-8 right-8 w-64 bg-bg-primary/95 backdrop-blur-md border border-neon-cyan shadow-xl rounded-lg p-4 text-white transform translate-x-4 animate-in slide-in-from-right duration-700">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-neon-cyan">DealHunter Found</span>
                         <span className="text-xs bg-status-success text-bg-primary px-1 rounded">-$45</span>
                      </div>
                      <div className="space-y-2 text-sm">
                         <div className="flex justify-between">
                            <span>Best Buy</span>
                            <span className="font-bold">$1,155</span>
                         </div>
                         <div className="flex justify-between text-text-muted">
                            <span>Amazon</span>
                            <span className="line-through">$1,200</span>
                         </div>
                      </div>
                      <button className="w-full mt-4 bg-neon-cyan text-bg-primary text-xs font-bold py-2 rounded">
                         Go to Best Buy
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BrowserExtensionPage;
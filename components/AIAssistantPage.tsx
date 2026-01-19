import React from 'react';
import { MessageSquare, Sparkles, Bot, BrainCircuit } from 'lucide-react';

const AIAssistantPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple font-mono text-xs uppercase tracking-wider mb-8">
              <Sparkles size={12} /> Gen-AI Powered
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Your Personal <br />
              <span className="text-neon-purple">Market Analyst</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Stop using filters and keywords. Just ask. Our LLM-powered assistant understands context, specific product specs, and complex purchasing criteria.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Natural Language Queries", desc: "\"Find me a 4K OLED monitor under $800 with at least 144Hz refresh rate.\"" },
                { title: "Sentiment Analysis", desc: "Summarizes thousands of reviews to tell you if a deal is actually good or just cheap." },
                { title: "Negotiation Bot", desc: "Automatically generates counter-offer scripts for marketplaces like eBay (Beta)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-text-tertiary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-neon-purple/20 blur-[100px] rounded-full -z-10" />
            <div className="bg-bg-primary/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/5 bg-bg-secondary/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                  <span className="font-mono text-sm font-bold text-white">DealHunter AI</span>
                </div>
                <BrainCircuit size={18} className="text-text-tertiary" />
              </div>
              
              {/* Chat Area */}
              <div className="p-6 space-y-6 font-mono text-sm h-[400px] flex flex-col justify-end">
                <div className="self-end max-w-[80%] bg-neon-purple/20 border border-neon-purple/30 text-white px-4 py-3 rounded-2xl rounded-tr-sm">
                  Find me the best price on a Sony A7IV body only.
                </div>
                
                <div className="self-start max-w-[85%] bg-bg-secondary border border-white/10 text-text-secondary px-4 py-3 rounded-2xl rounded-tl-sm">
                  <p className="mb-3">Analyzing 14 retailers...</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-bg-primary rounded border border-white/5">
                      <span className="text-white">B&H Photo</span>
                      <span className="text-status-error line-through">$2,498</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-neon-cyan/10 rounded border border-neon-cyan/30">
                      <span className="text-neon-cyan font-bold">Greentoe Offer</span>
                      <span className="text-neon-cyan font-bold">$2,199</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-text-tertiary">
                    <Sparkles size={12} className="inline mr-1" />
                    This is $299 below MSRP. Historical low detected.
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/5 bg-bg-secondary/30">
                <div className="h-10 bg-bg-primary rounded-lg border border-white/10" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AIAssistantPage;
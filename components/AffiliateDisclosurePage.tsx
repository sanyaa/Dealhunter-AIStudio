import React from 'react';
import { ShieldCheck, Scale, DollarSign, ExternalLink, HeartHandshake, Lock } from 'lucide-react';

const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-status-success/5 blur-[120px] rounded-full -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-status-success/30 bg-status-success/10 text-status-success font-mono text-xs uppercase tracking-wider mb-8">
          <ShieldCheck size={12} /> Transparency Protocol
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Affiliate <span className="text-white">Disclosure</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          DealHunter AI is committed to unbiased algorithmic discovery. Here is how we fund our infrastructure while keeping the platform free for you.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Core Statement */}
          <div className="bg-bg-secondary/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan" />
             <h2 className="font-display text-2xl font-bold text-white mb-4">The Short Version</h2>
             <p className="text-text-secondary text-lg leading-relaxed">
               When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to, the eBay Partner Network and the Amazon Associates Program.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Cost to User */}
             <div className="p-6 rounded-2xl bg-bg-primary border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center mb-4">
                   <DollarSign className="text-neon-magenta" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">No Cost To You</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                   Affiliate commissions are paid by the retailer from their marketing budget. The price you pay is exactly the same (or lower, thanks to our deal finding) whether you use our link or go directly to the store.
                </p>
             </div>

             {/* Algorithmic Integrity */}
             <div className="p-6 rounded-2xl bg-bg-primary border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center mb-4">
                   <Scale className="text-neon-cyan" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">Algorithmic Neutrality</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                   Our Neural Engine prioritizes savings and price trajectory above all else. We do not manually boost products with higher commission rates. If a better deal exists at a non-affiliated retailer, our AI is programmed to show it.
                </p>
             </div>
          </div>

          {/* Amazon Specific */}
          <div className="border-t border-white/10 pt-12">
             <div className="flex items-start gap-4">
                <div className="mt-1 min-w-[24px]">
                  <ExternalLink className="text-text-tertiary" />
                </div>
                <div>
                   <h3 className="font-display text-xl font-bold text-white mb-3">Amazon Associates Disclosure</h3>
                   <p className="text-text-secondary leading-relaxed">
                      DealHunter AI is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                   </p>
                   <p className="text-text-secondary leading-relaxed mt-4">
                      As an Amazon Associate, we earn from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
                   </p>
                </div>
             </div>
          </div>

          {/* Other Partners */}
          <div className="border-t border-white/10 pt-12">
             <div className="flex items-start gap-4">
                <div className="mt-1 min-w-[24px]">
                  <HeartHandshake className="text-text-tertiary" />
                </div>
                <div>
                   <h3 className="font-display text-xl font-bold text-white mb-3">Other Affiliate Relationships</h3>
                   <p className="text-text-secondary leading-relaxed mb-4">
                      We also participate in affiliate programs with other retailers, including but not limited to:
                   </p>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Best Buy', 'Walmart', 'Newegg', 'B&H Photo', 'eBay', 'Target', 'Samsung', 'Microsoft'].map(store => (
                        <div key={store} className="px-4 py-2 bg-white/5 rounded border border-white/5 text-sm text-center text-text-tertiary">
                           {store}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Closing */}
          <div className="bg-gradient-to-r from-bg-secondary to-bg-tertiary rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-bg-primary flex items-center justify-center shrink-0 border border-white/10">
                <Lock className="text-status-success" />
             </div>
             <div>
                <h4 className="font-bold text-white text-lg mb-2">Our Promise</h4>
                <p className="text-text-secondary text-sm">
                   We believe transparency builds trust. We will always clearly label sponsored content (though we rarely do it) and ensure our AI remains an unbiased advocate for your wallet.
                </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AffiliateDisclosurePage;
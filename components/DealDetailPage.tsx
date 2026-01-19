import React from 'react';
import { ArrowLeft, Share2, Heart, ExternalLink, ShieldCheck, TrendingDown, BrainCircuit, Star, Truck, RefreshCw } from 'lucide-react';
import { Deal } from '../types';

interface DealDetailPageProps {
  deal: Deal;
  onBack: () => void;
}

const DealDetailPage: React.FC<DealDetailPageProps> = ({ deal, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 bg-bg-primary min-h-screen pb-20">
      
      {/* Breadcrumb / Top Bar */}
      <div className="sticky top-20 z-40 bg-bg-primary/90 backdrop-blur border-b border-white/5 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-cyan transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm uppercase tracking-wider">Back to Feed</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full border border-white/10 text-text-secondary hover:text-white hover:border-white/30 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="p-2 rounded-full border border-white/10 text-text-secondary hover:text-neon-magenta hover:border-neon-magenta/50 transition-colors">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Images & Specifications */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-bg-secondary group">
              <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 flex gap-2">
                <div className="bg-bg-primary/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-white flex items-center gap-2">
                  <ShieldCheck size={14} className="text-status-success" /> Verified Seller
                </div>
                <div className="bg-bg-primary/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-white flex items-center gap-2">
                  <Truck size={14} className="text-neon-cyan" /> Free Shipping
                </div>
              </div>
            </div>

            {/* AI Analysis Card */}
            <div className="rounded-3xl bg-bg-secondary/30 border border-white/10 p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 blur-[80px] rounded-full pointer-events-none" />
               
               <div className="flex items-center gap-3 mb-6">
                 <BrainCircuit className="text-neon-purple" />
                 <h3 className="font-display text-2xl font-bold text-white">Neural Analysis</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                   <div className="text-sm text-text-tertiary mb-2 font-mono uppercase">Price Trajectory</div>
                   {/* CSS Chart Simulation */}
                   <div className="h-32 flex items-end gap-2 border-b border-white/10 pb-1 relative">
                      {deal.priceHistory?.map((point, i) => {
                        // normalize height
                        const maxPrice = Math.max(...(deal.priceHistory?.map(p => p.price) || [0]));
                        const height = (point.price / maxPrice) * 100;
                        const isLast = i === (deal.priceHistory?.length || 0) - 1;
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                             <div 
                                className={`w-full rounded-t transition-all ${isLast ? 'bg-neon-cyan animate-pulse' : 'bg-white/10 group-hover:bg-white/20'}`} 
                                style={{ height: `${height}%` }}
                             />
                             <div className="absolute -top-8 bg-bg-primary border border-white/10 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                               ${point.price} on {point.date}
                             </div>
                          </div>
                        )
                      })}
                   </div>
                   <div className="flex justify-between text-xs text-text-tertiary mt-2 font-mono">
                      <span>30 Days Ago</span>
                      <span>Today</span>
                   </div>
                 </div>

                 <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-text-secondary">Sentiment Analysis</span>
                        <span className="text-sm font-bold text-status-success">Positive</span>
                      </div>
                      <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden">
                        <div className="h-full bg-status-success w-[85%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-text-secondary">Sell-out Risk</span>
                        <span className="text-sm font-bold text-status-warning">Medium</span>
                      </div>
                      <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden">
                        <div className="h-full bg-status-warning w-[45%]" />
                      </div>
                    </div>
                    
                    <div className="bg-bg-primary/50 border border-white/5 p-3 rounded-lg">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        <span className="text-neon-cyan font-bold">AI Verdict:</span> Historical data suggests this price is 15% below the 90-day average. Recommended buy zone.
                      </p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Specs & Description */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-4">Description</h3>
                <p className="text-text-secondary leading-relaxed">
                  {deal.description || "No description available."}
                </p>
              </div>

              {deal.specifications && (
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">Technical Specs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(deal.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between p-3 rounded-lg bg-bg-secondary/30 border border-white/5">
                        <span className="text-text-tertiary text-sm">{key}</span>
                        <span className="text-white text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Buy Box & Retailers */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Sticky Buy Box */}
            <div className="sticky top-40 bg-bg-secondary/60 backdrop-blur-xl border border-neon-cyan/20 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h1 className="font-display text-3xl font-bold text-white mb-2">{deal.title}</h1>
                   <div className="flex items-center gap-2">
                      <div className="flex text-neon-warning">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={14} className={i <= (deal.rating || 0) ? "fill-status-warning text-status-warning" : "text-text-tertiary"} />
                        ))}
                      </div>
                      <span className="text-xs text-text-tertiary">({deal.reviewsCount} reviews)</span>
                   </div>
                 </div>
                 <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center border-2 ${
                    deal.aiScore >= 90 ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan' : 'border-neon-purple bg-neon-purple/10 text-neon-purple'
                 }`}>
                   <span className="font-display font-bold text-xl leading-none">{deal.aiScore}</span>
                   <span className="text-[0.6rem] font-mono uppercase font-bold">Score</span>
                 </div>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-3 mb-1">
                  <span className="font-display text-5xl font-bold text-white">${deal.currentPrice.toFixed(2)}</span>
                  <span className="text-text-tertiary text-lg line-through mb-2">${deal.originalPrice.toFixed(2)}</span>
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-bold text-status-success bg-status-success/10 px-2 py-1 rounded">
                  <TrendingDown size={14} /> {deal.discount}% Historic Drop
                </div>
              </div>

              <button className="w-full py-4 bg-neon-cyan text-bg-primary font-display font-bold text-xl uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all mb-4 flex items-center justify-center gap-2 group">
                 Buy Now <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full py-3 border border-white/20 text-white font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-white/5 transition-colors">
                 Set Price Alert
              </button>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-mono text-xs uppercase text-text-tertiary mb-4">Retailer Comparison</h4>
                <div className="space-y-3">
                  {deal.retailers?.map((retailer, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${
                       retailer.price === deal.currentPrice ? 'bg-neon-cyan/5 border-neon-cyan/30' : 'bg-bg-primary/50 border-white/5'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${retailer.inStock ? 'bg-status-success' : 'bg-status-error'}`} />
                        <span className="text-sm font-medium text-white">{retailer.name}</span>
                        {retailer.price === deal.currentPrice && (
                          <span className="text-[10px] bg-neon-cyan text-bg-primary px-1.5 rounded font-bold">BEST</span>
                        )}
                      </div>
                      <div className="text-sm font-mono text-text-secondary">
                        ${retailer.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                   <button className="text-xs text-text-tertiary flex items-center justify-center gap-1 w-full hover:text-white transition-colors">
                     <RefreshCw size={12} /> Last updated: 2 mins ago
                   </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetailPage;
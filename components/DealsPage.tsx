import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownRight, RefreshCw, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Deal } from '../types';

interface DealsPageProps {
  onDealClick: (deal: Deal) => void;
}

const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'MacBook Pro 14" M3 Pro',
    retailer: 'Amazon',
    currentPrice: 1799.00,
    originalPrice: 1999.00,
    discount: 10,
    aiScore: 98,
    category: 'Electronics',
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
    description: "The M3 Pro chip brings serious speed and power efficiency. With up to 22 hours of battery life and a stunning Liquid Retina XDR display, this is the pro laptop you've been waiting for.",
    rating: 4.8,
    reviewsCount: 1240,
    specifications: {
      "Processor": "Apple M3 Pro",
      "RAM": "18GB Unified Memory",
      "Storage": "512GB SSD",
      "Display": "14.2-inch Liquid Retina XDR",
      "Battery": "Up to 22 hours"
    },
    priceHistory: [
      { date: 'Oct 1', price: 1999 },
      { date: 'Oct 15', price: 1949 },
      { date: 'Nov 1', price: 1899 },
      { date: 'Nov 15', price: 1799 }
    ],
    retailers: [
      { name: 'Amazon', price: 1799.00, inStock: true },
      { name: 'Best Buy', price: 1849.00, inStock: true },
      { name: 'B&H Photo', price: 1799.00, inStock: true },
      { name: 'Apple', price: 1999.00, inStock: true }
    ]
  },
  {
    id: '2',
    title: 'Sony WH-1000XM5',
    retailer: 'Best Buy',
    currentPrice: 298.00,
    originalPrice: 399.00,
    discount: 25,
    aiScore: 95,
    category: 'Audio',
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
    description: "Industry-leading noise canceling with two processors controlling 8 microphones for unprecedented noise cancellation and exceptional call quality.",
    rating: 4.7,
    reviewsCount: 3500,
    specifications: {
      "Type": "Over-ear",
      "Battery Life": "30 hours",
      "Connection": "Bluetooth 5.2",
      "Noise Cancelling": "Active (ANC)"
    },
    priceHistory: [
      { date: 'Oct 1', price: 399 },
      { date: 'Oct 15', price: 348 },
      { date: 'Nov 1', price: 348 },
      { date: 'Nov 15', price: 298 }
    ],
    retailers: [
      { name: 'Best Buy', price: 298.00, inStock: true },
      { name: 'Amazon', price: 298.00, inStock: true },
      { name: 'Target', price: 329.00, inStock: false }
    ]
  },
  {
    id: '3',
    title: 'Herman Miller Aeron',
    retailer: 'Office Depot',
    currentPrice: 1150.00,
    originalPrice: 1650.00,
    discount: 30,
    aiScore: 92,
    category: 'Furniture',
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1000',
    description: "The definitive office chair. Ergonomic design meets high-performance material. Remastered for today's work.",
    rating: 4.9,
    reviewsCount: 890,
    specifications: {
      "Material": "Pellicle Mesh",
      "Frame": "Graphite",
      "Size": "B (Medium)",
      "Warranty": "12 Years"
    },
    priceHistory: [
      { date: 'Oct 1', price: 1650 },
      { date: 'Oct 15', price: 1450 },
      { date: 'Nov 1', price: 1250 },
      { date: 'Nov 15', price: 1150 }
    ],
    retailers: [
      { name: 'Office Depot', price: 1150.00, inStock: true },
      { name: 'Herman Miller', price: 1650.00, inStock: true },
      { name: 'Amazon', price: 1250.00, inStock: true }
    ]
  },
  {
    id: '4',
    title: 'Samsung Odyssey G9 OLED',
    retailer: 'Newegg',
    currentPrice: 1099.00,
    originalPrice: 1799.00,
    discount: 39,
    aiScore: 99,
    category: 'Monitors',
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000',
    description: "The world's first 49-inch OLED monitor. 240Hz refresh rate and 0.03ms response time for competitive edge.",
    rating: 4.6,
    reviewsCount: 450,
    specifications: {
      "Resolution": "5120 x 1440",
      "Panel": "OLED",
      "Refresh Rate": "240Hz",
      "Curve": "1800R"
    },
    priceHistory: [
      { date: 'Oct 1', price: 1799 },
      { date: 'Oct 15', price: 1599 },
      { date: 'Nov 1', price: 1299 },
      { date: 'Nov 15', price: 1099 }
    ],
    retailers: [
      { name: 'Newegg', price: 1099.00, inStock: true },
      { name: 'Samsung', price: 1199.00, inStock: true },
      { name: 'Best Buy', price: 1099.00, inStock: false }
    ]
  },
  {
    id: '5',
    title: 'Dyson V15 Detect',
    retailer: 'Target',
    currentPrice: 599.99,
    originalPrice: 749.99,
    discount: 20,
    aiScore: 88,
    category: 'Home',
    trend: 'stable',
    image: 'https://images.unsplash.com/photo-1558317374-a3545eca46f2?auto=format&fit=crop&q=80&w=1000',
    description: "Laser reveals microscopic dust. Intelligently adapts suction and run time. Scientific proof of a deep clean.",
    rating: 4.8,
    reviewsCount: 2100,
    specifications: {
      "Run time": "60 mins",
      "Weight": "6.8 lb",
      "Bin Volume": "0.2 gal",
      "Technology": "Laser Detect"
    },
    priceHistory: [
      { date: 'Oct 1', price: 749.99 },
      { date: 'Oct 15', price: 699.99 },
      { date: 'Nov 1', price: 599.99 },
      { date: 'Nov 15', price: 599.99 }
    ],
    retailers: [
      { name: 'Target', price: 599.99, inStock: true },
      { name: 'Dyson', price: 749.99, inStock: true },
      { name: 'Amazon', price: 620.00, inStock: true }
    ]
  },
  {
    id: '6',
    title: 'Keychron Q1 Pro',
    retailer: 'Keychron',
    currentPrice: 179.00,
    originalPrice: 199.00,
    discount: 10,
    aiScore: 85,
    category: 'Electronics',
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000',
    description: "A fully customizable mechanical keyboard with wireless capability. Full aluminum body and double-gasket design.",
    rating: 4.9,
    reviewsCount: 320,
    specifications: {
      "Switch": "K Pro Red",
      "Layout": "75%",
      "Connection": "Bluetooth/Wired",
      "Body": "CNC Aluminum"
    },
    priceHistory: [
      { date: 'Oct 1', price: 199 },
      { date: 'Oct 15', price: 199 },
      { date: 'Nov 1', price: 189 },
      { date: 'Nov 15', price: 179 }
    ],
    retailers: [
      { name: 'Keychron', price: 179.00, inStock: true },
      { name: 'Amazon', price: 199.00, inStock: true }
    ]
  }
];

const DealsPage: React.FC<DealsPageProps> = ({ onDealClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-bg-primary pb-20 pt-8 animate-in fade-in duration-500">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-display text-4xl font-bold text-white">Live Market Feed</h1>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-status-success/10 text-status-success border border-status-success/20 animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-text-secondary">Real-time arbitrage opportunities sourced by Neural Engine v4.2</p>
          </div>

          <div className="flex gap-4">
            <div className="text-right hidden md:block">
              <div className="text-text-tertiary text-xs font-mono uppercase">Deals Scanned (24h)</div>
              <div className="text-xl font-bold font-mono text-white">1,402,842</div>
            </div>
             <div className="text-right hidden md:block">
              <div className="text-text-tertiary text-xs font-mono uppercase">Avg Savings</div>
              <div className="text-xl font-bold font-mono text-neon-cyan">28.4%</div>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="sticky top-24 z-30 bg-bg-primary/95 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-8 shadow-2xl flex flex-col md:flex-row gap-4 justify-between items-center">
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search assets (e.g., 'OLED', 'MacBook')" 
              className="w-full bg-bg-secondary border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Electronics', 'Home', 'Audio', 'Fashion', 'Travel'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? 'bg-neon-cyan text-bg-primary font-bold' 
                    : 'bg-white/5 text-text-secondary hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button className="p-2.5 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-white/30 transition-colors">
              <SlidersHorizontal size={18} />
            </button>
             <button className="p-2.5 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-white/30 transition-colors">
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_DEALS.map((deal) => (
            <div 
              key={deal.id} 
              onClick={() => onDealClick(deal)}
              className="group bg-bg-secondary/40 border border-white/5 hover:border-neon-cyan/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
            >
              
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden bg-white/5">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-3 right-3 bg-bg-primary/90 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs font-mono text-white flex items-center gap-1">
                  {deal.retailer}
                </div>
                <div className="absolute top-3 left-3">
                   <div className={`px-2 py-1 rounded text-xs font-bold font-mono ${
                     deal.aiScore > 90 ? 'bg-neon-cyan text-bg-primary' : 'bg-neon-purple text-white'
                   }`}>
                     AI SCORE: {deal.aiScore}
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-lg text-white leading-tight group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {deal.title}
                  </h3>
                </div>

                <div className="mt-auto pt-4 space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-text-tertiary text-xs line-through mb-0.5">${deal.originalPrice.toFixed(2)}</div>
                      <div className="font-mono text-2xl font-bold text-white">${deal.currentPrice.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                       <div className="flex items-center justify-end gap-1 text-status-success font-bold font-mono">
                         <ArrowDownRight size={16} />
                         {deal.discount}%
                       </div>
                       <div className="text-xs text-text-tertiary mt-1">All-time Low</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold uppercase tracking-wider text-white group-hover:bg-neon-cyan group-hover:text-bg-primary transition-all flex items-center justify-center gap-2">
                    Analyze Deal <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-white/10 rounded-full text-text-secondary hover:text-white hover:border-white/30 transition-colors flex items-center gap-2 mx-auto">
                Load More Data <ChevronDown size={16} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default DealsPage;
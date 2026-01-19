import React, { useState } from 'react';
import { 
  Home, Heart, Bell, Scale, Star, BarChart3, Clock, Trophy, 
  Settings, CreditCard, LogOut, ChevronRight, Search, 
  MoreHorizontal, ArrowUpRight, ShieldCheck, Zap
} from 'lucide-react';
import { Deal } from '../types';

// Mock Data for Dashboard
const MOCK_STATS = [
  { label: 'Total Savings', value: '$2,450', trend: '+15%', trendUp: true, icon: '💰' },
  { label: 'Deals Found', value: '47', trend: '+8', trendUp: true, icon: '🛍️' },
  { label: 'Active Alerts', value: '12', trend: '+3', trendUp: true, icon: '🔔' },
  { label: 'Hunter Level', value: 'Lvl 5', trend: 'Pro', trendUp: true, icon: '⭐' },
];

const MOCK_WISHLIST = [
  { id: 1, title: 'Premium Wireless Headphones', price: '$129.99', discount: 45, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&fit=crop' },
  { id: 2, title: 'Smart Fitness Watch', price: '$79.99', discount: 60, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&fit=crop' },
  { id: 3, title: 'High-Speed Blender', price: '$89.99', discount: 40, image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&fit=crop' },
];

const MOCK_ALERTS = [
  { id: 1, product: 'Sony WH-1000XM5', target: 299, current: 349, status: 'active' },
  { id: 2, product: 'AirPods Pro (2nd Gen)', target: 199, current: 249, status: 'active' },
  { id: 3, product: 'Samsung 55" QLED TV', target: 799, current: 749, status: 'triggered' },
];

const ACTIVITY_LOG = [
  { id: 1, type: 'alert', message: 'Samsung 55" 4K TV dropped to $749 (Target met)', time: '2h ago' },
  { id: 2, type: 'wishlist', message: 'Added "Professional Blender" to wishlist', time: '5h ago' },
  { id: 3, type: 'save', message: 'You saved $110 on Wireless Headphones', time: 'Yesterday' },
  { id: 4, type: 'level', message: 'Reached Level 5 - Pro Hunter status', time: '2 days ago' },
];

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-bg-primary flex animate-in fade-in duration-500">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-bg-secondary/30 backdrop-blur-xl fixed top-20 bottom-0 z-20">
        <div className="p-6">
          <h2 className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-6 px-3">Dashboard</h2>
          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'wishlist', label: 'Wishlist', icon: Heart, badge: '12' },
              { id: 'alerts', label: 'Price Alerts', icon: Bell, badge: '5' },
              { id: 'comparisons', label: 'Comparisons', icon: Scale },
              { id: 'reviews', label: 'My Reviews', icon: Star },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? 'bg-neon-cyan/10 text-neon-cyan shadow-[inset_0_0_10px_rgba(0,240,255,0.1)]' 
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-md bg-neon-magenta text-white text-[10px] font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <h2 className="font-mono text-xs text-text-tertiary uppercase tracking-wider mt-8 mb-6 px-3">Account</h2>
          <nav className="space-y-1">
            {[
              { id: 'profile', label: 'Profile', icon: ShieldCheck },
              { id: 'settings', label: 'Settings', icon: Settings },
              { id: 'subscription', label: 'Subscription', icon: CreditCard },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-status-error hover:bg-status-error/10 transition-colors mt-4">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Welcome Banner */}
          <div className="relative rounded-3xl p-8 mb-8 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-bg-secondary to-bg-primary border border-white/10 rounded-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 blur-[100px] rounded-full group-hover:bg-neon-cyan/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                  Welcome back, John! <span className="animate-wave inline-block">👋</span>
                </h1>
                <p className="text-text-secondary">
                  You've saved <span className="text-neon-cyan font-bold">$2,450</span> this month using DealHunter AI.
                </p>
              </div>
              <div className="flex gap-3">
                 <button className="px-5 py-2.5 bg-neon-cyan text-bg-primary font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2">
                   <Search size={16} /> Browse Deals
                 </button>
                 <button className="px-5 py-2.5 bg-white/5 text-white border border-white/10 font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                   <Zap size={16} /> Ask AI
                 </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {MOCK_STATS.map((stat, i) => (
              <div key={i} className="bg-bg-secondary/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-neon-cyan/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${stat.trendUp ? 'bg-status-success/10 text-status-success' : 'bg-status-error/10 text-status-error'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white font-display mb-1">{stat.value}</div>
                <div className="text-xs text-text-tertiary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Wishlist Section */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    <Heart className="text-neon-magenta" size={20} /> My Wishlist
                  </h2>
                  <button className="text-xs text-neon-cyan hover:text-white transition-colors flex items-center gap-1">
                    View All <ChevronRight size={14} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {MOCK_WISHLIST.map((item) => (
                    <div key={item.id} className="group bg-bg-secondary/40 border border-white/10 rounded-xl overflow-hidden hover:border-neon-magenta/50 transition-all cursor-pointer">
                      <div className="relative h-32 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-2 right-2 bg-neon-magenta text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                          -{item.discount}%
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white text-sm line-clamp-1 mb-2">{item.title}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-neon-cyan font-mono font-bold">{item.price}</span>
                          <button className="text-xs text-text-tertiary hover:text-white transition-colors">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Active Alerts */}
              <section>
                 <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    <Bell className="text-neon-cyan" size={20} /> Active Price Alerts
                  </h2>
                  <button className="text-xs text-neon-cyan hover:text-white transition-colors flex items-center gap-1">
                    Manage Alerts <ChevronRight size={14} />
                  </button>
                </div>

                <div className="bg-bg-secondary/20 border border-white/10 rounded-2xl overflow-hidden">
                  {MOCK_ALERTS.map((alert, i) => (
                    <div key={alert.id} className={`p-4 flex items-center justify-between border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${alert.status === 'triggered' ? 'bg-status-warning/5' : ''}`}>
                      <div>
                        <div className="font-bold text-white text-sm mb-1">{alert.product}</div>
                        <div className="text-xs text-text-tertiary">
                          Target: <span className="text-white">${alert.target}</span> • Current: <span className="text-text-secondary">${alert.current}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                           alert.status === 'triggered' ? 'bg-status-warning text-bg-primary animate-pulse' : 'bg-status-success/10 text-status-success'
                         }`}>
                           {alert.status === 'triggered' ? 'TRIGGERED!' : 'ACTIVE'}
                         </div>
                         <button className="text-text-tertiary hover:text-white">
                           <MoreHorizontal size={16} />
                         </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (1/3) */}
            <div className="space-y-8">
              
              {/* Recent Activity */}
              <div className="bg-bg-secondary/20 border border-white/10 rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="text-neon-blue" size={18} /> Recent Activity
                </h3>
                <div className="relative border-l border-white/10 ml-3 space-y-8">
                  {ACTIVITY_LOG.map((log) => (
                    <div key={log.id} className="relative pl-6">
                      <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-bg-primary ${
                        log.type === 'alert' ? 'bg-status-warning' : 
                        log.type === 'save' ? 'bg-status-success' :
                        log.type === 'level' ? 'bg-neon-purple' : 'bg-neon-cyan'
                      }`} />
                      <p className="text-sm text-text-secondary mb-1 leading-relaxed">{log.message}</p>
                      <span className="text-[10px] text-text-tertiary font-mono uppercase">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gamification / Level */}
              <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-[60px] rounded-full" />
                 
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="font-display text-lg font-bold text-white">Hunter Level</h3>
                   <span className="text-neon-cyan font-mono font-bold">Lvl 5</span>
                 </div>
                 
                 <div className="w-full bg-bg-primary rounded-full h-2.5 mb-2 overflow-hidden">
                   <div className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2.5 rounded-full" style={{ width: '65%' }}></div>
                 </div>
                 <div className="flex justify-between text-[10px] text-text-tertiary font-mono uppercase mb-6">
                   <span>1,650 XP</span>
                   <span>2,500 XP</span>
                 </div>

                 <div className="grid grid-cols-3 gap-2">
                    {['🏆', '💰', '⭐'].map((badge, i) => (
                      <div key={i} className="aspect-square bg-bg-primary/50 rounded-lg flex items-center justify-center text-2xl border border-white/5 hover:border-neon-cyan/50 transition-colors cursor-help" title="Badge unlocked">
                        {badge}
                      </div>
                    ))}
                    <div className="aspect-square bg-bg-primary/30 rounded-lg flex items-center justify-center text-xl border border-white/5 opacity-50">
                       🔒
                    </div>
                 </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
};

export default DashboardPage;
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavItem, PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', type: 'page' }, 
  { id: 'deals', label: 'Deals', type: 'page' },
  { id: 'ai-chat', label: 'AI Chat', type: 'page' },
  { id: 'how-it-works', label: 'How It Works', type: 'page' },
  { id: 'about', label: 'About', type: 'page' },
  { id: 'contact', label: 'Contact', type: 'page' },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.type === 'page') {
      onNavigate(item.id as PageView);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-bg-primary/95 backdrop-blur-md border-neon-cyan/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('about'); }} 
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Zap className="w-6 h-6 text-neon-cyan transition-transform group-hover:scale-110" fill="currentColor" />
            <div className="absolute inset-0 bg-neon-cyan blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
          <span className="font-display font-bold text-2xl tracking-wide text-white">
            DEALHUNTER <span className="text-neon-cyan">AI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === currentView;
              return (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item)}
                    className={`font-mono text-sm font-medium tracking-wider uppercase relative py-2 transition-colors ${
                      isActive ? 'text-neon-cyan' : 'text-text-secondary hover:text-neon-cyan'
                    }`}
                  >
                    {item.label}
                    {/* Active Indicator */}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan shadow-[0_0_10px_#00F0FF] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="font-mono text-sm font-semibold text-neon-cyan uppercase tracking-wider px-6 py-2 border border-neon-cyan rounded hover:bg-neon-cyan/10 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Sign In
            </button>
            <button className="font-mono text-sm font-semibold text-bg-primary uppercase tracking-wider px-6 py-2 bg-neon-cyan rounded hover:bg-[#00FFEE] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-neon-cyan"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-bg-primary/98 backdrop-blur-xl border-b border-neon-cyan/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 min-h-screen">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
               const isActive = item.id === currentView;
               return (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item)}
                    className={`block font-mono text-lg font-medium ${isActive ? 'text-neon-cyan' : 'text-text-secondary'}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button 
              onClick={() => {
                onNavigate('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full font-mono text-sm font-semibold text-neon-cyan uppercase px-6 py-3 border border-neon-cyan rounded"
            >
              Sign In
            </button>
            <button className="w-full font-mono text-sm font-semibold text-bg-primary uppercase px-6 py-3 bg-neon-cyan rounded">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
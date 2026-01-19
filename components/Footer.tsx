import React from 'react';
import { Twitter, Facebook, Linkedin, Youtube, Zap } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Helper to handle click
  const handleNav = (e: React.MouseEvent, view: PageView) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo(0, 0);
    }
  };

  const LEGAL_LINKS = [
    { label: 'Terms of Service', id: '#' }, // Placeholder
    { label: 'Privacy Policy', id: '#' },   // Placeholder
    { label: 'Cookie Policy', id: '#' },    // Placeholder
    { label: 'Affiliate Disclosure', id: 'affiliate-disclosure' },
    { label: 'DMCA', id: 'dmca' }
  ];

  return (
    <footer className="bg-bg-primary border-t border-neon-cyan/20 pt-16 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-neon-cyan" fill="currentColor" />
              <span className="font-display font-bold text-xl text-white">
                DEALHUNTER <span className="text-neon-cyan">AI</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed">
              The smartest way to shop online. Powered by artificial intelligence to find you the best deals across the web in milliseconds.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', id: 'features' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'AI Assistant', id: 'ai-assistant' },
                { label: 'Mobile App', id: 'mobile-app' },
                { label: 'Browser Extension', id: 'extension' }
              ].map(link => (
                <li key={link.id}>
                  <a 
                    href="#" 
                    onClick={(e) => handleNav(e, link.id as PageView)}
                    className="text-text-secondary text-sm hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Contact', id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                   <a 
                    href="#" 
                    onClick={(e) => handleNav(e, link.id as PageView)}
                    className="text-text-secondary text-sm hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-text-secondary text-sm hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-neon-cyan transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(link => (
                <li key={link.id}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      if (link.id !== '#') {
                        handleNav(e, link.id as PageView);
                      }
                    }}
                    className="text-text-secondary text-sm hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-text-tertiary text-sm">
            &copy; 2025 DealHunter AI. All rights reserved. Powered by artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
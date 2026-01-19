import React from 'react';
import ContactForm from './ContactForm';
import { Globe, Clock, ShieldCheck } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-bg-secondary/60 backdrop-blur-xl border border-neon-cyan/20 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="text-neon-purple" /> 
                Global Headquarters
              </h3>
              
              <address className="not-italic text-text-secondary space-y-2 mb-8 font-body">
                <p className="font-medium text-white">DealHunter AI Inc.</p>
                <p>8000 Innovation Drive, Suite 404</p>
                <p>San Francisco, CA 94103</p>
                <p>United States</p>
              </address>

              <div className="w-full h-48 rounded-xl bg-bg-tertiary relative overflow-hidden border border-white/5">
                {/* Abstract Map Representation */}
                <div className="absolute inset-0 opacity-30" 
                     style={{ 
                       backgroundImage: 'radial-gradient(#4A5568 1px, transparent 1px)', 
                       backgroundSize: '20px 20px' 
                     }} 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-4 h-4 bg-neon-cyan rounded-full animate-ping absolute" />
                   <div className="w-4 h-4 bg-neon-cyan rounded-full relative shadow-[0_0_20px_#00F0FF]" />
                </div>
                <div className="absolute bottom-4 left-4 bg-bg-primary/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-neon-cyan border border-neon-cyan/20">
                  SYSTEM ONLINE • 37.7749° N, 122.4194° W
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-bg-secondary/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-neon-magenta/40 transition-colors">
                  <Clock className="w-8 h-8 text-neon-magenta mb-4" />
                  <h4 className="font-display text-lg font-bold text-white mb-2">Support Hours</h4>
                  <p className="text-sm text-text-tertiary">24/7 AI Chat Support<br/>Mon-Fri Human Support</p>
               </div>
               <div className="bg-bg-secondary/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-status-success/40 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-status-success mb-4" />
                  <h4 className="font-display text-lg font-bold text-white mb-2">Data Privacy</h4>
                  <p className="text-sm text-text-tertiary">End-to-end encrypted messaging.</p>
               </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
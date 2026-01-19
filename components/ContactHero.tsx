import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, X, Send, Bot } from 'lucide-react';

const ContactHero: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
      // In a real app, this would send the message
      alert("Demo: Message sent to AI agent!");
    }
  };

  return (
    <section className="relative px-6 py-12 md:py-20 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-white">Let's Start A</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            Conversation
          </span>
        </h1>
        
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Have questions about our AI deal hunting algorithms? Need partnership details? 
          Or just want to report a bug? Our neural networks are listening (and so is our support team).
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {/* Email Button */}
          <a href="mailto:support@dealhunter.ai" className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary border border-white/10 flex items-center justify-center group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
              <Mail className="w-8 h-8 text-neon-cyan" />
            </div>
            <span className="font-mono text-sm text-text-tertiary uppercase tracking-wider group-hover:text-white transition-colors">Email Us</span>
          </a>

          {/* Live Chat Button */}
          <button 
            onClick={() => setIsChatOpen(true)}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-2xl bg-bg-secondary border flex items-center justify-center transition-all duration-300 ${isChatOpen ? 'border-neon-magenta shadow-[0_0_20px_rgba(255,0,229,0.4)]' : 'border-white/10 group-hover:border-neon-magenta/50 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.2)]'}`}>
              <MessageSquare className="w-8 h-8 text-neon-magenta" />
            </div>
            <span className="font-mono text-sm text-text-tertiary uppercase tracking-wider group-hover:text-white transition-colors">Live Chat</span>
          </button>

          {/* HQ Button */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary border border-white/10 flex items-center justify-center group-hover:border-neon-purple/50 group-hover:shadow-[0_0_20px_rgba(180,0,255,0.2)] transition-all duration-300">
              <MapPin className="w-8 h-8 text-neon-purple" />
            </div>
            <span className="font-mono text-sm text-text-tertiary uppercase tracking-wider group-hover:text-white transition-colors">Visit HQ</span>
          </div>
        </div>
      </div>

      {/* Floating Live Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] md:w-96 bg-bg-secondary/95 backdrop-blur-xl border border-neon-magenta/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col overflow-hidden text-left">
            
            {/* Header */}
            <div className="bg-neon-magenta/10 p-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center border border-neon-magenta">
                            <Bot size={20} className="text-neon-magenta" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-status-success rounded-full border-2 border-bg-primary"></div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white leading-tight">DealHunter AI</h3>
                        <p className="text-[10px] font-mono text-neon-magenta uppercase tracking-wider">Online • avg reply &lt; 1s</p>
                    </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)} 
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-text-tertiary hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 h-80 overflow-y-auto space-y-4 bg-bg-primary/50 scrollbar-thin scrollbar-thumb-white/10">
                {/* Bot Message */}
                <div className="flex gap-3 animate-in fade-in slide-in-from-left-4 duration-300">
                     <div className="w-8 h-8 rounded-full bg-bg-secondary border border-white/10 flex items-center justify-center shrink-0 mt-1">
                        <Bot size={14} className="text-neon-magenta" />
                     </div>
                     <div className="bg-bg-secondary border border-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-text-secondary shadow-sm">
                        <p>Hello! I'm your AI concierge. I can help you with:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-text-tertiary">
                          <li>Deal verification status</li>
                          <li>Enterprise API access</li>
                          <li>Account issues</li>
                        </ul>
                     </div>
                </div>
                
                {/* Simulated timestamp */}
                <div className="text-center text-[10px] text-text-muted font-mono uppercase">Today 2:30 PM</div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-bg-secondary/50">
                <form onSubmit={handleSendMessage} className="relative">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..." 
                        className="w-full bg-bg-primary border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-neon-magenta/50 focus:shadow-[0_0_15px_rgba(255,0,229,0.1)] transition-all placeholder:text-text-muted"
                        autoFocus
                    />
                    <button 
                      type="submit"
                      disabled={!message.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon-magenta hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
      )}
    </section>
  );
};

export default ContactHero;
import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, MessageSquare, Headphones, Scale, Target, Lightbulb, 
  Send, Paperclip, Mic, Bot, Share, Trash2, Settings, User, Square, Loader2
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  {
    icon: Headphones,
    title: "FIND PRODUCTS",
    prompt: "Best wireless headphones under $150?",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    border: "border-neon-cyan/30"
  },
  {
    icon: Scale,
    title: "COMPARE",
    prompt: "iPhone 15 vs Samsung Galaxy S24",
    color: "text-neon-magenta",
    bg: "bg-neon-magenta/10",
    border: "border-neon-magenta/30"
  },
  {
    icon: Target,
    title: "TRENDING DEALS",
    prompt: "Best Black Friday deals available now",
    color: "text-status-error",
    bg: "bg-status-error/10",
    border: "border-status-error/30"
  },
  {
    icon: Lightbulb,
    title: "EXPLAIN",
    prompt: "Explain OLED vs QLED TV technology",
    color: "text-neon-purple",
    bg: "bg-neon-purple/10",
    border: "border-neon-purple/30"
  }
];

const HISTORY_GROUPS = [
  {
    label: "TODAY",
    items: [
      "Best wireless headphones under $150?",
      "Compare gaming laptops with RTX 4060"
    ]
  },
  {
    label: "YESTERDAY",
    items: [
      "Budget smartphones with good cameras",
      "Kitchen appliances for small apartments"
    ]
  },
  {
    label: "LAST 7 DAYS",
    items: [
      "4K TV deals for Black Friday",
      "Mechanical keyboards for programming"
    ]
  }
];

// Speech Recognition setup
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const AIChatPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setInput(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    if (isListening) toggleListening();

    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I'm analyzing the latest market data for you. Based on current listings, here is what I found...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-bg-primary overflow-hidden animate-in fade-in duration-500">
      
      {/* Sidebar */}
      <aside className="w-80 bg-bg-secondary/30 border-r border-white/5 flex flex-col hidden lg:flex">
        
        {/* New Chat Button */}
        <div className="p-4">
          <button 
            onClick={() => setMessages([])}
            className="w-full flex items-center justify-center gap-2 bg-neon-cyan text-bg-primary font-bold py-3 rounded-lg hover:bg-[#00FFEE] transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <Plus size={20} /> NEW CHAT
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
          {HISTORY_GROUPS.map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-3 pl-2">
                {group.label}
              </h3>
              <div className="space-y-1">
                {group.items.map((item, j) => (
                  <button 
                    key={j}
                    className="w-full text-left p-3 rounded-lg text-sm text-text-secondary hover:bg-white/5 hover:text-white transition-colors truncate border border-transparent hover:border-white/5"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile Snippet */}
        <div className="p-4 border-t border-white/5 bg-bg-secondary/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-bg-primary font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white text-sm truncate">John Doe</div>
              <div className="text-xs text-neon-cyan truncate">Pro Hunter</div>
            </div>
            <button className="text-text-tertiary hover:text-white transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        
        {/* Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-bg-primary/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(180,0,255,0.3)]">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-lg leading-none">AI SHOPPING ASSISTANT</h2>
              <p className="text-[10px] text-text-tertiary font-mono">Powered by Neural Engine v4.2</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-text-tertiary hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition-colors">
              <Share size={18} />
            </button>
            <button className="p-2 text-text-tertiary hover:text-status-error hover:bg-status-error/10 rounded-lg transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        </header>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
          {messages.length === 0 ? (
            /* Welcome / Empty State */
            <div className="h-full flex flex-col items-center justify-center max-w-4xl mx-auto animate-in zoom-in-95 duration-500">
              
              <div className="w-24 h-24 rounded-3xl bg-bg-secondary border border-white/10 flex items-center justify-center mb-8 relative shadow-[0_0_40px_rgba(0,240,255,0.1)]">
                 <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-3xl animate-pulse" />
                 <Bot size={48} className="text-white relative z-10" />
                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-status-success rounded-full border-4 border-bg-primary" />
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-4 text-center">
                HI, I'M YOUR AI SHOPPING ASSISTANT!
              </h1>
              
              <p className="text-text-secondary text-center max-w-2xl mb-12 text-lg">
                I can help you find the best deals, compare products, answer questions about features, and provide personalized recommendations based on your needs and budget.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                {SUGGESTIONS.map((card, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(card.prompt)}
                    className={`p-6 rounded-xl border ${card.border} bg-bg-secondary/40 hover:bg-bg-secondary/80 transition-all text-left group hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <card.icon className={card.color} size={20} />
                    </div>
                    <div className={`font-mono text-xs font-bold ${card.color} mb-1 uppercase tracking-wider`}>
                      {card.title}
                    </div>
                    <div className="text-text-secondary text-sm group-hover:text-white transition-colors">
                      {card.prompt}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Chat History */
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0 mt-1">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-neon-cyan/10 border border-neon-cyan/30 text-white rounded-tr-sm' 
                        : 'bg-bg-secondary border border-white/10 text-text-secondary rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center shrink-0 mt-1">
                      <User size={16} className="text-text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0 mt-1">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-bg-secondary border border-white/10 p-4 rounded-2xl rounded-tl-sm">
                       <div className="flex gap-1">
                          <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                       </div>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 pt-2">
          <div className="max-w-4xl mx-auto relative group">
             {/* Glow effect on focus */}
             <div className={`absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-2xl opacity-20 transition-opacity duration-300 blur-sm ${isListening ? 'opacity-100 animate-pulse' : 'group-focus-within:opacity-100'}`} />
             
             <div className="relative bg-bg-primary rounded-2xl flex items-center gap-2 p-2 border border-white/10">
                <button className="p-2 text-text-tertiary hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  <Paperclip size={20} />
                </button>
                
                <div className="flex-1 relative flex items-center">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isListening ? "Listening... Speak now" : "Ask me anything about deals and products..."}
                    rows={1}
                    className={`w-full bg-transparent border-none text-white placeholder:text-text-muted focus:ring-0 resize-none py-3 max-h-32 scrollbar-none transition-all ${isListening ? 'placeholder:text-status-error/70 font-medium' : ''}`}
                  />
                  {isListening && (
                    <div className="absolute right-0 flex items-center gap-1.5 px-3">
                       <div className="h-3 w-0.5 bg-status-error animate-[pulse_1s_ease-in-out_infinite]" />
                       <div className="h-5 w-0.5 bg-status-error animate-[pulse_0.8s_ease-in-out_infinite]" />
                       <div className="h-2 w-0.5 bg-status-error animate-[pulse_1.2s_ease-in-out_infinite]" />
                    </div>
                  )}
                </div>

                <button 
                  onClick={toggleListening}
                  className={`p-2 transition-all duration-300 rounded-lg flex items-center justify-center relative ${
                    isListening 
                    ? 'bg-status-error text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]' 
                    : 'text-text-tertiary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isListening ? (
                    <>
                      <Square size={20} fill="currentColor" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
                    </>
                  ) : (
                    <Mic size={20} />
                  )}
                </button>
                
                <button 
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isListening}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    input.trim() && !isListening
                      ? 'bg-neon-cyan text-bg-primary hover:shadow-[0_0_15px_#00F0FF]' 
                      : 'bg-white/5 text-text-muted cursor-not-allowed'
                  }`}
                >
                  <Send size={20} />
                </button>
             </div>
          </div>
          <div className="text-center mt-3 text-[10px] font-mono text-text-muted">
            {isListening ? (
              <span className="text-status-error animate-pulse">RECORDING IN PROGRESS • CLICK STOP BUTTON TO FINISH</span>
            ) : (
              "Press Enter to send • Shift + Enter for new line"
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default AIChatPage;
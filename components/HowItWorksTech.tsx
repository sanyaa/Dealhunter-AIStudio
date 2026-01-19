import React from 'react';
import { Database, Shield, Zap, Lock, Code2, Server } from 'lucide-react';

const TECH_STACK = [
  { icon: Database, label: "Vector Database", value: "Pinecone" },
  { icon: Code2, label: "LLM Framework", value: "TensorFlow" },
  { icon: Server, label: "Edge Network", value: "Cloudflare" },
  { icon: Shield, label: "Bot Protection", value: "Enterprise" },
  { icon: Lock, label: "Encryption", value: "AES-256" },
  { icon: Zap, label: "Event Bus", value: "Kafka" },
];

const HowItWorksTech: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-bg-secondary/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-text-secondary">Built on modern infrastructure for scale and speed.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECH_STACK.map((tech, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/5 bg-bg-primary/50 hover:border-neon-cyan/30 transition-all group text-center">
              <tech.icon className="w-8 h-8 text-text-tertiary mx-auto mb-3 group-hover:text-neon-cyan transition-colors" />
              <div className="font-display font-bold text-white">{tech.value}</div>
              <div className="font-mono text-xs text-text-muted mt-1">{tech.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTech;
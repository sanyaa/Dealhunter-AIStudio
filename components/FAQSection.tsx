import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: "What makes DealHunter's AI different from standard scrapers?",
    answer: "Unlike basic scrapers, our Neural Deal Engine™ understands context, sentiment, and historical pricing trends. It verifies deal authenticity in real-time and predicts sell-out risks with 94% accuracy."
  },
  {
    question: "Do you offer an API for enterprise integration?",
    answer: "Yes, we offer a robust REST and GraphQL API for enterprise partners. Please select 'Sales & Enterprise' in the contact form above to request documentation and pricing."
  },
  {
    question: "How quickly does support respond?",
    answer: "Our AI triage system processes tickets instantly. Human agents typically resolve complex inquiries within 2-4 hours during business days."
  },
  {
    question: "Can I request a new retailer to be added?",
    answer: "Absolutely. We are constantly expanding our neural network. Drop us a message with the retailer URL and our system will begin learning its structure."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 bg-bg-secondary/30 border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-text-secondary mb-12">Common inquiries about our platform and services.</p>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`group border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-bg-secondary border-neon-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                    : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-display font-semibold text-lg transition-colors ${
                    isOpen ? 'text-neon-cyan' : 'text-white group-hover:text-neon-cyan'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full border transition-all ${
                     isOpen 
                       ? 'bg-neon-cyan text-bg-primary border-neon-cyan rotate-180' 
                       : 'border-white/20 text-text-secondary group-hover:border-neon-cyan group-hover:text-neon-cyan'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-text-secondary font-body leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
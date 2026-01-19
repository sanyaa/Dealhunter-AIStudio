import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData, FormStatus } from '../types';

const INITIAL_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData(INITIAL_DATA);
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
    }, 2000);
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-bg-secondary/60 backdrop-blur-xl border border-status-success/30 rounded-3xl p-12 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 rounded-full bg-status-success/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-status-success" />
        </div>
        <h3 className="font-display text-3xl font-bold text-white mb-4">Message Transmitted</h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Our AI agents have received your signal. Expect a response within the next 24 business cycles.
        </p>
        <button 
          onClick={() => setStatus(FormStatus.IDLE)}
          className="mt-8 font-mono text-sm text-status-success hover:text-white transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-bg-secondary/60 backdrop-blur-xl border border-neon-cyan/20 rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <h2 className="font-display text-3xl font-bold text-white mb-2">Send a Message</h2>
        <p className="text-text-secondary mb-8">Fill out the form below and we'll get back to you asap.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name & Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label 
                htmlFor="name" 
                className={`block font-mono text-xs uppercase tracking-wider mb-2 transition-colors ${
                  focusedField === 'name' ? 'text-neon-cyan' : 'text-text-tertiary'
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all placeholder:text-text-muted"
                placeholder="John Doe"
              />
            </div>

            <div className="group">
              <label 
                htmlFor="email" 
                className={`block font-mono text-xs uppercase tracking-wider mb-2 transition-colors ${
                  focusedField === 'email' ? 'text-neon-cyan' : 'text-text-tertiary'
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all placeholder:text-text-muted"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Subject Select */}
          <div className="group">
            <label 
              htmlFor="subject" 
              className={`block font-mono text-xs uppercase tracking-wider mb-2 transition-colors ${
                focusedField === 'subject' ? 'text-neon-cyan' : 'text-text-tertiary'
              }`}
            >
              Subject
            </label>
            <div className="relative">
              <select
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-text-muted">Select a topic...</option>
                <option value="support" className="bg-bg-primary">Technical Support</option>
                <option value="sales" className="bg-bg-primary">Sales & Enterprise</option>
                <option value="partnership" className="bg-bg-primary">Partnership Inquiry</option>
                <option value="press" className="bg-bg-primary">Press & Media</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-tertiary">
                ▼
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div className="group">
            <label 
              htmlFor="message" 
              className={`block font-mono text-xs uppercase tracking-wider mb-2 transition-colors ${
                focusedField === 'message' ? 'text-neon-cyan' : 'text-text-tertiary'
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all placeholder:text-text-muted resize-none"
              placeholder="Tell us how we can help..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === FormStatus.SUBMITTING}
            className="w-full group relative overflow-hidden bg-neon-cyan text-bg-primary font-display font-bold text-lg uppercase tracking-wider py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center justify-center gap-2">
              {status === FormStatus.SUBMITTING ? (
                <>
                  <Loader2 className="animate-spin" /> Transmitting...
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
          </button>

          {status === FormStatus.ERROR && (
             <div className="flex items-center gap-2 text-status-error text-sm mt-4 bg-status-error/10 p-3 rounded-lg border border-status-error/20">
                <AlertCircle size={16} />
                <span>Failed to send message. Please try again later.</span>
             </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default ContactForm;
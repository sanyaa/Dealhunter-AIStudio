export type PageView = 'home' | 'about' | 'contact' | 'deals' | 'how-it-works' | 'features' | 'pricing' | 'ai-assistant' | 'mobile-app' | 'extension' | 'affiliate-disclosure' | 'dmca' | 'deal-detail' | 'dashboard' | 'ai-chat';

export interface NavItem {
  id: PageView | string;
  label: string;
  href?: string; // For external links or unused links
  type: 'page' | 'link';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface Deal {
  id: string;
  title: string;
  retailer: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  aiScore: number;
  category: string;
  trend: 'up' | 'down' | 'stable';
  image: string;
  description?: string;
  specifications?: Record<string, string>;
  priceHistory?: { date: string; price: number }[];
  retailers?: { name: string; price: number; inStock: boolean }[];
  rating?: number;
  reviewsCount?: number;
}
export type EventType = 
  | 'Congressos & Feiras'
  | 'Treinamento Corporativo / Workshop'
  | 'Talk Show & Palestras'
  | 'Encontro Empresarial & Rodada de Negócios'
  | 'Confraternização Corporativa'
  | 'Outro Formato';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge: string;
  features: string[];
  deliverables: string[];
  image: string;
}

export interface PortfolioCase {
  id: string;
  title: string;
  category: string;
  edition?: string;
  location: string;
  participants: string;
  description: string;
  highlights: string[];
  image: string;
  secondaryImages?: string[];
  videoTag?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  event: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BudgetFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  eventType: EventType;
  guestCount: string;
  dateEstimate: string;
  location: string;
  servicesNeeded: string[];
  notes: string;
}

export interface LeadRecord extends BudgetFormData {
  id: string;
  createdAt: string;
  formattedWhatsAppUrl: string;
}

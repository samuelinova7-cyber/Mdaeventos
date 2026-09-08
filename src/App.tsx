import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BudgetGeneratorSection } from './components/BudgetGeneratorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { BRAND_INFO } from './data/content';

export default function App() {
  const [whatsappPhone, setWhatsappPhone] = useState<string>(BRAND_INFO.phone);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const scrollToBudget = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* Header */}
      <Header
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />

      {/* Social Proof & Authority Numbers */}
      <SocialProofSection />

      {/* Services Section */}
      <ServicesSection
        onSelectServiceForBudget={(title) => scrollToBudget(title)}
        whatsappPhone={whatsappPhone}
      />

      {/* Portfolio & Cases (Conecta Contábil, EduConecta, L.I.V.R.E. Talks) */}
      <PortfolioSection
        whatsappPhone={whatsappPhone}
      />

      {/* Why Choose MDE Eventos / Metodologia */}
      <WhyChooseUs />

      {/* Interactive Budget Generator (Lead Generator to WhatsApp) */}
      <BudgetGeneratorSection
        whatsappPhone={whatsappPhone}
        onUpdatePhone={(newPhone) => setWhatsappPhone(newPhone)}
        preselectedService={preselectedService}
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection
        whatsappPhone={whatsappPhone}
      />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp
        whatsappPhone={whatsappPhone}
        onOpenBudget={() => scrollToBudget()}
      />

      {/* Footer */}
      <Footer
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />
    </div>
  );
}

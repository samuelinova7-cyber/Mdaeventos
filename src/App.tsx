import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FoundersSection } from './components/FoundersSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BudgetGeneratorSection } from './components/BudgetGeneratorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveNotificationToasts } from './components/LiveNotificationToasts';
import { FloatingParticles } from './components/FloatingParticles';
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
    <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden relative">
      {/* Flying Glowing Particles Background */}
      <FloatingParticles />

      {/* Header with Announcement Ticker & Glowing Logo */}
      <Header
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />

      {/* Instagram Reels Section - DIRECTLY BELOW HERO SECTION (Side-by-side with horizontal drag, autoplay muted, with sound toggle) */}
      <InstagramReelsSection />

      {/* Social Proof & Authority Numbers (+20 Anos de Mercado & Clientes em Destaque CREMAL / Arcos) */}
      <SocialProofSection />

      {/* Founders Section (Sócias Fundadoras em Escala Total & Podcast em 9:16) */}
      <FoundersSection
        whatsappPhone={whatsappPhone}
        onOpenBudget={() => scrollToBudget()}
      />

      {/* Services Section with Solutions Video in 9:16, Secretariado, Estrutura, Cerimonial & Objetivos */}
      <ServicesSection
        onSelectServiceForBudget={(title) => scrollToBudget(title)}
        whatsappPhone={whatsappPhone}
      />

      {/* Portfolio & Cases (Dia do Médico CREMAL, Arcos Odontologia, Conecta Contábil, EduConecta) */}
      <PortfolioSection
        whatsappPhone={whatsappPhone}
      />

      {/* Why Choose MDE Eventos / Metodologia */}
      <WhyChooseUs />

      {/* Interactive Budget Generator (Lead Generator to WhatsApp with Shining Budget Image) */}
      <BudgetGeneratorSection
        whatsappPhone={whatsappPhone}
        onUpdatePhone={(newPhone) => setWhatsappPhone(newPhone)}
        preselectedService={preselectedService}
      />

      {/* Testimonials & Shining Review Image (Avaliar o Serviço) */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection
        whatsappPhone={whatsappPhone}
      />

      {/* Live Positive Reviews and Budget Toast Notifications with Sound */}
      <LiveNotificationToasts
        onOpenBudget={() => scrollToBudget()}
      />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp
        whatsappPhone={whatsappPhone}
        onOpenBudget={() => scrollToBudget()}
      />

      {/* Footer with Glowing Official Logo */}
      <Footer
        onOpenBudget={() => scrollToBudget()}
        whatsappPhone={whatsappPhone}
      />
    </div>
  );
}

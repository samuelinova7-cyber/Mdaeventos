import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  pt: {
    // Header & Global
    'nav.reviews': 'Avaliações',
    'nav.budget': 'Orçamento',
    'nav.reels': 'Reels',
    'nav.founders': 'Sócias',
    'nav.solutions': 'Soluções',
    'nav.cases': 'Cases',
    'nav.faq': 'Dúvidas',
    'nav.cta': 'Solicitar Orçamento',
    'header.badge': 'AL',
    'header.subtitle': 'Planejamento & Produção de Eventos',
    'header.motto': '"Cada evento tem um propósito"',
    'announcement.text': '⭐ Especialistas em Feiras, Congressos e Grandes Encontros Corporativos em Alagoas e no Brasil • Mais de 20 anos de experiência • Solicite sua Proposta Personalizada',
    'announcement.cta': 'Pedir Orçamento',
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Escuro',
    'audio.soundOn': 'Som Ligado',
    'audio.soundOff': 'Sem Som',

    // Hero Section
    'hero.badge': 'Planejamento & Execução 360° em Alagoas e no Brasil',
    'hero.title.part1': 'Transforme o Evento da sua Empresa em uma',
    'hero.title.gradient': 'Experiência Memorável',
    'hero.title.part2': 'e Estratégica.',
    'hero.subtitle': 'Organização, planejamento e execução completa de feiras de negócios, congressos, simpósios, convenções e encontros empresariais com mais de 20 anos de tradição.',
    'hero.bullet1': '+20 Anos de Mercado e Tradição',
    'hero.bullet2': 'Gestão Direta pelas Sócias Fundadoras',
    'hero.bullet3': 'Metodologia com Foco em Resultados',
    'hero.cta.primary': 'Falar com a Especialista no WhatsApp',
    'hero.cta.secondary': 'Simular Orçamento Online',
    'hero.leadBadge': 'Proposta rápida em menos de 15 minutos pelo WhatsApp',
    'hero.quickPrompt.title': 'Quer tirar uma dúvida rápida?',
    'hero.quickPrompt.inputPlaceholder': 'Ex: Quero fazer um congresso para 300 pessoas...',
    'hero.quickPrompt.send': 'Enviar',

    // Instagram Reels
    'reels.badge': 'Reels em Alta • Reprodução Automática Sem Som',
    'reels.title': 'Bastidores & Eventos em Formato Reels',
    'reels.swipe': 'Deslize para o lado',
    'reels.autoScroll': 'Rolagem Automática Ativa',
    'reels.profileBio': 'Organização & Planejamento de Eventos Corporativos em Alagoas e no Brasil',
    'reels.profileFollow': 'Seguir @mde.eventos no Instagram',
    'reels.livePlaying': '● Reproduzindo sem som',
    'reels.soundOn': 'Com Som',
    'reels.soundOff': 'Sem Som',
    'reels.follow': 'Seguir',
    'reels.audioOriginal': 'Áudio original • MDE Eventos Oficial',

    // Budget Generator
    'budget.badge': 'Simulador Rápido de Orçamento',
    'budget.title': 'Descubra a Estimativa Ideal para o Seu Evento',
    'budget.subtitle': 'Preencha os dados em 1 minuto e receba uma proposta estruturada e personalizada diretamente com nossas fundadoras pelo WhatsApp.',
    'budget.imageBadge': '★ Proposta Personalizada Sem Compromisso',
    'budget.imageSub': 'Planejamento completo de acordo com o porte do seu evento e orçamento disponível.',
    'budget.form.eventName': 'Nome ou Tema do Evento',
    'budget.form.eventNamePlaceholder': 'Ex: 1º Fórum de Liderança e Negócios',
    'budget.form.eventType': 'Tipo de Evento',
    'budget.form.guests': 'Quantidade Estimada de Participantes',
    'budget.form.city': 'Cidade / Local Previsto',
    'budget.form.cityPlaceholder': 'Ex: Maceió - AL ou Centro de Convenções',
    'budget.form.date': 'Data Prevista ou Mês',
    'budget.form.datePlaceholder': 'Ex: Novembro / 2026',
    'budget.form.needs': 'Serviços Necessários (Selecione todos que precisa)',
    'budget.form.contactName': 'Seu Nome ou Empresa',
    'budget.form.contactNamePlaceholder': 'Ex: Dra. Mariana Costa / Grupo Alfa',
    'budget.form.contactPhone': 'Seu WhatsApp de Contato',
    'budget.form.contactPhonePlaceholder': '(82) 99999-9999',
    'budget.form.notes': 'Observações Adicionais (opcional)',
    'budget.form.notesPlaceholder': 'Conte mais sobre suas expectativas ou fornecedores desejados...',
    'budget.form.submit': 'Gerar Proposta e Enviar no WhatsApp',
    'budget.securityNote': 'Seus dados são 100% confidenciais. Retorno em até 15 minutos em horário comercial.',

    // Testimonials
    'testimonials.badge': 'Prova Social & Satisfação de Clientes',
    'testimonials.title': 'O que Dizem Quem Já Realizou Eventos Conosco',
    'testimonials.subtitle': 'Confira os depoimentos de contratantes, congressistas e parceiros institucionais sobre o rigor e excelência da MDE.',
    'testimonials.imageBadge': '★ Compromisso e Credibilidade Comprovados',
    'testimonials.imageSub': 'Avaliação média de 5.0 estrelas em dezenas de eventos corporativos e institucionais.',
    'testimonials.ctaReview': 'Avaliar o Serviço da MDE',
    'testimonials.modal.title': 'Deixe sua Avaliação sobre a MDE Eventos',
    'testimonials.modal.subtitle': 'Sua opinião é fundamental para nosso contínuo aperfeiçoamento.',
    'testimonials.modal.name': 'Seu Nome e Cargo',
    'testimonials.modal.company': 'Empresa / Instituição',
    'testimonials.modal.event': 'Qual evento participou ou contratou?',
    'testimonials.modal.rating': 'Sua Nota',
    'testimonials.modal.comment': 'Seu Depoimento',
    'testimonials.modal.submit': 'Enviar Avaliação',

    // Social Proof
    'proof.badge': 'Autoridade & Histórico Comprovado',
    'proof.title': 'Números que Consolidam Nossa Liderança em Alagoas',
    'proof.stat1.val': '+20',
    'proof.stat1.label': 'Anos de Atuação no Mercado',
    'proof.stat1.desc': 'Tradição sólida e confiança no setor corporativo',
    'proof.stat2.val': '+350',
    'proof.stat2.label': 'Eventos Corporativos Realizados',
    'proof.stat2.desc': 'Feiras, congressos, simpósios e solenidades',
    'proof.stat3.val': '+120k',
    'proof.stat3.label': 'Participantes Conectados',
    'proof.stat3.desc': 'Público qualificado, tomadores de decisão e congressistas',
    'proof.stat4.val': '100%',
    'proof.stat4.label': 'Eventos Entregues com Rigor',
    'proof.stat4.desc': 'Pontualidade, protocolo e satisfação do cliente',
    'proof.clientsTitle': 'Parcerias e Clientes Institucionais de Destaque',

    // Founders Section
    'founders.badge': '+20 Anos de Mercado',
    'founders.title.part1': 'As Sócias Fundadoras da',
    'founders.title.brand': 'MDE Eventos',
    'founders.subtitle': 'Mais de duas décadas realizando eventos corporativos de sucesso em Alagoas e em vários estados do Brasil.',
    'founders.mission.title': 'Nossa Missão',
    'founders.purpose.title': 'Nosso Propósito',
    'founders.card.title': 'Sócias Fundadoras • MDE Eventos',
    'founders.card.sub': 'Eventos, Marketing & Soluções Empresariais • +20 Anos de Sucesso',
    'founders.story.badge': 'Experiência Real & Conexões Corporativas',
    'founders.story.heading': 'Uma abordagem consultiva que transforma expectativas em marcos históricos para sua empresa.',
    'founders.story.p1': 'À frente dos maiores congressos e encontros empresariais do estado, as fundadoras da MDE Eventos unem metodologia com controle de resultados, gestão de palestrantes e uma equipe experiente de secretariado e cerimonial.',
    'founders.check1': 'Gestão direta pelas fundadoras',
    'founders.check2': 'Mais de 20 anos de atuação',
    'founders.check3': 'Atendimento em AL e em todo o Brasil',
    'founders.check4': 'Supervisão rigorosa de ponta a ponta',
    'founders.podcast.title': 'As Sócias no Podcast (Vídeo Vertical)',
    'founders.podcast.sub': 'Entrevista e visão estratégica sobre a execução de eventos memoráveis',
    'founders.cta.whatsapp': 'Conversar com as Sócias no WhatsApp',
    'founders.cta.budget': 'Solicitar Proposta',

    // Services Section
    'services.badge': 'Soluções Estratégicas',
    'services.title': 'Serviços Especializados para o Sucesso do Seu Evento',
    'services.subtitle': 'Secretariado profissional, infraestrutura completa, cerimonial e controle de resultados com metodologia validada em mais de 20 anos de mercado.',
    'services.video.badge': 'Vídeo Oficial de Soluções',
    'services.video.title': 'Como a MDE Conecta sua Marca a Experiências Inesquecíveis',
    'services.video.desc': 'Assista ao vídeo em formato vertical e entenda como nossa metodologia integra credenciamento ágil com QR Code, montagem estrutural impecável, captação de patrocinadores e gestão integral com mais de 20 anos de tradição.',
    'services.video.check1': 'Convidar e engajar leads qualificados para conhecer seus produtos',
    'services.video.check2': 'Supervisão e contratação de fornecedores homologados',
    'services.video.check3': 'Acompanhamento operacional contínuo no local e no pós-evento',
    'services.video.cta': 'Solicitar Proposta para Este Formato',
    'services.pillars.title': 'Pilares de Execução Impecável',
    'services.pillars.sub': 'Três frentes integradas para garantir conforto ao cliente e aos congressistas',
    'services.viewDetails': 'Ver Detalhes do Serviço',

    // Portfolio Section
    'portfolio.badge': 'Cases de Sucesso & Projetos Reais',
    'portfolio.title': 'Eventos que Marcaram Alagoas',
    'portfolio.subtitle': 'Explore alguns dos grandes congressos e eventos institucionais planejados e executados pela MDE Eventos.',
    'portfolio.filter.all': 'Todos os Cases',
    'portfolio.filter.congress': 'Congressos & Fóruns',
    'portfolio.filter.fairs': 'Feiras & Negócios',
    'portfolio.filter.institutional': 'Institucionais',
    'portfolio.viewCase': 'Ver Detalhes do Case',

    // Why Choose Us
    'why.badge': 'Diferenciais Exclusivos',
    'why.title': 'Por que Grandes Empresas Escolhem a MDE Eventos?',
    'why.subtitle': 'Trabalhamos para que você, organizador, desfrute do evento com total tranquilidade enquanto nossa equipe cuida de cada detalhe.',
    'why.pillar1.title': 'Assessoria 360° sem Estresse',
    'why.pillar1.desc': 'Cuidamos do orçamento, fornecedores, contratos, montagem e pós-evento para que sua diretoria foque apenas nos convidados.',
    'why.pillar2.title': 'Controle Rigoroso de Prazos & Orçamento',
    'why.pillar2.desc': 'Transparência total nos custos com negociação direta de fornecedores homologados e garantia do melhor custo-benefício.',
    'why.pillar3.title': 'Tecnologia de Credenciamento Rápido',
    'why.pillar3.desc': 'Filas zeradas através de totens ágeis, leitura por QR Code e integração digital para eventos modernos.',
    'why.pillar4.title': 'Mais de 20 Anos de Reputação Impecável',
    'why.pillar4.desc': 'Histórico sólido nos principais centros de convenções de Alagoas e experiência em congressos nacionais.',

    // FAQ Section
    'faq.badge': 'Dúvidas Frequentes',
    'faq.title': 'Perguntas e Respostas sobre Nossos Serviços',
    'faq.subtitle': 'Tudo o que você precisa saber para planejar seu evento corporativo com a MDE Eventos.',
    'faq.stillQuestions': 'Ainda tem dúvidas sobre o seu evento específico?',
    'faq.talkWhatsApp': 'Falar Diretamente no WhatsApp',

    // Floating WhatsApp & Toasts
    'floating.btn': 'Falar no WhatsApp',
    'floating.tooltip': 'Atendimento rápido com as fundadoras',
    'toast.recentBudget': 'Novo orçamento solicitado!',
    'toast.newReview': 'Nova avaliação 5 estrelas recebida!',

    // Footer
    'footer.description': 'Planejamento e produção de eventos corporativos e institucionais. Conectar pessoas, empresas e oportunidades com mais de 20 anos de experiência.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contact': 'Contato & Localização',
    'footer.rights': 'Todos os direitos reservados.',
  },

  en: {
    // Header & Global
    'nav.reviews': 'Reviews',
    'nav.budget': 'Quote',
    'nav.reels': 'Reels',
    'nav.founders': 'Founders',
    'nav.solutions': 'Solutions',
    'nav.cases': 'Cases',
    'nav.faq': 'FAQ',
    'nav.cta': 'Request a Quote',
    'header.badge': 'BR',
    'header.subtitle': 'Corporate Event Planning & Production',
    'header.motto': '"Every event has a purpose"',
    'announcement.text': '⭐ Specialists in Corporate Trade Fairs, Congresses and Conferences in Brazil • Over 20 Years of Experience • Request your Custom Proposal',
    'announcement.cta': 'Request Quote',
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'audio.soundOn': 'Sound On',
    'audio.soundOff': 'Muted',

    // Hero Section
    'hero.badge': '360° Event Planning & Execution in Brazil',
    'hero.title.part1': 'Transform Your Company Event into a',
    'hero.title.gradient': 'Memorable & Strategic',
    'hero.title.part2': 'Experience.',
    'hero.subtitle': 'Turnkey planning, coordination, and production of trade fairs, conferences, symposiums, and corporate summits with more than 20 years of proven tradition.',
    'hero.bullet1': '+20 Years in the Market & Industry Tradition',
    'hero.bullet2': 'Direct Leadership by Founding Partners',
    'hero.bullet3': 'Results-Driven Methodology & ROI',
    'hero.cta.primary': 'Chat with our Specialist on WhatsApp',
    'hero.cta.secondary': 'Simulate Online Budget',
    'hero.leadBadge': 'Fast proposal within 15 minutes on WhatsApp',
    'hero.quickPrompt.title': 'Have a quick question about your event?',
    'hero.quickPrompt.inputPlaceholder': 'E.g., I want to plan a conference for 300 guests...',
    'hero.quickPrompt.send': 'Send',

    // Instagram Reels
    'reels.badge': 'Trending Reels • Auto-Playing Silently',
    'reels.title': 'Behind the Scenes & Live Event Reels',
    'reels.swipe': 'Swipe sideways',
    'reels.autoScroll': 'Auto-Scroll Active',
    'reels.profileBio': 'Planning & Production of Corporate Events in Alagoas and Brazil',
    'reels.profileFollow': 'Follow @mde.eventos on Instagram',
    'reels.livePlaying': '● Playing silently',
    'reels.soundOn': 'Sound On',
    'reels.soundOff': 'Muted',
    'reels.follow': 'Follow',
    'reels.audioOriginal': 'Original audio • Official MDE Eventos',

    // Budget Generator
    'budget.badge': 'Fast Budget Simulator',
    'budget.title': 'Discover the Ideal Estimate for Your Event',
    'budget.subtitle': 'Fill out the details in 1 minute and get a structured, personalized proposal directly from our founders via WhatsApp.',
    'budget.imageBadge': '★ Free Customized Proposal Without Commitment',
    'budget.imageSub': 'Complete planning customized to your event scale and available budget.',
    'budget.form.eventName': 'Event Name or Topic',
    'budget.form.eventNamePlaceholder': 'E.g., 1st Annual Leadership & Business Forum',
    'budget.form.eventType': 'Event Type',
    'budget.form.guests': 'Estimated Number of Attendees',
    'budget.form.city': 'City / Anticipated Venue',
    'budget.form.cityPlaceholder': 'E.g., Convention Center, Maceió - AL',
    'budget.form.date': 'Planned Date or Target Month',
    'budget.form.datePlaceholder': 'E.g., November / 2026',
    'budget.form.needs': 'Required Services (Select all that apply)',
    'budget.form.contactName': 'Your Name or Company',
    'budget.form.contactNamePlaceholder': 'E.g., Dr. Mariana Costa / Alfa Group',
    'budget.form.contactPhone': 'Your WhatsApp Phone Number',
    'budget.form.contactPhonePlaceholder': '+1 (555) 000-0000',
    'budget.form.notes': 'Additional Notes (Optional)',
    'budget.form.notesPlaceholder': 'Tell us about your expectations or desired suppliers...',
    'budget.form.submit': 'Generate Proposal & Send via WhatsApp',
    'budget.securityNote': 'Your data is 100% confidential. Quick response within 15 minutes during business hours.',

    // Testimonials
    'testimonials.badge': 'Social Proof & Client Satisfaction',
    'testimonials.title': 'What Corporate Clients Say About Us',
    'testimonials.subtitle': 'Read genuine feedback from organizers, attendees, and institutional partners regarding MDE precision and excellence.',
    'testimonials.imageBadge': '★ Proven Credibility & Track Record',
    'testimonials.imageSub': '5.0 average star rating across dozens of corporate and institutional events.',
    'testimonials.ctaReview': 'Leave a Review for MDE',
    'testimonials.modal.title': 'Leave Your Review for MDE Eventos',
    'testimonials.modal.subtitle': 'Your feedback is essential for our continuous enhancement.',
    'testimonials.modal.name': 'Your Name & Title',
    'testimonials.modal.company': 'Company / Institution',
    'testimonials.modal.event': 'Which event did you attend or hire us for?',
    'testimonials.modal.rating': 'Your Rating',
    'testimonials.modal.comment': 'Your Review',
    'testimonials.modal.submit': 'Submit Review',

    // Social Proof
    'proof.badge': 'Proven Authority & Track Record',
    'proof.title': 'Numbers That Affirm Our Industry Leadership',
    'proof.stat1.val': '+20',
    'proof.stat1.label': 'Years Operating in the Industry',
    'proof.stat1.desc': 'Solid tradition and trusted corporate standing',
    'proof.stat2.val': '+350',
    'proof.stat2.label': 'Corporate Events Successfully Delivered',
    'proof.stat2.desc': 'Expos, congresses, symposiums, and ceremonies',
    'proof.stat3.val': '+120k',
    'proof.stat3.label': 'Connected Participants',
    'proof.stat3.desc': 'High-profile audience, decision makers and delegates',
    'proof.stat4.val': '100%',
    'proof.stat4.label': 'Events Delivered with Flawless Rigor',
    'proof.stat4.desc': 'Punctuality, strict protocol and client satisfaction',
    'proof.clientsTitle': 'Featured Institutional Partnerships and Clients',

    // Founders Section
    'founders.badge': '+20 Years in the Market',
    'founders.title.part1': 'The Founding Partners of',
    'founders.title.brand': 'MDE Eventos',
    'founders.subtitle': 'Over two decades producing landmark corporate events in Alagoas and throughout Brazil.',
    'founders.mission.title': 'Our Mission',
    'founders.purpose.title': 'Our Purpose',
    'founders.card.title': 'Founding Partners • MDE Eventos',
    'founders.card.sub': 'Events, Marketing & Business Solutions • +20 Years of Success',
    'founders.story.badge': 'Real Experience & Corporate Connections',
    'founders.story.heading': 'A consultative approach transforming corporate expectations into enduring milestones.',
    'founders.story.p1': 'Leading the state’s largest conferences and summits, MDE Eventos founders merge rigorous execution with KPI tracking, speaker management, and an experienced protocol and secretariat team.',
    'founders.check1': 'Direct partner-level governance',
    'founders.check2': 'Over 20 years of seasoned track record',
    'founders.check3': 'Local & nationwide service reach',
    'founders.check4': 'End-to-end meticulous supervision',
    'founders.podcast.title': 'Founders on the Podcast (Vertical Video)',
    'founders.podcast.sub': 'Interview and strategic insights into executing memorable events',
    'founders.cta.whatsapp': 'Chat with the Founders on WhatsApp',
    'founders.cta.budget': 'Request a Proposal',

    // Services Section
    'services.badge': 'Strategic Solutions',
    'services.title': 'Specialized Services for Flawless Event Success',
    'services.subtitle': 'Professional secretariat, full-scale infrastructure, ceremonial direction, and KPI control with methodology proven across 20+ years.',
    'services.video.badge': 'Official Solutions Showcase',
    'services.video.title': 'How MDE Connects Your Brand to Unforgettable Experiences',
    'services.video.desc': 'Watch our vertical overview to see how our methodology integrates rapid QR code credentialing, pristine stage builds, sponsorship procurement, and 360° logistics.',
    'services.video.check1': 'Invite and engage high-tier decision makers to explore your brand',
    'services.video.check2': 'Vetting, contracting, and supervision of verified vendors',
    'services.video.check3': 'Continuous live operational monitoring and post-event analytics',
    'services.video.cta': 'Request Proposal for This Format',
    'services.pillars.title': 'Pillars of Flawless Execution',
    'services.pillars.sub': 'Three integrated fronts guaranteeing absolute comfort for organizers and guests',
    'services.viewDetails': 'View Service Details',

    // Portfolio Section
    'portfolio.badge': 'Case Studies & Real Projects',
    'portfolio.title': 'Events That Made History',
    'portfolio.subtitle': 'Explore major congresses, expos, and institutional gatherings planned and produced by MDE Eventos.',
    'portfolio.filter.all': 'All Cases',
    'portfolio.filter.congress': 'Congresses & Forums',
    'portfolio.filter.fairs': 'Expos & Trade Fairs',
    'portfolio.filter.institutional': 'Institutional',
    'portfolio.viewCase': 'View Case Details',

    // Why Choose Us
    'why.badge': 'Exclusive Differentiators',
    'why.title': 'Why Do Major Enterprises Choose MDE Eventos?',
    'why.subtitle': 'We work tirelessly so you can enjoy your event with complete peace of mind while our team handles every minute detail.',
    'why.pillar1.title': 'Stress-Free 360° Advisory',
    'why.pillar1.desc': 'We manage budgeting, vendors, contracts, assembly, and post-event reporting so your board can focus entirely on VIPs and guests.',
    'why.pillar2.title': 'Rigorous Timeline & Budget Control',
    'why.pillar2.desc': 'Total cost transparency with direct supplier negotiations, ensuring premium value and zero hidden surprises.',
    'why.pillar3.title': 'Fast QR-Code Credentialing Tech',
    'why.pillar3.desc': 'Eliminate long check-in lines with high-speed badge kiosks, instant QR scanning, and digital attendee check-in.',
    'why.pillar4.title': '20+ Years of Impeccable Reputation',
    'why.pillar4.desc': 'A spotless history across major Brazilian convention centers and high-profile regional congresses.',

    // FAQ Section
    'faq.badge': 'Frequently Asked Questions',
    'faq.title': 'Everything You Need to Know About Our Services',
    'faq.subtitle': 'All the essential information to plan your next corporate event with MDE Eventos.',
    'faq.stillQuestions': 'Still have specific questions about your upcoming event?',
    'faq.talkWhatsApp': 'Speak Directly on WhatsApp',

    // Floating WhatsApp & Toasts
    'floating.btn': 'Chat on WhatsApp',
    'floating.tooltip': 'Quick support with founders',
    'toast.recentBudget': 'New quote request submitted!',
    'toast.newReview': 'New 5-star review received!',

    // Footer
    'footer.description': 'Planning and production of corporate and institutional events. Connecting people, companies, and opportunities with over 20 years of expertise.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact & Location',
    'footer.rights': 'All rights reserved.',
  },

  es: {
    // Header & Global
    'nav.reviews': 'Opiniones',
    'nav.budget': 'Presupuesto',
    'nav.reels': 'Reels',
    'nav.founders': 'Socias',
    'nav.solutions': 'Soluciones',
    'nav.cases': 'Casos',
    'nav.faq': 'Preguntas',
    'nav.cta': 'Solicitar Presupuesto',
    'header.badge': 'AL',
    'header.subtitle': 'Planificación y Producción de Eventos',
    'header.motto': '"Cada evento tiene un propósito"',
    'announcement.text': '⭐ Especialistas en Ferias Corporativas, Congresos y Encuentros Empresariales en Brasil • Más de 20 años de experiencia • Solicite su Propuesta Personalizada',
    'announcement.cta': 'Pedir Presupuesto',
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Oscuro',
    'audio.soundOn': 'Con Sonido',
    'audio.soundOff': 'Sin Sonido',

    // Hero Section
    'hero.badge': 'Planificación y Ejecución 360° en Alagoas y Brasil',
    'hero.title.part1': 'Transforme el Evento de su Empresa en una',
    'hero.title.gradient': 'Experiencia Memorable',
    'hero.title.part2': 'y Estratégica.',
    'hero.subtitle': 'Organización, planificación y ejecución completa de ferias de negocios, congresos, simposios y encuentros empresariales con más de 20 años de tradición.',
    'hero.bullet1': '+20 Años en el Mercado y Tradición',
    'hero.bullet2': 'Gestión Directa por las Socias Fundadoras',
    'hero.bullet3': 'Metodología Enfocada en Resultados',
    'hero.cta.primary': 'Hablar con la Especialista en WhatsApp',
    'hero.cta.secondary': 'Simular Presupuesto Online',
    'hero.leadBadge': 'Propuesta rápida en menos de 15 minutos por WhatsApp',
    'hero.quickPrompt.title': '¿Desea resolver una duda rápida?',
    'hero.quickPrompt.inputPlaceholder': 'Ej: Deseo organizar un congreso para 300 personas...',
    'hero.quickPrompt.send': 'Enviar',

    // Instagram Reels
    'reels.badge': 'Reels en Tendencia • Reproducción Automática Sin Sonido',
    'reels.title': 'Detrás de Escena y Eventos en Formato Reels',
    'reels.swipe': 'Deslice hacia el lado',
    'reels.autoScroll': 'Desplazamiento Automático Activo',
    'reels.profileBio': 'Organización y Planificación de Eventos Corporativos en Alagoas y Brasil',
    'reels.profileFollow': 'Seguir @mde.eventos en Instagram',
    'reels.livePlaying': '● Reproduciendo sin sonido',
    'reels.soundOn': 'Con Sonido',
    'reels.soundOff': 'Sin Sonido',
    'reels.follow': 'Seguir',
    'reels.audioOriginal': 'Audio original • MDE Eventos Oficial',

    // Budget Generator
    'budget.badge': 'Simulador Rápido de Presupuesto',
    'budget.title': 'Descubra la Estimación Ideal para su Evento',
    'budget.subtitle': 'Complete los datos en 1 minuto y reciba una propuesta estructurada y personalizada directamente con nuestras fundadoras por WhatsApp.',
    'budget.imageBadge': '★ Propuesta Personalizada Sin Compromiso',
    'budget.imageSub': 'Planificación completa de acuerdo con el tamaño de su evento y presupuesto disponible.',
    'budget.form.eventName': 'Nombre o Tema del Evento',
    'budget.form.eventNamePlaceholder': 'Ej: 1er Foro de Liderazgo y Negocios',
    'budget.form.eventType': 'Tipo de Evento',
    'budget.form.guests': 'Cantidad Estimada de Asistentes',
    'budget.form.city': 'Ciudad / Sede Prevista',
    'budget.form.cityPlaceholder': 'Ej: Centro de Convenciones de Maceió - AL',
    'budget.form.date': 'Fecha Prevista o Mes',
    'budget.form.datePlaceholder': 'Ej: Noviembre / 2026',
    'budget.form.needs': 'Servicios Necesarios (Seleccione todos los que apliquen)',
    'budget.form.contactName': 'Su Nombre o Empresa',
    'budget.form.contactNamePlaceholder': 'Ej: Dra. Mariana Costa / Grupo Alfa',
    'budget.form.contactPhone': 'Su WhatsApp de Contacto',
    'budget.form.contactPhonePlaceholder': '+55 (82) 99999-9999',
    'budget.form.notes': 'Observaciones Adicionales (Opcional)',
    'budget.form.notesPlaceholder': 'Cuéntenos sobre sus expectativas o requerimientos especiales...',
    'budget.form.submit': 'Generar Propuesta y Enviar por WhatsApp',
    'budget.securityNote': 'Sus datos son 100% confidenciales. Respuesta en 15 minutos en horario comercial.',

    // Testimonials
    'testimonials.badge': 'Prueba Social y Satisfacción de Clientes',
    'testimonials.title': 'Lo que Dicen Quienes Ya Realizaron Eventos con Nosotros',
    'testimonials.subtitle': 'Conozca los testimonios de contratantes, congresistas y aliados institucionales sobre el rigor y la excelencia de MDE.',
    'testimonials.imageBadge': '★ Compromiso y Credibilidad Demostrados',
    'testimonials.imageSub': 'Promedio de 5.0 estrellas en decenas de eventos corporativos e institucionales.',
    'testimonials.ctaReview': 'Evaluar el Servicio de MDE',
    'testimonials.modal.title': 'Deje su Opinión sobre MDE Eventos',
    'testimonials.modal.subtitle': 'Su opinión es fundamental para nuestra constante mejora.',
    'testimonials.modal.name': 'Su Nombre y Cargo',
    'testimonials.modal.company': 'Empresa / Institución',
    'testimonials.modal.event': '¿En qué evento participó o nos contrató?',
    'testimonials.modal.rating': 'Su Calificación',
    'testimonials.modal.comment': 'Su Testimonio',
    'testimonials.modal.submit': 'Enviar Opinión',

    // Social Proof
    'proof.badge': 'Autoridad y Trayectoria Comprobada',
    'proof.title': 'Números que Consolidan Nuestro Liderazgo',
    'proof.stat1.val': '+20',
    'proof.stat1.label': 'Años de Trayectoria en el Mercado',
    'proof.stat1.desc': 'Tradición sólida y confianza en el sector corporativo',
    'proof.stat2.val': '+350',
    'proof.stat2.label': 'Eventos Corporativos Realizados',
    'proof.stat2.desc': 'Ferias, congresos, simposios y ceremonias',
    'proof.stat3.val': '+120k',
    'proof.stat3.label': 'Participantes Conectados',
    'proof.stat3.desc': 'Público calificado, líderes de negocios y congresistas',
    'proof.stat4.val': '100%',
    'proof.stat4.label': 'Eventos Entregados con Máximo Rigor',
    'proof.stat4.desc': 'Puntualidad, protocolo estricto y satisfacción del cliente',
    'proof.clientsTitle': 'Alianzas y Clientes Institucionales Destacados',

    // Founders Section
    'founders.badge': '+20 Años en el Mercado',
    'founders.title.part1': 'Las Socias Fundadoras de',
    'founders.title.brand': 'MDE Eventos',
    'founders.subtitle': 'Más de dos décadas realizando eventos corporativos exitosos en Alagoas y en todo Brasil.',
    'founders.mission.title': 'Nuestra Misión',
    'founders.purpose.title': 'Nuestro Propósito',
    'founders.card.title': 'Socias Fundadoras • MDE Eventos',
    'founders.card.sub': 'Eventos, Marketing y Soluciones Empresariales • +20 Años de Éxito',
    'founders.story.badge': 'Experiencia Real y Conexiones Corporativas',
    'founders.story.heading': 'Un enfoque consultivo que convierte expectativas en hitos memorables para su empresa.',
    'founders.story.p1': 'Al frente de los mayores congresos y foros empresariales, las fundadoras de MDE Eventos combinan metodología con control de resultados, coordinación de ponentes y un equipo experimentado de secretariado y ceremonial.',
    'founders.check1': 'Gestión directa por las fundadoras',
    'founders.check2': 'Más de 20 años de experiencia',
    'founders.check3': 'Atención en AL y en todo Brasil',
    'founders.check4': 'Supervisión rigurosa de punta a punta',
    'founders.podcast.title': 'Las Socias en el Podcast (Video Vertical)',
    'founders.podcast.sub': 'Entrevista y visión estratégica sobre la ejecución de eventos inolvidables',
    'founders.cta.whatsapp': 'Conversar con las Socias en WhatsApp',
    'founders.cta.budget': 'Solicitar Propuesta',

    // Services Section
    'services.badge': 'Soluciones Estratégicas',
    'services.title': 'Servicios Especializados para el Éxito de su Evento',
    'services.subtitle': 'Secretariado profesional, infraestructura integral, ceremonial y control de resultados con metodología validada en más de 20 años de mercado.',
    'services.video.badge': 'Video Oficial de Soluciones',
    'services.video.title': 'Cómo MDE Conecta su Marca con Experiencias Inolvidables',
    'services.video.desc': 'Mire el video en formato vertical y descubra cómo nuestra metodología integra acreditación ágil con código QR, montaje estructural impecable, gestión de patrocinadores y coordinación 360°.',
    'services.video.check1': 'Invitar y atraer clientes potenciales para conocer sus productos',
    'services.video.check2': 'Supervisión y contratación de proveedores homologados',
    'services.video.check3': 'Acompañamiento operativo continuo in situ y post-evento',
    'services.video.cta': 'Solicitar Propuesta para Este Formato',
    'services.pillars.title': 'Pilares de Ejecución Impecable',
    'services.pillars.sub': 'Tres áreas integradas para garantizar total tranquilidad al cliente y a los asistentes',
    'services.viewDetails': 'Ver Detalles del Servicio',

    // Portfolio Section
    'portfolio.badge': 'Casos de Éxito y Proyectos Reales',
    'portfolio.title': 'Eventos que Hicieron Historia',
    'portfolio.subtitle': 'Explore algunos de los grandes congresos y eventos institucionales planificados y ejecutados por MDE Eventos.',
    'portfolio.filter.all': 'Todos los Casos',
    'portfolio.filter.congress': 'Congresos y Foros',
    'portfolio.filter.fairs': 'Ferias y Negocios',
    'portfolio.filter.institutional': 'Institucionales',
    'portfolio.viewCase': 'Ver Detalles del Caso',

    // Why Choose Us
    'why.badge': 'Diferenciales Exclusivos',
    'why.title': '¿Por Qué Grandes Empresas Eligen MDE Eventos?',
    'why.subtitle': 'Trabajamos para que usted, organizador, disfrute del evento con total tranquilidad mientras nuestro equipo cuida cada detalle.',
    'why.pillar1.title': 'Asesoría 360° Sin Preocupaciones',
    'why.pillar1.desc': 'Gestionamos presupuestos, proveedores, contratos, montaje y post-evento para que su directiva se enfoque en los invitados.',
    'why.pillar2.title': 'Control Riguroso de Tiempos y Presupuesto',
    'why.pillar2.desc': 'Transparencia total en costos con negociación directa de proveedores homologados y garantía del mejor costo-beneficio.',
    'why.pillar3.title': 'Tecnología de Acreditación Rápida con QR',
    'why.pillar3.desc': 'Cero filas con quioscos ágiles, lectura instantánea por código QR e integración digital para eventos de vanguardia.',
    'why.pillar4.title': 'Más de 20 Años de Reputación Impecable',
    'why.pillar4.desc': 'Trayectoria intachable en los principales centros de convenciones de Alagoas y en eventos corporativos a nivel nacional.',

    // FAQ Section
    'faq.badge': 'Preguntas Frecuentes',
    'faq.title': 'Preguntas y Respuestas sobre Nuestros Servicios',
    'faq.subtitle': 'Todo lo que necesita saber para planificar su evento corporativo con MDE Eventos.',
    'faq.stillQuestions': '¿Aún tiene dudas sobre su evento en particular?',
    'faq.talkWhatsApp': 'Hablar Directamente en WhatsApp',

    // Floating WhatsApp & Toasts
    'floating.btn': 'Hablar en WhatsApp',
    'floating.tooltip': 'Atención rápida con las fundadoras',
    'toast.recentBudget': '¡Nuevo presupuesto solicitado!',
    'toast.newReview': '¡Nueva opinión de 5 estrellas recibida!',

    // Footer
    'footer.description': 'Planificación y producción de eventos corporativos e institucionales. Conectar personas, empresas y oportunidades con más de 20 años de experiencia.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto y Ubicación',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('mde_language');
      if (saved === 'pt' || saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('mde_language', lang);
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    const dict = translations[language] || translations.pt;
    if (key in dict) {
      return (dict as Record<string, string>)[key];
    }
    // Fallback to Portuguese
    if (key in translations.pt) {
      return (translations.pt as Record<string, string>)[key];
    }
    return key;
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

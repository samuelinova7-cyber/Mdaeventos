import React from 'react';
import { MessageCircle, Calculator, ShieldCheck, Award, Users, CheckCircle2, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroSectionProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBudget, whatsappPhone }) => {
  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá! Vi a página da MDE Eventos e gostaria de conversar com a especialista sobre a organização do evento da minha empresa.'
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Graphic Elements & Ambient Glow */}
      <div className="absolute inset-0 bg-[#080B11]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Radial Lights (Gold & Royal Purple) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-900/25 via-amber-600/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Badge: Authority in Alagoas */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-purple-500/15 border border-amber-500/30 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-200 tracking-wide">
                Referência em Produção de Eventos Corporativos em Alagoas
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Transforme o Evento da sua Empresa em uma{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy decoration-2">
                Experiência Memorável
              </span>{' '}
              e Estratégica.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Organização, planejamento e execução completa de eventos corporativos, congressos, feiras e encontros empresariais em Alagoas com gestão 360° e zero dor de cabeça.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 w-full max-w-xl">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gestão Completa de Ponta a Ponta</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Integração e Credenciamento Sympla</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Captação Ativa de Patrocinadores</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fornecedores Homologados & Nota Fiscal</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              {/* Primary WhatsApp CTA Button */}
              <a
                id="hero-cta-whatsapp"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Falar com a Especialista no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Fast Budget CTA */}
              <button
                id="hero-cta-orcamento"
                onClick={onOpenBudget}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-amber-500/30 hover:border-amber-500/60 shadow-lg transition-all"
              >
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>Simular Orçamento Rápido</span>
              </button>
            </div>

            {/* Micro Social Trust Bar */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Maceió & todo Alagoas</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Empresa Certificada & CNPJ Ativo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage / Highlight Card (Conecta Contábil & EduConecta showcase) */}
          <div className="lg:col-span-5 relative">
            {/* Background layered glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-purple-600/30 to-amber-600/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative rounded-2xl bg-[#0c101c] border border-slate-800/90 shadow-2xl overflow-hidden">
              {/* Media Container with Real Corporate Event Visual */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                  alt="Conecta Contábil Alagoas - Evento Corporativo MDE Eventos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-[#0c101c]/40 to-transparent" />

                {/* Case Badge Tag on Image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Case: 3º Conecta Contábil Alagoas</span>
                </div>

                {/* Live Attendee Pill */}
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>+800 Participantes</span>
                </div>
              </div>

              {/* Lower Info Box */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-bold text-white">
                      Produção de Grande Porte com Alto Impacto
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Palcos de alta tecnologia, credenciamento sem filas e captação de marcas parceiras.
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-bold px-2 py-1 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">
                    Case de Sucesso
                  </span>
                </div>

                {/* Highlights mini grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                  <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">
                      Credenciamento
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      Sympla + QR Code 100%
                    </span>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-purple-400 block">
                      Local
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      Centro de Convenções AL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

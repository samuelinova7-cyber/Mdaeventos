import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Megaphone,
  Mic,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Ticket,
  ChevronRight,
  Shield,
  Clock,
  Presentation,
  UserCheck,
  Target,
  Layers,
} from 'lucide-react';
import { SERVICES_DATA, DETAILED_SERVICES_PILLARS, COMPANY_OBJECTIVES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { playButtonClick, playCoinSound } from '../utils/audio';

interface ServicesSectionProps {
  onSelectServiceForBudget: (serviceTitle: string) => void;
  whatsappPhone: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBudget,
  whatsappPhone,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const solutionsVideoUrl = 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395558/SnapInsta.to_AQMolBwcWqHhav1abOiBqy1jNveYqcd6T5SM-wwppRqawo6poREewVpNoMkblMtWi_OzhkWBBqYfh7vfsoOL7scpqDl1juobjpGDZjM.mp4';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6" />;
      case 'Mic':
        return <Mic className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicos" className="relative py-20 bg-[#080b12] border-t border-amber-500/10">
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Soluções Estratégicas</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviços Especializados para o Sucesso do Seu Evento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Secretariado profissional, infraestrutura completa, cerimonial e controle de resultados com metodologia validada em mais de 20 anos de mercado.
          </p>
        </div>

        {/* Featured Video in 9:16 Aspect Ratio: "Como a MDE Conecta sua Marca a Experiências Inesquecíveis" */}
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-[#101424] via-[#16122d] to-[#101424] border-2 border-amber-500/35 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Vídeo Oficial de Soluções</span>
              </div>

              <h3 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Como a MDE Conecta sua Marca a Experiências Inesquecíveis
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Assista ao vídeo em formato vertical e entenda como nossa metodologia integra credenciamento ágil com QR Code, montagem estrutural impecável, captação de patrocinadores e gestão integral com mais de 20 anos de tradição.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Convidar e engajar leads qualificados para conhecer seus produtos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Supervisão e contratação de fornecedores homologados</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acompanhamento operacional contínuo no local e no pós-evento</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    playCoinSound();
                    onSelectServiceForBudget('Planejamento e Gestão de Eventos Corporativos');
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Solicitar Proposta para Este Formato
                </button>
              </div>
            </div>

            {/* Video Player Frame in 9:16 vertical format as requested */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-amber-500/50 shadow-2xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-purple-600/30 to-amber-500/30 rounded-3xl blur-md opacity-70 pointer-events-none" />
                <video
                  id="solutions-company-video"
                  src={solutionsVideoUrl}
                  playsInline
                  controls
                  className="relative z-10 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars: Secretariado, Estrutura e Cerimonial */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
              Pilares de Execução Impecável
            </span>
            <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white mt-1">
              Secretariado, Infraestrutura & Cerimonial de Alta Performance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DETAILED_SERVICES_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 text-left flex flex-col justify-between shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      {idx === 0 && <UserCheck className="w-6 h-6" />}
                      {idx === 1 && <Presentation className="w-6 h-6" />}
                      {idx === 2 && <Mic className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="font-['Outfit'] text-xl font-bold text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-amber-300/90 font-medium mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    {pillar.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <button
                    onClick={() => {
                      playButtonClick();
                      onSelectServiceForBudget(pillar.title);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 text-amber-300 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Incluir no Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Specific Objectives of the Services */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-[#0b0f1b] border border-purple-500/30 text-left">
          <div className="max-w-2xl mb-8 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>Objetivos Específicos</span>
            </div>
            <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white">
              O Que Garantimos em Cada Etapa do Seu Evento
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Metas claras e supervisão profissional para garantir retorno real sobre o investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_OBJECTIVES.map((obj) => (
              <div
                key={obj.number}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-['Outfit'] font-black text-2xl text-purple-400">
                    {obj.number}
                  </span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mt-1">
                    {obj.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid (4 Main Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0f1422] to-[#0a0d16] border border-slate-800/90 hover:border-amber-500/40 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-black/60 text-left"
            >
              <div>
                {/* Top Bar with Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-600/20 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-105 group-hover:bg-amber-500/30 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features Highlights */}
                <div className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    playButtonClick();
                    setSelectedService(service);
                  }}
                  className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver detalhes completos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    playCoinSound();
                    onSelectServiceForBudget(service.title);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-300 font-bold text-xs transition-all hover:scale-105"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Ribbon: Sympla & Ingressos */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Outfit'] text-sm sm:text-base font-bold text-white">
                Gestão e Emissão de Ingressos Integrada ao Sympla
              </h4>
              <p className="text-xs text-slate-300">
                Garantimos bilheteria segura, controle de lotes, totens de credenciamento e leitura de QR code no dia do evento sem filas.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              playCoinSound();
              onSelectServiceForBudget('Criação de Conteúdo e Marketing de Eventos / Sympla');
            }}
            className="shrink-0 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors hover:scale-105 active:scale-95"
          >
            Quero Integrar ao Sympla
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectBudget={(title) => {
          setSelectedService(null);
          onSelectServiceForBudget(title);
        }}
        whatsappPhone={whatsappPhone}
      />
    </section>
  );
};

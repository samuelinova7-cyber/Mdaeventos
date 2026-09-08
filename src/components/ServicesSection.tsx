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
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForBudget: (serviceTitle: string) => void;
  whatsappPhone: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBudget,
  whatsappPhone,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    <section id="servicos" className="relative py-20 bg-[#080b12]">
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Que Oferecemos</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluções Completas para o Sucesso do Seu Evento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Da concepção estratégica à entrega final impecável: cuidamos de cada detalhe com rigor técnico, elegância e foco em resultados para sua marca.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0f1422] to-[#0a0d16] border border-slate-800/90 hover:border-amber-500/40 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-black/60"
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
                  onClick={() => setSelectedService(service)}
                  className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver detalhes completos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectServiceForBudget(service.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-300 font-bold text-xs transition-all"
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
            onClick={() => onSelectServiceForBudget('Criação de Conteúdo e Marketing de Eventos / Sympla')}
            className="shrink-0 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
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

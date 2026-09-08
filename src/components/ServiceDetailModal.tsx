import React from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectBudget: (serviceTitle: string) => void;
  whatsappPhone: string;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectBudget,
  whatsappPhone,
}) => {
  if (!service) return null;

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Olá! Gostaria de detalhes e orçamento específico para o serviço: ${service.title}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d121f] border border-amber-500/30 shadow-2xl p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold">
            {service.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">Solução MDE Eventos</span>
        </div>

        <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Feature List */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400">
            O que está incluso neste serviço:
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="space-y-3 mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <h4 className="text-xs uppercase tracking-wider font-bold text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Entregáveis e Garantias:</span>
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
            {service.deliverables.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-800">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar sobre este Serviço no WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onSelectBudget(service.title);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            <span>Incluir no Orçamento</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

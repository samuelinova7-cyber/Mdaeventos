import React from 'react';
import { Sparkles, Calendar, Award, Zap, MessageCircle } from 'lucide-react';
import { playButtonClick } from '../utils/audio';

interface AnnouncementTickerProps {
  onOpenBudget: () => void;
}

export const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({ onOpenBudget }) => {
  const tickerItems = [
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />,
      text: 'MDE Eventos: "Cada evento tem um propósito para comunicar, fortalecer relacionamentos e criar experiências"',
    },
    {
      icon: <Award className="w-3.5 h-3.5 text-amber-400" />,
      text: 'Conecta Contábil Alagoas: Maior Encontro de Negócios do Estado com Ingressos Esgotados na 3ª Edição!',
    },
    {
      icon: <Calendar className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'EduConecta: Sucesso no Centro de Convenções de Maceió com Feira Educacional e Gestão',
    },
    {
      icon: <Zap className="w-3.5 h-3.5 text-purple-400" />,
      text: 'L.I.V.R.E. Talks: Rodas de Conversa Empresariais com Foco em Comunicação e Desenvolvimento',
    },
    {
      icon: <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />,
      text: 'Plantão Especialista via WhatsApp: Orçamentos em 1 Minuto para Eventos Corporativos e de Classe',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#120826] via-[#1a0f35] to-[#120826] border-b border-amber-500/20 text-white text-xs py-2 overflow-hidden relative select-none z-50">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#120826] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#120826] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap cursor-pointer" onClick={() => { playButtonClick(); onOpenBudget(); }}>
        {/* Repeating twice for smooth endless loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 hover:text-amber-300 transition-colors">
            <span className="p-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              {item.icon}
            </span>
            <span className="font-medium tracking-wide text-slate-200">
              {item.text}
            </span>
            <span className="text-amber-500/60 font-black">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

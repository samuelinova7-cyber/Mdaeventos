import React from 'react';
import { X, MapPin, Users, Award, CheckCircle2, MessageCircle, Quote } from 'lucide-react';
import { PortfolioCase } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CaseDetailModalProps {
  item: PortfolioCase | null;
  onClose: () => void;
  whatsappPhone: string;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  item,
  onClose,
  whatsappPhone,
}) => {
  const { language } = useLanguage();
  if (!item) return null;

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    language === 'en'
      ? `Hello! I saw the ${item.title} case on MDE Eventos website and would like a similar format for our company event.`
      : language === 'es'
        ? `¡Hola! Vi el caso de ${item.title} en la web de MDE Eventos y deseo un formato similar para el evento de nuestra empresa.`
        : `Olá! Vi o case do ${item.title} no site da MDE Eventos e gostaria de um formato similar para o evento da minha empresa.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0c101d] border border-amber-500/30 shadow-2xl p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10 cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-64 sm:h-80 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c101d] via-[#0c101d]/30 to-transparent" />

          {/* Badges on Banner */}
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
              {item.category}
            </span>
            {item.edition && (
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold">
                {item.edition}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {item.title}
        </h3>

        {/* Meta details */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{item.location}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-purple-400" />
            <span>{item.participants}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>{language === 'en' ? 'Production & Delivery Highlights:' : language === 'es' ? 'Destaques de Producción y Entrega:' : 'Destaques da Produção e Entrega:'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {item.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote if present */}
        {item.testimonialQuote && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 relative">
            <Quote className="w-6 h-6 text-purple-400/40 absolute top-3 right-3" />
            <p className="text-xs sm:text-sm text-slate-300 italic mb-2">
              "{item.testimonialQuote}"
            </p>
            <div className="text-xs font-bold text-amber-300">
              {item.testimonialAuthor} — <span className="text-slate-400 font-normal">{item.testimonialRole}</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            {language === 'en' ? 'Interested in a similar structure for your event?' : language === 'es' ? '¿Desea una estructura similar para su empresa?' : 'Deseja uma estrutura semelhante para sua empresa?'}
          </div>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>{language === 'en' ? 'Request This Format on WhatsApp' : language === 'es' ? 'Quiero un Evento en Este Formato' : 'Quero um Evento Neste Formato'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

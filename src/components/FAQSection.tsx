import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  whatsappPhone: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ whatsappPhone }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida sobre a produção de eventos corporativos com a MDE Eventos.'
  )}`;

  return (
    <section id="faq" className="relative py-20 bg-[#0a0e19] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa saber antes de contratar a produção do seu evento corporativo.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900 transition-colors"
                >
                  <span className="font-['Outfit'] font-bold text-sm sm:text-base text-slate-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-amber-500/20 text-center space-y-3">
          <h3 className="font-['Outfit'] text-lg font-bold text-white">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Nossa equipe de especialistas está pronta para analisar seu projeto e esclarecer qualquer ponto.
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

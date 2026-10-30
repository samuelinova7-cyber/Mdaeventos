import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { playButtonClick } from '../utils/audio';

interface FAQSectionProps {
  whatsappPhone: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ whatsappPhone }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();

  const toggle = (idx: number) => {
    playButtonClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getFaqs = () => {
    if (language === 'en') {
      return [
        {
          question: 'What types of corporate events does MDE Eventos organize?',
          answer: 'We specialize in congresses, symposiums, corporate trade fairs, forum roundtables, executive workshops, award galas, and professional conventions in Alagoas and across Brazil.',
        },
        {
          question: 'How far in advance should we start event planning?',
          answer: 'For large congresses (over 300 delegates), we recommend 3 to 6 months in advance. For company workshops or roundtables, 30 to 60 days provides ample runway.',
        },
        {
          question: 'Do you manage Sympla ticketing and QR code credentialing?',
          answer: 'Yes! We handle full setup of ticket batches, rapid badge printing, self-service check-in kiosks, and lightning-fast QR code entry without bottleneck lines.',
        },
        {
          question: 'Do you provide professional ceremonial masters and secretariat?',
          answer: 'Absolutely. We provide seasoned bilingual hostesses, protocol-trained receptionists, and experienced Masters of Ceremonies adhering strictly to event timing.',
        },
        {
          question: 'Can you assist in securing sponsors and exhibitors?',
          answer: 'Yes, we prepare commercial prospectuses, design floor plans for exhibition booths, and coordinate sponsor activations to maximize sponsor ROI.',
        },
      ];
    }

    if (language === 'es') {
      return [
        {
          question: '¿Qué tipo de eventos corporativos organiza MDE Eventos?',
          answer: 'Nos especializamos en congresos, ferias de negocios, simposios, foros empresariales, talleres ejecutivos, ceremonias y convenciones en Alagoas y en todo Brasil.',
        },
        {
          question: '¿Con cuánta anticipación conviene iniciar la planificación?',
          answer: 'Para grandes congresos (más de 300 asistentes), recomendamos de 3 a 6 meses. Para talleres o encuentros ejecutivos, de 30 a 60 días es el tiempo ideal.',
        },
        {
          question: '¿Gestionan boletos en Sympla y acreditación con código QR?',
          answer: '¡Sí! Configuramos lotes de entradas, quioscos de auto-acreditación y lectura rápida con código QR para garantizar cero filas de espera.',
        },
        {
          question: '¿Ofrecen servicio de Maestro de Ceremonias y secretariado?',
          answer: 'Por supuesto. Disponemos de recepcionistas bilingües altamente calificadas y Maestros de Ceremonias profesionales que controlan rigurosamente el protocolo.',
        },
        {
          question: '¿Ayudan en la captación de patrocinadores y expositores?',
          answer: 'Sí, estructuramos carpetas comerciales, planos de estandes y activaciones de marca para garantizar un alto retorno a los patrocinadores.',
        },
      ];
    }

    return FAQS_DATA;
  };

  const faqs = getFaqs();

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello! I have a question about planning our corporate event with MDE Eventos.'
      : language === 'es'
        ? '¡Hola! Tengo una consulta sobre la producción de eventos corporativos con MDE Eventos.'
        : 'Olá! Tenho uma dúvida sobre a produção de eventos corporativos com a MDE Eventos.'
  )}`;

  return (
    <section id="faq" className="relative py-20 bg-[#0a0e19] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('faq.badge')}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900 transition-colors cursor-pointer"
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
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40 text-left">
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
            {t('faq.stillQuestions')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            {language === 'en'
              ? 'Our specialist team is available on WhatsApp to analyze your specifications.'
              : language === 'es'
                ? 'Nuestro equipo de especialistas está disponible por WhatsApp para atender sus dudas.'
                : 'Nossa equipe de especialistas está pronta para analisar seu projeto e esclarecer qualquer ponto.'}
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>{t('faq.talkWhatsApp')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

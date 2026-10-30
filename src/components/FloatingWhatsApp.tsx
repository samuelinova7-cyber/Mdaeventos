import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { playButtonClick, playCoinSound, playPowerUpSound } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface FloatingWhatsAppProps {
  whatsappPhone: string;
  onOpenBudget: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappPhone,
  onOpenBudget,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const getDefaultMsg = () => {
    if (language === 'en') return 'Hello! I would like to request a quote for our upcoming corporate event in Brazil.';
    if (language === 'es') return '¡Hola! Quisiera cotizar un evento corporativo con MDE Eventos.';
    return 'Olá! Gostaria de um orçamento para um evento corporativo em Alagoas.';
  };

  const [quickMsg, setQuickMsg] = useState(getDefaultMsg());

  const officialLogoUrl =
    'https://res.cloudinary.com/hd1sahto/image/upload/v1793395580/WhatsApp_Image_2026-10-30_at_4.25.30_PM.jpg';

  const handleToggle = () => {
    playButtonClick();
    setIsOpen(!isOpen);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    playPowerUpSound();
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(quickMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0e1422] border border-emerald-500/30 shadow-2xl shadow-black/80 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-left">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400">
                <img
                  src={officialLogoUrl}
                  alt="MDE Eventos Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0e1422]" />
              </div>
              <div>
                <div className="font-bold text-sm">MDE Eventos</div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {language === 'en' ? 'Event Specialist AL & BR' : language === 'es' ? 'Especialista en Eventos' : 'Especialista em Eventos AL'}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                playButtonClick();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/60 cursor-pointer"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#090d16] space-y-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl rounded-tl-none text-xs text-slate-200 shadow-sm leading-relaxed">
              <p className="font-semibold text-amber-400 mb-1">MDE Eventos:</p>
              {language === 'en'
                ? 'Hello! How can we help transform your upcoming corporate event into an unforgettable success?'
                : language === 'es'
                  ? '¡Hola! ¿Cómo podemos ayudarle a convertir su próximo evento corporativo en un éxito absoluto?'
                  : 'Olá! Tudo bem? Como podemos ajudar a transformar o evento da sua empresa em Alagoas em um case de sucesso?'}
            </div>

            {/* Fast Budget Action Pill */}
            <button
              onClick={() => {
                playCoinSound();
                setIsOpen(false);
                onOpenBudget();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('hero.cta.secondary')}</span>
            </button>

            {/* Direct Message Form */}
            <form onSubmit={handleSend} className="space-y-2 pt-1 border-t border-slate-800">
              <textarea
                rows={2}
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder={language === 'en' ? 'Type your message...' : language === 'es' ? 'Escriba su mensaje...' : 'Digite sua mensagem...'}
                className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-emerald-400 resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>{language === 'en' ? 'Chat on WhatsApp' : language === 'es' ? 'Conversar en WhatsApp' : 'Iniciar Conversa no WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        id="btn-floating-whatsapp"
        onClick={handleToggle}
        aria-label="Abrir WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />

        {isOpen ? (
          <X className="w-7 h-7 text-slate-950" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 group-hover:rotate-12 transition-transform" />
        )}

        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-black text-slate-950 items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
};

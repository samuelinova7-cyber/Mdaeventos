import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, Volume2, VolumeX, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { AnnouncementTicker } from './AnnouncementTicker';
import { AnimatedRoundLogo } from './AnimatedRoundLogo';
import { playButtonClick, playCoinSound, toggleSound } from '../utils/audio';

interface HeaderProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBudget, whatsappPhone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá, MDE Eventos! Gostaria de falar com a especialista sobre a organização de um evento corporativo.'
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* Top Announcement Ticker */}
      <AnnouncementTicker onOpenBudget={onOpenBudget} />

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B11]/95 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-2xl shadow-black/80'
            : 'bg-[#080B11]/80 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: ROUND, LARGER & ANIMATED */}
          <a
            href="#hero"
            onClick={() => playCoinSound()}
            className="flex items-center gap-3.5 sm:gap-4 group"
          >
            {/* Animated Round Larger Logo */}
            <AnimatedRoundLogo size="md" className="sm:hidden" />
            <AnimatedRoundLogo size="lg" className="hidden sm:inline-flex" />

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-['Outfit'] font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  MDE Eventos
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  AL
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide">
                Planejamento & Produção de Eventos
              </span>
              <span className="text-[9px] text-amber-400/90 font-semibold tracking-wider uppercase">
                "Cada evento tem um propósito"
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            <a
              href="#instagram-reels"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-bold text-pink-300 hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1 rounded-lg bg-pink-500/10 border border-pink-500/25"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Reels @mde.eventos</span>
            </a>
            <a
              href="#socias"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              Sócias & História
            </a>
            <a
              href="#servicos"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              Soluções
            </a>
            <a
              href="#cases"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              Cases de Sucesso
            </a>
            <a
              href="#depoimentos"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              Avaliações
            </a>
            <a
              href="#faq"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Audio Toggle Button with mini-game feedback */}
            <button
              onClick={handleToggleSound}
              className={`p-2.5 rounded-xl border transition-all ${
                soundOn
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25'
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundOn ? 'Sons do site ativados (Clique para silenciar)' : 'Sons do site silenciados (Clique para ativar)'}
              aria-label="Ativar/desativar sons"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playButtonClick()}
              aria-label="Instagram MDE Eventos"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCoinSound()}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold hover:bg-emerald-950/40 hover:border-emerald-500/70 hover:scale-105 active:scale-95 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>(82) WhatsApp</span>
            </a>

            <button
              id="btn-header-orcamento"
              onClick={() => {
                playCoinSound();
                onOpenBudget();
              }}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Solicitar Orçamento</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-lg border text-xs ${
                soundOn ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
              aria-label="Som"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                playCoinSound();
                onOpenBudget();
              }}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md"
            >
              Orçamento
            </button>

            <button
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16] border-b border-amber-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 text-left">
          <div className="flex flex-col space-y-3">
            <a
              href="#instagram-reels"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-bold text-pink-400 hover:text-pink-300 py-1 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Reels do Instagram (@mde.eventos)</span>
            </a>
            <a
              href="#socias"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-200 hover:text-amber-300 py-1"
            >
              Sócias & História
            </a>
            <a
              href="#servicos"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-200 hover:text-amber-300 py-1"
            >
              Soluções & Serviços
            </a>
            <a
              href="#cases"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-200 hover:text-amber-300 py-1"
            >
              Eventos Realizados (Cases)
            </a>
            <a
              href="#depoimentos"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-200 hover:text-amber-300 py-1"
            >
              Avaliações de Clientes
            </a>
            <a
              href="#faq"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-200 hover:text-amber-300 py-1"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCoinSound()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={() => {
                playCoinSound();
                setMobileMenuOpen(false);
                onOpenBudget();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20"
            >
              Simular Orçamento Completo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

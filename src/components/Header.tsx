import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, Phone, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeaderProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBudget, whatsappPhone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá, MDE Eventos! Gostaria de falar com a especialista sobre a organização de um evento corporativo.'
  )}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-amber-500/15 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-purple-800 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center">
              <span className="font-['Outfit'] font-black text-xl tracking-tighter bg-gradient-to-r from-amber-300 via-amber-200 to-purple-300 bg-clip-text text-transparent">
                MDE
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-['Outfit'] font-extrabold text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                MDE Eventos
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                AL
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Eventos Corporativos & Congressos
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
          >
            Sobre Nós
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#cases"
            className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
          >
            Eventos Realizados
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram MDE Eventos"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-950/40 hover:border-emerald-500/60 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>(82) WhatsApp</span>
          </a>

          <button
            id="btn-header-orcamento"
            onClick={onOpenBudget}
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Solicitar Orçamento</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBudget}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md"
          >
            Orçamento
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16] border-b border-amber-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 py-1"
            >
              Serviços
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 py-1"
            >
              Eventos Realizados (Cases)
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 py-1"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 py-1"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBudget();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              Simular Orçamento Completo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

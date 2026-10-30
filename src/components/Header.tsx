import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, Volume2, VolumeX, Instagram, Sun, Moon } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { AnnouncementTicker } from './AnnouncementTicker';
import { AnimatedRoundLogo } from './AnimatedRoundLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { playButtonClick, playCoinSound, toggleSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBudget, whatsappPhone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const { toggleTheme, isDark } = useTheme();
  const { t } = useLanguage();

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
          isDark
            ? isScrolled
              ? 'bg-[#080B11]/95 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-2xl shadow-black/80'
              : 'bg-[#080B11]/85 backdrop-blur-sm border-b border-white/5 py-3'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-amber-500/30 py-2 shadow-xl shadow-slate-900/10'
              : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: ONLY ONE ANIMATED ROUND LOGO */}
          <a
            href="#hero"
            onClick={() => playCoinSound()}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            {/* Single Unified Responsive Animated Round Logo */}
            <AnimatedRoundLogo size="lg" className="shrink-0" />

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span
                  className={`font-['Outfit'] font-black text-xl sm:text-2xl tracking-tight transition-colors ${
                    isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-950 group-hover:text-amber-600'
                  }`}
                >
                  MDE Eventos
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/40">
                  {t('header.badge')}
                </span>
              </div>
              <span
                className={`text-[11px] sm:text-xs font-medium tracking-wide ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {t('header.subtitle')}
              </span>
              <span className="text-[9px] text-amber-500 dark:text-amber-400 font-bold tracking-wider uppercase">
                {t('header.motto')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5">
            <a
              href="#depoimentos"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-bold flex items-center gap-1 transition-colors ${
                isDark ? 'text-amber-300 hover:text-white' : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              <span>{t('nav.reviews')}</span>
            </a>
            <a
              href="#orcamento"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-bold flex items-center gap-1 transition-colors ${
                isDark ? 'text-emerald-400 hover:text-white' : 'text-emerald-700 hover:text-emerald-900'
              }`}
            >
              <span>{t('nav.budget')}</span>
            </a>
            <a
              href="#instagram-reels"
              onClick={() => playButtonClick()}
              className="text-xs lg:text-sm font-bold text-pink-500 dark:text-pink-300 hover:text-pink-600 dark:hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1 rounded-lg bg-pink-500/10 border border-pink-500/25"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span>{t('nav.reels')}</span>
            </a>
            <a
              href="#socias"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.founders')}
            </a>
            <a
              href="#servicos"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#cases"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.cases')}
            </a>
            <a
              href="#faq"
              onClick={() => playButtonClick()}
              className={`text-xs lg:text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.faq')}
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Switcher Dropdown/Pills */}
            <LanguageSwitcher />

            {/* Day / Night Mode Toggle */}
            <button
              onClick={() => {
                playButtonClick();
                toggleTheme();
              }}
              className={`p-2.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-amber-300 hover:bg-slate-800'
                  : 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100 shadow-sm'
              }`}
              title={isDark ? 'Mudar para Modo Dia ☀️' : 'Mudar para Modo Noite 🌙'}
              aria-label="Alternar Modo Dia e Noturno"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-700" />}
              <span className="text-[11px] font-bold">
                {isDark ? t('theme.light') : t('theme.dark')}
              </span>
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                soundOn
                  ? isDark
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25'
                    : 'bg-amber-100/70 border-amber-300 text-amber-800 hover:bg-amber-200'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-400 hover:text-slate-700'
              }`}
              title={soundOn ? t('audio.soundOn') : t('audio.soundOff')}
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
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCoinSound()}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>WhatsApp</span>
            </a>

            <button
              id="btn-header-orcamento"
              onClick={() => {
                playCoinSound();
                onOpenBudget();
              }}
              className="relative inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>{t('nav.cta')}</span>
            </button>
          </div>

          {/* Mobile Actions: Language + Theme + Sound + Menu */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Mobile Language Selector */}
            <LanguageSwitcher />

            {/* Mobile Day / Night Toggle */}
            <button
              onClick={() => {
                playButtonClick();
                toggleTheme();
              }}
              className={`p-2 rounded-lg border text-xs flex items-center justify-center ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-amber-400'
                  : 'bg-amber-100 border-amber-300 text-amber-800'
              }`}
              aria-label="Alternar Modo Claro e Escuro"
              title={isDark ? 'Modo Dia ☀️' : 'Modo Noite 🌙'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-lg border text-xs ${
                soundOn
                  ? isDark
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    : 'bg-amber-100 border-amber-300 text-amber-800'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-500'
                    : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}
              aria-label="Som"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
              }`}
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 py-6 space-y-4 animate-in slide-in-from-top-4 text-left shadow-2xl ${
            isDark
              ? 'bg-[#0a0d16] border-amber-500/20 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Expanded Language Selector inside Drawer */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Idioma / Language / Idioma
            </span>
            <LanguageSwitcher variant="expanded" />
          </div>

          {/* Day / Night Selector in Mobile Drawer */}
          <div className={`p-3 rounded-xl border flex items-center justify-between ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-xs font-bold">
              {isDark ? `${t('theme.dark')} 🌙` : `${t('theme.light')} ☀️`}
            </span>
            <button
              onClick={() => {
                playButtonClick();
                toggleTheme();
              }}
              className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
            >
              {isDark ? '☀️ Mudar p/ Dia' : '🌙 Mudar p/ Noite'}
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <a
              href="#depoimentos"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-bold py-1 flex items-center justify-between ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}
            >
              <span>★ {t('nav.reviews')} (5.0)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20">Topo</span>
            </a>
            <a
              href="#orcamento"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-bold py-1 flex items-center justify-between ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              <span>⚡ {t('nav.budget')}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20">Express</span>
            </a>
            <a
              href="#instagram-reels"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-bold text-pink-500 dark:text-pink-400 py-1 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>{t('nav.reels')} (@mde.eventos)</span>
            </a>
            <a
              href="#socias"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-semibold py-1 ${
                isDark ? 'text-slate-200 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.founders')}
            </a>
            <a
              href="#servicos"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-semibold py-1 ${
                isDark ? 'text-slate-200 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#cases"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-semibold py-1 ${
                isDark ? 'text-slate-200 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.cases')}
            </a>
            <a
              href="#faq"
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(false);
              }}
              className={`text-base font-semibold py-1 ${
                isDark ? 'text-slate-200 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600'
              }`}
            >
              {t('nav.faq')}
            </a>
          </div>

          <div className={`pt-4 border-t flex flex-col gap-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCoinSound()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('hero.cta.primary')}</span>
            </a>
            <button
              onClick={() => {
                playCoinSound();
                setMobileMenuOpen(false);
                onOpenBudget();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20"
            >
              {t('nav.cta')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

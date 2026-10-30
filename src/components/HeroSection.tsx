import React from 'react';
import { MessageCircle, Calculator, ShieldCheck, Users, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { AnimatedRoundLogo } from './AnimatedRoundLogo';
import { playButtonClick, playCoinSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBudget, whatsappPhone }) => {
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const getDirectWhatsAppUrl = () => {
    let msg = 'Olá! Vi a página da MDE Eventos e gostaria de conversar com a especialista sobre a organização do evento da minha empresa.';
    if (language === 'en') {
      msg = 'Hello! I saw the MDE Eventos website and would like to speak with a corporate specialist about organizing our company event.';
    } else if (language === 'es') {
      msg = '¡Hola! Vi la página de MDE Eventos y deseo hablar con la especialista sobre la organización del evento de mi empresa.';
    }
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-16 overflow-hidden transition-colors duration-300"
    >
      {/* Background Graphic Elements & Ambient Glow */}
      <div className={`absolute inset-0 transition-colors duration-300 ${isDark ? 'bg-[#080B11]' : 'bg-slate-50'}`}>
        {/* Subtle grid pattern */}
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] ${
            isDark
              ? 'bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)]'
              : 'bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)]'
          }`}
        />

        {/* Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-900/15 via-amber-500/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-md ${
              isDark
                ? 'bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-amber-500/15 border-amber-500/35 text-amber-200'
                : 'bg-amber-100/80 border-amber-400 text-amber-900 shadow-sm'
            }`}>
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wide">
                @mde.eventos • {t('header.motto')}
              </span>
            </div>

            {/* H1 Title */}
            <h1
              className={`font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              {t('hero.title.part1')}{' '}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-300 dark:via-amber-200 dark:to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy decoration-2">
                {t('hero.title.gradient')}
              </span>{' '}
              {t('hero.title.part2')}
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 w-full max-w-xl">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('hero.bullet1')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('hero.bullet2')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('hero.bullet3')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('proof.stat4.desc')}</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              {/* Primary WhatsApp CTA Button */}
              <a
                id="hero-cta-whatsapp"
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
                <span>{t('hero.cta.primary')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Fast Budget CTA */}
              <button
                id="hero-cta-orcamento"
                onClick={() => {
                  playButtonClick();
                  onOpenBudget();
                }}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base border shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-amber-500/30 hover:border-amber-500/60'
                    : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-amber-400 shadow-slate-200/80'
                }`}
              >
                <Calculator className="w-5 h-5 text-amber-500" />
                <span>{t('hero.cta.secondary')}</span>
              </button>
            </div>

            {/* Micro Social Trust Bar */}
            <div className={`flex items-center gap-4 pt-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Maceió & Alagoas • Brasil</span>
              </div>
              <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t('hero.leadBadge')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage / Highlight Card with Single Round Animated Logo */}
          <div className="lg:col-span-5 relative">
            {/* Background layered glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-purple-600/30 to-amber-600/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div
              className={`relative rounded-2xl border shadow-2xl overflow-hidden transition-colors ${
                isDark ? 'bg-[#0c101c] border-slate-800/90' : 'bg-white border-slate-200'
              }`}
            >
              {/* Media Container with Real Corporate Event Visual */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                  alt="Conecta Contábil Alagoas - Evento Corporativo MDE Eventos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0c101c] via-[#0c101c]/40 to-transparent' : 'from-black/70 via-black/20 to-transparent'
                  }`}
                />

                {/* Round Animated Logo floating badge in top left */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/75 backdrop-blur-md p-1.5 pr-3.5 rounded-full border border-amber-500/40">
                  <AnimatedRoundLogo size="md" onClick={() => playCoinSound()} />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-black text-white">MDE Eventos</span>
                    <span className="text-[9px] text-amber-300 font-bold uppercase">Sold-Out Alagoas</span>
                  </div>
                </div>

                {/* Live Attendee Pill */}
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>+800 Participantes</span>
                </div>
              </div>

              {/* Lower Info Box */}
              <div className="p-6 space-y-4 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`font-['Outfit'] text-lg font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                      Conecta Contábil: O Maior Encontro de Negócios de AL
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      Edições consolidadas de grande porte com ingressos 100% esgotados, feira de patrocinadores e networking qualificado.
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-bold px-2 py-1 rounded bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/40">
                    Sold Out
                  </span>
                </div>

                {/* Highlights mini grid */}
                <div className={`grid grid-cols-2 gap-2 pt-1 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <div className={`rounded-lg p-2.5 border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] uppercase font-bold text-amber-500 block">
                      Check-in
                    </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Sympla + QR Code 100%
                    </span>
                  </div>
                  <div className={`rounded-lg p-2.5 border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] uppercase font-bold text-purple-500 block">
                      Venue
                    </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Centro de Convenções AL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

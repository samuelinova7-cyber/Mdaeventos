import React from 'react';
import { Award, Sparkles, MessageCircle, Mic, CheckCircle2, Instagram, Target, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { playButtonClick, playCoinSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface FoundersSectionProps {
  whatsappPhone: string;
  onOpenBudget: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ whatsappPhone, onOpenBudget }) => {
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const foundersPhotoUrl =
    'https://res.cloudinary.com/hd1sahto/image/upload/v1793395554/SnapInsta.to_817531807_18088438463673962_7145530811541186708_n.jpg';
  const podcastVideoUrl =
    'https://res.cloudinary.com/hd1sahto/video/upload/v1793395578/SnapInsta.to_AQMZGAcndaCks5VmxCwfnQy27HhoZY3MLNskferkFd_e9BsdO1SyLVLAwBMpT0ACxjFdCT8AxLhAIVKwKgCxuHoBXMDiaRjPELDtYaw.mp4';

  const getDirectWhatsAppUrl = () => {
    let msg = 'Olá! Vi a história das sócias fundadoras e os mais de 20 anos de atuação da MDE Eventos. Gostaria de agendar uma reunião estratégica para meu evento.';
    if (language === 'en') {
      msg = 'Hello! I learned about the founding partners and MDE Eventos 20+ years of expertise. I would like to schedule a strategic consultation for our event.';
    } else if (language === 'es') {
      msg = '¡Hola! Conocí la historia de las socias fundadoras y los más de 20 años de experiencia de MDE Eventos. Quisiera agendar una reunión estratégica para mi evento.';
    }
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;
  };

  const getMissionText = () => {
    if (language === 'en') {
      return 'Fostering entrepreneurship and corporate growth through strategic solutions, turning executive visions into enduring and impactful milestones.';
    }
    if (language === 'es') {
      return 'Impulsar el espíritu empresarial mediante soluciones estratégicas, transformando visiones corporativas en realidades sólidas y duraderas.';
    }
    return BRAND_INFO.mission;
  };

  const getPurposeText = () => {
    if (language === 'en') {
      return 'Streamlining flawless event execution to ensure strict KPI control, high attendee satisfaction, and enduring brand prestige.';
    }
    if (language === 'es') {
      return 'Facilitar la ejecución de estrategias en eventos para garantizar el máximo control de resultados y la satisfacción de los asistentes.';
    }
    return BRAND_INFO.purpose;
  };

  return (
    <section
      id="socias"
      className={`relative py-20 border-t transition-colors duration-300 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#090d18] via-[#0e1424] to-[#090d18] border-amber-500/15'
          : 'bg-white border-slate-200'
      }`}
    >
      {/* Background glow lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-500 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('founders.badge')}</span>
          </div>
          <h2
            className={`font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {t('founders.title.part1')}{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-300 dark:via-amber-200 dark:to-amber-500 bg-clip-text text-transparent">
              {t('founders.title.brand')}
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {t('founders.subtitle')}
          </p>
        </div>

        {/* Top Cards: Missão & Propósito */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div
            className={`p-6 rounded-2xl border text-left space-y-2 transition-colors ${
              isDark
                ? 'bg-gradient-to-r from-slate-900/90 to-purple-950/40 border-amber-500/30'
                : 'bg-slate-50 border-amber-500/30 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5 text-amber-500 dark:text-amber-300 font-bold text-sm">
              <Target className="w-5 h-5 text-amber-500" />
              <span>{t('founders.mission.title')}</span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              {getMissionText()}
            </p>
          </div>

          <div
            className={`p-6 rounded-2xl border text-left space-y-2 transition-colors ${
              isDark
                ? 'bg-gradient-to-r from-slate-900/90 to-amber-950/30 border-purple-500/30'
                : 'bg-slate-50 border-purple-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-300 font-bold text-sm">
              <Compass className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>{t('founders.purpose.title')}</span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              {getPurposeText()}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Founders Photo in FULL SCALE (zero cortada) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Glowing border effect */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/40 via-purple-600/30 to-amber-400/40 rounded-3xl blur-xl opacity-80 animate-pulse pointer-events-none" />

            <div
              className={`relative w-full rounded-2xl border-2 overflow-hidden shadow-2xl p-2 sm:p-3 flex flex-col items-center ${
                isDark ? 'bg-[#080c16] border-amber-500/40' : 'bg-white border-amber-500/40'
              }`}
            >
              {/* Full scale uncropped photo container */}
              <div
                className={`w-full flex items-center justify-center rounded-xl overflow-hidden p-1 ${
                  isDark ? 'bg-[#050811]' : 'bg-slate-100'
                }`}
              >
                <img
                  src={foundersPhotoUrl}
                  alt="Sócias Fundadoras da MDE Eventos em escala total"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[640px] object-contain rounded-lg shadow-inner"
                />
              </div>

              {/* Lower Details Badge */}
              <div
                className={`w-full mt-3 p-4 rounded-xl border text-left ${
                  isDark ? 'bg-slate-950/90 border-amber-500/30' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className={`font-['Outfit'] font-black text-lg ${isDark ? 'text-white' : 'text-slate-950'}`}>
                      {t('founders.card.title')}
                    </h3>
                    <p className="text-xs text-amber-600 dark:text-amber-300 font-semibold">
                      {t('founders.card.sub')}
                    </p>
                  </div>
                  <a
                    href="https://instagram.com/mde.eventos"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playButtonClick()}
                    className="p-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-500 dark:text-amber-300 transition-colors"
                    aria-label="Instagram MDE"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Podcast Video (AUTOPLAY MUTED WITHOUT SOUND) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>{t('founders.story.badge')}</span>
            </div>

            <h3 className={`font-['Outfit'] text-2xl sm:text-3xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {t('founders.story.heading')}
            </h3>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t('founders.story.p1')}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className={`flex items-center gap-2 text-xs sm:text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('founders.check1')}</span>
              </div>
              <div className={`flex items-center gap-2 text-xs sm:text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('founders.check2')}</span>
              </div>
              <div className={`flex items-center gap-2 text-xs sm:text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('founders.check3')}</span>
              </div>
              <div className={`flex items-center gap-2 text-xs sm:text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('founders.check4')}</span>
              </div>
            </div>

            {/* Podcast Video in 9:16 Aspect Ratio - PLAYS MUTED WITHOUT SOUND */}
            <div
              className={`p-5 rounded-2xl border space-y-4 ${
                isDark
                  ? 'bg-gradient-to-r from-purple-950/40 to-slate-900 border-purple-500/40'
                  : 'bg-purple-50/50 border-purple-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-700 dark:text-purple-300">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`font-['Outfit'] font-bold text-sm ${isDark ? 'text-white' : 'text-slate-950'}`}>
                      {t('founders.podcast.title')}
                    </h4>
                    <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {t('founders.podcast.sub')} • {t('reels.livePlaying')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 9:16 Video Player Container (Autoplay without sound by default) */}
              <div className="w-full flex justify-center py-2">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border-2 border-purple-500/50 shadow-2xl">
                  <video
                    src={podcastVideoUrl}
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t('founders.cta.whatsapp')}</span>
              </a>

              <button
                onClick={() => {
                  playButtonClick();
                  onOpenBudget();
                }}
                className={`w-full sm:w-auto px-5 py-3 rounded-xl border font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 border-amber-500/30 text-amber-300'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-sm'
                }`}
              >
                {t('founders.cta.budget')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

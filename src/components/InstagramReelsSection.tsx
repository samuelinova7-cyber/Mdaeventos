import React, { useRef, useState, useEffect } from 'react';
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Music2,
  CheckCircle2,
  MoveRight,
  RefreshCw,
} from 'lucide-react';
import { playButtonClick, playCoinSound } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface ReelItem {
  id: string;
  title: string;
  title_en: string;
  title_es: string;
  category: string;
  category_en: string;
  category_es: string;
  videoUrl: string;
  likes: string;
  comments: string;
  caption: string;
  caption_en: string;
  caption_es: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-medico',
    title: 'Evento Dia do Médico (CREMAL)',
    title_en: 'Doctors Day Gala (CREMAL)',
    title_es: 'Evento Día del Médico (CREMAL)',
    category: 'Celebração & Homenagem',
    category_en: 'Celebration & Honors',
    category_es: 'Celebración y Homenaje',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395576/SnapInsta.to_AQOPJR407V6ALNDPGnDye0n1aw0iEMZwVDxa71zBkbV4ZYBx8BW4oGN-d0HEcGsvnBYSbiAHNoarNMaRXOKxa9mcRmAf4egcnafH2Yc.mp4',
    likes: '1.482',
    comments: '94',
    caption: 'Comemoração inesquecível do Dia do Médico! Detalhes pensados para homenagear essa profissão tão nobre. ✨🩺 #MDEventos #DiaDoMedico #Maceio',
    caption_en: 'Unforgettable Doctors Day celebration! Meticulous details to honor this noble profession. ✨🩺 #MDEventos #DoctorsDay',
    caption_es: '¡Inolvidable celebración del Día del Médico! Detalles pensados para honrar esta noble profesión. ✨🩺 #MDEventos #DiaDelMedico',
  },
  {
    id: 'reel-1',
    title: 'Bastidores & Estrutura',
    title_en: 'Backstage & Staging',
    title_es: 'Detrás de Escena y Estructura',
    category: 'Produção Executiva',
    category_en: 'Executive Production',
    category_es: 'Producción Ejecutiva',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395579/SnapInsta.to_AQNMK2K4djgM7-O7Qpug2AJP018jUVQQYQeyhX0rKY_hW0kjNCMR6zHrNCRKi0Xm8P3fPgkSxRruevAKZn-UBh4-EjTLDWrXhoL_TY0.mp4',
    likes: '2.105',
    comments: '138',
    caption: 'Quando a montagem ganha vida! Cada detalhe cenográfico e iluminação alinhados ao propósito do evento. 🚀 #EventosCorporativos #Alagoas',
    caption_en: 'When the stage setup comes to life! Every scenic detail and lighting aligned with the event purpose. 🚀 #CorporateEvents',
    caption_es: '¡Cuando el montaje cobra vida! Cada detalle escenográfico e iluminación alineados al propósito del evento. 🚀 #EventosCorporativos',
  },
  {
    id: 'reel-2',
    title: 'Energia & Networking',
    title_en: 'Energy & Networking',
    title_es: 'Energía y Networking',
    category: 'Congressos & Negócios',
    category_en: 'Congresses & Business',
    category_es: 'Congresos y Negocios',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395580/SnapInsta.to_AQM7ZsnbHE5FtsKNaXF2UqCe60FLw4sFHOnwb-LdUXpahepOtpBrAJhsrVdqEnHyu332W5uAUjeyRShs6YoxPje12HvUe7-x7K9Ty7Q.mp4',
    likes: '1.832',
    comments: '112',
    caption: 'Auditório lotado e conexões de alto nível! É sobre transformar encontros corporativos em experiências memoráveis. 💼✨',
    caption_en: 'Packed auditorium and high-level connections! Transforming corporate summits into memorable experiences. 💼✨',
    caption_es: '¡Auditorio lleno y conexiones de alto nivel! Transformando encuentros corporativos en experiencias memorables. 💼✨',
  },
  {
    id: 'reel-3',
    title: 'Painéis & Talk Shows',
    title_en: 'Panels & Keynotes',
    title_es: 'Paneles y Charlas',
    category: 'Palco & Tecnologia',
    category_en: 'Stage & Tech',
    category_es: 'Escenario y Tecnología',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395585/SnapInsta.to_AQNmLP6plCTLQMfTlpHapu_shOriGEOVO-8AY63zLRk5nXz2iwCh1qNmc-YEUK-HIdkDieoSwT3tumecgV6ITu10uh5SyDer-OQ3ok4.mp4',
    likes: '1.670',
    comments: '89',
    caption: 'Palestrantes de peso, timing impecável e recepção acolhedora. A fórmula do sucesso da MDE Eventos em ação! 🎤🌟',
    caption_en: 'Top speakers, impeccable timing, and warm reception. The winning formula of MDE Eventos in action! 🎤🌟',
    caption_es: 'Ponentes de prestigio, timing impecable y cálida recepción. ¡La fórmula ganadora de MDE Eventos en acción! 🎤🌟',
  },
  {
    id: 'reel-4',
    title: 'Expositores & Patrocinadores',
    title_en: 'Exhibitors & Sponsors',
    title_es: 'Expositores y Patrocinadores',
    category: 'Feira de Negócios',
    category_en: 'Trade Fair',
    category_es: 'Feria de Negocios',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395588/SnapInsta.to_AQNHxCrXrDbOX5HaIAth2myrTGNXOixkTFubVv5yRg6eiRcnVfhHdaWsyhUuKPLf_B_jQB9XT0bimqCPjYz6zhg2sndxtJa11BmoYIo.mp4',
    likes: '1.940',
    comments: '124',
    caption: 'Estandes que geram negócios reais e ativação de marcas! Cuidamos da logística completa de expositores. 📈🤝',
    caption_en: 'Booths that generate genuine business and brand activation! Complete logistics management for exhibitors. 📈🤝',
    caption_es: '¡Stands que generan negocios reales y posicionamiento de marca! Gestión logística integral para expositores. 📈🤝',
  },
  {
    id: 'reel-5',
    title: 'Momentos Épicos MDE',
    title_en: 'Epic MDE Moments',
    title_es: 'Momentos Épicos MDE',
    category: 'Highlights do Evento',
    category_en: 'Event Highlights',
    category_es: 'Highlights del Evento',
    videoUrl: 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395597/SnapInsta.to_AQOn55XnCrdeJl76eO6LaO5c-XMufBR3jJAE045dvcONfwQF0DsGD-iHFiSyQ75gB3iCmYKVKV7VRGpq3Ca-Vf0CX33DNDUTG4Wf5SE.mp4',
    likes: '2.540',
    comments: '176',
    caption: 'O resultado de semanas de planejamento: público encantado e missão cumprida com louvor! Vem viver a experiência MDE. 💫',
    caption_en: 'The result of weeks of planning: an enchanted audience and mission accomplished with flying colors! Live the MDE experience. 💫',
    caption_es: 'El resultado de semanas de planificación: ¡público encantado y misión cumplida con excelencia! Viva la experiencia MDE. 💫',
  },
];

export const InstagramReelsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [unmutedReelId, setUnmutedReelId] = useState<string | null>(null);
  const [pausedReelId, setPausedReelId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Ensure all videos play automatically on load (MUTED by default, zero sound)
  useEffect(() => {
    REELS_DATA.forEach((reel) => {
      const vid = videoRefs.current[reel.id];
      if (vid) {
        vid.muted = true;
        vid.play().catch(() => {
          // ignore policy if blocked
        });
      }
    });
  }, []);

  // AUTOMATIC HORIZONTAL SCROLLING: Moves sideways automatically across reels
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      // If reached or near the end, wrap smoothly back to start
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    playButtonClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    playButtonClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const toggleSound = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playCoinSound();

    if (unmutedReelId === reelId) {
      // Mute it back
      const currentVid = videoRefs.current[reelId];
      if (currentVid) currentVid.muted = true;
      setUnmutedReelId(null);
    } else {
      // Mute all other videos first
      Object.keys(videoRefs.current).forEach((id) => {
        const vid = videoRefs.current[id];
        if (vid) vid.muted = true;
      });

      // Unmute selected video
      const targetVid = videoRefs.current[reelId];
      if (targetVid) {
        targetVid.muted = false;
        targetVid.play().catch(() => {});
        setUnmutedReelId(reelId);
      }
    }
  };

  const togglePlayPause = (reelId: string) => {
    playButtonClick();
    const vid = videoRefs.current[reelId];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setPausedReelId(null);
    } else {
      vid.pause();
      setPausedReelId(reelId);
    }
  };

  const getReelCategory = (reel: ReelItem) => {
    if (language === 'en') return reel.category_en;
    if (language === 'es') return reel.category_es;
    return reel.category;
  };

  const getReelCaption = (reel: ReelItem) => {
    if (language === 'en') return reel.caption_en;
    if (language === 'es') return reel.caption_es;
    return reel.caption;
  };

  return (
    <section id="instagram-reels" className="relative py-16 bg-[#070a12] border-y border-purple-500/25 overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Profile Header Card */}
        <div className="mb-10 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#110d24] via-[#16122e] to-[#110d24] border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            {/* Instagram Profile Avatar with gradient ring */}
            <div className="relative group p-[3px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-xl shadow-pink-500/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-black p-0.5">
                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793395580/WhatsApp_Image_2026-10-30_at_4.25.30_PM.jpg"
                  alt="MDE Eventos Logo Instagram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-['Outfit'] text-xl sm:text-2xl font-black text-white">
                  @mde.eventos
                </h3>
                <span className="p-0.5 rounded-full bg-blue-500 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-blue-500 text-white" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {t('reels.profileBio')}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1 font-medium">
                <span><strong className="text-white">+20 Anos</strong></span>
                <span>•</span>
                <span><strong className="text-white">Alagoas & Brasil</strong></span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">{t('reels.livePlaying')}</span>
              </div>
            </div>
          </div>

          {/* Action: Follow button */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://instagram.com/mde.eventos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCoinSound()}
              id="btn-seguir-instagram"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:from-pink-500 hover:via-purple-500 hover:to-amber-400 text-white font-extrabold text-sm shadow-xl shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span>{t('reels.profileFollow')}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Section Title & Navigation controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('reels.badge')}</span>
            </div>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{t('reels.title')}</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30">
                <RefreshCw className="w-3 h-3 text-amber-400 animate-spin" />
                {t('reels.autoScroll')}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-md"
              aria-label="Voltar vídeos"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-md"
              aria-label="Avançar vídeos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reels Side-by-Side Auto-Scrolling Row with Drag, Swipe, and Pause on Hover */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS_DATA.map((reel) => {
            const isUnmuted = unmutedReelId === reel.id;
            const isPaused = pausedReelId === reel.id;

            return (
              <div
                key={reel.id}
                className="snap-start shrink-0 w-[270px] sm:w-[305px] rounded-3xl bg-[#0c101c] border-2 border-slate-800 hover:border-amber-400/70 overflow-hidden shadow-2xl relative group transition-all duration-300 flex flex-col justify-between"
              >
                {/* Reel Video Container (9:16) */}
                <div
                  className="relative h-[480px] sm:h-[520px] w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => togglePlayPause(reel.id)}
                >
                  <video
                    ref={(el) => (videoRefs.current[reel.id] = el)}
                    src={reel.videoUrl}
                    playsInline
                    loop
                    autoPlay
                    muted
                    preload="auto"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlays for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
                    <span>{getReelCategory(reel)}</span>
                  </div>

                  {/* Sound Toggle Button (Prominent & Clear, muted by default) */}
                  <button
                    onClick={(e) => toggleSound(reel.id, e)}
                    className={`absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transition-all ${
                      isUnmuted
                        ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 ring-2 ring-emerald-300'
                        : 'bg-black/70 backdrop-blur-md border border-white/20 text-amber-300 hover:bg-black/90'
                    }`}
                    title={isUnmuted ? t('reels.soundOff') : t('reels.soundOn')}
                    aria-label="Ligar ou desligar som"
                  >
                    {isUnmuted ? (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>{t('reels.soundOn')}</span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-4 h-4 text-slate-400" />
                        <span>{t('reels.soundOff')}</span>
                      </>
                    )}
                  </button>

                  {/* Pause state indicator if user paused */}
                  {isPaused && (
                    <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center pointer-events-none">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  )}

                  {/* Right Reel Side Actions (Instagram style) */}
                  <div className="absolute right-3 bottom-20 z-10 flex flex-col items-center gap-4 text-white text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playCoinSound();
                      }}
                      className="flex flex-col items-center gap-1 group/btn"
                    >
                      <div className="p-2.5 rounded-full bg-black/50 backdrop-blur-md group-hover/btn:bg-pink-600/80 transition-colors">
                        <Heart className="w-5 h-5 text-white group-hover/btn:fill-pink-500" />
                      </div>
                      <span className="text-[11px] font-bold">{reel.likes}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playButtonClick();
                      }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-2.5 rounded-full bg-black/50 backdrop-blur-md">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[11px] font-bold">{reel.comments}</span>
                    </button>

                    <a
                      href="https://instagram.com/mde.eventos"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playButtonClick();
                      }}
                      className="p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Bottom Information (User, title & audio) */}
                  <div className="absolute bottom-4 left-4 right-14 z-10 space-y-1.5 text-left pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="font-['Outfit'] font-black text-sm text-white drop-shadow">
                        @mde.eventos
                      </span>
                      <a
                        href="https://instagram.com/mde.eventos"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playCoinSound();
                        }}
                        className="px-2 py-0.5 rounded-full bg-pink-500/90 text-[10px] font-bold text-white hover:bg-pink-400 transition-colors pointer-events-auto"
                      >
                        {t('reels.follow')}
                      </a>
                    </div>

                    <p className="text-xs text-white/95 line-clamp-2 leading-relaxed drop-shadow">
                      {getReelCaption(reel)}
                    </p>

                    <div className="flex items-center gap-1.5 text-[10px] text-amber-300 font-medium">
                      <Music2 className="w-3 h-3 animate-spin" />
                      <span>{t('reels.audioOriginal')}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

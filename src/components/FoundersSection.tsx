import React, { useState } from 'react';
import { Award, Sparkles, MessageCircle, Mic, CheckCircle2, Instagram, Target, HeartHandshake, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { playButtonClick, playCoinSound } from '../utils/audio';

interface FoundersSectionProps {
  whatsappPhone: string;
  onOpenBudget: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ whatsappPhone, onOpenBudget }) => {
  const [isPlayingPodcast, setIsPlayingPodcast] = useState(false);

  const foundersPhotoUrl = 'https://res.cloudinary.com/hd1sahto/image/upload/v1793395554/SnapInsta.to_817531807_18088438463673962_7145530811541186708_n.jpg';
  const podcastVideoUrl = 'https://res.cloudinary.com/hd1sahto/video/upload/v1793395578/SnapInsta.to_AQMZGAcndaCks5VmxCwfnQy27HhoZY3MLNskferkFd_e9BsdO1SyLVLAwBMpT0ACxjFdCT8AxLhAIVKwKgCxuHoBXMDiaRjPELDtYaw.mp4';

  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá! Vi a história das sócias fundadoras e os mais de 20 anos de atuação da MDE Eventos. Gostaria de agendar uma reunião estratégica para meu evento.'
  )}`;

  return (
    <section id="socias" className="relative py-20 bg-gradient-to-b from-[#090d18] via-[#0e1424] to-[#090d18] border-t border-amber-500/15 overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{BRAND_INFO.experienceYears}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            As Sócias Fundadoras da{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              MDE Eventos
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Mais de duas décadas realizando eventos corporativos de sucesso em Alagoas e em vários estados do Brasil.
          </p>
        </div>

        {/* Top Cards: Missão & Propósito */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-purple-950/40 border border-amber-500/30 text-left space-y-2">
            <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
              <Target className="w-5 h-5 text-amber-400" />
              <span>Nossa Missão</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {BRAND_INFO.mission}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-amber-950/30 border border-purple-500/30 text-left space-y-2">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm">
              <Compass className="w-5 h-5 text-purple-400" />
              <span>Nosso Propósito</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {BRAND_INFO.purpose}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Founders Photo in FULL SCALE (zero cortada) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Glowing border effect */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/40 via-purple-600/30 to-amber-400/40 rounded-3xl blur-xl opacity-80 animate-pulse pointer-events-none" />

            <div className="relative w-full rounded-2xl bg-[#080c16] border-2 border-amber-500/40 overflow-hidden shadow-2xl p-2 sm:p-3 flex flex-col items-center">
              {/* Full scale uncropped photo container */}
              <div className="w-full flex items-center justify-center bg-[#050811] rounded-xl overflow-hidden p-1">
                <img
                  src={foundersPhotoUrl}
                  alt="Sócias Fundadoras da MDE Eventos em escala total"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[640px] object-contain rounded-lg shadow-inner"
                />
              </div>

              {/* Lower Details Badge */}
              <div className="w-full mt-3 p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 text-left">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-['Outfit'] font-black text-lg text-white">
                      Sócias Fundadoras • MDE Eventos
                    </h3>
                    <p className="text-xs text-amber-300 font-medium">
                      Eventos, Marketing & Soluções Empresariais • +20 Anos de Sucesso
                    </p>
                  </div>
                  <a
                    href="https://instagram.com/mde.eventos"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playButtonClick()}
                    className="p-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 transition-colors"
                    aria-label="Instagram MDE"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Podcast Video in 9:16 vertical ratio */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>Experiência Real & Conexões Corporativas</span>
            </div>

            <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white leading-tight">
              Uma abordagem consultiva que transforma expectativas em marcos históricos para sua empresa.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              À frente dos maiores congressos e encontros empresariais do estado, as fundadoras da <strong>MDE Eventos</strong> unem metodologia com controle de resultados, gestão de palestrantes e uma equipe experiente de secretariado e cerimonial.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gestão direta pelas fundadoras</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mais de 20 anos de atuação</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento em AL e em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Supervisão rigorosa de ponta a ponta</span>
              </div>
            </div>

            {/* Podcast Video in 9:16 Aspect Ratio as requested */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-sm text-white">
                      As Sócias no Podcast (Formato 9:16)
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Entrevista e visão estratégica sobre a execução de eventos memoráveis
                    </p>
                  </div>
                </div>
              </div>

              {/* 9:16 Video Player Container */}
              <div className="w-full flex justify-center py-2">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border-2 border-purple-500/50 shadow-2xl">
                  <video
                    src={podcastVideoUrl}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlayingPodcast(true)}
                    onPause={() => setIsPlayingPodcast(false)}
                  />
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Conversar com as Sócias no WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  playButtonClick();
                  onOpenBudget();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-300 font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

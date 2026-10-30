import React from 'react';
import { Instagram, MessageCircle, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { AnimatedRoundLogo } from './AnimatedRoundLogo';
import { playButtonClick, playCoinSound } from '../utils/audio';

interface FooterProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBudget, whatsappPhone }) => {
  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá, MDE Eventos! Gostaria de falar sobre a produção de um evento corporativo.'
  )}`;

  const scrollToTop = () => {
    playButtonClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070d] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-purple-900/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand Info with Larger Round Animated Logo */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Circular Animated Glowing Logo (Extra Large) */}
              <AnimatedRoundLogo size="lg" className="shrink-0" onClick={() => playCoinSound()} />

              <div className="flex flex-col">
                <span className="font-['Outfit'] font-black text-2xl sm:text-3xl text-white tracking-tight">
                  MDE Eventos
                </span>
                <span className="text-xs text-amber-300 font-bold flex items-center gap-1.5 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  "Cada evento tem um propósito"
                </span>
                <span className="text-[11px] text-slate-400">
                  Planejamento e Produção de Eventos Corporativos e Institucionais
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Conectar pessoas, empresas e oportunidades, entendendo que cada evento tem um propósito único para comunicar, fortalecer relacionamentos e criar experiências duradouras.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playButtonClick()}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram @mde.eventos"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp MDE Eventos"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white font-['Outfit']">
              Navegação Direta
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#instagram-reels"
                  onClick={() => playButtonClick()}
                  className="hover:text-pink-300 transition-colors text-pink-400 font-semibold"
                >
                  Reels do Instagram (@mde.eventos)
                </a>
              </li>
              <li>
                <a
                  href="#socias"
                  onClick={() => playButtonClick()}
                  className="hover:text-amber-300 transition-colors"
                >
                  Sócias & Liderança
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={() => playButtonClick()}
                  className="hover:text-amber-300 transition-colors"
                >
                  Soluções & Serviços
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  onClick={() => playButtonClick()}
                  className="hover:text-amber-300 transition-colors"
                >
                  Cases & Conecta Contábil
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={() => playButtonClick()}
                  className="hover:text-amber-300 transition-colors"
                >
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => playButtonClick()}
                  className="hover:text-amber-300 transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white font-['Outfit']">
              Atendimento & Contato
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playButtonClick()}
                  className="hover:underline hover:text-pink-300"
                >
                  {BRAND_INFO.handle}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCoinSound()}
                  className="hover:underline hover:text-emerald-300 font-medium"
                >
                  Falar no WhatsApp com a Especialista
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  playCoinSound();
                  onOpenBudget();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>Solicitar Proposta Comercial</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MDE Eventos. Todos os direitos reservados. Maceió - Alagoas e Brasil.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

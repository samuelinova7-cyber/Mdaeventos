import React from 'react';
import { Instagram, MessageCircle, MapPin, Mail, Sparkles, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FooterProps {
  onOpenBudget: () => void;
  whatsappPhone: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBudget, whatsappPhone }) => {
  const directWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Olá, MDE Eventos! Gostaria de falar sobre a produção de um evento corporativo.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070d] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-purple-800 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center font-['Outfit'] font-black text-lg text-amber-300">
                  MDE
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit'] font-extrabold text-xl text-white tracking-tight">
                  MDE Eventos
                </span>
                <span className="text-xs text-amber-300/80 font-medium">
                  Eventos Corporativos & Congressos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas em transformar congressos, feiras de negócios, talk shows e imersões corporativas em experiências estratégicas de alto impacto em Alagoas.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram @mde.eventos"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp MDE Eventos"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white font-['Outfit']">
              Navegação Direta
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-amber-300 transition-colors">
                  Sobre Nós & Autoridade
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-300 transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-amber-300 transition-colors">
                  Cases & Conecta Contábil
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-300 transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBudget}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Gerador de Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white font-['Outfit']">
              Atendimento & Contato
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Instagram className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-purple-300"
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
                  className="hover:underline hover:text-emerald-300 font-medium"
                >
                  Falar no WhatsApp com a Especialista
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBudget}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>Solicitar Proposta Comercial</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MDE Eventos. Todos os direitos reservados. Maceió - Alagoas.</p>

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

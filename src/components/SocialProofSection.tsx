import React from 'react';
import { Award, Users, Smile, CheckCircle2, Trophy, Landmark, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/content';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 bg-[#0a0e18] border-y border-amber-500/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-40 bg-purple-900/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner of Key Distinction */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-purple-950/40 to-slate-900/90 border border-amber-500/25 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Autoridade Comprovada em Alagoas</span>
              </div>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Organização do Maior Encontro de Contabilidade e Negócios de Alagoas
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                A <strong>MDE Eventos</strong> é a agência à frente da concepção e execução do consagrado <strong>Conecta Contábil Alagoas</strong>, além de fóruns executivos, congressos pedagógicos como o <strong>EduConecta</strong> e painéis de alta liderança como o <strong>L.I.V.R.E. Talks</strong>.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Experiência nos Maiores Espaços</div>
                  <div className="text-[11px] text-slate-400">Centros de Convenções e Resorts de AL</div>
                </div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Padronização Impecável</div>
                  <div className="text-[11px] text-slate-400">Cerimonial, Áudio & Cenografia VIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Outfit'] text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  {idx === 0 && <Award className="w-5 h-5" />}
                  {idx === 1 && <Users className="w-5 h-5" />}
                  {idx === 2 && <Smile className="w-5 h-5" />}
                  {idx === 3 && <CheckCircle2 className="w-5 h-5" />}
                </div>
              </div>
              <h3 className="font-['Outfit'] text-base font-bold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

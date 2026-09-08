import React from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-20 bg-[#080b12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-purple-950/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Depoimentos & Avaliações</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O Que Dizem Quem Já Realizou Eventos Conosco
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A confiança de líderes empresariais e comissões organizadoras em Alagoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative p-7 rounded-2xl bg-gradient-to-b from-[#0f1424] to-[#0a0d16] border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-amber-400/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs text-amber-300/90 font-medium">
                    {t.role} • {t.company}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Evento: {t.event}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

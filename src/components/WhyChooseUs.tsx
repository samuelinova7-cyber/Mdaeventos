import React from 'react';
import { Target, Clock, Network, FileText, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-amber-400" />,
      title: t('why.pillar1.title'),
      desc: t('why.pillar1.desc'),
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: t('why.pillar2.title'),
      desc: t('why.pillar2.desc'),
    },
    {
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      title: t('why.pillar3.title'),
      desc: t('why.pillar3.desc'),
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      title: t('why.pillar4.title'),
      desc: t('why.pillar4.desc'),
    },
  ];

  return (
    <section className="relative py-20 bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('why.badge')}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('why.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

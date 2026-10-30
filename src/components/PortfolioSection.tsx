import React, { useState } from 'react';
import { PORTFOLIO_CASES } from '../data/content';
import { PortfolioCase } from '../types';
import { CaseDetailModal } from './CaseDetailModal';
import { MapPin, Users, ArrowUpRight, Award, Camera } from 'lucide-react';
import { playButtonClick, playCoinSound } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioSectionProps {
  whatsappPhone: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ whatsappPhone }) => {
  const [selectedCase, setSelectedCase] = useState<PortfolioCase | null>(null);
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('portfolio.filter.all') },
    { id: 'congress', label: t('portfolio.filter.congress') },
    { id: 'fairs', label: t('portfolio.filter.fairs') },
    { id: 'institutional', label: t('portfolio.filter.institutional') },
  ];

  const filteredCases = PORTFOLIO_CASES.filter((c) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'congress') return c.category.includes('Congresso') || c.category.includes('Fórum');
    if (activeFilter === 'fairs') return c.category.includes('Feira') || c.category.includes('Inovação');
    if (activeFilter === 'institutional') return c.category.includes('CREMAL') || c.category.includes('Institucional') || c.category.includes('Odontologia') || c.category.includes('Talk Show');
    return true;
  });

  return (
    <section id="cases" className="relative py-20 bg-[#0a0e19] border-t border-amber-500/10">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wide">
              <Camera className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('portfolio.badge')}</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t('portfolio.title')}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playButtonClick();
                  setActiveFilter(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                playCoinSound();
                setSelectedCase(item);
              }}
              className="group cursor-pointer rounded-2xl bg-[#0f1424] border border-slate-800/80 hover:border-amber-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom & Gradient */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1424] via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Participants Tag on Image bottom */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-bold text-slate-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.participants}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.highlights[0]}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-300 group-hover:underline flex items-center gap-1">
                    {t('portfolio.viewCase')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Detail Modal */}
      <CaseDetailModal
        item={selectedCase}
        onClose={() => setSelectedCase(null)}
        whatsappPhone={whatsappPhone}
      />
    </section>
  );
};

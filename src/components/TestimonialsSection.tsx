import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquarePlus, Send, Check } from 'lucide-react';
import { playButtonClick, playCoinSound, playPowerUpSound } from '../utils/audio';

export const TestimonialsSection: React.FC = () => {
  const [userRating, setUserRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [authorName, setAuthorName] = useState('');
  const [authorCompany, setAuthorCompany] = useState('');
  const [commentText, setCommentText] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const reviewShiningImageUrl = 'https://res.cloudinary.com/hd1sahto/image/upload/v1793395582/WhatsApp_Image_2026-10-30_at_6.10.27_PM.jpg';

  const handleStarClick = (score: number) => {
    playCoinSound();
    setUserRating(score);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    playPowerUpSound();
    setHasSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setHasSubmitted(false);
      setCommentText('');
      setAuthorName('');
      setAuthorCompany('');
    }, 2800);
  };

  return (
    <section id="depoimentos" className="relative py-20 bg-[#080b12] border-t border-amber-500/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-purple-950/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Avaliações & Reconhecimento</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Excelência Aprovada por Grandes Líderes de Alagoas
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A garantia de quem já confiou congressos e encontros corporativos nas mãos da MDE Eventos.
          </p>
        </div>

        {/* Featured Image with Shining / Glowing Effect */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-500 shadow-2xl shadow-amber-500/20 logo-glow">
            <div className="relative rounded-[22px] overflow-hidden bg-slate-950 image-shine">
              <img
                src={reviewShiningImageUrl}
                alt="Avaliação e Excelência do Serviço MDE Eventos"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[480px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Subtle shining gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/30">
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-white font-bold text-xs ml-2">Nota Máxima 5.0</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium">
                    Compromisso e credibilidade comprovados em dezenas de eventos corporativos.
                  </p>
                </div>

                <button
                  onClick={() => {
                    playButtonClick();
                    setShowReviewModal(true);
                  }}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>Avaliar o Serviço</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
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
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic text-left">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5 text-left">
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

      {/* Interactive Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0e1424] border border-amber-500/40 p-6 sm:p-8 text-left shadow-2xl">
            <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-2">
              Avaliar os Serviços da MDE Eventos
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Sua avaliação ajuda a fortalecer o ecossistema corporativo de Alagoas.
            </p>

            {hasSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in zoom-in-95">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Avaliação Enviada com Sucesso!</h4>
                <p className="text-xs text-emerald-200">
                  Muito obrigado por compartilhar sua experiência com a equipe MDE Eventos!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Star Picker */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Sua Nota (Clique nas estrelas):
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 hover:scale-125 transition-transform"
                        aria-label={`Nota ${star}`}
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= (hoverRating || userRating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-300 ml-2">
                      {userRating === 5 ? 'Excelente / Nota Máxima (5.0)' : `${userRating}.0 Estrelas`}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Seu Nome & Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Mariana Costa - Diretora"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Empresa / Evento Realizado *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Congresso Alagoano de Inovação"
                    value={authorCompany}
                    onChange={(e) => setAuthorCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Seu Depoimento / Avaliação *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Conte como foi sua experiência com a equipe MDE Eventos..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publicar Avaliação</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

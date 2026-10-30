import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquarePlus, Send, Check } from 'lucide-react';
import { playButtonClick, playCoinSound, playPowerUpSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const [userRating, setUserRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [authorName, setAuthorName] = useState('');
  const [authorCompany, setAuthorCompany] = useState('');
  const [commentText, setCommentText] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const reviewShiningImageUrl =
    'https://res.cloudinary.com/hd1sahto/image/upload/v1793395582/WhatsApp_Image_2026-10-30_at_6.10.27_PM.jpg';

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

  const getTranslatedQuote = (id: string, defaultQuote: string) => {
    if (language === 'en') {
      if (id === '1') {
        return 'The 3rd Conecta Contábil had sold-out attendance and flawless organization. From Sympla credentialing to speaker logistics and timing control, MDE Eventos delivered an unforgettable experience for over 800 delegates in Alagoas.';
      }
      if (id === '2') {
        return 'Producing Doctors Day alongside CREMAL requires absolute ceremonial precision, solemnity, and hospitality. MDE Eventos delivered with exemplary elegance and punctuality.';
      }
      if (id === '3') {
        return 'EduConecta brought multiple simultaneous rooms and major education leaders together. The stagecraft, audiovisuals, and warm reception surpassed all our expectations!';
      }
    }
    if (language === 'es') {
      if (id === '1') {
        return 'El 3º Conecta Contábil tuvo entradas totalmente agotadas y una ejecución impecable. Desde la acreditación con Sympla hasta la logística de ponentes y tiempos, MDE Eventos brindó una experiencia inolvidable para más de 800 congresistas.';
      }
      if (id === '2') {
        return 'Organizar el Día del Médico junto al CREMAL exige precisión ceremonial absoluta, solemnidad y calidez. MDE Eventos cumplió con una elegancia y puntualidad ejemplares.';
      }
      if (id === '3') {
        return 'EduConecta reunió múltiples salas simultáneas y a grandes referentes de la educación. ¡La escenografía, el audio y la calidez del equipo superaron todas las expectativas!';
      }
    }
    return defaultQuote;
  };

  return (
    <section
      id="depoimentos"
      className={`relative py-20 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#080b12] border-amber-500/15' : 'bg-slate-50 border-amber-500/20'
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-purple-950/15 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2
            className={`font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {t('testimonials.title')}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Featured Image with Shining / Glowing Effect */}
        <div className="mb-14 max-w-4xl mx-auto space-y-4">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-500 shadow-2xl shadow-amber-500/20 logo-glow">
            <div className={`relative rounded-[22px] overflow-hidden image-shine ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
              <img
                src={reviewShiningImageUrl}
                alt="Avaliação e Excelência do Serviço MDE Eventos"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[500px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Clean Message Box Placed Directly Below Image (Unblocking the entire photo) */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border shadow-lg transition-colors ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-white'
                : 'bg-white border-amber-500/30 text-slate-900 shadow-amber-500/5'
            }`}
          >
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className={`font-bold text-xs ml-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  5.0 ★
                </span>
              </div>
              <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {t('testimonials.imageSub')}
              </p>
            </div>

            <button
              onClick={() => {
                playButtonClick();
                setShowReviewModal(true);
              }}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{t('testimonials.ctaReview')}</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className={`relative p-7 rounded-2xl border shadow-xl transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-gradient-to-b from-[#0f1424] to-[#0a0d16] border-slate-800 hover:border-amber-500/40 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-amber-400 text-slate-700 shadow-slate-200/60'
              }`}
            >
              <Quote className="w-8 h-8 text-amber-400/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  className={`text-sm leading-relaxed mb-6 italic text-left ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  "{getTranslatedQuote(item.id, item.quote)}"
                </p>
              </div>

              {/* Author Info */}
              <div
                className={`pt-4 border-t flex items-center gap-3.5 text-left ${
                  isDark ? 'border-slate-800/80' : 'border-slate-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <div
                    className={`text-sm font-bold flex items-center gap-1.5 ${
                      isDark ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <div className="text-xs text-amber-500 dark:text-amber-300/90 font-medium">
                    {item.role} • {item.company}
                  </div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Evento: {item.event}
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
          <div
            className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 text-left shadow-2xl ${
              isDark
                ? 'bg-[#0e1424] border-amber-500/40 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <h3 className={`font-['Outfit'] text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {t('testimonials.modal.title')}
            </h3>
            <p className={`text-xs mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {t('testimonials.modal.subtitle')}
            </p>

            {hasSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in zoom-in-95">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">
                  {language === 'en' ? 'Review Submitted Successfully!' : language === 'es' ? '¡Opinión Enviada con Éxito!' : 'Avaliação Enviada com Sucesso!'}
                </h4>
                <p className="text-xs text-emerald-200">
                  {language === 'en' ? 'Thank you for sharing your experience with MDE Eventos!' : language === 'es' ? '¡Muchas gracias por compartir su experiencia con MDE Eventos!' : 'Muito obrigado por compartilhar sua experiência com a equipe MDE Eventos!'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Star Picker */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t('testimonials.modal.rating')}:
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
                              : isDark ? 'text-slate-600' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-500 dark:text-amber-300 ml-2">
                      {userRating === 5 ? '5.0 ★' : `${userRating}.0`}
                    </span>
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t('testimonials.modal.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Mariana Costa"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-amber-400 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t('testimonials.modal.company')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Grupo Alfa / Congresso 2026"
                    value={authorCompany}
                    onChange={(e) => setAuthorCompany(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-amber-400 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t('testimonials.modal.comment')} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={language === 'en' ? 'Share your experience with MDE Eventos...' : language === 'es' ? 'Comparta su experiencia con el equipo de MDE Eventos...' : 'Conte como foi sua experiência com a equipe MDE Eventos...'}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs outline-none focus:border-amber-400 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {language === 'en' ? 'Cancel' : language === 'es' ? 'Cancelar' : 'Cancelar'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('testimonials.modal.submit')}</span>
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

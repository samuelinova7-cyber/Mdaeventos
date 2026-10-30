import React from 'react';
import { Award, Users, Smile, CheckCircle2, Trophy, Landmark, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const SocialProofSection: React.FC = () => {
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const getStats = () => {
    return [
      {
        value: t('proof.stat1.val'),
        label: t('proof.stat1.label'),
        subtext: t('proof.stat1.desc'),
      },
      {
        value: t('proof.stat2.val'),
        label: t('proof.stat2.label'),
        subtext: t('proof.stat2.desc'),
      },
      {
        value: t('proof.stat3.val'),
        label: t('proof.stat3.label'),
        subtext: t('proof.stat3.desc'),
      },
      {
        value: t('proof.stat4.val'),
        label: t('proof.stat4.label'),
        subtext: t('proof.stat4.desc'),
      },
    ];
  };

  const getFeaturedClients = () => {
    if (language === 'en') {
      return [
        {
          name: 'CREMAL',
          role: 'Regional Medical Council of Alagoas',
          tag: 'Official Doctors Day Solemnity',
        },
        {
          name: 'Arcos Odontologia',
          role: 'Advanced Dental Center & Clinic',
          tag: 'Corporate Events & Launches',
        },
        {
          name: 'Conecta Contábil Alagoas',
          role: 'Largest Business & Accounting Summit in AL',
          tag: 'Full Production & 800+ Delegates',
        },
        {
          name: 'EduConecta',
          role: 'Regional Education & Management Congress',
          tag: 'Multi-Room Venue & Innovation Expo',
        },
      ];
    }

    if (language === 'es') {
      return [
        {
          name: 'CREMAL',
          role: 'Consejo Regional de Medicina de Alagoas',
          tag: 'Alianza Institucional y Día del Médico',
        },
        {
          name: 'Arcos Odontologia',
          role: 'Clínica y Centro de Odontología Avanzada',
          tag: 'Eventos Corporativos y Lanzamientos',
        },
        {
          name: 'Conecta Contábil Alagoas',
          role: 'Mayor Encuentro de Negocios de AL',
          tag: 'Producción Completa y +800 Asistentes',
        },
        {
          name: 'EduConecta',
          role: 'Congreso Regional de Educación y Gestión',
          tag: 'Salas Simultáneas y Feria de Innovación',
        },
      ];
    }

    return [
      {
        name: 'CREMAL',
        role: 'Conselho Regional de Medicina de Alagoas',
        tag: 'Parceria Institucional & Evento do Dia do Médico',
      },
      {
        name: 'Arcos Odontologia',
        role: 'Clínica & Centro de Odontologia Avançada',
        tag: 'Eventos Corporativos & Lançamentos',
      },
      {
        name: 'Conecta Contábil Alagoas',
        role: 'Maior Encontro de Negócios e Contabilidade de AL',
        tag: 'Produção Completa & +800 Congressistas',
      },
      {
        name: 'EduConecta',
        role: 'Congresso Regional de Educação & Gestão',
        tag: 'Multi-Salas & Feira de Inovação',
      },
    ];
  };

  const stats = getStats();
  const clients = getFeaturedClients();

  return (
    <section
      id="sobre"
      className={`relative py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0a0e18] border-amber-500/10' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-40 bg-purple-900/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner of Key Distinction */}
        <div
          className={`mb-12 p-6 sm:p-8 rounded-2xl border shadow-xl relative overflow-hidden transition-colors ${
            isDark
              ? 'bg-gradient-to-r from-slate-900/90 via-purple-950/40 to-slate-900/90 border-amber-500/25'
              : 'bg-white border-amber-500/30 shadow-slate-200/80'
          }`}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-300 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('proof.badge')}</span>
              </div>
              <h2
                className={`font-['Outfit'] text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                {t('proof.title')}
              </h2>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {language === 'en'
                  ? 'MDE Eventos is the premier event agency responsible for planning and executing the acclaimed Conecta Contábil Alagoas, the official CREMAL Doctors Day celebration, Arcos Odontologia clinical symposiums, EduConecta educational congresses, and executive forums like L.I.V.R.E. Talks.'
                  : language === 'es'
                    ? 'MDE Eventos es la agencia líder detrás de la concepción y ejecución del consagrado Conecta Contábil Alagoas, la gala del CREMAL (Día del Médico), simposios de Arcos Odontologia, congresos como EduConecta y foros ejecutivos como L.I.V.R.E. Talks.'
                    : 'A MDE Eventos é a agência à frente da concepção e execução do consagrado Conecta Contábil Alagoas, da solenidade oficial do CREMAL (Dia do Médico), de encontros clínicos da Arcos Odontologia, congressos pedagógicos como o EduConecta e painéis de liderança executiva como o L.I.V.R.E. Talks.'}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div
                className={`px-4 py-3 rounded-xl border flex items-center gap-3 text-left ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-500 shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    {language === 'en' ? 'Top Convention Center Expertise' : language === 'es' ? 'Centros de Convenciones y Resorts' : 'Experiência nos Maiores Espaços'}
                  </div>
                  <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {language === 'en' ? 'Maceió Convention Center & Across Brazil' : language === 'es' ? 'Alagoas y en todo Brasil' : 'Centros de Convenções e Resorts do Brasil'}
                  </div>
                </div>
              </div>
              <div
                className={`px-4 py-3 rounded-xl border flex items-center gap-3 text-left ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    {language === 'en' ? 'Impeccable Standards' : language === 'es' ? 'Estandarización Impecable' : 'Padronização Impecável'}
                  </div>
                  <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {language === 'en' ? 'VIP Protocol, Audio & Staging' : language === 'es' ? 'Ceremonial, Audio y Escenografía' : 'Cerimonial, Áudio & Cenografia VIP'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients & Institutional Trust Bar */}
        <div
          className={`mb-12 p-6 rounded-2xl border text-left transition-colors ${
            isDark ? 'bg-[#0e1424] border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-100'
            }`}
          >
            <div>
              <span className="text-[11px] uppercase font-bold text-amber-500 tracking-wider">
                {t('proof.clientsTitle')}
              </span>
              <h3 className={`font-['Outfit'] text-lg font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {language === 'en' ? 'Leading Organizations That Rely on MDE Eventos' : language === 'es' ? 'Organizaciones de Relevancia que Confían en MDE' : 'Organizações de Relevância que Confiam na MDE'}
              </h3>
            </div>
            <span className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Alagoas & Brasil
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-colors space-y-1 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-amber-500/40'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className={`font-['Outfit'] font-black text-sm ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {client.name}
                  </span>
                </div>
                <div className={`text-xs font-medium truncate ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {client.role}
                </div>
                <div className="text-[11px] text-amber-600 dark:text-amber-300/80 font-semibold">
                  {client.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative group p-6 rounded-2xl border transition-all duration-300 shadow-lg text-left ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-gradient-to-tr from-amber-500/10 to-purple-600/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Award className="w-6 h-6" />}
                  {idx === 1 && <Users className="w-6 h-6" />}
                  {idx === 2 && <Smile className="w-6 h-6" />}
                  {idx === 3 && <CheckCircle2 className="w-6 h-6" />}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                  {language === 'en' ? 'Verified' : language === 'es' ? 'Verificado' : 'Comprovado'}
                </span>
              </div>
              <div
                className={`font-['Outfit'] text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm font-bold mb-1 ${
                  isDark ? 'text-amber-200' : 'text-amber-700'
                }`}
              >
                {stat.label}
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

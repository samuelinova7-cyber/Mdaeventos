import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  Copy,
  Check,
  Calendar,
  Building2,
  User,
  Phone,
  Users,
  MapPin,
  Sparkles,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';
import { BudgetFormData } from '../types';
import { playButtonClick, playCoinSound, playPowerUpSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface BudgetGeneratorSectionProps {
  whatsappPhone: string;
  onUpdatePhone?: (newPhone: string) => void;
  preselectedService?: string;
}

export const BudgetGeneratorSection: React.FC<BudgetGeneratorSectionProps> = ({
  whatsappPhone,
  onUpdatePhone,
  preselectedService,
}) => {
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const budgetShiningImageUrl =
    'https://res.cloudinary.com/hd1sahto/image/upload/v1793395581/WhatsApp_Image_2026-10-30_at_6.10.26_PM.jpg';

  const getEventTypeOptions = () => {
    if (language === 'en') {
      return [
        'Congresses & Trade Fairs',
        'Corporate Training / Workshop',
        'Talk Show & Keynotes',
        'Business Summit & Roundtables',
        'Corporate Gala / Celebration',
        'Custom Format',
      ];
    }
    if (language === 'es') {
      return [
        'Congresos y Ferias',
        'Capacitación Corporativa / Taller',
        'Talk Show y Conferencias',
        'Encuentro Empresarial y Rueda de Negocios',
        'Celebración Corporativa',
        'Otro Formato',
      ];
    }
    return [
      'Congressos & Feiras',
      'Treinamento Corporativo / Workshop',
      'Talk Show & Palestras',
      'Encontro Empresarial & Rodada de Negócios',
      'Confraternização Corporativa',
      'Outro Formato',
    ];
  };

  const getGuestOptions = () => {
    if (language === 'en') {
      return [
        'Up to 50 attendees',
        '50 to 100 attendees',
        '100 to 250 attendees',
        '250 to 500 attendees',
        '500 to 1,000 attendees',
        'Over 1,000 attendees',
      ];
    }
    if (language === 'es') {
      return [
        'Hasta 50 personas',
        '50 a 100 personas',
        '100 a 250 personas',
        '250 a 500 personas',
        '500 a 1.000 personas',
        'Más de 1.000 personas',
      ];
    }
    return [
      'Até 50 pessoas',
      '50 a 100 pessoas',
      '100 a 250 pessoas',
      '250 a 500 pessoas',
      '500 a 1.000 pessoas',
      'Mais de 1.000 pessoas',
    ];
  };

  const getServiceOptions = () => {
    if (language === 'en') {
      return [
        '360° Planning & Management',
        'Sponsorship Procurement',
        'Sympla Credentialing & Ticketing',
        'Stage Design & Scenography',
        'Audio, Lighting & LED Wall',
        'Ceremonial, Reception & Security',
        'Photo & Video Coverage',
      ];
    }
    if (language === 'es') {
      return [
        'Planificación y Gestión 360°',
        'Captación de Patrocinadores',
        'Acreditación y Boletos Sympla',
        'Escenografía y Estructura de Escenario',
        'Audio, Iluminación y Pantalla LED',
        'Ceremonial, Recepción y Seguridad',
        'Cobertura de Foto y Video',
      ];
    }
    return [
      'Planejamento e Gestão 360°',
      'Captação de Patrocinadores',
      'Credenciamento & Ingressos Sympla',
      'Cenografia & Estrutura de Palco',
      'Áudio, Iluminação & LED',
      'Cerimonial, Recepção & Segurança',
      'Cobertura Fotográfica & Vídeo',
    ];
  };

  const eventTypeOptions = getEventTypeOptions();
  const guestOptions = getGuestOptions();
  const serviceOptions = getServiceOptions();

  const [formData, setFormData] = useState<BudgetFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    eventType: eventTypeOptions[0],
    guestCount: guestOptions[2],
    dateEstimate: language === 'en' ? 'Next 3 to 6 months' : language === 'es' ? 'Próximos 3 a 6 meses' : 'Próximos 3 a 6 meses',
    location: 'Maceió - AL',
    servicesNeeded: preselectedService
      ? [preselectedService]
      : [serviceOptions[0], serviceOptions[2]],
    notes: '',
  });

  const [copied, setCopied] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappPhone);

  const toggleService = (service: string) => {
    playButtonClick();
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const buildFormattedMessage = () => {
    const nome = formData.name.trim() || (language === 'en' ? '[Your Name]' : language === 'es' ? '[Su Nombre]' : '[Seu Nome]');
    const empresa = formData.company.trim() || (language === 'en' ? '[Your Company]' : language === 'es' ? '[Su Empresa]' : '[Sua Empresa]');
    const telefone = formData.phone.trim() || (language === 'en' ? '[Your Phone]' : language === 'es' ? '[Su Teléfono]' : '[Seu WhatsApp]');
    const tipo = formData.eventType;
    const convidados = formData.guestCount;
    const data = formData.dateEstimate.trim() || (language === 'en' ? '[TBD]' : language === 'es' ? '[Por Definir]' : '[A Definir]');
    const local = formData.location.trim() || 'Maceió - AL';
    const servicos = formData.servicesNeeded.length > 0 ? formData.servicesNeeded.join(', ') : 'Completo';

    if (language === 'en') {
      const obs = formData.notes.trim() ? `\n📌 *Notes:* ${formData.notes}` : '';
      return `Hello! I would like to request a quote for our upcoming event with *MDE Eventos*. Details below:

👤 *Name:* ${nome}
🏢 *Company:* ${empresa}
📱 *Phone:* ${telefone}
🎯 *Event Type:* ${tipo}
👥 *Attendees:* ${convidados}
📅 *Target Date:* ${data}
📍 *City/Venue:* ${local}
✨ *Services Needed:* ${servicos}${obs}

Looking forward to your consultation and planning proposal!`;
    }

    if (language === 'es') {
      const obs = formData.notes.trim() ? `\n📌 *Observaciones:* ${formData.notes}` : '';
      return `¡Hola! Deseo cotizar la organización de nuestro evento con *MDE Eventos*. A continuación los detalles:

👤 *Nombre:* ${nome}
🏢 *Empresa:* ${empresa}
📱 *WhatsApp:* ${telefone}
🎯 *Tipo de Evento:* ${tipo}
👥 *Nº de Asistentes:* ${convidados}
📅 *Fecha Prevista:* ${data}
📍 *Ciudad/Sede:* ${local}
✨ *Servicios Requeridos:* ${servicos}${obs}

¡Quedo a la espera de su respuesta para comenzar la planificación!`;
    }

    const obs = formData.notes.trim() ? `\n📌 *Observações:* ${formData.notes}` : '';
    return `Olá! Gostaria de um orçamento para meu evento com a *MDE Eventos*. Seguem as informações:

👤 *Nome:* ${nome}
🏢 *Empresa:* ${empresa}
📱 *WhatsApp:* ${telefone}
🎯 *Tipo de Evento:* ${tipo}
👥 *Nº de Convidados:* ${convidados}
📅 *Data Prevista:* ${data}
📍 *Cidade/Local:* ${local}
✨ *Serviços de Interesse:* ${servicos}${obs}

Aguardo o retorno para darmos início ao planejamento!`;
  };

  const formattedMessage = buildFormattedMessage();
  const dynamicWhatsAppUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(formattedMessage)}`;

  const handleCopyMessage = () => {
    playCoinSound();
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    playPowerUpSound();

    try {
      const currentLeads = JSON.parse(localStorage.getItem('mde_leads') || '[]');
      const newLead = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        formattedWhatsAppUrl: dynamicWhatsAppUrl,
      };
      localStorage.setItem('mde_leads', JSON.stringify([newLead, ...currentLeads]));
    } catch (err) {
      console.log('Error caching lead', err);
    }

    setShowSuccessBanner(true);
    window.open(dynamicWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSavePhone = () => {
    playButtonClick();
    const cleanPhone = tempPhone.replace(/\D/g, '');
    if (cleanPhone.length >= 10 && onUpdatePhone) {
      onUpdatePhone(cleanPhone);
      setIsEditingPhone(false);
    }
  };

  return (
    <section
      id="orcamento"
      className={`relative py-20 border-t transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#080b13] border-amber-500/15' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>{t('budget.badge')}</span>
          </div>
          <h2
            className={`font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {t('budget.title')}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {t('budget.subtitle')}
          </p>
        </div>

        {/* Shining Budget Banner Image */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-400 via-amber-200 to-purple-600 shadow-2xl shadow-amber-500/20 logo-glow">
            <div className={`relative rounded-[22px] overflow-hidden image-shine ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
              <img
                src={budgetShiningImageUrl}
                alt="Orçamento Personalizado MDE Eventos"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[500px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Clean Message Box Placed Directly Below Image (Not covering the photo) */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border shadow-lg transition-colors ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-white'
                : 'bg-white border-amber-500/30 text-slate-900 shadow-amber-500/5'
            }`}
          >
            <div className="text-left">
              <span className="text-xs uppercase font-extrabold text-amber-500 dark:text-amber-400 tracking-wider block mb-1">
                {t('budget.imageBadge')}
              </span>
              <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {t('budget.imageSub')}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">WhatsApp VIP</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Phone Config Bar */}
        <div
          className={`max-w-4xl mx-auto mb-8 p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 text-xs ${
            isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <PhoneCall className="w-4 h-4 text-emerald-500" />
            <span>
              WhatsApp Destino:{' '}
              <strong className={isDark ? 'text-white' : 'text-slate-950'}>
                +{whatsappPhone} (MDE)
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isEditingPhone ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="5582999990000"
                  className={`px-2.5 py-1 rounded border text-xs outline-none ${
                    isDark ? 'bg-slate-950 border-amber-500/50 text-white' : 'bg-slate-50 border-amber-500 text-slate-900'
                  }`}
                />
                <button
                  onClick={handleSavePhone}
                  className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-xs"
                >
                  Salvar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditingPhone(true)}
                className={`text-[11px] underline font-medium hover:text-amber-500 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
              >
                Alterar Número
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Form + Live Chat Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border shadow-2xl relative text-left transition-colors ${
              isDark ? 'bg-[#0d1222] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('budget.form.contactName')} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('budget.form.contactNamePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 focus:border-amber-400 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <Building2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('budget.form.eventName')} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('budget.form.eventNamePlaceholder')}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 focus:border-amber-400 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{t('budget.form.contactPhone')} *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t('budget.form.contactPhonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 focus:border-emerald-400 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('budget.form.city')}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('budget.form.cityPlaceholder')}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 focus:border-amber-400 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              {/* Row 3: Event Type */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('budget.form.eventType')} *</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {eventTypeOptions.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => {
                        playButtonClick();
                        setFormData({ ...formData, eventType: type });
                      }}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                        formData.eventType === type
                          ? isDark
                            ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                            : 'bg-amber-100 border-amber-500 text-amber-900 font-bold'
                          : isDark
                            ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Guests & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <Users className="w-3.5 h-3.5 text-purple-500" />
                    <span>{t('budget.form.guests')}</span>
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => {
                      playButtonClick();
                      setFormData({ ...formData, guestCount: e.target.value });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white focus:border-amber-400'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-500'
                    }`}
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('budget.form.date')}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('budget.form.datePlaceholder')}
                    value={formData.dateEstimate}
                    onChange={(e) => setFormData({ ...formData, dateEstimate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 focus:border-amber-400 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              {/* Row 5: Services Checkboxes */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('budget.form.needs')}:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((service) => {
                    const isChecked = formData.servicesNeeded.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer border text-xs transition-all ${
                          isChecked
                            ? isDark
                              ? 'bg-purple-950/40 border-purple-500/50 text-purple-200 font-semibold'
                              : 'bg-purple-50 border-purple-400 text-purple-900 font-semibold'
                            : isDark
                              ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleService(service)}
                          className="rounded border-slate-400 text-purple-600 focus:ring-purple-500 h-3.5 w-3.5"
                        />
                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Additional Notes */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('budget.form.notes')}
                </label>
                <textarea
                  rows={2}
                  placeholder={t('budget.form.notesPlaceholder')}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs outline-none ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 focus:border-amber-400 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900 placeholder-slate-400 focus:bg-white'
                  }`}
                />
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                id="btn-enviar-orcamento-whatsapp"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>{t('budget.form.submit')}</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                {t('budget.securityNote')}
              </p>
            </form>
          </div>

          {/* Right Side: Live WhatsApp Message Simulator */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden flex flex-col transition-colors ${
                isDark ? 'bg-[#0e1626] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              {/* WhatsApp Header bar */}
              <div
                className={`px-4 py-3 flex items-center justify-between border-b ${
                  isDark ? 'bg-[#1f2c34] border-slate-700/60' : 'bg-[#008069] text-white border-[#006b57]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-400/50">
                    <img
                      src="https://res.cloudinary.com/hd1sahto/image/upload/v1793395580/WhatsApp_Image_2026-10-30_at_4.25.30_PM.jpg"
                      alt="Logo MDE WhatsApp"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xs text-white">MDE Eventos • WhatsApp VIP</div>
                    <div className="text-[10px] text-emerald-200 dark:text-emerald-400 font-medium">
                      Online agora
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-100 dark:text-slate-400 font-mono">WhatsApp</div>
              </div>

              {/* Chat Canvas */}
              <div
                className={`p-4 sm:p-5 min-h-[340px] flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0b141a] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] bg-[size:16px_16px]'
                    : 'bg-[#efeae2] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px]'
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`max-w-[85%] rounded-lg rounded-tl-none p-3 text-xs shadow text-left ${
                      isDark ? 'bg-[#202c33] text-slate-200' : 'bg-white text-slate-800'
                    }`}
                  >
                    <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">MDE Eventos:</p>
                    {language === 'en'
                      ? 'Hello! We are ready to execute your event to perfection. Here is the formatted message we will receive:'
                      : language === 'es'
                        ? '¡Hola! Estamos listos para coordinar su evento con excelencia. Este es el mensaje formateado que recibiremos:'
                        : 'Olá! Estamos prontos para planejar o seu evento com excelência. Veja a mensagem prévia que enviaremos:'}
                  </div>

                  <div
                    className={`max-w-[92%] ml-auto rounded-lg rounded-tr-none p-3.5 text-xs shadow-md space-y-1.5 leading-relaxed font-sans text-left ${
                      isDark
                        ? 'bg-[#005c4b] text-white'
                        : 'bg-[#d9fdd3] text-slate-900 border border-emerald-300/40'
                    }`}
                  >
                    <p className={`font-bold ${isDark ? 'text-emerald-200' : 'text-emerald-900'}`}>
                      {language === 'en'
                        ? 'Event Quote Request for MDE Eventos:'
                        : language === 'es'
                          ? 'Solicitud de Presupuesto MDE Eventos:'
                          : 'Olá! Gostaria de um orçamento para meu evento. Seguem as informações:'}
                    </p>
                    <div
                      className={`text-[11px] space-y-1 pt-1 border-t ${
                        isDark ? 'text-emerald-50 border-emerald-700/50' : 'text-slate-800 border-emerald-200'
                      }`}
                    >
                      <div>👤 <strong>{language === 'en' ? 'Name' : language === 'es' ? 'Nombre' : 'Nome'}:</strong> {formData.name || (language === 'en' ? 'Your Name' : 'Seu Nome')}</div>
                      <div>🏢 <strong>{language === 'en' ? 'Company' : language === 'es' ? 'Empresa' : 'Empresa'}:</strong> {formData.company || (language === 'en' ? 'Your Company' : 'Sua Empresa')}</div>
                      <div>📱 <strong>WhatsApp:</strong> {formData.phone || '+55 (82) 99999-9999'}</div>
                      <div>🎯 <strong>{language === 'en' ? 'Event' : language === 'es' ? 'Evento' : 'Tipo'}:</strong> {formData.eventType}</div>
                      <div>👥 <strong>{language === 'en' ? 'Guests' : language === 'es' ? 'Asistentes' : 'Convidados'}:</strong> {formData.guestCount}</div>
                      <div>📅 <strong>{language === 'en' ? 'Date' : language === 'es' ? 'Fecha' : 'Data'}:</strong> {formData.dateEstimate || 'TBD'}</div>
                      <div>📍 <strong>{language === 'en' ? 'City' : language === 'es' ? 'Ciudad' : 'Cidade'}:</strong> {formData.location || 'Maceió - AL'}</div>
                      <div>✨ <strong>{language === 'en' ? 'Services' : language === 'es' ? 'Servicios' : 'Serviços'}:</strong> {formData.servicesNeeded.join(', ') || 'Completo'}</div>
                      {formData.notes && <div>📌 <strong>Obs:</strong> {formData.notes}</div>}
                    </div>
                    <div className={`text-[9px] text-right pt-1 font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      Live Preview ✓✓
                    </div>
                  </div>
                </div>

                {/* Micro Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-sm'
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? (language === 'en' ? 'Copied!' : language === 'es' ? '¡Copiado!' : 'Mensagem Copiada!') : (language === 'en' ? 'Copy Text' : language === 'es' ? 'Copiar Texto' : 'Copiar Texto')}</span>
                  </button>

                  <a
                    href={dynamicWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playCoinSound()}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Benefit reassurance box */}
            <div
              className={`p-4 rounded-xl border space-y-2 text-left ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-500 dark:text-amber-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{language === 'en' ? 'Rapid Business-Hours Response' : language === 'es' ? 'Respuesta Rápida en Horario Comercial' : 'Atendimento Ágil em Horário Comercial'}</span>
              </div>
              <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {language === 'en'
                  ? 'Our specialists evaluate convention center availability, delegate counts, and structural setups to provide a tailored estimate.'
                  : language === 'es'
                    ? 'Nuestra especialista evalúa disponibilidad de fechas, aforo y logística para brindarle una estimación exacta.'
                    : 'Nossa especialista analisa a disponibilidade de datas, perfil do público e estrutura de centros de convenções em Alagoas para enviar uma estimativa precisa.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

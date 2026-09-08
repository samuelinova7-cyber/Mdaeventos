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
  Sliders,
  CheckCircle2,
  PhoneCall,
  RotateCcw,
} from 'lucide-react';
import { BudgetFormData, EventType } from '../types';

interface BudgetGeneratorSectionProps {
  whatsappPhone: string;
  onUpdatePhone?: (newPhone: string) => void;
  preselectedService?: string;
}

const EVENT_TYPE_OPTIONS: EventType[] = [
  'Congressos & Feiras',
  'Treinamento Corporativo / Workshop',
  'Talk Show & Palestras',
  'Encontro Empresarial & Rodada de Negócios',
  'Confraternização Corporativa',
  'Outro Formato',
];

const GUEST_OPTIONS = [
  'Até 50 pessoas',
  '50 a 100 pessoas',
  '100 a 250 pessoas',
  '250 a 500 pessoas',
  '500 a 1.000 pessoas',
  'Mais de 1.000 pessoas',
];

const SERVICE_OPTIONS = [
  'Planejamento e Gestão 360°',
  'Captação de Patrocinadores',
  'Credenciamento & Ingressos Sympla',
  'Cenografia & Estrutura de Palco',
  'Áudio, Iluminação & LED',
  'Cerimonial, Recepção & Segurança',
  'Cobertura Fotográfica & Vídeo',
];

export const BudgetGeneratorSection: React.FC<BudgetGeneratorSectionProps> = ({
  whatsappPhone,
  onUpdatePhone,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BudgetFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    eventType: 'Congressos & Feiras',
    guestCount: '100 a 250 pessoas',
    dateEstimate: 'Próximos 3 a 6 meses',
    location: 'Maceió - AL',
    servicesNeeded: preselectedService ? [preselectedService] : ['Planejamento e Gestão 360°', 'Credenciamento & Ingressos Sympla'],
    notes: '',
  });

  const [copied, setCopied] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappPhone);

  const toggleService = (service: string) => {
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

  // Build the formatted text
  const buildFormattedMessage = () => {
    const nome = formData.name.trim() || '[Seu Nome]';
    const empresa = formData.company.trim() || '[Sua Empresa]';
    const telefone = formData.phone.trim() || '[Seu WhatsApp]';
    const tipo = formData.eventType;
    const convidados = formData.guestCount;
    const data = formData.dateEstimate.trim() || '[A Definir]';
    const local = formData.location.trim() || 'Maceió - AL';
    const servicos = formData.servicesNeeded.length > 0 ? formData.servicesNeeded.join(', ') : 'Completo';
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
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save lead to localStorage for local history
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
    const cleanPhone = tempPhone.replace(/\D/g, '');
    if (cleanPhone.length >= 10 && onUpdatePhone) {
      onUpdatePhone(cleanPhone);
      setIsEditingPhone(false);
    }
  };

  return (
    <section id="orcamento" className="relative py-20 bg-[#080b13] border-t border-amber-500/15">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Gerador Rápido de Orçamento</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Monte o Orçamento do Seu Evento em 1 Minuto
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Preencha os detalhes do seu evento corporativo e receba uma proposta personalizada diretamente no seu WhatsApp.
          </p>
        </div>

        {/* WhatsApp Phone Config Bar */}
        <div className="max-w-4xl mx-auto mb-8 p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>
              Destino do Orçamento:{' '}
              <strong className="text-white">+{whatsappPhone} (MDE Especialista)</strong>
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
                  className="px-2.5 py-1 rounded bg-slate-950 border border-amber-500/50 text-white text-xs"
                />
                <button
                  onClick={handleSavePhone}
                  className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                >
                  Salvar
                </button>
                <button
                  onClick={() => setIsEditingPhone(false)}
                  className="px-2 py-1 text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditingPhone(true)}
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
              >
                Alterar número de teste
              </button>
            )}
          </div>
        </div>

        {/* Main Interactive Form + Live WhatsApp Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Left Side */}
          <div className="lg:col-span-7 bg-[#0d121f] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Seu Nome / Responsável *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Mariana Costa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Empresa / Instituição *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Associação de Médicos de AL"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm placeholder-slate-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Seu WhatsApp com DDD *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(82) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-white text-sm placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cidade / Local Pretendido</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Maceió - AL, Arapiraca ou outro"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 text-white text-sm placeholder-slate-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Event Type */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tipo de Evento *</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EVENT_TYPE_OPTIONS.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, eventType: type })}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-medium border transition-all ${
                        formData.eventType === type
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>Estimativa de Participantes</span>
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm outline-none focus:border-amber-400"
                  >
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g} className="bg-slate-900">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Data Prevista / Mês</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Outubro/2026 ou 2º Semestre"
                    value={formData.dateEstimate}
                    onChange={(e) => setFormData({ ...formData, dateEstimate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 text-white text-sm placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Services Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Serviços Desejados (Selecione os que precisa):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const isChecked = formData.servicesNeeded.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer border text-xs transition-all ${
                          isChecked
                            ? 'bg-purple-950/40 border-purple-500/50 text-purple-200 font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleService(service)}
                          className="rounded border-slate-700 text-purple-600 focus:ring-purple-500 h-3.5 w-3.5"
                        />
                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Observações ou Requisitos Especiais (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Necessidade de transmissão ao vivo híbrida, necessidade de captação de 10 patrocinadores..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 text-white text-xs placeholder-slate-500 outline-none"
                />
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                id="btn-enviar-orcamento-whatsapp"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Enviar e Solicitar Orçamento no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Side: Live WhatsApp Message Simulator */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* WhatsApp App Mockup Box */}
            <div className="rounded-2xl bg-[#0e1626] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              {/* WhatsApp Header bar */}
              <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-purple-600 p-[1px]">
                    <div className="w-full h-full rounded-full bg-[#080B11] flex items-center justify-center text-xs font-black text-amber-300">
                      MDE
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#1f2c34]" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">MDE Eventos • Especialista</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Online agora para orçamentos</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">WhatsApp</div>
              </div>

              {/* Chat Canvas */}
              <div className="p-4 sm:p-5 bg-[#0b141a] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] bg-[size:16px_16px] min-h-[340px] flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Agency incoming intro */}
                  <div className="max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] p-3 text-slate-200 text-xs shadow">
                    <p className="font-semibold text-emerald-400 mb-1">Especialista MDE:</p>
                    Olá! Estamos prontos para planejar o seu evento com excelência. Veja a mensagem prévia que enviaremos:
                  </div>

                  {/* Outgoing dynamic message bubble */}
                  <div className="max-w-[92%] ml-auto rounded-lg rounded-tr-none bg-[#005c4b] p-3.5 text-white text-xs shadow-md space-y-1.5 leading-relaxed font-sans">
                    <p className="font-bold text-emerald-200">
                      Olá! Gostaria de um orçamento para meu evento. Seguem as informações:
                    </p>
                    <div className="text-[11px] text-emerald-50 space-y-1 pt-1 border-t border-emerald-700/50">
                      <div>👤 <strong>Nome:</strong> {formData.name || 'Seu Nome'}</div>
                      <div>🏢 <strong>Empresa:</strong> {formData.company || 'Sua Empresa'}</div>
                      <div>📱 <strong>WhatsApp:</strong> {formData.phone || 'Seu Telefone'}</div>
                      <div>🎯 <strong>Tipo de Evento:</strong> {formData.eventType}</div>
                      <div>👥 <strong>Nº Convidados:</strong> {formData.guestCount}</div>
                      <div>📅 <strong>Data Prevista:</strong> {formData.dateEstimate || 'A definir'}</div>
                      <div>📍 <strong>Cidade/Local:</strong> {formData.location || 'Maceió - AL'}</div>
                      <div>✨ <strong>Serviços:</strong> {formData.servicesNeeded.join(', ') || 'Completo'}</div>
                      {formData.notes && <div>📌 <strong>Obs:</strong> {formData.notes}</div>}
                    </div>
                    <div className="text-[9px] text-emerald-300 text-right pt-1">
                      Visualização em Tempo Real ✓✓
                    </div>
                  </div>
                </div>

                {/* Micro Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Mensagem Copiada!' : 'Copiar Texto'}</span>
                  </button>

                  <a
                    href={dynamicWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Testar Link</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Benefit reassurance box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento Ágil em Horário Comercial</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Nossa especialista analisa a disponibilidade de datas, perfil do público e estrutura de centros de convenções em Alagoas para enviar uma estimativa precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Sparkles, Star, MessageCircle, CheckCircle2, X } from 'lucide-react';
import { playNotificationSound, playButtonClick } from '../utils/audio';

interface NotificationItem {
  id: string;
  type: 'review' | 'budget';
  title: string;
  description: string;
  timeAgo: string;
  avatarText?: string;
  rating?: number;
}

const SAMPLE_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    type: 'budget',
    title: 'Novo Orçamento Solicitado!',
    description: 'Dra. Tatiana (Hospital Regional de AL) solicitou proposta para Congresso de 350 pessoas.',
    timeAgo: 'Há 4 minutos',
    avatarText: 'TR',
  },
  {
    id: 'n2',
    type: 'review',
    title: 'Nova Avaliação 5 Estrelas! ⭐⭐⭐⭐⭐',
    description: '"Equipe incrível! O Conecta Contábil foi um marco no nosso setor."',
    timeAgo: 'Há 12 minutos',
    avatarText: 'CC',
    rating: 5,
  },
  {
    id: 'n3',
    type: 'budget',
    title: 'Orçamento Enviado via WhatsApp',
    description: 'Grupo Empresarial de Maceió solicitou gestão para Workshop & Rodada de Negócios.',
    timeAgo: 'Há 18 minutos',
    avatarText: 'GE',
  },
  {
    id: 'n4',
    type: 'review',
    title: 'Cliente Encantado! ⭐⭐⭐⭐⭐',
    description: '"Credenciamento com QR Code sem nenhuma fila para 800 congressistas. Nota 10!"',
    timeAgo: 'Há 25 minutos',
    avatarText: 'MV',
    rating: 5,
  },
  {
    id: 'n5',
    type: 'budget',
    title: 'Nova Proposta em Andamento',
    description: 'Associação Médica de Alagoas reservou data para Encontro Científico 2026/2027.',
    timeAgo: 'Há 32 minutos',
    avatarText: 'AM',
  },
];

interface LiveNotificationToastsProps {
  onOpenBudget: () => void;
}

export const LiveNotificationToasts: React.FC<LiveNotificationToastsProps> = ({ onOpenBudget }) => {
  const [currentNotification, setCurrentNotification] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay before first toast
    const initialTimer = setTimeout(() => {
      showNextNotification(0);
    }, 4500);

    return () => clearTimeout(initialTimer);
  }, []);

  const showNextNotification = (idx: number) => {
    const nextItem = SAMPLE_NOTIFICATIONS[idx % SAMPLE_NOTIFICATIONS.length];
    setCurrentNotification(nextItem);
    setIsVisible(true);
    playNotificationSound();

    // Auto hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 6500);

    // Schedule next notification in 14-18 seconds
    const nextDelay = 14000 + Math.random() * 4000;
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      showNextNotification(idx + 1);
    }, nextDelay);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleClickToast = () => {
    playButtonClick();
    onOpenBudget();
  };

  if (!currentNotification || !isVisible) return null;

  return (
    <div
      onClick={handleClickToast}
      className="fixed bottom-6 left-6 z-50 max-w-sm sm:max-w-md cursor-pointer animate-in slide-in-from-bottom-5 fade-in duration-300"
    >
      <div className="relative rounded-2xl bg-[#0e1424]/95 backdrop-blur-md border border-amber-500/35 p-4 shadow-2xl shadow-black/80 hover:border-amber-400 hover:scale-[1.02] transition-all group">
        {/* Glow indicator */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-purple-600/20 blur opacity-75 group-hover:opacity-100 transition duration-300 -z-10" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2.5 right-2.5 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3.5 pr-4">
          {/* Avatar / Badge */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
              currentNotification.type === 'budget'
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30'
            }`}
          >
            {currentNotification.type === 'budget' ? (
              <MessageCircle className="w-5 h-5 fill-slate-950" />
            ) : (
              <Star className="w-5 h-5 fill-slate-950" />
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-white">
                {currentNotification.title}
              </span>
              <span className="text-[10px] text-slate-400">
                {currentNotification.timeAgo}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-snug line-clamp-2">
              {currentNotification.description}
            </p>

            <div className="pt-1 flex items-center justify-between text-[11px] text-amber-300/90 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {currentNotification.type === 'budget' ? 'Atendimento Prioritário' : 'Avaliação Verificada'}
              </span>
              <span className="text-[10px] underline decoration-amber-400/50">
                Clique para simular
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

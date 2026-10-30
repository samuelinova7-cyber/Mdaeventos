import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, CheckCircle2, X } from 'lucide-react';
import { playNotificationSound, playButtonClick } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface NotificationItem {
  id: string;
  type: 'review' | 'budget';
  title: string;
  description: string;
  timeAgo: string;
  avatarText?: string;
  rating?: number;
}

interface LiveNotificationToastsProps {
  onOpenBudget: () => void;
}

export const LiveNotificationToasts: React.FC<LiveNotificationToastsProps> = ({ onOpenBudget }) => {
  const { language } = useLanguage();
  const [currentNotification, setCurrentNotification] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getNotifications = (): NotificationItem[] => {
    if (language === 'en') {
      return [
        {
          id: 'n1',
          type: 'budget',
          title: 'New Quote Requested!',
          description: 'Dr. Tatiana (Regional Health AL) requested a quote for a 350-delegate medical congress.',
          timeAgo: '4 min ago',
        },
        {
          id: 'n2',
          type: 'review',
          title: 'New 5-Star Review! ⭐⭐⭐⭐⭐',
          description: '"Incredible team! Conecta Contábil was an absolute milestone for our industry."',
          timeAgo: '12 min ago',
          rating: 5,
        },
        {
          id: 'n3',
          type: 'budget',
          title: 'Quote Sent via WhatsApp',
          description: 'Corporate Group from Maceió requested 360° management for their annual leadership summit.',
          timeAgo: '18 min ago',
        },
        {
          id: 'n4',
          type: 'review',
          title: 'Delighted Client! ⭐⭐⭐⭐⭐',
          description: '"Zero line QR code credentialing for 800 attendees. Flawless execution!"',
          timeAgo: '25 min ago',
          rating: 5,
        },
      ];
    }

    if (language === 'es') {
      return [
        {
          id: 'n1',
          type: 'budget',
          title: '¡Nueva Cotización Solicitada!',
          description: 'Dra. Tatiana (Hospital Regional AL) solicitó propuesta para congreso de 350 personas.',
          timeAgo: 'Hace 4 min',
        },
        {
          id: 'n2',
          type: 'review',
          title: '¡Nueva Opinión de 5 Estrellas! ⭐⭐⭐⭐⭐',
          description: '"¡Equipo increíble! Conecta Contábil marcó un hito en nuestro sector."',
          timeAgo: 'Hace 12 min',
          rating: 5,
        },
        {
          id: 'n3',
          type: 'budget',
          title: 'Presupuesto Enviado por WhatsApp',
          description: 'Grupo Empresarial solicitó gestión 360° para taller y rueda de negocios.',
          timeAgo: 'Hace 18 min',
        },
        {
          id: 'n4',
          type: 'review',
          title: '¡Cliente Encantado! ⭐⭐⭐⭐⭐',
          description: '"Acreditación QR sin ninguna fila para 800 congresistas. ¡Calificación 10!"',
          timeAgo: 'Hace 25 min',
          rating: 5,
        },
      ];
    }

    return [
      {
        id: 'n1',
        type: 'budget',
        title: 'Novo Orçamento Solicitado!',
        description: 'Dra. Tatiana (Hospital Regional de AL) solicitou proposta para Congresso de 350 pessoas.',
        timeAgo: 'Há 4 minutos',
      },
      {
        id: 'n2',
        type: 'review',
        title: 'Nova Avaliação 5 Estrelas! ⭐⭐⭐⭐⭐',
        description: '"Equipe incrível! O Conecta Contábil foi um marco no nosso setor."',
        timeAgo: 'Há 12 minutos',
        rating: 5,
      },
      {
        id: 'n3',
        type: 'budget',
        title: 'Orçamento Enviado via WhatsApp',
        description: 'Grupo Empresarial de Maceió solicitou gestão para Workshop & Rodada de Negócios.',
        timeAgo: 'Há 18 minutos',
      },
      {
        id: 'n4',
        type: 'review',
        title: 'Cliente Encantado! ⭐⭐⭐⭐⭐',
        description: '"Credenciamento com QR Code sem nenhuma fila para 800 congressistas. Nota 10!"',
        timeAgo: 'Há 25 minutos',
        rating: 5,
      },
    ];
  };

  useEffect(() => {
    const list = getNotifications();
    const initialTimer = setTimeout(() => {
      showNextNotification(0, list);
    }, 4500);

    return () => clearTimeout(initialTimer);
  }, [language]);

  const showNextNotification = (idx: number, list: NotificationItem[]) => {
    const nextItem = list[idx % list.length];
    setCurrentNotification(nextItem);
    setIsVisible(true);
    playNotificationSound();

    setTimeout(() => {
      setIsVisible(false);
    }, 6500);

    const nextDelay = 15000 + Math.random() * 4000;
    setTimeout(() => {
      showNextNotification(idx + 1, list);
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
      <div className="relative rounded-2xl bg-[#0e1424]/95 backdrop-blur-md border border-amber-500/35 p-4 shadow-2xl shadow-black/80 hover:border-amber-400 hover:scale-[1.02] transition-all group text-left">
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
                {currentNotification.type === 'budget'
                  ? (language === 'en' ? 'VIP Priority Response' : language === 'es' ? 'Atención Prioritaria' : 'Atendimento Prioritário')
                  : (language === 'en' ? 'Verified Review' : language === 'es' ? 'Opinión Verificada' : 'Avaliação Verificada')}
              </span>
              <span className="text-[10px] underline decoration-amber-400/50">
                {language === 'en' ? 'Click to quote' : language === 'es' ? 'Clic para cotizar' : 'Clique para simular'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

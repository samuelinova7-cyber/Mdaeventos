import React from 'react';

interface AnimatedRoundLogoProps {
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const AnimatedRoundLogo: React.FC<AnimatedRoundLogoProps> = ({
  size = 'lg',
  className = '',
  onClick,
}) => {
  const officialLogoUrl =
    'https://res.cloudinary.com/hd1sahto/image/upload/v1793395580/WhatsApp_Image_2026-10-30_at_4.25.30_PM.jpg';

  // Size mapping (much larger than standard)
  const sizeClasses = {
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center cursor-pointer group ${sizeClasses[size]} ${className}`}
    >
      {/* Outer Rotating Conic Gradient Aura */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-spin" style={{ animationDuration: '7s' }} />

      {/* Second pulsing inner aura */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-300 via-purple-500 to-amber-400 opacity-90 animate-pulse pointer-events-none" />

      {/* Main Round Container with Border */}
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-[2.5px] bg-gradient-to-b from-amber-300 via-amber-500 to-purple-600 shadow-2xl shadow-amber-500/30">
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative">
          <img
            src={officialLogoUrl}
            alt="MDE Eventos Logo Oficial Redonda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
          />

          {/* Shimmer light reflection over the round glass lens */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Mini floating gold spark dot */}
      <span className="absolute -top-1 -right-1 z-20 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-r from-amber-400 to-amber-200 border-2 border-[#080B11]"></span>
      </span>
    </div>
  );
};

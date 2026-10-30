import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { playButtonClick } from '../utils/audio';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'compact' | 'expanded';
  className?: string;
}

const LANGUAGES: { code: Language; label: string; flag: string; shortName: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', shortName: 'PT' },
  { code: 'en', label: 'English', flag: '🇺🇸', shortName: 'EN' },
  { code: 'es', label: 'Español', flag: '🇪🇸', shortName: 'ES' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'compact', className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const { isDark } = useTheme();

  const handleSelect = (code: Language) => {
    playButtonClick();
    setLanguage(code);
  };

  if (variant === 'expanded') {
    return (
      <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
      } ${className}`}>
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? isDark
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span className="text-sm">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl border backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-slate-900/90 border-slate-800'
          : 'bg-slate-100/95 border-slate-300'
      } ${className}`}
      title="Selecionar Idioma / Select Language / Seleccionar Idioma"
    >
      <div className="pl-1.5 pr-1 hidden sm:flex items-center text-amber-500 dark:text-amber-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      {LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            aria-label={`Mudar idioma para ${lang.label}`}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
              isActive
                ? isDark
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm shadow-amber-500/20'
                  : 'bg-white text-slate-950 shadow-sm border border-slate-200'
                : isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
            }`}
          >
            <span className="text-xs leading-none">{lang.flag}</span>
            <span className="leading-none">{lang.shortName}</span>
          </button>
        );
      })}
    </div>
  );
};

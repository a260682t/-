import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { SupportedLang } from '../i18n/translations';

interface LanguageSelectorProps {
  currentLang: SupportedLang;
  onSelectLang: (lang: SupportedLang) => void;
}

const LANGUAGES: { code: SupportedLang; label: string; native: string }[] = [
  { code: 'ja', label: '日本語', native: '日本語' },
  { code: 'en', label: 'English', native: 'English' },
  { code: 'zh-CN', label: '简体中文', native: '简体中文' },
  { code: 'zh-TW', label: '繁體中文', native: '繁體中文' },
  { code: 'ko', label: '한국어', native: '한국어' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 min-h-[44px] text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-700 cursor-pointer"
        aria-label="言語選択 / Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
        <span className="hidden sm:inline">{activeLang.native}</span>
        <span className="sm:hidden font-mono uppercase text-[11px]">{activeLang.code.split('-')[0]}</span>
        <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-36 bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLang(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-sky-500/20 text-sky-300 font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{lang.native}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Compass, ShoppingBag } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';
import { RegionKey, REGIONS_META } from '../data/regionalFishData';

interface HeaderProps {
  onOpenSdgsModal: () => void;
  basketCount: number;
  onOpenBasket: () => void;
  currentLang: SupportedLang;
  onSelectLang: (lang: SupportedLang) => void;
  currentRegion: RegionKey;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSdgsModal,
  basketCount,
  onOpenBasket,
  currentLang,
  onSelectLang,
  currentRegion,
}) => {
  const t = TRANSLATIONS[currentLang];
  const regionMeta = REGIONS_META[currentRegion];

  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 text-white backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-4 h-14 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold shrink-0">
            <span className="text-sm sm:text-base">魚</span>
          </div>
          <span className="text-sm sm:text-lg font-bold tracking-tight text-white truncate">
            {t.appName}
          </span>
        </div>

        {/* Zone 2: Informational trust marker */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-300 truncate">
          <span>{regionMeta.portsHeadline[currentLang]}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-400 font-medium">{t.surplusArrivalGood}</span>
        </div>

        {/* Zone 3: Actions (Language + SDGs + Basket) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Multilingual Selector */}
          <LanguageSelector
            currentLang={currentLang}
            onSelectLang={onSelectLang}
          />

          {/* Focused Element: SDGs Button */}
          <button
            onClick={onOpenSdgsModal}
            className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 min-h-[44px] min-w-[38px] sm:min-w-0 text-xs font-medium text-sky-200 bg-sky-950/70 border border-sky-800/80 rounded-lg hover:bg-sky-900 hover:text-white transition-colors cursor-pointer shrink-0"
            title={t.sdgsFullButton}
            aria-label={t.sdgsFullButton}
          >
            <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="hidden md:inline">{t.sdgsFullButton}</span>
            <span className="hidden sm:inline md:hidden">{t.sdgsButton}</span>
          </button>

          {/* Basket Button */}
          <button
            onClick={onOpenBasket}
            className="relative flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 min-h-[44px] min-w-[38px] sm:min-w-0 text-xs font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-500 active:scale-95 transition-all shadow-xs cursor-pointer shrink-0"
            title={t.basketButton}
            aria-label={t.basketButton}
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{t.basketButton}</span>
            {basketCount > 0 && (
              <span className="bg-emerald-500 text-slate-950 font-bold text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center -mr-0.5 sm:-mr-1">
                {basketCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

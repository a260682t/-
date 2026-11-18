import React from 'react';
import { TrendingUp, Sparkles, Anchor } from 'lucide-react';
import { RegionKey, REGIONS_META } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface MarketTickerProps {
  currentRegion: RegionKey;
  lang: SupportedLang;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({
  currentRegion,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const meta = REGIONS_META[currentRegion];

  return (
    <div className="bg-slate-950 text-slate-200 border-b border-slate-800 text-xs py-2 px-3 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded font-semibold text-[11px]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{t.todayFlash}</span>
        </div>

        <div className="flex-1 overflow-x-auto no-scrollbar whitespace-nowrap text-xs text-slate-300 flex items-center gap-6 py-0.5">
          <span className="inline-flex items-center gap-1.5">
            <Anchor className="w-3 h-3 text-sky-400" />
            <span className="font-semibold text-white">{meta.name[lang]}:</span>
            <span>{meta.tickerHeadline[lang]}</span>
          </span>

          <span className="text-slate-600">·</span>

          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">{t.sdgsManagement}:</span>
            <span>{t.zeroAirFreight}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MapPin } from 'lucide-react';
import { RegionKey, REGIONS_META } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface RegionSelectorProps {
  currentRegion: RegionKey;
  onSelectRegion: (region: RegionKey) => void;
  lang: SupportedLang;
}

export const RegionSelector: React.FC<RegionSelectorProps> = ({
  currentRegion,
  onSelectRegion,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const regionKeys: RegionKey[] = ['kanto', 'hokkaido', 'west', 'hokuriku'];

  return (
    <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium px-1 shrink-0">
        <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
        <span>{t.regionLabel}</span>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-0.5 sm:pb-0">
        {regionKeys.map((key) => {
          const isSelected = key === currentRegion;
          const meta = REGIONS_META[key];
          const regionName = meta.name[lang] || meta.name.ja;

          return (
            <button
              key={key}
              onClick={() => onSelectRegion(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap min-h-[38px] transition-all cursor-pointer ${
                isSelected
                  ? 'bg-sky-700 text-white shadow-xs font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {regionName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

export type FilterCategory = 'all' | 'surplus' | 'season' | 'scarce';
export type SortOption = 'deal' | 'trend' | 'price';

interface FilterBarProps {
  currentFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  counts: {
    all: number;
    surplus: number;
    season: number;
    scarce: number;
  };
  lang: SupportedLang;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentFilter,
  onFilterChange,
  currentSort,
  onSortChange,
  searchQuery,
  onSearchChange,
  counts,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs mb-4 space-y-3">
      {/* Search and Sort row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">{t.sortLabel}</span>
          </div>
          <div className="flex items-center p-0.5 bg-slate-100 rounded-lg text-xs">
            <button
              onClick={() => onSortChange('deal')}
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                currentSort === 'deal'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.sortByDeal}
            </button>
            <button
              onClick={() => onSortChange('trend')}
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                currentSort === 'trend'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.sortByTrend}
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs (Segmented control) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
        <button
          onClick={() => onFilterChange('all')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap min-h-[40px] transition-all cursor-pointer ${
            currentFilter === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>{t.filterAll}</span>
          <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
            currentFilter === 'all' ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
          }`}>
            {counts.all}
          </span>
        </button>

        <button
          onClick={() => onFilterChange('surplus')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap min-h-[40px] transition-all cursor-pointer ${
            currentFilter === 'surplus'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{t.filterSurplus}</span>
          <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
            currentFilter === 'surplus' ? 'bg-emerald-800 text-emerald-100' : 'bg-emerald-100 text-emerald-800'
          }`}>
            {counts.surplus}
          </span>
        </button>

        <button
          onClick={() => onFilterChange('season')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap min-h-[40px] transition-all cursor-pointer ${
            currentFilter === 'season'
              ? 'bg-sky-700 text-white shadow-xs'
              : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200/60'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{t.filterSeason}</span>
          <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
            currentFilter === 'season' ? 'bg-sky-800 text-sky-100' : 'bg-sky-100 text-sky-800'
          }`}>
            {counts.season}
          </span>
        </button>

        <button
          onClick={() => onFilterChange('scarce')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap min-h-[40px] transition-all cursor-pointer ${
            currentFilter === 'scarce'
              ? 'bg-rose-700 text-white shadow-xs'
              : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200/60'
          }`}
        >
          <span>{t.filterScarce}</span>
          <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
            currentFilter === 'scarce' ? 'bg-rose-800 text-rose-100' : 'bg-rose-100 text-rose-800'
          }`}>
            {counts.scarce}
          </span>
        </button>
      </div>
    </div>
  );
};

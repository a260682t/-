import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Star,
  ChevronRight,
  Plus,
  Check,
  Info,
  Fish,
} from 'lucide-react';
import { RegionalFishItem } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface FishTradingBoardProps {
  fishList: RegionalFishItem[];
  selectedFishId: string | null;
  onSelectFish: (fish: RegionalFishItem) => void;
  basketFishIds: string[];
  onToggleBasket: (fishId: string, e: React.MouseEvent) => void;
  lang: SupportedLang;
}

export const FishTradingBoard: React.FC<FishTradingBoardProps> = ({
  fishList,
  selectedFishId,
  onSelectFish,
  basketFishIds,
  onToggleBasket,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  if (fishList.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
        <p className="text-sm">{t.emptyResults}</p>
        <p className="text-xs text-slate-400 mt-1">{t.emptyHint}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Trading board header bar */}
      <div className="bg-slate-900 text-slate-200 px-4 py-2.5 flex items-center justify-between text-xs font-mono border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-semibold tracking-wider">{t.boardTitle}</span>
          <span className="text-slate-400">{t.boardSubtitle}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[11px] text-slate-400">
          <span>{t.trendHeader}</span>
          <span>{t.dealHeader}</span>
          <span>{t.priceHeader}</span>
        </div>
      </div>

      {/* Fish rows list */}
      <div className="divide-y divide-slate-100">
        {fishList.map((fish) => {
          const isSelected = selectedFishId === fish.id;
          const isInBasket = basketFishIds.includes(fish.id);

          // Indicator icon & color
          let indicatorIcon = <Minus className="w-3.5 h-3.5 text-sky-600" />;
          let trendColorClass = 'text-sky-700 bg-sky-50 border-sky-200';
          let statusBadgeClass = 'text-sky-800';

          if (fish.catchStatus === 'surplus') {
            indicatorIcon = <ArrowUpRight className="w-4 h-4 text-emerald-600" />;
            trendColorClass = 'text-emerald-700 bg-emerald-50 border-emerald-200';
            statusBadgeClass = 'text-emerald-700 font-semibold';
          } else if (fish.catchStatus === 'scarce') {
            indicatorIcon = <ArrowDownRight className="w-4 h-4 text-rose-600" />;
            trendColorClass = 'text-rose-700 bg-rose-50 border-rose-200';
            statusBadgeClass = 'text-rose-700 font-semibold';
          }

          const localizedFishName = fish.name[lang] || fish.name.ja;
          const localizedStatusLabel = fish.statusLabel[lang] || fish.statusLabel.ja;
          const localizedPrice = fish.estimatedPrice[lang] || fish.estimatedPrice.ja;
          const localizedPorts = fish.ports.map((p) => p[lang] || p.ja).join('・');
          const localizedSeason = fish.seasonText[lang] || fish.seasonText.ja;
          const localizedHighlight = fish.highlightTag[lang] || fish.highlightTag.ja;

          return (
            <div
              key={fish.id}
              onClick={() => onSelectFish(fish)}
              className={`p-3 sm:p-4 cursor-pointer transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-sky-50/70'
                  : 'hover:bg-slate-50/90 active:bg-slate-100'
              }`}
            >
              {/* Main Info Zone */}
              <div className="flex items-start gap-2.5 sm:gap-3 flex-1 min-w-0">
                {/* Visual Image / Thumbnail Slot */}
                <div className="relative shrink-0">
                  {fish.imageUrl ? (
                    <img
                      src={fish.imageUrl}
                      alt={localizedFishName}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-slate-200 shadow-2xs"
                    />
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
                      <Fish className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  )}

                  {/* Overlaid Micro Trend Badge on Image */}
                  <div
                    className={`absolute -bottom-1 -right-1 px-1 py-0.2 rounded text-[9px] font-mono font-bold border flex items-center shadow-xs ${trendColorClass}`}
                  >
                    {indicatorIcon}
                    <span>{fish.trendPercent > 0 ? `+${fish.trendPercent}%` : `${fish.trendPercent}%`}</span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap min-w-0">
                      <span className="text-base font-bold text-slate-900 tracking-tight">
                        {localizedFishName}
                      </span>
                      {lang === 'ja' && (
                        <span className="text-[11px] text-slate-500 font-light hidden sm:inline">
                          {fish.kana}
                        </span>
                      )}
                      <span className={`text-[11px] sm:text-xs truncate ${statusBadgeClass}`}>
                        {localizedStatusLabel}
                      </span>
                    </div>

                    {/* Mobile-only Top Right Action Area */}
                    <div className="flex items-center gap-1 shrink-0 sm:hidden">
                      <button
                        onClick={(e) => onToggleBasket(fish.id, e)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          isInBasket
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 active:bg-slate-200'
                        }`}
                        title={isInBasket ? t.removeFromBasket : t.addToBasket}
                        aria-label={isInBasket ? t.removeFromBasket : t.addToBasket}
                      >
                        {isInBasket ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 mt-1 flex-wrap">
                    <span className="text-slate-700 font-medium">{localizedPorts}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-600">{localizedSeason}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-sky-700 font-medium">{localizedHighlight}</span>
                  </div>
                </div>
              </div>

              {/* Stats Zone: Mobile Clean Strip / Desktop Right Columns */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100/90 text-xs">
                {/* Estimated Price */}
                <div className="text-left sm:text-right min-w-0">
                  <span className="text-[10px] text-slate-400 block sm:inline sm:mr-1">{t.estPrice}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono tabular-nums">
                    {localizedPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                  {/* Deal Stars Rating */}
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block">{t.dealRating}</span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3].map((starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                            starIndex <= fish.dealRating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* 4-Week Mini Trend Bar */}
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">{t.recentTrend}</span>
                    <div className="flex items-end gap-1 h-4 sm:h-5 mt-1">
                      {fish.weeklyVolumeTrend.map((vol, idx) => {
                        const heightPercent = Math.max(20, vol);
                        let barBg = 'bg-slate-300';
                        if (fish.catchStatus === 'surplus') barBg = 'bg-emerald-500';
                        else if (fish.catchStatus === 'scarce') barBg = 'bg-rose-400';
                        else barBg = 'bg-sky-500';

                        return (
                          <div
                            key={idx}
                            className="w-1.5 rounded-t-xs"
                            style={{ height: `${heightPercent}%` }}
                          >
                            <div
                              className={`w-full h-full rounded-t-xs ${
                                idx === fish.weeklyVolumeTrend.length - 1
                                  ? barBg
                                  : 'bg-slate-200'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop-only Actions */}
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => onToggleBasket(fish.id, e)}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                        isInBasket
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      title={isInBasket ? t.removeFromBasket : t.addToBasket}
                    >
                      {isInBasket ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>

                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-slate-600">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful footer hint */}
      <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span>{t.boardHint}</span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
          {t.coastalRefNote}
        </span>
      </div>
    </div>
  );
};

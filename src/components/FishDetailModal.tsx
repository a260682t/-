import React, { useState } from 'react';
import {
  X,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Waves,
  Eye,
  Utensils,
  Globe2,
  Check,
  Plus,
  Copy,
  Share2,
} from 'lucide-react';
import { RegionalFishItem } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface FishDetailModalProps {
  fish: RegionalFishItem | null;
  onClose: () => void;
  isInBasket: boolean;
  onToggleBasket: (fishId: string) => void;
  onShareFish: (fish: RegionalFishItem) => void;
  lang: SupportedLang;
}

export const FishDetailModal: React.FC<FishDetailModalProps> = ({
  fish,
  onClose,
  isInBasket,
  onToggleBasket,
  onShareFish,
  lang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!fish) return null;

  const t = TRANSLATIONS[lang];
  const localizedName = fish.name[lang] || fish.name.ja;
  const localizedStatus = fish.statusLabel[lang] || fish.statusLabel.ja;
  const localizedPrice = fish.estimatedPrice[lang] || fish.estimatedPrice.ja;
  const localizedPorts = fish.ports.map((p) => p[lang] || p.ja).join('・');
  const localizedSeason = fish.seasonText[lang] || fish.seasonText.ja;
  const localizedDishName = fish.quickRecipe.dishName[lang] || fish.quickRecipe.dishName.ja;
  const localizedMethod = fish.quickRecipe.cookingMethod[lang] || fish.quickRecipe.cookingMethod.ja;
  const localizedInstructions = fish.quickRecipe.instructions[lang] || fish.quickRecipe.instructions.ja;
  const localizedSdgsTarget = fish.sdgsStory.target[lang] || fish.sdgsStory.target.ja;
  const localizedSdgsMessage = fish.sdgsStory.message[lang] || fish.sdgsStory.message.ja;
  const localizedSdgsAdvice = fish.sdgsStory.actionAdvice[lang] || fish.sdgsStory.actionAdvice.ja;
  const localizedFlavor = fish.flavorProfile[lang] || fish.flavorProfile.ja;
  const localizedOceanReason = fish.oceanReason[lang] || fish.oceanReason.ja;

  const handleCopyRecipe = () => {
    const seasoningsStr = fish.quickRecipe.seasonings.map((s) => s[lang] || s.ja).join(', ');
    const text = `【${localizedName} - ${localizedDishName}】\n${t.prepTimeEstimate}${fish.quickRecipe.prepMinutes}min\n${t.seasoningTags} ${seasoningsStr}\n${localizedInstructions}\n(${t.appName})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Status visual configurations
  let trendIcon = <Minus className="w-4 h-4 text-sky-600" />;
  let trendBadgeBg = 'bg-sky-50 text-sky-800 border-sky-200';
  if (fish.catchStatus === 'surplus') {
    trendIcon = <TrendingUp className="w-4 h-4 text-emerald-600" />;
    trendBadgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (fish.catchStatus === 'scarce') {
    trendIcon = <TrendingDown className="w-4 h-4 text-rose-600" />;
    trendBadgeBg = 'bg-rose-50 text-rose-800 border-rose-200';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Sheet / Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in slide-in-from-bottom-6 duration-200">
        {/* Grab Handle for Mobile */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {localizedName}
              </span>
              {lang === 'ja' && (
                <span className="text-xs text-slate-500 font-light">
                  {fish.kana}
                </span>
              )}
              <span className="text-xs text-slate-400 italic">
                {fish.latinName}
              </span>
            </div>

            {/* Quick Badges & Price */}
            <div className="flex items-center gap-2 mt-2 flex-wrap text-xs">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border font-semibold ${trendBadgeBg}`}>
                {trendIcon}
                <span>{localizedStatus} ({fish.trendPercent > 0 ? `+${fish.trendPercent}%` : `${fish.trendPercent}%`})</span>
              </span>

              <span className="text-slate-600 font-mono font-bold bg-slate-100 px-2.5 py-1 rounded-md">
                {localizedPrice}
              </span>

              <span className="text-sky-700 bg-sky-50 px-2 py-1 rounded-md font-medium truncate max-w-[200px]">
                {localizedPorts}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onShareFish(fish)}
              className="w-10 h-10 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label={t.shareFishAction}
              title={t.shareFishAction}
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              aria-label={t.closeButton}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 divide-y divide-slate-100">
          {/* Section 0: High-fidelity Fish Hero Image */}
          {fish.imageUrl && (
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs max-h-56 bg-slate-950">
              <img
                src={fish.imageUrl}
                alt={localizedName}
                referrerPolicy="no-referrer"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                <div className="flex items-center justify-between w-full text-white text-xs">
                  <span className="font-semibold text-sky-200 drop-shadow-xs">
                    {localizedPorts}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-mono font-medium">
                    {localizedPrice}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Section 1: Flavor Profile & Highlight */}
          <div className="pt-4 first:pt-0">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50/50 p-3.5 rounded-xl border border-sky-100/80">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-900 mb-1">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.flavorAndSeason} {localizedFlavor}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">{localizedSeason}</span>{' '}
                {fish.isPeakSeason && t.peakSeasonNow}
              </p>
            </div>
          </div>

          {/* Section 2: Ocean Reasons */}
          <div className="pt-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
              <Waves className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{t.whyCatchReason}</span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              {localizedOceanReason}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block font-medium">{t.waterTempStatus}</span>
                <span className="text-slate-800 text-[11px] font-medium leading-snug">
                  {fish.marineConditions.waterTempNote[lang] || fish.marineConditions.waterTempNote.ja}
                </span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block font-medium">{t.currentFlowStatus}</span>
                <span className="text-slate-800 text-[11px] font-medium leading-snug">
                  {fish.marineConditions.kuroshioCurrent[lang] || fish.marineConditions.kuroshioCurrent.ja}
                </span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block font-medium">{t.stockManagementStatus}</span>
                <span className="text-slate-800 text-[11px] font-medium leading-snug">
                  {fish.marineConditions.stockCondition[lang] || fish.marineConditions.stockCondition.ja}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Freshness Checklist */}
          <div className="pt-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
              <Eye className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.freshnessCheckTitle}</span>
            </div>

            <div className="space-y-2">
              {fish.freshnessCheckpoints.map((check, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-950 block">
                      {check.part[lang] || check.part.ja}
                    </span>
                    <span className="text-xs text-slate-700 leading-snug">
                      {check.tip[lang] || check.tip.ja}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Quick Cooking Recipe */}
          <div className="pt-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.quickRecipeTitle}</span>
              </div>
              <button
                onClick={handleCopyRecipe}
                className="flex items-center gap-1 text-[11px] text-sky-700 hover:text-sky-900 font-medium px-2 py-1 bg-sky-50 rounded cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>{t.recipeCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>{t.recipeCopyButton}</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  {localizedDishName}
                </h4>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono font-medium">
                    {t.prepTimeEstimate}{fish.quickRecipe.prepMinutes}min
                  </span>
                  <span className="text-slate-600">
                    {localizedMethod}
                  </span>
                </div>
              </div>

              {/* Seasoning Tags */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-slate-500">{t.seasoningTags}</span>
                {fish.quickRecipe.seasonings.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs"
                  >
                    #{tag[lang] || tag.ja}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-800 leading-relaxed bg-white/80 p-2.5 rounded-lg border border-amber-100">
                {localizedInstructions}
              </p>
            </div>
          </div>

          {/* Section 5: SDGs 14.4 Story */}
          <div className="pt-5 pb-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
              <Globe2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{localizedSdgsTarget}</span>
            </div>

            <div className="bg-blue-50/70 border border-blue-200/70 rounded-xl p-3.5 space-y-2 text-xs">
              <p className="text-slate-800 leading-relaxed font-medium">
                {localizedSdgsMessage}
              </p>
              <div className="bg-white/80 p-2.5 rounded-lg border border-blue-100 text-slate-700">
                <span className="font-bold text-blue-900 block mb-0.5">
                  🛒 Action Advice:
                </span>
                <span>{localizedSdgsAdvice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky Action Bar */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2.5">
          <button
            onClick={() => onToggleBasket(fish.id)}
            className={`flex-1 py-3 px-3 sm:px-4 min-h-[48px] rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              isInBasket
                ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                : 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.99]'
            }`}
          >
            {isInBasket ? (
              <>
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="truncate">{t.removeFromBasket}</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 shrink-0" />
                <span className="truncate">{t.addToBasketFull}</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-3 min-h-[48px] rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 shrink-0 cursor-pointer"
          >
            {t.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};

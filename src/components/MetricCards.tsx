import React from 'react';
import { TrendingUp, Award, Fish, ShieldCheck } from 'lucide-react';
import { RegionMetadata } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface MetricCardsProps {
  surplusCount: number;
  totalCount: number;
  regionMeta: RegionMetadata;
  lang: SupportedLang;
}

export const MetricCards: React.FC<MetricCardsProps> = ({
  surplusCount,
  totalCount,
  regionMeta,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 my-3 sm:my-4">
      {/* Metric 1 */}
      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs min-w-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-1">
          <span className="truncate">{t.todayDealCount}</span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900">
            {surplusCount}
          </span>
          <span className="text-[11px] sm:text-xs text-slate-500">/ {totalCount}</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-emerald-700 font-medium mt-1 truncate">
          {regionMeta.surplusRate}
        </p>
      </div>

      {/* Metric 2 */}
      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs min-w-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-1">
          <span className="truncate">{t.localCatchRate}</span>
          <Fish className="w-3.5 h-3.5 text-sky-600 shrink-0 ml-1" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900">
            {regionMeta.localCatchRate}
          </span>
          <span className="text-[10px] sm:text-xs text-emerald-600 font-medium">{t.highFreshness}</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">
          {regionMeta.name[lang]}
        </p>
      </div>

      {/* Metric 3 */}
      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs min-w-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-1">
          <span className="truncate">{t.lowCo2Mileage}</span>
          <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 ml-1" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-bold text-slate-900">A</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">
          {t.zeroAirFreight}
        </p>
      </div>

      {/* Metric 4 */}
      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-xs min-w-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-1">
          <span className="truncate">{t.sdgsManagement}</span>
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-1" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-bold text-slate-900">{t.compliant}</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">
          TAC &amp; SDG 14.4
        </p>
      </div>
    </div>
  );
};

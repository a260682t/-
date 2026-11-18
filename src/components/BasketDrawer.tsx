import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2, Utensils, Fish, Share2 } from 'lucide-react';
import { RegionalFishItem } from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface BasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basketFish: RegionalFishItem[];
  onRemoveFish: (fishId: string) => void;
  onClearBasket: () => void;
  onSelectFish: (fish: RegionalFishItem) => void;
  onShareBasket: () => void;
  lang: SupportedLang;
}

export const BasketDrawer: React.FC<BasketDrawerProps> = ({
  isOpen,
  onClose,
  basketFish,
  onRemoveFish,
  onClearBasket,
  onSelectFish,
  onShareBasket,
  lang,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-lg max-h-[85vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in slide-in-from-bottom-6 duration-200">
        {/* Grab Handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">{t.basketTitle}</h3>
              <p className="text-xs text-slate-500">
                {basketFish.length} {t.basketCountItems} · {t.basketSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
            aria-label={t.closeButton}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {basketFish.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-[1.5] text-slate-300 mb-2" />
              <p className="text-sm font-medium text-slate-600">{t.basketEmpty}</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                {t.basketEmptyHint}
              </p>
            </div>
          ) : (
            basketFish.map((fish) => {
              const localizedName = fish.name[lang] || fish.name.ja;
              const localizedStatus = fish.statusLabel[lang] || fish.statusLabel.ja;
              const localizedPrice = fish.estimatedPrice[lang] || fish.estimatedPrice.ja;
              const localizedPorts = fish.ports.map((p) => p[lang] || p.ja).join('・');
              const localizedDishName = fish.quickRecipe.dishName[lang] || fish.quickRecipe.dishName.ja;
              const seasoningsStr = fish.quickRecipe.seasonings.map((s) => s[lang] || s.ja).join(', ');

              return (
                <div
                  key={fish.id}
                  className="bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      {fish.imageUrl ? (
                        <img
                          src={fish.imageUrl}
                          alt={localizedName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shrink-0">
                          <Fish className="w-5 h-5 stroke-[1.5]" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-slate-900 text-sm">
                            {localizedName}
                          </span>
                          <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.2 rounded">
                            {localizedStatus}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {localizedPrice} · {localizedPorts}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveFish(fish.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title={t.removeFromBasket}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Recipe snippet */}
                  <div className="bg-white p-2.5 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-amber-800 font-semibold mb-1">
                      <Utensils className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{localizedDishName} (~{fish.quickRecipe.prepMinutes}min)</span>
                    </div>
                    <p className="text-slate-600 line-clamp-1 text-[11px]">
                      {t.seasoningTags} {seasoningsStr}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectFish(fish);
                      }}
                      className="text-xs text-sky-700 hover:text-sky-900 font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {basketFish.length > 0 && (
          <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
            <button
              onClick={onClearBasket}
              className="text-xs text-slate-500 hover:text-rose-600 font-medium py-2 px-2.5 cursor-pointer shrink-0"
            >
              {t.clearAll}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onShareBasket}
                className="py-2.5 px-3.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-500 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.shareBasketAction}</span>
              </button>

              <button
                onClick={onClose}
                className="py-2.5 px-3.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">{t.backToAisle}</span>
                <span className="sm:hidden">{t.closeButton}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

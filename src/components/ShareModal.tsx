import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  Link2,
  Fish,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import {
  RegionKey,
  REGIONS_META,
  RegionalFishItem,
} from '../data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

export type ShareTabMode = 'board' | 'fish' | 'basket';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: ShareTabMode;
  currentRegion: RegionKey;
  currentLang: SupportedLang;
  fishPool: RegionalFishItem[];
  selectedFish: RegionalFishItem | null;
  basketFish: RegionalFishItem[];
}

async function copyTextSafe(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback below
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  initialTab,
  currentRegion,
  currentLang,
  fishPool,
  selectedFish,
  basketFish,
}) => {
  const [activeTab, setActiveTab] = useState<ShareTabMode>(initialTab);
  const [copiedState, setCopiedState] = useState<'none' | 'message' | 'url'>('none');

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setCopiedState('none');
    }
  }, [isOpen, initialTab]);

  const t = TRANSLATIONS[currentLang];
  const regionMeta = REGIONS_META[currentRegion];

  const targetFish = selectedFish || fishPool[0] || null;

  const shareUrl = useMemo(() => {
    const base =
      typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}`
        : '';
    const params = new URLSearchParams();
    params.set('region', currentRegion);
    params.set('lang', currentLang);
    if (activeTab === 'fish' && targetFish) {
      params.set('fish', targetFish.id);
    } else if (activeTab === 'basket' && basketFish.length > 0) {
      params.set('basket', basketFish.map((f) => f.id).join(','));
    }
    return `${base}?${params.toString()}`;
  }, [currentRegion, currentLang, activeTab, targetFish, basketFish]);

  const shareText = useMemo(() => {
    const regionName = regionMeta.name[currentLang] || regionMeta.name.ja;

    if (activeTab === 'fish' && targetFish) {
      const fishName = targetFish.name[currentLang] || targetFish.name.ja;
      const status = targetFish.statusLabel[currentLang] || targetFish.statusLabel.ja;
      const price = targetFish.estimatedPrice[currentLang] || targetFish.estimatedPrice.ja;
      const ports = targetFish.ports.map((p) => p[currentLang] || p.ja).join('・');
      const dish = targetFish.quickRecipe.dishName[currentLang] || targetFish.quickRecipe.dishName.ja;
      const trend = targetFish.trendPercent > 0 ? `+${targetFish.trendPercent}%` : `${targetFish.trendPercent}%`;

      return [
        `🐟 ${t.appName} | ${fishName}`,
        `📍 ${regionName} (${ports})`,
        `📈 ${status} (${trend}) / ${price}`,
        `🍳 ${dish} (${targetFish.quickRecipe.prepMinutes}min)`,
        `🌊 ${targetFish.sdgsStory.target[currentLang] || targetFish.sdgsStory.target.ja}`,
      ].join('\n');
    }

    if (activeTab === 'basket' && basketFish.length > 0) {
      const lines = basketFish.map((f) => {
        const name = f.name[currentLang] || f.name.ja;
        const price = f.estimatedPrice[currentLang] || f.estimatedPrice.ja;
        const dish = f.quickRecipe.dishName[currentLang] || f.quickRecipe.dishName.ja;
        return `・${name} (${price}) → ${dish}`;
      });

      return [
        `🛒 ${t.basketTitle} (${regionName})`,
        ...lines,
        `🌊 ${t.appName}`,
      ].join('\n');
    }

    // Default: Regional Board summary
    const surplusTop = fishPool
      .filter((f) => f.catchStatus === 'surplus')
      .slice(0, 3)
      .map((f) => {
        const name = f.name[currentLang] || f.name.ja;
        const price = f.estimatedPrice[currentLang] || f.estimatedPrice.ja;
        return `・${name} (+${f.trendPercent}% / ${price})`;
      });

    return [
      `🐟 ${t.appName} - ${regionName}`,
      regionMeta.bannerSubtitle[currentLang] || regionMeta.bannerSubtitle.ja,
      ...surplusTop,
    ].join('\n');
  }, [activeTab, targetFish, basketFish, fishPool, regionMeta, currentLang, t]);

  if (!isOpen) return null;

  const canUseNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  const handleNativeShare = async () => {
    if (!canUseNativeShare) {
      await handleCopyMessage();
      return;
    }
    try {
      await navigator.share({
        title: `${t.appName} - ${regionMeta.name[currentLang] || regionMeta.name.ja}`,
        text: shareText,
        url: shareUrl,
      });
    } catch (err) {
      // If user cancels AbortError, do nothing; otherwise fallback to clipboard
      if ((err as Error)?.name !== 'AbortError') {
        await handleCopyMessage();
      }
    }
  };

  const handleCopyMessage = async () => {
    const fullText = `${shareText}\n${shareUrl}`;
    const ok = await copyTextSafe(fullText);
    if (ok) {
      setCopiedState('message');
      setTimeout(() => setCopiedState('none'), 2500);
    }
  };

  const handleCopyUrl = async () => {
    const ok = await copyTextSafe(shareUrl);
    if (ok) {
      setCopiedState('url');
      setTimeout(() => setCopiedState('none'), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal / Bottom Sheet */}
      <div className="relative w-full max-w-lg max-h-[88vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in slide-in-from-bottom-6 duration-200">
        {/* Grab Handle for Mobile */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {t.shareModalTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.shareModalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 shrink-0 cursor-pointer"
            aria-label={t.closeButton}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Mode Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl text-xs">
            <button
              onClick={() => {
                setActiveTab('board');
                setCopiedState('none');
              }}
              className={`py-2 px-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-all cursor-pointer truncate ${
                activeTab === 'board'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
              <span className="truncate">{t.shareTabBoard}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('fish');
                setCopiedState('none');
              }}
              disabled={!targetFish}
              className={`py-2 px-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-all cursor-pointer truncate disabled:opacity-40 ${
                activeTab === 'fish'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Fish className="w-3.5 h-3.5 shrink-0 text-sky-600" />
              <span className="truncate">{t.shareTabFish}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('basket');
                setCopiedState('none');
              }}
              className={`py-2 px-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-all cursor-pointer truncate ${
                activeTab === 'basket'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0 text-amber-600" />
              <span className="truncate">{t.shareTabBasket}</span>
            </button>
          </div>

          {activeTab === 'basket' && basketFish.length === 0 && (
            <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200/70 rounded-lg px-3 py-2">
              {t.shareEmptyBasketNote}
            </p>
          )}

          {/* Share Message Preview */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-medium">{t.sharePreviewLabel}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 whitespace-pre-wrap leading-relaxed font-sans max-h-44 overflow-y-auto">
              {shareText}
              <div className="mt-2 pt-2 border-t border-slate-200/80 text-[11px] text-sky-700 font-mono break-all">
                {shareUrl}
              </div>
            </div>
          </div>

          {/* Feedback banner */}
          {copiedState !== 'none' && (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {copiedState === 'message' ? t.shareCopiedMessage : t.shareCopiedUrl}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            {canUseNativeShare && (
              <button
                onClick={handleNativeShare}
                className="w-full py-3 px-4 min-h-[48px] bg-sky-600 hover:bg-sky-500 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4 shrink-0" />
                <span>{t.shareNativeButton}</span>
              </button>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handleCopyMessage}
                className="w-full py-3 px-3 min-h-[46px] bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedState === 'message' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.shareCopiedMessage}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 shrink-0" />
                    <span>{t.shareCopyMessageButton}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyUrl}
                className="w-full py-3 px-3 min-h-[46px] bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-700 font-bold text-xs rounded-xl border border-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedState === 'url' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t.shareCopiedUrl}</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{t.shareCopyUrlButton}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

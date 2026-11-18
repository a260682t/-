import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MarketTicker } from './components/MarketTicker';
import { RegionSelector } from './components/RegionSelector';
import { MetricCards } from './components/MetricCards';
import { FilterBar, FilterCategory, SortOption } from './components/FilterBar';
import { FishTradingBoard } from './components/FishTradingBoard';
import { FishDetailModal } from './components/FishDetailModal';
import { BasketDrawer } from './components/BasketDrawer';
import { SdgsInfoModal } from './components/SdgsInfoModal';
import { ShareModal, ShareTabMode } from './components/ShareModal';
import {
  RegionKey,
  REGIONAL_FISH_DATABASE,
  REGIONS_META,
  RegionalFishItem,
} from './data/regionalFishData';
import { SupportedLang, TRANSLATIONS } from './i18n/translations';
import { ShoppingBag, ArrowRight, Share2 } from 'lucide-react';

const VALID_LANGS: SupportedLang[] = ['ja', 'en', 'zh-CN', 'zh-TW', 'ko'];
const VALID_REGIONS: RegionKey[] = ['kanto', 'hokkaido', 'west', 'hokuriku'];

function getInitialShareState(): {
  lang: SupportedLang;
  region: RegionKey;
  fish: RegionalFishItem | null;
  basketIds: string[];
} {
  if (typeof window === 'undefined') {
    return { lang: 'ja', region: 'kanto', fish: null, basketIds: ['maiwashi'] };
  }
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang') as SupportedLang | null;
  const regionParam = params.get('region') as RegionKey | null;
  const fishParam = params.get('fish');
  const basketParam = params.get('basket');

  const lang: SupportedLang =
    langParam && VALID_LANGS.includes(langParam) ? langParam : 'ja';
  const region: RegionKey =
    regionParam && VALID_REGIONS.includes(regionParam) ? regionParam : 'kanto';

  const pool = REGIONAL_FISH_DATABASE[region] || REGIONAL_FISH_DATABASE.kanto;
  const fish = fishParam
    ? pool.find((f) => f.id === fishParam) ||
      Object.values(REGIONAL_FISH_DATABASE)
        .flat()
        .find((f) => f.id === fishParam) ||
      null
    : null;

  const allFishIds = new Set(
    Object.values(REGIONAL_FISH_DATABASE)
      .flat()
      .map((f) => f.id)
  );
  const basketIds = basketParam
    ? basketParam
        .split(',')
        .map((id) => id.trim())
        .filter((id) => allFishIds.has(id))
    : ['maiwashi'];

  return { lang, region, fish, basketIds };
}

export default function App() {
  const initial = useMemo(() => getInitialShareState(), []);

  const [currentLang, setCurrentLang] = useState<SupportedLang>(initial.lang);
  const [currentRegion, setCurrentRegion] = useState<RegionKey>(initial.region);
  const [selectedFish, setSelectedFish] = useState<RegionalFishItem | null>(initial.fish);
  const [basketFishIds, setBasketFishIds] = useState<string[]>(initial.basketIds);
  const [currentFilter, setCurrentFilter] = useState<FilterCategory>('all');
  const [currentSort, setCurrentSort] = useState<SortOption>('deal');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
  const [isSdgsOpen, setIsSdgsOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [shareTab, setShareTab] = useState<ShareTabMode>('board');

  const openShareModal = (tab: ShareTabMode) => {
    setShareTab(tab);
    setIsShareOpen(true);
  };

  const t = TRANSLATIONS[currentLang];
  const regionMeta = REGIONS_META[currentRegion];
  const currentFishPool = useMemo(() => {
    return REGIONAL_FISH_DATABASE[currentRegion] || REGIONAL_FISH_DATABASE.kanto;
  }, [currentRegion]);

  // Toggle basket item
  const handleToggleBasket = (fishId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setBasketFishIds((prev) =>
      prev.includes(fishId)
        ? prev.filter((id) => id !== fishId)
        : [...prev, fishId]
    );
  };

  const handleClearBasket = () => {
    setBasketFishIds([]);
  };

  // Filter and sort items
  const filteredAndSortedFish = useMemo(() => {
    return currentFishPool.filter((fish) => {
      // Category filter
      if (currentFilter === 'surplus' && fish.catchStatus !== 'surplus') return false;
      if (currentFilter === 'season' && !fish.isPeakSeason) return false;
      if (currentFilter === 'scarce' && fish.catchStatus !== 'scarce') return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const localizedName = (fish.name[currentLang] || fish.name.ja).toLowerCase();
        const jaName = fish.name.ja.toLowerCase();
        const kana = fish.kana.toLowerCase();
        const latin = fish.latinName.toLowerCase();
        const ports = fish.ports.map((p) => (p[currentLang] || p.ja).toLowerCase()).join(' ');
        const tags = (fish.highlightTag[currentLang] || fish.highlightTag.ja).toLowerCase();

        return (
          localizedName.includes(q) ||
          jaName.includes(q) ||
          kana.includes(q) ||
          latin.includes(q) ||
          ports.includes(q) ||
          tags.includes(q)
        );
      }

      return true;
    }).sort((a, b) => {
      if (currentSort === 'deal') {
        if (b.dealRating !== a.dealRating) {
          return b.dealRating - a.dealRating;
        }
        return b.trendPercent - a.trendPercent;
      }
      if (currentSort === 'trend') {
        return b.trendPercent - a.trendPercent;
      }
      return 0;
    });
  }, [currentFishPool, currentFilter, currentSort, searchQuery, currentLang]);

  // Counts for filter tabs
  const counts = useMemo(() => {
    return {
      all: currentFishPool.length,
      surplus: currentFishPool.filter((f) => f.catchStatus === 'surplus').length,
      season: currentFishPool.filter((f) => f.isPeakSeason).length,
      scarce: currentFishPool.filter((f) => f.catchStatus === 'scarce').length,
    };
  }, [currentFishPool]);

  // Basket fish objects across all regions so items remain preserved
  const basketFish = useMemo(() => {
    const allKnownFish = Object.values(REGIONAL_FISH_DATABASE).flat();
    return allKnownFish.filter((f) => basketFishIds.includes(f.id));
  }, [basketFishIds]);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans pb-28 sm:pb-12">
      {/* Top Bar with LanguageSelector */}
      <Header
        onOpenSdgsModal={() => setIsSdgsOpen(true)}
        basketCount={basketFishIds.length}
        onOpenBasket={() => setIsBasketOpen(true)}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currentRegion={currentRegion}
      />

      {/* Stock Ticker Ribbon */}
      <MarketTicker
        currentRegion={currentRegion}
        lang={currentLang}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl w-full mx-auto px-3 sm:px-4 py-3 sm:py-6 flex-1 space-y-3 sm:space-y-4">
        {/* Intro Banner with regional dynamic headline */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{regionMeta.name[currentLang]} · {t.marketLiveReport}</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
              {regionMeta.bannerTitle[currentLang]}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {regionMeta.bannerSubtitle[currentLang]}
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <button
              onClick={() => {
                setCurrentFilter('surplus');
                document.getElementById('trading-board')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full sm:w-auto justify-center px-4 py-2.5 min-h-[44px] font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${
                currentFilter === 'surplus'
                  ? 'bg-emerald-400 text-slate-950 ring-2 ring-emerald-300 ring-offset-2 ring-offset-slate-900'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {currentFilter === 'surplus' ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-slate-950"></span>
                  <span>{t.todaySpecialActive} ({counts.surplus})</span>
                </>
              ) : (
                <>
                  <span>{t.todaySpecialAction} ({counts.surplus})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <button
              onClick={() => openShareModal('board')}
              className="w-full sm:w-auto justify-center px-3.5 py-2.5 min-h-[44px] font-bold text-xs rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
            >
              <Share2 className="w-3.5 h-3.5 text-sky-300 shrink-0" />
              <span>{t.shareBoardButton}</span>
            </button>
          </div>
        </div>

        {/* Region Selector (Switch between coastal regions) */}
        <RegionSelector
          currentRegion={currentRegion}
          onSelectRegion={setCurrentRegion}
          lang={currentLang}
        />

        {/* Real-time Metric Cards */}
        <MetricCards
          surplusCount={counts.surplus}
          totalCount={counts.all}
          regionMeta={regionMeta}
          lang={currentLang}
        />

        {/* Filter, Sort, and Search Bar */}
        <FilterBar
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          currentSort={currentSort}
          onSortChange={setCurrentSort}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          counts={counts}
          lang={currentLang}
        />

        {/* Main Fish Trading Board (List / Table with Photos) */}
        <div id="trading-board" className="scroll-mt-20">
          <FishTradingBoard
            fishList={filteredAndSortedFish}
            selectedFishId={selectedFish?.id || null}
            onSelectFish={(fish) => setSelectedFish(fish)}
            basketFishIds={basketFishIds}
            onToggleBasket={handleToggleBasket}
            lang={currentLang}
          />
        </div>
      </main>

      {/* Floating Sticky Mobile Basket Bar */}
      {basketFishIds.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
          <div
            onClick={() => setIsBasketOpen(true)}
            className="bg-slate-900 text-white rounded-2xl p-3 shadow-xl border border-slate-700/80 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-800 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs">{t.basketButton}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-1.5 py-0.2 rounded font-semibold">
                    {basketFishIds.length} {t.basketCountItems}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">
                  {basketFish.map((f) => f.name[currentLang] || f.name.ja).join(' · ')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-sky-400 font-medium shrink-0">
              <span>{t.viewDetails}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      )}

      {/* Quiet Footer */}
      <footer className="mt-8 border-t border-slate-200 py-6 text-center text-xs text-slate-500 space-y-1">
        <p className="font-medium text-slate-700">{t.appName} — {t.appSubtitle}</p>
        <p className="text-[11px] text-slate-400">
          {regionMeta.portsHeadline[currentLang]} · {t.coastalRefNote}
        </p>
        <p className="text-[11px] text-slate-400">
          SDGs 14: Life Below Water (Target 14.4)
        </p>
      </footer>

      {/* Detail Bottom Sheet Modal with High-Res Image Hero */}
      <FishDetailModal
        fish={selectedFish}
        onClose={() => setSelectedFish(null)}
        isInBasket={selectedFish ? basketFishIds.includes(selectedFish.id) : false}
        onToggleBasket={handleToggleBasket}
        onShareFish={() => openShareModal('fish')}
        lang={currentLang}
      />

      {/* Shopping Basket Drawer */}
      <BasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        basketFish={basketFish}
        onRemoveFish={(id) => handleToggleBasket(id)}
        onClearBasket={handleClearBasket}
        onSelectFish={(fish) => setSelectedFish(fish)}
        onShareBasket={() => {
          setIsBasketOpen(false);
          openShareModal('basket');
        }}
        lang={currentLang}
      />

      {/* SDGs 14.4 Educational Guide Modal */}
      <SdgsInfoModal
        isOpen={isSdgsOpen}
        onClose={() => setIsSdgsOpen(false)}
        lang={currentLang}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        initialTab={shareTab}
        currentRegion={currentRegion}
        currentLang={currentLang}
        fishPool={currentFishPool}
        selectedFish={selectedFish}
        basketFish={basketFish}
      />
    </div>
  );
}

import React from 'react';
import { X, Globe2, Anchor, Fish, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTS_INFO } from '../data/fishData';
import { SupportedLang, TRANSLATIONS } from '../i18n/translations';

interface SdgsInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLang;
}

const SDGS_LANG_TEXTS = {
  ja: {
    title: 'SDGs目標14「海の豊かさを守ろう」',
    subtitle: 'ターゲット14.4：持続可能な漁業と地産地消',
    whatIsTarget: 'ターゲット14.4とは？',
    targetExplanation1: '「乱獲に終止符を打ち、違法・無報告・無規制（IUU）漁業及び過剰漁獲を是正し、科学的情報に基づいた管理計画を実施して、水産資源を速やかに回復させる」という国際目標です。',
    targetExplanation2: '食卓では、「今たくさん獲れている豊漁魚を美味しく消費し、不漁や保護中の魚は控えめにする」という日常の買い物選択が、海の回復を直接後押しします。',
    meritsTitle: '地元の海を応援する3大メリット',
    merit1Title: '1. 究極の高鮮度と低CO2マイレージ',
    merit1Desc: '近くの港から直接届くため、長距離輸送の温室効果ガス排出を大幅に削減。',
    merit2Title: '2. 豊漁魚の食品ロス防止',
    merit2Desc: '豊漁の魚を食卓で美味しく食べることが、飼料や肥料への転落を防ぐ最短ルート。',
    merit3Title: '3. 地元沿岸漁業者の支援',
    merit3Desc: '地元の魚を適正価格で買うことで、伝統ある漁業者の生計を持続可能に支えます。',
    portsTitle: '連携している主要漁港ネットワーク',
    closeButton: 'わかりました',
  },
  en: {
    title: 'SDG 14: Life Below Water',
    subtitle: 'Target 14.4: Sustainable Fishing & Local Sourcing',
    whatIsTarget: 'What is Target 14.4?',
    targetExplanation1: 'Effectively regulate harvesting and end overfishing, illegal, unreported and unregulated (IUU) fishing, and destructive fishing practices to restore fish stocks in the shortest time feasible.',
    targetExplanation2: 'In our daily lives, choosing abundant seasonal catches and honoring quotas for depleted species directly empowers ocean regeneration.',
    meritsTitle: '3 Core Benefits of Local Sourcing',
    merit1Title: '1. Unmatched Freshness & Low Carbon Mileage',
    merit1Desc: 'Fish harvested from nearby coasts arrive quickly with minimal transport emissions.',
    merit2Title: '2. Food Loss & Waste Reduction',
    merit2Desc: 'Eating surplus bumper catches prevents them from being downgraded to animal feed.',
    merit3Title: '3. Supporting Artisanal Fishermen',
    merit3Desc: 'Purchasing local species at fair prices sustains coastal communities and heritage.',
    portsTitle: 'Partner Coastal Ports Network',
    closeButton: 'Understood',
  },
  'zh-CN': {
    title: '联合国SDGs目标14“水下生命”',
    subtitle: '子目标14.4：可持续捕捞与地产地消',
    whatIsTarget: '什么是子目标14.4？',
    targetExplanation1: '“有效规范捕捞，杜绝过度捕捞、非法、未报告和无管制的捕捞活动，实施科学管理计划以使鱼类种群恢复到可持续水平。”',
    targetExplanation2: '在日常消费中，“多品尝当地丰收特惠鱼，对保护期稀少鱼种适度节制”，便是助力海洋休养生息的切实行策。',
    meritsTitle: '支持当地水产的3大益处',
    merit1Title: '1. 极致新鲜与超低碳排放',
    merit1Desc: '近海直达超市专柜，大幅减少跨洋远途冷链造成的温室气体。',
    merit2Title: '2. 防止丰收水产沦为损耗',
    merit2Desc: '端上家常餐桌品尝是避免优质海鲜被降级做饲料的最佳途径。',
    merit3Title: '3. 支持本土沿海渔民社群',
    merit3Desc: '以合理价格选购地鱼，直接维护传承百年的渔村经济生计。',
    portsTitle: '联动的主要沿海渔港网络',
    closeButton: '我知道了',
  },
  'zh-TW': {
    title: '聯合國SDGs目標14「水下生命」',
    subtitle: '子目標14.4：永續漁業與地產地消',
    whatIsTarget: '何謂子目標14.4？',
    targetExplanation1: '「有效規範捕撈，杜絕過度捕撈、非法、未報告和無管制的捕撈行為，以科學管理使漁業資源儘快恢復至永續水準。」',
    targetExplanation2: '在日常採買中，「多享用在地當令豐收魚種，對受保護魚種珍惜節制」，就是守護大海的最佳實踐。',
    meritsTitle: '支持在地水產的3大優勢',
    merit1Title: '1. 極致新鮮與超低碳足跡',
    merit1Desc: '近海直達超市，大幅減低長程冷鏈運送的環境負擔。',
    merit2Title: '2. 預防豐收剩食與降級浪費',
    merit2Desc: '享用豐產鮮魚能避免高檔蛋白質被降級轉為飼料。',
    merit3Title: '3. 守護在地沿海漁村生計',
    merit3Desc: '以合理價格採買在地海鮮，讓百年漁業文化得以代代傳承。',
    portsTitle: '合作之主要沿海漁港網絡',
    closeButton: '瞭解了',
  },
  ko: {
    title: 'SDGs 목표 14 "해양 생태계 보전"',
    subtitle: '세부목표 14.4: 지속 가능한 어업과 로컬 수산물 소비',
    whatIsTarget: '세부목표 14.4란?',
    targetExplanation1: '남획을 근절하고 불법·비보고·비규제(IUU) 어업 및 파괴적 어업을 시정하여, 과학적 계획에 따라 수산 자원을 회복시키는 국제 목표입니다.',
    targetExplanation2: '소비자가 "풍어인 어종을 맛있게 먹고 자원 관리 중인 어종은 아껴먹는" 장보기 선택이 해양 자원 회복에 직결됩니다.',
    meritsTitle: '로컬 수산물을 이용하는 3대 가치',
    merit1Title: '1. 최고의 신선도와 저탄소 마일리지',
    merit1Desc: '가까운 항구에서 직송되어 장거리 운송 탄소 배출을 획기적으로 줄입니다.',
    merit2Title: '2. 풍어기 식품 로스 방지',
    merit2Desc: '많이 잡힌 제철 생선을 식탁에 올리는 것이 사료 전락을 막는 최고의 길입니다.',
    merit3Title: '3. 연안 어민과 어촌 경제 지원',
    merit3Desc: '적정 가격 소비로 전통 있는 연안 어민의 지속 가능한 생계를 돕습니다.',
    portsTitle: '연계 주요 어항 네트워크',
    closeButton: '확인했습니다',
  },
};

export const SdgsInfoModal: React.FC<SdgsInfoModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const text = SDGS_LANG_TEXTS[lang] || SDGS_LANG_TEXTS.ja;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-sky-900 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">{text.title}</h3>
              <p className="text-xs text-sky-200">{text.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-slate-800 text-xs leading-relaxed">
          {/* Section 1: Target 14.4 Explanation */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-sky-950 text-sm">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{text.whatIsTarget}</span>
            </div>
            <p className="text-slate-700">
              {text.targetExplanation1}
            </p>
            <p className="text-slate-700 font-medium">
              {text.targetExplanation2}
            </p>
          </div>

          {/* Section 2: Why Local Matters */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
              <Anchor className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{text.meritsTitle}</span>
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">{text.merit1Title}</span>
                  <span className="text-slate-600">{text.merit1Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">{text.merit2Title}</span>
                  <span className="text-slate-600">{text.merit2Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">{text.merit3Title}</span>
                  <span className="text-slate-600">{text.merit3Desc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Ports Overview */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
              <Fish className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{text.portsTitle}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PORTS_INFO.map((port, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">{port.name}</span>
                    <span className="text-[10px] text-sky-700 bg-sky-100 px-1.5 py-0.2 rounded font-medium">
                      {port.badge}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600 block">
                    {port.specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {text.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export type SupportedLang = 'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'ko';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  marketLiveReport: string;
  allPortsCooperation: string;
  surplusArrivalGood: string;
  sdgsButton: string;
  sdgsFullButton: string;
  basketButton: string;
  todayFlash: string;
  todayDealCount: string;
  localCatchRate: string;
  lowCo2Mileage: string;
  sdgsManagement: string;
  compliant: string;
  highFreshness: string;
  zeroAirFreight: string;
  todaySpecialAction: string;
  todaySpecialActive: string;
  searchPlaceholder: string;
  sortLabel: string;
  sortByDeal: string;
  sortByTrend: string;
  filterAll: string;
  filterSurplus: string;
  filterSeason: string;
  filterScarce: string;
  boardTitle: string;
  boardSubtitle: string;
  trendHeader: string;
  dealHeader: string;
  priceHeader: string;
  recentTrend: string;
  dealRating: string;
  estPrice: string;
  addToBasket: string;
  removeFromBasket: string;
  viewDetails: string;
  boardHint: string;
  coastalRefNote: string;
  emptyResults: string;
  emptyHint: string;
  regionLabel: string;
  regionKanto: string;
  regionHokkaido: string;
  regionWest: string;
  regionHokuriku: string;
  // Modal texts
  whyCatchReason: string;
  waterTempStatus: string;
  currentFlowStatus: string;
  stockManagementStatus: string;
  freshnessCheckTitle: string;
  quickRecipeTitle: string;
  recipeCopyButton: string;
  recipeCopied: string;
  prepTimeEstimate: string;
  seasoningTags: string;
  closeButton: string;
  addToBasketFull: string;
  basketCountItems: string;
  basketTitle: string;
  basketSubtitle: string;
  basketEmpty: string;
  basketEmptyHint: string;
  clearAll: string;
  backToAisle: string;
  flavorAndSeason: string;
  peakSeasonNow: string;
  // Share texts
  shareButton: string;
  shareBoardButton: string;
  shareModalTitle: string;
  shareModalSubtitle: string;
  shareTabBoard: string;
  shareTabFish: string;
  shareTabBasket: string;
  sharePreviewLabel: string;
  shareNativeButton: string;
  shareCopyMessageButton: string;
  shareCopyUrlButton: string;
  shareCopiedMessage: string;
  shareCopiedUrl: string;
  shareFishAction: string;
  shareBasketAction: string;
  shareNoFishSelected: string;
  shareEmptyBasketNote: string;
}

export const TRANSLATIONS: Record<SupportedLang, TranslationDictionary> = {
  ja: {
    appName: 'おさかなマーケット',
    appSubtitle: '旬の地魚トレードボード',
    marketLiveReport: '水揚速報',
    allPortsCooperation: '地元漁港連携',
    surplusArrivalGood: '豊漁銘柄 入荷好調',
    sdgsButton: 'SDGs',
    sdgsFullButton: 'SDGs14.4解説',
    basketButton: 'カゴメモ',
    todayFlash: '本日速報',
    todayDealCount: '本日のお買い得',
    localCatchRate: '地産地消率',
    lowCo2Mileage: '低CO2マイレージ',
    sdgsManagement: 'SDGs14.4管理',
    compliant: '遵守中',
    highFreshness: '高鮮度',
    zeroAirFreight: '空輸ゼロ・トラック短縮',
    todaySpecialAction: '本日のお買い得銘柄を見る',
    todaySpecialActive: 'お買い得銘柄を表示中',
    searchPlaceholder: '魚の名前・港で検索（イワシ、サバ、港名...）',
    sortLabel: '並び替え:',
    sortByDeal: 'お買い得順',
    sortByTrend: '水揚トレンド順',
    filterAll: 'すべて',
    filterSurplus: '豊漁・お買い得',
    filterSeason: 'いまが旬！',
    filterScarce: '資源保護・控えめ',
    boardTitle: 'BOARD',
    boardSubtitle: '水揚動向＆お買い得銘柄',
    trendHeader: '騰落率（前週比）',
    dealHeader: 'お買い得度',
    priceHeader: '店頭目安価格',
    recentTrend: '水揚推移',
    dealRating: 'お買い得',
    estPrice: '参考相場:',
    addToBasket: '今日買うメモに追加',
    removeFromBasket: '買い物メモから外す',
    viewDetails: '鮮度と詳細を見る',
    boardHint: '魚をタップすると「なぜ今獲れるか」「鮮度の見分け方」「3分レシピ」が読めます',
    coastalRefNote: '※水揚データは設定地域の沿岸漁業基準',
    emptyResults: '該当する魚種が見つかりませんでした。',
    emptyHint: '検索キーワードまたは絞り込みフィルターを変更してください。',
    regionLabel: '水揚げ地域:',
    regionKanto: '関東・千葉沿岸',
    regionHokkaido: '北海道・東北沿岸',
    regionWest: '西日本・瀬戸内/九州',
    regionHokuriku: '北陸・日本海沿岸',
    whyCatchReason: 'なぜ今獲れやすい（または獲れにくい）のか？',
    waterTempStatus: '海水温の状況',
    currentFlowStatus: '海流・潮流',
    stockManagementStatus: '資源管理・水準',
    freshnessCheckTitle: '売り場で見分ける！鮮度チェック3箇条',
    quickRecipeTitle: '3分で決まるおすすめ簡単レシピ',
    recipeCopyButton: 'レシピをコピー',
    recipeCopied: 'コピー完了！',
    prepTimeEstimate: '目安: 約',
    seasoningTags: '味付けタグ:',
    closeButton: '閉じる',
    addToBasketFull: '今日買う魚リストに追加',
    basketCountItems: '品を選定中',
    basketTitle: '本日のお買い物メモ',
    basketSubtitle: 'スーパーの鮮魚コーナーで確認',
    basketEmpty: '買い物メモはまだ空です',
    basketEmptyHint: 'ボードの「＋」ボタンや魚の詳細画面から、今日買いたい旬のお買い得魚を追加できます。',
    clearAll: 'すべてクリア',
    backToAisle: '売り場へ戻る',
    flavorAndSeason: '味わい・特徴:',
    peakSeasonNow: '（現在もっとも脂が乗り美味しい時期です！）',
    shareButton: '共有',
    shareBoardButton: 'みんなに共有',
    shareModalTitle: 'おさかな情報を共有する',
    shareModalSubtitle: '家族や友人に今日のお買い得魚・レシピ・URLを送れます',
    shareTabBoard: '地域の相場ボード',
    shareTabFish: 'この魚とレシピ',
    shareTabBasket: '買い物メモ',
    sharePreviewLabel: '共有メッセージのプレビュー',
    shareNativeButton: 'アプリで共有（LINE・メール等）',
    shareCopyMessageButton: 'メッセージ＋URLをコピー',
    shareCopyUrlButton: 'URLのみコピー',
    shareCopiedMessage: 'メッセージをコピーしました！',
    shareCopiedUrl: '共有URLをコピーしました！',
    shareFishAction: 'この魚を共有',
    shareBasketAction: '家族に共有',
    shareNoFishSelected: '魚が選択されていません',
    shareEmptyBasketNote: '買い物メモが空のため、地域の速報リンクが共有されます'
  },
  en: {
    appName: 'Osakana Market',
    appSubtitle: 'Seasonal Catch Trading Board',
    marketLiveReport: 'Port Catch Live',
    allPortsCooperation: 'Local Ports Partner',
    surplusArrivalGood: 'Surplus Catch In Stock',
    sdgsButton: 'SDGs',
    sdgsFullButton: 'SDGs 14.4 Guide',
    basketButton: 'Basket',
    todayFlash: 'FLASH',
    todayDealCount: "Today's Best Deals",
    localCatchRate: 'Local Catch Rate',
    lowCo2Mileage: 'Low-Carbon Transport',
    sdgsManagement: 'SDGs 14.4 Status',
    compliant: 'Compliant',
    highFreshness: 'Super Fresh',
    zeroAirFreight: 'Zero air miles · Low transit',
    todaySpecialAction: "View Today's Best Deals",
    todaySpecialActive: 'Showing Deals',
    searchPlaceholder: 'Search fish or port (Sardine, Mackerel...)',
    sortLabel: 'Sort by:',
    sortByDeal: 'Best Value',
    sortByTrend: 'Catch Trend',
    filterAll: 'All',
    filterSurplus: 'Surplus & Bargain',
    filterSeason: 'In Season Now',
    filterScarce: 'Protected / Scarce',
    boardTitle: 'BOARD',
    boardSubtitle: 'Market Catch Dynamics & Deals',
    trendHeader: 'Trend vs Last Wk',
    dealHeader: 'Deal Rating',
    priceHeader: 'Est. Price',
    recentTrend: '4-Wk Volume',
    dealRating: 'Deal',
    estPrice: 'Est. Price:',
    addToBasket: 'Add to basket list',
    removeFromBasket: 'Remove from basket',
    viewDetails: 'View freshness & recipe',
    boardHint: 'Tap any fish to view ocean reasons, freshness checklist, and 3-minute recipes.',
    coastalRefNote: '*Catch data calibrated for local coastal waters',
    emptyResults: 'No fish matching your search.',
    emptyHint: 'Try changing your keyword or filter criteria.',
    regionLabel: 'Catch Region:',
    regionKanto: 'Kanto / Chiba Coast',
    regionHokkaido: 'Hokkaido / Tohoku Coast',
    regionWest: 'West Japan / Seto / Kyushu',
    regionHokuriku: 'Hokuriku / Japan Sea',
    whyCatchReason: 'Why is it abundant (or scarce) right now?',
    waterTempStatus: 'Sea Surface Temp',
    currentFlowStatus: 'Ocean Currents',
    stockManagementStatus: 'Fishery Stock Status',
    freshnessCheckTitle: 'Store Checklist: 3 Freshness Signs',
    quickRecipeTitle: '3-Minute Quick Culinary Recipe',
    recipeCopyButton: 'Copy Recipe',
    recipeCopied: 'Copied!',
    prepTimeEstimate: 'Est. Time: ~',
    seasoningTags: 'Flavor Seasonings:',
    closeButton: 'Close',
    addToBasketFull: 'Add to Today\'s Basket',
    basketCountItems: 'items selected',
    basketTitle: "Today's Shopping Basket",
    basketSubtitle: 'Ready for the seafood counter',
    basketEmpty: 'Your shopping list is empty',
    basketEmptyHint: 'Tap the "+" button or fish details to bookmark sustainable fish for tonight.',
    clearAll: 'Clear All',
    backToAisle: 'Back to Market',
    flavorAndSeason: 'Flavor Profile:',
    peakSeasonNow: '(Currently at peak flavor and fat richness!)',
    shareButton: 'Share',
    shareBoardButton: 'Share Board',
    shareModalTitle: 'Share Seafood Market Info',
    shareModalSubtitle: 'Send today’s best catches, recipes, and links to family or friends',
    shareTabBoard: 'Market Board',
    shareTabFish: 'Fish & Recipe',
    shareTabBasket: 'Shopping List',
    sharePreviewLabel: 'Share Message Preview',
    shareNativeButton: 'Share via Apps',
    shareCopyMessageButton: 'Copy Message & Link',
    shareCopyUrlButton: 'Copy Link Only',
    shareCopiedMessage: 'Message & link copied!',
    shareCopiedUrl: 'Share URL copied!',
    shareFishAction: 'Share Fish',
    shareBasketAction: 'Share List',
    shareNoFishSelected: 'No fish selected',
    shareEmptyBasketNote: 'Your basket is empty, so the regional board link will be shared.'
  },
  'zh-CN': {
    appName: '海鲜鲜鱼市场',
    appSubtitle: '当季地鱼行情看板',
    marketLiveReport: '水产速报',
    allPortsCooperation: '当地渔港直通',
    surplusArrivalGood: '大丰收热卖中',
    sdgsButton: 'SDGs',
    sdgsFullButton: 'SDGs 14.4指南',
    basketButton: '购物清单',
    todayFlash: '今日速报',
    todayDealCount: '今日特惠海鲜',
    localCatchRate: '当地水产比例',
    lowCo2Mileage: '低碳短途运输',
    sdgsManagement: 'SDGs 14.4标准',
    compliant: '严格遵守',
    highFreshness: '超高新鲜度',
    zeroAirFreight: '零空运 · 快速直达',
    todaySpecialAction: '查看今日特惠推荐',
    todaySpecialActive: '正在显示特惠品类',
    searchPlaceholder: '搜索鱼种或渔港（沙丁鱼、鲭鱼...）',
    sortLabel: '排序:',
    sortByDeal: '超值推荐',
    sortByTrend: '捕获量增幅',
    filterAll: '全部',
    filterSurplus: '大丰收・特惠',
    filterSeason: '正值当季！',
    filterScarce: '资源保护・稀少',
    boardTitle: '看板',
    boardSubtitle: '捕捞走势与实惠行情',
    trendHeader: '环比走势',
    dealHeader: '超值度',
    priceHeader: '预估价格',
    recentTrend: '近4周走势',
    dealRating: '超值度',
    estPrice: '预估市价:',
    addToBasket: '加入今日清单',
    removeFromBasket: '移出清单',
    viewDetails: '查看新鲜度与食谱',
    boardHint: '点击任意鱼种即可查看海洋捕捞背景、挑选窍门及3分钟快手食谱。',
    coastalRefNote: '※水产数据来源于指定海域最新统计',
    emptyResults: '未找到符合条件的鱼类。',
    emptyHint: '请尝试更换搜索词或筛选标签。',
    regionLabel: '捕捞海域:',
    regionKanto: '关东・千叶沿海',
    regionHokkaido: '北海道・东北沿海',
    regionWest: '西日本・濑户内/九州',
    regionHokuriku: '北陆・日本海沿岸',
    whyCatchReason: '为什么现在捕获量大（或减少）？',
    waterTempStatus: '海水温度状况',
    currentFlowStatus: '海流潮流走向',
    stockManagementStatus: '资源管理水准',
    freshnessCheckTitle: '卖场必看！新鲜度挑选3大要点',
    quickRecipeTitle: '3分钟即享快手食谱',
    recipeCopyButton: '复制食谱',
    recipeCopied: '已复制！',
    prepTimeEstimate: '用时: 约',
    seasoningTags: '风味调料:',
    closeButton: '关闭',
    addToBasketFull: '加入今日选购清单',
    basketCountItems: '已挑选种类',
    basketTitle: '今日海鲜选购清单',
    basketSubtitle: '在超市生鲜专柜随时查阅',
    basketEmpty: '清单目前为空',
    basketEmptyHint: '点击表格中的“＋”或鱼类卡片，即可添加今日物美价廉的时令海鲜。',
    clearAll: '清空清单',
    backToAisle: '返回卖场',
    flavorAndSeason: '口感与风味:',
    peakSeasonNow: '（当前油脂丰美，正值最佳品尝期！）',
    shareButton: '分享',
    shareBoardButton: '分享行情',
    shareModalTitle: '分享海鲜行情信息',
    shareModalSubtitle: '一键将今日特惠海鲜、快手食谱或选购清单发送给家人朋友',
    shareTabBoard: '本地行情看板',
    shareTabFish: '当前鱼种与食谱',
    shareTabBasket: '今日清单',
    sharePreviewLabel: '分享内容预览',
    shareNativeButton: '通过其他应用分享',
    shareCopyMessageButton: '复制文字与链接',
    shareCopyUrlButton: '仅复制链接',
    shareCopiedMessage: '已复制分享内容！',
    shareCopiedUrl: '已复制分享链接！',
    shareFishAction: '分享此鱼',
    shareBasketAction: '分享清单',
    shareNoFishSelected: '尚未选择鱼种',
    shareEmptyBasketNote: '当前清单为空，将分享本海域行情看板链接。'
  },
  'zh-TW': {
    appName: '海鮮鮮魚市場',
    appSubtitle: '當季地魚行情看板',
    marketLiveReport: '水產速報',
    allPortsCooperation: '在地漁港連線',
    surplusArrivalGood: '大豐收熱銷中',
    sdgsButton: 'SDGs',
    sdgsFullButton: 'SDGs 14.4指南',
    basketButton: '購物清單',
    todayFlash: '今日速報',
    todayDealCount: '今日超值地魚',
    localCatchRate: '在地水產比例',
    lowCo2Mileage: '低碳短途運輸',
    sdgsManagement: 'SDGs 14.4標準',
    compliant: '嚴格遵守',
    highFreshness: '超高新鮮度',
    zeroAirFreight: '零空運 · 快速直達',
    todaySpecialAction: '查看今日超值推薦',
    todaySpecialActive: '正在顯示特惠魚種',
    searchPlaceholder: '搜尋魚種或漁港（沙丁魚、鯖魚...）',
    sortLabel: '排序:',
    sortByDeal: '超值程度',
    sortByTrend: '捕獲量趨勢',
    filterAll: '全部',
    filterSurplus: '大豐收・超值',
    filterSeason: '當季最鮮！',
    filterScarce: '資源保護・稀缺',
    boardTitle: '看板',
    boardSubtitle: '捕撈趨勢與超值行情',
    trendHeader: '週比趨勢',
    dealHeader: '超值指數',
    priceHeader: '參考售價',
    recentTrend: '近4週走勢',
    dealRating: '超值度',
    estPrice: '參考市價:',
    addToBasket: '加入今日清單',
    removeFromBasket: '移出清單',
    viewDetails: '查看新鮮度與食譜',
    boardHint: '點擊任意魚種即可查閱海洋背景、挑選訣竅及3分鐘快手食譜。',
    coastalRefNote: '※水產數據源自所選海域最新統計',
    emptyResults: '未找到符合條件的魚種。',
    emptyHint: '請嘗試更換關鍵字或篩選標籤。',
    regionLabel: '捕撈海域:',
    regionKanto: '關東・千葉沿海',
    regionHokkaido: '北海道・東北沿海',
    regionWest: '西日本・瀨戶內/九州',
    regionHokuriku: '北陸・日本海沿岸',
    whyCatchReason: '為什麼現在捕撈容易（或稀少）？',
    waterTempStatus: '海水水溫狀況',
    currentFlowStatus: '海流潮流走向',
    stockManagementStatus: '資源管理水準',
    freshnessCheckTitle: '賣場必看！新鮮度挑選3大要訣',
    quickRecipeTitle: '3分鐘簡易快煮食譜',
    recipeCopyButton: '複製食譜',
    recipeCopied: '已複製！',
    prepTimeEstimate: '預估時間: 約',
    seasoningTags: '調味標籤:',
    closeButton: '關閉',
    addToBasketFull: '加入今日採買清單',
    basketCountItems: '項已選',
    basketTitle: '今日海鮮採買清單',
    basketSubtitle: '在生鮮超市隨時查閱',
    basketEmpty: '清單目前為空',
    basketEmptyHint: '點擊看板中的「＋」或詳細頁面，即可儲存今日物美價廉的在地海鮮。',
    clearAll: '清空清單',
    backToAisle: '返回賣場',
    flavorAndSeason: '風味與特色:',
    peakSeasonNow: '（目前油脂豐富，正值最佳賞味期！）',
    shareButton: '分享',
    shareBoardButton: '分享行情',
    shareModalTitle: '分享海鮮行情資訊',
    shareModalSubtitle: '一鍵將今日超值海產、3分鐘食譜或採買清單傳送給親友',
    shareTabBoard: '在地行情看板',
    shareTabFish: '此魚種與食譜',
    shareTabBasket: '採買清單',
    sharePreviewLabel: '分享訊息預覽',
    shareNativeButton: '透過其他應用程式分享',
    shareCopyMessageButton: '複製訊息與連結',
    shareCopyUrlButton: '僅複製連結',
    shareCopiedMessage: '已複製分享訊息！',
    shareCopiedUrl: '已複製分享連結！',
    shareFishAction: '分享此魚',
    shareBasketAction: '分享清單',
    shareNoFishSelected: '尚未選擇魚種',
    shareEmptyBasketNote: '清單為空，將分享本海域行情看板連結。'
  },
  ko: {
    appName: '오사카나 마켓',
    appSubtitle: '제철 생선 트레이딩 보드',
    marketLiveReport: '어획 속보',
    allPortsCooperation: '지역 어항 직송',
    surplusArrivalGood: '풍어 어종 입고 호조',
    sdgsButton: 'SDGs',
    sdgsFullButton: 'SDGs 14.4 해설',
    basketButton: '장바구니',
    todayFlash: '오늘의 속보',
    todayDealCount: '오늘의 특가 어종',
    localCatchRate: '지산지소(로컬) 비율',
    lowCo2Mileage: '저탄소 운송',
    sdgsManagement: 'SDGs 14.4 관리',
    compliant: '준수 중',
    highFreshness: '최고 신선도',
    zeroAirFreight: '항공 운송 제로 · 단거리 운송',
    todaySpecialAction: '오늘의 특가 어종 보기',
    todaySpecialActive: '특가 어종 표시 중',
    searchPlaceholder: '생선 이름 또는 항구 검색 (정어리, 고등어...)',
    sortLabel: '정렬:',
    sortByDeal: '가성비순',
    sortByTrend: '어획량 증가순',
    filterAll: '전체',
    filterSurplus: '풍어 · 특가',
    filterSeason: '지금이 제철!',
    filterScarce: '자원 보호 · 어획 감소',
    boardTitle: 'BOARD',
    boardSubtitle: '어획 동향 & 추천 종목',
    trendHeader: '전주 대비 등락률',
    dealHeader: '가성비',
    priceHeader: '매장 예상 가격',
    recentTrend: '최근 4주 어획 추이',
    dealRating: '가성비',
    estPrice: '예상 시세:',
    addToBasket: '장바구니 메모에 추가',
    removeFromBasket: '장바구니에서 삭제',
    viewDetails: '신선도 & 상세 보기',
    boardHint: '생선을 탭하면 어획 이유, 신선도 구별법, 3분 초간단 레시피를 확인할 수 있습니다.',
    coastalRefNote: '*해당 해역 최신 연안 어업 기준 데이터',
    emptyResults: '해당하는 생선이 없습니다.',
    emptyHint: '검색어나 필터를 변경해 보세요.',
    regionLabel: '어획 해역:',
    regionKanto: '간토 · 지바 연안',
    regionHokkaido: '홋카이도 · 도호쿠 연안',
    regionWest: '서일본 · 세토내해/규슈',
    regionHokuriku: '호쿠리쿠 · 동해(일본해) 연안',
    whyCatchReason: '왜 지금 많이 잡힐까요 (또는 잡기 어려울까요)?',
    waterTempStatus: '해수면 온도 상황',
    currentFlowStatus: '해류 및 조류 흐름',
    stockManagementStatus: '수산 자원 관리 수준',
    freshnessCheckTitle: '매장에서 바로 확인하는 신선도 3원칙',
    quickRecipeTitle: '3분 완성 추천 초간단 레시피',
    recipeCopyButton: '레시피 복사',
    recipeCopied: '복사 완료!',
    prepTimeEstimate: '예상 시간: 약',
    seasoningTags: '추천 양념:',
    closeButton: '닫기',
    addToBasketFull: '오늘 살 생선 리스트에 추가',
    basketCountItems: '개 선택됨',
    basketTitle: '오늘의 장바구니 메모',
    basketSubtitle: '수산물 코너에서 간편하게 확인',
    basketEmpty: '장바구니가 비어 있습니다',
    basketEmptyHint: '보드의 "+" 버튼이나 상세 페이지에서 오늘 사면 좋은 제철 생선을 담아보세요.',
    clearAll: '전체 삭제',
    backToAisle: '매장으로 돌아가기',
    flavorAndSeason: '맛과 특징:',
    peakSeasonNow: '(현재 기름이 가장 잘 올라 맛있는 제철입니다!)',
    shareButton: '공유',
    shareBoardButton: '시세 공유',
    shareModalTitle: '수산물 정보 공유하기',
    shareModalSubtitle: '오늘의 특가 생선, 3분 레시피, 장바구니 메모를 가족이나 지인에게 보냅니다',
    shareTabBoard: '지역 시세 보드',
    shareTabFish: '선택한 생선 & 레시피',
    shareTabBasket: '장바구니 메모',
    sharePreviewLabel: '공유 메시지 미리보기',
    shareNativeButton: '앱으로 공유하기',
    shareCopyMessageButton: '메시지 + 링크 복사',
    shareCopyUrlButton: '링크 URL만 복사',
    shareCopiedMessage: '메시지를 복사했습니다!',
    shareCopiedUrl: '공유 URL을 복사했습니다!',
    shareFishAction: '이 생선 공유',
    shareBasketAction: '메모 공유',
    shareNoFishSelected: '선택된 생선이 없습니다',
    shareEmptyBasketNote: '장바구니가 비어 있어 지역 시세 보드 링크가 공유됩니다.'
  }
};

import { SupportedLang } from '../i18n/translations';

export type RegionKey = 'kanto' | 'hokkaido' | 'west' | 'hokuriku';

export interface LocalizedString {
  ja: string;
  en: string;
  'zh-CN': string;
  'zh-TW': string;
  ko: string;
}

export interface RegionalQuickRecipe {
  dishName: LocalizedString;
  prepMinutes: number;
  seasonings: LocalizedString[];
  cookingMethod: LocalizedString;
  instructions: LocalizedString;
}

export interface RegionalFishItem {
  id: string;
  name: LocalizedString;
  kana: string;
  latinName: string;
  category: '青魚' | '白身魚' | '赤身魚' | '高級魚・底生魚' | '甲殻・貝類';
  catchStatus: 'surplus' | 'stable' | 'scarce';
  statusLabel: LocalizedString;
  trendPercent: number;
  weeklyVolumeTrend: number[];
  dealRating: 1 | 2 | 3;
  estimatedPrice: LocalizedString;
  ports: LocalizedString[];
  seasonText: LocalizedString;
  isPeakSeason: boolean;
  highlightTag: LocalizedString;
  imageUrl?: string;
  oceanReason: LocalizedString;
  marineConditions: {
    waterTempNote: LocalizedString;
    kuroshioCurrent: LocalizedString;
    stockCondition: LocalizedString;
  };
  freshnessCheckpoints: {
    part: LocalizedString;
    tip: LocalizedString;
  }[];
  quickRecipe: RegionalQuickRecipe;
  sdgsStory: {
    target: LocalizedString;
    message: LocalizedString;
    actionAdvice: LocalizedString;
  };
  flavorProfile: LocalizedString;
}

export interface RegionMetadata {
  id: RegionKey;
  name: LocalizedString;
  portsHeadline: LocalizedString;
  bannerTitle: LocalizedString;
  bannerSubtitle: LocalizedString;
  localCatchRate: string;
  surplusRate: string;
  co2Score: string;
  tickerHeadline: LocalizedString;
}

export const REGIONS_META: Record<RegionKey, RegionMetadata> = {
  kanto: {
    id: 'kanto',
    name: {
      ja: '関東・千葉沿岸',
      en: 'Kanto / Chiba Coast',
      'zh-CN': '关东・千叶沿海',
      'zh-TW': '關東・千葉沿海',
      ko: '간토 · 지바 연안',
    },
    portsHeadline: {
      ja: '銚子港・勝浦港・船橋港・館山港連携',
      en: 'Choshi, Katsuura, Funabashi, Tateyama Ports',
      'zh-CN': '铫子港・胜浦港・船桥港・馆山港联动',
      'zh-TW': '銚子港・勝浦港・船橋港・館山港聯動',
      ko: '조시항 · 가쓰우라항 · 후나바시항 · 다테야마항 연계',
    },
    bannerTitle: {
      ja: '関東・千葉の海で今獲れている魚',
      en: 'Current Catches from Kanto & Chiba Coastal Waters',
      'zh-CN': '关东・千叶海域当前鲜活捕获动态',
      'zh-TW': '關東・千葉海域當前鮮活捕獲動態',
      ko: '간토 · 지바 바다에서 지금 잡히는 제철 생선',
    },
    bannerSubtitle: {
      ja: '黒潮と親潮が交わる豊かな海。銚子港のイワシや船橋のスズキが大豊漁！',
      en: 'Where Kuroshio meets Oyashio. Bumper catches of sardines from Choshi and seabass from Funabashi!',
      'zh-CN': '黑潮与亲潮交汇的富饶海域。铫子港沙丁鱼与船桥鲈鱼大丰收！',
      'zh-TW': '黑潮與親潮交匯的富饒海域。銚子港沙丁魚與船橋鱸魚大豐收！',
      ko: '쿠로시오와 오야시오가 만나는 풍요로운 바다. 조시항 정어리와 후나바시 농어 대풍어!',
    },
    localCatchRate: '84%',
    surplusRate: '+38%',
    co2Score: 'Aランク (東京湾・房総直結)',
    tickerHeadline: {
      ja: '【銚子港速報】マイワシ大豊漁・爆安！/ 船橋港スズキ水揚げ日本一絶好調',
      en: 'Choshi Port Alert: Sardine bumper harvest & deals! Funabashi Seabass peak landings.',
      'zh-CN': '【铫子港速报】沙丁鱼大丰收特惠中！船桥鲈鱼捕捞量全国第一',
      'zh-TW': '【銚子港速報】沙丁魚大豐收超值熱銷！船橋鱸魚捕撈量全日本第一',
      ko: '【조시항 속보】정어리 대풍어 특가! 후나바시 농어 일본 전국 1위 어획 호조',
    },
  },
  hokkaido: {
    id: 'hokkaido',
    name: {
      ja: '北海道・東北沿岸',
      en: 'Hokkaido / Tohoku Coast',
      'zh-CN': '北海道・东北沿海',
      'zh-TW': '北海道・東北沿海',
      ko: '홋카이도 · 도호쿠 연안',
    },
    portsHeadline: {
      ja: '函館港・八戸港・気仙沼港・三陸連携',
      en: 'Hakodate, Hachinohe, Kesennuma, Sanriku Ports',
      'zh-CN': '函馆港・八户港・气仙沼港・三陆联动',
      'zh-TW': '函館港・八戶港・氣仙沼港・三陸聯動',
      ko: '하코다테항 · 하치노헤항 · 게센누마항 · 산리쿠 연계',
    },
    bannerTitle: {
      ja: '北海道・三陸沖で今獲れている魚',
      en: 'Current Catches from Hokkaido & Sanriku Waters',
      'zh-CN': '北海道・三陆海域当前鲜活捕获动态',
      'zh-TW': '北海道・三陸海域當前鮮活捕獲動態',
      ko: '홋카이도 · 산리쿠 앞바다 지금 잡히는 제철 생선',
    },
    bannerSubtitle: {
      ja: '冷たく澄んだ親潮の恵み。秋サケ・ホタテ・真ダラが旬を迎え入荷中！',
      en: 'Bounties of the cold Oyashio Current. Chum salmon, scallops, and Pacific cod in season!',
      'zh-CN': '冰凉清冽的亲潮馈赠。秋鲑、帆立贝与真鳕鱼正值最佳时令！',
      'zh-TW': '冰涼清冽的親潮饋贈。秋鮭、扇貝與真鱈魚正值最佳時令！',
      ko: '차갑고 맑은 오야시오 해류의 선물. 연어, 가리비, 대구가 제철 입고 중!',
    },
    localCatchRate: '91%',
    surplusRate: '+42%',
    co2Score: 'Aランク (北日本水揚直結)',
    tickerHeadline: {
      ja: '【八戸・函館速報】三陸ホタテ・秋サケ水揚げ盛期！サンマは品薄が継続',
      en: 'Hachinohe & Hakodate Alert: Scallop & Salmon harvest in full swing! Saury remains scarce.',
      'zh-CN': '【八户・函馆速报】三陆扇贝与秋鲑捕捞迎来高峰！秋刀鱼依然稀少',
      'zh-TW': '【八戶・函館速報】三陸扇貝與秋鮭捕撈迎來高峰！秋刀魚依舊稀缺',
      ko: '【하치노헤 · 하코다테 속보】산리쿠 가리비와 연어 성어기! 꽁치는 품귀 지속',
    },
  },
  west: {
    id: 'west',
    name: {
      ja: '西日本・瀬戸内/九州',
      en: 'West Japan / Seto / Kyushu',
      'zh-CN': '西日本・濑户内/九州',
      'zh-TW': '西日本・瀨戶內/九州',
      ko: '서일본 · 세토내해/규슈',
    },
    portsHeadline: {
      ja: '明石港・境港・長崎港・博多港連携',
      en: 'Akashi, Sakaiminato, Nagasaki, Hakata Ports',
      'zh-CN': '明石港・境港・长崎港・博多港联动',
      'zh-TW': '明石港・境港・長崎港・博多港聯動',
      ko: '아카시항 · 사카이미나토항 · 나가사키항 · 하카타항 연계',
    },
    bannerTitle: {
      ja: '西日本・瀬戸内海で今獲れている魚',
      en: 'Current Catches from West Japan & Seto Inland Sea',
      'zh-CN': '西日本・濑户内海与九州当前捕获动态',
      'zh-TW': '西日本・瀨戶內海與九州當前捕獲動態',
      ko: '서일본 · 세토내해와 규슈 바다 지금 잡히는 생선',
    },
    bannerSubtitle: {
      ja: '激しい潮流が生む極上の身質。天然真鯛・マアジ・サワラが好調！',
      en: 'Firm textures forged by vigorous tidal currents. Red seabream, mackerel, and Spanish mackerel thriving!',
      'zh-CN': '湍急潮流孕育的紧致肉质。天然真鲷、竹荚鱼与马鲛鱼捕捞喜人！',
      'zh-TW': '湍急潮流孕育的緊緻肉質。天然真鯛、竹筴魚與馬鮫魚捕撈喜人！',
      ko: '거친 조류가 키운 최고의 육질. 자연산 참돔, 전갱이, 삼치 입고 호조!',
    },
    localCatchRate: '88%',
    surplusRate: '+31%',
    co2Score: 'Aランク (瀬戸内・対馬海流直結)',
    tickerHeadline: {
      ja: '【明石・長崎速報】マアジ・サワラが豊漁！瀬戸内の天然マダイがお値打ち価格',
      en: 'Akashi & Nagasaki Alert: Jack Mackerel & Sawara abundant! Natural red seabream at bargain prices.',
      'zh-CN': '【明石・长崎速报】竹荚鱼与马鲛鱼大丰收！天然真鲷特惠热销中',
      'zh-TW': '【明石・長崎速報】竹筴魚與馬鮫魚大豐收！天然真鯛超值熱銷中',
      ko: '【아카시 · 나가사키 속보】전갱이와 삼치 풍어! 세토내해 자연산 참돔 알뜰 가격',
    },
  },
  hokuriku: {
    id: 'hokuriku',
    name: {
      ja: '北陸・日本海沿岸',
      en: 'Hokuriku / Japan Sea',
      'zh-CN': '北陆・日本海沿岸',
      'zh-TW': '北陸・日本海沿岸',
      ko: '호쿠리쿠 · 동해(일본해) 연안',
    },
    portsHeadline: {
      ja: '金沢港・氷見港・富山湾・敦賀港連携',
      en: 'Kanazawa, Himi, Toyama Bay, Tsuruga Ports',
      'zh-CN': '金泽港・冰见港・富山湾・敦贺港联动',
      'zh-TW': '金澤港・冰見港・富山灣・敦賀港聯動',
      ko: '가나자와항 · 히미항 · 도야마만 · 쓰루가항 연계',
    },
    bannerTitle: {
      ja: '北陸・富山湾・日本海で今獲れている魚',
      en: 'Current Catches from Hokuriku & Toyama Bay',
      'zh-CN': '北陆・富山湾与日本海沿岸捕获动态',
      'zh-TW': '北陸・富山灣與日本海沿岸捕獲動態',
      ko: '호쿠리쿠 · 도야마만 바다 지금 잡히는 제철 생선',
    },
    bannerSubtitle: {
      ja: '天然の生簀と呼ばれる富山湾と日本海の荒波。寒ブリ・甘エビ・ハタハタが絶品！',
      en: 'Toyama Bay, the "natural fish tank." Winter amberjack, sweet shrimp, and sandfish at their best!',
      'zh-CN': '被誉为“天然水族箱”的富山湾。寒鰤鱼、甜虾与叉尾麦氏鲈肉质鲜美！',
      'zh-TW': '被譽為「天然魚槽」的富山灣。寒鰤魚、甜蝦與叉尾麥氏鱸肉質鮮美！',
      ko: '천연 어항이라 불리는 도야마만. 방어, 단새우, 도루묵 최고의 별미!',
    },
    localCatchRate: '93%',
    surplusRate: '+35%',
    co2Score: 'Aランク (日本海固有冷水直結)',
    tickerHeadline: {
      ja: '【氷見・金沢速報】氷見寒ブリ水揚解禁で話題！甘エビ・ハタハタ入荷好調',
      en: 'Himi & Kanazawa Alert: Famous Himi winter amberjack season open! Sweet shrimp in abundant stock.',
      'zh-CN': '【冰见・金泽速报】冰见寒鰤鱼捕捞解禁！甜虾与叉尾鲈供应充足',
      'zh-TW': '【冰見・金澤速報】冰見寒鰤魚捕撈解禁！甜蝦與叉尾鱸供應充足',
      ko: '【히미 · 가나자와 속보】히미 방어 어획 개시! 단새우와 도루묵 입고 호조',
    },
  },
};

export const REGIONAL_FISH_DATABASE: Record<RegionKey, RegionalFishItem[]> = {
  kanto: [
    {
      id: 'maiwashi',
      name: {
        ja: 'マイワシ',
        en: 'Japanese Sardine',
        'zh-CN': '日本真沙丁鱼',
        'zh-TW': '日本真沙丁魚',
        ko: '정어리',
      },
      kana: 'まいわし',
      latinName: 'Sardinops melanostictus',
      category: '青魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '大豊漁・爆安！',
        en: 'Massive Surplus · Super Deal!',
        'zh-CN': '大丰产・超特惠！',
        'zh-TW': '大豐產・超超值！',
        ko: '대풍어 · 초특가!',
      },
      trendPercent: 52,
      weeklyVolumeTrend: [65, 78, 92, 100],
      dealRating: 3,
      estimatedPrice: {
        ja: '1尾 68〜88円',
        en: '¥68-88 per fish',
        'zh-CN': '每条 68〜88日元',
        'zh-TW': '每尾 68〜88日圓',
        ko: '1마리 68~88엔',
      },
      ports: [
        { ja: '銚子港', en: 'Choshi', 'zh-CN': '铫子港', 'zh-TW': '銚子港', ko: '조시항' },
        { ja: '波崎港', en: 'Hasaki', 'zh-CN': '波崎港', 'zh-TW': '波崎港', ko: '하사키항' },
      ],
      seasonText: {
        ja: '初夏（入梅）〜初冬',
        en: 'Early Summer to Early Winter',
        'zh-CN': '初夏至初冬',
        'zh-TW': '初夏至初冬',
        ko: '초여름~초겨울',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '本日イチオシ・食べて応援！',
        en: "Today's Top Pick · Support Fishery!",
        'zh-CN': '今日主推・食用来支持！',
        'zh-TW': '今日主推・用美味來支持！',
        ko: '오늘의 강력 추천 · 맛있는 응원!',
      },
      imageUrl: '/src/assets/images/fish_sardine_fresh_1794467850498.jpg',
      oceanReason: {
        ja: '親潮系冷水と黒潮の潮境が銚子沖に形成され、良質なプランクトンが爆発的に発生。丸々と太った大群が沿岸近くまで南下しており連日記録的な大漁です。',
        en: 'A boundary zone between the Oyashio cold water and Kuroshio current formed off Choshi, creating an explosion of plankton and massive nearshore schools.',
        'zh-CN': '亲潮冷水与黑潮在铫子近海交汇，浮游生物爆发性繁衍，肥美鱼群大举游至沿海，持续连日大丰产。',
        'zh-TW': '親潮冷水與黑潮在銚子近海交匯，浮游生物大量繁衍，肥美魚群大舉靠岸，連續數日大豐產。',
        ko: '오야시오 한류와 쿠로시오 난류가 조시 앞바다에서 만나 플랑크톤이 폭발적으로 증식하여 대형 어군이 연안으로 남하했습니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '沿岸水温が適温帯（16〜19℃）を維持し回遊が長期化',
          en: 'Coastal water temp maintained at optimum 16-19°C',
          'zh-CN': '沿海水温维持在最佳的16-19℃',
          'zh-TW': '沿海水溫維持在最適宜的16-19℃',
          ko: '연안 수온이 16~19℃로 적정 유지되어 회유 장기화',
        },
        kuroshioCurrent: {
          ja: '黒潮が離岸気味で沿岸寄りに餌となるプランクトン帯が集中',
          en: 'Kuroshio slightly offshore keeps food-rich plankton near coasts',
          'zh-CN': '黑潮稍有外离，使得富含浮游生物的饵料带贴近沿岸',
          'zh-TW': '黑潮稍為離岸，使餌料豐富的浮游生物帶貼近海岸',
          ko: '쿠로시오가 약간 이안되어 연안 쪽에 먹이 플랑크톤 집중',
        },
        stockCondition: {
          ja: '太平洋系群の資源量は高水準を維持中',
          en: 'Pacific stock biomass remains at a high, healthy level',
          'zh-CN': '太平洋系群资源储量处于充沛高位',
          'zh-TW': '太平洋系群資源儲量處於豐沛高水準',
          ko: '태평양 계군 자원량이 높은 수준으로 건강하게 유지 중',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '目と頭部', en: 'Eyes & Head', 'zh-CN': '眼睛与头部', 'zh-TW': '眼睛與頭部', ko: '눈과 머리' },
          tip: {
            ja: '目が澄んで黒目がくっきりし、頭部が小さく見えるほど背中が盛り上がっているもの',
            en: 'Eyes clear with defined pupils; back arched thick making head look small.',
            'zh-CN': '眼睛清澈黑亮，背部肉厚拱起显头部小巧。',
            'zh-TW': '眼睛清澈黑亮，背部隆起顯得頭部小巧者為佳。',
            ko: '눈이 맑고 동공이 또렷하며 머리가 작아 보일 정도로 등이 불룩한 것',
          },
        },
        {
          part: { ja: '腹部（お腹）', en: 'Belly', 'zh-CN': '腹部', 'zh-TW': '腹部', ko: '배 부분' },
          tip: {
            ja: 'お腹がピンと張って銀色のウロコや皮の光沢が鮮やかなもの（破れ・変色がない）',
            en: 'Firm resilient belly with vibrant silver iridescent luster and no tears.',
            'zh-CN': '腹部紧实饱满，银鳞光泽鲜明无破裂变色。',
            'zh-TW': '腹部飽滿緊實，銀鱗光澤鮮亮無破損變色。',
            ko: '배가 팽팽하고 은빛 비늘과 껍질의 광택이 선명한 것',
          },
        },
        {
          part: { ja: 'トレイの底', en: 'Packaging Tray', 'zh-CN': '包装盒底部', 'zh-TW': '包裝盒底部', ko: '포장 트레이' },
          tip: {
            ja: '赤いドリップ（水分）がほとんど溜まっていないものを選ぶ',
            en: 'Minimal to no bloody fluid/drip pooling in tray bottom.',
            'zh-CN': '盒底几乎没有暗红色血水渗出者为最鲜。',
            'zh-TW': '盒底幾乎無暗紅色血水滲出者最新鮮。',
            ko: '핏물(드립)이 바닥에 거의 고이지 않은 것을 선택',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: 'イワシの3分フライパン生姜梅煮',
          en: '3-Min Skillet Ginger & Plum Simmered Sardine',
          'zh-CN': '3分钟平底锅姜汁梅子煮沙丁鱼',
          'zh-TW': '3分鐘平底鍋薑汁梅子煮沙丁魚',
          ko: '3분 프라이팬 생강 매실 정어리 조림',
        },
        prepMinutes: 3,
        seasonings: [
          { ja: 'めんつゆ', en: 'Mentsuyu (Noodle base soup)', 'zh-CN': '面味露/日式酱油', 'zh-TW': '日式柴魚露', ko: '쯔유' },
          { ja: '梅干し1個', en: '1 Pickled Plum', 'zh-CN': '梅干1颗', 'zh-TW': '梅干1顆', ko: '우메보시(매실절임) 1개' },
          { ja: '生姜チューブ', en: 'Ginger paste', 'zh-CN': '姜末/姜蓉', 'zh-TW': '生薑泥', ko: '생강 페이스트' },
          { ja: '酒', en: 'Cooking Sake', 'zh-CN': '料酒', 'zh-TW': '料理清酒', ko: '청주' },
        ],
        cookingMethod: {
          ja: 'フライパン蒸し煮',
          en: 'Covered Skillet Steam-Simmer',
          'zh-CN': '平底锅闷煮',
          'zh-TW': '平底鍋燜煮',
          ko: '프라이팬 조림',
        },
        instructions: {
          ja: '頭と内臓を取ったイワシをフライパンに並べ、めんつゆ＋酒＋生姜＋潰した梅干しを入れて蓋をし、中火で3分蒸し煮にするだけ。骨まで柔らかくDHA・EPAたっぷり！',
          en: 'Place cleaned sardines in a pan, pour mentsuyu, sake, ginger, and crushed plum, cover and simmer for 3 minutes on medium. Packed with omega-3!',
          'zh-CN': '将处理好的沙丁鱼平铺入锅，倒入日式酱油、清酒、姜末与压碎的酸梅，加盖中火闷煮3分钟即可，富含DHA与EPA！',
          'zh-TW': '將去頭內臟的沙丁魚放入鍋中，加入柴魚露、清酒、生薑及壓碎的梅干，加蓋中火燜煮3分鐘即可！',
          ko: '손질한 정어리를 팬에 넣고 쯔유, 청주, 생강, 으깬 매실을 넣은 뒤 뚜껑을 덮고 중불에서 3분간 조립니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「持続可能な水産資源」＆ 地産地消',
          en: 'SDGs 14.4 Sustainable Fisheries & Local Sourcing',
          'zh-CN': 'SDGs 14.4“可持续海洋渔业”与地产地消',
          'zh-TW': 'SDGs 14.4「永續海洋漁業」與地產地消',
          ko: 'SDGs 14.4 "지속 가능한 수산 자원" & 로컬 소비',
        },
        message: {
          ja: '食物連鎖の下位にいる小型浮魚（イワシ）を積極的に食べることは、大型魚への乱獲圧を減らし海洋生態系のバランス保全に直結します。',
          en: 'Consuming forage fish lower in the food web relieves overfishing pressure on apex predators and stabilizes marine biodiversity.',
          'zh-CN': '食用食物链中低营养级的群生小型鱼类，有助于缓解大型掠食鱼类的捕捞压力，维护海洋生态平衡。',
          'zh-TW': '享用食物鏈中低階的小型魚類，能有效減輕頂級掠食魚類的捕撈壓力，維護海洋生態平衡。',
          ko: '먹이사슬 하위의 소형 어종을 섭취하면 상위 대형 어종에 대한 남획 압력을 줄여 해양 생태계 균형에 기여합니다.',
        },
        actionAdvice: {
          ja: '豊漁で余ると飼料に回されてしまいます。食卓で美味しく食べることが地元漁師の支援と食品ロス削減の最短ルートです！',
          en: 'Surplus catches risk being diverted to industrial feed. Eating them directly is the most delicious way to support local fishermen.',
          'zh-CN': '大丰收若未被消费便容易降级为养殖饲料。端上餐桌品尝是支持当地渔民与减少食物浪费的最佳途径！',
          'zh-TW': '豐產時若無足夠消費常被轉作飼料。直接端上餐桌是支持在地漁民與預防剩食的最佳行動！',
          ko: '풍어일 때 소비되지 않으면 사료로 전락합니다. 식탁에서 맛있게 즐기는 것이 어민 지원과 식품 로스 방지의 지름길입니다!',
        },
      },
      flavorProfile: {
        ja: '脂のり抜群・ふわっと柔らかい身質',
        en: 'Rich natural oils and wonderfully tender, melt-in-mouth texture',
        'zh-CN': '油脂丰富、肉质松软鲜嫩',
        'zh-TW': '油脂豐盈、肉質細嫩綿密',
        ko: '풍부한 기름기와 부드럽고 촉촉한 식감',
      },
    },
    {
      id: 'masaba',
      name: {
        ja: 'マサバ',
        en: 'Chub Mackerel',
        'zh-CN': '日本真鲭（青花鱼）',
        'zh-TW': '日本真鯖魚',
        ko: '고등어',
      },
      kana: 'まさば',
      latinName: 'Scomber japonicus',
      category: '青魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '豊漁・買い時！',
        en: 'Abundant · Great Buy!',
        'zh-CN': '大丰收・正当季！',
        'zh-TW': '大豐收・正超值！',
        ko: '풍어 · 장보기 최적!',
      },
      trendPercent: 34,
      weeklyVolumeTrend: [55, 68, 80, 90],
      dealRating: 3,
      estimatedPrice: {
        ja: '1尾 198〜250円',
        en: '¥198-250 per fish',
        'zh-CN': '每条 198〜250日元',
        'zh-TW': '每尾 198〜250日圓',
        ko: '1마리 198~250엔',
      },
      ports: [
        { ja: '銚子港', en: 'Choshi', 'zh-CN': '铫子港', 'zh-TW': '銚子港', ko: '조시항' },
        { ja: '勝浦港', en: 'Katsuura', 'zh-CN': '胜浦港', 'zh-TW': '勝浦港', ko: '가쓰우라항' },
      ],
      seasonText: {
        ja: '秋〜真冬（秋サバ・寒サバ）',
        en: 'Autumn to Winter (Autumn & Winter Saba)',
        'zh-CN': '秋季至深冬（秋鲭・寒鲭）',
        'zh-TW': '秋季至深冬（秋鯖・寒鯖）',
        ko: '가을~한겨울 (제철 고등어)',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '脂のり絶頂・高コスパ',
        en: 'Peak Fat Richness & Value',
        'zh-CN': '油脂巅峰・高性价比',
        'zh-TW': '油脂巔峰・高CP值',
        ko: '최고의 기름기 · 가성비 최고',
      },
      imageUrl: '/src/assets/images/fish_mackerel_fresh_1794467837590.jpg',
      oceanReason: {
        ja: '北の海で栄養を蓄えたマサバが、越冬と産卵に向けて銚子沖・房総沖へ一気に南下中。魚体も400g以上の丸々と太った良型が揃い、相場が安定しています。',
        en: 'Mackerels well-fed in northern waters are migrating south to Choshi and Boso waters for wintering and spawning, yielding plump 400g+ specimens.',
        'zh-CN': '在北部海域积蓄丰富养分的鲭鱼南下越冬产卵，400g以上的肥美规格大量靠岸，供应充裕稳定。',
        'zh-TW': '在北部海域積蓄豐沛養分的鯖魚南下越冬產卵，400克以上的厚實規格集中靠岸，價格平穩親民。',
        ko: '북쪽 바다에서 영양을 축적한 고등어가 산란을 위해 남하하며 400g 이상의 통통한 개체가 풍성하게 수협에 입고 중입니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '水温低下に伴い沿岸回遊ルートが沿岸巻き網の好漁場に一致',
          en: 'Cooling temps direct schools along coastal purse-seining grounds',
          'zh-CN': '水温下降使回游路线刚好经过沿海优良渔场',
          'zh-TW': '水溫下降使回游路線契合近海圍網漁場',
          ko: '수온 하강으로 연안 두루마리 그물 어장에 최적 일치',
        },
        kuroshioCurrent: {
          ja: '黒潮続流沿いに回遊群が順調に流入',
          en: 'Healthy influx of schools flowing along Kuroshio Extension',
          'zh-CN': '鱼群顺着黑潮续流稳定源源不断流入',
          'zh-TW': '魚群順著黑潮續流穩定源源不絕湧入',
          ko: '쿠로시오 연장류를 따라 회유군이 순조롭게 유입',
        },
        stockCondition: {
          ja: '太平洋系群は中〜高位水準で資源健全',
          en: 'Pacific stock biomass is medium-to-high and healthy',
          'zh-CN': '太平洋群系资源量处于中高位健康状态',
          'zh-TW': '太平洋群系資源量處於中高位健康狀態',
          ko: '태평양 계군 자원량은 중~고위 수준으로 건강',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '背中の模様', en: 'Back Pattern', 'zh-CN': '背部花纹', 'zh-TW': '背部花紋', ko: '등무늬' },
          tip: {
            ja: '背中の緑青色の唐草模様が鮮明で、全体に青黒いツヤがあるもの',
            en: 'Tiger stripes vividly distinct with deep blue-green metallic sheen.',
            'zh-CN': '背部深蓝绿色的波浪花纹鲜明清晰有光泽。',
            'zh-TW': '背部青綠色唐草斑紋鮮明、泛有金屬光澤。',
            ko: '등의 청록색 물결무늬가 뚜렷하고 청흑색 윤기가 도는 것',
          },
        },
        {
          part: { ja: '身の張り', en: 'Body Firmness', 'zh-CN': '身段弹性', 'zh-TW': '身段彈性', ko: '몸의 탄력' },
          tip: {
            ja: '跳ね返す硬い弾力があり、胴体が丸く太いもの',
            en: 'High muscular rebound when pressed; thick cylindrical cross-section.',
            'zh-CN': '按压紧实有弹力，身体圆滚粗壮者油脂丰盈。',
            'zh-TW': '按壓具回彈韌性，胴體渾圓肥厚者油脂佳。',
            ko: '탄탄하고 묵직한 탄력이 있으며 몸통이 둥글고 두툼한 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: 'サバの塩焼き すだち醤油',
          en: 'Crispy Grilled Mackerel with Citrus Soy',
          'zh-CN': '香煎青花鱼配柑橘酱油',
          'zh-TW': '香煎鯖魚佐柑橘醬油',
          ko: '고등어 소금구이와 영귤 간장',
        },
        prepMinutes: 4,
        seasonings: [
          { ja: '粗塩', en: 'Coarse Sea Salt', 'zh-CN': '海盐/粗盐', 'zh-TW': '粗鹽', ko: '천일염' },
          { ja: 'すだち/レモン', en: 'Citrus / Lemon', 'zh-CN': '青柠/柠檬', 'zh-TW': '金桔/檸檬', ko: '레몬/감귤' },
          { ja: '大根おろし', en: 'Grated Daikon Radish', 'zh-CN': '白萝卜泥', 'zh-TW': '蘿蔔泥', ko: '무즙' },
        ],
        cookingMethod: {
          ja: 'グリルまたはフライパン',
          en: 'Grill or Pan-sear',
          'zh-CN': '烤箱或平底锅',
          'zh-TW': '烤箱或平底鍋',
          ko: '그릴 또는 프라이팬',
        },
        instructions: {
          ja: '皮目に切れ目を入れ塩をふって3分。シートを敷いたフライパンで皮目からパリッと焼くだけ。上質な脂が溢れ出ます！',
          en: 'Score the skin, salt, rest 3 mins. Sear skin-down on parchment paper until crisp. Luscious and aromatic!',
          'zh-CN': '鱼皮划十字刀撒盐静置3分。平底锅垫料理纸，鱼皮朝下煎至金黄酥脆，香浓脂香四溢！',
          'zh-TW': '魚皮劃十字刀抹鹽靜置3分鐘。鋪烘焙紙入鍋，魚皮朝下煎至金黃焦香即可！',
          ko: '껍질에 칼집을 내고 소금을 뿌려 3분 대기. 종이호일을 깐 팬에 껍질부터 바삭하게 구워냅니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4＆12.3「食品ロス半減」',
          en: 'SDGs 14.4 & 12.3 Halve Food Waste',
          'zh-CN': 'SDGs 14.4与12.3 减半食物浪费',
          'zh-TW': 'SDGs 14.4與12.3 減半食物浪費',
          ko: 'SDGs 14.4 & 12.3 식품 로스 절감',
        },
        message: {
          ja: '近海サバは地元の加工場やスーパーと直結して運ばれるためフードマイレージが極小です。',
          en: 'Locally caught coastal mackerel travels directly to neighborhood markets, cutting transit fuel and CO2 emissions.',
          'zh-CN': '近海捕捞的鲭鱼短途直达超市，不仅鲜度一流，更能大幅降低长途冷链运输产生的碳排放。',
          'zh-TW': '近海捕撈的鯖魚短程直達超市，不但鮮美，更大幅降低長程冷鏈運送的碳足跡。',
          ko: '근해 고등어는 지역 유통과 직결되어 식품 마일리지가 극히 낮고 신선도가 뛰어납니다.',
        },
        actionAdvice: {
          ja: '今だけの生チルドサバを選ぶことで、冷凍輸入魚のエネルギー消費を抑えられます。',
          en: 'Choosing fresh domestic chilled mackerel over imported frozen alternatives conserves supply chain energy.',
          'zh-CN': '在时令季节优先选购当地生鲜冰鲜鲭鱼，有助减少跨国冷冻进口带来的额外能耗。',
          'zh-TW': '在當季優先選購本地生鮮冰鮮鯖魚，能減少遠洋冷凍進口的過度能耗。',
          ko: '제철 국내산 생고등어를 선택하는 것으로 원거리 냉동 수입 어종의 탄소 발생을 줄일 수 있습니다.',
        },
      },
      flavorProfile: {
        ja: '濃厚な旨みとジューシーな脂',
        en: 'Bold umami and succulent savory oils',
        'zh-CN': '鲜醇浓厚、脂汁饱满',
        'zh-TW': '濃郁鮮美、脂香多汁',
        ko: '진한 감칠맛과 쥬시한 고소함',
      },
    },
    {
      id: 'suzuki',
      name: {
        ja: 'スズキ (江戸前)',
        en: 'Japanese Seabass (Edomae)',
        'zh-CN': '日本鲈鱼（江户前）',
        'zh-TW': '日本鱸魚（江戶前）',
        ko: '농어 (에도마에)',
      },
      kana: 'すずき',
      latinName: 'Lateolabrax japonicus',
      category: '白身魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '水揚げ絶好調↑',
        en: 'Landings Booming ↑',
        'zh-CN': '捕捞强劲高位 ↑',
        'zh-TW': '捕撈強勁大增 ↑',
        ko: '어획 최고조 ↑',
      },
      trendPercent: 28,
      weeklyVolumeTrend: [60, 72, 75, 88],
      dealRating: 3,
      estimatedPrice: {
        ja: '1柵 350円〜',
        en: '¥350~ per sashimi block',
        'zh-CN': '刺身块 350日元起',
        'zh-TW': '生魚片條 350日圓起',
        ko: '회 1팩 350엔~',
      },
      ports: [
        { ja: '船橋港', en: 'Funabashi', 'zh-CN': '船桥港', 'zh-TW': '船橋港', ko: '후나바시항' },
        { ja: '富津港', en: 'Futtsu', 'zh-CN': '富津港', 'zh-TW': '富津港', ko: '훗쓰항' },
      ],
      seasonText: {
        ja: '夏〜初冬（千葉県が全国1位）',
        en: 'Summer to Early Winter (#1 in Japan)',
        'zh-CN': '夏末至初冬（千叶县捕获量全日本第1）',
        'zh-TW': '夏末至初冬（千葉縣捕撈量全日本第1）',
        ko: '여름~초겨울 (지바현 일본 1위)',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '千葉特産・全国水揚No.1',
        en: 'Chiba Local Spec · Japan #1',
        'zh-CN': '千叶特产・全国捕获量第1',
        'zh-TW': '千葉特產・全日本捕撈第1',
        ko: '지바 특산 · 전국 어획 1위',
      },
      imageUrl: '/src/assets/images/fish_seabass_fillet_1794467837348.jpg',
      oceanReason: {
        ja: '東京湾（船橋・三番瀬周辺）は全国屈指のスズキの好漁場。豊富な内湾プランクトンで育った良型が底引きやまき網で大漁に入荷しています。',
        en: 'Tokyo Bay around Funabashi Sanbanze is a world-class seabass habitat, yielding healthy, plump fish on eco-friendly nets.',
        'zh-CN': '东京湾（船桥・三番濑海域）是全日本顶级的鲈鱼渔场，依靠丰富的内湾养分生长，连日大丰产。',
        'zh-TW': '東京灣（船橋・三番瀨海域）為全日本首屈一指的鱸魚棲地，受惠內灣養分生長，捕獲量驚人。',
        ko: '도쿄만 후나바시 산반제 주변은 일본 굴지의 농어 황금 어장으로, 내만의 풍부한 먹이로 자란 농어가 대량 입고 중입니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '東京湾奥の水質・水温が安定し湾内群の成長が良好',
          en: 'Stable inner-bay water temp supports robust growth',
          'zh-CN': '内湾水温水质稳定，鱼群生长态势极其良好',
          'zh-TW': '內灣水溫水質穩定，魚群發育極佳',
          ko: '도쿄만 안쪽의 수온과 수질이 안정되어 성장이 우수',
        },
        kuroshioCurrent: {
          ja: '湾内環境のため外洋の潮流変動を受けにくく供給が安定',
          en: 'Protected inner-bay environment insulates against open sea swells',
          'zh-CN': '内湾环境受外海激流波动小，供应极为充裕稳当',
          'zh-TW': '內灣環境受外海潮流影響小，供應平穩充足',
          ko: '내만 환경이라 외양 조류 변동을 덜 받아 공급 안정',
        },
        stockCondition: {
          ja: '東京湾・房総群は資源豊富でサステナブル漁業の代表格',
          en: 'Tokyo Bay stock is highly abundant and model for sustainability',
          'zh-CN': '东京湾鱼群储量丰沛，是可持续沿海渔业的典范',
          'zh-TW': '東京灣魚群儲量豐沛，為永續沿岸漁業的典範',
          ko: '도쿄만 자원이 풍부하여 지속 가능 어업의 모범',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '身の透明感', en: 'Translucency', 'zh-CN': '肉质透明感', 'zh-TW': '肉質透亮感', ko: '살의 투명도' },
          tip: {
            ja: '白身が濁っておらず、透明感とほんのりピンクの血合いがあるもの',
            en: 'Fillet should be crystal clear without cloudiness, with delicate pink lining.',
            'zh-CN': '白肉清亮剔透不浑浊，肌理边缘透着微粉色。',
            'zh-TW': '白肉清澈透亮不混濁，肌理邊緣微泛粉色者最新鮮。',
            ko: '흰살이 탁하지 않고 투명하며 은은한 핑크빛 혈합육이 있는 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: 'スズキのハーブバターソテー',
          en: 'Seabass Herb Butter Sauté',
          'zh-CN': '香草黄油嫩煎鲈鱼排',
          'zh-TW': '香草奶油嫩煎鱸魚排',
          ko: '농어 허브 버터 소테',
        },
        prepMinutes: 4,
        seasonings: [
          { ja: 'バター', en: 'Butter', 'zh-CN': '黄油/牛油', 'zh-TW': '奶油', ko: '버터' },
          { ja: '塩コショウ', en: 'Salt & Pepper', 'zh-CN': '盐与胡椒', 'zh-TW': '鹽和胡椒', ko: '소금 후추' },
          { ja: '醤油少々', en: 'Dash of Soy Sauce', 'zh-CN': '生抽少许', 'zh-TW': '薄鹽醬油少許', ko: '간장 약간' },
        ],
        cookingMethod: {
          ja: 'フライパンソテー',
          en: 'Pan-Sear Sauté',
          'zh-CN': '平底锅香煎',
          'zh-TW': '平底鍋香煎',
          ko: '프라이팬 소테',
        },
        instructions: {
          ja: '切り身に塩コショウをし、バターを熱したフライパンで両面をきつね色に焼く。仕上げの醤油数滴で香ばしさが引き立ちます！',
          en: 'Season fillet with salt & pepper, sear in melted butter until golden. Add a drop of soy sauce for a savory aroma!',
          'zh-CN': '鱼排撒盐与黑胡椒，入热黄油锅中煎至双面金黄。出锅前滴入少许酱油提香，高级餐厅风味轻松搞定！',
          'zh-TW': '魚排灑鹽與胡椒，熱融奶油入鍋煎至雙面金黃，起鍋前滴數滴醬油增添香氣！',
          ko: '생선 살에 소금 후추를 치고 버터를 녹인 팬에서 노릇하게 구운 뒤 간장 몇 방울로 풍미를 더합니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「地産地消・都市近郊型漁業」',
          en: 'SDGs 14.4 Peri-Urban Local Fishery',
          'zh-CN': 'SDGs 14.4 地产地消・都市近郊型渔业',
          'zh-TW': 'SDGs 14.4 地產地消・都會近郊型漁業',
          ko: 'SDGs 14.4 로컬 소비 · 도시 근교 어업',
        },
        message: {
          ja: '船橋のスズキはブランド認定魚。適正サイズのみを漁獲するルールを守りながら食卓へ届けています。',
          en: 'Funabashi Seabass is a certified eco-brand upholding strict catch size quotas to maintain healthy ecosystems.',
          'zh-CN': '船桥鲈鱼是严格遵守尺寸限制与配额管理的模范品牌海鲜，兼顾生态与品质。',
          'zh-TW': '船橋鱸魚為受官方認證的環保品牌，嚴格遵守體長規範，守護海洋又保證美味。',
          ko: '후나바시 농어는 적정 크기만 선별 어획하는 어업 규칙을 지키는 모범 인증 수산물입니다.',
        },
        actionAdvice: {
          ja: '地元東京湾の魚を選ぶことで、遠方空輸によるCO2を劇的に削減できます。',
          en: 'Sourcing fish right from Tokyo Bay slashes food-mile logistics emissions.',
          'zh-CN': '优先购买本湾海鲜，能够大幅减少由远途空运和长途冷链产生的温室气体。',
          'zh-TW': '就近選購本地內灣魚種，可大幅減少遠距離空運造成的碳排放。',
          ko: '도쿄만 농어를 구입하면 장거리 운송에 의한 탄소 발생을 크게 줄일 수 있습니다.',
        },
      },
      flavorProfile: {
        ja: 'クセのない淡白な旨みと上品な甘み',
        en: 'Clean, sweet delicate white-flesh flavor',
        'zh-CN': '毫无腥味、清甜甘美的高级白身鱼',
        'zh-TW': '無雜味、甘甜高雅的上乘白肉魚',
        ko: '비린내 없이 담백하고 은은한 단맛',
      },
    },
    {
      id: 'kuromaguro',
      name: {
        ja: 'クロマグロ (太平洋本マグロ)',
        en: 'Pacific Bluefin Tuna',
        'zh-CN': '太平洋蓝鳍金枪鱼（本鲔）',
        'zh-TW': '太平洋藍鰭黑鮪魚',
        ko: '참다랑어 (혼마구로)',
      },
      kana: 'くろまぐろ',
      latinName: 'Thunnus orientalis',
      category: '赤身魚',
      catchStatus: 'scarce',
      statusLabel: {
        ja: '厳格な漁獲枠管理・保護中',
        en: 'Quota Managed · Protected',
        'zh-CN': '配额管控・严格保护中',
        'zh-TW': '配額控管・嚴格保護中',
        ko: '엄격한 쿼터 관리 · 보호 중',
      },
      trendPercent: -48,
      weeklyVolumeTrend: [50, 40, 30, 20],
      dealRating: 1,
      estimatedPrice: {
        ja: '100g 780円〜1,200円',
        en: '¥780-1,200 / 100g',
        'zh-CN': '每100克 780〜1,200日元',
        'zh-TW': '每100克 780〜1,200日圓',
        ko: '100g당 780~1,200엔',
      },
      ports: [
        { ja: '銚子港', en: 'Choshi', 'zh-CN': '铫子港', 'zh-TW': '銚子港', ko: '조시항' },
        { ja: '勝浦港', en: 'Katsuura', 'zh-CN': '胜浦港', 'zh-TW': '勝浦港', ko: '가쓰우라항' },
      ],
      seasonText: {
        ja: '冬（寒マグロ）',
        en: 'Winter (Cold Season Tuna)',
        'zh-CN': '冬季（寒鲔）',
        'zh-TW': '冬季（寒鮪）',
        ko: '겨울 (제철 참치)',
      },
      isPeakSeason: false,
      highlightTag: {
        ja: '国際TAC枠・感謝していただく',
        en: 'International Quota · Cherish Every Bite',
        'zh-CN': '国际TAC配额・珍重品味',
        'zh-TW': '國際TAC配額・感恩享用',
        ko: '국제 TAC 쿼터 · 감사하는 마음으로 소비',
      },
      imageUrl: '/src/assets/images/fish_tuna_saku_1794467837664.jpg',
      oceanReason: {
        ja: '水産庁および国際機関（WCPFC）によって厳格な漁獲上限枠（TAC）が課されています。資源保護のため漁獲枠到達に伴い市場の入荷が制限されています。',
        en: 'Strict Total Allowable Catch (TAC) limits imposed by WCPFC and fisheries agencies restrict landing volumes to allow stock recovery.',
        'zh-CN': '国际渔业组织与日本水产厅执行严格的总允许捕捞量（TAC）限制，达到配额即停捕，市场供应受科学控制。',
        'zh-TW': '國際漁業組織與水產廳施行嚴格的總容許捕撈量（TAC）限制，達到限額即暫停捕撈，市場供量受科學管控。',
        ko: '국제기구(WCPFC)와 수산청에 의해 어획 할당량(TAC)이 엄격히 적용되어 자원 보호를 위해 어획량이 제한됩니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '回遊経路上の産卵場水温管理と稚魚保護を実施',
          en: 'Spawning ground monitoring and juvenile fish conservation active',
          'zh-CN': '严密监测产卵海域水温并保护幼鱼回游',
          'zh-TW': '嚴密監控產卵水域並保護幼魚回游',
          ko: '산란장 수온 감시 및 치어 보호 조치 시행 중',
        },
        kuroshioCurrent: {
          ja: '外洋を高速回遊するため海洋環境監視が進行中',
          en: 'Fast migration through deep currents monitored internationally',
          'zh-CN': '由于其高速回游习性，多国正联合实施生态监测',
          'zh-TW': '因其高速回游習性，多國正聯合進行生態監控',
          ko: '대양을 고속 회유하므로 국제적 해양 환경 감시 진행 중',
        },
        stockCondition: {
          ja: '厳格な保護により回復傾向だが依然として管理継続が必要',
          en: 'Signs of stock recovery evident, but disciplined management remains vital',
          'zh-CN': '严格保护措施初见成效，但仍需长期坚持科学限捕',
          'zh-TW': '嚴格保護初見成效，但仍需維持長期科學限額管理',
          ko: '엄격한 보호 조치로 회복세이나 지속적 자원 관리가 필수적',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '赤身の深み', en: 'Ruby Depth', 'zh-CN': '红肉色泽', 'zh-TW': '紅牛肉感色澤', ko: '붉은살의 깊이' },
          tip: {
            ja: '濁りのない深紅のグラデーションで、表面が乾いて黒ずんでいないもの',
            en: 'Glossy deep ruby red without dry discoloration or oxidation.',
            'zh-CN': '肉质呈清澄的深红宝石色，表面润泽无发黑干涸。',
            'zh-TW': '肉質呈剔透的紅寶石光澤，無發黑或風乾氧化現象。',
            ko: '탁하지 않은 깊고 맑은 루비빛이며 표면이 마르거나 검게 변하지 않은 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: '本マグロの贅沢漬け丼',
          en: 'Gourmet Marinated Bluefin Tuna Rice Bowl',
          'zh-CN': '顶级蓝鳍金枪鱼酱油腌渍盖饭',
          'zh-TW': '頂級藍鰭黑鮪醬汁醃漬蓋飯',
          ko: '참다랑어 즈케동(절임 덮밥)',
        },
        prepMinutes: 3,
        seasonings: [
          { ja: '醤油大さじ1', en: '1 tbsp Soy Sauce', 'zh-CN': '生抽1勺', 'zh-TW': '醬油1大匙', ko: '간장 1큰술' },
          { ja: 'みりん小さじ1', en: '1 tsp Mirin', 'zh-CN': '味醂1小勺', 'zh-TW': '味醂1茶匙', ko: '미림 1작은술' },
          { ja: 'わさび', en: 'Wasabi', 'zh-CN': '山葵', 'zh-TW': '山葵/芥末', ko: '와사비' },
        ],
        cookingMethod: {
          ja: '醤油漬け（マリネ）',
          en: 'Soy Sauce Marinade',
          'zh-CN': '酱油浸渍',
          'zh-TW': '醬油醃漬',
          ko: '간장 절임',
        },
        instructions: {
          ja: '醤油とみりんを煮切り冷まし、切ったマグロを5分浸して熱々ご飯に乗せるだけ。一滴の旨みも逃しません。',
          en: 'Boil and cool soy & mirin, steep tuna slices for 5 mins, serve over steaming rice. Unmatched richness!',
          'zh-CN': '生抽与味醂煮沸放凉，将切片金枪鱼浸渍5分钟后铺在热米饭上，醇厚脂香与酱香在口中迸发！',
          'zh-TW': '醬油與味醂煮沸放涼，將鮪魚切片浸泡5分鐘鋪在熱白飯上，每一口都是珍饈！',
          ko: '간장과 미림을 살짝 끓여 식힌 뒤 참치를 5분간 재워 따뜻한 밥 위에 얹습니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「乱獲撲滅と海洋生物多様性の維持」',
          en: 'SDGs 14.4 Stop Overfishing & Maintain Biodiversity',
          'zh-CN': 'SDGs 14.4 遏制过度捕捞与生物多样性',
          'zh-TW': 'SDGs 14.4 杜絕過度捕撈與守護生物多樣性',
          ko: 'SDGs 14.4 남획 근절과 해양 생물 다양성',
        },
        message: {
          ja: '生態系の頂点にいるクロマグロを守ることは海洋全体を守る鍵。消費者が適量を残さず食べることが大切です。',
          en: 'Apex predators like tuna balance the entire food web. Consuming small, cherished portions avoids wasteful depletion.',
          'zh-CN': '保护顶级掠食者金枪鱼是守护海洋生态的枢纽，消费者“珍惜适量、不留浪费”是最后的守门人。',
          'zh-TW': '保護頂級獵食者黑鮪魚是維持海洋平衡的樞紐，消費者「珍視適量、零剩食」至關重要。',
          ko: '최상위 포식자인 참다랑어를 보호하는 것은 바다 생태계 전체의 균형을 지키는 핵심입니다.',
        },
        actionAdvice: {
          ja: '特別な日のご馳走として大切に味わい、普段の食卓は地元で豊漁の青魚を中心にするのが理想です。',
          en: 'Reserve tuna for festive occasions; rely on abundant local forage fish for everyday meals.',
          'zh-CN': '平时多食用当地盛产的丰收鱼种，将金枪鱼留作重要节日感恩享用，形成良性循环。',
          'zh-TW': '平時多享用在地盛產的平價魚類，將鮪魚留待重要節慶細細品味，落實永續循環。',
          ko: '특별한 날의 별미로 소중히 즐기고, 평상시 식단은 로컬 풍어 어종 위주로 구성하는 것이 이상적입니다.',
        },
      },
      flavorProfile: {
        ja: '濃厚なコクとほのかな酸味、とろける上質な脂',
        en: 'Decadent rich depth, subtle tang, and luscious silky fat',
        'zh-CN': '浓郁醇厚、微带宜人果酸与融化油脂',
        'zh-TW': '深邃濃郁、微帶怡人果酸與入口即化的油脂',
        ko: '진한 풍미와 은은한 산미, 입에서 녹는 극상의 기름기',
      },
    },
  ],
  hokkaido: [
    {
      id: 'akisake',
      name: {
        ja: '秋サケ (白鮭)',
        en: 'Chum Salmon (Autumn Salmon)',
        'zh-CN': '秋鲑（大马哈鱼）',
        'zh-TW': '秋鮭（大馬哈魚）',
        ko: '가을 연어 (백연어)',
      },
      kana: 'あきさけ',
      latinName: 'Oncorhynchus keta',
      category: '赤身魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '水揚げ盛期・豊漁！',
        en: 'Peak Landings · Surplus!',
        'zh-CN': '捕捞盛期・大丰收！',
        'zh-TW': '捕撈盛期・大豐產！',
        ko: '어획 전성기 · 풍어!',
      },
      trendPercent: 46,
      weeklyVolumeTrend: [50, 70, 88, 98],
      dealRating: 3,
      estimatedPrice: {
        ja: '切り身2切 298円〜',
        en: '¥298~ for 2 fillets',
        'zh-CN': '2片装 298日元起',
        'zh-TW': '2片裝 298日圓起',
        ko: '2토막 298엔~',
      },
      ports: [
        { ja: '函館港', en: 'Hakodate', 'zh-CN': '函馆港', 'zh-TW': '函館港', ko: '하코다테항' },
        { ja: '釧路港', en: 'Kushiro', 'zh-CN': '钏路港', 'zh-TW': '釧路港', ko: '구시로항' },
      ],
      seasonText: {
        ja: '秋（9月〜11月）',
        en: 'Autumn (Sep-Nov)',
        'zh-CN': '秋季（9月〜11月）',
        'zh-TW': '秋季（9月〜11月）',
        ko: '가을 (9월~11월)',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '北の秋の味覚・栄養満点',
        en: 'Northern Autumn Bounty',
        'zh-CN': '北国秋日滋味・营养满分',
        'zh-TW': '北國秋日美味・營養滿分',
        ko: '북녘 가을의 맛 · 영양 만점',
      },
      imageUrl: '/src/assets/images/fish_mackerel_fresh_1794467837590.jpg',
      oceanReason: {
        ja: 'ベーリング海で成育した秋サケが産卵のため北海道・三陸の母川へ大回遊。沿岸定置網でまとまった水揚げが続いています。',
        en: 'Salmon matured in the Bering Sea return in massive numbers to Hokkaido rivers, caught in eco-friendly coastal trap nets.',
        'zh-CN': '在白令海长成的秋鲑大举洄游至北海道与三陆各河流产卵，近海定置网捕捞喜报频传。',
        'zh-TW': '在白令海發育成熟的秋鮭大批洄游至北海道與三陸河流產卵，定置網捕撈喜迎大豐產。',
        ko: '베링해에서 자란 가을 연어가 산란을 위해 회유하여 연안 정치망에 대량으로 어획되고 있습니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '親潮系冷水が順調に南下しサケの遡上ルートに合致',
          en: 'Cold Oyashio currents guide salmon southward into coastal nets',
          'zh-CN': '亲潮冷水南下顺畅，利于鲑鱼群靠岸',
          'zh-TW': '親潮冷水南下順利，引導鮭魚群游向沿岸',
          ko: '오야시오 한류가 남하하여 연어의 소상 루트와 최적 일치',
        },
        kuroshioCurrent: {
          ja: '暖水塊の勢力が弱まり沿岸回遊が活発化',
          en: 'Weakened warm eddies allow salmon to approach coastline smoothly',
          'zh-CN': '暖水团退去使鲑鱼能够畅通无阻地靠近沿海',
          'zh-TW': '暖水團減弱讓鮭魚得以順暢靠岸',
          ko: '난수괴 세력이 약화되어 연안 회유가 활발해짐',
        },
        stockCondition: {
          ja: 'ふ化放流事業と管理により安定した回帰を維持',
          en: 'Hatchery conservation ensures steady, sustainable returns',
          'zh-CN': '人工孵化与科学管理确保了稳定的生态回游',
          'zh-TW': '人工孵化放流與管理維持了穩定的自然回游',
          ko: '부화 방류 사업과 철저한 관리로 안정된 회귀 유지',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '身の赤橙色', en: 'Coral Flesh', 'zh-CN': '橙红肉色', 'zh-TW': '橙紅肉色', ko: '주홍빛 육질' },
          tip: {
            ja: '鮮やかなサーモンピンクで身に弾力があるもの',
            en: 'Vibrant salmon pink with elastic bounce when gently pressed.',
            'zh-CN': '呈明亮的橘粉红色，富有弹性不松散。',
            'zh-TW': '呈鮮亮橘粉色，富含彈性不軟爛。',
            ko: '선명한 연어 핑크빛이며 살에 탄력이 있는 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: '秋サケの北海道風ちゃんちゃん焼き',
          en: 'Hokkaido Style Miso Butter Salmon (Chan-Chan Yaki)',
          'zh-CN': '北海道风味味增黄油烤秋鲑',
          'zh-TW': '北海道風味味噌奶油烤秋鮭',
          ko: '홋카이도풍 찬찬야키 (된장 버터 연어구이)',
        },
        prepMinutes: 5,
        seasonings: [
          { ja: '味噌大さじ1', en: '1 tbsp Miso', 'zh-CN': '日式味噌1勺', 'zh-TW': '日式味噌1大匙', ko: '된장 1큰술' },
          { ja: 'バター', en: 'Butter', 'zh-CN': '黄油', 'zh-TW': '奶油', ko: '버터' },
          { ja: 'キャベツ・玉ねぎ', en: 'Cabbage & Onion', 'zh-CN': '包菜与洋葱', 'zh-TW': '高麗菜與洋蔥', ko: '양배추, 양파' },
        ],
        cookingMethod: {
          ja: 'フライパン蒸し焼き',
          en: 'Pan-steamed with Veggies',
          'zh-CN': '平底锅加盖蔬菜焖烤',
          'zh-TW': '平底鍋加蓋燜煎',
          ko: '프라이팬 야채 찜구이',
        },
        instructions: {
          ja: 'フライパンに野菜を敷きサケを乗せ、味噌＋みりん＋酒を回しかけてバターを乗せ、蓋をして中火で5分蒸すだけ！',
          en: 'Layer veggies, top with salmon, drizzle miso, mirin & sake, add butter, cover and steam 5 minutes.',
          'zh-CN': '平底锅铺上卷心菜洋葱，放入鱼排，淋上味增与料酒，放一块黄油加盖焖5分钟，香气四溢！',
          'zh-TW': '平底鍋鋪高麗菜與洋蔥，放上鮭魚，淋味噌調醬與奶油，加蓋燜煮5分鐘即成！',
          ko: '팬에 양배추와 양파를 깔고 연어를 얹은 뒤 된장 소스와 버터를 올려 뚜껑을 덮고 5분간 찝니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「定置網による持続可能サケ漁業」',
          en: 'SDGs 14.4 Sustainable Trap-net Salmon Fishery',
          'zh-CN': 'SDGs 14.4 定置网可持续鲑鱼渔业',
          'zh-TW': 'SDGs 14.4 定置網永續鮭魚漁業',
          ko: 'SDGs 14.4 정착망 방식의 친환경 연어 어업',
        },
        message: {
          ja: '北海道の秋サケ漁は海底を荒らさない定置網で行われ、海洋環境への負荷が極めて少ない伝統漁法です。',
          en: 'Hokkaido salmon fishing uses passive trap nets that do not damage the seafloor, representing a gentle, sustainable tradition.',
          'zh-CN': '北海道秋鲑渔业采用不伤海底的定置网，对生态环境造成的负荷极低。',
          'zh-TW': '北海道秋鮭漁業使用不破壞海底的定置網，為對海洋環境最友善的傳統漁法。',
          ko: '홋카이도의 연어잡이는 해저를 훼손하지 않는 친환경 정착망으로 이뤄져 해양 생태계 부담이 적습니다.',
        },
        actionAdvice: {
          ja: '旬の時期に天然秋サケをまるごと美味しくいただくことが地域水産業の継続を助けます。',
          en: 'Enjoying seasonal wild salmon supports regional coastal livelihoods.',
          'zh-CN': '在时令当季品尝纯天然野生产秋鲑，是支持北部沿海渔业社群的最佳行动。',
          'zh-TW': '在產季大啖野生天然秋鮭，是支持北部沿岸漁業經濟的最佳方式。',
          ko: '제철 자연산 가을 연어를 맛있게 소비하는 것이 북부 연안 어민 경제에 큰 힘이 됩니다.',
        },
      },
      flavorProfile: {
        ja: 'さっぱりした上品な脂と力強い鮭の旨み',
        en: 'Clean, elegant natural oils with robust wild salmon flavor',
        'zh-CN': '清爽宜人的天然油脂与浓郁野性风味',
        'zh-TW': '清爽高雅的天然油脂與濃郁野生風味',
        ko: '담백하고 깔끔한 지방과 깊은 연어 본연의 풍미',
      },
    },
  ],
  west: [
    {
      id: 'madai',
      name: {
        ja: '天然マダイ',
        en: 'Wild Red Seabream',
        'zh-CN': '天然真鲷',
        'zh-TW': '天然真鯛',
        ko: '자연산 참돔',
      },
      kana: 'まだい',
      latinName: 'Pagrus major',
      category: '白身魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '瀬戸内水揚好調・お値打ち',
        en: 'Seto Catch Strong · Great Value',
        'zh-CN': '濑户内捕捞喜人・性价比高',
        'zh-TW': '瀨戶內捕撈豐碩・超值首選',
        ko: '세토내해 어획 호조 · 알뜰 특가',
      },
      trendPercent: 26,
      weeklyVolumeTrend: [58, 65, 75, 84],
      dealRating: 3,
      estimatedPrice: {
        ja: '切り身2切 380円〜',
        en: '¥380~ for 2 fillets',
        'zh-CN': '2片装 380日元起',
        'zh-TW': '2片裝 380日圓起',
        ko: '2토막 380엔~',
      },
      ports: [
        { ja: '明石港', en: 'Akashi', 'zh-CN': '明石港', 'zh-TW': '明石港', ko: '아카시항' },
        { ja: '長崎港', en: 'Nagasaki', 'zh-CN': '长崎港', 'zh-TW': '長崎港', ko: '나가사키항' },
      ],
      seasonText: {
        ja: '春（桜鯛）／秋〜冬（紅葉鯛）',
        en: 'Spring (Sakura-dai) / Autumn-Winter (Momiji-dai)',
        'zh-CN': '春季（樱鲷）／秋冬（红叶鲷）',
        'zh-TW': '春季（櫻鯛）／秋冬（紅葉鯛）',
        ko: '봄 (사쿠라다이) / 가을~겨울 (모미지다이)',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '激流育ちの引き締まった身',
        en: 'Firm Muscular Texture from Fast Currents',
        'zh-CN': '急流培育的紧实极佳肉质',
        'zh-TW': '急流培育的緊緻絕佳肉質',
        ko: '거센 조류가 키운 쫄깃한 식감',
      },
      imageUrl: '/src/assets/images/fish_seabass_fillet_1794467837348.jpg',
      oceanReason: {
        ja: '明石海峡や鳴門海峡の激しい潮流を泳ぎ抜いた真鯛が、エビやカニを豊富に食べて良質な肉質に仕上がっています。一本釣りや底延縄で安定して揚がっています。',
        en: 'Seabream swimming through the turbulent Akashi Strait feed on wild shrimp and crabs, resulting in muscular, sweet white flesh.',
        'zh-CN': '在明石海峡等激流中游动的天然真鲷以小虾蟹为食，肉质紧实脆甜，一本钓稳定进港。',
        'zh-TW': '在明石海峽急流中游動的真鯛以蝦蟹為食，肉質緊緻清甜，一本釣持續穩定靠岸。',
        ko: '아카시 해협의 거센 조류를 헤엄친 참돔이 갑각류를 먹고 자라 살이 단단하고 단맛이 뛰어납니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '瀬戸内海の適水温帯が続き鯛の餌場が活発',
          en: 'Ideal water temps sustain active feeding grounds',
          'zh-CN': '内海水温适宜，真鲷觅食活跃生长良好',
          'zh-TW': '內海水溫適宜，真鯛覓食活躍生長極佳',
          ko: '세토내해의 적정 수온으로 활발한 먹이 활동 지속',
        },
        kuroshioCurrent: {
          ja: '対馬暖流・黒潮分流の流入により沿岸栄養が豊富',
          en: 'Tsushima Warm Current branch supplies abundant nutrients',
          'zh-CN': '对马暖流支流带来充沛养分',
          'zh-TW': '對馬暖流支流注入豐沛海洋養分',
          ko: '쓰시마 난류의 유입으로 연안 영양분 풍부',
        },
        stockCondition: {
          ja: '種苗放流と漁獲サイズ規制の成果で資源回復',
          en: 'Stock replenishment and size regulation maintain healthy biomass',
          'zh-CN': '人工增殖放流与严格尺寸管控让资源稳健恢复',
          'zh-TW': '增殖放流與嚴格尺寸控管讓海洋資源穩健恢復',
          ko: '치어 방류와 어획 크기 규제로 자원 상태 매우 양호',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '鮮やかな桜色', en: 'Vivid Pink Color', 'zh-CN': '粉红鳞光', 'zh-TW': '粉紅鱗光', ko: '선명한 붉은빛' },
          tip: {
            ja: '体全体が明るいピンク色で、青い斑点が宝石のように光っているもの',
            en: 'Bright cherry blossom pink with iridescent turquoise spots gleaming.',
            'zh-CN': '鱼身呈明媚淡粉色，蓝绿色荧光斑点宛如宝石。',
            'zh-TW': '魚身呈鮮亮櫻花粉，藍色斑點如寶石般閃耀。',
            ko: '밝은 핑크빛에 파란 반점이 보석처럼 반짝이는 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: '真鯛の香ばし鯛めし（炊飯器3分準備）',
          en: 'Aromatic Seabream Rice (3-Min Prep in Rice Cooker)',
          'zh-CN': '香醇鲷鱼饭（电饭煲3分搞定）',
          'zh-TW': '香醇鯛魚炊飯（電鍋3分鐘備料）',
          ko: '참돔 솥밥 (전기밥솥 3분 준비)',
        },
        prepMinutes: 3,
        seasonings: [
          { ja: '薄口醤油大さじ1', en: '1 tbsp Light Soy Sauce', 'zh-CN': '淡口酱油1勺', 'zh-TW': '薄鹽醬油1大匙', ko: '국간장 1큰술' },
          { ja: '昆布茶小さじ1', en: '1 tsp Kelp Tea Powder (Kombucha)', 'zh-CN': '昆布茶粉或昆布1片', 'zh-TW': '昆布茶粉或高湯塊', ko: '다시마 분말/다시마 1조각' },
          { ja: '生姜千切り', en: 'Julienned Ginger', 'zh-CN': '生姜丝', 'zh-TW': '薑絲', ko: '생강채' },
        ],
        cookingMethod: {
          ja: '炊飯器で炊くだけ',
          en: 'Rice Cooker One-Pot',
          'zh-CN': '电饭煲一锅蒸煮',
          'zh-TW': '電鍋一鍵蒸煮',
          ko: '전기밥솥 취사',
        },
        instructions: {
          ja: 'お米2合に調味料と水、生姜を入れ、皮目を香ばしく焼いた鯛の切り身を乗せて通常炊飯するだけ。料亭の味が手軽に楽しめます！',
          en: 'Place seared bream, seasonings, water, and ginger over 2 cups of rice, and cook as normal in your rice cooker.',
          'zh-CN': '大米洗净加入调料生姜水，铺上两面微煎的真鲷鱼块，按正常煮饭键即可！',
          'zh-TW': '洗淨白米加入調味與薑絲，放上微煎過的真鯛魚片，按一般煮飯鍵即可享用頂級日式炊飯！',
          ko: '쌀 위에 물과 양념, 생강을 넣고 살짝 구운 참돔을 얹어 평소대로 취사 버튼을 누릅니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「一本釣りとサイズ管理によるエシカル漁業」',
          en: 'SDGs 14.4 Ethical Single-Hook Angling',
          'zh-CN': 'SDGs 14.4 一本钓与尺寸保护伦理渔业',
          'zh-TW': 'SDGs 14.4 一本釣與尺寸管控環保漁業',
          ko: 'SDGs 14.4 낚시 채낚기 어법을 통한 생태 보호',
        },
        message: {
          ja: '瀬戸内の一本釣りは小魚を傷つけず幼魚を逃す伝統のエシカル漁法です。',
          en: 'Traditional pole-and-line fishing minimizes bycatch and releases juvenile fish to sustain ocean biomass.',
          'zh-CN': '濑户内海的一本钓能够释放幼鱼、零拖网伤底，是最符合现代伦理的典范渔法。',
          'zh-TW': '瀨戶內海的一本釣不傷海底幼魚，為兼顧生態與生計的永續代表。',
          ko: '세토내해 낚시 어업은 어린 물고기를 살려주는 전통적인 친환경 어법입니다.',
        },
        actionAdvice: {
          ja: 'スーパーで「天然」の表示を見かけたら、海の回復を祝福して美味しくいただきましょう。',
          en: 'Spotting "Wild Catch" marks a victory for sustainable ocean recovery.',
          'zh-CN': '看到超市标有“天然”真鲷时，不妨选购作为支持健康水产的一票。',
          'zh-TW': '在超市看到「天然」標示時，正是以消費支持在地健康海洋的最佳時刻。',
          ko: '자연산 참돔을 선택하는 것은 로컬 어업의 지속 가능성을 지키는 행동입니다.',
        },
      },
      flavorProfile: {
        ja: '上品で澄んだ甘みとコリコリした歯ごたえ',
        en: 'Refined sweet clarity with satisfying resilient snap',
        'zh-CN': '甘润澄净、紧实脆嫩的顶级口感',
        'zh-TW': '甘美清甜、爽脆緊緻的頂級口感',
        ko: '고급스럽고 맑은 단맛과 쫄깃하고 탄력 있는 식감',
      },
    },
  ],
  hokuriku: [
    {
      id: 'kanburi',
      name: {
        ja: '寒ブリ (氷見・富山湾)',
        en: 'Winter Amberjack (Himi Buri)',
        'zh-CN': '寒鰤鱼（冰见・富山湾）',
        'zh-TW': '寒鰤魚（冰見・富山灣）',
        ko: '겨울 방어 (히미 부리)',
      },
      kana: 'かんぶり',
      latinName: 'Seriola quinqueradiata',
      category: '青魚',
      catchStatus: 'surplus',
      statusLabel: {
        ja: '富山湾初獲れ・旬の極み！',
        en: 'First Catch of Winter · Peak Flavor!',
        'zh-CN': '富山湾初开捕・当季极品！',
        'zh-TW': '富山灣首批捕獲・極品當令！',
        ko: '도야마만 첫 어획 · 제철의 극치!',
      },
      trendPercent: 38,
      weeklyVolumeTrend: [45, 60, 80, 92],
      dealRating: 3,
      estimatedPrice: {
        ja: '切り身2切 450円〜',
        en: '¥450~ for 2 thick fillets',
        'zh-CN': '2厚切 450日元起',
        'zh-TW': '2片厚切 450日圓起',
        ko: '2토막 450엔~',
      },
      ports: [
        { ja: '氷見港', en: 'Himi', 'zh-CN': '冰见港', 'zh-TW': '冰見港', ko: '히미항' },
        { ja: '金沢港', en: 'Kanazawa', 'zh-CN': '金泽港', 'zh-TW': '金澤港', ko: '가나자와항' },
      ],
      seasonText: {
        ja: '初冬〜真冬（11月〜2月）',
        en: 'Winter (Nov-Feb)',
        'zh-CN': '初冬至深冬（11月〜2月）',
        'zh-TW': '初冬至深冬（11月〜2月）',
        ko: '초겨울~한겨울 (11월~2월)',
      },
      isPeakSeason: true,
      highlightTag: {
        ja: '日本海の冬の王様・極上脂',
        en: 'King of Japan Sea Winter',
        'zh-CN': '日本海冬日之王・顶级脂香',
        'zh-TW': '日本海冬之王者・極品脂香',
        ko: '겨울 바다의 왕 · 극상의 기름기',
      },
      imageUrl: '/src/assets/images/fish_mackerel_fresh_1794467837590.jpg',
      oceanReason: {
        ja: '日本海を南下する丸々と太ったブリが、富山湾特有のすり鉢状の海底地形（海底谷）に迷い込み、400年の伝統を誇る氷見の越中式定置網で鮮度抜群のまま水揚げされます。',
        en: 'Fat-laden winter amberjack migrating south enter the deep canyon of Toyama Bay and are gently caught in Himi\'s 400-year-old traditional trap nets.',
        'zh-CN': '南下越冬的肥硕鰤鱼游入富山湾独特的深海峡谷，被拥有400年传统的越中式定置网鲜活捕获。',
        'zh-TW': '南下越冬的肥美鰤魚游入富山灣深邃峽谷，藉由400年悠久歷史的定置網鮮活起獲。',
        ko: '일본해를 남하하는 방어가 도야마만의 협곡 지형으로 모여들어 400년 전통의 친환경 정치망으로 신선하게 어획됩니다.',
      },
      marineConditions: {
        waterTempNote: {
          ja: '日本海固有冷水塊の冷却に伴い魚体が急速に脂を蓄える',
          en: 'Rapid cooling in the Sea of Japan stimulates thick fat layering',
          'zh-CN': '深层冷水降温促使鱼身快速积聚丰厚健康脂肪',
          'zh-TW': '深層冷水降溫促使魚身迅速積聚香醇健康脂肪',
          ko: '동해 고유 냉수괴의 영향으로 급속히 지방을 축적',
        },
        kuroshioCurrent: {
          ja: '対馬海流の沿岸分流に乗り富山湾奥へ誘引',
          en: 'Coastal branch of Tsushima Current sweeps schools into the bay',
          'zh-CN': '对马海流沿岸支流将鱼群顺畅引导至海湾深处',
          'zh-TW': '對馬海流沿岸支流將魚群引導至海灣深處',
          ko: '쓰시마 해류의 연안 분류를 타고 만 안쪽으로 유입',
        },
        stockCondition: {
          ja: '日本のブリ資源は高位安定で持続可能性極めて高い',
          en: 'Japanese amberjack stocks are at a high, robust level',
          'zh-CN': '日本近海鰤鱼资源整体处于高位稳定，可持续性极佳',
          'zh-TW': '日本近海鰤魚資源整體處於高位穩定，永續評級優異',
          ko: '일본 방어 자원은 높은 수준으로 매우 안정적',
        },
      },
      freshnessCheckpoints: [
        {
          part: { ja: '血合いの鮮度', en: 'Bloodline Luster', 'zh-CN': '血合肉鲜度', 'zh-TW': '暗紅血合肉質', ko: '혈합육의 색상' },
          tip: {
            ja: '血合いが茶色く酸化しておらず鮮やかな赤で、脂のサシが白い層として見えるもの',
            en: 'Bloodline is clear bright crimson, not browned; white marbling distinct.',
            'zh-CN': '血合部位呈鲜艳纯红未褐变，肉纹间有清晰白色雪花脂。',
            'zh-TW': '血合肉呈鮮亮櫻紅無褐變，肌理間夾帶雪白油脂紋路。',
            ko: '혈합육이 갈색으로 변하지 않고 선명한 붉은색이며 흰 지방층이 뚜렷한 것',
          },
        },
      ],
      quickRecipe: {
        dishName: {
          ja: '極上！寒ブリのフライパン照り焼き',
          en: 'Prime Pan-Glazed Winter Buri Teriyaki',
          'zh-CN': '极品！平底锅照烧寒鰤鱼',
          'zh-TW': '極品！平底鍋照燒寒鰤魚',
          ko: '극상! 프라이팬 방어 데리야키',
        },
        prepMinutes: 4,
        seasonings: [
          { ja: '醤油大さじ1', en: '1 tbsp Soy Sauce', 'zh-CN': '生抽1勺', 'zh-TW': '醬油1大匙', ko: '간장 1큰술' },
          { ja: 'みりん大さじ1', en: '1 tbsp Mirin', 'zh-CN': '味醂1勺', 'zh-TW': '味醂1大匙', ko: '미림 1큰술' },
          { ja: '酒大さじ1', en: '1 tbsp Cooking Sake', 'zh-CN': '料酒1勺', 'zh-TW': '料理酒1大匙', ko: '청주 1큰술' },
          { ja: '砂糖小さじ1', en: '1 tsp Sugar', 'zh-CN': '白糖1小勺', 'zh-TW': '白糖1茶匙', ko: '설탕 1작은술' },
        ],
        cookingMethod: {
          ja: 'フライパン照り焼き',
          en: 'Pan-glazed Teriyaki',
          'zh-CN': '平底锅照烧浓煎',
          'zh-TW': '平底鍋濃煎照燒',
          ko: '프라이팬 조림',
        },
        instructions: {
          ja: '切り身を両面こんがり焼き、出た余分な脂をペーパーで拭き取り、調味料を加えて中火で煮詰めながらタレを絡めるだけ！',
          en: 'Sear both sides, wipe away excess fat with a paper towel, pour glaze and simmer until glossy.',
          'zh-CN': '双面煎至微焦，用厨房纸吸去析出的多余油脂，倒入照烧酱汁中火收汁，浓郁下饭！',
          'zh-TW': '雙面煎至金黃，用紙巾吸去多餘油脂，倒入調料中火收汁至濃稠發亮即可！',
          ko: '양면을 노릇하게 굽고 키친타월로 기름을 닦은 뒤 양념을 붓고 윤기 나게 졸입니다.',
        },
      },
      sdgsStory: {
        target: {
          ja: 'SDGs 14.4「400年の伝統・越中式定置網」',
          en: 'SDGs 14.4 400-Year Ancient Eco-Trap Net Tradition',
          'zh-CN': 'SDGs 14.4 拥有400年历史的越中式定置网',
          'zh-TW': 'SDGs 14.4 承襲400年的越中式定置網永續智慧',
          ko: 'SDGs 14.4 400년 전통의 친환경 에치추식 정치망',
        },
        message: {
          ja: '氷見の定置網は「待つ漁法」として世界から注目されるサステナブル漁業の原点。海底を一切傷つけません。',
          en: 'Himi\'s passive trap net waits for schools naturally, recognized globally as the ultimate gentle fishery.',
          'zh-CN': '冰见定置网是一种“静候鱼入”的被动友好型传统渔法，被誉为世界可持续捕捞的原点。',
          'zh-TW': '冰見定置網為被動靜候的友善漁法，不拖網不攪海底，被譽為全球永續漁業的原型。',
          ko: '히미의 정치망은 바다를 해치지 않고 기다리는 수동적 어법으로 세계적 친환경 모범입니다.',
        },
        actionAdvice: {
          ja: '旬の寒ブリを味わうことは、数百年受け継がれた日本の伝統漁村文化を次世代へ残す力になります。',
          en: 'Choosing winter buri honors and sustains centuries of traditional fishing heritage.',
          'zh-CN': '选尝时令寒鰤鱼，既饱口福，也是对数百年来人与海洋和谐共生智慧的投票支持。',
          'zh-TW': '享用當季寒鰤魚，便是對數百年來人海共榮傳統生態智慧的直接支持。',
          ko: '제철 방어를 소비하는 것은 대대로 이어진 전통 어업 문화를 계승하는 소중한 실천입니다.',
        },
      },
      flavorProfile: {
        ja: '舌の上でとろける濃厚な脂と重厚な旨み',
        en: 'Melt-in-mouth richness with deep, luxurious savoriness',
        'zh-CN': '如黄油般入口即化，脂香浓郁惊艳',
        'zh-TW': '如牛油般入口即化，甘美油香驚艷絕倫',
        ko: '혀끝에서 사르르 녹아내리는 극상의 감칠맛과 지방',
      },
    },
  ],
};

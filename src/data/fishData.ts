export interface QuickRecipe {
  dishName: string;
  prepMinutes: number;
  seasonings: string[];
  cookingMethod: string;
  instructions: string;
}

export interface FishStockData {
  id: string;
  name: string;
  kana: string;
  latinName: string;
  category: '青魚' | '白身魚' | '赤身魚' | '高級魚・底生魚';
  catchStatus: 'surplus' | 'stable' | 'scarce';
  statusLabel: string;
  trendPercent: number; // e.g. +48 for surplus, -35 for scarce
  weeklyVolumeTrend: number[]; // 4 weeks of trend index (0-100)
  dealRating: 1 | 2 | 3; // お買い得度 1-3星
  estimatedPrice: string;
  unit: string;
  ports: string[];
  seasonText: string;
  isPeakSeason: boolean;
  highlightTag: string;
  oceanReason: string;
  marineConditions: {
    waterTempNote: string;
    kuroshioCurrent: string;
    stockCondition: string;
  };
  freshnessCheckpoints: {
    part: string;
    tip: string;
  }[];
  quickRecipe: QuickRecipe;
  sdgsStory: {
    target: string;
    message: string;
    actionAdvice: string;
  };
  flavorProfile: string;
}

export const FISH_MARKET_DATA: FishStockData[] = [
  {
    id: 'maiwashi',
    name: 'マイワシ',
    kana: 'まいわし',
    latinName: 'Sardinops melanostictus',
    category: '青魚',
    catchStatus: 'surplus',
    statusLabel: '大豊漁・爆安！',
    trendPercent: 52,
    weeklyVolumeTrend: [65, 78, 92, 100],
    dealRating: 3,
    estimatedPrice: '1尾 68〜88円',
    unit: '1尾あたり (3〜4尾パック 250円前後)',
    ports: ['銚子港', '飯岡港', '波崎港'],
    seasonText: '初夏（入梅）〜初冬',
    isPeakSeason: true,
    highlightTag: '本日イチオシ・食べて応援！',
    oceanReason: '親潮系冷水と黒潮の潮境が銚子沖に形成され、良質なプランクトンが爆発的に発生。丸々と太った大群が沿岸近くまで南下しており、銚子港で連日記録的な水揚げが続いています。',
    marineConditions: {
      waterTempNote: '沿岸水温が例年より適温帯（16〜19℃）を維持し回遊が長期化',
      kuroshioCurrent: '黒潮が離岸気味で沿岸寄りに餌となるプランクトン帯が集中',
      stockCondition: '太平洋系群の資源量は高水準を維持中'
    },
    freshnessCheckpoints: [
      { part: '目と頭部', tip: '目が澄んで黒目がくっきりし、頭部が小さく見えるほど背中が盛り上がっているもの' },
      { part: '腹部（お腹）', tip: 'お腹がピンと張って銀色のウロコや皮の光沢が鮮やかなもの（破れ・変色がない）' },
      { part: 'パックの底', tip: '赤いドリップ（水分）がほとんど溜まっていないものを選ぶ' }
    ],
    quickRecipe: {
      dishName: 'イワシの3分フライパン生姜梅煮',
      prepMinutes: 3,
      seasonings: ['めんつゆ', '梅干し1個', '生姜チューブ', '酒'],
      cookingMethod: 'フライパン蒸し煮',
      instructions: '頭と内臓を取ったイワシをフライパンに並べ、めんつゆ＋酒＋生姜＋潰した梅干しを入れて蓋をし、中火で3分蒸し煮にするだけ。骨まで柔らかくDHA・EPAたっぷり！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「持続可能な水産資源」＆ 地産地消',
      message: '食物連鎖の低次層にいる小型浮魚（イワシ）を積極的に食べることは、大型魚への乱獲圧を減らし海洋生態系のバランス保全に直結します。',
      actionAdvice: '大豊漁で余ると飼料や肥料に回されてしまいます。食卓で美味しく食べることが地元漁師の収入支援と食品ロス削減の最短ルートです！'
    },
    flavorProfile: '脂のり抜群・ふわっと柔らかい身質'
  },
  {
    id: 'masaba',
    name: 'マサバ',
    kana: 'まさば',
    latinName: 'Scomber japonicus',
    category: '青魚',
    catchStatus: 'surplus',
    statusLabel: '豊漁・買い時！',
    trendPercent: 34,
    weeklyVolumeTrend: [55, 68, 80, 90],
    dealRating: 3,
    estimatedPrice: '1尾 198〜250円',
    unit: '1尾あたり（切り身 2切 280円前後）',
    ports: ['銚子港', '勝浦港'],
    seasonText: '秋〜真冬（秋サバ・寒サバ）',
    isPeakSeason: true,
    highlightTag: '脂のり絶頂・高コスパ',
    oceanReason: '北の海で栄養を蓄えたマサバが、越冬と産卵に向けて銚子沖・房総沖へ一気に南下中。魚体も400g以上の良型が揃い、市場価格が大幅に安定してお買い求めやすくなっています。',
    marineConditions: {
      waterTempNote: '水温低下に伴い沿岸回遊ルートが沿岸定置網や巻き網の好漁場に一致',
      kuroshioCurrent: '黒潮続流沿いに回遊群が順調に流入',
      stockCondition: '太平洋系群は中〜高位水準で資源健全'
    },
    freshnessCheckpoints: [
      { part: '背中の模様', tip: '背中の緑青色の唐草模様が鮮明で、全体に青黒いツヤがあるもの' },
      { part: '身の張り', tip: '指で押したように跳ね返す硬い弾力があり、胴体が丸く太いもの' },
      { part: 'エラの色', tip: 'エラぶたを開けて鮮やかな紅色（茶褐色に変色していない）なら極上' }
    ],
    quickRecipe: {
      dishName: 'サバの塩焼き すだち醤油',
      prepMinutes: 4,
      seasonings: ['粗塩', 'すだち/レモン', '大根おろし', '醤油'],
      cookingMethod: 'グリルまたはフライパン',
      instructions: '切り身の皮目に十字の切り目を入れ、塩をふって3分置く。クッキングシートを敷いたフライパンで皮目からパリッと焼くだけ。溢れる上質な脂が楽しめます。'
    },
    sdgsStory: {
      target: 'SDGs 14.4＆12.3「食品ロス半減」',
      message: '銚子港のサバはブランド魚として名高く、地元の加工場や鮮魚店と直結して運ばれるためフードマイレージが極小です。',
      actionAdvice: '旬の時期の冷凍サバではなく、今だけの「生のチルドサバ」を選ぶことで地元物流のCO2排出を抑えられます。'
    },
    flavorProfile: '濃厚な旨みとジューシーな脂'
  },
  {
    id: 'suzuki',
    name: 'スズキ (江戸前)',
    kana: 'すずき',
    latinName: 'Lateolabrax japonicus',
    category: '白身魚',
    catchStatus: 'surplus',
    statusLabel: '水揚げ絶好調↑',
    trendPercent: 28,
    weeklyVolumeTrend: [60, 72, 75, 88],
    dealRating: 3,
    estimatedPrice: '1柵 350円〜',
    unit: '刺身用1柵 / 切り身2切 320円前後',
    ports: ['船橋港', '富津港', '市川港'],
    seasonText: '夏〜初冬（千葉県が水揚げ全国1位！）',
    isPeakSeason: true,
    highlightTag: '千葉特産・全国水揚No.1',
    oceanReason: '東京湾（船橋・三番瀬周辺）は全国屈指のスズキの好漁場。豊かな内湾のプランクトンと小魚を食べて育った極上スズキが、底引き網やまき網で安定して大漁水揚げされています。',
    marineConditions: {
      waterTempNote: '東京湾奥の水質・水温が安定し湾内群の成長が良好',
      kuroshioCurrent: '湾内環境のため外洋の潮流変動を受けにくく供給が安定',
      stockCondition: '東京湾・房総群は資源豊富でサステナブル漁業の代表格'
    },
    freshnessCheckpoints: [
      { part: '身の透明感', tip: '切り身やサクの白身が濁っておらず、透明感とほんのりピンクの血合いがあるもの' },
      { part: '皮の光沢', tip: '皮付きの場合、銀黒のウロコ跡が輝き、ぬめりに透明感があるもの' },
      { part: '切り口の角', tip: 'サクの断面がだれず、ピンと角が立っているもの' }
    ],
    quickRecipe: {
      dishName: 'スズキのハーブバターソテー',
      prepMinutes: 4,
      seasonings: ['バター', '塩コショウ', 'ニンニクチューブ', '醤油少々'],
      cookingMethod: 'フライパンソテー',
      instructions: '切り身に塩コショウをふり、バターを熱したフライパンで両面をきつね色に焼く。最後に醤油を鍋肌から数滴垂らすだけでフレンチレストラン級の香りに！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「地産地消・都市近郊型漁業」',
      message: '千葉県の「船橋のスズキ」は千葉ブランド水産物に認定。東京湾の生態系を守りながら適正サイズのみを漁獲する持続可能モデルです。',
      actionAdvice: '地元・東京湾で獲れる白身魚をスーパーで選ぶことで、遠方からの長距離輸送トラックの温室効果ガスを削減できます。'
    },
    flavorProfile: 'クセのない淡白な旨みと上品な甘み'
  },
  {
    id: 'maaji',
    name: 'マアジ',
    kana: 'まあじ',
    latinName: 'Trachurus japonicus',
    category: '青魚',
    catchStatus: 'stable',
    statusLabel: '安定水揚・日常の味方',
    trendPercent: 6,
    weeklyVolumeTrend: [60, 62, 58, 64],
    dealRating: 2,
    estimatedPrice: '1尾 120〜150円',
    unit: '1尾あたり (刺身用・塩焼き用)',
    ports: ['勝浦港', '館山港', '鴨川港'],
    seasonText: '通年（特に初夏〜晩秋）',
    isPeakSeason: false,
    highlightTag: '常備菜・万能魚',
    oceanReason: '外房の根付きアジ（黄金アジ）や回遊群が定置網にコンスタントに入網。漁獲量・価格ともに極めて安定しており、家計にもやさしい安心の定番魚です。',
    marineConditions: {
      waterTempNote: '浅場から水深50m付近に安定した群れが定着',
      kuroshioCurrent: '沿岸の反流（沿岸流）に乗って群れが外房沿いを移動',
      stockCondition: '適正漁獲量が維持され資源レベルは安定'
    },
    freshnessCheckpoints: [
      { part: 'ゼイゴ（側線）', tip: '尾びれの付け根にあるトゲトゲ（ゼイゴ）がピンと尖り硬いもの' },
      { part: '体色', tip: '背中が黄色味〜オリーブ色を帯び、お腹が黄金色に輝いているものが脂ノリ最高' },
      { part: '全体のハリ', tip: '頭を持った時に尾までピンと水平に保てるもの' }
    ],
    quickRecipe: {
      dishName: '房総名物！アジの即席なめろう',
      prepMinutes: 3,
      seasonings: ['味噌小さじ1', '大葉2枚', '刻み生姜', '長ネギ少々'],
      cookingMethod: '包丁で叩くだけ',
      instructions: 'アジの刺身（または三枚おろし）を細かく切り、味噌・生姜・大葉・ネギと一緒にまな板の上で包丁でトントン粘りが出るまで叩く。ご飯にも晩酌にも最高！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「定置網による混獲防止」',
      message: '外房の定置網漁は、海底を傷つけず魚が自然に入ってくるのを待つ受動的でエコな漁法です。',
      actionAdvice: '丸魚で買ってアラ（骨・頭）も潮汁に使うことで、一匹まるごと無駄にしないゼロウェイスト料理ができます。'
    },
    flavorProfile: '万人受けするバランス良い旨みと香り'
  },
  {
    id: 'katsuo',
    name: 'カツオ (戻り鰹)',
    kana: 'かつお',
    latinName: 'Katsuwonus pelamis',
    category: '赤身魚',
    catchStatus: 'stable',
    statusLabel: '勝浦水揚・旬の味覚',
    trendPercent: -4,
    weeklyVolumeTrend: [75, 70, 68, 66],
    dealRating: 2,
    estimatedPrice: '100g 198円〜',
    unit: 'タタキ1柵 398円〜480円',
    ports: ['勝浦港', '銚子港'],
    seasonText: '春（初鰹）／秋（戻り鰹）',
    isPeakSeason: true,
    highlightTag: '一本釣り・勝浦名物',
    oceanReason: '三陸沖から南下してくる「戻り鰹」が勝浦港に水揚げ中。勝浦の一本釣り漁船が鮮度抜群の「日戻り生カツオ」を届けており、冷凍とは段違いのもちもち食感です。',
    marineConditions: {
      waterTempNote: '三陸〜常磐沖の水温低下により南下スピードが速まっている',
      kuroshioCurrent: '黒潮の蛇行位置により接岸タイミングが日々変動',
      stockCondition: '中西部太平洋のカツオ資源は比較的健全'
    },
    freshnessCheckpoints: [
      { part: '赤身の色合い', tip: '黒ずんだ暗赤色ではなく、澄んだ鮮やかなワインレッド〜ルビー色のもの' },
      { part: '皮目の脂の層', tip: '皮と赤身の間に白い脂の筋（サシ）が見えるものが脂の乗った戻り鰹' },
      { part: 'ドリップの有無', tip: 'トレイに血混じりの水が出ていないパックを最優先で選ぶ' }
    ],
    quickRecipe: {
      dishName: 'カツオのガーリックぽん酢カルパッチョ',
      prepMinutes: 2,
      seasonings: ['ぽん酢', 'ごま油', 'おろしニンニク', '刻みネギ'],
      cookingMethod: '切って和えるだけ',
      instructions: '柵を厚めにスライスして皿に並べ、ぽん酢＋ごま油＋ニンニクを回しかけてネギを散らす。ごま油のコクが戻り鰹の濃厚な脂とベストマッチ！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「一本釣り漁法で混獲ゼロ」',
      message: '勝浦の一本釣りカツオは、海亀やイルカなどの他種を誤って獲ってしまう混獲（Bycatch）を起こさない、世界基準で最もエシカルな漁法です。',
      actionAdvice: '「一本釣り」「生カツオ」の表示を見かけたら、海洋環境に優しい選択として応援購入を！'
    },
    flavorProfile: '鉄分豊かで濃厚、トロのような脂のり'
  },
  {
    id: 'houbou',
    name: 'ホウボウ',
    kana: 'ほうぼう',
    latinName: 'Chelidonichthys spinosus',
    category: '白身魚',
    catchStatus: 'surplus',
    statusLabel: '隠れた豊漁↑ お値打ち',
    trendPercent: 24,
    weeklyVolumeTrend: [40, 50, 60, 68],
    dealRating: 3,
    estimatedPrice: '1尾 298〜380円',
    unit: '1尾あたり (上品な白身)',
    ports: ['南房総・乙浜港', '銚子港', '館山港'],
    seasonText: '冬〜春先（鍋に最高）',
    isPeakSeason: true,
    highlightTag: '高級魚並みの味・掘り出し物',
    oceanReason: '砂泥底に生息する底生魚で、房総半島南部の底延縄や定置網でまとまった水揚げ。見た目がユニーク（胸鰭が羽のように広がる）なため知名度控えめですが、タイをも凌ぐ極上白身でお買い得です。',
    marineConditions: {
      waterTempNote: '水深50〜100mの砂泥底水温が安定し生息域が広がる',
      kuroshioCurrent: '底潮の流れが穏やかで底延縄漁が好調',
      stockCondition: '未利用・低利用魚から価値が見直されつつある健全資源'
    },
    freshnessCheckpoints: [
      { part: '胸びれの色', tip: '鮮やかな緑色に青い斑点がある胸びれが乾いておらずツヤがあるもの' },
      { part: '体表の赤み', tip: '体全体の朱色が鮮やかで、白濁していないもの' },
      { part: 'お腹のかたさ', tip: '硬くしっかりして内臓がへたっていないもの' }
    ],
    quickRecipe: {
      dishName: 'ホウボウのフライパン洋風酒蒸し',
      prepMinutes: 5,
      seasonings: ['酒（または白ワイン）', 'オリーブオイル', 'ミニトマト3個', '塩コショウ'],
      cookingMethod: 'ワンパン蒸し焼き',
      instructions: '切り身（または筒切り）に塩コショウをし、オリーブオイルで皮目をサッと焼き、酒とミニトマトを加えて蓋をして4分。骨から極上の出汁が出てスープまで完食！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「未利用魚の活用で海の恵みを均等に」',
      message: '特定の人気魚（マグロやサケ）ばかりに消費が集中すると資源が枯渇します。ホウボウのような地元の多種多様な魚を食べる「魚種の多様性消費」が海の再生を支えます。',
      actionAdvice: '見た目で敬遠されがちな魚ほど、実は料理人の間では大人気。安くて美味しいスマートな買い物ができます。'
    },
    flavorProfile: 'プリッとした弾力と上品な旨み・皮目の甘み'
  },
  {
    id: 'tachiuo',
    name: 'タチウオ',
    kana: 'たちうお',
    latinName: 'Trichiurus lepturus',
    category: '白身魚',
    catchStatus: 'surplus',
    statusLabel: '東京湾で好調水揚↑',
    trendPercent: 20,
    weeklyVolumeTrend: [45, 55, 62, 70],
    dealRating: 3,
    estimatedPrice: '切り身2切 298円〜',
    unit: '切り身パック / 1本 580円前後',
    ports: ['富津港', '木更津港', '金谷港'],
    seasonText: '夏〜秋・初冬',
    isPeakSeason: true,
    highlightTag: '骨離れ抜群・子どもに人気',
    oceanReason: '近年の海水温上昇に伴い、温暖な水域を好むタチウオが東京湾口〜湾内に長期定着。小魚を追って湾内に入り込み、千葉側の漁港で安定した水揚げが続いています。',
    marineConditions: {
      waterTempNote: '東京湾の平均水温が冬季も高めに推移し生息適水温が継続',
      kuroshioCurrent: '温暖な外洋水の差し込みにより湾口部に群れが滞留',
      stockCondition: '内湾域の資源量は増加傾向にあり安定'
    },
    freshnessCheckpoints: [
      { part: '銀箔のような皮', tip: '表面のグアニン層（銀箔のような輝き）が剥がれておらず鏡のように反射するもの' },
      { part: '身の厚み', tip: '指4本分（指幅4本）以上の幅がある肉厚な切り身が脂の乗り抜群' },
      { part: '切り口', tip: '中骨の周りに血が滲んでおらず綺麗な白身のもの' }
    ],
    quickRecipe: {
      dishName: 'タチウオのカリッとムニエル',
      prepMinutes: 3,
      seasonings: ['小麦粉（または片栗粉）', '塩コショウ', 'バター', '醤油'],
      cookingMethod: 'フライパン焼き',
      instructions: '切り身に塩コショウをふって粉を薄くまぶし、多めの油またはバターで両面カリッと焼く。中骨だけで小骨が少なく、身がホロホロ崩れて子どもも大喜び！'
    },
    sdgsStory: {
      target: 'SDGs 14.4＆13「気候変動に対応する新しい食文化」',
      message: '海水温の上昇によって獲れる魚種は劇的に変化しています。「昔と違う」と嘆くのではなく、今海で増えている魚をありがたくいただくのが気候適応型のサステナブル消費です。',
      actionAdvice: 'ウロコ引き不要で料理が一番楽な魚。ウロコ取り器もゴミも出ないエコな魚です。'
    },
    flavorProfile: 'ふっくら柔らかくクセのない優しい白身'
  },
  {
    id: 'kinmedai',
    name: 'キンメダイ (銚子つりきんめ)',
    kana: 'きんめだい',
    latinName: 'Beryx decadactylus',
    category: '高級魚・底生魚',
    catchStatus: 'stable',
    statusLabel: '厳格な資源管理・高品質',
    trendPercent: 2,
    weeklyVolumeTrend: [48, 50, 52, 51],
    dealRating: 2,
    estimatedPrice: '1切 480円〜 / 1尾 1,480円〜',
    unit: '煮付け用切り身 / 祝い事の1尾',
    ports: ['銚子港', '勝浦港'],
    seasonText: '冬〜春先（脂が乗る厳冬期）',
    isPeakSeason: true,
    highlightTag: 'ブランド地魚・資源管理の模範',
    oceanReason: '銚子沖の水深200〜400mの深海に生息。地元の銚子漁協では操業時間制限や針数制限、幼魚再放流など日本屈指の自主的資源管理を行っており、持続可能な高単価ブランドとして保護・管理されています。',
    marineConditions: {
      waterTempNote: '深海層の水温は年間を通じて安定',
      kuroshioCurrent: '深海湧昇流によってもたらされる栄養塩により魚体が肥育',
      stockCondition: '厳格な自主規制により資源枯渇を防ぎ高位安定を維持'
    },
    freshnessCheckpoints: [
      { part: '大きな金色の目', tip: '水晶体が白く濁っておらず、金色に澄んでいるもの' },
      { part: '鮮烈な赤色', tip: '皮の色が鮮やかな深紅色で、うろこがしっかり残っているもの' },
      { part: '身のハリ', tip: 'お腹が割れておらず、持ち上げたときにしっかりとした重みがあるもの' }
    ],
    quickRecipe: {
      dishName: 'フライパンで失敗なし！キンメの甘辛煮付け',
      prepMinutes: 5,
      seasonings: ['醤油大さじ2', 'みりん大さじ2', '酒大さじ2', '砂糖大さじ1', '生姜'],
      cookingMethod: '落とし蓋煮付け',
      instructions: '調味料を一煮立ちさせたフライパンに切り身を皮を上にして入れ、アルミホイルで落とし蓋をして中火で5分。スプーンで煮汁をかけながら仕上げればツヤツヤの料亭の味！'
    },
    sdgsStory: {
      target: 'SDGs 14.4「模範的な自主的資源管理」',
      message: '銚子つりきんめは漁業者自らが操業ルールを厳しく定め、乱獲を防ぐ成功例。適正価格で買うことが、持続可能な漁業を続ける漁業者の生計を直接支えます。',
      actionAdvice: '安売りされる魚ではなく、「大切に獲られた価値ある魚」として特別な日やご褒美にじっくり味わいましょう。'
    },
    flavorProfile: '身の隅々まで染み渡る極上の脂と甘み'
  },
  {
    id: 'sanma',
    name: 'サンマ',
    kana: 'さんま',
    latinName: 'Cololabis saira',
    category: '青魚',
    catchStatus: 'scarce',
    statusLabel: '全国的な不漁↓ 貴重',
    trendPercent: -42,
    weeklyVolumeTrend: [60, 45, 32, 22],
    dealRating: 1,
    estimatedPrice: '1尾 298〜380円',
    unit: '1尾あたり (近年品薄傾向)',
    ports: ['銚子港（本州最南端水揚港）'],
    seasonText: '秋（9月〜11月）',
    isPeakSeason: false,
    highlightTag: '今季は控えめ推奨・イワシで代替◎',
    oceanReason: '地球温暖化による海水温の上昇（暖水塊の居座り）により、サンマの南下回遊ルートが日本の沿海から公海（遠い沖合）へと大きくシフト。水揚げ量が激減し相場が高騰しています。',
    marineConditions: {
      waterTempNote: '東北〜房総沖の沿岸水温が高く、冷水を好むサンマが接岸できない',
      kuroshioCurrent: '暖水渦が三陸沖を塞ぎ南下ルートを遮断',
      stockCondition: '北太平洋全体で資源量が低位水準まで減少中'
    },
    freshnessCheckpoints: [
      { part: '口先の黄色', tip: 'くちばしの先端が鮮やかな黄色（鮮度が落ちると茶色になる）' },
      { part: '背中の盛り上がり', tip: '頭の後ろの首元がぽっこり太くなっている個体が脂のり良好' },
      { part: '腹の硬さ', tip: '内臓が溶けてお腹が柔らかくなっていないもの' }
    ],
    quickRecipe: {
      dishName: 'サンマの香ばし塩焼き',
      prepMinutes: 5,
      seasonings: ['粗塩', 'すだち', '大根おろし'],
      cookingMethod: 'グリル焼き',
      instructions: '水洗いして水気を拭き、10分前に強めに塩を振る。強火の遠火（グリル中強火）で皮がパリッとするまで焼き上げる。貴重な一尾を余すところなく味わいます。'
    },
    sdgsStory: {
      target: 'SDGs 14.4「国際的な漁獲割当と資源回復の待機」',
      message: '北太平洋漁業委員会（NPFC）で国際的な漁獲枠が厳しく制限されています。',
      actionAdvice: '不漁の時は無理にサンマばかり求めず、今期大豊漁の「マイワシ」や「マサバ」を代替として選ぶのが賢くサステナブルな消費行動です。'
    },
    flavorProfile: '独特の苦味と香ばしい脂の旨み'
  },
  {
    id: 'kuromaguro',
    name: 'クロマグロ (太平洋本マグロ)',
    kana: 'くろまぐろ',
    latinName: 'Thunnus orientalis',
    category: '赤身魚',
    catchStatus: 'scarce',
    statusLabel: '厳格な漁獲枠管理・保護中',
    trendPercent: -48,
    weeklyVolumeTrend: [50, 40, 30, 20],
    dealRating: 1,
    estimatedPrice: '100g 780円〜1,200円',
    unit: '赤身・中トロ 刺身用柵',
    ports: ['銚子港', '勝浦港'],
    seasonText: '冬（寒マグロ）',
    isPeakSeason: false,
    highlightTag: '国際TAC枠・感謝していただく',
    oceanReason: '過去の乱獲により国際機関（WCPFC）および水産庁によって厳格な漁獲上限枠（TAC）が設定されています。漁業者ごとに決められた数量に達すると漁を中止するため、市場の入荷数がコントロールされています。',
    marineConditions: {
      waterTempNote: '回遊経路上の産卵場水温管理と稚魚保護を実施',
      kuroshioCurrent: '外洋を高速回遊するため海洋環境監視が国際連携で進行中',
      stockCondition: '厳格な保護政策により資源回復の兆しはあるが依然として管理継続が必要'
    },
    freshnessCheckpoints: [
      { part: '切り口の透明感', tip: '濁りのない深紅のグラデーションで、乾いて黒ずんでいないもの' },
      { part: 'スジの入り方', tip: 'スジが平行に細かく均一に入っている部分が口当たりなめらか' },
      { part: 'ドリップトレイ', tip: '解凍・チルドともに赤い水分が吸水シートに溢れていないもの' }
    ],
    quickRecipe: {
      dishName: '本マグロの贅沢漬け丼',
      prepMinutes: 3,
      seasonings: ['醤油大さじ1', 'みりん小さじ1', 'わさび', '刻み海苔'],
      cookingMethod: '漬け（マリネ）',
      instructions: '醤油とみりんをひと煮立ちさせて冷まし、厚めに切ったマグロを10分浸すだけ。熱々ご飯に乗せれば至福の味わい。一滴の旨みも逃しません。'
    },
    sdgsStory: {
      target: 'SDGs 14.4「乱獲の撲滅と海洋生物多様性の維持」',
      message: '生態系の頂点に君臨するクロマグロを守ることは、海の食物網全体を守る最重要課題です。消費者が「適量を選び、残さず食べる」ことが資源保護の最後の砦です。',
      actionAdvice: '毎日食べるのではなく「ハレの日の特別なご馳走」として大切に味わい、普段の食卓は地元で豊漁の地魚を中心に選ぶのが理想のサイクルです。'
    },
    flavorProfile: '濃厚なコクとほのかな酸味、とろける上質な脂'
  }
];

export const PORTS_INFO = [
  { name: '銚子港', specialty: 'イワシ・サバ・つりきんめ水揚量日本一クラス', badge: '水揚量日本一' },
  { name: '勝浦港', specialty: '近海一本釣り生カツオ・マアジの基地', badge: '生カツオの拠点' },
  { name: '船橋港', specialty: '江戸前スズキ水揚全国No.1・東京湾の宝', badge: '江戸前ブランド' },
  { name: '南房総・館山港', specialty: '定置網による多種多様な沿岸魚・未利用魚の宝庫', badge: '魚種多様性' }
];

export const SDG_METRICS = {
  localCatchRatio: '84%',
  surplusUtilizationIndex: '+38%',
  co2ReductionScore: '低輸送マイレージ Aランク',
  todayTip: '本日は銚子港でマイワシが記録的大漁！買い時シグナル全開です。サンマの代わりにイワシやスズキを選ぶと、お財布にも海の生態系にも大貢献できます。'
};

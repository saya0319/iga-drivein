export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  body: string;
};

export const siteConfig = {
  name: "伊賀ドライブイン",
  operator: "柿の葉すし 柿千",
  phone: "0595-XX-XXXX",
  phoneHref: "tel:0595XXXXXX",
  address: "三重県伊賀市 名阪国道 伊賀ICすぐ",
  description:
    "伊賀ドライブインは、名阪国道 伊賀ICすぐの大型食堂・休憩拠点です。観光バス、団体旅行、食事、お土産、古美術コーナーまで一度に楽しめます。",
  images: {
    hero: "/images/iga/hero-gaikan.jpg",
    busArrival: "/images/iga/bus-arrival.jpg",
    busParking: "/images/iga/bus-parking.jpg",
    parkingView: "/images/iga/parking-view.jpg",
    exteriorBuses: "/images/iga/exterior-buses.jpg",
    teishoku: "/images/iga/teishoku.jpg",
    oyakodon: "/images/iga/oyakodon.jpg",
    omurice: "/images/iga/omurice.jpg",
    souvenirs: "/images/iga/souvenirs.jpg",
    antiques: "/images/iga/antiques.jpg",
    aiJourney: "/images/iga/ai-journey-collage.jpg",
    aiMood: "/images/iga/ai-layout-mood.jpg"
  }
} as const;

export const navItems: NavItem[] = [
  { label: "トップ", href: "/" },
  { label: "お食事・大食堂", href: "/meals" },
  { label: "団体・旅行会社様へ", href: "/groups" },
  { label: "お土産・柿の葉すし", href: "/souvenirs" },
  { label: "古美術コーナー", href: "/antiques" },
  { label: "アクセス", href: "/access" },
  { label: "お問い合わせ", href: "/contact" }
];

export const strengths: Feature[] = [
  {
    title: "観光バス歓迎",
    body: "大型バスでの立ち寄りを想定した、食事・休憩・買い物の拠点です。"
  },
  {
    title: "大型食堂完備",
    body: "団体旅行でもまとまって食事しやすい、広々とした食堂をご用意しています。"
  },
  {
    title: "伊賀ICすぐ",
    body: "名阪国道から立ち寄りやすく、旅程に組み込みやすい立地です。"
  },
  {
    title: "食事・休憩・買い物",
    body: "食堂、お土産、柿の葉すし、古美術コーナーを一度に楽しめます。"
  }
];

export const groupReasons: Feature[] = [
  {
    title: "大型バスも安心",
    body: "観光バスでの来店を想定し、食事・休憩・買い物までスムーズに過ごせます。"
  },
  {
    title: "団体旅行に対応",
    body: "昼食、休憩、お土産購入など、行程に合わせた立ち寄り相談ができます。"
  },
  {
    title: "旅程に組み込みやすい",
    body: "伊賀ICすぐの立地で、大阪・名古屋・京都方面からの移動途中にも便利です。"
  },
  {
    title: "待ち時間も楽しい",
    body: "古美術コーナーやお土産売場があり、食後や集合前の時間も楽しめます。"
  }
];

export const mealHighlights: Feature[] = [
  {
    title: "昔ながらの大食堂",
    body: "肩ひじ張らずに落ち着ける、懐かしさと温かみのある食堂です。"
  },
  {
    title: "人気メニュー",
    body: "オムライス、定食、親子丼など、幅広い年代が選びやすい食事を楽しめます。"
  },
  {
    title: "団体昼食の相談",
    body: "人数、到着時間、予算に合わせて、旅行行程に組み込みやすくご案内します。"
  }
];

export const antiqueHighlights: Feature[] = [
  {
    title: "思わぬ掘り出し物",
    body: "掛け軸、茶碗、鉄瓶、壺、刀など、旅先ならではの出会いがあります。"
  },
  {
    title: "市場価格よりお求めやすく",
    body: "気軽に見て、選んで、持ち帰れる価格感も古美術コーナーの魅力です。"
  },
  {
    title: "旅先で宝探し",
    body: "食事休憩のついでに、忘れられない一点と出会う楽しみがあります。"
  }
];

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CallToActionBand } from "@/components/CallToActionBand";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import {
  antiqueHighlights,
  groupReasons,
  mealHighlights,
  siteConfig,
  strengths
} from "@/data/site";

const menuPhotos = [
  {
    title: "昔ながらのオムライス",
    body: "ふんわり玉子に赤いケチャップ。旅の途中で食べたくなる、懐かしい食堂の定番です。",
    src: siteConfig.images.omurice,
    alt: "伊賀ドライブインのオムライス"
  },
  {
    title: "満足感のある定食",
    body: "しっかり食べたい昼食に。団体旅行でも選びやすい、安心感のある一膳です。",
    src: siteConfig.images.teishoku,
    alt: "伊賀ドライブインの定食"
  },
  {
    title: "親子丼とうどん",
    body: "やさしい味わいで、幅広い年代におすすめしやすい食堂メニューです。",
    src: siteConfig.images.oyakodon,
    alt: "伊賀ドライブインの親子丼とうどん"
  }
];

type MapPinStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--delay": string;
};

const mapPins = [
  {
    label: "古美術",
    ariaLabel: "古美術の紹介を見る",
    href: "#antiques",
    src: siteConfig.images.mapAntiques,
    style: { "--x": "17%", "--y": "26%", "--delay": "80ms" } as MapPinStyle
  },
  {
    label: "忍者館",
    ariaLabel: "忍者館の紹介を見る",
    href: "#experience",
    src: siteConfig.images.mapNinja,
    style: { "--x": "28%", "--y": "17%", "--delay": "140ms" } as MapPinStyle
  },
  {
    label: "お土産",
    ariaLabel: "お土産売場の紹介を見る",
    href: "#souvenirs",
    src: siteConfig.images.mapSouvenirs,
    style: { "--x": "39%", "--y": "29%", "--delay": "200ms" } as MapPinStyle
  },
  {
    label: "麺丼コーナー",
    ariaLabel: "麺丼コーナーの食事紹介を見る",
    href: "#dining",
    src: siteConfig.images.mapMendon,
    style: { "--x": "49%", "--y": "17%", "--delay": "260ms" } as MapPinStyle
  },
  {
    label: "ごはん屋",
    ariaLabel: "ごはん屋の食事紹介を見る",
    href: "#dining",
    src: siteConfig.images.mapTonkatsu,
    style: { "--x": "60%", "--y": "29%", "--delay": "320ms" } as MapPinStyle
  },
  {
    label: "たまご亭",
    ariaLabel: "たまご亭の食事紹介を見る",
    href: "#dining",
    src: siteConfig.images.mapOmurice,
    style: { "--x": "70%", "--y": "17%", "--delay": "380ms" } as MapPinStyle
  },
  {
    label: "団体旅行",
    ariaLabel: "団体旅行の紹介を見る",
    href: "#groups",
    src: siteConfig.images.busArrival,
    style: { "--x": "31%", "--y": "59%", "--delay": "440ms" } as MapPinStyle,
    isBus: true
  }
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="proof-band" aria-label="伊賀ドライブインの特徴">
        {strengths.map((feature) => (
          <article key={feature.title}>
            <span>{feature.title}</span>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="section story-section">
        <div className="story-section__copy">
          <p className="eyebrow">旅の途中で、ほっとひと息</p>
          <h2>食べる・休む・買う・出会う。伊賀の時間を一度に楽しむ。</h2>
          <p>
            伊賀ドライブインは、名阪国道を行き交う旅人のための立ち寄り拠点。
            大型食堂で腹ごしらえをして、お土産を選び、古美術コーナーで思わぬ出会いを楽しむ。
            レトロな温かみと旅の高揚感が同居する、伊賀らしい休憩スポットです。
          </p>
        </div>
        <div className="story-section__photo photo-frame photo-frame--tall">
          <Image
            src={siteConfig.images.exteriorBuses}
            alt="伊賀ドライブインに並ぶ観光バスと外観"
            width={1800}
            height={1105}
          />
        </div>
      </section>

      <section className="section experience-strip" aria-label="伊賀ドライブインで楽しめること">
        <div className="experience-strip__copy">
          <p className="eyebrow">一度の立ち寄りに、いくつもの楽しみ</p>
          <h2>食堂の湯気、お土産のにぎわい、古美術の静けさ。</h2>
        </div>
        <div className="experience-strip__grid">
          <figure>
            <Image src={siteConfig.images.teishoku} alt="食堂メニュー" width={1800} height={1105} />
            <figcaption>食べる</figcaption>
          </figure>
          <figure>
            <Image src={siteConfig.images.busParking} alt="観光バスが並ぶ駐車場" width={1800} height={1350} />
            <figcaption>休む</figcaption>
          </figure>
          <figure>
            <Image src={siteConfig.images.souvenirs} alt="お土産売場" width={1800} height={1105} />
            <figcaption>買う</figcaption>
          </figure>
          <figure>
            <Image src={siteConfig.images.antiques} alt="古美術コーナー" width={1800} height={1105} />
            <figcaption>出会う</figcaption>
          </figure>
        </div>
      </section>

      <section id="floor-map" className="section floor-map-section" aria-labelledby="floor-map-title">
        <div className="floor-map__heading">
          <p className="eyebrow">館内マップで楽しみを選ぶ</p>
          <h2 id="floor-map-title">今日は、どこから楽しもう？</h2>
          <p>食べる、遊ぶ、探す、持ち帰る。旅の途中に、楽しみがぎゅっと詰まっています。</p>
        </div>

        <p className="floor-map__hint">
          <span aria-hidden="true">↔</span> 写真を選ぶと、詳しい紹介へ移動します
        </p>
        <div
          className="floor-map__viewport"
          tabIndex={0}
          aria-label="館内マップ。スマートフォンでは横にスクロールできます"
        >
          <div className="floor-map__canvas">
            <Image
              className="floor-map__plan"
              src={siteConfig.images.floorMap}
              alt="伊賀ドライブイン1階館内図と駐車場の案内"
              width={1600}
              height={800}
            />

            {mapPins.map((pin) => (
              <Link
                key={pin.label}
                className={`map-pin${"isBus" in pin && pin.isBus ? " map-pin--bus" : ""}`}
                href={pin.href}
                style={pin.style}
                aria-label={pin.ariaLabel}
              >
                <span className="map-pin__photo">
                  <Image src={pin.src} alt="" width={800} height={533} />
                </span>
                <span className="map-pin__label">{pin.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="dining" className="section dining-section">
        <div className="section-heading">
          <p className="eyebrow">大型食堂完備</p>
          <h2>旅の昼食を、ゆったりと受け止める大食堂。</h2>
          <p>
            懐かしさのある食堂らしさはそのままに、写真を大胆に使って「おいしそう」と感じる見せ方へ。
            団体旅行から家族連れまで、安心して食べられる時間をつくります。
          </p>
        </div>
        <div className="dining-feature photo-frame">
          <Image
            src={siteConfig.images.teishoku}
            alt="伊賀ドライブインの定食"
            width={1800}
            height={1105}
          />
          <div className="dining-feature__panel">
            {mealHighlights.map((feature) => (
              <InfoCard key={feature.title} {...feature} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-section">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">食堂メニュー</p>
          <h2>懐かしくて、しっかり満たされる。</h2>
          <p>
            実際の料理写真を主役に、ボリューム感と温かみが伝わる構成にしました。
          </p>
        </div>
        <div className="menu-photo-grid">
          {menuPhotos.map((item) => (
            <article key={item.title} className="menu-photo-card">
              <Image src={item.src} alt={item.alt} width={1800} height={1105} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section hospitality-section">
        <div className="hospitality-section__copy">
          <p className="eyebrow">旅のワクワクを補うイメージ</p>
          <h2>人の笑顔と、食堂のにぎわいがある場所へ。</h2>
          <p>
            実写写真を中心にしながら、まだ撮影素材が足りない「食事を楽しむお客様」「笑顔のスタッフ」
            の空気感だけをAIイメージで補っています。主役はあくまで実際の伊賀ドライブインです。
          </p>
        </div>
        <div className="hospitality-section__image photo-frame">
          <Image
            src={siteConfig.images.aiJourney}
            alt="食堂のにぎわいやスタッフの笑顔を表現した参考イメージ"
            width={1800}
            height={1200}
          />
        </div>
      </section>

      <section id="groups" className="section group-section">
        <div className="group-section__image photo-frame">
          <Image
            src={siteConfig.images.busArrival}
            alt="伊賀ドライブインに停車する大型観光バス"
            width={1800}
            height={1350}
          />
        </div>
        <div className="group-section__copy">
          <p className="eyebrow">団体・旅行会社様へ</p>
          <h2>大型バスも安心。旅程に組み込みやすい食事休憩拠点です。</h2>
          <p>
            名阪国道 伊賀ICすぐ。昼食、休憩、お土産購入、古美術コーナー散策まで、
            限られた立ち寄り時間を無理なく楽しめます。
          </p>
          <div className="card-grid card-grid--two">
            {groupReasons.map((feature) => (
              <InfoCard key={feature.title} {...feature} />
            ))}
          </div>
          <Link className="button button--primary" href="/contact">
            団体利用を相談する
          </Link>
        </div>
      </section>

      <section id="antiques" className="section antique-section antique-section--featured">
        <div className="antique-section__copy">
          <p className="eyebrow">古美術コーナー</p>
          <h2>旅先で、思わぬ掘り出し物に出会う。</h2>
          <p>
            掛け軸、茶碗、鉄瓶、壺、刀など、市場価格よりお求めやすい品との出会いも。
            伊賀ドライブイン最大の個性として、食事休憩に「宝探し」の楽しさを添えます。
          </p>
          <div className="mini-card-grid">
            {antiqueHighlights.map((feature) => (
              <InfoCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
        <div className="antique-section__image photo-frame">
          <Image
            src={siteConfig.images.antiques}
            alt="掛け軸が並ぶ伊賀ドライブインの古美術コーナー"
            width={1800}
            height={1105}
          />
        </div>
      </section>

      <section className="section treasure-section">
        <div className="treasure-section__media">
          <Image
            src={siteConfig.images.antiques}
            alt="古美術品が並ぶ売場"
            width={1800}
            height={1105}
          />
        </div>
        <div className="treasure-section__content">
          <p className="eyebrow">宝探しの余韻</p>
          <h2>見るだけでも楽しい。選べば旅の記憶になる。</h2>
          <p>
            古美術コーナーは、他の休憩施設にはない伊賀ドライブインらしさ。
            食後の数分が、思いがけない発見の時間に変わります。
          </p>
        </div>
      </section>

      <section id="experience" className="section ninja-experience-section">
        <div className="ninja-experience__intro">
          <div className="ninja-experience__copy">
            <p className="eyebrow">からくり屋敷＆手裏剣投げ体験</p>
            <h2>旅の途中で、忍者になる。</h2>
            <p>
              旅の思い出になる体験。伊賀ならではの忍者体験で、
              大人も子どもも楽しめます。
            </p>
          </div>
          <div className="ninja-price-card" aria-label="中学生以上の体験料金">
            <p className="ninja-price-card__badge">中学生以上</p>
            <dl>
              <div>
                <dt>からくり屋敷＋手裏剣体験</dt>
                <dd>990円<small>（税込）</small></dd>
              </div>
              <div>
                <dt>からくり屋敷のみ</dt>
                <dd>550円<small>（税込）</small></dd>
              </div>
              <div>
                <dt>手裏剣投げのみ</dt>
                <dd>550円<small>（税込）</small></dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="ninja-gallery" aria-label="忍者体験の様子">
          <figure className="ninja-gallery__entrance">
            <Image
              src={siteConfig.images.ninjaEntrance}
              alt="伊賀忍者館の入口へ向かう家族"
              width={1536}
              height={1024}
            />
            <figcaption>からくり屋敷・忍者館</figcaption>
          </figure>
          <figure className="ninja-gallery__shuriken">
            <Image
              src={siteConfig.images.ninjaExperience}
              alt="親子で楽しむ手裏剣投げ体験"
              width={1536}
              height={1024}
            />
            <figcaption>手裏剣投げ</figcaption>
          </figure>
          <figure className="ninja-gallery__memory">
            <Image
              src={siteConfig.images.ninjaExperience}
              alt="忍者や甲冑と一緒に楽しむ家族の忍者体験"
              width={1536}
              height={1024}
            />
            <figcaption>家族で忍者体験</figcaption>
          </figure>
        </div>
      </section>

      <section id="souvenirs" className="section souvenir-section">
        <div className="souvenir-section__image">
          <Image
            src={siteConfig.images.souvenirs}
            alt="伊賀ドライブインのお土産売場"
            width={1800}
            height={1105}
          />
        </div>
        <div className="souvenir-section__copy">
          <p className="eyebrow">お土産・柿の葉すし</p>
          <h2>伊賀の旅を、持ち帰れる楽しみに。</h2>
          <p>
            柿千の柿の葉すしをはじめ、伊勢・伊賀のお土産が並ぶ売場。
            食事のあとに選ぶ時間も、旅の思い出になります。
          </p>
          <Link className="button button--secondary" href="/souvenirs">
            お土産を見る
          </Link>
        </div>
      </section>

      <section id="access" className="section access-section">
        <div>
          <p className="eyebrow">アクセス</p>
          <h2>名阪国道 伊賀ICすぐ。大阪・名古屋・京都方面の旅程に。</h2>
          <p>
            観光旅行の途中に立ち寄りやすい立地です。
            食事、休憩、買い物、古美術散策まで、短い滞在でも満足感のある時間を過ごせます。
          </p>
        </div>
        <div className="access-photo photo-frame">
          <Image
            src={siteConfig.images.parkingView}
            alt="伊賀ドライブインの駐車場と周辺風景"
            width={1800}
            height={1350}
          />
        </div>
      </section>

      <CallToActionBand
        title="観光バス・団体昼食のご相談はこちら"
        body="人数、到着時間、食事内容、バス台数が決まっていなくても、まずはお気軽にご相談ください。"
      />
    </>
  );
}

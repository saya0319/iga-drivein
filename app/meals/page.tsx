import type { Metadata } from "next";
import { CallToActionBand } from "@/components/CallToActionBand";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { mealHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "お食事・大食堂",
  description: "伊賀ドライブインの300席大食堂。団体旅行の昼食、定食、名物オムライスなど、観光バスの立ち寄りに使いやすい食事処です。"
};

export default function MealsPage() {
  return (
    <>
      <section className="page-hero page-hero--meal">
        <p className="eyebrow">お食事・大食堂</p>
        <h1>湯気までごちそう。旅の腹ごしらえは大食堂で。</h1>
        <p>300席の大食堂で、団体旅行からご家族の休憩まで幅広くお迎えします。</p>
      </section>

      <section className="section">
        <SectionHeading
          title="食堂の使いやすさ"
          description="懐かしいドライブインらしい定食、名物メニュー、団体向けの提供しやすさを大切にしています。"
        />
        <div className="card-grid card-grid--three">
          {mealHighlights.map((feature) => (
            <InfoCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">おすすめ</p>
          <h2>人気のオムライス、定食各種、旅の途中にうれしい一膳。</h2>
          <p>
            本番公開時には、料理写真、価格、団体向けメニュー、アレルギー相談可否を掲載すると、
            旅行会社様が判断しやすくなります。
          </p>
        </div>
        <div className="menu-board">
          <dl>
            <div><dt>名物</dt><dd>昔ながらのオムライス</dd></div>
            <div><dt>団体</dt><dd>定食各種・事前相談</dd></div>
            <div><dt>休憩</dt><dd>軽食・土産購入とあわせて利用</dd></div>
          </dl>
        </div>
      </section>

      <CallToActionBand title="団体昼食のご相談を承ります" body="人数、到着時間、滞在時間、メニュー内容をお知らせください。" />
    </>
  );
}

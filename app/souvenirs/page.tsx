import type { Metadata } from "next";
import { CallToActionBand } from "@/components/CallToActionBand";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "お土産・柿の葉すし",
  description: "柿の葉すし 柿千が運営する伊賀ドライブインのお土産案内。柿の葉すしを中心に、旅の持ち帰りに選びやすい商品を紹介します。"
};

export default function SouvenirsPage() {
  return (
    <>
      <section className="page-hero page-hero--souvenir">
        <p className="eyebrow">お土産・柿の葉すし</p>
        <h1>柿千の柿の葉すしを、伊賀の旅のお土産に。</h1>
        <p>車中でも、ご自宅でも楽しめる、持ち帰りやすい看板商品です。</p>
      </section>

      <section className="section">
        <SectionHeading
          title="旅の終わりに選びやすい土産売場"
          description="本番公開時には商品写真、価格、日持ち、予約可否を掲載すると購入率が上がります。"
        />
        <div className="souvenir-panel">
          <h2>柿の葉すし</h2>
          <p>
            柿の葉で包まれた押し寿司は、旅先らしさと持ち帰りやすさを兼ね備えた定番土産。
            食事後の買い物導線としても、団体旅行の満足度を高めます。
          </p>
        </div>
      </section>

      <CallToActionBand title="団体様のお土産購入もご相談ください" body="食事とあわせた立ち寄りで、買い物時間も旅程に組み込みやすくなります。" />
    </>
  );
}

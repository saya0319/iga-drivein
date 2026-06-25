import type { Metadata } from "next";
import { CallToActionBand } from "@/components/CallToActionBand";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "古美術コーナー",
  description: "伊賀ドライブインの古美術コーナー。掛け軸、茶碗、鉄瓶、壺、刀など、旅の途中に掘り出し物を探せる名物売場です。"
};

export default function AntiquesPage() {
  return (
    <>
      <section className="page-hero page-hero--antique">
        <p className="eyebrow">古美術コーナー</p>
        <h1>思いがけない掘り出し物に出会う、旅の宝探し。</h1>
        <p>掛け軸、茶碗、鉄瓶、壺、刀など、市場価格よりお買い得な品との出会いを楽しめます。</p>
      </section>

      <section className="section section--market">
        <div className="market-copy">
          <p className="eyebrow">安心価格・破格の品も</p>
          <h2>休憩時間を、記憶に残る買い物時間へ。</h2>
          <p>
            古美術コーナーは、伊賀ドライブインらしい「寄ってみたい理由」になります。
            本番公開時には、売場写真と入荷品の一例を定期更新すると再訪動機を作れます。
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="取り扱い例" />
        <div className="tag-cloud" aria-label="取り扱い品目">
          <span>掛け軸</span>
          <span>茶碗</span>
          <span>鉄瓶</span>
          <span>壺</span>
          <span>刀</span>
          <span>古道具</span>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}

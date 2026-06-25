import type { Metadata } from "next";
import { CallToActionBand } from "@/components/CallToActionBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "アクセス",
  description: "伊賀ドライブインへのアクセス。名阪国道 伊賀ICすぐ、大型バス歓迎の食事・休憩拠点です。"
};

export default function AccessPage() {
  return (
    <>
      <section className="page-hero page-hero--access">
        <p className="eyebrow">アクセス</p>
        <h1>名阪国道 伊賀ICすぐ。旅程に組み込みやすい立地です。</h1>
        <p>大型バスでの立ち寄り、昼食休憩、お土産購入に便利な伊賀の拠点です。</p>
      </section>

      <section className="section section--split">
        <div>
          <h2>所在地</h2>
          <p>{siteConfig.address}</p>
          <p>
            本番公開時には正式住所、Googleマップ埋め込み、駐車場台数、バス入庫導線を掲載してください。
          </p>
        </div>
        <div className="map-placeholder" role="img" aria-label="地図掲載予定エリア">
          <span>Google Map</span>
          <small>正式住所確認後に埋め込み</small>
        </div>
      </section>

      <CallToActionBand title="大型バスでの来店前にご相談ください" body="駐車・到着時間・食事開始時間を事前に確認すると当日の案内がスムーズです。" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CallToActionBand } from "@/components/CallToActionBand";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { groupReasons, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "団体・旅行会社様へ",
  description: "伊賀ドライブインは大型バス歓迎、団体旅行に対応した食事・休憩拠点です。名阪国道 伊賀ICすぐで旅程に組み込みやすい立地です。"
};

export default function GroupsPage() {
  return (
    <>
      <section className="page-hero page-hero--group">
        <p className="eyebrow">団体・旅行会社様へ</p>
        <h1>大型バスも安心。食事・休憩・買い物を一度に楽しめる伊賀の立ち寄り拠点。</h1>
        <p>昼食、休憩、買い物、古美術コーナー散策まで。名阪国道 伊賀ICすぐで旅程に組み込みやすい立地です。</p>
        <div className="hero__actions">
          <a className="button button--primary" href={siteConfig.phoneHref}>電話で相談する</a>
          <Link className="button button--secondary" href="/access">アクセスを見る</Link>
        </div>
      </section>

      <section className="section section--wood">
        <SectionHeading
          title="団体担当者が確認したい情報を、ひと目で"
          description="観光バスの立ち寄りで重要な席数、導線、滞在時間、買い物要素を整理しています。"
        />
        <div className="card-grid card-grid--four">
          {groupReasons.map((feature) => (
            <InfoCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">予約相談時に伝えること</p>
          <h2>人数・到着時間・食事内容が決まると、話が早く進みます。</h2>
          <p>
            非エンジニアの方でも運用しやすいよう、将来的にはこの内容を問い合わせフォーム化できます。
            まずは電話導線を強くし、機会損失を減らす構成にしています。
          </p>
        </div>
        <ol className="check-list">
          <li>利用予定日と到着予定時刻</li>
          <li>人数、バス台数、添乗員様の有無</li>
          <li>食事メニュー、予算、滞在時間</li>
          <li>お土産購入や古美術コーナー見学の希望</li>
        </ol>
      </section>

      <CallToActionBand title="旅行会社様の下見・行程相談も歓迎です" body="大型バスでの立ち寄り、昼食、休憩、買い物導線までまとめてご相談ください。" />
    </>
  );
}

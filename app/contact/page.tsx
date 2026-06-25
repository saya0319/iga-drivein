import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "伊賀ドライブインへのお問い合わせ。団体予約、観光バスの立ち寄り、食事相談は電話でお問い合わせください。"
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--contact">
        <p className="eyebrow">お問い合わせ</p>
        <h1>団体予約・観光バスの立ち寄り相談はお電話で。</h1>
        <p>人数、到着時間、食事内容、バス台数が分かるとご案内がスムーズです。</p>
        <a className="button button--primary" href={siteConfig.phoneHref}>電話する</a>
      </section>

      <section className="section section--split">
        <div>
          <h2>お問い合わせ内容</h2>
          <p>団体昼食、観光バス休憩、土産購入、古美術コーナー見学などをご相談ください。</p>
        </div>
        <div className="contact-box">
          <p className="eyebrow">電話番号</p>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <small>正式な電話番号に差し替えてください。</small>
        </div>
      </section>
    </>
  );
}

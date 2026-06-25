import Link from "next/link";
import { siteConfig } from "@/data/site";

type CallToActionBandProps = {
  title?: string;
  body?: string;
};

export function CallToActionBand({
  title = "団体旅行・観光バスの立ち寄り相談はこちら",
  body = "昼食、休憩、お土産購入まで、旅程に合わせてご相談ください。"
}: CallToActionBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div>
        <p className="eyebrow">大型バス歓迎</p>
        <h2 id="cta-title">{title}</h2>
        <p>{body}</p>
      </div>
      <div className="cta-band__actions">
        <a className="button button--primary" href={siteConfig.phoneHref}>
          電話で相談する
        </a>
        <Link className="button button--secondary" href="/groups">
          団体予約を見る
        </Link>
      </div>
    </section>
  );
}

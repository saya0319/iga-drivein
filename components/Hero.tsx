import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-label="伊賀ドライブイン外観">
        <Image
          src={siteConfig.images.hero}
          alt="青空の下に建つ伊賀ドライブインの外観"
          width={2200}
          height={1467}
          priority
        />
      </div>
      <div className="hero__overlay">
        <p className="eyebrow">名阪国道 伊賀ICすぐ / 観光バス歓迎</p>
        <h1>
          <span>伊賀の味と、</span>
          <span>宝探し。</span>
        </h1>
        <p className="hero__lead">
          食べる、休む、買う、出会う。大型食堂とお土産、古美術まで楽しめる、
          旅の途中の立ち寄り拠点です。
        </p>
        <div className="hero__actions" aria-label="主要導線">
          <Link className="button button--primary" href="#groups">
            団体旅行の相談をする
          </Link>
          <Link className="button button--secondary" href="#dining">
            食堂を見る
          </Link>
          <Link className="button button--ghost" href="#antiques">
            古美術を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

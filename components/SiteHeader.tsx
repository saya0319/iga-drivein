import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="伊賀ドライブイン トップページ">
          <span className="brand__mark">伊賀</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.operator}</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-phone" href={siteConfig.phoneHref}>
          団体予約・お問い合わせ
        </a>
      </div>
    </header>
  );
}

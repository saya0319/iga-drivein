import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="footer-brand">{siteConfig.name}</p>
          <p>{siteConfig.operator}が運営する、伊賀の大型食事・休憩拠点。</p>
          <p>{siteConfig.address}</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

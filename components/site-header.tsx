import Link from "@/components/static-link";
import { Menu } from "lucide-react";

const menu = [["마을 이야기", "/village"], ["치유 프로그램", "/programs"], ["숙소", "/stay"], ["단체·워크숍", "/group"], ["여행 안내", "/guide"], ["소식", "/stories"]];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="홍천 열목어마을 홈">
      <svg className="brand-mark" viewBox="0 0 64 48" aria-hidden="true">
        <path d="M5 32 23 12l9 11 7-8 20 17" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 36c8-4 14 4 22 0s14 4 26-1" fill="none" stroke="#4E8791" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span><strong>홍천 열목어마을</strong><small>자연이 주는 쉼, 다시 살아가는 힘</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header"><div className="header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="주요 메뉴">{menu.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions">
        <Link href="/contact" className="button button-outline">문의하기</Link>
        <Link href="/contact?type=stay" className="button button-primary">예약하기</Link>
        <details className="mobile-menu"><summary aria-label="메뉴 열기"><Menu size={24} /></summary><nav aria-label="모바일 메뉴">
          {menu.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">문의하기</Link><Link href="/contact?type=stay">예약 상담</Link>
        </nav></details>
      </div>
    </div></header>
  );
}

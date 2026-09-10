import Image from "next/image";
import Link from "@/components/static-link";
import { Menu } from "lucide-react";
import { NaverBookingLink } from "@/components/booking-links";

const menu = [["마을 이야기", "/village"], ["치유 프로그램", "/programs"], ["숙소", "/stay"], ["단체·워크숍", "/group"], ["여행 안내", "/guide"], ["주변 여행", "/travel"], ["소식", "/stories"]];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="홍천 열목어마을 홈">
      <Image
        className="brand-logo"
        src="/images/hongcheon-yeolmokeo-logo.png"
        alt="홍천 열목어마을"
        width={1280}
        height={796}
        sizes="(max-width: 767px) 124px, 160px"
        priority
      />
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
        <NaverBookingLink className="button button-primary" position="header-desktop">네이버 예약</NaverBookingLink>
        <details className="mobile-menu"><summary aria-label="메뉴 열기"><Menu size={24} /></summary><nav aria-label="모바일 메뉴">
          {menu.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">문의하기</Link><NaverBookingLink position="header-mobile">네이버 예약</NaverBookingLink>
        </nav></details>
      </div>
    </div></header>
  );
}

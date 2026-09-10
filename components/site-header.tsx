"use client";

import Image from "next/image";
import Link from "@/components/static-link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NaverBookingLink } from "@/components/booking-links";
import { villageNavigation } from "@/data/village-pages";

const menu = [["치유 프로그램", "/programs"], ["숙소", "/stay"], ["단체·워크숍", "/group"], ["여행 안내", "/guide"], ["주변 여행", "/travel"], ["소식", "/stories"]] as const;

function Brand() { return <Link href="/" className="brand" aria-label="홍천 열목어마을 홈"><Image className="brand-logo" src="/images/hongcheon-yeolmokeo-logo.png" alt="홍천 열목어마을" width={1280} height={796} sizes="(max-width: 767px) 124px, 160px" priority /></Link>; }

export function SiteHeader() {
  const pathname = usePathname();
  const [villageOpen, setVillageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVillageOpen, setMobileVillageOpen] = useState(pathname.startsWith("/village"));
  const villageRef = useRef<HTMLDivElement>(null);
  const villageButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnOutside(event: MouseEvent) { if (villageRef.current && !villageRef.current.contains(event.target as Node)) setVillageOpen(false); }
    function closeOnEscape(event: KeyboardEvent) { if (event.key === "Escape") { const mobileWasOpen = Boolean(document.querySelector(".mobile-menu-panel")); setVillageOpen(false); setMobileOpen(false); (mobileWasOpen ? mobileButtonRef.current : villageButtonRef.current)?.focus(); } }
    document.addEventListener("mousedown", closeOnOutside); document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("mousedown", closeOnOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, []);

  const isVillage = pathname.startsWith("/village");
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className="desktop-nav" aria-label="주요 메뉴">
      <div className="village-menu" ref={villageRef}>
        <button ref={villageButtonRef} type="button" className={isVillage ? "is-current" : ""} aria-expanded={villageOpen} aria-haspopup="true" aria-controls="village-desktop-submenu" onClick={() => setVillageOpen((open) => !open)}>마을 이야기 <ChevronDown size={15} aria-hidden="true" /></button>
        {villageOpen && <div id="village-desktop-submenu" className="village-dropdown">
          <Link href="/village" className={pathname === "/village" ? "is-current" : ""}>마을 이야기 전체</Link>
          {villageNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={pathname === item.href ? "is-current" : ""}>{item.label}<small>{item.description}</small></Link>)}
        </div>}
      </div>
      {menu.map(([label, href]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined} className={pathname.startsWith(href) ? "is-current" : ""}>{label}</Link>)}
    </nav>
    <div className="header-actions">
      <Link href="/contact" className="button button-outline">문의하기</Link>
      <NaverBookingLink className="button button-primary" position="header-desktop">네이버 예약</NaverBookingLink>
      <button ref={mobileButtonRef} type="button" className="mobile-menu-trigger" aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={mobileOpen} aria-controls="mobile-site-menu" onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
      {mobileOpen && <nav id="mobile-site-menu" className="mobile-menu-panel" aria-label="모바일 메뉴">
        <button type="button" className={isVillage ? "is-current" : ""} aria-expanded={mobileVillageOpen} aria-controls="village-mobile-submenu" onClick={() => setMobileVillageOpen((open) => !open)}>마을 이야기 <ChevronDown size={17} aria-hidden="true" /></button>
        {mobileVillageOpen && <div id="village-mobile-submenu" className="mobile-village-submenu"><Link href="/village" aria-current={pathname === "/village" ? "page" : undefined}>마을 이야기 전체</Link>{villageNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</div>}
        {menu.map(([label, href]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>)}
        <Link href="/contact">문의하기</Link><NaverBookingLink position="header-mobile">네이버 예약</NaverBookingLink>
      </nav>}
    </div>
  </div></header>;
}

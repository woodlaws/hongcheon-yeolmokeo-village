"use client";
import { usePathname } from "next/navigation";
import Link from "@/components/static-link";
import { villageNavigation } from "@/data/village-pages";
export function VillageSubnav() { const pathname = usePathname(); return <nav className="village-subnav" aria-label="마을 이야기 하위 메뉴"><div className="container">{villageNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</div></nav>; }

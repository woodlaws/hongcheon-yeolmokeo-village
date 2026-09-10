import type { ReactNode } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { VillageSubnav } from "@/components/village-subnav";
export function VillagePageFrame({ eyebrow, title, description, image = "/images/village-main-hero.jpg", imageAlt, children }: { eyebrow: string; title: string; description: string; image?: string; imageAlt: string; children: ReactNode }) { return <><SiteHeader /><main className="village-detail-page"><section className="village-detail-hero"><Image src={image} fill priority sizes="100vw" alt={imageAlt} /><div /><div className="container"><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></div></section><VillageSubnav />{children}</main><SiteFooter /><MobileCta /></>; }

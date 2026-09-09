import { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileCta } from "./mobile-cta";
import { PageHero } from "./page-hero";

export function PageLayout({ eyebrow, title, description, image, children }: { eyebrow: string; title: string; description: string; image?: string; children: ReactNode }) {
  return <><SiteHeader /><main><PageHero eyebrow={eyebrow} title={title} description={description} image={image} />{children}</main><SiteFooter /><MobileCta /></>;
}

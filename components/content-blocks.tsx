import Link from "@/components/static-link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Section({ kicker, title, intro, children, tone = "plain" }: { kicker?: string; title: string; intro?: string; children: ReactNode; tone?: "plain" | "cream" | "forest" }) {
  return <section className={`content-section tone-${tone}`}><div className="container">{kicker && <p className="section-kicker">{kicker}</p>}<h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}{children}</div></section>;
}

export function ActionBand({ title, text, href = "/contact", label = "상담 문의하기" }: { title: string; text: string; href?: string; label?: string }) {
  return <section className="action-band"><div className="container"><div><h2>{title}</h2><p>{text}</p></div><Link href={href} className="button button-light">{label}<ArrowRight size={18}/></Link></div></section>;
}

export function FactCard({ title, children }: { title: string; children: ReactNode }) {
  return <article className="fact-card"><h3>{title}</h3><div>{children}</div></article>;
}

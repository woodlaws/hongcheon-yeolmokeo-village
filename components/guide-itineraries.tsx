"use client";

import { useState } from "react";
import { ArrowRight, Check, Info } from "lucide-react";
import Link from "@/components/static-link";
import { guideItineraries } from "@/data/guide";

export function GuideItineraries() {
  const [active, setActive] = useState<(typeof guideItineraries)[number]["id"]>("day");
  return <div className="guide-itineraries">
    <div className="guide-tabs" role="tablist" aria-label="여행 기간 선택">
      {guideItineraries.map(plan => <button key={plan.id} type="button" role="tab" aria-selected={active === plan.id} aria-controls={`schedule-${plan.id}`} id={`tab-${plan.id}`} onClick={() => setActive(plan.id)}>{plan.label}<span>{plan.audience}</span></button>)}
    </div>
    <div className="guide-schedule-panels">
      {guideItineraries.map(plan => <article key={plan.id} id={`schedule-${plan.id}`} role="tabpanel" aria-labelledby={`tab-${plan.id}`} className={active === plan.id ? "active" : ""}>
        <header><p>{plan.label} 추천 일정</p><h3>{plan.title}</h3><span>{plan.audience}</span></header>
        <div className="guide-days">{plan.days.map(day => <section key={day.title}><h4>{day.title}</h4><ol>{day.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol></section>)}</div>
        <p className="guide-schedule-note"><Info size={18} />{plan.notice}</p>
        <div className="guide-schedule-actions"><Link className="button button-primary" href={plan.primary}>{plan.primaryLabel} <ArrowRight size={17} /></Link><Link className="button button-outline" href={plan.secondary}>{plan.secondaryLabel}</Link></div>
        <span className="guide-schedule-ready"><Check size={15} />시간은 예시이며 예약 확정 전 최종 조율</span>
      </article>)}
    </div>
  </div>;
}

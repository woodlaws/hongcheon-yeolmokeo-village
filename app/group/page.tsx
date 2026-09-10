import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { ArrowRight, BedDouble, BriefcaseBusiness, Check, ChevronRight, CircleHelp, Clock3, ExternalLink, Handshake, HeartPulse, Info, Leaf, Phone, Sparkles, Trees, Users, Utensils } from "lucide-react";
import Link from "@/components/static-link";
import { GroupQuoteForm } from "@/components/group-quote-form";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { groupAudiences, groupCases, groupElements, groupFaqs, groupProcess, groupSchedules, groupSummary, groupTrustHistory } from "@/data/group";
import { siteConfig } from "@/data/site";

const pageUrl = "https://hongcheon-yeolmokeo.vercel.app/group";
export const metadata: Metadata = {
  title: { absolute: "홍천 기업 워크숍·공공기관 연수｜열목어마을 단체 치유 프로그램" },
  description: "홍천 열목어마을에서 기업 워크숍, 공공기관 연수, 소방·복지 종사자 치유 프로그램과 농촌형 워케이션을 운영합니다. 숙박·식사·회의공간을 포함한 단체 맞춤 일정을 상담해 드립니다.",
  keywords: ["홍천 기업 워크숍", "홍천 공공기관 연수", "강원도 단체 워크숍", "기업 힐링 프로그램", "소방관 치유 프로그램", "복지 종사자 힐링", "홍천 워케이션", "홍천 단체 숙소", "농촌체험 연수", "학교 농촌체험"],
  alternates: { canonical: pageUrl },
  openGraph: { title: "홍천 기업 워크숍·공공기관 연수｜열목어마을 단체 치유 프로그램", description: "숲과 계곡, 숙박, 건강한 밥상과 치유 프로그램을 기관 목적에 맞게 구성합니다.", url: pageUrl, type: "website", locale: "ko_KR", siteName: "홍천 열목어마을", images: [{ url: "/images/village-vision-1.jpg", width: 1200, height: 630, alt: "홍천 열목어마을 숲에서 프로그램에 참여하는 한국인 단체" }] },
};

const valueCards = [
  { icon: Trees, title: "일상과 공간의 전환", text: "도시와 업무 공간을 벗어나 구성원이 새로운 환경에서 서로를 바라볼 수 있습니다." },
  { icon: HeartPulse, title: "몸과 마음의 재충전", text: "숲길 걷기, 몸살림 운동, 족욕과 명상 등으로 긴장을 내려놓는 시간을 구성합니다." },
  { icon: Handshake, title: "자연스러운 소통", text: "정형화된 회의 대신 함께 걷고 먹고 체험하며 새로운 대화를 시작합니다." },
  { icon: Leaf, title: "지역과 연결되는 경험", text: "지역 농산물, 치유밥상과 농촌 체험을 통해 지속 가능한 지역의 가치를 경험합니다." },
] as const;

const audienceImages: Record<string, { src: string; alt: string; position?: string }> = {
  "corporate-refresh": { src: "/images/group/corporate-refresh.webp", alt: "초록빛 산촌 숲길을 걸으며 대화하는 한국인 직장인들" },
  "public-training": { src: "/images/group/public-training.webp", alt: "농촌 교육 공간에서 진행자의 안내를 들으며 소규모 활동을 하는 한국인 성인 참가자들" },
  "firefighter-recovery": { src: "/images/group/firefighter-recovery.webp", alt: "자연 가까운 나무 데크에서 편안한 운동복으로 가볍게 스트레칭하는 한국인 성인들" },
  "welfare-health": { src: "/images/group/welfare-health.webp", alt: "산촌의 나무 테이블에 둘러앉아 허브차 향을 맡으며 쉬는 한국인 중장년 참가자들" },
  "school-education": { src: "/images/group/school-education.webp", alt: "인솔 교사와 함께 숲속 식물과 나뭇잎을 관찰하는 한국인 학생들" },
  "rural-workation": { src: "/images/group/rural-workation.webp", alt: "녹음이 보이는 산촌의 창가 업무 공간에서 노트북으로 일하는 한국인 성인들" },
};

const elementImages = [
  { src: "/images/group/element-nature.webp", alt: "초록빛 숲과 계곡을 따라 천천히 걷는 한국인 성인들" },
  { src: "/images/group/element-body.webp", alt: "나무 족욕통에 발을 담그고 약초 족욕을 즐기는 장면" },
  { src: "/images/group/element-mind.webp", alt: "허브와 찻잔을 곁에 두고 차를 블렌딩하는 손" },
  { src: "/images/group/element-relationship.webp", alt: "나무 테이블에서 함께 체험하고 대화하는 한국인 성인들" },
  { src: "/images/group/element-life.webp", alt: "제철 나물과 지역 식재료를 활용해 차린 소박한 한식 밥상" },
] as const;

const bundleItems = [
  { icon: BedDouble, title: "숙박", image: "/images/stay-room.png", alt: "홍천 열목어마을 숙박 객실 내부", description: "보금자리 독채·비움센터·한옥 숙소·워케이션 객실", note: "희망 날짜와 전체 인원을 알려주시면 객실 구성을 안내합니다.", href: "/stay", linkLabel: "숙소 자세히 보기" },
  { icon: Utensils, title: "식사", image: "/images/healing-table.jpg", alt: "지역 식재료로 차린 열목어마을 치유밥상", description: "지역 농산물 치유밥상·산채와 제철 식재료·조식·점심·저녁·다과와 차", note: "횟수·메뉴·알레르기·채식 대응은 견적 요청에 적어주세요." },
  { icon: BriefcaseBusiness, title: "공간", image: "/images/singing-bowl.png", alt: "열목어마을 야외 데크와 체험 공간에서 진행하는 치유 활동", description: "사랑방·비움센터 업무공간·체험 공간·다목적 공간·조망대·야외 쉼터", note: "필요한 장비·배치·차량 정보를 알려주시면 이용 공간을 안내합니다." },
] as const;

export default function GroupPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://hongcheon-yeolmokeo.vercel.app/" }, { "@type": "ListItem", position: 2, name: "단체·워크숍", item: pageUrl }] };
  const service = { "@context": "https://schema.org", "@type": "Service", name: "홍천 열목어마을 단체 맞춤 프로그램 안내", url: pageUrl, description: "과거 단체 운영 이력을 바탕으로 기관 목적과 참여자 특성에 맞는 당일·숙박형 일정의 현재 가능 여부를 상담하는 안내 서비스", areaServed: { "@type": "AdministrativeArea", name: "강원특별자치도 홍천군" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: groupFaqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <><SiteHeader /><main className="group-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

    <section className="group-hero" aria-labelledby="group-title"><Image src="/images/village-vision-1.jpg" alt="홍천 열목어마을 숲속 야외 공간에서 함께 자연을 살피는 한국인 참가자들" fill priority sizes="100vw" /><div className="group-hero-shade" /><div className="container group-hero-layout"><div><p className="group-eyebrow">기업·기관·학교를 위한 맞춤형 체류 프로그램</p><h1 id="group-title">일하던 공간을 벗어나면,<span>새로운 대화가 시작됩니다</span></h1><p>숲과 계곡에서의 휴식, 몸과 마음을 깨우는 치유 프로그램, 지역의 건강한 밥상과 숙박을 조직의 목적에 맞게 구성해 드립니다.</p><div className="group-actions"><a className="button button-light" href="#quote">단체 견적 요청 <ArrowRight size={18} /></a><Link className="button button-ghost" href="/programs">운영 프로그램 보기</Link></div></div><aside aria-label="단체 프로그램 핵심 정보">{["당일·숙박형 구성", "기업·공공기관·학교 가능", "식사·숙박·프로그램 통합 상담", "인원과 목적에 따른 맞춤 설계"].map(item => <span key={item}><Check size={17} />{item}</span>)}</aside></div></section>

    <section className="group-trust" aria-labelledby="trust-title"><div className="container"><div className="group-trust-heading"><p className="section-kicker">VERIFIED HISTORY</p><h2 id="trust-title">실제 단체 프로그램 운영 경험이 있습니다</h2><p>과거 운영 이력이며 현재 제공 일정은 별도 확인이 필요합니다.</p></div><div className="group-trust-grid">{groupTrustHistory.map(item => <a key={`${item.year}-${item.label}`} href={item.href} target="_blank" rel="noreferrer"><b>{item.year}</b><span>{item.label}</span><small>{item.source} <ExternalLink size={13} /></small></a>)}</div></div></section>

    <section className="group-section group-values" aria-labelledby="values-title"><div className="container"><div className="group-heading"><p className="section-kicker">WHY OFFSITE</p><h2 id="values-title">관광이 아니라 조직을 위한 회복의 시간입니다</h2><p>성과나 치료 효과를 약속하지 않습니다. 조직의 일상에서 잠시 벗어나 쉬고 연결되는 환경을 제안합니다.</p></div><div className="group-value-grid">{valueCards.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="group-section group-audiences" id="packages" aria-labelledby="audiences-title"><div className="container"><div className="group-heading"><p className="section-kicker">PROGRAM PROPOSALS</p><h2 id="audiences-title">조직의 목적에 맞는 프로그램을 선택하세요</h2><p>실제 운영 이력과 신규 기획안을 구분하고, 현재 가능 일정은 견적 상담에서 확인합니다.</p><small className="group-staged-note">프로그램 이해를 돕기 위한 연출 이미지입니다.</small></div><div className="group-audience-grid">{groupAudiences.map((item, index) => { const image = audienceImages[item.id]; return <article key={item.id} id={`package-${item.id}`}><figure className="group-program-photo"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1120px) 50vw, 400px" /></figure><div className="group-audience-card-body"><div className="group-card-head"><span>{String(index + 1).padStart(2, "0")}</span><p>{item.status.verifiedHistory ? "운영 이력 기반" : "맞춤 기획 제안"}</p></div><h3>{item.title}</h3><b>{item.audience}</b><h4>추천 목적</h4><p>{item.goals.join(" · ")}</p><h4>추천 구성</h4><ul>{item.programs.map(program => <li key={program}><Check size={15} />{program}</li>)}</ul>{item.caution && <small><Info size={14} />{item.caution}</small>}<div className="group-card-actions"><a className="button button-outline" href={`#schedule-${item.id === "rural-workation" ? "workation" : item.id === "school-education" ? "day" : "overnight"}`}>추천 일정 보기</a><Link className="button button-primary" href={`/contact?type=group&program=${item.id}`}>이 프로그램 견적받기</Link></div></div></article>; })}</div></div></section>

    <section className="group-section group-elements" aria-labelledby="elements-title"><div className="container"><div className="group-heading"><p className="section-kicker">BUILD YOUR PROGRAM</p><h2 id="elements-title">필요한 요소를 조합해 맞춤 일정을 만듭니다</h2><p>기관 목적과 방문 인원을 알려주시면 희망 일정에 맞춰 활동과 진행 인력을 상담합니다.</p><small className="group-staged-note">프로그램 이해를 돕기 위한 연출 이미지입니다.</small></div><div className="group-element-grid">{groupElements.map((element, index) => <article key={element.title}><figure className="group-element-photo"><Image src={elementImages[index].src} alt={elementImages[index].alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1120px) 33vw, 240px" /></figure><div className="group-element-body"><span>0{index + 1}</span><h3>{element.title}</h3><ul>{element.items.map(item => <li key={item}>{item}</li>)}</ul><small>{element.proposed ? "목적에 맞춘 구성 상담" : "운영 이력 기반 · 희망 일정 상담"}</small>{element.note && <p>{element.note}</p>}</div></article>)}</div></div></section>

    <section className="group-section group-schedules" aria-labelledby="schedules-title"><div className="container"><div className="group-heading"><p className="section-kicker">SAMPLE SCHEDULE</p><h2 id="schedules-title">시간과 목적에 따라 다르게 구성합니다</h2><p>아래 일정은 구성 예시이며 계절, 인원, 건강 상태와 기관 목적에 따라 조정됩니다.</p></div><div className="group-schedule-grid">{groupSchedules.map(schedule => <article key={schedule.id} id={`schedule-${schedule.id}`}><p>{schedule.recommendation}</p><h3>{schedule.title}</h3><ol>{schedule.steps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol><Link href={`/contact?type=group&duration=${schedule.id}`} className="text-link">이 일정으로 상담 <ArrowRight size={16} /></Link></article>)}</div></div></section>

    <section className="group-section group-bundle" aria-labelledby="bundle-title"><div className="container"><div className="group-heading"><p className="section-kicker">ONE-STOP PLANNING</p><h2 id="bundle-title">프로그램부터 숙박과 식사까지 한 번에 상담하세요</h2><p>이동을 줄이고 조직의 목적에 집중하도록 필요한 요소를 함께 조율합니다.</p></div><div className="group-bundle-grid">{bundleItems.map(item => { const Icon = item.icon; return <article key={item.title}><figure className="group-bundle-photo"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1000px) 50vw, 400px" /></figure><div className="group-bundle-body"><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p><small>{item.note}</small>{"href" in item && item.href && <Link href={item.href} className="text-link">{item.linkLabel} <ArrowRight size={16} /></Link>}</div></article>; })}</div></div></section>

    <section className="group-section group-cases" aria-labelledby="cases-title"><div className="container"><div className="group-heading"><p className="section-kicker">FIELD EXPERIENCE</p><h2 id="cases-title">다양한 현장에서 검증해 온 농촌 치유 경험</h2><p>기사 사진은 사용하지 않고 근거 링크와 확인된 내용만 요약했습니다.</p></div><div className="group-case-grid">{groupCases.map(item => <article key={item.title}><div><span>{item.year}</span><b>과거 운영 이력</b></div><h3>{item.title}</h3><p className="group-case-audience">대상 · {item.audience}</p><p>{item.summary}</p><ul>{item.facts.map(fact => <li key={fact}><Check size={15} />{fact}</li>)}</ul><footer><a href={item.href} target="_blank" rel="noreferrer">{item.source} 원문 <ExternalLink size={14} /></a><Link href={`/contact?type=group&case=${encodeURIComponent(item.title)}`}>유사 프로그램 문의 <ChevronRight size={15} /></Link></footer></article>)}</div></div></section>

    <section className="group-section group-process" aria-labelledby="process-title"><div className="container"><div className="group-heading"><p className="section-kicker">HOW WE PLAN</p><h2 id="process-title">목적을 들은 뒤 가장 적합한 일정을 제안합니다</h2><p>담당자가 준비할 정보까지 단계별로 확인하세요.</p></div><ol>{groupProcess.map(([title, input], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>준비할 정보 · {input}</p></div></li>)}</ol></div></section>

    <section className="group-section group-summary" aria-labelledby="summary-title"><div className="container"><div className="group-heading"><p className="section-kicker">FOR DECISION MAKERS</p><h2 id="summary-title">담당자용 한눈에 보기</h2><p>내부 검토와 보고에 필요한 핵심 조건을 한 표로 정리했습니다.</p></div><div className="group-summary-table"><table><tbody>{groupSummary.map(([label, value]) => <tr key={label}><th>{label}</th><td>{value}</td></tr>)}</tbody></table></div><div className="group-summary-actions"><a href="#quote" className="button button-primary">견적에 필요한 정보 입력</a></div></div></section>

    <section className="group-section group-quote" id="quote" aria-labelledby="quote-title"><div className="container group-quote-layout"><aside><p className="section-kicker">REQUEST A PROPOSAL</p><h2 id="quote-title">단체 프로그램 견적 문의</h2><p>기관 유형, 목적, 날짜와 인원을 알려주시면 현재 가능한 숙박·식사·프로그램 조합을 확인할 수 있습니다.</p><div><span><Clock3 />희망일과 대체일</span><span><Users />예상 인원과 참가자 특성</span><span><Sparkles />필요한 숙박·식사·공간</span></div><p className="group-contact-pending"><Phone size={18} /><a href={siteConfig.contact.phoneHref}>전화 상담 {siteConfig.contact.phoneDisplay}</a></p></aside><Suspense fallback={<p role="status">견적 문의 양식을 불러오는 중입니다.</p>}><GroupQuoteForm /></Suspense></div></section>

    <section className="group-section group-faq" aria-labelledby="faq-title"><div className="container"><div className="group-heading"><p className="section-kicker">FAQ</p><h2 id="faq-title">기관 담당자가 자주 묻는 질문</h2><p>확정되지 않은 인원·장비·증빙 조건은 상담이 필요하다고 안내합니다.</p></div><div className="group-faq-list">{groupFaqs.map(([question, answer]) => <details key={question}><summary>{question}<CircleHelp size={19} /></summary><p>{answer}</p></details>)}</div><div className="group-related"><Link href="/programs">프로그램</Link><Link href="/stay">숙소</Link><Link href="/guide">여행 안내</Link><Link href="/contact?type=group">문의 페이지</Link></div></div></section>

    <section className="group-final" aria-labelledby="group-final-title"><Image src="/images/village-main-hero.jpg" alt="홍천 열목어마을 건물과 잔디마당 전경" fill sizes="100vw" /><div className="group-final-shade" /><div className="container"><p>조직에게 필요한 것은 때때로 더 많은 일이 아니라 제대로 쉬는 시간입니다</p><h2 id="group-final-title">우리 조직만의 치유 일정을<span>함께 만들어보세요</span></h2><b>기관 유형, 방문 목적, 인원과 희망 날짜를 알려주시면 숙박·식사·프로그램을 포함한 맞춤 일정을 제안해 드립니다.</b><div><a className="button button-light" href="#quote">단체 견적 요청</a><Link className="button button-ghost" href="/programs">프로그램 먼저 보기</Link><Link className="button button-ghost" href="/stay">숙소 확인하기</Link></div></div></section>
  </main><SiteFooter /><MobileCta /></>;
}

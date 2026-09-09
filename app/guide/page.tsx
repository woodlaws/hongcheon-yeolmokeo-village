import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Bus, CalendarDays, Car, Check, ChevronRight, CircleHelp, CloudSun, Compass, ExternalLink, HandHeart, Info, MapPinned, Mountain, Navigation, PackageCheck, ShieldAlert, Sparkles, Trees, Users } from "lucide-react";
import { GuideItineraries } from "@/components/guide-itineraries";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "@/components/static-link";
import { attractions, guideFaqs, guideSources, officialLinks, packingLists, safetyNotes, seasons, themeRoutes, transportGuides, tripTypes } from "@/data/guide";
import { siteConfig } from "@/data/site";

const pageUrl = "https://hongcheon-yeolmokeo.vercel.app/guide";
export const metadata: Metadata = {
  title: { absolute: "홍천 열목어마을 여행 안내｜1박 2일 코스·주변 관광지·오시는 길" },
  description: "홍천 열목어마을의 당일·1박 2일·2박 3일 여행코스와 삼봉자연휴양림, 삼봉약수, 은행나무숲, 구룡령 등 주변 관광지, 교통과 준비물을 안내합니다.",
  keywords: ["홍천 여행", "홍천 1박 2일", "홍천 가볼 만한 곳", "홍천 열목어마을", "홍천 삼봉약수", "국립삼봉자연휴양림", "홍천 은행나무숲", "구룡령 옛길", "홍천 계곡 여행", "강원도 힐링 여행"],
  alternates: { canonical: pageUrl },
  openGraph: { title: "홍천 열목어마을 여행 안내｜1박 2일 코스·주변 관광지·오시는 길", description: "여행 일정부터 주변 관광지, 교통·준비물·안전정보까지 실제 방문 계획에 필요한 내용을 확인하세요.", url: pageUrl, type: "website", locale: "ko_KR", siteName: "홍천 열목어마을", images: [{ url: "/images/forest-3.jpg", width: 1200, height: 630, alt: "홍천 열목어마을로 이어지는 숲속 산촌 도로" }] },
};

const quickFacts = [
  { icon: MapPinned, label: "위치", value: "강원특별자치도 홍천군 내면" },
  { icon: CalendarDays, label: "여행 유형", value: "당일·1박 2일·2박 3일" },
  { icon: Users, label: "추천 대상", value: "개인·가족·직장인·단체" },
  { icon: Trees, label: "주요 경험", value: "숲·계곡·치유·밥상" },
  { icon: Car, label: "이동 방법", value: "자가용 중심·대중교통 확인" },
  { icon: Check, label: "예약 방식", value: "숙박·프로그램 사전 상담" },
] as const;

export default function GuidePage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://hongcheon-yeolmokeo.vercel.app/" }, { "@type": "ListItem", position: 2, name: "여행 안내", item: pageUrl }] };
  const attractionJson = attractions.filter(item => item.verified).map(item => ({ "@type": "TouristAttraction", name: item.name, description: item.summary, url: item.officialUrl, ...(item.id === "sambong-forest" ? { address: { "@type": "PostalAddress", streetAddress: "삼봉휴양길 276", addressLocality: "홍천군 내면", addressRegion: "강원특별자치도", addressCountry: "KR" } } : {}) }));
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "열목어마을과 함께 둘러보기 좋은 곳", itemListElement: attractionJson.map((item, index) => ({ "@type": "ListItem", position: index + 1, item })) };
  const faqJson = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guideFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><SiteHeader /><main className="travel-guide">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

    <section className="guide-hero" aria-labelledby="guide-title"><Image src="/images/forest-3.jpg" alt="백두대간 자락의 울창한 숲 사이로 이어지는 홍천 산촌 도로" fill priority sizes="100vw" /><div className="guide-hero-shade" /><div className="container"><p className="guide-eyebrow">백두대간 깊은 숲으로 떠나는 회복 여행</p><h1 id="guide-title">조금 멀리 와도 괜찮은 이유,<span>홍천에서 만나보세요</span></h1><p>열목어가 살아가는 맑은 계곡과 숲, 따뜻한 산촌의 밥상과 편안한 숙박까지 여행에 필요한 모든 정보를 안내해 드립니다.</p><div className="guide-actions"><a className="button button-light" href="#itineraries">추천 일정 보기 <ArrowRight size={18} /></a><Link className="button button-ghost" href="/contact?type=trip">숙소·프로그램 상담</Link></div></div></section>

    <section className="guide-quick guide-section" aria-labelledby="quick-title"><div className="container"><div className="guide-heading"><p className="section-kicker">BEFORE YOU GO</p><h2 id="quick-title">열목어마을 여행, 이것부터 확인하세요</h2><p>산촌 여행은 일정과 이동 방법을 먼저 확인하면 훨씬 편안해집니다.</p></div><div className="guide-quick-grid">{quickFacts.map(({ icon: Icon, label, value }) => <article key={label}><Icon /><div><b>{label}</b><p>{value}</p></div></article>)}</div><div className="guide-address-alert"><Info /><div><b>방문 주소는 예약 확정 후 다시 확인해 주세요.</b><p>{siteConfig.address}</p><span>공개 자료의 마을·사업자·숙소 주소가 서로 달라 하나를 확정 주소로 사용하지 않습니다.</span></div><a href="#map">주소 후보 확인</a></div></div></section>

    <section className="guide-section guide-types" aria-labelledby="types-title"><div className="container"><div className="guide-heading"><p className="section-kicker">CHOOSE YOUR TRIP</p><h2 id="types-title">누구와 함께 떠나시나요?</h2><p>동행과 여행 목적에 맞는 일정 또는 프로그램으로 바로 이어집니다.</p></div><div className="guide-type-grid">{tripTypes.map((item, index) => <Link href={item.href} key={item.id}><span>0{index + 1}</span><h3>{item.title}</h3><ul>{item.items.map(value => <li key={value}>{value}</li>)}</ul><b>추천 보기 <ChevronRight size={16} /></b></Link>)}</div></div></section>

    <section className="guide-section guide-plans" id="itineraries" aria-labelledby="plans-title"><div className="container"><div className="guide-heading"><p className="section-kicker">PLAN BY DURATION</p><h2 id="plans-title">머무는 시간에 맞춰 일정을 고르세요</h2><p>당일·1박 2일·2박 3일 예시를 비교하고 필요한 숙박과 프로그램을 상담할 수 있습니다.</p></div><GuideItineraries /></div></section>

    <section className="guide-section guide-attractions" aria-labelledby="attractions-title"><div className="container"><div className="guide-heading"><p className="section-kicker">NEARBY PLACES</p><h2 id="attractions-title">열목어마을과 함께 둘러보기 좋은 곳</h2><p>거리·이동시간·운영시간은 임의로 표시하지 않고 출발 전 확인 항목으로 남겼습니다.</p></div><div className="guide-attraction-grid">{attractions.map((item, index) => <article className={index < 2 ? "featured" : ""} key={item.id}><div className="guide-attraction-head"><span>{item.category}</span><b>{item.verified ? "공식 자료 확인" : "세부정보 확인 필요"}</b></div><h3>{item.name}</h3><p>{item.summary}</p><dl><div><dt>추천 계절</dt><dd>{item.seasons.join(" · ")}</dd></div><div><dt>주요 경험</dt><dd>{item.experience}</dd></div><div><dt>예상 체류</dt><dd>{item.duration}</dd></div><div><dt>마을과 거리</dt><dd>{item.distance}</dd></div><div><dt>위치</dt><dd>{item.address}</dd></div><div><dt>예약·운영</dt><dd>{item.reservation}</dd></div></dl><footer><a href={item.mapUrl} target="_blank" rel="noopener noreferrer">지도 보기 <ExternalLink size={14} /></a><a href={item.officialUrl} target="_blank" rel="noopener noreferrer">공식 정보 <ExternalLink size={14} /></a></footer></article>)}</div><p className="guide-source-note"><Info size={17} />열목어마을 주변 관광지는 <a href={guideSources.village} target="_blank" rel="noopener noreferrer">홍천군 관광정보</a>와 공공기관 자료를 기준으로 정리했습니다.</p></div></section>

    <section className="guide-section guide-routes" aria-labelledby="routes-title"><div className="container"><div className="guide-heading"><p className="section-kicker">ROUTE IDEAS</p><h2 id="routes-title">관심사에 맞춰 주변 동선을 더해보세요</h2><p>아래 코스는 확정 여행상품이 아닌 추천 동선입니다. 실제 이동 순서와 소요시간은 지도로 확인해 주세요.</p></div><div className="guide-route-grid">{themeRoutes.map((route, routeIndex) => <article key={route.title}><span>ROUTE 0{routeIndex + 1}</span><h3>{route.title}</h3><ol>{route.stops.map((stop, index) => <li key={stop}><b>{index + 1}</b><p>{stop}</p>{index < route.stops.length - 1 && <ChevronRight />}</li>)}</ol><p>{route.note}</p></article>)}</div></div></section>

    <section className="guide-section guide-seasons" aria-labelledby="seasons-title"><div className="container"><div className="guide-heading"><p className="section-kicker">FOUR SEASONS</p><h2 id="seasons-title">계절마다 다른 열목어마을</h2><p>마을과 실제 강원도 풍경 사진으로 계절별 여행 준비를 안내합니다.</p></div><div className="guide-season-grid">{seasons.map(season => <article key={season.id}><div><Image src={season.image} alt={season.alt} fill sizes="(max-width: 767px) 100vw, 25vw" /></div><section><h3>{season.name}</h3><ul>{season.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><a href={season.creditUrl} target="_blank" rel="noopener noreferrer">사진: {season.credit} <ExternalLink size={12} /></a></section></article>)}</div></div></section>

    <section className="guide-section guide-transport" aria-labelledby="transport-title"><div className="container"><div className="guide-heading"><p className="section-kicker">GETTING HERE</p><h2 id="transport-title">출발하기 전에 이동 방법을 확인하세요</h2><p>정확한 서울 출발 시간, 대중교통 노선과 차량 진입 조건은 실시간 정보와 운영자 안내를 기준으로 합니다.</p></div><div className="guide-transport-grid">{transportGuides.map(item => { const Icon = item.id === "car" ? Car : item.id === "transit" ? Bus : Navigation; return <article key={item.id}><div><Icon /><span>{item.status}</span></div><h3>{item.title}</h3><ol>{item.steps.map((step, index) => <li key={step}><b>{index + 1}</b>{step}</li>)}</ol><h4>출발 전 확인</h4><ul>{item.checks.map(check => <li key={check}><Check size={14} />{check}</li>)}</ul></article>; })}</div></div></section>

    <section className="guide-section guide-map" id="map" aria-labelledby="map-title"><div className="container guide-map-layout"><div className="guide-map-visual"><Compass /><span>37° N · GANGWON</span><div><i /><i /><i /><i /></div><p>정확한 마커는 주소 확인 후 연결합니다</p></div><div><p className="section-kicker">DESTINATION CHECK</p><h2 id="map-title">내비게이션 목적지는 예약 확정 후 입력하세요</h2><p>현재 공개 자료에서 확인되는 주소는 성격이 서로 다를 수 있습니다. 잘못된 임시 마커 대신 검색 지도와 주소 후보를 제공합니다.</p><ul>{siteConfig.addressCandidates.map(address => <li key={address}><MapPinned /><span>{address}</span><b>용도 확인 필요</b></li>)}</ul><div className="guide-map-actions"><a className="button button-primary" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">지도에서 검색 <ExternalLink size={16} /></a><Link className="button button-outline" href="/contact?type=trip">최종 집결지 문의</Link></div></div></div></section>

    <section className="guide-section guide-packing" aria-labelledby="packing-title"><div className="container"><div className="guide-heading"><p className="section-kicker">PACKING LIST</p><h2 id="packing-title">도시보다 조금 더 준비하면 훨씬 편안합니다</h2><p>계절과 참여 활동에 맞는 항목을 출발 전에 확인하세요.</p></div><div className="guide-packing-grid">{packingLists.map((list, index) => <article key={list.title}><div>{index === 0 ? <PackageCheck /> : index === 1 ? <CloudSun /> : index === 2 ? <Mountain /> : <Sparkles />}<h3>{list.title}</h3></div><ul>{list.items.map(item => <li key={item}><span>□</span>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="guide-section guide-safety" aria-labelledby="safety-title"><div className="container guide-safety-layout"><div><p className="section-kicker">SAFETY FIRST</p><h2 id="safety-title">자연에서는 안전이 여행보다 먼저입니다</h2><p>계곡·숲·산간도로의 상황은 날씨에 따라 빠르게 바뀔 수 있습니다.</p><ShieldAlert /></div><div><ul>{safetyNotes.map(note => <li key={note}><Check />{note}</li>)}</ul><aside><HandHeart /><p><b>이동 편의 사전 상담</b>대한민국 구석구석에는 장애인 화장실·전용 주차구역·휠체어 대여 등 무장애 편의시설이 없는 것으로 안내됩니다. 방문자의 이동 조건을 예약 전에 알려주세요.</p><a href={guideSources.visitKorea} target="_blank" rel="noopener noreferrer">무장애 정보 원문 <ExternalLink size={14} /></a></aside></div></div></section>

    <section className="guide-section guide-live" aria-labelledby="live-title"><div className="container"><div className="guide-heading"><p className="section-kicker">CHECK TODAY</p><h2 id="live-title">출발 당일 공식 운영정보를 확인하세요</h2><p>실시간 정보를 복제하지 않고 각 공공기관의 최신 페이지로 연결합니다.</p></div><div className="guide-live-grid">{officialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"><span>{link.source}</span><h3>{link.label}</h3><ExternalLink /></a>)}</div></div></section>

    <section className="guide-section guide-faq" aria-labelledby="guide-faq-title"><div className="container"><div className="guide-heading"><p className="section-kicker">FAQ</p><h2 id="guide-faq-title">방문 전에 자주 묻는 질문</h2><p>확인되지 않은 교통·주소·시설 조건은 운영자 확인이 필요한 상태로 안내합니다.</p></div><div className="guide-faq-list">{guideFaqs.map(([question, answer]) => <details key={question}><summary>{question}<CircleHelp /></summary><p>{answer}</p></details>)}</div><div className="guide-related"><Link href="/village">마을 이야기</Link><Link href="/programs">프로그램</Link><Link href="/stay">숙소</Link><Link href="/group">단체·워크숍</Link></div></div></section>

    <section className="guide-final" aria-labelledby="guide-final-title"><Image src="/images/forest-2.jpg" alt="산길과 마을 풍경이 어우러진 홍천 열목어마을 주변 산촌 전경" fill sizes="100vw" /><div className="guide-final-shade" /><div className="container"><p>여행의 시작은 멀리 가는 것이 아니라 잠시 멈추는 것입니다</p><h2 id="guide-final-title">이번 주말,<span>홍천에서 제대로 쉬어보세요</span></h2><b>방문 인원과 희망 날짜, 원하는 숙박과 프로그램을 알려주시면 여행 계획을 안내해 드립니다.</b><div><Link className="button button-light" href="/contact?type=trip">여행 일정 상담</Link><Link className="button button-ghost" href="/stay">숙소 확인하기</Link><Link className="button button-ghost" href="/programs">프로그램 보기</Link><Link className="button button-ghost" href="/contact?type=group">단체 견적 문의</Link></div></div></section>
  </main><SiteFooter /><MobileCta /></>;
}

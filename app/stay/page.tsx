import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness, Check, CircleHelp, CookingPot, House, Info, Leaf, MapPin, PackageCheck, Trees, Waves } from "lucide-react";
import Link from "@/components/static-link";
import { ConsultationLink, NaverBookingLink } from "@/components/booking-links";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { packingList, refundPolicy, stayFacilities, stayFaqs, stayModes, stayPrograms, stayRooms, stayRules } from "@/data/stay";
import { TravelBanner } from "@/components/travel-banner";

import { StayGallery, ClassroomGallery } from "@/components/stay-gallery";

const pageUrl = "https://hongcheon-yeolmokeo.vercel.app/stay";

export const metadata: Metadata = {
  title: { absolute: "홍천 열목어마을 숙소｜숲·계곡 가까운 독채와 치유여행 숙박" },
  description: "홍천 열목어마을의 보금자리 독채, 비움센터, 한옥 숙소와 마을회관 숙소를 소개합니다. 객실과 프로그램, 치유밥상을 연결한 개인·가족·단체 숙박을 상담해 드립니다.",
  keywords: ["홍천 숙소", "홍천 독채 숙소", "홍천 한옥 숙소", "홍천 단체 숙소", "홍천 워케이션", "홍천 치유여행", "홍천 농촌체험 숙소", "홍천 계곡 숙소", "홍천 가족 숙소", "강원도 힐링 숙소"],
  alternates: { canonical: pageUrl },
  openGraph: { title: "홍천 열목어마을 숙소｜숲·계곡 가까운 독채와 치유여행 숙박", description: "보금자리 독채, 비움센터, 한옥 숙소와 마을회관 숙소를 비교하고 숙박·치유 프로그램을 함께 상담하세요.", url: pageUrl, type: "website", locale: "ko_KR", siteName: "홍천 열목어마을", images: [{ url: "/images/stay-real-v2/bogumjari/02-room-01.jpg", width: 1200, height: 630, alt: "보금자리 침대 객실" }] },
};

function FacilityIcon({ name }: { name: string }) {
  if (name.includes("업무")) return <BriefcaseBusiness aria-hidden="true" />;
  if (name.includes("숲")) return <Trees aria-hidden="true" />;
  if (name.includes("계곡")) return <Waves aria-hidden="true" />;
  if (name.includes("식사")) return <CookingPot aria-hidden="true" />;
  if (name.includes("주차")) return <MapPin aria-hidden="true" />;
  return <House aria-hidden="true" />;
}

export default function StayPage() {
  const breadcrumbJson = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://hongcheon-yeolmokeo.vercel.app/" }, { "@type": "ListItem", position: 2, name: "숙소", item: pageUrl }] };
  const lodgingJson = { "@context": "https://schema.org", "@type": "LodgingBusiness", name: "홍천 열목어마을 숙소", url: pageUrl, description: "홍천의 숲과 계곡 가까이에서 독채, 한옥, 프로그램 연계 체류를 상담할 수 있는 열목어마을 숙소", ...(siteConfig.addressVerified && siteConfig.structuredAddress ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.structuredAddress, addressLocality: "홍천군", addressRegion: "강원특별자치도", addressCountry: "KR" } } : {}) };
  const faqJson = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: stayFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <><SiteHeader /><main className="stay-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJson) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

    <StayGallery />

    <section className="stay-section stay-compare" aria-labelledby="stay-compare-title"><div className="container"><div className="stay-heading"><p className="section-kicker">COMPARE</p><h2 id="stay-compare-title">객실 한눈에 비교</h2><p>빈칸 없이 확인 상태까지 함께 보여드립니다.</p></div><div className="stay-table-wrap"><table><thead><tr><th>비교 항목</th>{stayRooms.map(room => <th key={room.id}>{room.name}</th>)}</tr></thead><tbody>
      <tr><th>숙소 유형</th>{stayRooms.map(room => <td key={room.id}>{room.type}</td>)}</tr><tr><th>추천 대상</th>{stayRooms.map(room => <td key={room.id}>{room.recommendedFor.join("·")}</td>)}</tr><tr><th>기준 인원</th>{stayRooms.map(room => <td key={room.id}>{room.roomConfigurations.join(" · ")}</td>)}</tr><tr><th>독채 여부</th>{stayRooms.map(room => <td key={room.id}>{room.id === "bogumjari" || room.id === "hanok" ? "독채" : room.id === "bieum-center" ? "공용시설 연계" : "예약 상품별 안내"}</td>)}</tr><tr><th>화장실</th>{stayRooms.map(room => <td key={room.id}>{room.privateBathroom === true ? "객실 내 단독" : room.privateBathroom === false ? "센터 내 공용" : "예약 상품별 안내"}</td>)}</tr><tr><th>샤워실</th>{stayRooms.map(room => <td key={room.id}>{room.privateShower === true ? "객실 내 단독" : room.privateShower === false ? "센터 내 공용" : "예약 상품별 안내"}</td>)}</tr><tr><th>업무공간 접근성</th>{stayRooms.map(room => <td key={room.id}>{room.workAccess}</td>)}</tr><tr><th>프로그램 공간</th>{stayRooms.map(room => <td key={room.id}>{room.programAccess}</td>)}</tr><tr><th>가격·일정</th>{stayRooms.map(room => <td key={room.id}>{room.id === "community-hall" ? "단체 상담 시 안내" : "네이버 예약에서 확인"}</td>)}</tr>
    </tbody></table></div><div className="stay-mobile-compare">{stayRooms.map(room => <article key={room.id}><h3>{room.name}</h3><dl><div><dt>유형</dt><dd>{room.type}</dd></div><div><dt>객실</dt><dd>{room.roomConfigurations.join(" · ")}</dd></div><div><dt>화장실·샤워실</dt><dd>{room.privateBathroom === true ? "객실 내 단독" : room.privateBathroom === false ? "비움센터 내 공용" : "예약 상품별 안내"}</dd></div><div><dt>가격·일정</dt><dd>{room.id === "community-hall" ? "단체 상담 시 안내" : "네이버 예약에서 확인"}</dd></div></dl>{room.id === "community-hall" ? <ConsultationLink href="/contact?type=group" type="group" position="stay-mobile-room-community-hall" className="text-link">단체 숙박 상담</ConsultationLink> : <NaverBookingLink position={`stay-mobile-room-${room.id}`} className="text-link">네이버 예약</NaverBookingLink>}</article>)}</div></div></section>

    <section className="stay-section stay-modes" aria-labelledby="stay-modes-title"><div className="container"><div className="stay-heading"><p className="section-kicker">YOUR WAY TO STAY</p><h2 id="stay-modes-title">원하는 여행 방식으로 머물러 보세요</h2><p>숙박만, 치유여행, 워케이션, 단체 체류까지 목적을 알려주시면 가능한 구성을 확인해 드립니다.</p></div><div className="stay-mode-grid">{stayModes.map((mode, index) => <article key={mode.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{mode.title}</h3><p>{mode.text}</p><small>{mode.note}</small><Link className="button button-outline" href={`/contact?type=stay&stayMode=${mode.id}`}>일정 상담하기</Link></article>)}</div></div></section>

    <section className="stay-section stay-facilities" aria-labelledby="stay-facilities-title"><div className="container"><div className="stay-heading"><p className="section-kicker">BEYOND THE ROOM</p><h2 id="stay-facilities-title">객실 밖에서도 쉼은 이어집니다</h2><p>시설별 이용 조건은 숙박 상품과 희망 일정에 따라 안내합니다.</p></div><div className="stay-facility-grid">{stayFacilities.filter(facility => facility.verified).map(facility => <article key={facility.name}><FacilityIcon name={facility.name} /><div><p className="stay-verified">공개 자료 확인</p><h3>{facility.name}</h3><p>{facility.usageNotes}</p><small>숙박 포함 여부: {facility.includedWithStay === null ? "숙박 상품별 안내" : facility.includedWithStay ? "포함" : "별도"}</small></div></article>)}</div></div></section>

    <ClassroomGallery />

    <section className="stay-section stay-programs" aria-labelledby="stay-programs-title"><div className="container stay-program-layout"><div className="stay-program-media"><Image src="/images/singing-bowl.png" alt="홍천 열목어마을 숲속 치유 프로그램에서 사용하는 싱잉볼" fill sizes="(max-width: 900px) 100vw, 48vw" /><div><Image src="/images/healing-table.jpg" alt="홍천 제철 식재료로 차린 열목어마을 치유밥상" fill sizes="(max-width: 900px) 45vw, 20vw" /></div></div><div><p className="section-kicker">STAY &amp; HEALING</p><h2 id="stay-programs-title">잠만 자는 숙박보다,<br />제대로 쉬는 체류를 경험하세요</h2><p>숙박과 치유 프로그램, 식사를 함께 구성하려면 맞춤 상담을 이용해 주세요.</p><div className="stay-program-pills">{stayPrograms.map(program => <span key={program}><Leaf size={15} />{program}</span>)}</div><div className="stay-inline-actions"><Link href="/programs" className="button button-outline">치유 프로그램 보기</Link><ConsultationLink href="/contact?type=stay&stayMode=stay-package" type="stay" position="stay-program-package" className="button button-primary">숙박·프로그램 상담</ConsultationLink></div></div></div></section>

    <section className="stay-section stay-guide" aria-labelledby="stay-guide-title"><div className="container"><div className="stay-heading"><p className="section-kicker">HOUSE GUIDE</p><h2 id="stay-guide-title">편안한 숙박을 위한 이용안내</h2><p>기존 공식 숙박 이용안내에서 확인한 기준입니다. 예약 상품의 최종 안내를 다시 확인해 주세요.</p></div><div className="stay-rule-list">{stayRules.map((rule, index) => <details key={rule.title} open={index === 0}><summary><span>{rule.title}</span><CircleHelp size={20} /></summary><ul>{rule.items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></details>)}</div></div></section>

    <section className="stay-section stay-packing" aria-labelledby="stay-packing-title"><div className="container stay-packing-layout"><div><p className="section-kicker">PACKING LIST</p><h2 id="stay-packing-title">방문 전 준비해 주세요</h2><p>산촌의 날씨와 야외 활동을 고려해 가볍지만 빠짐없이 준비해 주세요.</p></div><div className="stay-packing-list">{packingList.map(item => <span key={item}><PackageCheck size={20} />{item}</span>)}</div><p className="stay-amenity-alert"><Info size={20} /><span><b>욕실용품은 상품별로 확인해 주세요.</b> 수건과 욕실용품 제공 여부는 객실 및 숙박 상품에 따라 다를 수 있습니다. 예약 확정 전 제공 물품을 확인해 주세요.</span></p></div></section>

    <section className="stay-section stay-booking" aria-labelledby="stay-booking-title"><div className="container"><div className="stay-booking-intro"><p className="section-kicker">BOOKING GUIDE</p><h2 id="stay-booking-title">객실 예약과 맞춤 상담을 구분해 이용하세요</h2><p>예약 가능 일정, 객실 요금 및 결제는 네이버 예약에서 확인할 수 있습니다.</p><p>단체 방문과 숙박·식사·프로그램 결합 일정은 별도 상담이 필요합니다.</p></div><div className="stay-booking-actions"><NaverBookingLink className="button button-primary" position="stay-booking-guide">날짜·객실 선택하기</NaverBookingLink><ConsultationLink className="button button-outline" href="/contact?type=stay" type="stay" position="stay-booking-guide">숙박·프로그램 맞춤 상담</ConsultationLink><ConsultationLink className="button button-outline" href="/contact?type=group" type="group" position="stay-booking-guide">단체 일정 상담하기</ConsultationLink></div><div className="stay-refund"><div><p className="section-kicker">CANCELLATION</p><h3>취소·환불 안내</h3><p>아래 규정은 기존 공식 이용안내를 기준으로 정리한 참고 자료입니다. 최종 적용 기준은 네이버 예약 상품 안내를 확인해 주세요.</p></div><table><thead><tr><th>취소 시점</th><th>기존 안내 기준</th></tr></thead><tbody>{refundPolicy.map(([when, amount]) => <tr key={when}><td>{when}</td><td>{amount}</td></tr>)}</tbody></table></div></div></section>

    <section className="stay-section stay-faq" aria-labelledby="stay-faq-title"><div className="container"><div className="stay-heading"><p className="section-kicker">FAQ</p><h2 id="stay-faq-title">숙소 이용 전 자주 묻는 질문</h2><p>객실 예약과 단체·프로그램 상담에 필요한 내용을 안내합니다.</p></div><div className="stay-faq-list">{stayFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div><div className="stay-related-links"><Link href="/programs">치유 프로그램</Link><Link href="/group">단체·워크숍</Link><Link href="/guide">여행 안내</Link><Link href="/contact">문의하기</Link></div></div></section>

    <div className="container"><TravelBanner includeStay={false} /></div>
    <section className="stay-final" aria-labelledby="stay-final-title"><Image src="/images/village-main-hero.jpg" alt="홍천 열목어마을 건물과 잔디마당 전경" fill sizes="100vw" /><div className="stay-final-shade" /><div className="container"><p>오늘은 조금 천천히 쉬어도 괜찮습니다</p><h2 id="stay-final-title">홍천의 깊은 밤과<span>맑은 아침을 만나보세요</span></h2><b>일반 객실은 네이버에서 바로 예약하고, 숙박·식사·프로그램을 함께 구성할 때는 맞춤 상담을 이용해 주세요.</b><div><NaverBookingLink className="button button-light" position="stay-final">네이버에서 예약하기</NaverBookingLink><ConsultationLink className="button button-ghost" href="/contact?type=stay" type="stay" position="stay-final">숙박·프로그램 상담</ConsultationLink><ConsultationLink className="button button-ghost" href="/contact?type=group" type="group" position="stay-final">단체 일정 상담하기</ConsultationLink></div></div></section>
  </main><SiteFooter /><MobileCta /></>;
}

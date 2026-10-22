import type { Metadata } from "next";
import Link from "@/components/static-link";
import { ArrowRight, Building2, CircleHelp, ExternalLink, MapPin, Phone, Utensils, Waves } from "lucide-react";
import { FacilityMapViewer } from "@/components/facility-map-viewer";
import { FacilityPhoto } from "@/components/facility-photo";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VillageSubnav } from "@/components/village-subnav";
import { commonFacilities, facilityMap, publishedFacilities } from "@/data/facilities";
import { villageOfficial, villageSources } from "@/data/village-pages";

export const metadata: Metadata = {
  title: { absolute: "시설 안내｜홍천 열목어마을" },
  description: "마을 약도로 위치를 확인하고, 홍천 열목어마을에서 머물고 체험할 공간과 이용 방법을 살펴보세요.",
  alternates: { canonical: "/village/facilities" },
  openGraph: { title: "열목어마을 시설 안내", description: "마을 약도로 위치를 확인하고, 머물고 체험할 공간을 살펴보세요.", images: [{ url: facilityMap.imageSrc, alt: facilityMap.imageAlt }] },
};

const commonIcons = [Building2, Waves, Utensils, CircleHelp] as const;

export default function FacilitiesPage() {
  return <><SiteHeader /><main className="facilities-page">
    <section className="facilities-hero"><div className="container facilities-hero-copy"><p className="section-kicker">VILLAGE FACILITIES</p><h1>열목어마을 시설 안내</h1><p>마을 약도로 위치를 확인하고, 머물고 체험할 공간을 살펴보세요.</p></div></section>
    <VillageSubnav />

    <section className="facility-map-section" aria-labelledby="facility-map-title"><div className="container"><header><p className="section-kicker">VILLAGE MAP</p><h2 id="facility-map-title">마을 전체 약도</h2><p>도로와 계곡, 숙소와 체험 공간의 위치를 한눈에 살펴보세요.</p></header><FacilityMapViewer src={facilityMap.imageSrc} alt={facilityMap.imageAlt} width={facilityMap.width} height={facilityMap.height} caption={facilityMap.caption} /></div></section>

    <nav className="facility-jump" aria-label="시설 바로가기"><div className="container"><strong>시설 바로가기</strong>{publishedFacilities.map((facility, index) => <a key={facility.id} href={`#${facility.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{facility.name}</a>)}</div></nav>

    <section className="facility-details" aria-labelledby="facility-list-title"><div className="container"><header className="facility-intro"><p className="section-kicker">SPACES AT A GLANCE</p><h2 id="facility-list-title">머무르고, 일하고, 배우는 공간</h2><p>시설명과 용도가 기존 프로젝트 또는 공식 자료에서 확인된 범위만 안내합니다. 객실·요금은 숙박 페이지에서, 단체 공간의 배치와 장비는 상담 과정에서 확인합니다.</p></header>
      <div className="facility-list">{publishedFacilities.map((facility, index) => <article id={facility.id} className={`facility-row${facility.images.length ? "" : " facility-row-no-photo"}`} key={facility.id}>
        {facility.images[0] && <FacilityPhoto {...facility.images[0]} />}
        <div className="facility-copy"><p className="facility-number">{String(index + 1).padStart(2, "0")} · {facility.eyebrow}</p><h2>{facility.name}</h2><p className="facility-summary">{facility.summary}</p>{facility.description.map((detail) => <p key={detail}>{detail}</p>)}<h3>확인된 이용 방향</h3><ul>{facility.uses.map((activity) => <li key={activity}>{activity}</li>)}</ul>{facility.reservationRequired && <dl className="facility-facts"><div><dt>이용 방법</dt><dd>{facility.reservationRequired}</dd></div></dl>}<div className="facility-links">{facility.inquiryLink && <Link className="text-link" href={facility.inquiryLink.href}>{facility.inquiryLink.label} <ArrowRight size={16} /></Link>}<a className="facility-source" href={facility.source.href} target={facility.source.href.startsWith("http") ? "_blank" : undefined} rel={facility.source.href.startsWith("http") ? "noreferrer" : undefined}>근거: {facility.source.label}{facility.source.href.startsWith("http") && <ExternalLink size={13} />}</a></div></div>
      </article>)}</div>
    </div></section>

    <section className="facility-common" aria-labelledby="common-facilities-title"><div className="container"><header><p className="section-kicker">SHARED FACILITIES</p><h2 id="common-facilities-title">확인된 공용·편의 공간</h2><p>공개 자료에 근거가 있는 시설만 정리했습니다.</p></header><div className="facility-common-grid">{commonFacilities.map((item, index) => { const Icon = commonIcons[index] ?? Building2; return <article key={item.name}><Icon aria-hidden="true" /><h3>{item.name}</h3><p>{item.detail}</p></article>; })}</div><p className="facility-evidence">시설 현황 출처: <a href={villageSources.agriculture} target="_blank" rel="noreferrer">홍천군 농촌체험휴양마을 현황</a> · <a href={villageSources.village} target="_blank" rel="noreferrer">홍천군 문화관광 열목어마을 안내</a></p></div></section>

    <section className="facility-cta"><div className="container"><div><p className="section-kicker">PLAN YOUR VISIT</p><h2>시설 이용과 단체 방문을 계획하고 계신가요?</h2><p>방문 날짜와 인원, 숙박 또는 교육·워크숍 목적을 알려주시면 이용 가능한 시설을 안내합니다.</p><a className="facility-cta-address" href={villageOfficial.naverMap} target="_blank" rel="noreferrer"><MapPin size={17} /> {villageOfficial.address}</a></div><div><Link className="button button-primary" href="/contact?type=group"><Phone size={17} /> 시설 이용 문의</Link><Link className="button button-outline" href="/stay">숙박 안내 보기</Link></div></div></section>
  </main><SiteFooter /><MobileCta /></>;
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
import { ConsultationLink, NaverBookingLink } from "@/components/booking-links";
import { programs } from "@/data/site";
import { isProgramSlug, programConnections } from "@/data/program-connections";
import { TravelBanner } from "@/components/travel-banner";

export const metadata: Metadata = { title: "치유 프로그램", description: "직장인 번아웃 쉼, 가족 농촌체험, 숲 치유, 제철 치유밥상을 목적과 계절에 맞춰 살펴보세요.", alternates: { canonical: "/programs" } };

export default function ProgramsPage() {
  return <PageLayout eyebrow="HEALING PROGRAMS" title="내 몸의 속도를 되찾는 시간" description="숲·계곡·농촌·밥상을 엮어 지금의 나에게 필요한 쉼을 고릅니다." image="/images/quiet-time-3.png">
    <Section kicker="프로그램" title="누구와, 언제 오시나요?" intro="대상과 계절에 따라 활동 강도와 순서를 조정합니다. 연출 이미지는 프로그램의 분위기와 활동 이해를 돕기 위한 자료입니다."><div className="program-list">{programs.map((program) => { const connection = isProgramSlug(program.slug) ? programConnections[program.slug] : null; return <Link href={`/programs/${program.slug}`} className="program-row" key={program.slug}><Image src={connection?.listImage ?? program.image} alt={connection?.listAlt ?? program.title} width={720} height={405} sizes="(max-width: 767px) calc(100vw - 40px), 360px"/><div><p className="meta">{program.category ? `${program.category} · ` : ""}{program.audience} · {program.duration ?? program.season}</p><h3>{program.title}</h3><p>{program.summary}</p><ul>{program.highlights.slice(0,3).map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul><span className="text-link">자세히 보기 <ArrowRight size={17}/></span></div></Link>; })}</div></Section>
    <Section title="계절에 맞춰 달라지는 경험" tone="cream"><div className="season-grid"><article><b>봄</b><h3>새순과 흙의 감각</h3><p>밭 준비, 나물과 꽃 관찰, 가벼운 숲길 걷기</p></article><article><b>여름</b><h3>차가운 계곡 쉼</h3><p>물가 명상, 풍욕, 그늘 아래 느린 휴식</p></article><article><b>가을</b><h3>수확과 깊은 숲</h3><p>제철 농작물, 에코염색, 선선한 트레킹</p></article><article><b>겨울</b><h3>따뜻한 회복</h3><p>약초 족욕, 소리 명상, 산촌 밥상 중심 구성</p></article></div></Section>
    <Section title="이용 전 확인해 주세요"><div className="guide-strip"><CalendarDays/><div><h3>일정과 준비물</h3><p>프로그램은 날씨, 계절, 참여 연령에 따라 조정될 수 있습니다. 식이 제한과 이동상 어려움은 상담 때 알려주세요.</p></div></div></Section>
    <div className="container"><TravelBanner /></div>
    <section className="action-band"><div className="container"><div><h2>예약 상품과 맞춤 프로그램을 구분해 확인하세요</h2><p>네이버 예약에 표시되는 상품만 직접 예약할 수 있습니다. 그 외 프로그램은 날짜와 인원을 알려주시면 가능 여부를 상담합니다.</p></div><div className="program-booking-actions"><NaverBookingLink className="button button-light" position="programs-bottom">네이버 예약 상품 확인</NaverBookingLink><ConsultationLink className="button button-ghost" href="/contact?type=program" type="stay" position="programs-bottom">프로그램 맞춤 상담</ConsultationLink></div></div></section>
  </PageLayout>;
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { programs } from "@/data/site";

export const metadata: Metadata = { title: "치유 프로그램", description: "직장인 번아웃 쉼, 가족 농촌체험, 숲 치유, 제철 치유밥상을 목적과 계절에 맞춰 살펴보세요.", alternates: { canonical: "/programs" } };

export default function ProgramsPage() {
  return <PageLayout eyebrow="HEALING PROGRAMS" title="내 몸의 속도를 되찾는 시간" description="숲·계곡·농촌·밥상을 엮어 지금의 나에게 필요한 쉼을 고릅니다." image="/images/quiet-time-3.png">
    <Section kicker="프로그램" title="누구와, 언제 오시나요?" intro="대상과 계절에 따라 활동 강도와 순서를 조정합니다."><div className="program-list">{programs.map((program) => <Link href={`/programs/${program.slug}`} className="program-row" key={program.slug}><Image src={program.image} alt={program.title} width={720} height={520}/><div><p className="meta">{program.audience} · {program.season}</p><h3>{program.title}</h3><p>{program.summary}</p><ul>{program.highlights.slice(0,3).map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul><span className="text-link">자세히 보기 <ArrowRight size={17}/></span></div></Link>)}</div></Section>
    <Section title="계절에 맞춰 달라지는 경험" tone="cream"><div className="season-grid"><article><b>봄</b><h3>새순과 흙의 감각</h3><p>밭 준비, 나물과 꽃 관찰, 가벼운 숲길 걷기</p></article><article><b>여름</b><h3>차가운 계곡 쉼</h3><p>물가 명상, 풍욕, 그늘 아래 느린 휴식</p></article><article><b>가을</b><h3>수확과 깊은 숲</h3><p>제철 농작물, 에코염색, 선선한 트레킹</p></article><article><b>겨울</b><h3>따뜻한 회복</h3><p>약초 족욕, 소리 명상, 산촌 밥상 중심 구성</p></article></div></Section>
    <Section title="이용 전 확인해 주세요"><div className="guide-strip"><CalendarDays/><div><h3>일정과 준비물</h3><p>프로그램은 날씨, 계절, 참여 연령에 따라 조정될 수 있습니다. 식이 제한과 이동상 어려움은 상담 때 알려주세요.</p></div></div></Section>
    <ActionBand title="지금 필요한 쉼을 함께 구성합니다" text="날짜와 인원, 방문 목적을 알려주시면 가능한 프로그램을 확인합니다." />
  </PageLayout>;
}

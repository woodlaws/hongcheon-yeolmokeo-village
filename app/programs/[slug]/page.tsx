import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Clock3, Leaf, Users } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { ConsultationLink, NaverBookingLink } from "@/components/booking-links";
import { programs } from "@/data/site";
import { isProgramSlug } from "@/data/program-connections";
import { ProgramActivityGallery, ProgramRelatedStories } from "@/components/program-content";
import { TravelBanner } from "@/components/travel-banner";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return programs.filter(({ slug }) => slug !== "98-staywork").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const p = programs.find(x=>x.slug===slug); if(!p) return {}; return { title:p.title, description:p.summary, alternates:{ canonical:`/programs/${slug}` } }; }

export default async function ProgramDetail({ params }: Props) {
  const { slug } = await params; const program = programs.find(item=>item.slug===slug); if(!program) notFound();
  if (!isProgramSlug(program.slug)) notFound();
  const baseUrl="https://hongcheon-yeolmokeo.vercel.app";
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"홈",item:baseUrl},{"@type":"ListItem",position:2,name:"치유 프로그램",item:`${baseUrl}/programs`},{"@type":"ListItem",position:3,name:program.title,item:`${baseUrl}/programs/${program.slug}`} ]};
  return <><PageLayout eyebrow="PROGRAM DETAIL" title={program.title} description={program.summary} image={program.image}>
    <Section title="이런 분께 권합니다"><div className="detail-summary"><div className="detail-facts"><span><Users/>대상<strong>{program.audience}</strong></span><span><Leaf/>추천 계절<strong>{program.season}</strong></span><span><Clock3/>운영 시간<strong>상담 후 구성</strong></span></div><div><h3>주요 경험</h3><ul className="check-list">{program.highlights.map(item=><li key={item}><Check/>{item}</li>)}</ul></div></div></Section>
    <ProgramActivityGallery programSlug={program.slug} />
    <Section title="하루의 흐름 예시" intro="실제 순서와 시간은 계절, 날씨, 인원에 맞춰 조정됩니다." tone="cream"><ol className="timeline"><li><span>01</span><div><h3>도착과 천천히 전환하기</h3><p>마을 소개를 듣고 일상에서 자연의 리듬으로 속도를 낮춥니다.</p></div></li><li><span>02</span><div><h3>핵심 치유 활동</h3><p>{program.highlights.slice(0,2).join("과 ")}을 중심으로 오감을 깨웁니다.</p></div></li><li><span>03</span><div><h3>제철 밥상과 나눔</h3><p>지역 식재료로 차린 식사와 조용한 대화로 경험을 정리합니다.</p></div></li></ol></Section>
    <Section title="준비와 예약 안내"><div className="notice-card"><h3>준비물</h3><p>{program.preparation}</p><h3>요금·예약</h3><p>네이버 예약에 표시되는 상품만 직접 예약할 수 있습니다. 이 프로그램이 예약 상품에 없다면 희망 날짜와 인원을 남겨 맞춤 상담을 이용해 주세요.</p><div className="program-booking-actions"><NaverBookingLink className="button button-primary" position={`program-${program.slug}`}>네이버 예약 상품 확인</NaverBookingLink><ConsultationLink className="button button-outline" href={`/contact?type=program&program=${program.slug}`} type="program" position={`program-${program.slug}`}>이 프로그램 상담</ConsultationLink></div></div></Section>
    <div className="container"><TravelBanner /></div>
    <ProgramRelatedStories programSlug={program.slug} />
    <ActionBand title={`${program.title}, 상담부터 시작하세요`} text="참여자의 연령과 컨디션에 맞는 안전한 흐름을 함께 정합니다." href={`/contact?type=program&program=${program.slug}`} label="맞춤 일정 문의하기" />
  </PageLayout><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/></>;
}

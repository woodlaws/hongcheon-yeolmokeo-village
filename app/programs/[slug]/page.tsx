import type { Metadata } from "next";
import Link from "@/components/static-link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock3, Leaf, Users } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { programs } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return programs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const p = programs.find(x=>x.slug===slug); if(!p) return {}; return { title:p.title, description:p.summary, alternates:{ canonical:`/programs/${slug}` } }; }

export default async function ProgramDetail({ params }: Props) {
  const { slug } = await params; const program = programs.find(item=>item.slug===slug); if(!program) notFound();
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"홈",item:"https://hongcheon-yeolmokeo-village.geosangbruce.chatgpt.site"},{"@type":"ListItem",position:2,name:"치유 프로그램",item:"https://hongcheon-yeolmokeo-village.geosangbruce.chatgpt.site/programs"},{"@type":"ListItem",position:3,name:program.title,item:`https://hongcheon-yeolmokeo-village.geosangbruce.chatgpt.site/programs/${program.slug}`} ]};
  return <><PageLayout eyebrow="PROGRAM DETAIL" title={program.title} description={program.summary} image={program.image}>
    <Section title="이런 분께 권합니다"><div className="detail-summary"><div className="detail-facts"><span><Users/>대상<strong>{program.audience}</strong></span><span><Leaf/>추천 계절<strong>{program.season}</strong></span><span><Clock3/>운영 시간<strong>상담 후 구성</strong></span></div><div><h3>주요 경험</h3><ul className="check-list">{program.highlights.map(item=><li key={item}><Check/>{item}</li>)}</ul></div></div></Section>
    <Section title="하루의 흐름 예시" intro="실제 순서와 시간은 계절, 날씨, 인원에 맞춰 조정됩니다." tone="cream"><ol className="timeline"><li><span>01</span><div><h3>도착과 천천히 전환하기</h3><p>마을 소개를 듣고 일상에서 자연의 리듬으로 속도를 낮춥니다.</p></div></li><li><span>02</span><div><h3>핵심 치유 활동</h3><p>{program.highlights.slice(0,2).join("과 ")}을 중심으로 오감을 깨웁니다.</p></div></li><li><span>03</span><div><h3>제철 밥상과 나눔</h3><p>지역 식재료로 차린 식사와 조용한 대화로 경험을 정리합니다.</p></div></li></ol></Section>
    <Section title="준비와 예약 안내"><div className="notice-card"><h3>준비물</h3><p>{program.preparation}</p><h3>요금·예약</h3><p>확정된 가격과 실시간 잔여 좌석은 현재 공개 전입니다. 희망 날짜와 인원을 남기면 운영자가 확인 후 안내합니다.</p><Link href={`/contact?program=${program.slug}`} className="button button-primary">이 프로그램 문의 <ArrowRight size={18}/></Link></div></Section>
    <ActionBand title={`${program.title}, 상담부터 시작하세요`} text="참여자의 연령과 컨디션에 맞는 안전한 흐름을 함께 정합니다." href={`/contact?program=${program.slug}`} label="일정 문의하기" />
  </PageLayout><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/></>;
}

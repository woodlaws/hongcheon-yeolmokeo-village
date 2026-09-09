import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { press, testimonials } from "@/data/site";

export const metadata: Metadata={title:"소식·후기",description:"홍천 열목어마을의 프로그램 현장, 치유농업 운영 사례, 언론 보도와 방문 이야기를 확인하세요.",alternates:{canonical:"/stories"}};
export default function StoriesPage(){return <PageLayout eyebrow="STORIES" title="마을에 머문 시간의 기록" description="프로그램 현장과 확인된 보도 자료, 방문객의 이야기를 차곡차곡 전합니다." image="/images/singing-bowl.png">
  <Section kicker="현장" title="마을에서 실제로 만나는 장면"><div className="card-grid three"><article className="image-card"><Image src="/images/singing-bowl.png" alt="열목어마을 싱잉볼 치유 프로그램" width={720} height={520}/><div><h3>소리로 고요해지는 시간</h3><p>계곡물과 싱잉볼의 울림에 호흡을 맞춥니다.</p></div></article><article className="image-card"><Image src="/images/farm-experience.png" alt="열목어마을 농촌 체험" width={720} height={520}/><div><h3>손끝으로 만나는 계절</h3><p>밭의 식물을 직접 살피며 농촌의 속도를 배웁니다.</p></div></article><article className="image-card"><Image src="/images/healing-table.jpg" alt="열목어마을 제철 치유밥상" width={720} height={520}/><div><h3>함께 먹는 산촌 밥상</h3><p>지역 식재료와 계절 이야기를 한 상에 담습니다.</p></div></article></div></Section>
  <Section title="확인된 보도와 운영 사례" tone="cream"><div className="press-list">{press.map(item=><a href={item.href} target="_blank" rel="noreferrer" key={item.href}><span>{item.label}</span><div><h3>{item.title}</h3><p>{item.source}</p></div><ExternalLink/></a>)}</div></Section>
  <Section title="쉬고 간 사람들의 이야기" intro="아래 문구는 레이아웃 확인을 위한 샘플이며 실제 후기 수집 후 교체합니다."><div className="testimonial-grid">{testimonials.map(item=><blockquote key={item.quote}><span>샘플 후기</span><p>“{item.quote}”</p><cite>{item.author}</cite></blockquote>)}</div></Section>
  <ActionBand title="다음 이야기는 당신의 쉼에서 시작됩니다" text="지금 필요한 숙박과 프로그램을 편하게 문의해 주세요." />
</PageLayout>}

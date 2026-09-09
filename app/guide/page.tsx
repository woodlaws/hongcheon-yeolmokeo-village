import type { Metadata } from "next";
import { Car, CloudSun, MapPinned, PackageCheck } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { faqs, itineraries, siteConfig } from "@/data/site";

export const metadata: Metadata={title:"여행 안내",description:"홍천 열목어마을 1박 2일·2박 3일 일정, 계절별 여행법, 교통·주차, 준비물과 FAQ를 확인하세요.",alternates:{canonical:"/guide"}};
export default function GuidePage(){const faqJson={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};return <><PageLayout eyebrow="TRAVEL GUIDE" title="머무는 시간만큼 깊어지는 쉼" description="산촌의 날씨와 이동 시간을 고려해 조금 느슨한 일정으로 준비해 주세요." image="/images/forest-3.jpg">
  <Section kicker="추천 일정" title="하루 더 머물수록 달라지는 경험"><div className="card-grid two">{itineraries.map(plan=><article className="plan-card" key={plan.duration}><p className="meta">{plan.duration}</p><h3>{plan.title}</h3><ol>{plan.items.map(item=><li key={item}>{item}</li>)}</ol><p className="status">{plan.includes}</p></article>)}</div></Section>
  <Section title="계절과 방문 준비" tone="cream"><div className="facts-grid"><article><CloudSun/><h3>계절</h3><p>산간 지역은 일교차가 큽니다. 여름에도 얇은 겉옷을 준비하세요.</p></article><article><Car/><h3>교통·주차</h3><p>대중교통 연결과 단체버스 진입은 출발 전 확인이 필요합니다.</p></article><article><PackageCheck/><h3>준비물</h3><p>편한 신발, 개인 세면도구, 물병, 계절별 방한·우천 용품</p></article><article><MapPinned/><h3>주변 여행</h3><p>삼봉자연휴양림과 삼봉약수 등은 운영·입장 정보를 별도 확인하세요.</p></article></div><div className="location-card"><div><strong>목적지</strong><p>{siteConfig.address}</p></div><a className="button button-primary" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">지도에서 보기</a></div></Section>
  <Section title="자주 묻는 질문"><div className="faq-list">{faqs.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></Section>
  <ActionBand title="여행 날짜를 정하셨나요?" text="숙박과 프로그램을 함께 확인하면 더 여유로운 일정을 만들 수 있습니다." />
</PageLayout><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJson)}}/></>}

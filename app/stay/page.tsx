import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { BedDouble, Check, Clock3, Info, Users } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { stays } from "@/data/site";

export const metadata: Metadata = { title:"숙소", description:"홍천 열목어마을의 보금자리, 비움센터, 한옥숙소와 이용·예약 안내를 확인하세요.", alternates:{canonical:"/stay"} };
export default function StayPage(){return <PageLayout eyebrow="STAY" title="숲과 계곡 가까이에서 보내는 밤" description="화려함보다 편안함을, 빠른 일정보다 깊은 잠을 위한 산촌 숙소입니다." image="/images/stay-room.png">
  <Section kicker="숙소 안내" title="머무는 방식에 맞는 공간"><div className="card-grid three">{stays.map(stay=><article className="image-card" key={stay.name}><Image src={stay.image} alt={`${stay.name} 숙박 공간`} width={720} height={520}/><div><p className="meta">{stay.capacity}</p><h3>{stay.name}</h3><p>{stay.description}</p><span className="status"><Info size={15}/>{stay.status}</span></div></article>)}</div></Section>
  <Section title="예약 전 확인할 내용" tone="cream"><div className="facts-grid"><article><BedDouble/><h3>객실 유형</h3><p>보금자리·비움센터·한옥숙소로 구분됩니다.</p></article><article><Users/><h3>수용 인원</h3><p>객실별 정원과 단체 최대 인원은 확인이 필요합니다.</p></article><article><Clock3/><h3>이용 시간</h3><p>입·퇴실 시간은 예약 상담 시 안내합니다.</p></article><article><Check/><h3>편의시설</h3><p>침구와 냉난방 외 세부 비품은 객실별 확인이 필요합니다.</p></article></div></Section>
  <Section title="요금과 취소·환불"><div className="notice-card"><h3>확정 전 정보</h3><p>객실별 요금, 성수기 기준, 식사 포함 여부, 취소·환불 규정은 현재 운영자 확인 중입니다. 임의의 가격을 표시하지 않으며 문의 시 최신 정보를 안내합니다.</p><div className="inline-actions"><Link href="/contact?type=stay" className="button button-primary">예약 문의</Link><Link href="/programs" className="button button-outline">프로그램 함께 보기</Link></div></div></Section>
  <ActionBand title="잠만 자는 숙소보다, 잘 쉬는 하루를 준비하세요" text="숙박과 식사, 치유 프로그램을 한 번에 상담할 수 있습니다." href="/contact?type=stay" label="숙박 상담하기" />
</PageLayout>}

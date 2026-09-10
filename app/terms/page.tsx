import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
export const metadata:Metadata={title:"이용약관",description:"홍천 열목어마을 홈페이지 이용 안내",alternates:{canonical:"/terms"}};
export default function TermsPage(){return <PageLayout eyebrow="POLICY" title="이용약관" description="예약과 맞춤 상담 이용 기준을 안내합니다."><Section title="예약 및 상담 안내"><div className="policy-body"><p>일반 객실의 예약 가능 일정, 이용금액, 결제와 취소 기준은 연결된 네이버 예약 상품 안내를 따릅니다.</p><h3>맞춤 상담</h3><p>단체 방문과 숙박·식사·프로그램 결합 일정은 상담 후 가능 여부와 최종 조건을 안내합니다.</p><h3>가격과 환불</h3><p>결제 전에 네이버 예약 상품 또는 운영자가 안내한 최종 가격과 취소·환불 기준을 확인해 주세요.</p><h3>콘텐츠</h3><p>마을 사진과 글의 권리 및 이용 범위는 운영자와 출처 제공자의 정책을 따릅니다.</p></div></Section></PageLayout>}

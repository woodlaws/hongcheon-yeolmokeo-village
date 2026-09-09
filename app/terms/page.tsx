import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
export const metadata:Metadata={title:"이용약관",description:"홍천 열목어마을 홈페이지 이용 안내",alternates:{canonical:"/terms"}};
export default function TermsPage(){return <PageLayout eyebrow="POLICY" title="이용약관" description="실제 예약·결제 시스템 연결 전 검토용 안내입니다."><Section title="운영 전 확인 사항"><div className="policy-body"><p>현재 사이트는 여행 정보 제공과 상담 준비를 위한 웹사이트이며 온라인 예약 확정이나 결제 기능을 제공하지 않습니다.</p><h3>예약과 계약</h3><p>실제 예약은 운영자 확인과 별도 안내를 거쳐 확정됩니다.</p><h3>가격과 환불</h3><p>객실·프로그램 가격과 취소·환불 기준은 운영 정책 확정 후 게시합니다.</p><h3>콘텐츠</h3><p>마을 사진과 글의 권리 및 이용 범위는 운영자와 출처 제공자의 정책을 따릅니다.</p></div></Section></PageLayout>}

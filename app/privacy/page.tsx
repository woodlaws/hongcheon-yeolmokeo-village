import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
export const metadata:Metadata={title:"개인정보처리방침",description:"홍천 열목어마을 개인정보 수집과 이용 안내",alternates:{canonical:"/privacy"}};
export default function PrivacyPage(){return <PageLayout eyebrow="POLICY" title="개인정보처리방침" description="실제 접수 시스템 연결 전 검토용 안내입니다."><Section title="운영 전 확인 사항"><div className="policy-body"><p>현재 홈페이지는 실제 개인정보를 서버에 저장하거나 운영자에게 전송하지 않습니다.</p><h3>수집 예정 항목</h3><p>이름, 연락처, 이메일, 방문 희망일, 인원, 관심 프로그램, 문의 내용</p><h3>이용 목적</h3><p>숙박·프로그램 예약 상담과 단체 견적 안내</p><h3>운영 전 필요 자료</h3><p>운영 주체, 개인정보 보호책임자, 보유 기간, 파기 절차, 위탁업체 정보를 확정한 뒤 정식 방침으로 교체해야 합니다.</p></div></Section></PageLayout>}

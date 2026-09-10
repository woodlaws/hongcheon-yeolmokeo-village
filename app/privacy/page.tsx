import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
export const metadata:Metadata={title:"개인정보처리방침",description:"홍천 열목어마을 개인정보 수집과 이용 안내",alternates:{canonical:"/privacy"}};
export default function PrivacyPage(){return <PageLayout eyebrow="POLICY" title="개인정보처리방침" description="상담 과정에서 다루는 개인정보와 운영 전 확인 사항을 안내합니다."><Section title="상담 개인정보 안내"><div className="policy-body"><p>현재 홈페이지 상담 양식은 별도 예약 데이터베이스로 전송하거나 저장하지 않습니다. 일반 객실 예약과 결제 과정의 개인정보 처리는 네이버 예약의 안내를 확인해 주세요.</p><h3>상담 시 전달할 수 있는 항목</h3><p>이름, 휴대전화 번호, 이메일, 이용 희망일, 방문 인원과 상담 내용</p><h3>이용 목적</h3><p>단체 방문과 숙박·식사·프로그램 결합 일정 상담 및 이용 안내</p><h3>운영 전 필요 자료</h3><p>향후 온라인 접수 기능을 연결하려면 운영 주체, 개인정보 보호책임자, 정확한 보유 기간, 파기 절차와 데이터 처리 위탁업체를 먼저 확정해야 합니다. 마케팅 수신 동의는 상담 필수 동의와 분리합니다.</p></div></Section></PageLayout>}

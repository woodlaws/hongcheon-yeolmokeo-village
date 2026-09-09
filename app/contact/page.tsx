import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Section } from "@/components/content-blocks";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata={title:"예약·문의",description:"홍천 열목어마을 숙박, 치유 프로그램, 단체 견적과 상품 구매를 문의하세요.",alternates:{canonical:"/contact"}};
export default function ContactPage(){return <PageLayout eyebrow="CONTACT" title="어떤 쉼을 찾고 계신가요?" description="날짜와 인원, 방문 목적을 남기면 운영 가능 여부와 준비 내용을 확인할 수 있습니다." image="/images/quiet-time-1.png">
  <Section title="예약·문의"><div className="contact-layout"><aside className="contact-aside"><h3>방문 정보</h3><div><MapPin/><span><b>주소</b>{siteConfig.address}</span></div><div className="disabled"><Phone/><span><b>전화</b>번호 확인 중</span></div><div className="disabled"><Mail/><span><b>이메일</b>주소 확인 중</span></div><div className="disabled"><MessageCircle/><span><b>카카오톡</b>채널 연결 준비 중</span></div><p className="notice">운영자 연락처가 확정되기 전에는 가상의 번호나 접수 완료 메시지를 사용하지 않습니다.</p></aside><Suspense fallback={<p>문의 양식을 준비하고 있습니다.</p>}><ContactForm/></Suspense></div></Section>
  <Section title="개인정보 수집 안내" tone="cream"><div className="policy-summary"><p>수집 항목: 이름, 연락처, 이메일, 방문 정보, 문의 내용</p><p>이용 목적: 숙박·프로그램·단체 견적 상담</p><p>보유 기간: 실제 접수 시스템 연결 시 운영 정책에 따라 고지 예정</p></div></Section>
</PageLayout>}

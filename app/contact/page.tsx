import type { Metadata } from "next";
import { Suspense } from "react";
import { PageLayout } from "@/components/page-layout";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata={title:"예약·문의",description:"홍천 열목어마을 숙박, 치유 프로그램, 단체 견적과 상품 구매를 문의하세요.",alternates:{canonical:"/contact"}};
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }){const { type }=await searchParams; const isStay=type==="stay"; return <PageLayout eyebrow="CONTACT" title={isStay ? "숙박·프로그램 맞춤 상담" : "어떤 쉼을 찾고 계신가요?"} description={isStay ? "객실만 예약하실 경우 네이버 예약을 이용해 주세요. 숙박과 치유 프로그램, 식사, 단체 일정을 함께 구성하려면 상담 내용을 남겨주세요." : "날짜와 인원, 방문 목적을 남기면 운영 가능 여부와 준비 내용을 확인할 수 있습니다."} image="/images/quiet-time-1.png">
  <section className="content-section contact-request-section"><div className="container"><Suspense fallback={<p role="status">문의 양식을 불러오는 중입니다.</p>}><ContactForm/></Suspense></div></section>
</PageLayout>}

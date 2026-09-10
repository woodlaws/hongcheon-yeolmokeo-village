import type { Metadata } from "next";
import Link from "@/components/static-link";
import { Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata={title:"마을장터",description:"홍천 내면 지역 농산물과 선연재 식품, 산촌 선물세트와 체험 연계 상품을 소개합니다.",alternates:{canonical:"/market"}};
export default function MarketPage(){return <PageLayout eyebrow="VILLAGE MARKET" title="산촌의 계절을 집으로" description="홍천 내면의 먹거리와 체험 연계 상품은 품목과 수량에 따라 개별 안내합니다." image="/images/healing-table.jpg">
  <Section kicker="마을장터" title="원하는 품목을 직접 문의해 주세요" intro="현재 공개 판매 품목과 가격표가 없어 내용 없는 상품 카드는 표시하지 않습니다. 찾는 농산물이나 선물 용도, 수량을 알려주시면 제공 가능 여부를 안내해 드립니다."><div className="notice-card"><h3>구매 문의 방법</h3><p>문의 페이지에 필요한 품목과 수량을 남기거나 공식 연락처로 문의해 주세요.</p><div className="inline-actions"><Link href="/contact?type=market" className="button button-primary"><Mail size={17}/>문의 내용 작성</Link><a href={siteConfig.contact.phoneHref} className="button button-outline"><Phone size={17}/>{siteConfig.contact.phoneDisplay}</a></div></div></Section>
  <ActionBand title="찾는 농산물이나 선물 구성이 있나요?" text="원하는 품목과 수량을 남겨주시면 준비 가능 여부를 확인합니다." href="/contact?type=market" label="상품 구매 문의" />
</PageLayout>}

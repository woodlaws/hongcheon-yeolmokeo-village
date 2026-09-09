import type { Metadata } from "next";
import Link from "@/components/static-link";
import { PackageOpen, ShoppingBag } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";
import { products } from "@/data/site";

export const metadata: Metadata={title:"마을장터",description:"홍천 내면 지역 농산물과 선연재 식품, 산촌 선물세트와 체험 연계 상품을 소개합니다.",alternates:{canonical:"/market"}};
export default function MarketPage(){return <PageLayout eyebrow="VILLAGE MARKET" title="산촌의 계절을 집으로" description="마을과 이웃 농가의 먹거리, 체험의 기억을 잇는 상품을 준비하고 있습니다." image="/images/healing-table.jpg">
  <Section kicker="마을장터" title="지금은 상품을 준비하고 있습니다" intro="실제 품목과 가격이 확정된 뒤 공개합니다. 결제 대신 구매 문의로 연결됩니다."><div className="card-grid two">{products.map(product=><article className="product-card" key={product.name}><PackageOpen/><div><p className="status">{product.status}</p><h3>{product.name}</h3><p>{product.note}</p><Link href={`/contact?type=market&product=${encodeURIComponent(product.name)}`} className="text-link"><ShoppingBag size={17}/>구매 문의</Link></div></article>)}</div></Section>
  <ActionBand title="찾는 농산물이나 선물 구성이 있나요?" text="원하는 품목과 수량을 남겨주시면 준비 가능 여부를 확인합니다." href="/contact?type=market" label="상품 구매 문의" />
</PageLayout>}

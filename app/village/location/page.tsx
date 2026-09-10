import type { Metadata } from "next";
import { Bus, Car, CircleParking, ExternalLink, MapPin, Phone } from "lucide-react";
import { CopyAddressButton } from "@/components/copy-address-button";
import { VillagePageFrame } from "@/components/village-page-frame";
import { villageOfficial, villageSources } from "@/data/village-pages";

export const metadata: Metadata = { title: "찾아오시는 길｜홍천 열목어마을", description: "강원특별자치도 홍천군 내면 명개로 98, 홍천 열목어마을의 주소·지도·전화와 방문 전 교통 확인사항을 안내합니다.", alternates: { canonical: "/village/location" } };
export default function LocationPage() { return <VillagePageFrame eyebrow="LOCATION & VISIT" title="산길 끝에서 만나는 조용한 마을" description="정확한 목적지를 확인하고, 산간 지역의 날씨와 교통 여건을 살핀 뒤 여유 있게 출발해 주세요." image="/images/village-arrival.png" imageAlt="산과 나무에 둘러싸인 홍천 열목어마을 방문 시설">
  <section className="village-location"><div className="container">
    <div className="location-primary"><article><p className="section-kicker">OFFICIAL ADDRESS</p><h2>홍천 열목어마을</h2><address><MapPin aria-hidden="true" />{villageOfficial.address}</address><div className="village-inline-actions"><CopyAddressButton address={villageOfficial.address} /><a href={villageOfficial.naverMap} target="_blank" rel="noreferrer" className="button button-primary">네이버 지도 길찾기 <ExternalLink size={16} /></a></div><a className="location-phone" href={villageOfficial.phoneHref}><Phone aria-hidden="true" /><span><small>방문·운영 문의</small><b>{villageOfficial.phoneDisplay}</b></span></a><p className="location-source">주소와 전화는 홍천군 문화관광포털 및 2026년 홍천군 공식 안내를 기준으로 확인했습니다.</p></article><iframe src={villageOfficial.googleEmbed} title="홍천 열목어마을 위치 지도" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    <div className="location-guides"><article><Car /><h2>자가용 방문</h2><p>내비게이션에서 ‘홍천 열목어마을’ 또는 도로명 주소를 검색하세요. 산간 도로의 기상과 노면 상태는 달라질 수 있으므로 출발 전 확인하고 여유 있게 이동해 주세요.</p></article><article><Bus /><h2>대중교통</h2><p>노선과 시간표가 변경될 수 있어 이 페이지에서 고정 시간표를 안내하지 않습니다. 홍천군 버스 정보와 지도 앱에서 당일 경로를 확인하고, 마지막 구간 이동 방법은 마을에 미리 문의해 주세요.</p></article><article><CircleParking /><h2>주차 안내</h2><p>방문객 차량의 현장 주차 가능 여부는 사전에 문의해 주세요. 주차 대수와 대형버스 진입 가능 여부는 확인되지 않아 보장하지 않습니다.</p></article></div>
    <aside className="location-distinction"><WavesIcon /><div><h2>마을과 열목어 서식지는 다른 목적지입니다</h2><p>마을 주소는 <b>명개로 98</b>입니다. 홍천군이 안내하는 ‘홍천 명개리 열목어 서식지’는 <b>명개로 260-12, 계방천 일원</b>으로 마을에서 약 1.6km 떨어진 보호 장소입니다. 서식지 방문 시 현장 출입 규정과 안내를 따르세요.</p><a href={villageSources.habitat} target="_blank" rel="noreferrer">홍천군 서식지 안내 확인 <ExternalLink size={15} /></a></div></aside>
  </div></section>
 </VillagePageFrame>; }
function WavesIcon() { return <MapPin aria-hidden="true" />; }

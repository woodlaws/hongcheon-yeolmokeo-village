import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";
import Link from "@/components/static-link";
import { VillagePageFrame } from "@/components/village-page-frame";

export const metadata: Metadata = { title: "인사말｜홍천 열목어마을", description: "깊은 숲과 맑은 물 곁에서 천천히 쉬어가는 분들을 맞이하는 홍천 열목어마을의 환영 인사입니다.", alternates: { canonical: "/village/greeting" } };

export default function GreetingPage() {
  return <VillagePageFrame eyebrow="WELCOME TO OUR VILLAGE" title="자연 곁에서 쉬어가는 시간, 열목어마을에 오신 것을 환영합니다" description="서두르던 걸음을 잠시 늦추고, 나와 곁의 사람에게 다시 가까워지는 산촌의 시간입니다." imageAlt="홍천 열목어마을 건물과 넓은 잔디마당 전경">
    <section className="village-greeting-section"><div className="container village-greeting-layout">
      <div className="village-greeting-photo"><Image src="/images/yeolmokeo-village-entrance.png" width={1295} height={1738} sizes="(max-width: 767px) calc(100vw - 40px), 420px" alt="물고기 조형물과 열목어마을 이름이 있는 마을 입구 표지판" /></div>
      <article><p className="section-kicker">A WARM WELCOME</p><h2>잘 쉬었다는 마음을 안고 돌아가실 수 있도록</h2>
        <p>홍천의 산길을 따라 열목어마을에 닿으면, 도시에서 익숙했던 속도와 소리가 조금씩 멀어집니다. 맑은 물이 흐르고 숲의 바람이 머무는 이곳에서 잠시 호흡을 고르시길 바랍니다.</p>
        <p>열목어마을은 특별한 일을 많이 해야만 좋은 여행이 된다고 생각하지 않습니다. 계곡물 소리를 듣고, 제철 재료로 마련한 밥상을 나누고, 조용한 산촌의 아침을 맞는 것만으로도 충분한 쉼이 될 수 있습니다.</p>
        <p>혼자 온 분에게는 자신을 돌보는 여백을, 가족과 친구에게는 함께 이야기할 시간을, 기업과 기관에는 일상의 역할을 잠시 내려놓고 서로를 새롭게 바라볼 기회를 드리고 싶습니다.</p>
        <p>방문하시는 동안 자연과 마을 사람을 서로 존중하며 천천히 머물러 주세요. 돌아가신 뒤에도 이곳에서 되찾은 호흡과 따뜻함이 오래 이어지기를 바랍니다.</p>
        <div className="village-inline-actions"><Link href="/village/vision" className="button button-primary">마을 비전 보기 <ArrowRight size={17} /></Link><Link href="/programs" className="button button-outline">체험 둘러보기</Link></div>
      </article>
    </div></section>
    <section className="village-welcome-values"><div className="container"><article><Leaf /><h3>자연의 속도</h3><p>계곡과 숲의 리듬에 맞춰 천천히 쉽니다.</p></article><article><Heart /><h3>따뜻한 돌봄</h3><p>방문 목적과 컨디션에 맞는 시간을 함께 찾습니다.</p></article><article><Users /><h3>편안한 교류</h3><p>마을과 방문객이 서로를 존중하며 만납니다.</p></article></div></section>
  </VillagePageFrame>;
}

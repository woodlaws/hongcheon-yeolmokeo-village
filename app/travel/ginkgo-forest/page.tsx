import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { ginkgoImages, ginkgoCredit, ginkgoSource } from "@/data/ginkgo";
import { travelSources } from "@/data/travel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "홍천 은행나무숲 | 황금빛 가을 산책",
  alternates: { canonical: "/travel/ginkgo-forest" },
  description: "약 2,000그루의 은행나무가 만드는 홍천의 황금빛 산책길. 실제 가을 풍경과 방문 전 확인할 정보를 만나보세요.",
  openGraph: { title: "홍천 은행나무숲 — 황금빛 가을 산책", images: [{ url: ginkgoImages.hero.src, width: 720, height: 480, alt: ginkgoImages.hero.alt }] },
  twitter: { card: "summary_large_image", images: [ginkgoImages.hero.src] },
};

export default function GinkgoForest() {
  return <><SiteHeader /><main className={styles.page}>
    <div className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/">홈</Link><span>/</span><Link href="/travel">주변 여행지</Link><span>/</span><span>홍천 은행나무숲</span></nav>
      <section className={styles.hero}>
        <div className={styles.intro}><span className={styles.badge}>가을 명소 · 은행나무길 · 사진 여행</span><p className={styles.kicker}>GOLDEN AUTUMN IN HONGCHEON</p><h1>홍천 은행나무숲</h1><p className={styles.lead}>가을이 노랗게 내려앉은 길,<br />천천히 걸어보세요.</p><p>약 2,000그루의 은행나무가 줄지어 선 숲. 머리 위의 황금빛 은행잎과 발아래 쌓인 낙엽이 홍천의 가을을 선명하게 전합니다.</p><a href="#visit" className="button button-primary">방문 전 안내 보기</a></div>
        <figure><Image src={ginkgoImages.hero.src} alt={ginkgoImages.hero.alt} width={720} height={480} priority sizes="(max-width: 767px) 100vw, 60vw" /><figcaption>사진: <a href={ginkgoSource} target="_blank" rel="noreferrer">{ginkgoCredit}</a></figcaption></figure>
      </section>
      <section className={styles.gallery} aria-labelledby="scenery"><header><p className={styles.kicker}>WALK UNDER THE GOLD</p><h2 id="scenery">노란 숲 사이로, 한 걸음씩</h2><p>규칙적으로 늘어선 나무 사이를 걷고, 서로 다른 방향에서 가을빛을 만나보세요.</p></header><div className={styles.photos}>{[
        { ...ginkgoImages.card, title: "황금빛 은행나무 터널", text: "양옆으로 이어진 노란 가지가 산책길을 감싸는 풍경입니다." },
        { ...ginkgoImages.path, title: "은행잎 아래 쉬어가는 길", text: "숲 안쪽의 흙길을 따라 한층 느린 걸음으로 가을을 즐겨보세요." },
      ].map(photo => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={720} height={480} sizes="(max-width: 767px) 100vw, 50vw" style={{ objectPosition: photo.position }} /><figcaption><h3>{photo.title}</h3><p>{photo.text}</p><small>사진: <a href={ginkgoSource} target="_blank" rel="noreferrer">{ginkgoCredit}</a></small></figcaption></figure>)}</div></section>
      <section id="visit" className={styles.visit}><div><span className={styles.badge}>방문 전 공식 안내 확인</span><h2>가을빛은 해마다 조금씩 달라요</h2><p>은행잎이 물드는 시기는 계절과 기상 상황에 따라 달라집니다. 사진은 2019년 10월 촬영된 실제 홍천 은행나무숲의 모습이며, 현재 단풍 상태를 보여주는 실시간 사진은 아닙니다.</p></div><div><h3>출발 전에 확인해 주세요</h3><p>개방 기간, 운영시간, 관람 가능 여부와 주차 조건은 방문 전에 홍천군의 공식 안내를 확인해 주세요.</p><a href={travelSources.ginkgo} target="_blank" rel="noreferrer" className="button button-primary">홍천군 공식 관광정보 확인 ↗</a></div></section>
      <section className={styles.next}><h2>열목어마을에서 이어가는 가을 여행</h2><p>숲길 산책 전후로 마을에서 쉬어가며 여유 있는 일정을 계획해 보세요.</p><Link href="/travel" className="button button-outline">주변 여행지 함께 둘러보기</Link><Link href="/guide" className="button button-outline">마을 여행 안내 보기</Link></section>
    </div>
  </main><SiteFooter /><MobileCta /></>;
}


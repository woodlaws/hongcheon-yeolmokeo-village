import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, CalendarDays, CheckCircle2, ExternalLink, MapPinned, ShieldCheck } from "lucide-react";
import { NaverBookingLink } from "@/components/booking-links";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { travelCourses, travelFaqs, travelSources } from "@/data/travel";
import { TravelExplorer } from "./travel-explorer";
import styles from "./page.module.css";

const pageUrl = "https://hongcheon-yeolmokeo.vercel.app/travel";
const description = "홍천 열목어마을과 함께 둘러보기 좋은 통마름계곡, 삼봉자연휴양림, 삼봉약수, 은행나무숲, 계방산, 오대산 여행코스를 확인해 보세요.";

export const metadata: Metadata = {
  title: "홍천 열목어마을 주변 관광지 | 삼봉자연휴양림·은행나무숲·오대산 여행",
  description,
  alternates: { canonical: "/travel" },
  openGraph: { title: "홍천 열목어마을 주변 관광지 | 삼봉자연휴양림·은행나무숲·오대산 여행", description, url: pageUrl, type: "website", locale: "ko_KR", siteName: "홍천 열목어마을" },
};

export default function TravelPage() {
  const faqJson = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: travelFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const breadcrumbJson = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://hongcheon-yeolmokeo.vercel.app/" }, { "@type": "ListItem", position: 2, name: "주변 여행", item: pageUrl }] };

  return <><SiteHeader /><main className={styles.page}>
    <section className={styles.hero} aria-labelledby="travel-title"><Image src="/images/village-main-hero.jpg" alt="홍천 열목어마을 건물과 잔디마당 전경" fill priority sizes="100vw" /><div className={styles.heroShade} /><div className={`container ${styles.heroCopy}`}><p>AROUND YEOLMOKEO</p><h1 id="travel-title">열목어마을에서 시작하는<br />홍천 자연여행</h1><span>마을 앞 계곡부터 삼봉자연휴양림, 은행나무숲과 오대산까지. 하루로는 아쉬운 홍천의 자연을 천천히 둘러보세요.</span><div><a className="button button-light" href="#courses">추천 코스 보기 <ArrowRight size={17} /></a><NaverBookingLink className="button button-ghost" position="travel-hero">열목어마을 예약하기</NaverBookingLink></div></div></section>

    <section className={styles.places} aria-labelledby="places-title"><div className="container"><header className={styles.heading}><p>NEARBY PLACES</p><h2 id="places-title">열목어마을과 함께 즐기는 주변 여행</h2><span>맑은 계곡과 깊은 숲, 계절마다 달라지는 홍천의 자연을 열목어마을에서 만나보세요.</span></header><TravelExplorer /><aside className={styles.sourceNote}><ShieldCheck aria-hidden="true" /><div><b>정보 확인 기준 · 2026년 9월 10일</b><p>열목어마을 기준 거리는 <a href={travelSources.village} target="_blank" rel="noreferrer">홍천군 문화관광포털</a>에서 확인했습니다. 실제 차량 시간은 교통·기상과 목적지 입구에 따라 달라 지도에서 확인해 주세요.</p></div></aside></div></section>

    <section className={styles.courses} id="courses" aria-labelledby="courses-title"><div className="container"><header className={styles.heading}><p>SLOW TRAVEL ROUTES</p><h2 id="courses-title">머무는 시간과 계절에 맞춘 추천 코스</h2><span>실제 소요시간을 단정하지 않고 방문 순서와 확인사항을 중심으로 안내합니다.</span></header><div className={styles.courseGrid}>{travelCourses.map((course) => <article key={course.id}><header><span>{course.label}</span><b>{course.schedule}</b></header><h3>{course.title}</h3><dl><div><dt>추천 대상</dt><dd>{course.audience}</dd></div><div><dt>추천 계절</dt><dd>{course.season}</dd></div></dl><ol>{course.steps.map((step, index) => <li key={step}><i>{String(index + 1).padStart(2, "0")}</i><span>{step}</span></li>)}</ol><p>{course.note}</p><NaverBookingLink className="button button-primary" position={`travel-course-${course.id}`}>이 코스로 예약하기</NaverBookingLink></article>)}</div></div></section>

    <section className={styles.checks} aria-labelledby="checks-title"><div className={`container ${styles.checkLayout}`}><div><p className={styles.eyebrow}>BEFORE YOU GO</p><h2 id="checks-title">여행 전, 오늘의 현장 정보를 확인하세요</h2><p>산촌의 길과 계곡, 탐방로는 계절과 날씨에 따라 조건이 달라집니다.</p><div className={styles.officialLinks}><a href={travelSources.sambong} target="_blank" rel="noreferrer">숲나들e 휴양림 정보 <ExternalLink size={14} /></a><a href={travelSources.odaesanCourses} target="_blank" rel="noreferrer">국립공원 탐방로 정보 <ExternalLink size={14} /></a><a href={travelSources.ginkgo} target="_blank" rel="noreferrer">홍천군 관광정보 <ExternalLink size={14} /></a></div></div><div className={styles.faq}>{travelFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className={styles.safety} aria-label="여행 안전 핵심 안내"><div className="container"><article><CalendarDays /><b>개방 일정 확인</b><span>은행나무숲과 시설 운영일은 공식 공지 기준</span></article><article><MapPinned /><b>실시간 경로 확인</b><span>출발지와 탐방 입구에 맞는 지도 경로 확인</span></article><article><CheckCircle2 /><b>계곡·산행 안전</b><span>수위·일몰·기상·탐방로 통제를 출발 당일 확인</span></article></div></section>

    <section className={styles.final} aria-labelledby="travel-final-title"><Image src="/images/stay-room.png" alt="홍천 열목어마을에서 주변 자연여행 후 편안하게 머무는 숙박 공간" fill sizes="100vw" /><div /><div className="container"><p>여행의 속도를 낮추는 산촌의 밤</p><h2 id="travel-final-title">좋은 여행은 서두르지 않을 때<br />더 오래 남습니다</h2><span>열목어마을에서 머물며 홍천의 계곡과 숲, 산을 천천히 만나보세요.</span><div><NaverBookingLink className="button button-light" position="travel-final">네이버에서 예약하기</NaverBookingLink><Link className="button button-ghost" href="/programs">열목어마을 프로그램 보기</Link></div></div></section>
  </main><SiteFooter /><MobileCta /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} /></>;
}

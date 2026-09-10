import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import {
  BedDouble,
  BriefcaseBusiness,
  Check,
  Coffee,
  Footprints,
  House,
  Leaf,
  Mail,
  Map,
  Phone,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import { NaverBookingLink, PhoneReservationLink } from "@/components/booking-links";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TravelBanner } from "@/components/travel-banner";
import { ProgramActivityGallery, ProgramRelatedStories } from "@/components/program-content";
import { siteConfig } from "@/data/site";
import styles from "./page.module.css";

const title = "98 스테이워크 | 홍천 열목어마을 웰니스 워케이션";
const description = "홍천 열목어마을에서 업무와 휴식, 자연 치유 프로그램과 지역 식사를 함께 경험하는 2박 3일 웰니스 워케이션입니다.";
const poster = "/images/programs/98-staywork-poster.png";
const emailHref = "mailto:mgrbest98@naver.com?subject=98%20스테이워크%20문의";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/programs/98-staywork" },
  openGraph: {
    title,
    description,
    url: "/programs/98-staywork",
    type: "website",
    images: [{ url: poster, width: 1122, height: 1402, alt: "홍천 열목어마을 숲과 계곡에서 일하고 쉬는 98 스테이워크" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [poster] },
};

const benefits = [
  { icon: BriefcaseBusiness, title: "공유 사무공간", text: "몰입을 위한 두 곳의 업무 공간을 자유롭게 이용할 수 있습니다.", detail: "사랑방 · 비움센터 오피스" },
  { icon: BedDouble, title: "편안한 숙박 공간", text: "업무를 마친 뒤 조용히 쉴 수 있는 객실을 제공합니다.", detail: "공개 자료 기준 프라이빗 객실 7개" },
  { icon: Leaf, title: "3가지 농촌 치유 프로그램", text: "숲과 자연을 활용한 프로그램으로 일상에서 잠시 벗어나 자신에게 집중하는 시간을 갖습니다.", detail: "숲 산책 · 아로마 티블렌딩 · 약초 족욕" },
  { icon: Utensils, title: "지역 제철 식단", text: "홍천 지역의 제철 농산물과 마을 먹거리를 활용한 식사를 제공합니다.", detail: "삼시세끼 · 다과와 간식" },
];

const spaces = [
  { icon: House, title: "사랑방", text: "이용 안내와 소통, 업무 지원을 위한 커뮤니티 공간입니다." },
  { icon: BriefcaseBusiness, title: "비움센터 오피스", text: "인터넷과 좌석을 갖춘 공동 업무공간입니다." },
  { icon: BedDouble, title: "프라이빗 객실", text: "업무를 마친 뒤 편안하게 휴식할 수 있는 숙박 공간입니다.", note: "공개 자료 기준 7개 객실" },
  { icon: Map, title: "조망대 및 야외 쉼터", text: "탁 트인 자연 풍경을 바라보며 아이디어를 정리하고 잠시 쉴 수 있는 공간입니다." },
];

const wellness = [
  { icon: Footprints, number: "01", title: "숲 산책", text: "숲의 공기와 계곡물 소리를 느끼며 천천히 걷고 일상의 긴장을 내려놓는 시간입니다." },
  { icon: Leaf, number: "02", title: "아로마 티블렌딩", text: "나에게 어울리는 향과 재료를 살펴보고 나만의 차를 직접 만들어보는 프로그램입니다." },
  { icon: Sparkles, number: "03", title: "약초 족욕", text: "따뜻한 약초 족욕을 즐기며 하루 동안 쌓인 피로를 편안하게 풀어보는 시간입니다." },
];

const meals = [
  { label: "아침", title: "속 편한 조식", text: "부담 없이 하루를 시작할 수 있도록 준비한 따뜻한 아침 식사입니다." },
  { label: "점심·저녁", title: "로컬 치유 밥상", text: "홍천의 제철 식재료와 지역 농산물을 활용한 식사를 제공합니다." },
  { label: "상시 제공", title: "다과와 간식", text: "사랑방에서 다과와 과일, 커피 또는 차를 즐길 수 있습니다." },
];

const recommendations = [
  ["원격근무자·IT 직군", "자연 속에서 집중도 높은 업무 환경과 충분한 휴식이 필요한 분"],
  ["크리에이터·기획자·연구자", "새로운 영감과 생각을 정리할 시간이 필요한 분"],
  ["소규모 팀 워크숍", "조용한 환경에서 함께 일하고 대화하며 팀의 방향을 정리하려는 조직"],
  ["웰니스 여행자", "복잡한 일상에서 벗어나 자연과 함께 차분하게 쉬고 싶은 분"],
];

const itinerary = [
  { day: "DAY 1", title: "도착하고 비우기", items: ["열목어마을 도착 및 안내", "객실 배정", "공유 업무공간 이용", "저녁 식사", "자유 휴식"] },
  { day: "DAY 2", title: "집중하고 회복하기", items: ["아침 식사", "오전 업무", "점심 식사", "숲 산책", "아로마 티블렌딩 또는 약초 족욕", "저녁 식사", "자유시간"] },
  { day: "DAY 3", title: "천천히 돌아가기", items: ["아침 식사", "오전 업무 또는 자유 산책", "일정 정리", "퇴실"] },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <header className={styles.sectionHeading}><p>{eyebrow}</p><h2>{title}</h2>{intro ? <span>{intro}</span> : null}</header>;
}

export default function StayworkPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "98 스테이워크",
    serviceType: "웰니스 워케이션",
    description,
    url: "https://hongcheon-yeolmokeo.vercel.app/programs/98-staywork",
    image: `https://hongcheon-yeolmokeo.vercel.app${poster}`,
    provider: { "@type": "Organization", name: "홍천 열목어마을", url: "https://hongcheon-yeolmokeo.vercel.app" },
    offers: { "@type": "Offer", price: "295000", priceCurrency: "KRW", url: siteConfig.stayworkBookingUrl, description: "가격 적용 기준과 예약 가능 일정은 예약 전 확인이 필요합니다." },
  };

  return <><SiteHeader /><main className={styles.page}>
    <section className={styles.hero} aria-labelledby="staywork-title">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>WELLNESS WORKCATION</p>
          <h1 id="staywork-title">98 스테이워크</h1>
          <p className={styles.heroLead}>숲에서 일하고, 자연에서 쉬는 2박 3일</p>
          <p className={styles.heroText}>청정한 농촌 자연 속에서 일과 휴식, 치유를 함께 경험하며 온전히 나를 돌보는 웰니스 워케이션입니다.</p>
          <div className={styles.badges} aria-label="프로그램 주요 정보"><span>2박 3일</span><span>5인 이상</span><span>업무 공간 제공</span><span>숙박·식사·치유 프로그램</span></div>
          <div className={styles.heroActions}><NaverBookingLink href={siteConfig.stayworkBookingUrl} className="button button-primary" position="staywork-hero">네이버에서 예약하기</NaverBookingLink><a className="button button-outline" href={emailHref}>맞춤 일정 문의 <Mail size={17} aria-hidden="true" /></a></div>
        </div>
        <div className={styles.posterWrap}><Image src={poster} alt="홍천 열목어마을 숲과 계곡에서 일하고 쉬는 98 스테이워크" width={1122} height={1402} priority sizes="(max-width: 767px) calc(100vw - 40px), 44vw" /></div>
      </div>
    </section>

    <section className={styles.benefits} aria-labelledby="benefits-title"><div className="container">
      <SectionHeading eyebrow="STAYWORK AT A GLANCE" title="일과 쉼을 한 번에 준비했습니다" />
      <div className={styles.benefitGrid}>{benefits.map(({ icon: Icon, title: itemTitle, text, detail }) => <article key={itemTitle}><Icon aria-hidden="true" /><h3>{itemTitle}</h3><p>{text}</p><strong>{detail}</strong></article>)}</div>
      <p className={styles.centerNote}>객실 형태와 배정은 예약 인원 및 운영 상황에 따라 안내됩니다.</p>
    </div></section>

    <section className={styles.intro} aria-labelledby="intro-title"><div className={`container ${styles.introGrid}`}>
      <SectionHeading eyebrow="PROGRAM INTRO" title="98 스테이워크는 어떤 프로그램인가요?" />
      <div><p>98 스테이워크는 청정한 농촌 자연 속에서 업무와 휴식을 함께 경험하도록 구성된 2박 3일 워케이션 프로그램입니다.</p><p>도심의 반복되는 일상에서 잠시 벗어나 숲과 계곡 가까이에서 업무에 집중하고, 프로그램과 식사를 통해 몸과 마음에 여유를 더하는 시간을 제공합니다.</p><p>단순히 장소만 옮겨 일하는 것이 아니라 일, 휴식, 자연, 식사를 하나의 일정으로 경험하는 체류형 프로그램입니다.</p></div>
    </div></section>

    <ProgramActivityGallery programSlug="98-staywork" />

    <section className={styles.section} aria-labelledby="spaces-title"><div className="container">
      <SectionHeading eyebrow="WORK & STAY SPACE" title="일할 때는 집중하고, 쉴 때는 온전히 쉬는 공간" />
      <div className={styles.spaceGrid}>{spaces.map(({ icon: Icon, title: itemTitle, text, note }) => <article key={itemTitle}><span><Icon aria-hidden="true" /></span><h3>{itemTitle}</h3><p>{text}</p>{note ? <small>{note}</small> : null}</article>)}</div>
    </div></section>

    <section className={styles.wellnessSection} aria-labelledby="wellness-title"><div className="container">
      <SectionHeading eyebrow="WELLNESS PROGRAM" title="자연 속에서 나를 돌보는 세 가지 시간" />
      <div className={styles.wellnessGrid}>{wellness.map(({ icon: Icon, number, title: itemTitle, text }) => <article key={itemTitle}><div><span>{number}</span><Icon aria-hidden="true" /></div><h3>{itemTitle}</h3><p>{text}</p></article>)}</div>
      <p className={styles.centerNote}>프로그램 구성은 계절, 날씨 및 운영 상황에 따라 달라질 수 있습니다.</p>
    </div></section>

    <section className={styles.meals} aria-labelledby="meals-title"><div className="container">
      <SectionHeading eyebrow="HEALTHY MEALS" title="정성 어린 삼시세끼와 로컬 간식" />
      <div className={styles.mealGrid}>{meals.map((meal) => <article key={meal.label}><Coffee aria-hidden="true" /><span>{meal.label}</span><h3>{meal.title}</h3><p>{meal.text}</p></article>)}</div>
      <p className={styles.notice}>식재료와 메뉴는 계절 및 수급 상황에 따라 달라질 수 있습니다. 알레르기나 식이 제한이 있다면 예약 전에 알려주세요.</p>
    </div></section>

    <section className={styles.section} aria-labelledby="recommend-title"><div className="container">
      <SectionHeading eyebrow="RECOMMENDATION" title="일과 쉼의 균형이 필요한 분들께 추천합니다" />
      <div className={styles.recommendGrid}>{recommendations.map(([itemTitle, text]) => <article key={itemTitle}><Users aria-hidden="true" /><div><h3>{itemTitle}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className={styles.schedule} aria-labelledby="schedule-title"><div className="container">
      <SectionHeading eyebrow="SAMPLE ITINERARY" title="2박 3일 일정 예시" intro="시간대별 일정은 운영 상황에 맞춰 조정됩니다." />
      <div className={styles.itinerary}>{itinerary.map((day) => <article key={day.day}><header><span>{day.day}</span><h3>{day.title}</h3></header><ul>{day.items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article>)}</div>
      <p className={styles.centerNote}>위 일정은 이해를 돕기 위한 예시이며 실제 일정과 프로그램 순서는 예약 인원, 계절, 날씨에 따라 달라질 수 있습니다.</p>
    </div></section>

    <section className={styles.priceSection} aria-labelledby="price-title"><div className={`container ${styles.priceGrid}`}>
      <div><p>2 NIGHTS · 3 DAYS</p><h2 id="price-title">지금, 나를 회복하는 워케이션을 시작하세요</h2><div className={styles.price}><strong>295,000원</strong><span>5인 이상 운영 기준</span></div><p className={styles.priceNote}>공개된 프로그램 안내 기준이며 가격 적용 기준과 현재 운영 여부는 예약 전 확인해 주세요.</p></div>
      <div className={styles.includes}><h3>포함사항</h3><ul><li><Check />2박 3일 숙박</li><li><Check />공유 업무공간 자유 이용</li><li><Check />지역 제철 식사를 활용한 삼시세끼</li><li><Check />세 가지 농촌 치유 프로그램</li><li><Check />다과 및 휴식 공간</li></ul><p>객실 형태는 프라이빗 또는 혼용 형태 중 인원과 운영 상황에 따라 안내됩니다.</p></div>
    </div></section>

    <ProgramRelatedStories programSlug="98-staywork" />

    <section className={styles.booking} aria-labelledby="booking-title"><div className={`container ${styles.bookingGrid}`}>
      <div><p className={styles.eyebrow}>BOOKING & CONTACT</p><h2 id="booking-title">현재 일정과 운영 여부를 확인해 주세요</h2><p>네이버 예약 상품의 현재 일정과 가격이 홈페이지 안내와 다를 경우 네이버 예약 및 담당자 안내를 우선합니다.</p></div>
      <div className={styles.contactCard}><NaverBookingLink href={siteConfig.stayworkBookingUrl} className="button button-primary" position="staywork-bottom">네이버에서 예약 확인</NaverBookingLink><PhoneReservationLink className="button button-outline" position="staywork-bottom"><Phone size={17} aria-hidden="true" />전화로 문의</PhoneReservationLink><a className="button button-outline" href={emailHref}><Mail size={17} aria-hidden="true" />이메일 문의</a><dl><div><dt>예약문의</dt><dd><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phoneDisplay}</a></dd></div><div><dt>이메일</dt><dd><a href={emailHref}>{siteConfig.contact.email}</a></dd></div></dl></div>
    </div></section>
    <div className="container"><TravelBanner /></div>
    <section className={styles.backLink}><Link href="/programs">다른 치유 프로그램도 살펴보기</Link></section>
  </main><SiteFooter /><MobileCta /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}

import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Bus,
  Car,
  CircleParking,
  ExternalLink,
  HandHeart,
  HeartPulse,
  Home,
  Leaf,
  MapPinned,
  Sprout,
  Utensils,
  Waves,
} from "lucide-react";
import Link from "@/components/static-link";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VillageGallery } from "@/components/village-gallery";
import {
  natureMoments,
  villageCases,
  villageCtas,
  villageDay,
  villageFaqs,
  villageIdentity,
  villageOverview,
  villagePeople,
  villageValues,
  villageVisit,
} from "@/data/village";

const pageUrl = "https://hongcheon-yeolmokeo.vercel.app/village";

export const metadata: Metadata = {
  title: { absolute: "홍천 열목어마을 소개｜숲·계곡·치유가 있는 강원도 산촌마을" },
  description: "홍천의 맑은 계곡과 깊은 숲에서 숙박, 치유 프로그램, 농촌체험과 건강한 밥상을 만날 수 있는 열목어마을을 소개합니다.",
  keywords: ["홍천 열목어마을", "홍천 치유마을", "홍천 농촌체험", "강원도 힐링 여행", "홍천 계곡", "홍천 단체 체험", "홍천 워크숍"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "홍천 열목어마을 소개｜숲·계곡·치유가 있는 강원도 산촌마을",
    description: "홍천의 맑은 계곡과 깊은 숲에서 숙박, 치유 프로그램, 농촌체험과 건강한 밥상을 만날 수 있는 열목어마을을 소개합니다.",
    url: pageUrl,
    type: "website",
    locale: "ko_KR",
    siteName: "홍천 열목어마을",
  },
};

function OverviewIcon({ name }: { name: string }) {
  if (name === "waves") return <Waves aria-hidden="true" />;
  if (name === "home") return <Home aria-hidden="true" />;
  if (name === "heart") return <HeartPulse aria-hidden="true" />;
  return <Utensils aria-hidden="true" />;
}

function ValueIcon({ name }: { name: string }) {
  if (name === "sprout") return <Sprout aria-hidden="true" />;
  if (name === "leaf") return <Leaf aria-hidden="true" />;
  return <HandHeart aria-hidden="true" />;
}

export default function VillagePage() {
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://hongcheon-yeolmokeo.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "마을 이야기", item: pageUrl },
    ],
  };
  const attractionJson = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "홍천 열목어마을",
    url: pageUrl,
    description: "백두대간 길목의 숲과 통마람계곡 등 청정 자연을 바탕으로 농촌치유 프로그램과 숙박, 식체험을 운영하는 홍천 산촌마을",
    touristType: ["가족 여행객", "치유 여행객", "기업·기관 단체"],
  };
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: villageFaqs
      .filter((item) => item.status === "verified")
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
  };

  return (
    <>
      <SiteHeader />
      <main className="village-page">
        <section className="village-hero">
          <Image src="/images/village-main-hero.jpg" fill priority sizes="100vw" alt="홍천 열목어마을 건물과 잔디마당 전경" />
          <div className="village-hero-shade" />
          <div className="container village-hero-content">
            <p className="village-eyebrow">홍천의 깊은 숲과 맑은 물이 품은 치유마을</p>
            <h1><span>자연과 사람이 함께 숨 쉬는 곳,</span><span>홍천 열목어마을</span></h1>
            <p className="village-hero-copy">빠르게 흘러가는 일상에서 잠시 벗어나 맑은 계곡과 숲, 따뜻한 사람과 건강한 밥상을 만나는 곳입니다.</p>
            <div className="village-hero-actions">
              <Link href={villageCtas.programs} className="button button-light">마을에서 쉬는 방법 <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href={villageCtas.groupContact} className="button button-ghost">단체 방문 문의</Link>
            </div>
          </div>
        </section>

        <section className="village-section village-overview" aria-labelledby="village-overview-title">
          <div className="container">
            <div className="village-heading">
              <p className="section-kicker">AT A GLANCE</p>
              <h2 id="village-overview-title">열목어마을은 이런 곳입니다</h2>
              <p>구경하고 떠나는 관광지가 아니라, 천천히 머물며 몸과 마음의 속도를 낮추는 마을입니다.</p>
            </div>
            <div className="village-overview-grid">
              {villageOverview.map((item) => (
                <article key={item.title}>
                  <OverviewIcon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="village-section village-identity" aria-labelledby="village-identity-title">
          <div className="container village-identity-layout">
            <Image src="/images/forest-2.jpg" width={960} height={720} alt="맑은 계곡과 울창한 숲이 어우러진 열목어마을 자연 풍경" />
            <div>
              <p className="section-kicker">THE NAME &amp; PLACE</p>
              <h2 id="village-identity-title">{villageIdentity.title}</h2>
              {villageIdentity.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a className="village-source-link" href={villageIdentity.source.href} target="_blank" rel="noreferrer">
                공식 자료에서 자연환경 확인 <ExternalLink size={16} aria-hidden="true" />
              </a>
              <p className="village-verification-note">마을 형성 시기와 명칭의 공식 유래, 주민·위원회 정보는 운영 주체 확인 후 보강합니다.</p>
            </div>
          </div>
        </section>

        <section className="village-section village-nature" aria-labelledby="village-nature-title">
          <div className="container">
            <div className="village-heading village-heading-left">
              <p className="section-kicker">HEALING NATURE</p>
              <h2 id="village-nature-title">아무것도 하지 않아도,<br />자연은 우리를 회복시킵니다</h2>
              <p>시원한 계곡물 소리, 숲에서 불어오는 바람, 밤하늘의 별과 조용한 산촌의 아침. 열목어마을에서는 평범한 자연의 시간이 특별한 쉼이 됩니다.</p>
            </div>
            <div className="village-nature-grid">
              {natureMoments.map((item, index) => (
                <article key={item.title} className={`village-nature-card village-nature-card-${index + 1}`}>
                  <Image src={item.image} fill sizes="(max-width: 767px) 100vw, 50vw" alt={item.alt} />
                  <div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="village-section village-values" aria-labelledby="village-values-title">
          <div className="container">
            <div className="village-heading">
              <p className="section-kicker">OUR PROMISE</p>
              <h2 id="village-values-title">열목어마을이 지키는 세 가지 약속</h2>
            </div>
            <div className="village-values-grid">
              {villageValues.map((value) => (
                <article key={value.title}>
                  <ValueIcon name={value.icon} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
            <p className="village-source-note">‘상생·휴식·가치’는 기존 홍천 열목어마을 공식 홈페이지에 공개된 마을 비전을 바탕으로 구성했습니다.</p>
          </div>
        </section>

        <section className="village-section village-day" aria-labelledby="village-day-title">
          <div className="container village-day-layout">
            <div className="village-day-copy">
              <p className="section-kicker">A DAY IN THE VILLAGE</p>
              <h2 id="village-day-title">열목어마을에서 보내는 하루</h2>
              <p>도착부터 산촌의 밤과 다음 날 아침까지, 서두르지 않는 하루를 그려보세요.</p>
              <div className="village-example-badge">방문 형태에 따른 예시 일정</div>
              <p className="village-day-note">프로그램은 계절과 방문 목적, 인원에 맞게 달라질 수 있습니다.</p>
              <Link href={villageCtas.programs} className="button button-outline">프로그램 자세히 보기 <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
            <ol className="village-timeline">
              {villageDay.map((item) => (
                <li key={`${item.time}-${item.activity}`}><time>{item.time}</time><p>{item.activity}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="village-section village-people" aria-labelledby="village-people-title">
          <div className="container village-people-layout">
            <div>
              <p className="section-kicker">PEOPLE OF THE VILLAGE</p>
              <h2 id="village-people-title">{villagePeople.title}</h2>
              <p>{villagePeople.description}</p>
              <ul>{villagePeople.roles.map((role) => <li key={role}><Leaf size={18} aria-hidden="true" />{role}</li>)}</ul>
              <p className="village-verification-note">위원장 인사말과 주민·담당자 소개는 실제 사진과 동의를 받은 프로필이 준비된 뒤 추가합니다.</p>
            </div>
            <Image src={villagePeople.image} width={810} height={1050} alt={villagePeople.alt} />
          </div>
        </section>

        <section className="village-section village-cases" aria-labelledby="village-cases-title">
          <div className="container">
            <div className="village-heading">
              <p className="section-kicker">TRUST &amp; STORIES</p>
              <h2 id="village-cases-title">다양한 사람들이 열목어마을에서 쉼을 만났습니다</h2>
              <p>공공기관과 언론에 공개된 자료에서 실제 운영 및 소개 사례를 확인했습니다.</p>
            </div>
            <div className="village-case-grid">
              {villageCases.map((item) => (
                <article key={item.href}>
                  <div className="village-case-meta"><span>{item.category}</span><time>{item.date}</time></div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="village-case-footer"><span>{item.source}</span><a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title} 자세히 보기`}>자세히 보기 <ExternalLink size={15} aria-hidden="true" /></a></div>
                </article>
              ))}
            </div>
            <div className="village-centered-action"><Link href={villageCtas.stories} className="button button-outline">소식과 보도 더 보기 <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section className="village-section village-gallery" aria-labelledby="village-gallery-title">
          <div className="container">
            <div className="village-heading village-heading-left">
              <p className="section-kicker">PHOTO ESSAY</p>
              <h2 id="village-gallery-title">사진으로 먼저 만나는 열목어마을</h2>
              <p>숲과 숙소, 밥상과 프로그램까지 마을에서 마주할 수 있는 장면을 모았습니다. 사진을 누르면 크게 볼 수 있습니다.</p>
            </div>
            <VillageGallery />
          </div>
        </section>

        <section className="village-section village-visit" aria-labelledby="village-visit-title">
          <div className="container">
            <div className="village-heading">
              <p className="section-kicker">GETTING HERE</p>
              <h2 id="village-visit-title">조금 멀리 와도 괜찮은 이유</h2>
              <p>도시에서 멀어지는 만큼 자연과 가까워집니다. 홍천의 깊은 숲과 맑은 계곡이 기다리는 열목어마을로 오세요.</p>
            </div>
            <div className="village-visit-grid">
              <article><MapPinned aria-hidden="true" /><div><h3>방문 주소</h3><p>{villageVisit.address}</p></div></article>
              <article><Car aria-hidden="true" /><div><h3>자가용 방문</h3><p>{villageVisit.driving}</p></div></article>
              <article><CircleParking aria-hidden="true" /><div><h3>주차 안내</h3><p>{villageVisit.parking}</p></div></article>
              <article><Bus aria-hidden="true" /><div><h3>대중교통</h3><p>{villageVisit.transit}</p></div></article>
            </div>
            <div className="village-visit-actions">
              <a href={villageVisit.mapUrl} target="_blank" rel="noreferrer" className="button button-outline">공식 지도에서 보기 <ExternalLink size={17} aria-hidden="true" /></a>
              <Link href={villageCtas.guide} className="button button-primary">여행 안내 보기 <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="village-section village-faq" aria-labelledby="village-faq-title">
          <div className="container">
            <div className="village-heading">
              <p className="section-kicker">FAQ</p>
              <h2 id="village-faq-title">방문 전 자주 묻는 질문</h2>
              <p>기본 안내와 상담으로 확인해야 할 내용을 구분해 정리했습니다.</p>
            </div>
            <div className="village-faq-list">
              {villageFaqs.map((item) => (
                <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="village-final-cta">
          <Image src="/images/quiet-time-1.png" fill sizes="100vw" alt="열목어마을의 맑은 계곡 옆에서 자연을 바라보며 쉬는 모습" />
          <div className="village-final-shade" />
          <div className="container">
            <p>잠시 멈춰도 괜찮습니다</p>
            <h2>이번 주말,<br />나를 위한 쉼을 만나보세요</h2>
            <span>개인과 가족의 휴식부터 기업·기관의 단체 프로그램까지 방문 목적에 맞게 안내해 드립니다.</span>
            <div>
              <Link href={villageCtas.stay} className="button button-light">숙소·프로그램 보기</Link>
              <Link href={villageCtas.contact} className="button button-ghost">방문 상담하기</Link>
              <Link href={villageCtas.groupContact} className="button button-ghost">단체 견적 문의</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
    </>
  );
}

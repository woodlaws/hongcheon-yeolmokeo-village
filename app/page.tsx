import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, BedDouble, Mountain, Sprout, Trees, Users, Utensils } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { VisitPlanner } from "@/components/visit-planner";
import { NaverBookingLink } from "@/components/booking-links";
import { itineraries, press, programs, testimonials } from "@/data/site";
import { stayRooms } from "@/data/stay";

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/images/forest-1.jpg" alt="열목어마을의 숲과 계곡 옆 산촌 숙소" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="hero-eyebrow">도시에서 잠시 멀어져, 나에게 가까워지는 곳</p>
          <h1 id="hero-title">잘 쉬고, 잘 먹고,<br />다시 살아갈 힘을 얻는 마을</h1>
          <p className="hero-copy">홍천의 맑은 계곡과 숲, 정성스러운 치유 밥상과 편안한 숙박이 기다립니다.</p>
          <div className="hero-actions"><NaverBookingLink className="button button-primary" position="home-hero">네이버에서 예약하기</NaverBookingLink><Link href="/programs" className="button button-ghost">치유 프로그램 보기 <ArrowRight size={18}/></Link><Link href="/group" className="button button-ghost">단체 방문 문의</Link></div>
          <div className="hero-facts"><span><Mountain size={17}/>해발 700m 백두대간</span><span><Utensils size={17}/>숙박·식사 가능</span><span><Users size={17}/>개인·단체 맞춤 상담</span></div>
        </div>
      </section>
      <VisitPlanner />

      <section className="home-section container"><header className="section-heading"><p className="section-kicker">THREE WAYS TO REST</p><h2>열목어마을에서는 이렇게 쉽니다</h2><p>자연이 주는 느림의 힘, 열목어마을만의 특별한 쉼을 경험해 보세요.</p></header><div className="experience-grid">
        <Link href="/programs/forest-healing" className="experience-card"><Image src="/images/quiet-time-1.png" alt="맑은 계곡가에서 돌을 쌓으며 쉬는 모습" width={760} height={540}/><div><h3>숲과 계곡에서 쉬기</h3><p>물소리를 따라 호흡하고, 잠시 아무것도 하지 않는 연습</p><span>자세히 보기 <ArrowRight size={16}/></span></div></Link>
        <Link href="/programs/burnout-retreat" className="experience-card"><Image src="/images/singing-bowl.png" alt="열목어마을 싱잉볼 치유 프로그램" width={760} height={540}/><div><h3>치유 프로그램 경험하기</h3><p>몸과 마음의 균형을 돕는 주민 주도 오감 프로그램</p><span>자세히 보기 <ArrowRight size={16}/></span></div></Link>
        <Link href="/programs/healing-food" className="experience-card"><Image src="/images/healing-table.jpg" alt="홍천 제철 식재료로 차린 치유밥상" width={760} height={540}/><div><h3>제철 치유밥상 맛보기</h3><p>홍천 내면의 계절과 정성을 담은 따뜻한 한 끼</p><span>자세히 보기 <ArrowRight size={16}/></span></div></Link>
      </div></section>

      <section className="value-section"><div className="container value-layout"><div className="value-copy"><p className="section-kicker">WHY YEOLMOKEO</p><h2>하루를 비우면,<br/>마음이 채워집니다</h2><p>홍천의 깨끗한 자연 속에서 나와 가족, 동료와 함께 진짜 쉼의 가치를 느껴보세요.</p><div className="value-list"><div><Trees/><span><b>청정 자연</b>맑은 계곡과 울창한 숲</span></div><div><BedDouble/><span><b>편안한 숙박</b>자연 속 아늑한 공간</span></div><div><Sprout/><span><b>맞춤형 프로그램</b>누구나 즐기는 치유 체험</span></div><div><Utensils/><span><b>지역 먹거리</b>홍천의 신선한 식재료</span></div></div></div><div className="value-collage"><div className="collage-main"><Image src="/images/stay-room.png" alt="햇살이 드는 열목어마을 숙소" fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), 470px"/></div><div className="collage-top"><Image src="/images/quiet-time-3.png" alt="숲속 해먹에서 쉬는 모습" fill sizes="(max-width: 767px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 72px) / 3), 235px"/></div><div className="collage-bottom"><Image src="/images/valley-rest.png" alt="열목어마을 맑은 계곡물" fill sizes="(max-width: 767px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 72px) / 3), 235px"/></div></div></div></section>

      <section className="home-section container"><header className="section-heading"><p className="section-kicker">FOR YOU</p><h2>이런 분들께 추천하는 프로그램</h2><p>누구와 오시든, 열목어마을에서 특별한 쉼이 시작됩니다.</p></header><div className="recommend-grid">{programs.slice(0,3).map(program=><Link href={`/programs/${program.slug}`} className="recommend-card" key={program.slug}><Image src={program.image} alt={program.slug === "98-staywork" ? "홍천 열목어마을 숲과 계곡에서 일하고 쉬는 98 스테이워크" : program.title} width={760} height={520}/><div><p>{program.category ?? program.audience}</p><h3>{program.title}</h3><span>{program.summary}</span><i><ArrowRight/></i></div></Link>)}</div></section>

      <section className="stay-time"><div className="container"><header className="section-heading"><p className="section-kicker">SLOW ITINERARY</p><h2>머무는 시간에 따라 달라지는 쉼</h2></header><div className="itinerary-grid">{itineraries.map((plan,index)=><article key={plan.duration}><div className="itinerary-number">0{index+1}</div><p className="meta">{plan.duration}</p><h3>{plan.title}</h3><ul>{plan.items.map(item=><li key={item}>{item}</li>)}</ul><p className="status">{plan.includes}</p><Link href="/guide" className="text-link">자세히 보기 <ArrowRight size={17}/></Link></article>)}</div></div></section>

      <section className="home-section container"><div className="feature-split"><Image src="/images/stay-room.png" alt="열목어마을의 정갈한 객실" width={900} height={680}/><div><p className="section-kicker">STAY</p><h2>숲과 계곡 가까이에서 보내는 편안한 밤</h2><p>보금자리, 비움센터, 한옥숙소로 안내되는 산촌의 잠자리. 실시간 예약 가능 일정과 이용금액은 네이버 예약에서 확인해 주세요.</p><ul>{stayRooms.slice(0,3).map(stay=><li key={stay.name}><b>{stay.name}</b><span>{stay.roomConfigurations.join(" · ")}</span></li>)}</ul><div className="inline-actions"><Link href="/stay" className="button button-primary">숙소 자세히 보기</Link><NaverBookingLink className="button button-outline" position="home-stay">네이버에서 예약하기</NaverBookingLink></div></div></div></section>

      <section className="food-section"><div className="container feature-split reverse"><Image src="/images/healing-table.jpg" alt="지역 제철 식재료로 만든 한식 치유밥상" width={900} height={680}/><div><p className="section-kicker">HEALING TABLE</p><h2>지역의 제철 재료로 차리는 건강한 한 끼</h2><p>홍천 내면의 농산물과 산나물, 계절에 따라 달라지는 식재료를 정성스러운 한식으로 만납니다.</p><div className="pill-list"><span>지역 농산물</span><span>정성스러운 한식</span><span>계절별 밥상</span><span>단체 식사 가능 여부 확인 필요</span></div><Link href="/programs/healing-food" className="text-link">치유밥상 알아보기 <ArrowRight size={17}/></Link></div></div></section>

      <section className="trust-section"><div className="container"><header className="section-heading left"><p className="section-kicker">TRUST & RECORDS</p><h2>마을이 쌓아 온 치유의 기록</h2><p>확인된 공공기관 자료와 언론 보도를 바탕으로 소개합니다.</p></header><div className="trust-grid">{press.map((item,index)=><a href={item.href} target="_blank" rel="noreferrer" key={item.href}><span>0{index+1}</span><p>{item.label}</p><h3>{item.title}</h3><small>{item.source}</small></a>)}</div></div></section>

      <section className="home-section container"><header className="section-heading"><p className="section-kicker">VOICES</p><h2>쉬고 간 사람들의 이야기</h2><p>실제 후기 수집 전 레이아웃 확인을 위한 샘플 후기입니다.</p></header><div className="testimonial-grid">{testimonials.map(item=><blockquote key={item.quote}><span>샘플 후기</span><p>“{item.quote}”</p><cite>{item.author}</cite></blockquote>)}</div></section>

      <section className="final-cta"><Image src="/images/forest-1.jpg" alt="숲과 계곡을 품은 홍천 산촌 전경" fill sizes="100vw"/><div/><div className="container"><p>좋은 쉼이, 다시 좋은 나를 만듭니다.</p><h2>이번 주말, 홍천에서 제대로 쉬어보세요</h2><span>지금, 나를 위한 쉼을 계획할 시간입니다.</span><div><Link href="/contact" className="button button-light">방문 상담하기</Link><Link href="/contact?type=group" className="button button-ghost">단체 견적 문의</Link></div></div></section>
    </main>
    <SiteFooter/><MobileCta/>
  </>;
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, CalendarDays, ExternalLink, FileText, Leaf, ShieldCheck } from "lucide-react";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryExplorer } from "@/components/story-explorer";
import { formatStoryDate, stories, storyHistory, storySeasons } from "@/data/stories";

export const metadata: Metadata = {
  title: "마을 이야기",
  description: "홍천 열목어마을의 계절 풍경과 치유 프로그램, 마을 사람들, 방문 경험과 새로운 소식을 만나보세요.",
  alternates: { canonical: "/stories" },
  openGraph: { title: "마을 이야기 | 홍천 열목어마을", description: "홍천 열목어마을의 계절 풍경과 치유 프로그램, 사람과 방문 경험을 전합니다.", url: "/stories", type: "website" },
  twitter: { card: "summary_large_image", title: "마을 이야기 | 홍천 열목어마을", description: "계절이 흐르고, 사람이 머물고, 새로운 이야기가 쌓이는 곳" },
};

export default function StoriesPage() {
  const featured = stories.find((story) => story.featured) ?? stories[0];
  return <><SiteHeader /><main className="stories-page">
    <section className="stories-hero" aria-labelledby="stories-title">
      <Image src="/images/village-vision-2.jpg" alt="산과 숲으로 둘러싸인 홍천 열목어마을 풍경" fill priority sizes="100vw" />
      <div className="stories-hero-shade" />
      <div className="container">
        <p className="stories-eyebrow">YEOLMOKEO STORIES</p>
        <h1 id="stories-title">마을의 오늘을<br />기록합니다</h1>
        <p>숲과 계곡의 계절, 이곳을 찾은 사람들, 함께 만들어 온 치유의 시간을 만나보세요.</p>
        <div className="stories-hero-actions"><a href="#latest" className="button button-light">최신 이야기 보기 <ArrowRight size={18} aria-hidden="true" /></a><Link href="/contact" className="button button-ghost">마을 방문 문의</Link></div>
        <div className="stories-season-badge"><Leaf size={18} aria-hidden="true" /><span><b>가을의 마을</b> 구룡령과 숲의 색이 깊어지는 계절</span></div>
      </div>
    </section>

    <section className="stories-intro"><div className="container"><p>Stories from Yeolmokeo Village</p><h2>계절이 흐르고, 사람이 머물고,<br />새로운 이야기가 쌓이는 곳</h2><span>숲과 계곡의 변화, 마을에서 진행된 치유 프로그램, 이곳을 다녀간 사람들의 이야기를 전합니다.</span></div></section>

    <section className="stories-staywork" aria-labelledby="stories-staywork-title"><div className="container">
      <div className="stories-staywork-image"><Image src="/images/programs/98-staywork-poster.png" alt="홍천 열목어마을 숲과 계곡에서 일하고 쉬는 98 스테이워크" fill sizes="(max-width: 767px) calc(100vw - 40px), 42vw" /></div>
      <article><span className="story-category">프로그램 소식</span><p className="section-kicker">98 STAYWORK</p><h2 id="stories-staywork-title">숲에서 일하고 자연에서 쉬는 98 스테이워크</h2><p>업무 공간과 숙박, 지역 식사, 농촌 치유 프로그램을 함께 경험하는 홍천 열목어마을의 2박 3일 워케이션을 소개합니다.</p><Link href="/programs/98-staywork" className="button button-primary">프로그램 자세히 보기 <ArrowRight size={17} aria-hidden="true" /></Link></article>
    </div></section>

    <section className="stories-feature" aria-labelledby="featured-title"><div className="container">
      <div className="stories-feature-image"><Image src={featured.coverImage} alt={featured.coverAlt} fill sizes="(max-width: 767px) 100vw, 55vw" /></div>
      <article><span className="story-category">{featured.category}</span><p className="stories-feature-label">FEATURED STORY</p><h2 id="featured-title">{featured.title}</h2><p>{featured.excerpt}</p><div className="stories-meta"><time dateTime={featured.publishedAt}><CalendarDays size={16} aria-hidden="true" />{formatStoryDate(featured.publishedAt)}</time><span><FileText size={16} aria-hidden="true" />{featured.readingMinutes}분 읽기</span></div><Link href={`/stories/${featured.slug}`} className="stories-read-link">이야기 읽기 <ArrowRight size={18} aria-hidden="true" /></Link></article>
    </div></section>

    <StoryExplorer />

    <section className="stories-seasons" aria-labelledby="seasons-title"><div className="container">
      <div className="stories-heading"><p className="section-kicker">LETTERS FROM THE SEASONS</p><h2 id="seasons-title">계절이 바뀔 때마다,<br />마을의 표정도 달라집니다</h2><p>추천 체험은 기후와 운영 상황에 따라 달라질 수 있으니 방문 전에 확인해 주세요.</p></div>
      <div className="stories-season-grid">{storySeasons.map((item) => <article key={item.season}><div className="stories-season-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 300px" /></div><div><span>{item.season}</span><h3>{item.title}</h3>{"credit" in item && <small>사진: {item.credit}</small>}<dl><div><dt>추천 경험</dt><dd>{item.experience}</dd></div><div><dt>방문 팁</dt><dd>{item.tip}</dd></div></dl><Link href={item.href}>관련 이야기 읽기 <ArrowRight size={16} aria-hidden="true" /></Link><Link href={`/contact?type=trip&season=${item.season}`} className="button button-outline">이 계절에 방문하기</Link></div></article>)}</div>
    </div></section>

    <section className="stories-history" aria-labelledby="history-title"><div className="container">
      <div className="stories-history-intro"><p className="section-kicker">VERIFIED HISTORY</p><h2 id="history-title">함께 쉼을 만들어 온 시간</h2><p>공공기관 자료로 확인되는 과거 운영 이력입니다. 현재 제공 일정과 구성은 별도 확인이 필요합니다.</p><ShieldCheck size={58} aria-hidden="true" /></div>
      <div className="stories-history-list">{storyHistory.map((item) => <a key={item.year} href={item.href} target="_blank" rel="noreferrer"><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.description}</p></div><ExternalLink size={18} aria-label="외부 출처 열기" /></a>)}</div>
      <div className="stories-history-actions"><Link href="/group" className="button button-light">단체 프로그램 살펴보기</Link><Link href="/contact?type=group" className="button button-ghost">맞춤 일정 문의하기</Link></div>
    </div></section>

    <section className="stories-submit"><div className="container"><div><p className="section-kicker">YOUR STORY</p><h2>당신이 만난 열목어마을을 들려주세요</h2><p>마을에서 기억에 남은 풍경과 쉼의 순간을 보내주시면, 확인 후 마을 이야기로 소개할 수 있습니다.</p><small>이야기와 사진은 작성자의 홈페이지·SNS 공개 동의를 확인한 뒤에만 소개합니다. 현재는 방문 시기와 연락처, 이야기를 문의 페이지에서 남길 수 있습니다.</small></div><div><Link href="/contact?type=story" className="button button-primary">이야기 보내기</Link><Link href="/contact" className="button button-outline">방문 문의하기</Link></div></div></section>

    <section className="stories-final" aria-labelledby="stories-final-title"><Image src="/images/yeolmokeo-village-panorama-02.jpg" alt="산과 하천을 따라 집과 밭이 자리한 열목어마을 전경" fill sizes="100vw" /><div /><div className="container"><p>다음 장면은, 직접 머무는 시간</p><h2 id="stories-final-title">이야기 속 풍경을 직접 만나보세요</h2><span>숲과 물이 건네는 조용한 쉼, 열목어마을에서 시작됩니다.</span><div><Link href="/programs" className="button button-light">치유 프로그램 보기</Link><Link href="/stay" className="button button-ghost">숙소 살펴보기</Link><Link href="/contact" className="button button-ghost">방문 상담하기</Link></div></div></section>
  </main><SiteFooter /><MobileCta /></>;
}


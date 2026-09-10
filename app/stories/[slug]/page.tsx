import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, FileText, Info, Tag } from "lucide-react";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryShare } from "@/components/story-share";
import { formatStoryDate, getStory, stories } from "@/data/stories";
import { notFound } from "next/navigation";

const siteUrl = "https://hongcheon-yeolmokeo.vercel.app";
type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  const canonical = `/stories/${story.slug}`;
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical },
    openGraph: { title: `${story.title} | 홍천 열목어마을`, description: story.excerpt, url: canonical, type: "article", publishedTime: story.publishedAt, modifiedTime: story.updatedAt ?? story.publishedAt, images: [{ url: story.coverImage, alt: story.coverAlt }] },
    twitter: { card: "summary_large_image", title: `${story.title} | 홍천 열목어마을`, description: story.excerpt, images: [story.coverImage] },
  };
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const related = stories.filter((item) => item.slug !== story.slug).sort((a, b) => Number(b.category === story.category) - Number(a.category === story.category)).slice(0, 3);
  const canonical = `${siteUrl}/stories/${story.slug}`;
  const structuredData = {
    "@context": "https://schema.org", "@type": "Article", headline: story.title, description: story.excerpt,
    image: [`${siteUrl}${story.coverImage}`], datePublished: story.publishedAt, dateModified: story.updatedAt ?? story.publishedAt,
    author: { "@type": "Organization", name: "홍천 열목어마을" }, publisher: { "@type": "Organization", name: "홍천 열목어마을", url: siteUrl }, mainEntityOfPage: canonical,
  };

  return <><SiteHeader /><main className="story-detail">
    <article>
      <header className="story-detail-header"><div className="story-article-container"><Link href="/stories" className="story-back"><ArrowLeft size={17} aria-hidden="true" /> 마을 이야기</Link><span className="story-category">{story.category}</span><h1>{story.title}</h1><p>{story.lead}</p><div className="stories-meta"><time dateTime={story.publishedAt}><CalendarDays size={16} aria-hidden="true" />{formatStoryDate(story.publishedAt)}</time><span><FileText size={16} aria-hidden="true" />{story.readingMinutes}분 읽기</span></div><div className="story-tags"><Tag size={15} aria-hidden="true" />{story.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div></header>
      <div className="story-detail-cover"><Image src={story.coverImage} alt={story.coverAlt} fill priority sizes="(max-width: 900px) 100vw, 1100px" /></div>
      <div className="story-article-container story-detail-body">
        {story.editorialNote && <aside className="story-editorial-note"><Info size={20} aria-hidden="true" /><p><b>콘텐츠 안내</b>{story.editorialNote}</p></aside>}
        {story.sections.map((section, index) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 0 && <blockquote>{story.pullQuote}</blockquote>}</section>)}
        <aside className="story-program"><p>RELATED PROGRAM</p><h2>{story.relatedProgram.title}</h2><span>{story.relatedProgram.description}</span><Link href={story.relatedProgram.href} className="button button-primary">{story.relatedProgram.label} <ArrowRight size={17} aria-hidden="true" /></Link></aside>
        {story.sources.length > 0 && <section className="story-sources"><h2>관련 자료와 출처</h2><p>외부 자료의 사실을 확인해 새로 작성했으며, 현재 운영 여부는 마을에 별도 확인해야 합니다.</p><ul>{story.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={15} aria-label="새 창에서 열기" /></a></li>)}</ul></section>}
        <StoryShare title={story.title} />
      </div>
    </article>

    <section className="story-related" aria-labelledby="related-title"><div className="container"><div className="stories-heading stories-heading-left"><p className="section-kicker">KEEP READING</p><h2 id="related-title">이 이야기와 함께 읽어보세요</h2></div><div className="story-related-grid">{related.map((item) => <article key={item.slug}><Link href={`/stories/${item.slug}`}><div><Image src={item.coverImage} alt={item.coverAlt} fill sizes="(max-width: 767px) 100vw, 33vw" /></div><span className="story-category">{item.category}</span><h3>{item.title}</h3><p>{item.excerpt}</p><b>이야기 읽기 <ArrowRight size={16} aria-hidden="true" /></b></Link></article>)}</div></div></section>

    <section className="story-detail-cta"><div className="container"><div><p className="section-kicker">PLAN YOUR STAY</p><h2>이야기 속 쉼을 나의 일정으로</h2><span>프로그램과 숙소의 현재 가능 여부를 상담해 주세요.</span></div><div><Link href="/contact" className="button button-light">방문 상담하기</Link><Link href="/stories" className="button button-ghost">목록으로 돌아가기</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </main><SiteFooter /><MobileCta /></>;
}

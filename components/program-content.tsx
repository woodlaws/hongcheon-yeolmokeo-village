import Image from "next/image";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import Link from "@/components/static-link";
import { programConnections, storyProgramSlugs, type ProgramSlug } from "@/data/program-connections";
import { formatStoryDate, stories } from "@/data/stories";
import { programs } from "@/data/site";

export function ProgramActivityGallery({ programSlug }: { programSlug: ProgramSlug }) {
  const activities = programConnections[programSlug].activities;
  const hasGenerated = activities.some((activity) => activity.generated);

  return <section className="content-section program-activity-section" aria-labelledby={`${programSlug}-activities-title`}>
    <div className="container">
      <p className="section-kicker">PROGRAM MOMENTS</p>
      <h2 id={`${programSlug}-activities-title`}>활동의 장면을 미리 살펴보세요</h2>
      <p className="section-intro">사진과 설명을 통해 프로그램의 흐름을 이해하고, 실제 구성은 계절과 참여자에 맞춰 상담합니다.</p>
      <div className={`program-activity-grid ${activities.length === 4 ? "program-activity-grid-four" : ""}`}>
        {activities.map((activity) => <article key={activity.title}>
          <div className="program-activity-image"><Image src={activity.src} alt={activity.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 50vw, 33vw" /></div>
          <div><h3>{activity.title}</h3><p>{activity.description}</p></div>
        </article>)}
      </div>
      {hasGenerated ? <p className="program-image-disclosure">프로그램 이해를 돕기 위한 연출 이미지가 포함되어 있습니다. 실제 운영 장소와 구성은 상담 시 확인해 주세요.</p> : null}
    </div>
  </section>;
}

export function ProgramRelatedStories({ programSlug }: { programSlug: ProgramSlug }) {
  const connections = programConnections[programSlug].stories;
  const relatedStories = connections.flatMap((connection) => {
    const story = stories.find((item) => item.slug === connection.slug);
    return story ? [{ ...connection, story }] : [];
  });
  if (!relatedStories.length) return null;

  return <section className="content-section tone-cream program-related-stories" aria-labelledby={`${programSlug}-stories-title`}>
    <div className="container">
      <p className="section-kicker">RELATED STORIES</p>
      <h2 id={`${programSlug}-stories-title`}>관련 소식과 이야기</h2>
      <p className="section-intro">프로그램의 배경과 계절, 확인된 운영 기록을 함께 읽어보세요.</p>
      <div className="program-story-grid">
        {relatedStories.map(({ label, reason, story }) => <article key={story.slug}>
          <Link href={`/stories/${story.slug}`}>
            <div className="program-story-image"><Image src={story.coverImage} alt={story.coverAlt} fill sizes="(max-width: 767px) calc(100vw - 40px), 33vw" /></div>
            <div className="program-story-body"><span className="story-category">{label}</span><h3>{story.title}</h3><p>{reason}</p><time dateTime={story.publishedAt}><CalendarDays size={15} aria-hidden="true" />{formatStoryDate(story.publishedAt)}</time><b>이야기 읽기 <ArrowRight size={16} aria-hidden="true" /></b></div>
          </Link>
          {story.sources.length > 0 ? <a className="program-story-source" href={story.sources[0].url} target="_blank" rel="noopener noreferrer">{story.sources[0].label} <span>(새 탭)</span><ExternalLink size={14} aria-hidden="true" /></a> : null}
        </article>)}
      </div>
    </div>
  </section>;
}

export function StoryRelatedPrograms({ storySlug }: { storySlug: string }) {
  const slugs = storyProgramSlugs[storySlug] ?? [];
  const relatedPrograms = slugs.flatMap((slug) => {
    const program = programs.find((item) => item.slug === slug);
    return program ? [{ program, connection: programConnections[slug] }] : [];
  });
  if (!relatedPrograms.length) return null;

  return <aside className="story-linked-programs" aria-labelledby="story-programs-title">
    <p>RELATED HEALING PROGRAMS</p>
    <h2 id="story-programs-title">이 이야기와 연결된 치유 프로그램</h2>
    <div>
      {relatedPrograms.map(({ program, connection }) => <article key={program.slug}>
        <div className="story-linked-program-image"><Image src={connection.listImage} alt={connection.listAlt} fill sizes="(max-width: 767px) calc(100vw - 80px), 320px" /></div>
        <div><h3>{program.title}</h3><span>{program.summary}</span><div><Link href={`/programs/${program.slug}`} className="button button-light">프로그램 보기</Link><Link href={`/contact?type=program&program=${program.slug}`} className="story-program-consult">상담하기 <ArrowRight size={15} aria-hidden="true" /></Link></div></div>
      </article>)}
    </div>
  </aside>;
}

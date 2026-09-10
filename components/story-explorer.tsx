"use client";

import Image from "next/image";
import Link from "@/components/static-link";
import { ArrowRight, Search } from "lucide-react";
import { formatStoryDate, stories, storyCategories, type StoryCategory } from "@/data/stories";
import { useMemo, useState } from "react";

type FilterCategory = (typeof storyCategories)[number];

export function StoryExplorer() {
  const [category, setCategory] = useState<FilterCategory>("전체");
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("ko-KR");
    return stories.filter((story) => {
      const matchesCategory = category === "전체" || story.category === (category as StoryCategory);
      const searchable = [story.title, story.excerpt, story.category, ...story.tags].join(" ").toLocaleLowerCase("ko-KR");
      return matchesCategory && (!keyword || searchable.includes(keyword));
    });
  }, [category, query]);

  return <section className="stories-library" id="latest" aria-labelledby="stories-library-title">
    <div className="container">
      <div className="stories-heading stories-heading-left">
        <p className="section-kicker">ALL STORIES</p>
        <h2 id="stories-library-title">마을의 시간을 골라 읽어보세요</h2>
        <p>실제 운영 기록과 출처가 있는 글, 계절을 담은 편집 이야기를 구분해 전합니다.</p>
      </div>
      <div className="stories-tools">
        <div className="stories-chips" aria-label="이야기 카테고리 필터">
          {storyCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="stories-search"><span className="sr-only">이야기 검색</span><Search size={19} aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="제목, 태그로 검색" aria-label="이야기 제목, 요약, 카테고리, 태그 검색" /></label>
      </div>
      <p className="stories-result-count" role="status" aria-live="polite">{results.length}개의 이야기를 찾았습니다.</p>
      {results.length ? <div className="story-card-grid">
        {results.map((story) => <article className="story-card" key={story.slug}>
          <Link href={`/stories/${story.slug}`} className="story-card-link" aria-label={`${story.title} 이야기 읽기`}>
            <div className="story-card-image"><Image src={story.coverImage} alt={story.coverAlt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 50vw, 400px" /></div>
            <div className="story-card-body">
              <span className="story-category">{story.category}</span>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <div className="story-tags" aria-label="태그">{story.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
              <footer><time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time><span>{story.readingMinutes}분 읽기</span><ArrowRight size={17} aria-hidden="true" /></footer>
            </div>
          </Link>
        </article>)}
      </div> : <div className="stories-empty"><Search size={32} aria-hidden="true" /><h3>아직 해당하는 이야기가 없습니다</h3><p>검색어를 줄이거나 다른 카테고리를 선택해 보세요. 모집 일정은 확인된 내용만 게시합니다.</p><button type="button" className="button button-outline" onClick={() => { setCategory("전체"); setQuery(""); }}>전체 이야기 보기</button></div>}
    </div>
  </section>;
}

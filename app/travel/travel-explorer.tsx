"use client";

import Image from "next/image";
import { ExternalLink, MapPin, Route, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { distanceFilters, themeFilters, travelAttractions, type DistanceFilter, type TravelTheme } from "@/data/travel";
import styles from "./page.module.css";

export function TravelExplorer() {
  const [distance, setDistance] = useState<DistanceFilter | "all">("all");
  const [theme, setTheme] = useState<TravelTheme | "all">("all");
  const visible = useMemo(() => travelAttractions.filter((place) => (distance === "all" || place.distanceFilter === distance) && (theme === "all" || (place.themes as readonly TravelTheme[]).includes(theme))), [distance, theme]);

  return <>
    <div className={styles.filters} aria-label="주변 관광지 필터">
      <div><b>거리</b><div role="group" aria-label="거리 필터"><button type="button" aria-pressed={distance === "all"} onClick={() => setDistance("all")}>전체</button>{distanceFilters.map((item) => <button key={item.id} type="button" aria-pressed={distance === item.id} onClick={() => setDistance(item.id)}>{item.label}</button>)}</div></div>
      <div><b>테마</b><div role="group" aria-label="테마 필터"><button type="button" aria-pressed={theme === "all"} onClick={() => setTheme("all")}>전체</button>{themeFilters.map((item) => <button key={item} type="button" aria-pressed={theme === item} onClick={() => setTheme(item)}>{item}</button>)}</div></div>
    </div>
    <p className={styles.resultCount} aria-live="polite">관광지 {visible.length}곳을 보여드립니다.</p>
    {visible.length > 0 ? <div className={styles.cardGrid}>{visible.map((place) => <article className={styles.card} key={place.id}>
      <div className={styles.cardMedia}><Image src={place.image} alt={place.imageAlt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 46vw, 31vw" /><span>{place.badge}</span></div>
      <div className={styles.cardBody}><p className={styles.type}>{place.type}</p><h3><a className={styles.cardHit} href={place.detailUrl} target={place.detailUrl.startsWith("/") ? undefined : "_blank"} rel="noreferrer">{place.name}</a></h3><p className={styles.summary}>{place.summary}</p><dl><div><dt>추천 계절</dt><dd>{place.season}</dd></div><div><dt>추천 대상</dt><dd>{place.audience}</dd></div><div><dt>마을 기준</dt><dd>{place.distance}</dd></div><div><dt>예상 이동</dt><dd>{place.travelTime}</dd></div></dl><p className={styles.note}>{place.note}</p><div className={styles.cardActions}><a href={place.detailUrl} target={place.detailUrl.startsWith("/") ? undefined : "_blank"} rel="noreferrer">자세히 보기 <ExternalLink size={14} /></a><a href={place.mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> 지도에서 보기</a></div></div>
      <small className={styles.credit}>사진: <a href={place.imageCreditUrl} target="_blank" rel="noreferrer">{place.imageCredit}</a></small>
    </article>)}</div> : <div className={styles.empty}><SearchX aria-hidden="true" /><h3>선택한 조건의 관광지가 없습니다</h3><p>거리 또는 테마 필터를 ‘전체’로 바꿔 다시 확인해 주세요.</p><button type="button" onClick={() => { setDistance("all"); setTheme("all"); }}><Route size={17} /> 필터 초기화</button></div>}
  </>;
}


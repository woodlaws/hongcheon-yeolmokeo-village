"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ConsultationLink, NaverBookingLink } from "@/components/booking-links";
import { stayPhotoGroups, type StayPhoto } from "@/data/stay-photos";
import { stayRooms } from "@/data/stay";

function Photo({photo,primary=false}:{photo:StayPhoto;primary?:boolean}) {
 const dialog=useRef<HTMLDialogElement>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 return <figure className={primary?'stay-inline-primary':'stay-inline-photo'} data-group-id={photo.groupId}>
 <button ref={trigger} className="stay-image-expand" aria-label={`${photo.caption} 확대`} onClick={()=>dialog.current?.showModal()}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} priority={primary} sizes={primary?'(max-width:767px) 100vw,55vw':'(max-width:767px) 50vw,33vw'}/><span aria-hidden="true">확대 ↗</span></button><figcaption>{photo.caption}</figcaption>
 <dialog ref={dialog} className="stay-photo-dialog" aria-label={`${photo.caption} 확대 사진`} onClose={()=>trigger.current?.focus()} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}><div className="stay-dialog-toolbar"><b>{photo.caption}</b><button autoFocus onClick={()=>dialog.current?.close()}>닫기 ×</button></div><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="96vw"/></dialog>
 </figure>;
}
export function StayGallery(){
 const [selected,setSelected]=useState('bogumjari');
 const section=useRef<HTMLElement>(null);
 useEffect(()=>{const sync=()=>{const raw=window.location.hash.replace(/^#(?:detail-|room-)/,'');const id=raw==='workation'?'community-hall':raw;if(stayRooms.some(r=>r.id===id)){setSelected(id);section.current?.scrollIntoView({block:'start'});}};sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);},[]);
 const room=stayRooms.find(r=>r.id===selected)!;
 const group=stayPhotoGroups.find(g=>g.id===selected)!;
 const primary=group.photos[selected==='hanok'?1:0];
 const rest=group.photos.filter(p=>p.id!==primary?.id);
 function select(id:string){setSelected(id);window.history.replaceState(null,'',window.location.pathname+window.location.search+`#detail-${id}`);}
 return <section ref={section} className="stay-selector" id="rooms" aria-labelledby="stay-title"><div className="container"><header className="stay-selector-heading"><p className="section-kicker">STAY IN NATURE</p><h1 id="stay-title">어디에서 머물고 싶으세요?</h1><p>숙소를 선택하면 실제 사진과 이용 정보를 바로 볼 수 있습니다.</p></header>
 <div className="stay-select-buttons" aria-label="숙소 선택">{stayRooms.map(r=><button key={r.id} aria-pressed={selected===r.id} aria-controls="selected-stay" onClick={()=>select(r.id)}><span>{r.name}</span>{selected===r.id&&<b aria-hidden="true">✓</b>}</button>)}</div>
 <article id="selected-stay" className="stay-selected" key={selected} data-selected-room={selected} aria-labelledby="selected-stay-title"><h2 id="selected-stay-title">{room.name}</h2>
 <div className="stay-selected-media">{primary?<Photo photo={primary} primary/>:<div className="stay-empty-photo"><span aria-hidden="true">⌂</span><p>숙소 사진 준비 중</p></div>}</div>
 <div className="stay-selected-info"><p className="stay-selected-summary">{room.summary}</p><dl><div><dt>이용 인원</dt><dd>{room.roomConfigurations.join(' · ')}</dd></div><div><dt>화장실</dt><dd>{room.privateBathroom===null?'상담 시 안내':room.privateBathroom?'객실 내 단독':'비움센터 내 공용'}</dd></div><div><dt>샤워실</dt><dd>{room.privateShower===null?'상담 시 안내':room.privateShower?'객실 내 단독':'비움센터 내 공용'}</dd></div></dl>
 {selected==='community-hall'?<p>10명 이상 단체가 함께 숙박할 수 있는 숙소입니다. 최대 정원·방 개수·독채 여부·욕실 구성은 상담 시 안내합니다.</p>:<p className="stay-selected-note">{selected==='hanok'?'사진은 외관과 앞마루 모습입니다. 내부 사진은 준비 중입니다.':selected==='bieum-center'?'화장실 사진은 공용 화장실 출입구이며 욕실 내부 사진이 아닙니다.':'달·해·바람 이름표와 개별 내부 사진의 연결은 확정하지 않았습니다.'}</p>}
 <div className="stay-selected-actions">{selected==='community-hall'?<ConsultationLink href="/contact?type=group" type="group" className="button button-primary" position="stay-room-community-hall">단체 숙박 상담</ConsultationLink>:<><NaverBookingLink className="button button-primary" position={`stay-room-${selected}`}>네이버 예약</NaverBookingLink><ConsultationLink href="/contact?type=stay" type="stay" className="button button-outline" position={`stay-room-${selected}`}>숙박 상담</ConsultationLink></>}</div>{selected!=='community-hall'&&<p>실시간 일정과 이용금액은 네이버 예약에서 확인해 주세요.</p>}</div>
 </article>
 {rest.length>0&&<div className="stay-visible-photos" aria-label={`${room.name} 나머지 사진`}><h3>{room.name} 더 둘러보기 <span>{group.photos.length}장</span></h3><div>{rest.map(photo=><Photo key={photo.id} photo={photo}/>)}</div><p>사진 속 침대 수는 예약 정원을 뜻하지 않습니다.</p></div>}
 </div></section>;
}
export function ClassroomGallery(){const group=stayPhotoGroups.find(g=>g.id==='classroom')!;return <section className="stay-section"><div className="container"><div className="stay-heading"><p className="section-kicker">MEETING SPACE</p><h2>함께 배우고 모이는 강의장</h2><p>숙박 객실과 구분되는 별도 시설입니다. 정원·장비·이용 조건은 상담 시 안내합니다.</p></div><div className="stay-classroom-photos">{group.photos.map(p=><Photo key={p.id} photo={p}/>)}</div></div></section>;}

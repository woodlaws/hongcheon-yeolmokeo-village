"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ConsultationLink } from "@/components/booking-links";
import { stayPhotoGroups, type StayPhotoGroup } from "@/data/stay-photos";

export function StayRoomPhoto({roomId}:{roomId:string}) {
 const group=stayPhotoGroups.find(g=>g.id===roomId);
 const photo=group?.photos[roomId==='hanok'?1:0];
 return photo?<figure className="stay-card-photo"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width:767px) 100vw,50vw"/><figcaption>{photo.caption}</figcaption></figure>:<div className="stay-photo-pending">사진 준비 중</div>;
}

function GroupGallery({group,hashEnabled=false}:{group:StayPhotoGroup;hashEnabled?:boolean}) {
 const [index,setIndex]=useState(0);
 const dialog=useRef<HTMLDialogElement>(null);
 const trigger=useRef<HTMLElement|null>(null);
 const close=useRef<HTMLButtonElement>(null);
 const photos=group.photos;
 function open(element?:HTMLElement){trigger.current=element??null;setIndex(0);dialog.current?.showModal();close.current?.focus();}
 useEffect(()=>{
  if(!hashEnabled)return;
  const sync=()=>{const hash=window.location.hash;const expected=`#detail-${group.id}`;if(hash===expected||(group.id==='community-hall'&&hash==='#detail-workation')){trigger.current=document.querySelector(`a[href="${expected}"]`);setIndex(0);if(!dialog.current?.open)dialog.current?.showModal();close.current?.focus();}};
  sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);
 },[group.id,hashEnabled]);
 const photo=photos[index];
 function move(delta:number){if(photos.length)setIndex(i=>(i+delta+photos.length)%photos.length);}
 return <article className="stay-group" data-group-id={group.id}><h3>{group.name}</h3><p>{group.id==='community-hall'?'10명 이상 단체 숙박 가능 · 최대 정원과 이용 조건은 상담 시 안내합니다.':group.id==='hanok'?'외관과 앞마루 사진 2장입니다. 내부 사진은 준비 중입니다.':group.kind==='facility'?'강의장 모습입니다. 이용 조건은 상담 시 확인해 주세요.':`${photos.length}장의 실제 사진으로 살펴보세요.`}</p>
 <button className="button button-outline" onClick={e=>open(e.currentTarget)}>{group.id==='community-hall'?'마을회관 숙소 자세히 보기':`${group.name} 사진 ${photos.length}장 보기`}</button>
 <dialog ref={dialog} className="stay-photo-dialog" aria-label={`${group.name} 상세 보기`} onClose={()=>{if(hashEnabled&&window.location.hash.startsWith('#detail-'))window.history.replaceState(null,'',window.location.pathname+window.location.search+'#rooms');trigger.current?.focus();}} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}if(e.key==='ArrowRight'){e.preventDefault();move(1);}}}>
 <div className="stay-dialog-toolbar"><h3>{group.name}</h3><button ref={close} onClick={()=>dialog.current?.close()} aria-label={`${group.name} 닫기`}>닫기 ×</button></div>
 {photo?<><figure data-group-id={photo.groupId}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="96vw"/><figcaption aria-live="polite"><b>{photo.caption}</b><span>{index+1} / {photos.length}</span></figcaption></figure><div className="stay-dialog-nav"><button onClick={()=>move(-1)}>← 이전 사진</button><button onClick={()=>move(1)}>다음 사진 →</button></div><div className="stay-thumbnails">{photos.map((p,i)=><button key={p.id} aria-label={p.caption} aria-pressed={i===index} onClick={()=>setIndex(i)}><Image src={p.src} alt="" width={p.width} height={p.height} sizes="80px"/></button>)}</div></>:<><p className="stay-photo-pending">사진 준비 중</p><p>10명 이상 단체가 함께 숙박할 수 있는 마을회관 숙소입니다. 최대 정원·방 개수·독채 여부·욕실 구성은 상담 시 안내합니다.</p><ConsultationLink className="button button-light" href="/contact?type=group" type="group" position="stay-community-hall-detail">단체 숙박 상담하기</ConsultationLink></>}
 {group.id==='bogumjari'&&<p>달·해·바람 이름표와 개별 내부 사진의 연결은 확정하지 않았습니다.</p>}{group.id==='bieum-center'&&<p>화장실 사진은 출입구이며 욕실·샤워실 내부 사진이 아닙니다.</p>}
 </dialog></article>;
}
export function StayGallery(){return <section className="stay-section" id="stay-photos"><div className="container"><div className="stay-heading"><p className="section-kicker">EXPLORE YOUR STAY</p><h2>숙소별로 자세히 살펴보세요</h2><p>선택한 숙소의 사진만 표시합니다. 사진 속 침대 수는 예약 정원을 뜻하지 않습니다.</p></div><div className="stay-photo-details">{stayPhotoGroups.filter(g=>g.kind==='lodging').map(group=><GroupGallery key={group.id} group={group} hashEnabled/>)}</div></div></section>;}
export function ClassroomGallery(){const group=stayPhotoGroups.find(g=>g.id==='classroom');return group?<section className="stay-section"><div className="container"><div className="stay-heading"><p className="section-kicker">MEETING SPACE</p><h2>함께 배우고 모이는 강의장</h2><p>숙박 객실과 구분되는 별도 시설입니다. 정원·장비·이용 조건은 상담 시 안내합니다.</p></div><div className="stay-classroom-photos">{group.photos.map(p=><figure key={p.id}><Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(max-width:767px) 100vw,50vw"/><figcaption>{p.caption}</figcaption></figure>)}</div><GroupGallery group={group}/></div></section>:null;}


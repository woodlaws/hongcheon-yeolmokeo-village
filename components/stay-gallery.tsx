"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { stayPhotos } from "@/data/stay-photos";

export function StayRoomPhoto({ roomId }: { roomId: string }) {
 const key = roomId === "bogumjari" ? "bogumjari-exterior" : roomId === "bieum-center" ? "bieum-sign" : null;
 const photo = stayPhotos.find(p => p.key === key);
 return photo ? <figure className="stay-card-photo"><Image src={photo.src} alt={photo.caption} width={1600} height={901} sizes="(max-width: 767px) 100vw, 50vw" /><figcaption>{photo.caption}</figcaption></figure> : <div className="stay-photo-pending">{roomId === "hanok" ? "해당 숙소의 외관·내부 사진은 확인 중입니다." : "워케이션은 배정 숙소에 따라 객실이 달라집니다."}</div>;
}

export function StayGallery() {
 const [index, setIndex] = useState(0);
 const dialog = useRef<HTMLDialogElement>(null);
 const close = useRef<HTMLButtonElement>(null);
 const trigger = useRef<HTMLElement | null>(null);
 const photo = stayPhotos[index];
 function openPhoto(i: number, element: HTMLElement) {
  trigger.current = element;
  setIndex(i);
  dialog.current?.showModal();

  close.current?.focus();
 }
 function closePhoto() { dialog.current?.close(); }
 function move(delta: number) { setIndex(i => (i + delta + stayPhotos.length) % stayPhotos.length); }
 return <section className="stay-section stay-real-gallery" id="stay-photos" aria-labelledby="stay-photos-title"><div className="container">
 <div className="stay-heading"><p className="section-kicker">REAL STAY PHOTOS</p><h2 id="stay-photos-title">사진으로 살펴보는 마을과 객실</h2><p>실제 촬영 사진입니다. 객실 A~E의 건물과 방 이름은 확인 중이며, 특정 예약 상품의 객실을 뜻하지 않습니다.</p></div>
 <div className="stay-photo-details">{[
  {id:"bogumjari",title:"보금자리",text:"표지가 보이는 외관 사진을 확인하세요. 해당 객실 내부 사진은 연결 확인 중입니다.",i:6},
  {id:"bieum-center",title:"비움센터",text:"건물 이름표 사진입니다. 객실 내부 및 시설 사진과의 연결은 확인 중입니다.",i:7},
  {id:"hanok",title:"한옥 숙소",text:"사진 06의 한옥 형태 건물이 해당 숙박 건물인지는 확인 중입니다. 연결이 확인된 내부 사진은 아직 없습니다.",i:5},
  {id:"workation",title:"워케이션 체류",text:"별도 건물이나 객실 유형을 뜻하지 않습니다. 아래 실내 공간의 시설명·이용 조건과 실제 배정 숙소는 상담 시 확인해 주세요.",i:10}
 ].map(item=><article id={`detail-${item.id}`} key={item.id}><h3>{item.title}</h3><p>{item.text}</p><button className="button button-outline" onClick={e=>openPhoto(item.i,e.currentTarget)}>{item.id === "hanok" ? "연결 확인 중인 외관 사진 보기" : item.id === "workation" ? "실내 공간 참고 사진 보기" : "사진 보기"}</button></article>)}</div>
 <div className="stay-photo-grid">{stayPhotos.map((p,i)=><button className="stay-photo-item" key={p.key} onClick={e=>openPhoto(i,e.currentTarget)} aria-label={`${p.caption} 확대 보기`}><Image src={p.src} alt={p.caption} width={1600} height={901} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>{p.caption}</span><small>{p.note}</small></button>)}</div>
 <p className="stay-gallery-note">화장실 사진은 출입구 모습이며 욕실·샤워실 내부 사진이 아닙니다. 책상과 의자가 놓인 공간의 시설명과 이용 조건은 확인 중입니다. 사진 속 침대 수는 예약 정원을 뜻하지 않습니다.</p>
 <dialog ref={dialog} className="stay-photo-dialog" aria-label="실제 숙소 사진 확대" onClose={()=>{trigger.current?.focus();}} onClick={e=>{if(e.target===e.currentTarget)closePhoto();}} onKeyDown={e=>{if(e.key==="ArrowLeft"){e.preventDefault();move(-1);}if(e.key==="ArrowRight"){e.preventDefault();move(1);}}}>
 <div className="stay-dialog-toolbar"><span aria-live="polite">{index+1} / {stayPhotos.length}</span><button ref={close} onClick={closePhoto} aria-label="확대 사진 닫기">닫기 ×</button></div>
 <figure><Image src={photo.src} alt={photo.caption} width={1600} height={901} sizes="96vw" /><figcaption aria-live="polite"><b>{photo.caption}</b><span>{photo.note}</span></figcaption></figure>
 <div className="stay-dialog-nav"><button onClick={()=>move(-1)}>← 이전 사진</button><button onClick={()=>move(1)}>다음 사진 →</button></div>
 </dialog></div></section>;
}


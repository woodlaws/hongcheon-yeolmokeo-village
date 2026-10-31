import Image from "next/image";
import { healingGroups, healingPhotoPreview } from "@/data/healing-photos";

export function HealingRealGallery({programSlug}:{programSlug:string}) {
 const groups=healingGroups(programSlug);
 if(!groups.length)return null;
 return <section className="content-section healing-real" aria-labelledby={`${programSlug}-real-title`}><div className="container"><p className="section-kicker">REAL EXPERIENCES</p><h2 id={`${programSlug}-real-title`}>실제 방문 체험 모습</h2><p className="section-intro">방문 당시 체험 모습이며, 당일 프로그램과 순서는 계절·날씨·인원에 따라 상담합니다.</p>{healingPhotoPreview&&<p className="healing-preview-note">로컬 사진 검토본 · 식별 가능한 인물 사진의 공개 동의 확인 전입니다.</p>}
 {groups.map(group=>{const lead=group.photos.find(p=>p.id==='singing-bowl-guide')??group.photos[0];const others=group.photos.filter(p=>p.id!==lead.id);return <article key={group.id} className="healing-real-activity" data-healing-group={group.id}><div className="healing-real-copy"><p className="healing-real-label">실제 방문 체험 모습</p><h3>{group.heading}</h3><p>{group.body}</p></div><div className="healing-real-photos"><figure className="healing-real-lead"><Image src={lead.src} alt={lead.alt} width={lead.width} height={lead.height} sizes="(max-width:767px) 100vw,60vw"/><figcaption>{lead.caption}</figcaption></figure>{others.length>0&&<div className={`healing-real-support healing-real-support-${others.length}`}>{others.map(p=><figure key={p.id}><Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(max-width:767px) 50vw,25vw"/><figcaption>{p.caption}</figcaption></figure>)}</div>}</div></article>})}</div></section>;
}

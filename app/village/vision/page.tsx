import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, HandHeart, Leaf, Wind } from "lucide-react";
import Link from "@/components/static-link";
import { VillagePageFrame } from "@/components/village-page-frame";

export const metadata: Metadata = { title: "마을 비전｜홍천 열목어마을", description: "자연 보전, 일상의 휴식, 생태교육, 주민과의 상생을 지향하는 홍천 열목어마을의 가치와 방문 약속을 소개합니다.", alternates: { canonical: "/village/vision" } };
const values = [
  { icon: Leaf, number: "01", title: "자연 보전", text: "물과 숲, 그 안에서 살아가는 생명이 어우러지는 환경을 소중히 여깁니다. 방문과 체험이 자연을 소모하는 일이 아니라 오래 지키는 태도로 이어지도록 안내합니다." },
  { icon: Wind, number: "02", title: "일상의 휴식", text: "방문객이 정해진 성과를 내기보다 자연 속에서 자신의 속도를 되찾도록 돕습니다. 머무는 시간의 양보다 몸과 마음이 편안해지는 경험을 중요하게 생각합니다." },
  { icon: BookOpen, number: "03", title: "생태교육", text: "아이와 어른이 계곡과 숲을 가까이에서 만나며 자연의 가치와 생명을 배려하는 방법을 함께 배우는 마을을 지향합니다." },
  { icon: HandHeart, number: "04", title: "주민과의 상생", text: "방문객의 체류와 교류가 지역의 먹거리, 사람, 생활문화와 건강하게 연결되어 마을의 지속적인 활력으로 이어지도록 합니다." },
];
export default function VisionPage() { return <VillagePageFrame eyebrow="OUR VISION" title="자연을 지키는 방문이, 마을의 내일을 만듭니다" description="쉼과 배움, 주민의 삶이 서로를 해치지 않고 오래 이어지는 산촌마을을 지향합니다." image="/images/village-vision-2.jpg" imageAlt="열목어마을 숲속 해먹에서 자연을 느끼며 쉬는 모습">
  <section className="village-vision-intro"><div className="container"><p className="section-kicker">VISION STATEMENT</p><h2>물과 숲, 사람의 삶이 함께 건강해지는 마을</h2><p>아래 네 가지는 공개된 마을 소개의 자연·치유·상생 취지를 바탕으로 정리한 홈페이지용 제안 문안입니다. 공식 비전 문구로 확정하기 전 마을 운영 주체의 검토가 필요합니다.</p></div></section>
  <section className="village-vision-values"><div className="container">{values.map(({ icon: Icon, ...value }) => <article key={value.number}><span>{value.number}</span><Icon aria-hidden="true" /><div><h2>{value.title}</h2><p>{value.text}</p></div></article>)}</div></section>
  <section className="village-promise"><div className="container"><div className="village-promise-photo"><Image src="/images/yeolmokeo-village-panorama-02.jpg" width={3072} height={2304} sizes="(max-width: 767px) calc(100vw - 40px), 45vw" alt="산과 하천을 따라 집과 밭이 자리한 열목어마을 전경" /></div><article><p className="section-kicker">A SMALL PROMISE</p><h2><span>방문객과 함께 지키는</span><span>작은 약속</span></h2><ul><li>정해진 길과 현장 안내를 따르고 생명의 자리를 침범하지 않습니다.</li><li>물고기를 잡거나 먹이를 주지 않고, 계곡의 돌과 식물을 그대로 둡니다.</li><li>쓰레기와 일회용품을 줄이고 머문 자리를 깨끗하게 돌봅니다.</li><li>마을 주민의 생활 공간과 다른 방문객의 쉼을 존중합니다.</li></ul><div className="village-inline-actions"><Link href="/village/yeolmokeo" className="button button-primary">열목어 이야기 읽기 <ArrowRight size={17} /></Link><Link href="/programs" className="button button-outline">체험 둘러보기</Link></div></article></div></section>
 </VillagePageFrame>; }

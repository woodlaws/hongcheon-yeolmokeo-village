import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ExternalLink, Fish, ShieldCheck, Snowflake } from "lucide-react";
import Link from "@/components/static-link";
import { VillagePageFrame } from "@/components/village-page-frame";
import { villageSources } from "@/data/village-pages";

export const metadata: Metadata = { title: "열목어 이야기｜차가운 계곡에 사는 멸종위기 야생생물", description: "열목어의 생김새, 서식환경, 번식, 보호 지위와 홍천 명개리 열목어 서식지를 공식 자료를 바탕으로 쉽게 소개합니다.", alternates: { canonical: "/village/yeolmokeo" } };
const toc = [["fish-about", "열목어는 어떤 물고기인가요?"], ["fish-home", "어떤 환경에서 살아가나요?"], ["fish-village", "열목어와 홍천 열목어마을"], ["fish-protect", "왜 보호해야 하나요?"], ["fish-etiquette", "자연을 배려하며 만나는 방법"], ["fish-faq", "자주 묻는 질문"]] as const;
const faqs = [
  ["열목어와 산천어는 어떻게 다른가요?", "둘 다 연어과 민물고기지만 서로 다른 종입니다. 열목어는 열목어속, 산천어는 연어속에 속하며 생김새와 생태에도 차이가 있습니다. 사진만으로 혼동하기 쉬우므로 공신력 있는 도감의 분류와 특징을 함께 확인하는 것이 좋습니다."],
  ["열목어는 왜 이런 이름을 가졌나요?", "이름의 유래에 관해 여러 설명이 전해지지만, 이 페이지에서는 공식 자료로 확정하기 어려운 이야기를 사실처럼 소개하지 않습니다. 과학적으로 확인된 분류와 생태 정보는 국립생태원·국립생물자원관 자료를 기준으로 안내합니다."],
  ["마을에 가면 열목어를 볼 수 있나요?", "자연 상태의 야생생물은 계절, 수온, 날씨와 출입 여건에 따라 모습을 드러내지 않을 수 있습니다. 방문한다고 해서 관찰을 보장할 수 없으며, 현장 안내와 보호 구역의 출입 규정을 먼저 따라야 합니다."],
  ["열목어 전체가 천연기념물인가요?", "아닙니다. 열목어라는 종은 멸종위기 야생생물 Ⅱ급으로 보호됩니다. 한편 일부 특정 서식지는 별도의 자연유산 또는 지방기념물로 지정됩니다. 홍천 명개리 열목어 서식지는 강원특별자치도 기념물입니다."],
  ["아이와 방문하기 전에 무엇을 알려주면 좋을까요?", "물고기를 잡거나 먹이를 주지 않기, 돌을 뒤집거나 가져가지 않기, 물가에서 뛰지 않기, 쓰레기를 남기지 않기를 함께 약속해 주세요. 현장 안전 안내와 출입 제한이 있으면 반드시 따릅니다."],
  ["우리가 열목어를 위해 할 수 있는 일은 무엇인가요?", "계곡의 물을 더럽히지 않고 서식처를 훼손하지 않는 것이 가장 직접적인 도움입니다. 지정된 동선을 이용하고, 야생생물 사진을 찍기 위해 가까이 쫓거나 손으로 만지지 마세요."],
] as const;
export default function YeolmokeoPage() {
  const faqJson = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <VillagePageFrame eyebrow="YEOLMOKEO ECOLOGY" title="차가운 계곡이 품은 생명, 열목어" description="마을 이름에 담긴 물고기를 정확한 생태 정보와 자연을 배려하는 방법으로 만나보세요." image="/images/forest-2.jpg" imageAlt="열목어가 살아갈 수 있는 차갑고 맑은 산간 계곡 환경">
    <section className="fish-intro"><div className="container"><div className="fish-symbol"><Image src="/images/hongcheon-yeolmokeo-logo.png" width={1280} height={796} alt="홍천 열목어마을 공식 로고에 표현된 열목어 캐릭터" /><small>실물 사진이 아닌 마을 공식 로고의 설명용 캐릭터입니다.</small></div><div><p className="section-kicker">QUICK FACTS</p><h2>열목어를 먼저 알아볼까요?</h2><div className="fish-facts"><article><Fish /><b>분류</b><span>연어목 연어과 열목어속</span></article><article><Snowflake /><b>서식</b><span>차갑고 깨끗한 산간 계류</span></article><article><ShieldCheck /><b>보호</b><span>멸종위기 야생생물 Ⅱ급</span></article></div><a href={villageSources.nieSpecies} target="_blank" rel="noreferrer" className="text-link">국립생태원 열목어 실물 사진과 정보 보기 <ExternalLink size={15} /></a></div></div></section>
    <section className="fish-reading"><div className="container">
      <aside className="fish-toc"><strong>이 페이지의 목차</strong><nav>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></aside>
      <details className="fish-toc-mobile"><summary>목차 열기</summary><nav>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></details>
      <article className="fish-article">
        <section id="fish-about"><span>01</span><h2>열목어는 어떤 물고기인가요?</h2><p>열목어는 연어목 연어과 열목어속에 속하는 차가운 물을 좋아하는 민물고기입니다. 국립생태원은 학명을 <i>Brachymystax lenok tsinlingensis</i>로 안내합니다. 등 쪽은 갈색을 띠고 배 쪽은 은백색이며, 몸과 머리에는 어두운 갈색의 작은 반점이 나타납니다. 연어과 물고기의 특징인 작은 기름지느러미도 볼 수 있습니다.</p><p>어린 개체의 옆면에는 세로로 길쭉한 무늬가 나타나다가 자라면서 점차 흐려집니다. 열목어라는 이름의 유래에는 여러 이야기가 전하지만, 근거가 분명하지 않은 설명은 과학적으로 확인된 특징과 구분해야 합니다. 그래서 이 페이지는 전승을 단정하지 않고 공식 생태 자료에 확인되는 내용부터 소개합니다.</p></section>
        <section id="fish-home"><span>02</span><h2>어떤 환경에서 살아가나요?</h2><p>열목어의 집은 물이 차고 산소가 풍부한 산간 하천 상류입니다. 국립생태원 자료는 연중 수온이 약 15℃ 이하로 유지되는 여울을 주요 서식환경으로 설명하며, 겨울에는 중·하류 쪽으로 이동하기도 한다고 안내합니다. 물속의 작은 곤충과 어린 물고기 등을 먹고 살아갑니다.</p><p>번식기는 보통 4월부터 5월 초입니다. 수온이 약 7~10℃인 시기에 암컷이 모래와 자갈이 있는 바닥에 알을 낳으면 수컷이 수정하고, 다시 모래와 자갈로 덮습니다. 차가운 물과 다양한 크기의 돌, 그늘을 만드는 숲이 함께 있어야 알과 어린 물고기, 성체가 살아갈 공간이 이어집니다.</p></section>
        <section id="fish-village"><span>03</span><h2>열목어와 홍천 열목어마을</h2><p>열목어마을은 홍천군 내면 명개리에 있습니다. 마을에서 약 1.6km 떨어진 계방천 일원에는 ‘홍천 명개리 열목어 서식지’가 있으며, 홍천군 문화관광포털은 이곳의 물이 11~13.5℃이고 암반·돌·자갈·모래와 주변 숲이 고루 갖춰져 있다고 설명합니다.</p><p>마을 이름은 이 청정한 자연환경과 열목어의 존재를 함께 떠올리게 합니다. 다만 마을의 공식 명명 시기와 유래를 확인할 1차 자료는 아직 확보되지 않았으므로 특정한 역사 이야기를 만들어 붙이지 않았습니다. 또한 마을 시설과 보호되는 서식지는 같은 장소가 아닙니다. 방문 전 목적지와 출입 안내를 구분해 확인해야 합니다.</p><figure><Image src="/images/valley-rest.png" width={1200} height={760} alt="큰 바위와 숲 사이로 맑은 물이 흐르는 산간 계곡" /><figcaption>열목어는 차갑고 깨끗한 산간 계류와 주변 숲이 이어지는 환경에 의존합니다. 사진은 계곡 환경을 설명하는 이미지입니다.</figcaption></figure></section>
        <section id="fish-protect"><span>04</span><h2>왜 보호해야 하나요?</h2><p>열목어는 차갑고 깨끗한 물에서만 살아갈 수 있어 하천 환경의 변화를 민감하게 보여주는 생명입니다. 수온 상승, 물길의 단절, 토사와 오염물 유입, 하천 공사와 무분별한 채집은 서식처를 좁히고 번식을 어렵게 만듭니다. 기후가 따뜻해질수록 찬물을 유지하는 상류의 공간도 줄어들 수 있습니다.</p><div className="fish-protection-note"><ShieldCheck /><p><b>종과 서식지의 보호 지위는 다릅니다.</b> 열목어라는 종은 환경부 지정 멸종위기 야생생물 Ⅱ급입니다. ‘홍천 명개리 열목어 서식지’는 1994년 강원특별자치도 기념물로 지정된 특정 장소입니다. 따라서 열목어 전체를 천연기념물이라고 표현하지 않습니다.</p></div></section>
        <section id="fish-etiquette"><span>05</span><h2>자연을 배려하며 만나는 방법</h2><ul className="fish-rules"><li>현장의 안내 표지와 출입 규정, 안전요원의 안내를 따릅니다.</li><li>열목어를 비롯한 물고기를 잡거나 만지거나 먹이를 주지 않습니다.</li><li>하천의 돌을 뒤집거나 옮기지 않고, 식물과 물길을 훼손하지 않습니다.</li><li>쓰레기와 음식물을 남기지 않으며 큰 소리와 과도한 조명을 줄입니다.</li><li>자연 상태의 야생생물이므로 방문 시 관찰을 보장할 수 없음을 이해합니다.</li></ul></section>
        <section id="fish-faq"><span>06</span><h2>자주 묻는 질문</h2><div className="fish-faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
        <section className="fish-sources"><h2>참고한 공식 자료</h2><ul><li><a href={villageSources.nieSpecies} target="_blank" rel="noreferrer">국립생태원 — 멸종위기종 검색 ‘열목어’ <ExternalLink size={14} /></a></li><li><a href={villageSources.nieProfile} target="_blank" rel="noreferrer">국립생태원 — 이달의 멸종위기 야생생물 ‘열목어’ <ExternalLink size={14} /></a></li><li><a href={villageSources.nibr} target="_blank" rel="noreferrer">국립생물자원관 — 국가생물종지식정보 열목어 분류 <ExternalLink size={14} /></a></li><li><a href={villageSources.habitat} target="_blank" rel="noreferrer">홍천군 문화관광포털 — 홍천 명개리 열목어 서식지 <ExternalLink size={14} /></a></li></ul></section>
        <div className="village-inline-actions"><Link href="/programs" className="button button-primary">체험 안내 <ArrowRight size={17} /></Link><Link href="/stay" className="button button-outline">숙박 안내</Link></div>
      </article>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
  </VillagePageFrame>;
}

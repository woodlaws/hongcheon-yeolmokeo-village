import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Mountain, Users, Waves } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, FactCard, Section } from "@/components/content-blocks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "마을 이야기", description: "백두대간과 1급수 계곡을 품은 홍천 열목어마을의 자연, 주민, 비전과 오시는 길을 소개합니다.", alternates: { canonical: "/village" } };

export default function VillagePage() {
  return <PageLayout eyebrow="VILLAGE STORY" title="물과 숲이 지켜온 마을" description="해발 700m 백두대간 깊은 자락, 자연의 속도에 맞춰 살아가는 열목어마을입니다." image="/images/forest-2.jpg">
    <Section kicker="우리 마을" title="개발보다 보전을, 관광보다 관계를" intro="열목어가 살아가는 깨끗한 물과 주민의 생활이 함께 이어질 수 있도록, 체류형 치유와 농촌체험을 만들어 갑니다.">
      <div className="facts-grid"><FactCard title="청정 자연"><Waves/><p>통마람 계곡과 열목어 서식지를 품은 맑은 물의 마을</p></FactCard><FactCard title="백두대간"><Mountain/><p>오대산국립공원과 이어지는 해발 700m 산촌</p></FactCard><FactCard title="주민 주도"><Users/><p>주민의 전문 역량과 생활 지혜로 운영하는 프로그램</p></FactCard><FactCard title="치유농업"><Leaf/><p>농촌의 자원을 쉼과 회복의 경험으로 연결</p></FactCard></div>
    </Section>
    <Section title="사람이 곧 마을의 프로그램입니다" intro="숲 해설, 심리 상담, 약선 음식, 자연 놀이 등 주민들이 쌓아 온 전문성과 환대가 열목어마을의 가장 중요한 자원입니다." tone="cream"><div className="split-media"><div><h3>마을의 비전</h3><p>한 번 다녀가는 관광지가 아니라, 다시 일상으로 돌아갈 힘을 얻는 회복의 마을을 지향합니다.</p><h3>자연을 대하는 태도</h3><p>계곡과 숲을 소모하지 않고 다음 세대와 나누는 방식으로 프로그램을 운영합니다.</p></div><Image src="/images/village-arrival.png" alt="열목어마을 운영 시설" width={960} height={640}/></div></Section>
    <Section title="찾아오시는 길" intro="출발 전 운영자와 방문 시간, 도로 상황, 주차 위치를 확인해 주세요."><div className="location-card"><div><strong>주소</strong><p>{siteConfig.address}</p><p className="notice">전화번호와 운영시간은 확인 후 공개 예정입니다.</p></div><a href={siteConfig.mapUrl} target="_blank" rel="noreferrer" className="button button-primary">지도에서 보기</a></div></Section>
    <ActionBand title="마을에서 보낼 시간을 함께 골라보세요" text="개인 휴식부터 가족 체험, 단체 일정까지 목적에 맞춰 안내합니다." />
  </PageLayout>;
}

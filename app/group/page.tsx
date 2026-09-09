import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/static-link";
import { Building2, GraduationCap, Landmark, Leaf, Utensils, BedDouble } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ActionBand, Section } from "@/components/content-blocks";

export const metadata: Metadata={title:"단체·워크숍",description:"기업 워크숍, 공공기관 연수, 학교 농촌교육, 치유농업 프로그램을 숙박·식사와 함께 맞춤 구성합니다.",alternates:{canonical:"/group"}};
export default function GroupPage(){return <PageLayout eyebrow="GROUP & WORKSHOP" title="회의실 밖에서 다시 연결되는 팀" description="기업·기관·학교의 목적에 맞춰 공간, 숙박, 식사와 치유 활동을 하나의 일정으로 제안합니다." image="/images/farm-experience.png">
  <Section kicker="대상별 제안" title="같은 장소, 다른 목적"><div className="facts-grid"><article><Building2/><h3>기업 워크숍</h3><p>번아웃 예방, 팀 리프레시, 관계 회복 중심</p></article><article><Landmark/><h3>공공기관 연수</h3><p>치유농업 이해와 조직 회복 프로그램</p></article><article><GraduationCap/><h3>학교·교육기관</h3><p>자연 관찰, 농촌 노동, 공동체 학습</p></article><article><Leaf/><h3>치유농업</h3><p>농촌 자원과 오감 활동을 연결한 맞춤 과정</p></article></div></Section>
  <Section title="공간·잠자리·밥상을 한 흐름으로" intro="이동을 줄이고 대화와 회복에 집중할 수 있도록 필요한 요소를 함께 조율합니다." tone="cream"><div className="split-media reverse"><Image src="/images/village-arrival.png" alt="단체 프로그램 운영이 가능한 열목어마을 시설" width={960} height={640}/><div className="icon-list"><div><Building2/><span><b>모임 공간</b>실내·외 교육장 운영 정보 확인</span></div><div><BedDouble/><span><b>숙박</b>보금자리·비움센터·한옥숙소</span></div><div><Utensils/><span><b>식사</b>지역 제철 재료 중심, 알레르기 사전 확인</span></div></div></div></Section>
  <Section title="1박 2일 추천 흐름"><ol className="timeline"><li><span>01</span><div><h3>도착·조직 체크인</h3><p>마을 안내와 참여자의 현재 컨디션을 가볍게 살핍니다.</p></div></li><li><span>02</span><div><h3>자연 속 협업과 회복</h3><p>숲 걷기, 계곡 쉼, 농촌체험 중 목적에 맞는 활동을 구성합니다.</p></div></li><li><span>03</span><div><h3>치유밥상·대화</h3><p>지역 식재료로 차린 저녁과 조용한 나눔 시간을 갖습니다.</p></div></li><li><span>04</span><div><h3>다음 날 정리</h3><p>가벼운 아침 활동 후 팀이 가져갈 한 가지 변화를 정리합니다.</p></div></li></ol><div className="notice-card compact"><p>단체 최대 수용 인원, 전용 공간, 차량 동선, 견적은 일정과 구성에 따라 확인합니다.</p><Link href="/contact?type=group" className="button button-primary">맞춤 견적 문의</Link></div></Section>
  <ActionBand title="우리 조직에 필요한 하루를 설계해 보세요" text="목적, 인원, 희망 날짜를 남기면 가능한 공간과 프로그램을 함께 확인합니다." href="/contact?type=group" label="단체 견적 문의" />
</PageLayout>}

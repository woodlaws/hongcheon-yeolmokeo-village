import { villageSources } from "@/data/village-pages";

export type Facility = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  details: string[];
  activities: string[];
  image: { src: string; alt: string; caption: string };
  link?: { href: string; label: string };
  source: { label: string; href: string };
};

export const facilities: Facility[] = [
  {
    id: "bogumjari",
    name: "보금자리",
    eyebrow: "STAY",
    summary: "기존 숙박 안내에서 별도 이름으로 소개하는 마을의 숙박 공간입니다.",
    details: ["객실 구성과 이용 기준은 숙박 안내 페이지에서 한곳에 관리합니다.", "실시간 일정과 최종 배정 객실은 예약 단계에서 확인해 주세요."],
    activities: ["마을에서 머무르기", "숙박과 프로그램 일정 상담"],
    image: { src: "/images/stay-room.png", alt: "홍천 열목어마을 숙박 객실 내부", caption: "기존 숙박 안내에 사용 중인 열목어마을 객실 사진" },
    link: { href: "/stay#room-bogumjari", label: "숙박 안내에서 확인하기" },
    source: { label: "열목어마을 기존 숙박 안내", href: "/stay" },
  },
  {
    id: "sarangbang",
    name: "사랑방",
    eyebrow: "WORK & COMMUNITY",
    summary: "기존 98 스테이워크 안내에서 이용 안내와 소통, 업무 지원을 위한 공간으로 소개된 곳입니다.",
    details: ["워케이션 안내에는 비움센터 오피스와 함께 공유 업무 공간으로 소개되어 있습니다.", "현재 이용 가능 일정, 좌석 배치와 제공 비품은 시설 이용 전에 담당자와 확인합니다."],
    activities: ["워케이션 업무", "이용 안내와 소통", "다과와 휴식"],
    image: { src: "/images/programs/98-staywork-poster.png", alt: "숲에서 일하고 쉬는 98 스테이워크 안내 이미지", caption: "사랑방 이용이 포함된 기존 98 스테이워크 안내 이미지" },
    link: { href: "/programs/98-staywork", label: "98 스테이워크 보기" },
    source: { label: "98 스테이워크 기존 안내", href: "/programs/98-staywork" },
  },
  {
    id: "education-space",
    name: "교육 공간",
    eyebrow: "LEARN & EXPERIENCE",
    summary: "홍천군 공식 현황에서 실내·외 교육장으로 확인되는 마을의 교육·체험 공간입니다.",
    details: ["공식 자료에는 실내·외 교육장 622㎡가 시설 현황으로 기재되어 있습니다.", "강의실 배치, 빔프로젝터·스크린·마이크·와이파이 제공 여부는 공개 자료에서 확인되지 않아 안내에서 제외했습니다."],
    activities: ["농촌·생태 체험", "단체 교육과 프로그램", "야외 치유 활동"],
    image: { src: "/images/singing-bowl.png", alt: "홍천 열목어마을 야외 데크에서 진행하는 치유 활동", caption: "열목어마을 야외 공간의 프로그램 운영 장면" },
    link: { href: "/group", label: "단체·워크숍 안내 보기" },
    source: { label: "홍천군 농촌체험휴양마을 시설 현황", href: villageSources.agriculture },
  },
];

export const commonFacilities = [
  { name: "실내·외 교육장", detail: "홍천군 공식 시설 현황에 622㎡로 기재" },
  { name: "숙박시설", detail: "공식 관광 안내에 체험관과 비움센터 객실이 소개됨" },
  { name: "식당 공간", detail: "홍천군 공식 시설 현황에 66㎡로 기재" },
  { name: "야외 활동 공간", detail: "기존 마을 프로그램 사진과 안내에서 야외 데크·자연 활동 확인" },
] as const;

// 실제 배치도가 확보되면 imageSrc와 각 시설 좌표를 이 구조에 추가합니다.
// imageSrc가 없을 때는 공개 페이지에서 섹션 자체를 렌더링하지 않습니다.
export const facilityMap: { imageSrc: string | null; imageAlt: string; points: Array<{ facilityId: Facility["id"]; number: number; x: number; y: number }> } = {
  imageSrc: null,
  imageAlt: "홍천 열목어마을 시설 배치도",
  points: [],
};

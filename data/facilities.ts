import { villageSources } from "@/data/village-pages";

export type FacilityImage = { src: string; alt: string; caption: string };

export type Facility = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string[];
  uses: string[];
  images: FacilityImage[];
  capacity?: string;
  hours?: string;
  price?: string;
  reservationRequired?: string;
  notices?: string[];
  inquiryLink?: { href: string; label: string };
  source: { label: string; href: string };
  mapPosition?: { x: number; y: number };
  displayOrder: number;
  published: boolean;
};

// 시설 안내의 단일 데이터 원본입니다. 확인되지 않은 상세는 공개 화면에 렌더링하지 않습니다.
// 사진을 확보하면 images에 추가하고, 설명을 검증한 뒤 published를 true로 바꿉니다.
export const facilities: Facility[] = [
  {
    id: "bogumjari",
    name: "보금자리 (숙소 1)",
    eyebrow: "STAY",
    summary: "기존 숙박 안내에서 보금자리로 소개하는 마을의 숙박 공간입니다.",
    description: ["객실 구성과 이용 기준은 숙박 안내 페이지에서 한곳에 관리합니다.", "실시간 일정과 최종 배정 객실은 예약 단계에서 확인해 주세요."],
    uses: ["마을에서 머무르기", "숙박과 프로그램 일정 상담"],
    images: [{ src: "/images/stay-room.png", alt: "홍천 열목어마을 숙박 객실 내부", caption: "기존 숙박 안내에 사용 중인 열목어마을 객실 사진" }],
    reservationRequired: "숙박 안내 또는 네이버 예약에서 일정 확인",
    inquiryLink: { href: "/stay#room-bogumjari", label: "숙박 안내에서 확인하기" },
    source: { label: "열목어마을 기존 숙박 안내", href: "/stay" },
    displayOrder: 1,
    published: true,
  },
  {
    id: "sarangbang",
    name: "사랑방",
    eyebrow: "WORK & COMMUNITY",
    summary: "기존 98 스테이워크 안내에서 이용 안내와 소통, 업무 지원을 위한 공간으로 소개된 곳입니다.",
    description: ["워케이션 안내에는 비움센터 오피스와 함께 공유 업무 공간으로 소개되어 있습니다.", "현재 이용 가능 일정, 좌석 배치와 제공 비품은 시설 이용 전에 담당자와 확인합니다."],
    uses: ["워케이션 업무", "이용 안내와 소통", "다과와 휴식"],
    images: [],
    reservationRequired: "프로그램 일정에 따라 사전 상담",
    inquiryLink: { href: "/programs/98-staywork", label: "98 스테이워크 보기" },
    source: { label: "98 스테이워크 기존 안내", href: "/programs/98-staywork" },
    displayOrder: 2,
    published: true,
  },
  {
    id: "lecture-hall",
    name: "강의장",
    eyebrow: "LEARN & EXPERIENCE",
    summary: "첨부 약도에 강의장으로 표시되고, 홍천군 공식 현황에서 실내·외 교육장으로 확인되는 교육·체험 공간입니다.",
    description: ["공식 자료에는 실내·외 교육장 622㎡가 시설 현황으로 기재되어 있습니다.", "방문 인원과 희망 활동을 알려주시면 이용 가능한 공간과 준비 사항을 안내해 드립니다."],
    uses: ["농촌·생태 체험", "단체 교육과 프로그램", "야외 치유 활동"],
    images: [],
    reservationRequired: "방문 목적과 인원을 확인한 뒤 이용 안내",
    inquiryLink: { href: "/group", label: "단체·워크숍 안내 보기" },
    source: { label: "홍천군 농촌체험휴양마을 시설 현황", href: villageSources.agriculture },
    displayOrder: 3,
    published: true,
  },
  ...[
    ["detached-stay", "독채 숙소 (숙소 3)"], ["village-hall", "마을회관 (숙소 4)"],
    ["parking", "주차장"], ["kimchi-factory", "김치공장"], ["mimichae", "미미채 (식당)"],
    ["restroom", "화장실"], ["stay-2", "숙소 2"], ["traditional-liquor", "전통주 연구실"],
    ["observatory", "전망대"], ["footbath", "족욕체험장 (게르)"], ["singing-bowl", "싱잉볼 체험장"],
  ].map(([id, name], index): Facility => ({
    id,
    name,
    eyebrow: "MAP FACILITY",
    summary: "첨부 약도에서 시설명과 위치를 확인했습니다.",
    description: [],
    uses: [],
    images: [],
    source: { label: "사용자 제공 홍천 열목어마을 안내도", href: "/images/yeolmokeo-village-map.webp" },
    displayOrder: index + 10,
    published: false,
  })),
];

export const publishedFacilities = facilities.filter((facility) => facility.published).sort((a, b) => a.displayOrder - b.displayOrder);

export const commonFacilities = [
  { name: "실내·외 교육장", detail: "홍천군 공식 시설 현황에 622㎡로 기재" },
  { name: "숙박시설", detail: "공식 관광 안내에 체험관과 비움센터 객실이 소개됨" },
  { name: "식당 공간", detail: "홍천군 공식 시설 현황에 66㎡로 기재" },
  { name: "야외 활동 공간", detail: "기존 마을 프로그램 사진과 안내에서 야외 데크·자연 활동 확인" },
] as const;

export const facilityMap = {
  imageSrc: "/images/yeolmokeo-village-map.webp",
  imageAlt: "명개로와 계곡 사이 열목어마을의 숙소, 체험장, 식당, 강의장과 공용시설 위치를 표시한 안내도",
  width: 1448,
  height: 1086,
  caption: "시설 위치를 이해하기 위한 그림 약도입니다. 실제 이동 시 현장 안내를 따라주세요.",
  // 실제 좌표 검증 전에는 원본 위에 클릭 영역을 만들지 않습니다.
  points: facilities.filter((facility) => facility.published && facility.mapPosition),
} as const;

export type VerificationState = "verified" | "needsConfirmation";

export type StayRoom = {
  id: string;
  name: string;
  type: string;
  tag: string;
  summary: string;
  recommendedFor: string[];
  roomConfigurations: string[];
  capacity: number | null;
  roomCount: number | null;
  privateBathroom: boolean | null;
  privateShower: boolean | null;
  bedding: string | null;
  cooking: string;
  barbecue: string;
  meals: string;
  price: number | null;
  amenities: { name: string; state: VerificationState; note?: string }[];
  images: { src: string; alt: string; placeholder: boolean }[];
  verified: boolean;
  currentlyAvailable: boolean | null;
  needsConfirmation: boolean;
  bookingUrl: string | null;
  workAccess: string;
  programAccess: string;
  inventoryNote?: string;
};

export const stayRooms: StayRoom[] = [
  {
    id: "bogumjari",
    name: "보금자리",
    type: "독채형 숙소",
    tag: "독채 · 가족·친구 추천",
    summary: "우리끼리 편안하게 이야기하고 쉬기 좋은 아늑한 독채 숙소입니다.",
    recommendedFor: ["부부", "친구", "소규모 가족"],
    roomConfigurations: ["2인실", "2~3인 이용 가능 숙소 1동"],
    capacity: null,
    roomCount: null,
    privateBathroom: true,
    privateShower: true,
    bedding: null,
    cooking: "객실 내 취사 제한 · 지정 구역은 사전 문의",
    barbecue: "사전 문의",
    meals: "패키지별 상이",
    price: null,
    amenities: [
      { name: "객실 내 단독 화장실", state: "verified" },
      { name: "객실 내 단독 샤워실", state: "verified" },
      { name: "침구·냉난방·주방", state: "needsConfirmation", note: "예약 시 확인" },
    ],
    images: [],
    verified: true,
    currentlyAvailable: null,
    needsConfirmation: true,
    bookingUrl: null,
    workAccess: "운영자 확인 중",
    programAccess: "상담 시 안내",
  },
  {
    id: "bieum-center",
    name: "비움센터",
    type: "공용시설 연계형",
    tag: "공용시설 · 체험·단체 추천",
    summary: "체험 공간과 다목적 공간 가까이에서 프로그램에 편리하게 참여할 수 있는 숙소입니다.",
    recommendedFor: ["프로그램 참가자", "소규모 단체", "워케이션 참가자"],
    roomConfigurations: ["2인실", "3인실"],
    capacity: null,
    roomCount: null,
    privateBathroom: false,
    privateShower: false,
    bedding: null,
    cooking: "객실 내 취사 제한 · 지정 구역은 사전 문의",
    barbecue: "사전 문의",
    meals: "패키지별 상이",
    price: null,
    amenities: [
      { name: "비움센터 내 공용 화장실", state: "verified" },
      { name: "비움센터 내 공용 샤워실", state: "verified" },
      { name: "성별 분리·침구 구성", state: "needsConfirmation", note: "운영자 확인 중" },
    ],
    images: [],
    verified: true,
    currentlyAvailable: null,
    needsConfirmation: true,
    bookingUrl: null,
    workAccess: "관련 자료 있음 · 이용 조건 확인 필요",
    programAccess: "가까움",
  },
  {
    id: "hanok",
    name: "한옥 숙소",
    type: "독채형 한옥",
    tag: "독채 · 전통적인 산촌의 밤",
    summary: "마을의 고즈넉한 정취와 전통적인 분위기를 느끼며 머물 수 있는 독채 숙소입니다.",
    recommendedFor: ["부부", "친구", "조용한 휴식 방문객"],
    roomConfigurations: ["2인실 1동", "3인실 1동"],
    capacity: null,
    roomCount: 2,
    privateBathroom: true,
    privateShower: true,
    bedding: null,
    cooking: "객실 내 취사 제한 · 지정 구역은 사전 문의",
    barbecue: "사전 문의",
    meals: "패키지별 상이",
    price: null,
    amenities: [
      { name: "객실 내 단독 화장실", state: "verified" },
      { name: "객실 내 단독 샤워실", state: "verified" },
      { name: "침대·온돌·냉난방", state: "needsConfirmation", note: "예약 시 확인" },
    ],
    images: [],
    verified: true,
    currentlyAvailable: null,
    needsConfirmation: true,
    bookingUrl: null,
    workAccess: "운영자 확인 중",
    programAccess: "상담 시 안내",
  },
  {
    id: "workation",
    name: "워케이션 객실",
    type: "체류 방식 · 객실 구성 확인 필요",
    tag: "업무와 휴식 · 장기 체류",
    summary: "자연 속에서 일하고 쉬며 사랑방과 비움센터 업무공간을 함께 이용하는 체류형 숙박입니다.",
    recommendedFor: ["원격근무자", "크리에이터", "소규모 팀"],
    roomConfigurations: ["기존 워케이션 자료상 프라이빗 객실 7개실"],
    capacity: null,
    roomCount: null,
    privateBathroom: null,
    privateShower: null,
    bedding: null,
    cooking: "운영자 확인 중",
    barbecue: "사전 문의",
    meals: "워케이션 상품별 상이",
    price: null,
    amenities: [
      { name: "사랑방·비움센터 연계", state: "verified" },
      { name: "공유 업무공간·야외 쉼터", state: "verified" },
      { name: "개별 객실의 화장실·샤워실", state: "needsConfirmation", note: "숙소 배정 전 확인" },
    ],
    images: [],
    verified: false,
    currentlyAvailable: null,
    needsConfirmation: true,
    bookingUrl: null,
    workAccess: "사랑방·비움센터 연계",
    programAccess: "워케이션 상품 연계",
    inventoryNote: "7개실이 보금자리·한옥 등을 포함하는지 확인되지 않아 별도 객실 재고로 집계하지 않습니다.",
  },
];

export const stayModes = [
  { id: "stay-only", title: "숙소만 이용", text: "자연 속에서 조용히 쉬고 싶은 개인과 가족", note: "실제 단독 숙박 판매 여부 확인 필요", query: "stay-only" },
  { id: "stay-package", title: "숙박＋치유 프로그램", text: "숲길 걷기, 족욕, 명상, 치유밥상을 함께 경험", note: "구성은 계절과 일정에 따라 달라집니다.", query: "stay-package" },
  { id: "healing-trip", title: "1박 2일 치유여행", text: "숙박, 식사, 프로그램이 결합된 체류형 여행", note: "기존 운영 패키지 기반 · 현재 판매 일정 확인 필요", query: "stay-package" },
  { id: "workation", title: "2박 3일 워케이션", text: "숙박, 업무공간, 식사, 치유 프로그램을 결합", note: "기존 ‘98 스테이워크’ 자료 기반 · 일정 확인 필요", query: "workation" },
  { id: "group-stay", title: "기업·기관 단체 숙박", text: "워크숍, 연수, 프로그램과 숙박을 맞춤 구성", note: "방문 목적과 인원에 따라 단체 견적 상담", query: "group-stay" },
] as const;

export const stayFacilities = [
  { name: "사랑방", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "워케이션 안내 자료에 확인됨 · 이용 시간과 대상은 상담 필요" },
  { name: "비움센터 업무공간", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "워케이션 오피스로 소개됨 · 이용 조건은 상담 필요" },
  { name: "체험 공간", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "비움센터 인접 시설 · 프로그램 일정별 운영" },
  { name: "다목적 공간", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "비움센터 인접 시설 · 단체 이용은 사전 상담" },
  { name: "조망대", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "워케이션 안내 자료에 확인됨 · 현장 운영 여부 확인 필요" },
  { name: "야외 쉼터", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "워케이션 안내 자료에 확인됨 · 날씨에 따라 이용 변동" },
  { name: "숲길", verified: true, currentlyAvailable: null, needsConfirmation: false, includedWithStay: null, usageNotes: "계절·기상에 따라 프로그램 운영이 달라질 수 있음" },
  { name: "계곡", verified: true, currentlyAvailable: null, needsConfirmation: false, includedWithStay: null, usageNotes: "수위·기상·안전 상황에 따라 접근 제한 가능" },
  { name: "식사 공간", verified: true, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "식사 포함 여부는 숙박 상품별 상이" },
  { name: "주차 공간", verified: false, currentlyAvailable: null, needsConfirmation: true, includedWithStay: null, usageNotes: "위치·가능 대수·대형버스 진입은 예약 전 확인" },
] as const;

export const stayPrograms = ["숲길 치유 트레킹", "계곡 물소리 명상", "산약초 족욕", "몸살림 운동", "싱잉볼 테라피", "아로마 티 블렌딩", "치유밥상", "제철 농촌체험"] as const;

export const stayRules = [
  { title: "입·퇴실", items: ["입실은 당일 오후 2시부터, 퇴실은 다음 날 오전 11시까지입니다.", "입·퇴실 시 관리자 또는 마을 사무장의 객실 확인과 안내를 받아주세요.", "예약자와 입금자명이 다르면 미리 연락해 주세요."] },
  { title: "객실 이용", items: ["객실 규정 인원에 맞춰 침구와 비품을 제공합니다.", "고성방가 등 다른 방문객에게 피해를 주는 행동은 금지됩니다."] },
  { title: "취사와 식사", items: ["객실 안과 지정 구역 밖에서는 취사가 제한됩니다.", "바비큐와 야외 취사는 반드시 사전 문의해 주세요.", "식사 포함 여부는 숙박 상품별로 다릅니다."] },
  { title: "반려동물", items: ["반려동물은 동반할 수 없습니다.", "시각장애인 안내견은 예외입니다."] },
  { title: "안전", items: ["산림 인접 지역이므로 화재와 안전사고 예방에 유의해 주세요.", "시설물 파손 시 즉시 관리자에게 알려주세요."] },
  { title: "퇴실 정리", items: ["전등, 냉난방기와 가전제품 전원을 확인해 주세요.", "쓰레기는 규정에 맞춰 분리배출해 주세요."] },
] as const;

export const packingList = ["칫솔과 치약", "개인 위생용품", "계절에 맞는 옷", "편안한 운동화", "개인 상비약", "야외 프로그램용 여벌 옷"] as const;

export const refundPolicy = [
  ["이용 7일 전", "90% 환불"], ["이용 6일 전", "80% 환불"], ["이용 5일 전", "70% 환불"], ["이용 4일 전", "60% 환불"], ["이용 3일 전", "50% 환불"], ["이용 2일 전부터 당일", "환불 불가"], ["재난·기상특보 등 천재지변", "전액 환불"],
] as const;

export const stayFaqs = [
  ["숙소만 예약할 수 있나요?", "단독 숙박 판매 여부와 가능한 날짜는 운영자 확인이 필요합니다. 희망 날짜와 인원을 온라인으로 문의해 주세요."],
  ["치유 프로그램과 숙박을 함께 이용할 수 있나요?", "기존 자료에서 숙박·식사·프로그램 결합 상품이 확인됩니다. 현재 구성과 일정은 계절 및 인원에 따라 상담해 드립니다."],
  ["객실별 최대 인원은 몇 명인가요?", "확인된 객실 표기는 보금자리 2인 또는 2~3인, 비움센터 2인실·3인실, 한옥 2인실 1동·3인실 1동입니다. 전체 최대 수용 인원은 운영자 확인 중입니다."],
  ["객실 안에 화장실과 샤워실이 있나요?", "보금자리와 한옥 숙소는 객실 내 단독 화장실·샤워실, 비움센터는 센터 내 공용 화장실·샤워실로 안내되어 있습니다. 워케이션 배정 객실은 확인이 필요합니다."],
  ["수건과 세면도구가 제공되나요?", "일반 숙박과 패키지 자료의 제공 품목이 다릅니다. 수건과 욕실용품 제공 여부는 객실 및 상품에 따라 달라질 수 있으므로 예약 확정 전에 확인해 주세요."],
  ["객실 안에서 취사할 수 있나요?", "객실 내 및 지정 구역 외 취사는 제한됩니다. 식사나 취사가 필요하면 예약 전에 가능한 방법을 문의해 주세요."],
  ["바비큐를 이용할 수 있나요?", "바비큐와 야외 취사는 사전 문의가 필요합니다. 산림 인접 지역이라 기상과 안전 상황에 따라 제한될 수 있습니다."],
  ["반려동물과 함께 방문할 수 있나요?", "반려동물 동반은 불가하며 시각장애인 안내견은 예외입니다."],
  ["아이와 함께 숙박할 수 있나요?", "가족 방문에 적합한 숙소가 안내되어 있으나 아동 연령별 정원과 추가 침구는 예약 전에 확인해 주세요."],
  ["단체 숙박이 가능한가요?", "기업·기관 워크숍 등 단체 체류 상담이 가능합니다. 전체 수용 인원과 객실 배정은 날짜·인원 확인 후 안내합니다."],
  ["워케이션 업무공간을 사용할 수 있나요?", "기존 ‘98 스테이워크’ 자료에는 사랑방과 비움센터 업무공간이 소개되어 있습니다. 현재 이용 가능 일정과 포함 조건은 상담이 필요합니다."],
  ["주차가 가능한가요?", "주차 위치와 가능 대수, 대형버스 진입 여부는 확인되지 않았습니다. 차량 종류와 대수를 문의 시 알려주세요."],
  ["체크인과 체크아웃 시간은 언제인가요?", "기존 공식 이용안내 기준 입실은 오후 2시부터, 퇴실은 오전 11시까지입니다. 예약 상품의 최종 안내를 다시 확인해 주세요."],
  ["예약 취소 시 환불 규정은 어떻게 되나요?", "기존 공식 이용안내 기준 규정을 페이지의 환불표에 정리했습니다. 상품별 기준이 달라질 수 있으므로 결제 전에 최종 규정을 확인해 주세요."],
] as const;

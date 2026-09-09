export type ContentStatus = "verified" | "needsConfirmation" | "placeholder";

export const villageOverview = [
  { icon: "waves", title: "맑은 계곡과 깊은 숲", description: "물소리와 숲바람을 가까이에서 느끼며 천천히 호흡합니다.", status: "verified" },
  { icon: "home", title: "편안한 산촌 숙박", description: "자연 가까이 머물며 일상의 속도를 잠시 내려놓습니다.", status: "verified" },
  { icon: "heart", title: "몸과 마음을 위한 치유", description: "계곡·숲·농촌 자원을 활용한 회복 프로그램을 만납니다.", status: "verified" },
  { icon: "utensils", title: "지역의 건강한 밥상", description: "계절의 흐름과 지역 식재료 이야기를 담은 식체험을 나눕니다.", status: "verified" },
] as const;

export const villageIdentity = {
  title: "맑은 물이 지켜낸 이름, 열목어마을",
  description: [
    "열목어마을은 백두대간이 지나는 길목의 깊은 숲과 통마람계곡, 열목어 서식지로 알려진 청정 자연을 품고 있습니다.",
    "마을 이름의 공식 유래는 운영 주체의 추가 확인이 필요합니다. 지금은 열목어를 떠올리게 하는 맑고 차가운 계곡과 청정 자연을 품은 마을이라는 뜻으로 소개합니다.",
  ],
  source: {
    label: "홍천군 문화관광포털 — 열목어마을",
    href: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=14&key=1856&pageIndex=1&pageUnit=6&searchCnd=all&searchShowAt=Y&tourNo=1991",
  },
  status: "verified",
} as const;

export const natureMoments = [
  { title: "계곡", description: "맑은 물과 시원한 물소리를 가까이에서 만나는 시간", image: "/images/valley-rest.png", alt: "홍천 열목어마을의 바위 사이로 흐르는 맑은 계곡" },
  { title: "숲", description: "천천히 걷고 깊게 호흡하며 일상의 긴장을 내려놓는 시간", image: "/images/forest-3.jpg", alt: "홍천 열목어마을 주변의 푸른 산촌 숲길" },
  { title: "산촌의 밤", description: "도시의 소음과 빛에서 벗어나 조용히 쉬는 시간", image: "/images/quiet-time-3.png", alt: "열목어마을 숲속에서 해먹에 기대어 쉬는 모습" },
  { title: "마을의 아침", description: "깨끗한 공기와 자연의 소리로 시작하는 하루", image: "/images/village-arrival.png", alt: "아침 햇살이 비치는 열목어마을의 산촌 시설" },
] as const;

export const villageValues = [
  { icon: "sprout", title: "상생", description: "마을의 자연을 보존하고, 주민과 방문객이 함께 어우러지는 지속 가능한 농촌을 만들어갑니다.", status: "verified" },
  { icon: "leaf", title: "휴식", description: "맑은 계곡과 숲속에서 지친 몸과 마음이 본래의 속도를 되찾는 온전한 쉼을 제공합니다.", status: "verified" },
  { icon: "handHeart", title: "가치", description: "지역의 정직한 먹거리와 문화를 나누며, 방문 이후의 삶까지 건강하게 이어지는 경험을 만듭니다.", status: "verified" },
] as const;

export const villageDay = [
  { time: "오전 10:00", activity: "마을 도착과 따뜻한 환영" },
  { time: "오전 11:00", activity: "숲길과 계곡을 따라 천천히 걷기" },
  { time: "오후 12:30", activity: "지역 제철 재료로 준비한 점심" },
  { time: "오후 2:00", activity: "치유·농촌 체험 프로그램" },
  { time: "오후 5:00", activity: "숙소에서 자유롭게 쉬는 시간" },
  { time: "오후 6:30", activity: "함께 나누는 저녁 밥상" },
  { time: "오후 8:00", activity: "조용한 산촌의 밤" },
  { time: "다음 날 오전", activity: "아침 식사와 여유로운 산책" },
] as const;

export const villagePeople = {
  title: "이 마을의 가장 따뜻한 풍경은 사람입니다",
  description: "열목어마을의 자연과 프로그램, 건강한 밥상은 마을을 지키고 살아가는 사람들의 손에서 만들어집니다.",
  roles: [
    "자연을 살피고 방문객의 걸음을 안내하는 사람",
    "계절의 재료를 손질해 따뜻한 밥상을 준비하는 사람",
    "농촌의 지혜를 체험과 치유의 시간으로 잇는 사람",
  ],
  image: "/images/village-vision-1.jpg",
  alt: "열목어마을 숲길에서 함께 자연을 살피는 주민들",
  status: "verified",
} as const;

export const villageCases = [
  {
    category: "공공기관 프로그램",
    title: "열목어마을, 소방관의 심신을 다독이다",
    summary: "홍천군은 119 구급대원과 소방공무원을 위한 심신 치유 프로그램이 열목어마을에서 운영됐다고 소개했습니다.",
    date: "2020.07.16",
    source: "홍천군청",
    href: "https://www.hongcheon.go.kr/www/selectEminwonNewsView.do?key=283&news_epct_no=10507&ofr_pageSize=10&pageIndex=975&pageUnit=10&searchCnd=all",
    status: "verified",
  },
  {
    category: "언론 보도",
    title: "도시민 스트레스·노인 우울증 예방하는 ‘치유 농업’",
    summary: "세계일보는 열목어마을의 계곡 트레킹, 별 보기, 꽃차 테라피와 치유 음식 사례를 소개했습니다.",
    date: "2020.07.31",
    source: "세계일보",
    href: "https://www.segye.com/newsView/20200728526811",
    status: "verified",
  },
  {
    category: "공공기관 자료",
    title: "홍천군 치유농업시설 현황 — 열목어마을",
    summary: "홍천군농업기술센터의 치유농업시설 현황에 마을형 치유농업시설로 열목어마을이 안내되어 있습니다.",
    date: "현재 공개",
    source: "홍천군농업기술센터",
    href: "https://www.hongcheon.go.kr/agri/contents.do?key=1062",
    status: "verified",
  },
  {
    category: "농촌 여행 정보",
    title: "백두대간과 통마람계곡을 품은 열목어마을",
    summary: "홍천군 문화관광포털은 마을의 자연환경과 농촌치유 프로그램, 숙박·체험 시설을 소개합니다.",
    date: "현재 공개",
    source: "홍천군 문화관광포털",
    href: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=14&key=1856&pageIndex=1&pageUnit=6&searchCnd=all&searchShowAt=Y&tourNo=1991",
    status: "verified",
  },
] as const;

export const villageGallery = [
  { src: "/images/village-vision-2.jpg", alt: "열목어마을 소나무 숲의 해먹에서 휴식하는 모습", caption: "숲에서 누리는 휴식", size: "tall", source: "홍천 열목어마을 기존 공식 홈페이지" },
  { src: "/images/stay-room.png", alt: "산과 숲을 바라볼 수 있는 열목어마을 숙소 객실", caption: "산촌 숙소", size: "wide", source: "홍천애홀릭" },
  { src: "/images/healing-table.jpg", alt: "지역 식재료로 정성껏 차린 열목어마을 치유밥상", caption: "제철 치유밥상", size: "standard", source: "홍천애홀릭" },
  { src: "/images/farm-experience.png", alt: "가족이 함께 식물을 살피는 열목어마을 농촌 체험", caption: "가족 농촌 체험", size: "standard", source: "홍천애홀릭" },
  { src: "/images/singing-bowl.png", alt: "숲속 데크에서 진행하는 열목어마을 싱잉볼 프로그램", caption: "숲속 치유 프로그램", size: "wide", source: "홍천애홀릭" },
  { src: "/images/village-vision-3.jpg", alt: "열목어마을 숲에서 산나물을 든 주민 운영자", caption: "자연을 돌보는 사람", size: "tall", source: "홍천 열목어마을 기존 공식 홈페이지" },
] as const;

export const villageVisit = {
  address: "강원특별자치도 홍천군 내면 명개로 98",
  driving: "산간 도로와 현장 진입 여건은 출발 전 운영자에게 확인해 주세요.",
  parking: "차량 종류와 방문 인원에 따른 주차 가능 여부는 상담이 필요합니다.",
  transit: "대중교통 연결과 픽업 가능 여부는 일정 확정 전 문의해 주세요.",
  mapUrl: "https://map.kakao.com/link/to/열목어마을,37.8500154882362,128.505857629328",
  status: "verified",
} as const;

export const villageFaqs = [
  { question: "홍천 열목어마을은 어떤 곳인가요?", answer: "백두대간 길목의 숲과 통마람계곡 등 청정 자연을 바탕으로 농촌치유 프로그램과 숙박, 식체험을 운영하는 산촌마을입니다.", status: "verified" },
  { question: "개인이나 가족도 방문할 수 있나요?", answer: "개인·가족 대상 프로그램이 마련되어 있습니다. 실제 운영 날짜와 참여 가능 연령은 방문 전 상담으로 확인해 주세요.", status: "verified" },
  { question: "숙박과 체험을 함께 신청할 수 있나요?", answer: "숙박과 체험을 함께 구성할 수 있습니다. 객실과 프로그램 가능 여부는 날짜와 인원에 따라 달라 상담이 필요합니다.", status: "verified" },
  { question: "기업이나 기관의 단체 프로그램도 가능한가요?", answer: "소방공무원 치유 프로그램 등 단체 운영 사례가 확인됩니다. 현재 가능한 구성과 최대 인원은 단체 문의로 확인해 주세요.", status: "verified" },
  { question: "프로그램은 계절마다 달라지나요?", answer: "자연과 농촌 자원을 활용하므로 계절, 날씨, 방문 목적과 인원에 따라 일정이 달라질 수 있습니다.", status: "verified" },
  { question: "방문 전에 무엇을 준비해야 하나요?", answer: "편한 신발과 계절에 맞는 겉옷을 준비해 주세요. 세부 준비물과 정확한 집결 장소는 일정 확정 시 안내받는 것이 좋습니다.", status: "verified" },
] as const;

export const villagePendingInformation = [
  "마을 형성 시기",
  "열목어마을 명칭의 공식 유래",
  "마을 주민 수와 주요 산업",
  "마을위원회와 운영 담당자 소개",
  "공식 지정·인증 현황의 최신 정보",
  "차종별 주차 가능 여부와 대중교통·픽업 안내",
  "공식 네이버지도 장소 링크",
] as const;

export const villageCtas = {
  programs: "/programs",
  stay: "/stay",
  contact: "/contact",
  groupContact: "/contact?type=group",
  stories: "/stories",
  guide: "/guide",
} as const;

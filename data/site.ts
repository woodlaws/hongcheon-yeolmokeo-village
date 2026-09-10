const defaultNaverBookingUrl = "https://m.booking.naver.com/booking/3/bizes/853337/items/7925129?area=plt&lang=ko&tab=book&theme=place";
const officialAddress = "강원특별자치도 홍천군 내면 명개로 98";

export const siteConfig = {
  name: "홍천 열목어마을",
  tagline: "자연이 주는 쉼, 다시 살아가는 힘",
  address: officialAddress,
  contact: {
    email: "mgrbest98@naver.com",
    emailHref: "mailto:mgrbest98@naver.com",
    phoneDisplay: "010-7431-9600",
    phoneHref: "tel:01074319600",
  },
  hours: "방문 전 전화 문의",
  instagram: "",
  naverBookingUrl: process.env.NEXT_PUBLIC_NAVER_BOOKING_URL?.trim() || defaultNaverBookingUrl,
  addressVerified: true,
  structuredAddress: officialAddress,
  latitude: null,
  longitude: null,
  mapUrl: "https://map.naver.com/p/search/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%EB%82%B4%EB%A9%B4%20%EB%AA%85%EA%B0%9C%EB%A1%9C%2098",
  googleMapEmbedUrl: "https://maps.google.com/maps?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%EB%82%B4%EB%A9%B4%20%EB%AA%85%EA%B0%9C%EB%A1%9C%2098&z=15&output=embed",
} as const;

export interface Program {
  slug: string;
  title: string;
  audience: string;
  season: string;
  image: string;
  summary: string;
  highlights: string[];
  preparation: string;
  category?: string;
  duration?: string;
}

export const programs: Program[] = [
  { slug: "98-staywork", title: "98 스테이워크", category: "웰니스 워케이션", audience: "원격근무자·크리에이터·소규모 팀", season: "사전 일정 상담", duration: "2박 3일", image: "/images/programs/98-staywork-poster.png", summary: "숲에서 일하고 자연에서 쉬는 체류형 워케이션", highlights: ["공유 업무공간", "숙박과 지역 제철 식사", "세 가지 농촌 치유 프로그램", "다과 및 휴식 공간"], preparation: "희망 날짜와 인원을 알려주시면 적용 가능한 일정과 객실을 안내해 드립니다." },
  { slug: "burnout-retreat", title: "직장인 번아웃 쉼", audience: "직장인·자영업자", season: "사계절", image: "/images/quiet-time-3.png", summary: "디지털 기기와 업무의 속도를 내려놓고 숲, 호흡, 소리 명상으로 나의 리듬을 되찾습니다.", highlights: ["디지털 디톡스", "싱잉볼 테라피", "약초 족욕", "별빛 명상"], preparation: "편한 복장, 개인 세면도구, 계곡 활동용 신발" },
  { slug: "family-experience", title: "가족 농촌 체험", audience: "아이 동반 가족", season: "봄·여름·가을", image: "/images/farm-experience.png", summary: "밭과 숲에서 함께 움직이고 제철 농산물을 만지며 가족의 새로운 추억을 만듭니다.", highlights: ["계절 농작물 체험", "자연 관찰", "간식 만들기", "숲밧줄놀이"], preparation: "흙이 묻어도 되는 옷, 모자, 운동화" },
  { slug: "forest-healing", title: "숲과 계곡 치유", audience: "개인·소그룹", season: "봄·여름·가을", image: "/images/quiet-time-1.png", summary: "1급수 계곡과 백두대간 숲길을 천천히 걸으며 오감을 깨우는 자연 회복 프로그램입니다.", highlights: ["계곡 트레킹", "걷기 명상", "풍욕과 계곡 쉼", "숲 해설"], preparation: "트레킹화, 물병, 계절별 방한·우천 용품" },
  { slug: "healing-food", title: "제철 치유밥상", audience: "가족·단체", season: "사계절", image: "/images/healing-table.jpg", summary: "홍천 내면의 제철 채소와 산약초를 정성껏 차려 몸과 마음을 따뜻하게 채웁니다.", highlights: ["컬러푸드 밥상", "계절 산나물", "탄산약수 활용 음식", "지역 식재료 이야기"], preparation: "알레르기와 식이 제한은 상담 시 미리 알려주세요." },
];

export const itineraries = [
  { title: "가볍게 떠나는 1박 2일", duration: "1박 2일", items: ["마을 도착과 현재 상태 살피기", "계곡 쉼 또는 싱잉볼", "제철 치유밥상과 산촌의 밤", "아침 농촌체험 또는 숲 걷기"], includes: "숙박·식사·체험은 상담 후 구성" },
  { title: "온전히 회복하는 2박 3일", duration: "2박 3일", items: ["첫날: 속도를 낮추는 디지털 쉼", "둘째 날: 숲·계곡·농촌 오감 체험", "셋째 날: 회복 루틴 정리와 귀가"], includes: "대상과 계절에 따라 맞춤 구성" },
] as const;

export const press = [
  { title: "홍천군 치유농업시설 현황 — 열목어마을", source: "홍천군농업기술센터", href: "https://www.hongcheon.go.kr/agri/contents.do?key=1062", label: "공공기관 자료" },
  { title: "전문가 된 주민들, 치유의 힘 알리다", source: "농촌여성신문", href: "https://www.rwn.co.kr/news/articleView.html?idxno=50272", label: "소방관 치유 사례" },
  { title: "도시민 스트레스·노인 우울증 예방하는 치유 농업", source: "세계일보", href: "https://www.segye.com/newsView/20200728526811", label: "언론 보도" },
  { title: "열목어마을 여행지 정보", source: "웰촌", href: "https://www.welchon.com/web/lay1/program/S1T11C446/travelPlaceInfo/view.do?api_type=0&cont_seq=5732", label: "농촌여행 정보" },
] as const;

export const faqs = [
  { q: "숙박과 식사를 함께 이용할 수 있나요?", a: "공공기관 안내상 숙박과 식사가 가능한 시설입니다. 객실과 식사 가능 여부는 희망 날짜·인원에 따라 상담으로 확인해 주세요." },
  { q: "아이와 함께 참여할 수 있나요?", a: "가족 농촌체험과 자연 관찰 프로그램을 추천합니다. 연령별 난이도와 안전 준비는 신청 전 상담합니다." },
  { q: "기업이나 학교 단체도 가능한가요?", a: "기업 워크숍, 공공기관 연수, 학교 농촌교육을 대상과 일정에 맞게 구성할 수 있습니다. 방문 인원과 희망 날짜를 문의 페이지에 남겨주시면 가능한 구성을 안내해 드립니다." },
  { q: "예약 가능 여부는 바로 확인되나요?", a: "일반 객실의 실시간 예약 가능 일정, 이용금액과 결제는 네이버 예약에서 확인해 주세요. 단체와 프로그램 결합 일정은 별도 상담이 필요합니다." },
] as const;

export const imageSources = [
  { file: "village-main-hero.jpg", use: "메인 히어로·마을 전경", source: "운영자 제공 — 열목어마을전경3.jpg" },
  { file: "forest-1.jpg", use: "주변 여행지 · 삼봉자연휴양림", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "forest-2.jpg", use: "마을·계곡 풍경", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "forest-3.jpg", use: "여행 안내 숲길", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "quiet-time-1.png", use: "계곡 쉼", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "quiet-time-3.png", use: "숲속 해먹·번아웃 프로그램", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "village-arrival.png", use: "마을 시설", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "healing-table.jpg", use: "치유밥상", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "singing-bowl.png", use: "싱잉볼", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "stay-room.png", use: "숙소", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "valley-rest.png", use: "계곡 체험", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
  { file: "farm-experience.png", use: "농촌 체험", source: "홍천애홀릭 — 열목어마을에서 자발적인 산촌유배", url: "https://www.hcholic.com/219" },
] as const;

export const guideSources = {
  village: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=7&key=2036&pageIndex=1&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=1991",
  visitKorea: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=58201d34-1a4b-4582-b2dc-100419afaee2",
  sambong: "https://www.foresttrip.go.kr/0107/",
  sambongHongcheon: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=15&key=1865&pageIndex=1&pageUnit=1000&searchCnd=all&searchShowAt=Y&sortTy=HIT&tourNo=2043",
  ginkgo: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=27&key=1947&pageIndex=1&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=2125",
  guryong: "https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353200290000",
  odaesan: "https://public.knps.or.kr/front/portal/visit/visitCourseMain.do?menuNo=7020002&parkId=120900",
} as const;

export const tripTypes = [
  { id: "solo", title: "혼자 떠나는 쉼", items: ["조용한 산책", "명상", "숙박", "치유밥상"], href: "#schedule-overnight" },
  { id: "couple", title: "부부·친구 여행", items: ["독채 숙소", "숲과 계곡", "족욕과 티 블렌딩", "지역 밥상"], href: "#schedule-overnight" },
  { id: "family", title: "아이와 가족여행", items: ["자연 관찰", "농촌체험", "에코염색", "계절 체험"], href: "/programs/family-experience" },
  { id: "parents", title: "부모님과 건강 여행", items: ["무리가 적은 산책", "족욕", "편안한 식사", "독립형 숙소"], href: "#schedule-day" },
  { id: "group", title: "기업·기관 단체", items: ["워크숍", "치유 프로그램", "숙박과 식사", "회의·소통"], href: "/group" },
] as const;

export const guideItineraries = [
  {
    id: "day", label: "당일", title: "가볍게 떠나는 당일 치유여행", audience: "짧은 휴식·가족 체험·주말 나들이",
    days: [{ title: "하루 일정", steps: ["10:30 열목어마을 도착", "11:00 마을과 계곡 둘러보기", "12:00 지역 치유밥상", "13:30 숲길 걷기 또는 치유 프로그램", "15:00 약초 족욕·티 블렌딩·에코염색 중 선택", "16:30 차와 함께 휴식", "17:00 여행 마무리"] }],
    notice: "프로그램과 식사는 사전 신청이 필요할 수 있으며 계절과 운영 일정에 따라 달라집니다.", primary: "/contact?type=trip&duration=day", primaryLabel: "당일 프로그램 문의", secondary: "/programs", secondaryLabel: "프로그램 보기",
  },
  {
    id: "overnight", label: "1박 2일", title: "하루를 비우고 마음을 채우는 1박 2일", audience: "개인·부부·친구·부모님 동반 여행",
    days: [
      { title: "1일차", steps: ["오전 출발", "열목어마을 도착", "치유밥상", "숲길 또는 계곡 체험", "몸살림·싱잉볼·족욕 등 선택 프로그램", "저녁 식사", "불멍·별빛·자유 휴식", "숙박"] },
      { title: "2일차", steps: ["산촌 아침 산책", "아침 식사", "아로마 티 블렌딩 또는 농촌체험", "점심 식사", "국립삼봉자연휴양림 또는 삼봉약수 연계", "귀가"] },
    ],
    notice: "불멍과 별빛 명상은 과거 패키지 소개 이력이 있으나 현재 제공 여부는 운영자 확인이 필요합니다.", primary: "/contact?type=trip&duration=overnight", primaryLabel: "1박 2일 상담", secondary: "/stay", secondaryLabel: "숙소 보기",
  },
  {
    id: "workation", label: "2박 3일", title: "서두르지 않고 온전히 회복하는 2박 3일", audience: "번아웃 직장인·자영업자·프리랜서·워케이션 참가자·소규모 기업팀",
    days: [
      { title: "1일차 · 도착과 적응", steps: ["체크인", "업무·휴식 공간 안내", "마을 산책", "치유밥상", "선택형 프로그램"] },
      { title: "2일차 · 자연과 회복", steps: ["아침 산책", "업무 또는 자유 시간", "숲길 치유", "족욕 또는 티 블렌딩", "지역 밥상", "자유 휴식"] },
      { title: "3일차 · 정리와 귀환", steps: ["아침 산책", "식사", "삼봉약수 또는 주변 관광", "여행 정리", "귀가"] },
    ],
    notice: "업무공간, 숙박, 식사와 프로그램의 현재 운영 조건은 날짜와 인원에 따라 확인합니다.", primary: "/contact?type=workation&duration=workation", primaryLabel: "2박 3일 워케이션 보기", secondary: "/contact?type=stay&stayMode=workation", secondaryLabel: "숙박·프로그램 상담",
  },
] as const;

export const attractions = [
  { id: "sambong-forest", name: "국립삼봉자연휴양림", category: "숲·휴양림", summary: "울창한 숲과 계곡, 삼봉약수를 함께 만날 수 있는 자연휴양림입니다.", address: "강원특별자치도 홍천군 내면 삼봉휴양길 276", seasons: ["봄", "여름", "가을"], experience: "숲길·계곡·삼봉약수", duration: "운영시간 확인 후 계획", distance: "지도 확인 필요", reservation: "시설 이용·예약 여부 확인", officialUrl: guideSources.sambong, mapUrl: "https://map.naver.com/p/search/국립삼봉자연휴양림", verified: true },
  { id: "sambong-spring", name: "삼봉약수", category: "약수·숲길", summary: "국립삼봉자연휴양림 안에서 숲길을 걸으며 만날 수 있는 홍천의 대표 약수입니다.", address: "국립삼봉자연휴양림 내", seasons: ["봄", "여름", "가을"], experience: "숲길과 약수", duration: "출발 전 확인", distance: "지도 확인 필요", reservation: "휴양림 운영정보 확인", officialUrl: guideSources.sambong, mapUrl: "https://map.naver.com/p/search/홍천%20삼봉약수", verified: true },
  { id: "ginkgo-forest", name: "홍천 은행나무숲", category: "가을 명소", summary: "가을이면 약 2,000그루의 은행나무가 장관을 이루는 홍천의 대표적인 계절 명소입니다.", address: "정확한 진입 위치 출발 전 확인", seasons: ["가을"], experience: "은행나무 단풍", duration: "개방 일정 확인 후 계획", distance: "지도 확인 필요", reservation: "사유지·계절 개방 여부 확인", officialUrl: guideSources.ginkgo, mapUrl: "https://map.naver.com/p/search/홍천%20은행나무숲", verified: true },
  { id: "guryong-old-road", name: "구룡령 옛길", category: "백두대간·명승", summary: "홍천과 양양을 잇던 백두대간의 옛길에서 깊은 산의 풍경과 역사를 만날 수 있습니다.", address: "국가유산포털 소재지: 강원 양양군 서면 갈천리 산1-1", seasons: ["봄", "가을"], experience: "역사길·산행", duration: "코스·체력에 따라 확인", distance: "지도 확인 필요", reservation: "날씨·통제 여부 확인", officialUrl: guideSources.guryong, mapUrl: "https://map.naver.com/p/search/구룡령%20옛길", verified: true },
  { id: "odaesan", name: "오대산국립공원", category: "국립공원", summary: "열목어마을 여행과 함께 강원도의 깊은 숲과 백두대간의 생태를 경험할 수 있는 국립공원입니다.", address: "방문할 탐방코스별 출발지 확인", seasons: ["사계절"], experience: "숲길·탐방", duration: "선택 코스별 확인", distance: "지도 확인 필요", reservation: "탐방로 통제·입산시간 확인", officialUrl: guideSources.odaesan, mapUrl: "https://map.naver.com/p/search/오대산국립공원", verified: true },
  { id: "tongmaram", name: "통마람계곡·약수", category: "계곡·자연", summary: "열목어마을의 청정 자연과 연결되는 계곡 여행지로 소개됩니다.", address: "정확한 진입 위치 운영자 확인 필요", seasons: ["봄", "여름", "가을"], experience: "계곡과 자연", duration: "확인 필요", distance: "확인 필요", reservation: "명칭·개방·안전정보 확인", officialUrl: guideSources.village, mapUrl: "https://map.naver.com/p/search/홍천%20통마람계곡", verified: false },
] as const;

export const themeRoutes = [
  { title: "숲과 약수 코스", stops: ["열목어마을", "국립삼봉자연휴양림", "삼봉약수"], note: "숲길과 약수를 천천히 즐기는 동선" },
  { title: "가을 단풍 코스", stops: ["열목어마을", "홍천 은행나무숲", "구룡령"], note: "개방 일정과 단풍 시기를 먼저 확인" },
  { title: "백두대간 자연 코스", stops: ["열목어마을", "구룡령 옛길", "오대산권"], note: "날씨·탐방 통제와 체력에 맞춰 선택" },
  { title: "가족 농촌체험 코스", stops: ["열목어마을 프로그램", "계곡과 숲", "농촌·생태 체험"], note: "아이 연령과 계절 프로그램 사전 상담" },
] as const;

export const seasons = [
  { id: "spring", name: "봄", image: "/images/farm-experience.png", alt: "봄철 홍천 산촌에서 식물을 관찰하는 한국인 가족", items: ["숲의 새순", "산나물과 농촌체험", "가벼운 산책", "큰 일교차 준비"], credit: "홍천애홀릭·기존 프로젝트 자산", creditUrl: "https://www.hcholic.com/219" },
  { id: "summer", name: "여름", image: "/images/valley-rest.png", alt: "여름철 홍천 열목어마을의 맑은 계곡과 숲", items: ["맑은 계곡", "숲 그늘", "물놀이와 냉족욕", "우천·계곡 수위 확인"], credit: "홍천애홀릭·기존 프로젝트 자산", creditUrl: "https://www.hcholic.com/219" },
  { id: "autumn", name: "가을", image: "/images/guide-autumn.jpg", alt: "가을 단풍이 물들기 시작한 강원도 설악산의 실제 산악 풍경", items: ["단풍", "홍천 은행나무숲", "제철 농산물", "주말 교통과 개방 일정 확인"], credit: "Christophe95 · Wikimedia Commons · CC BY-SA 4.0", creditUrl: "https://commons.wikimedia.org/wiki/File:Landscape_in_Seoraksan_National_Park_1.jpg" },
  { id: "winter", name: "겨울", image: "/images/guide-winter.jpg", alt: "폭설이 내린 강원도 영동 산림의 실제 겨울 풍경", items: ["조용한 산촌", "따뜻한 족욕과 밥상", "설경", "도로 결빙과 월동장비 확인"], credit: "콩가루 · Wikimedia Commons · CC BY-SA 3.0", creditUrl: "https://commons.wikimedia.org/wiki/File:%EC%98%81%EB%8F%99%EC%A7%80%EB%B0%A9_%ED%8F%AD%EC%84%A4_2014-02-10_15-18.jpg" },
] as const;

export const transportGuides = [
  { id: "car", title: "자가용", status: "출발 전 목적지 재확인", steps: ["수도권 또는 출발지", "홍천군 내면 진입", "산간도로 주행", "운영자가 안내한 최종 집결지"], checks: ["야간 운전 주의", "겨울철 결빙과 월동장비", "주유소·전기차 충전 계획", "예상 시간은 출발 직전 지도에서 확인"] },
  { id: "transit", title: "대중교통", status: "최신 노선·시간표 확인", steps: ["서울 또는 출발지", "홍천터미널 또는 지역 거점", "내면 방면 이동", "택시·지역교통 또는 픽업 여부 문의", "최종 이동 방법 확인"] , checks: ["직접 연결 노선 확인 필요", "마을 픽업 제공 여부 미확인", "막차와 귀가편 사전 확인"] },
  { id: "bus", title: "단체버스", status: "사전 상담 필수", steps: ["차량 종류와 인원 전달", "진입·회차 가능 여부 확인", "승하차·주차 위치 확정", "겨울철 도로 상태 재확인"], checks: ["대형버스 진입", "회차 공간", "주차 가능 대수", "기사 숙박·식사"] },
] as const;

export const packingLists = [
  { title: "기본 준비물", items: ["편안한 운동화", "계절에 맞는 겉옷", "개인 위생용품", "개인 상비약", "벌레 기피제", "자외선 차단제", "여벌 양말과 옷", "물병", "휴대전화 충전기"] },
  { title: "여름", items: ["물놀이 신발", "여벌 옷", "수건", "방수 가방"] },
  { title: "겨울", items: ["방한복", "미끄럼 방지 신발", "차량 월동장비", "출발 전 도로 상황 확인"] },
  { title: "치유 프로그램", items: ["움직이기 편한 옷", "건강 상태 사전 전달", "알레르기와 식이 제한 전달"] },
] as const;

export const safetyNotes = ["계곡 수위는 날씨에 따라 급격히 변할 수 있습니다.", "집중호우와 기상특보 시 계곡에 접근하지 마세요.", "숲과 계곡에서는 지정된 동선을 이용하세요.", "야생동물과 벌레에 주의하세요.", "아이는 보호자와 함께 이동해야 합니다.", "산간지역 야간 운전과 겨울철 도로 결빙에 주의하세요.", "프로그램 참여 전 건강 상태를 알려주세요.", "반려동물 동반 가능 여부를 미리 확인하세요.", "고령자·휠체어 이용자·보행이 불편한 방문객은 편의시설을 사전 상담해 주세요."] as const;

export const officialLinks = [
  { label: "홍천 내면 날씨 확인", href: "https://www.weather.go.kr/w/index.do", source: "기상청 날씨누리" },
  { label: "도로 상황 확인", href: "https://www.its.go.kr/", source: "국가교통정보센터" },
  { label: "국립공원 탐방정보", href: guideSources.odaesan, source: "국립공원공단" },
  { label: "휴양림 운영정보", href: guideSources.sambong, source: "숲나들e" },
] as const;

export const guideFaqs = [
  ["서울에서 자동차로 얼마나 걸리나요?", "교통 상황과 최종 목적지에 따라 달라집니다. 정확한 시간을 고정해 안내하지 않으며 출발 직전 지도에서 실시간 경로를 확인해 주세요."],
  ["대중교통으로 갈 수 있나요?", "홍천터미널 또는 지역 거점에서 내면 방면 이동편을 확인해야 합니다. 최신 노선과 시간표를 확인한 뒤 최종 이동 방법을 운영자에게 문의해 주세요."],
  ["마을 픽업이 가능한가요?", "픽업 서비스 제공 여부는 확인되지 않았습니다. 예약 전 운영자에게 가능 여부와 비용을 문의해 주세요."],
  ["주차할 수 있나요?", "차종별 주차 가능 대수와 위치가 확정 공개되지 않았습니다. 차량 종류와 대수를 미리 알려주세요."],
  ["대형버스가 들어갈 수 있나요?", "진입로, 회차 공간과 승하차 위치 확인이 필요하므로 단체버스는 반드시 사전 상담해 주세요."],
  ["아이와 계곡에 들어갈 수 있나요?", "날씨와 수위를 먼저 확인하고 보호자와 지정된 동선을 이용해야 합니다. 기상특보나 집중호우 때는 접근하지 마세요."],
  ["비가 오면 프로그램은 어떻게 되나요?", "실내 대체 프로그램과 일정 변경 가능 여부를 방문 전 확인해 주세요. 계곡 활동은 현장 기상과 수위에 따라 제한될 수 있습니다."],
  ["겨울에도 방문할 수 있나요?", "겨울 여행은 가능 여부를 먼저 상담하고 도로 결빙, 월동장비와 기상특보를 확인해야 합니다."],
  ["숙소와 프로그램은 따로 예약해야 하나요?", "일반 객실은 네이버 예약을 이용하고, 숙박·식사·프로그램 결합 일정은 맞춤 상담을 이용해 주세요."],
  ["식사를 신청할 수 있나요?", "치유밥상 관련 운영 이력은 있으나 날짜와 인원별 가능 여부는 확인이 필요합니다. 알레르기와 식이 제한을 미리 알려주세요."],
  ["주변 관광지는 예약이 필요한가요?", "시설과 계절에 따라 다릅니다. 숲나들e, 국립공원공단과 각 공식 관광정보에서 운영·예약 여부를 확인해 주세요."],
  ["반려동물을 동반할 수 있나요?", "현재 동반 가능 여부가 확정되지 않았습니다. 숙소·프로그램·주변 시설별 기준을 방문 전에 확인해 주세요."],
  ["고령자나 보행이 불편한 사람도 방문할 수 있나요?", "대한민국 구석구석에는 열목어마을의 무장애 편의시설이 제한적으로 안내됩니다. 이동 동선과 시설 이용 가능 여부를 사전에 상담해 주세요."],
  ["어떤 주소를 내비게이션에 입력해야 하나요?", "마을·사업자·숙소 주소로 보이는 자료가 서로 달라 현재 확정 주소를 표시하지 않습니다. 예약 확정 시 운영자가 안내한 집결지를 입력해 주세요."],
] as const;

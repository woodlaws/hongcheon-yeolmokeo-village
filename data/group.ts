export type GroupStatus = {
  verifiedHistory: boolean;
  currentlyAvailable: boolean | null;
  needsConfirmation: boolean;
  proposed: boolean;
  sourceUrls: string[];
};

const sources = {
  fire: "https://fire.gwd.go.kr/hc119/partici/partici_news?articleSeq=11113939",
  emergency: "https://www.korea.kr/common/docViewer.do?fileId=191613154&tblKey=GMN",
  workation: "https://gw.breaknews.com/7574",
  health: "https://www.shinailbo.co.kr/news/articleView.html?idxno=1928772",
  tourism: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=14&key=1856&pageIndex=2&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=1991",
} as const;

export const groupTrustHistory = [
  { year: "2019–2022", label: "소방관 심신 회복 프로그램", source: "홍천군 관광정보", href: sources.tourism },
  { year: "2020", label: "코로나19 대응 119구급대원 프로그램", source: "대한민국 정책브리핑", href: sources.emergency },
  { year: "2024", label: "홍천소방서 치유 프로그램", source: "홍천소방서", href: sources.fire },
  { year: "2024", label: "호흡기질환자 맞춤형 치유농업", source: "신아일보", href: sources.health },
  { year: "2026", label: "농촌형 워케이션 시범 운영", source: "브레이크뉴스 강원", href: sources.workation },
  { year: "운영 이력", label: "농촌교육 프로그램·강사 연수", source: "홍천군 관광정보", href: sources.tourism },
] as const;

export const groupAudiences = [
  { id: "corporate-refresh", title: "기업 리프레시 워크숍", audience: "기업 구성원·부서·프로젝트팀", goals: ["조직 재충전", "팀 소통", "번아웃 예방", "아이디어와 집중"], programs: ["숲길 산책", "몸살림 운동", "에코염색 또는 티 블렌딩", "치유밥상", "팀 대화", "숙박 선택"], status: { verifiedHistory: false, currentlyAvailable: null, needsConfirmation: true, proposed: true, sourceUrls: [] } },
  { id: "public-training", title: "공공기관 연수", audience: "공공기관·지자체·협회", goals: ["직원 심신 휴식", "조직 소통", "공동체 프로그램", "농촌과 지역 가치"], programs: ["오리엔테이션", "치유 프로그램", "소통 프로그램", "지역 밥상", "회의·교육", "숙박"], status: { verifiedHistory: true, currentlyAvailable: null, needsConfirmation: true, proposed: true, sourceUrls: [sources.tourism] } },
  { id: "firefighter-recovery", title: "소방·안전 종사자 회복 프로그램", audience: "소방관·구급대원·안전 종사자", goals: ["심신 휴식", "업무 긴장 완화", "동료와의 재충전"], programs: ["몸살림 운동", "싱잉볼 테라피", "에코염색", "숲길 걷기", "약초 족욕", "치유밥상"], status: { verifiedHistory: true, currentlyAvailable: null, needsConfirmation: true, proposed: false, sourceUrls: [sources.fire, sources.emergency, sources.tourism] } },
  { id: "welfare-health", title: "복지·보건기관 프로그램", audience: "복지기관 종사자·돌봄 노동자·중장년 단체", goals: ["업무 소진 완화", "자연 속 휴식", "생활습관 점검", "동료 관계 회복"], programs: ["가벼운 몸살림", "약초 족욕", "싱잉볼", "아로마 티 블렌딩", "치유밥상"], status: { verifiedHistory: true, currentlyAvailable: null, needsConfirmation: true, proposed: true, sourceUrls: [sources.health] }, caution: "건강 상태와 활동 가능 범위를 사전에 상담해 주세요." },
  { id: "school-education", title: "학교·교육기관 농촌체험", audience: "학생·교직원·교육기관", goals: ["농촌과 생태 이해", "자연 관찰", "공동체 활동", "환경·지속가능성 교육"], programs: ["숲·계곡 생태 관찰", "농산물 수확", "에코염색", "지역 식재료 체험", "마을 이야기"], status: { verifiedHistory: true, currentlyAvailable: null, needsConfirmation: true, proposed: true, sourceUrls: [sources.tourism] }, caution: "학생 연령과 안전관리 기준을 확인한 뒤 확정합니다." },
  { id: "rural-workation", title: "농촌형 워케이션", audience: "회사원·프리랜서·창업팀·소규모 조직", goals: ["업무와 휴식의 전환", "자연 속 몰입", "소규모 네트워킹"], programs: ["비움센터 업무공간", "사랑방", "프라이빗 숙박", "티 블렌딩", "약초 족욕", "몸살림", "숲 산책", "치유밥상"], status: { verifiedHistory: true, currentlyAvailable: null, needsConfirmation: true, proposed: false, sourceUrls: [sources.workation] }, caution: "2026년 시범 운영 이력이며 현재 상시 판매 여부는 확인이 필요합니다." },
] satisfies Array<{ id: string; title: string; audience: string; goals: string[]; programs: string[]; status: GroupStatus; caution?: string }>;

export const groupElements = [
  { title: "자연", items: ["숲길 걷기", "계곡 물소리 명상", "자연 관찰", "야외 휴식"], proposed: false },
  { title: "몸", items: ["몸살림 운동", "약초 족욕", "가벼운 스트레칭", "건강 상태 확인 활동"], proposed: false },
  { title: "마음", items: ["싱잉볼 테라피", "아로마 티 블렌딩", "호흡과 명상", "에코염색"], proposed: false },
  { title: "관계", items: ["팀 대화", "공동 체험", "네트워킹", "조직 맞춤 워크숍"], proposed: true, note: "전문 퍼실리테이터 제공 여부 확인 필요" },
  { title: "생활", items: ["치유밥상", "지역 농산물", "농촌 체험", "숙박", "워케이션 공간"], proposed: false },
].map(item => ({ ...item, currentlyAvailable: null, needsConfirmation: true }));

export const groupSchedules = [
  { id: "day", title: "당일형", recommendation: "가벼운 조직 리프레시·교육기관 체험", steps: ["10:30 마을 도착과 안내", "11:00 숲 또는 몸살림 프로그램", "12:30 치유밥상", "14:00 에코염색·족욕·티 블렌딩 중 선택", "15:30 소통과 마무리", "16:30 출발"] },
  { id: "overnight", title: "1박 2일형", recommendation: "기업·기관 워크숍·종사자 재충전", steps: ["1일차 마을 도착과 오리엔테이션", "치유밥상과 숲길 걷기", "선택형 치유 프로그램", "저녁 식사와 조직 소통 또는 자유 휴식", "숙박", "2일차 아침 산책과 몸살림", "아침 식사와 선택형 프로그램", "소감 나누기·점심 후 출발"] },
  { id: "workation", title: "2박 3일형", recommendation: "농촌형 워케이션·장기 연수·조직 회복", steps: ["업무·회의시간", "숲 산책", "몸살림 운동", "아로마 티 블렌딩", "약초 족욕", "치유밥상", "숙박과 자유 휴식", "조직 소통"] },
] as const;

export const groupCases = [
  { title: "소방관 심신 회복 프로그램", year: "2019–2022 · 2024", audience: "소방관·홍천소방서 직원", summary: "심신 휴식과 재충전을 지원하는 몸살림, 싱잉볼, 에코염색과 상태 확인 활동을 운영한 이력입니다.", facts: ["2024년 홍천소방서 직원 20명", "자율신경 활성도·피로도 확인 활동"], source: "홍천소방서·홍천군", href: sources.fire },
  { title: "119구급대원 치유 프로그램", year: "2020", audience: "코로나19 대응 119구급대원", summary: "업무로 지친 구급대원을 대상으로 숲 트레킹, 물소리 명상, 냉족욕과 치유밥상을 운영한 이력입니다.", facts: ["숲 트레킹·물소리 명상", "냉족욕·치유밥상"], source: "대한민국 정책브리핑", href: sources.emergency },
  { title: "호흡기질환자 맞춤 치유농업", year: "2024", audience: "호흡기질환자", summary: "대상 특성을 고려해 1박 2일 동안 몸살림, 에코염색, 산약초 족욕과 싱잉볼 활동을 구성한 사례입니다.", facts: ["1박 2일 프로그램", "몸살림·에코염색·산약초 족욕"], source: "신아일보", href: sources.health },
  { title: "농촌형 워케이션", year: "2026", audience: "직장인·프리랜서 등 7명", summary: "2박 3일 동안 원격 업무와 아로마 티 블렌딩, 족욕, 몸살림 운동을 결합한 시범 운영 사례입니다.", facts: ["2박 3일 시범 운영", "업무·숙박·식사·치유 활동"], source: "브레이크뉴스 강원", href: sources.workation },
] as const;

export const groupProcess = [
  ["기관 유형과 방문 목적 확인", "기관명·담당 부서·방문 목표"], ["희망 날짜와 인원 확인", "희망일·대체일·예상 인원"], ["당일·숙박 일정 선택", "체류 기간·숙박 필요 여부"], ["프로그램·식사·공간 조합", "관심 활동·식사·회의공간"], ["일정과 견적 제안", "예상 예산·필수 조건"], ["최종 협의 후 방문", "참가자 특성·안전 고려사항"],
] as const;

export const groupSummary = [
  ["대상 기관", "기업·공공기관·학교·소방·복지·협회"], ["당일·숙박", "모두 구성 가능 · 현재 일정 확인 필요"], ["추천 기간", "당일·1박 2일·2박 3일"], ["주요 프로그램", "숲·몸·마음·농촌·소통 활동"], ["숙소", "보금자리·비움센터·한옥·워케이션 객실"], ["식사", "지역 농산물 치유밥상 · 횟수와 메뉴 협의"], ["회의·교육 공간", "관련 공간 있음 · 장비와 수용 인원 확인 필요"], ["맞춤 구성", "기관 목적·대상·계절에 따라 협의"], ["비용", "인원과 구성에 따라 상담 후 안내"], ["예약 방식", "온라인 견적 문의 후 일정·가능 여부 확인"],
] as const;

export const groupFaqs = [
  ["최소 또는 최대 참여 인원은 몇 명인가요?", "최소·최대 인원은 확정 공개 전입니다. 예상 인원과 기관 유형을 알려주시면 숙소와 공간 가능 범위를 확인합니다."],
  ["당일 프로그램도 가능한가요?", "당일형 구성 예시는 마련되어 있으며 현재 가능한 날짜와 프로그램은 상담 후 확정합니다."],
  ["숙박과 식사를 함께 신청할 수 있나요?", "숙박·식사·프로그램 통합 구성이 가능합니다. 객실과 식사 횟수는 일정과 인원에 따라 확인합니다."],
  ["기업 워크숍용 회의공간이 있나요?", "사랑방, 비움센터 업무공간과 다목적 공간 관련 자료가 있습니다. 장비·배치·수용 인원은 운영자 확인이 필요합니다."],
  ["프로그램은 기관 목적에 맞게 변경할 수 있나요?", "목적과 참가자 특성을 바탕으로 구성안을 제안합니다. 강사와 퍼실리테이터 제공 범위는 협의가 필요합니다."],
  ["소방·복지 종사자를 위한 프로그램도 가능한가요?", "소방·구급·호흡기질환자 대상 과거 운영 이력이 있습니다. 현재 가능 일정과 적합성은 사전 상담합니다."],
  ["학생과 교직원 프로그램도 운영하나요?", "농촌교육 관련 이력이 있습니다. 연령, 안전관리 기준과 인솔 계획을 확인한 뒤 구성합니다."],
  ["워케이션은 어떤 방식으로 운영되나요?", "2026년 2박 3일 시범 운영 이력이 있습니다. 현재 상시 판매 여부와 업무공간·숙박 조건은 확인이 필요합니다."],
  ["비가 오면 야외 프로그램은 어떻게 되나요?", "대체 실내 프로그램과 일정 변경 가능 여부는 계절·시설 상황에 따라 사전에 협의합니다."],
  ["식이 알레르기나 채식 식사를 요청할 수 있나요?", "식이 제한을 문의서에 남겨주세요. 실제 대응 가능 범위와 메뉴는 운영자 확인 후 안내합니다."],
  ["버스 진입과 주차가 가능한가요?", "차종별 진입과 주차 가능 대수는 확인되지 않았습니다. 차량 종류와 대수를 반드시 사전에 알려주세요."],
  ["강사와 진행자가 포함되나요?", "프로그램별 강사·진행 인력과 전문 퍼실리테이터 포함 여부는 견적 단계에서 확인합니다."],
  ["견적에는 어떤 항목이 포함되나요?", "선택한 프로그램, 식사, 숙박, 공간과 진행 조건을 확인한 뒤 항목별로 안내합니다."],
  ["예약은 언제까지 해야 하나요?", "고정 예약 마감일은 확인되지 않았습니다. 희망일과 대체일을 함께 보내 가능한 일정을 먼저 확인해 주세요."],
  ["세금계산서 발행이 가능한가요?", "발행 주체와 가능 여부는 운영자 확인이 필요합니다. 기관의 증빙 요건을 견적 요청 시 알려주세요."],
] as const;

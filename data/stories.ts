import { ginkgoImages, ginkgoCredit } from "./ginkgo";
export type StoryCategory =
  | "마을 소식"
  | "치유의 기록"
  | "계절 이야기"
  | "사람 이야기"
  | "체험 후기"
  | "언론·기관"
  | "모집 안내";

export type StoryFactStatus = "verified" | "needs-confirmation" | "editorial";

export interface StorySection {
  heading: string;
  paragraphs: string[];
}

export interface StorySource {
  label: string;
  url: string;
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  lead: string;
  category: StoryCategory;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  featured?: boolean;
  factStatus: StoryFactStatus;
  editorialNote?: string;
  pullQuote: string;
  sections: StorySection[];
  relatedProgram: { title: string; description: string; href: string; label: string };
  sources: StorySource[];
}

export const storyCategories = ["전체", "마을 소식", "치유의 기록", "계절 이야기", "사람 이야기", "체험 후기", "언론·기관", "모집 안내"] as const;

export const storySourceUrls = {
  hongcheon: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?key=2035&tourNo=1991",
  healingAgriculture: "https://www.hongcheon.go.kr/agri/contents.do?key=1062",
  visitKorea: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=58201d34-1a4b-4582-b2dc-100419afaee2",
  fire: "https://fire.gwd.go.kr/hc119/partici/partici_news?articleSeq=11113939",
  emergency: "https://www.korea.kr/common/docViewer.do?fileId=191613154&tblKey=GMN",
  workation: "https://gw.breaknews.com/7574",
} as const;

const commonSources = [
  { label: "홍천군 문화관광포털 열목어마을", url: storySourceUrls.hongcheon },
  { label: "대한민국 구석구석 홍천 열목어마을", url: storySourceUrls.visitKorea },
];

// 글을 추가할 때 factStatus를 먼저 정하고, 확인 가능한 사실에는 sources를 반드시 연결하세요.
// 현재 운영 여부가 확인되지 않은 프로그램은 본문에서 상담 후 확정된다고 안내합니다.
export const stories: Story[] = [
  {
    slug: "firefighter-healing-day",
    title: "소방관들의 몸과 마음을 다독인 숲속의 하루",
    excerpt: "몸살리기 운동과 싱잉볼, 에코염색으로 잠시 긴장을 내려놓았던 2024년 치유 프로그램 현장을 소개합니다.",
    lead: "늘 긴장 속에서 일하는 이들이 숲 가까이에서 자신의 몸과 마음을 천천히 살펴본 하루였습니다.",
    category: "치유의 기록", publishedAt: "2024-06-24", readingMinutes: 4,
    coverImage: "/images/singing-bowl.png", coverAlt: "나무 바닥에 놓인 싱잉볼과 열목어마을 치유 프로그램 공간",
    tags: ["소방관", "단체 프로그램", "싱잉볼"], featured: true, factStatus: "verified",
    pullQuote: "치유를 치료의 약속으로 말하기보다, 잠시 멈춰 자신의 상태를 돌아보는 경험으로 기록합니다.",
    sections: [
      { heading: "다시 이어진 치유 프로그램", paragraphs: ["홍천소방서 기록에 따르면 2024년 6월 24일 홍천 내면 열목어마을에서 소방관 치유 프로그램이 열렸습니다. 2019년부터 2022년까지 진행됐던 프로그램을 다시 시범 운영한 자리였습니다.", "홍천소방서 직원 20명이 참여했으며, 프로그램은 휴식과 회복을 돕는 경험에 초점을 맞췄습니다."] },
      { heading: "몸과 마음에 귀 기울인 순서", paragraphs: ["참가자들은 심신회복 몸살리기, 싱잉볼 테라피, 에코염색을 경험했습니다. 자율신경 활성도와 피로도를 확인하며 자신의 상태를 살펴보는 시간도 가졌습니다.", "이 기록은 의료적 치료 효과를 뜻하지 않습니다. 자연 속 활동과 감각에 집중하며 일상의 긴장을 잠시 내려놓는 프로그램 운영 사례입니다."] },
      { heading: "현재 참여를 원한다면", paragraphs: ["이 글은 2024년 운영 기록을 바탕으로 합니다. 같은 구성을 원하시면 단체 목적과 인원, 희망 날짜를 적어 상담해 주세요."] },
    ],
    relatedProgram: { title: "조직을 위한 회복형 프로그램", description: "기관의 목적과 인원에 맞춰 가능한 활동과 일정을 확인합니다.", href: "/group", label: "단체 프로그램 살펴보기" },
    sources: [{ label: "홍천소방서 소방관 치유프로그램 기록", url: storySourceUrls.fire }, { label: "홍천군 농업기술센터 치유농업시설 현황", url: storySourceUrls.healingAgriculture }],
  },
  {
    slug: "summer-valley-morning", title: "계곡물 소리가 가장 맑게 들리는 아침",
    excerpt: "통마람계곡과 계방천의 맑은 물, 숲의 바람을 천천히 느끼며 걷는 열목어마을의 여름 아침입니다.",
    lead: "해가 높아지기 전, 물소리를 따라 걷는 일만으로 마을의 여름을 충분히 만날 수 있습니다.",
    category: "계절 이야기", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/valley-rest.png", coverAlt: "초록 숲 사이로 흐르는 홍천 열목어마을의 맑은 계곡",
    tags: ["여름", "계곡", "숲길"], factStatus: "editorial",
    pullQuote: "물가에서는 속도를 늦추고, 자연을 관찰하는 거리를 지켜주세요.",
    sections: [
      { heading: "물소리로 시작하는 하루", paragraphs: ["열목어마을은 백두대간 길목과 통마람계곡 가까이에 자리합니다. 이 글은 마을의 자연환경을 바탕으로 구성한 계절 에세이입니다.", "아침의 낮은 햇빛과 나뭇잎 사이 바람을 느끼며 걷되, 계곡 수위와 날씨를 먼저 확인하는 것이 좋습니다."] },
      { heading: "맑은 자연을 대하는 방법", paragraphs: ["열목어 서식지는 보호해야 할 생태 공간입니다. 열목어를 직접 관찰하거나 만질 수 있다고 약속하지 않으며, 물속 생물을 쫓거나 채집하지 않는 여행을 권합니다.", "미끄럼 방지 신발과 여벌 양말을 준비하고 비가 온 직후에는 물가 접근을 삼가세요."] },
    ],
    relatedProgram: { title: "숲과 계곡을 가까이 만나는 쉼", description: "계절과 현장 상황에 맞는 프로그램을 상담합니다.", href: "/programs", label: "치유 프로그램 보기" }, sources: commonSources,
  },
  {
    slug: "workcation-three-days", title: "일을 멈추지 않고도 제대로 쉬어본 2박 3일",
    excerpt: "일과 휴식 사이의 균형을 찾기 위해 마을을 찾은 워케이션 참가자의 체류 경험을 재구성했습니다.",
    lead: "업무를 끝낸 뒤 곧바로 숲의 시간으로 전환되는 2박 3일의 흐름을 따라갑니다.",
    category: "체험 후기", publishedAt: "2026-07-03", readingMinutes: 4,
    coverImage: "/images/stay-room.png", coverAlt: "산과 숲이 보이는 열목어마을 숙소 객실",
    tags: ["워케이션", "직장인", "장기 체류"], factStatus: "needs-confirmation",
    editorialNote: "공개된 시범 운영 자료를 바탕으로 참가 흐름을 재구성한 콘텐츠이며, 실제 참가자의 직접 인터뷰나 인용이 아닙니다.",
    pullQuote: "업무와 휴식이 경쟁하지 않고, 하루 안에서 서로 자리를 내어주는 체류를 상상했습니다.",
    sections: [
      { heading: "2박 3일의 리듬", paragraphs: ["2026년 공개 보도에는 직장인과 프리랜서 등 7명이 참여한 농촌형 워케이션 시범 운영 사례가 소개됐습니다. 원격 업무와 숙박, 식사, 치유 활동을 한 일정 안에 엮었습니다.", "이 글은 그 프로그램 구성을 읽기 쉽게 재구성한 것으로, 특정 참가자의 실제 후기나 발언을 담지 않았습니다."] },
      { heading: "일과 쉼 사이에 놓인 활동", paragraphs: ["아로마 티 블렌딩, 약초 족욕, 몸살림 운동 같은 활동이 소개됐습니다. 활동은 계절과 운영 여건에 따라 달라질 수 있으며 현재 상시 판매 여부는 확인이 필요합니다.", "업무 공간, 인터넷 환경, 식사와 숙박 조건은 방문 전에 반드시 상담해 주세요."] },
    ],
    relatedProgram: { title: "머무는 동안의 공간 확인하기", description: "객실과 체류 방식, 현재 가능한 일정을 살펴봅니다.", href: "/stay", label: "숙소 살펴보기" }, sources: [{ label: "브레이크뉴스 강원 농촌형 워케이션 보도", url: storySourceUrls.workation }],
  },
  {
    slug: "singing-bowl-time", title: "싱잉볼 소리에 귀 기울이는 시간",
    excerpt: "소리를 따라 호흡을 가다듬고 자신에게 집중해보는 열목어마을의 프로그램을 소개합니다.",
    lead: "울림이 잦아드는 동안, 바깥의 소음보다 가까운 자신의 호흡에 잠시 머뭅니다.",
    category: "치유의 기록", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/quiet-time-1.png", coverAlt: "숲을 바라보며 고요히 앉아 쉬는 사람",
    tags: ["싱잉볼", "명상", "휴식"], factStatus: "editorial",
    pullQuote: "좋아져야 한다는 목표보다, 지금의 감각을 알아차리는 시간에 가깝습니다.",
    sections: [
      { heading: "울림을 듣는 연습", paragraphs: ["홍천군 농업기술센터는 열목어마을 프로그램으로 싱잉볼 테라피를 안내합니다. 홈페이지에서는 이를 질환을 치료하는 행위가 아니라 감각과 호흡에 집중하는 휴식 경험으로 소개합니다.", "참여 방식과 진행 시간, 지도 인력은 현재 운영 상황에 따라 달라질 수 있습니다."] },
      { heading: "편안한 참여를 위해", paragraphs: ["소리에 민감하거나 건강상 고려할 점이 있다면 상담 단계에서 미리 알려주세요. 누구나 같은 방식으로 참여해야 하는 프로그램은 아닙니다."] },
    ],
    relatedProgram: { title: "나에게 맞는 치유 프로그램 찾기", description: "계절과 컨디션에 맞는 활동을 상담 후 구성합니다.", href: "/programs", label: "프로그램 살펴보기" }, sources: [{ label: "홍천군 농업기술센터 치유농업", url: storySourceUrls.healingAgriculture }],
  },
  {
    slug: "eco-dyeing", title: "숲의 색을 천에 담는 에코염색",
    excerpt: "자연과 가까운 재료를 활용해 천천히 색을 입히는 에코염색 체험을 소개합니다.",
    lead: "손으로 색을 겹쳐 올리는 과정은 결과보다 천천히 만드는 시간 자체를 기억하게 합니다.",
    category: "마을 소식", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/farm-experience.png", coverAlt: "열목어마을 밭에서 자연 재료를 살피는 농촌 체험 장면",
    tags: ["에코염색", "체험", "가족"], factStatus: "needs-confirmation",
    pullQuote: "같은 재료도 계절과 손길에 따라 다른 색을 남깁니다.",
    sections: [
      { heading: "기록으로 확인되는 체험", paragraphs: ["에코염색은 홍천군 농업기술센터와 2024년 홍천소방서 자료에서 열목어마을의 치유농업 활동으로 확인됩니다.", "다만 재료, 소요 시간, 연령별 참여 조건과 현재 운영 일정은 공개 자료만으로 확정할 수 없어 사전 상담이 필요합니다."] },
      { heading: "가족이 함께한다면", paragraphs: ["아이와 함께할 때는 사용 재료와 보호자 동반 기준을 먼저 확인하세요. 계절 재료를 관찰하고 손으로 색을 만드는 과정에 초점을 두면 좋습니다."] },
    ],
    relatedProgram: { title: "가족과 함께하는 농촌 체험", description: "연령과 계절에 맞는 체험 가능 여부를 확인합니다.", href: "/programs/family-experience", label: "가족 프로그램 보기" }, sources: [{ label: "홍천군 농업기술센터 치유농업", url: storySourceUrls.healingAgriculture }, { label: "홍천소방서 2024년 운영 기록", url: storySourceUrls.fire }],
  },
  {
    slug: "spring-gomchwi", title: "곰취 향이 마을을 채우는 봄",
    excerpt: "산나물과 새로운 숲빛이 찾아오는 열목어마을의 봄 풍경과 계절 체험을 소개합니다.",
    lead: "연한 잎과 흙냄새가 돌아오면 산촌의 봄은 식탁과 밭에서 먼저 시작됩니다.",
    category: "계절 이야기", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/village-vision-3.jpg", coverAlt: "초록 산나물을 들고 서 있는 열목어마을 주민",
    tags: ["봄", "곰취", "농촌체험"], factStatus: "editorial",
    pullQuote: "제철을 만나는 가장 좋은 방법은 수확량보다 그 계절의 속도를 배우는 일입니다.",
    sections: [
      { heading: "봄의 식재료를 만나는 법", paragraphs: ["홍천군 관광 자료에는 열목어마을의 산채와 곰취가 소개돼 있습니다. 이 글은 그 지역성과 봄 풍경을 바탕으로 쓴 계절 에세이입니다.", "수확 체험이나 판매 일정은 해마다 기후와 작황에 따라 달라질 수 있으므로 현재 가능 여부를 확인해야 합니다."] },
      { heading: "준비하면 좋은 것", paragraphs: ["기온 차에 대비할 얇은 겉옷과 흙길에 편한 신발을 준비하세요. 식물은 안내 없이 채취하지 않고, 알레르기나 식이 제한은 식사 상담 때 알려주세요."] },
    ],
    relatedProgram: { title: "계절을 만나는 가족 여행", description: "방문 시기에 가능한 농촌 체험을 확인합니다.", href: "/guide", label: "여행 안내 보기" }, sources: commonSources,
  },
  {
    slug: "village-people", title: "잘 쉬는 방법을 함께 고민하는 마을 사람들",
    excerpt: "방문객이 편안하게 머물도록 음식과 공간, 프로그램을 준비하는 마을의 일을 담았습니다.",
    lead: "눈에 띄는 한 장면 뒤에는 밥상을 차리고 공간을 살피며 다음 계절을 준비하는 손길이 있습니다.",
    category: "사람 이야기", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/village-vision-1.jpg", coverAlt: "열목어마을의 숲과 숙박 공간을 바라보는 주민",
    tags: ["마을 사람", "운영자", "로컬"], factStatus: "editorial",
    editorialNote: "실제 인터뷰가 확보되기 전까지 주민의 실명·경력·직접 발언을 사용하지 않은 편집 콘텐츠입니다.",
    pullQuote: "좋은 쉼은 조용히 준비된 공간과 서로의 속도를 존중하는 마음에서 시작됩니다.",
    sections: [
      { heading: "머무는 시간을 준비하는 일", paragraphs: ["숙소를 정돈하고, 제철 식재료를 살피고, 날씨에 맞춰 프로그램의 순서를 조정하는 일이 방문 전부터 이어집니다.", "이 글은 특정 주민의 인터뷰가 아니라 마을 운영에 필요한 일들을 소개하는 편집 기록입니다."] },
      { heading: "확인하고 연결하는 안내", paragraphs: ["현재 가능한 객실과 프로그램, 식사 구성은 운영진 확인 후 정해집니다. 홈페이지도 추측한 정보보다 확인 과정을 정직하게 안내하는 것을 우선합니다."] },
    ],
    relatedProgram: { title: "마을의 공간과 이야기를 더 알아보기", description: "자연환경과 마을이 이어온 방향을 소개합니다.", href: "/village", label: "마을 이야기 보기" }, sources: commonSources,
  },
  {
    slug: "emt-recovery-program", title: "코로나19 대응 구급대원에게 건넨 쉼",
    excerpt: "2020년 코로나19 대응 업무에 참여했던 119구급대원들이 열목어마을에서 심신 회복 프로그램에 참여한 기록입니다.",
    lead: "감염병 대응 현장을 지킨 구급대원에게 자연 속에서 호흡을 고르는 시간을 건넨 과거 운영 사례입니다.",
    category: "언론·기관", publishedAt: "2020-07-14", readingMinutes: 4,
    coverImage: "/images/village-main-hero.jpg", coverAlt: "홍천 열목어마을 건물과 잔디마당 전경",
    tags: ["119구급대원", "치유농업", "기관 프로그램"], factStatus: "verified",
    pullQuote: "과거의 운영 이력은 현재 일정을 약속하지 않지만, 마을이 어떤 쉼을 고민해 왔는지 보여줍니다.",
    sections: [
      { heading: "2020년의 운영 기록", paragraphs: ["2020년 정부 공개 자료에는 코로나19 대응 업무에 참여한 119구급대원을 위한 심신 회복 프로그램이 열목어마을에서 운영된 기록이 남아 있습니다.", "숲 트레킹과 물소리 명상, 냉족욕, 지역 식재료를 활용한 식사 같은 활동이 프로그램에 포함됐습니다."] },
      { heading: "기록을 현재와 구분합니다", paragraphs: ["이 글은 2020년 사례를 소개하며 같은 프로그램이 현재 상시 운영된다고 뜻하지 않습니다. 의료적 효과를 보장하지 않으며, 기관 프로그램은 대상과 일정에 맞춰 가능 여부를 다시 확인합니다."] },
    ],
    relatedProgram: { title: "기관 목적에 맞춘 일정 상담", description: "과거 사례를 바탕으로 현재 가능한 구성을 확인합니다.", href: "/group", label: "단체 프로그램 보기" }, sources: [{ label: "대한민국 정책브리핑 2020년 공개 자료", url: storySourceUrls.emergency }],
  },
  {
    slug: "eco-travel-promise", title: "맑은 물과 숲을 오래 지키기 위한 약속",
    excerpt: "열목어가 살아가는 청정한 자연을 존중하며 방문객과 함께 지켜야 할 여행 예절을 안내합니다.",
    lead: "아름다운 풍경을 만나는 일은 그 풍경에 흔적을 덜 남기는 태도와 함께합니다.",
    category: "마을 소식", publishedAt: "2026-09-10", readingMinutes: 3,
    coverImage: "/images/yeolmokeo-village-panorama-02.jpg", coverAlt: "산과 하천을 따라 집과 밭이 자리한 열목어마을 전경",
    tags: ["열목어", "생태", "여행 예절"], factStatus: "editorial",
    pullQuote: "보호종과 서식지를 대하는 가장 좋은 관찰은 거리를 지키는 일입니다.",
    sections: [
      { heading: "보호해야 할 생태 공간", paragraphs: ["공식 관광 자료는 마을 주변을 열목어 서식지와 맑은 계곡을 품은 곳으로 소개합니다. 하지만 방문객이 열목어를 직접 보고 만질 수 있다는 뜻은 아닙니다.", "물속 생물을 채집하거나 쫓지 않고, 지정된 길을 이용하며, 가져온 쓰레기는 되가져가 주세요."] },
      { heading: "안전도 여행 예절입니다", paragraphs: ["계곡은 비가 내린 뒤 수위가 빠르게 달라질 수 있습니다. 기상 상황과 현장 안내를 따르고, 미끄러운 바위나 출입이 제한된 구역에는 접근하지 마세요."] },
    ],
    relatedProgram: { title: "방문 전에 확인할 여행 정보", description: "교통, 준비물, 계절별 주의사항을 한곳에서 확인하세요.", href: "/guide", label: "여행 안내 보기" }, sources: commonSources,
  },
];

export const storySeasons = [
  { season: "봄", title: "산나물과 어린 숲", image: "/images/village-vision-3.jpg", alt: "초록 산나물과 봄 산촌 풍경", experience: "산나물과 새로 돋는 숲빛 관찰", tip: "큰 일교차에 대비할 겉옷과 편한 신발", href: "/stories/spring-gomchwi" },
  { season: "여름", title: "맑은 계곡과 짙은 녹음", image: "/images/valley-rest.png", alt: "짙은 여름 숲 사이의 맑은 계곡", experience: "숲길 걷기와 물소리에 귀 기울이는 쉼", tip: "우천 뒤 수위 확인과 미끄럼 방지 신발", href: "/stories/summer-valley-morning" },
  { season: "가을", title: "황금빛 은행나무숲의 가을", image: ginkgoImages.list.src, alt: ginkgoImages.list.alt, credit: ginkgoCredit, experience: "천천히 걷는 단풍길과 산촌 풍경", tip: "혼잡 시간과 주변 관광지 개방 여부 확인", href: "/travel/ginkgo-forest" },
  { season: "겨울", title: "고요한 산촌과 따뜻한 쉼", image: "/images/guide-winter.jpg", alt: "눈 덮인 강원 산촌의 겨울 풍경", experience: "따뜻한 실내 휴식과 고요한 풍경", tip: "도로 결빙과 난방·숙박 가능 여부 사전 확인", href: "/guide#seasons-title" },
] as const;

export const storyHistory = [
  { year: "2019–2022", title: "소방관 치유 프로그램", description: "심신 회복을 돕는 농촌치유 프로그램 운영 이력", href: storySourceUrls.fire },
  { year: "2020", title: "코로나19 대응 119구급대원", description: "숲 트레킹·명상·족욕 등을 엮은 심신 회복 프로그램", href: storySourceUrls.emergency },
  { year: "2024", title: "홍천소방서 시범 운영", description: "직원 20명이 몸살림·싱잉볼·에코염색과 상태 확인 활동에 참여", href: storySourceUrls.fire },
] as const;

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function formatStoryDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Seoul" }).format(new Date(`${date}T00:00:00+09:00`));
}


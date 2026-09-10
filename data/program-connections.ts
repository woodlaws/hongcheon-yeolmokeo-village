export const programSlugs = [
  "98-staywork",
  "burnout-retreat",
  "family-experience",
  "forest-healing",
  "healing-food",
] as const;

export type ProgramSlug = (typeof programSlugs)[number];

export interface ProgramActivityImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  generated?: boolean;
}

export interface ProgramStoryConnection {
  slug: string;
  label: string;
  reason: string;
}

export const programConnections: Record<ProgramSlug, {
  listImage: string;
  listAlt: string;
  activities: ProgramActivityImage[];
  stories: ProgramStoryConnection[];
}> = {
  "98-staywork": {
    listImage: "/images/group/rural-workation.webp",
    listAlt: "초록 산촌이 보이는 창가에서 노트북으로 일하는 한국인 워케이션 참가자들",
    activities: [
      { src: "/images/group/rural-workation.webp", alt: "초록 산촌이 보이는 창가에서 노트북으로 일하는 한국인 워케이션 참가자들", title: "자연 가까이에서 집중하는 업무", description: "업무 시간과 휴식 시간을 분리해, 필요한 일에 집중한 뒤 자연의 리듬으로 전환합니다.", generated: true },
      { src: "/images/group/element-nature.webp", alt: "계곡 옆 초록 숲길을 천천히 걷는 한국인 성인 두 명", title: "숲 산책", description: "숲의 공기와 물소리를 느끼며 천천히 걷고 일상의 긴장을 내려놓습니다.", generated: true },
      { src: "/images/group/element-mind.webp", alt: "허브와 찻잔을 두고 아로마 차를 블렌딩하는 손", title: "아로마 티블렌딩", description: "향과 재료를 살펴보며 자신에게 맞는 차를 구성하는 감각 활동입니다.", generated: true },
      { src: "/images/group/element-body.webp", alt: "산촌의 나무 데크에서 약초를 띄운 나무 족욕통에 발을 담근 참가자들", title: "약초 족욕", description: "따뜻한 물에 발을 담그고 업무 뒤 쌓인 피로를 편안하게 풀어봅니다.", generated: true },
    ],
    stories: [{ slug: "workcation-three-days", label: "워케이션 구성 이야기", reason: "업무·숙박·치유 활동을 한 일정에 엮은 체류 흐름을 살펴봅니다." }],
  },
  "burnout-retreat": {
    listImage: "/images/quiet-time-3.png",
    listAlt: "소나무 숲의 해먹에서 휴대기기 없이 고요히 쉬는 사람",
    activities: [
      { src: "/images/quiet-time-3.png", alt: "소나무 숲의 해먹에서 휴대기기 없이 고요히 쉬는 사람", title: "디지털 기기에서 잠시 떨어지기", description: "연락과 업무의 속도를 내려놓고 아무것도 하지 않는 시간을 확보합니다." },
      { src: "/images/singing-bowl.png", alt: "열목어마을 야외 공간에서 싱잉볼을 들고 소리 명상을 안내하는 진행자", title: "싱잉볼과 호흡", description: "울림에 귀 기울이며 호흡과 지금의 감각을 천천히 알아차립니다." },
      { src: "/images/group/element-body.webp", alt: "자연 가까운 나무 데크에서 약초 족욕으로 쉬는 한국인 성인들", title: "따뜻한 약초 족욕", description: "편안한 자세로 발을 데우며 몸의 긴장을 낮추는 휴식 활동입니다.", generated: true },
    ],
    stories: [
      { slug: "singing-bowl-time", label: "프로그램 이야기", reason: "싱잉볼의 울림과 호흡에 집중하는 휴식 활동을 소개합니다." },
      { slug: "firefighter-healing-day", label: "과거 기관 운영 기록", reason: "싱잉볼 등 회복 활동을 포함했던 2024년 기관 프로그램 기록입니다." },
    ],
  },
  "family-experience": {
    listImage: "/images/farm-experience.png",
    listAlt: "밭에서 초록 농작물을 살펴보는 한국인 가족의 농촌 체험",
    activities: [
      { src: "/images/farm-experience.png", alt: "밭에서 초록 농작물을 살펴보는 한국인 가족의 농촌 체험", title: "계절 농작물 만나기", description: "안내에 따라 제철 작물을 가까이에서 보고 만지며 산촌의 계절을 배웁니다." },
      { src: "/images/group/school-education.webp", alt: "숲에서 인솔자와 함께 잎의 모양을 관찰하는 한국인 학생들", title: "나뭇잎과 숲 관찰", description: "식물을 함부로 채취하지 않고 모양과 촉감을 관찰하며 자연을 대하는 방법을 익힙니다.", generated: true },
      { src: "/images/programs/family-seasonal-snack.webp", alt: "한국인 부모와 아이가 산촌 체험 공간에서 제철 재료로 간식을 만드는 모습", title: "가족이 함께 만드는 간식", description: "제철 재료를 손질하고 함께 완성하는 과정에서 자연스럽게 대화와 협력을 경험합니다.", generated: true },
    ],
    stories: [
      { slug: "spring-gomchwi", label: "계절 이야기", reason: "곰취와 봄 산나물로 만나는 산촌의 계절을 소개합니다." },
      { slug: "eco-dyeing", label: "연관 체험 소개", reason: "가족이 함께 살펴볼 수 있는 자연 재료 체험의 한 사례입니다." },
    ],
  },
  "forest-healing": {
    listImage: "/images/group/element-nature.webp",
    listAlt: "계곡을 따라 이어지는 초록 숲길을 걷는 한국인 성인 두 명",
    activities: [
      { src: "/images/group/element-nature.webp", alt: "계곡을 따라 이어지는 초록 숲길을 걷는 한국인 성인 두 명", title: "숲길을 천천히 걷기", description: "경쟁하듯 걷기보다 호흡과 발걸음을 살피며 자연의 속도에 맞춥니다.", generated: true },
      { src: "/images/valley-rest.png", alt: "안전한 얕은 계곡 물가에서 손으로 차가운 물을 느끼는 사람", title: "안전한 물가에서 쉬기", description: "날씨와 수위를 확인하고 현장 안내에 따라 물소리와 차가운 감각을 경험합니다." },
      { src: "/images/group/school-education.webp", alt: "숲의 식물과 잎을 가까이 관찰하는 한국인 참가자들", title: "자연을 관찰하는 시간", description: "서식 환경을 훼손하지 않는 거리에서 잎과 숲의 변화를 세심하게 살펴봅니다.", generated: true },
    ],
    stories: [
      { slug: "summer-valley-morning", label: "계절 이야기", reason: "계곡과 숲길에서 맞는 여름 아침의 풍경과 안전 수칙을 담았습니다." },
      { slug: "emt-recovery-program", label: "과거 기관 운영 기록", reason: "숲 트레킹과 물소리 명상 등이 포함됐던 2020년 운영 기록입니다." },
      { slug: "eco-travel-promise", label: "생태 여행 안내", reason: "맑은 물과 숲을 존중하며 방문하는 방법을 안내합니다." },
    ],
  },
  "healing-food": {
    listImage: "/images/group/element-life.webp",
    listAlt: "제철 산나물과 지역 채소로 차린 소박한 한식 밥상",
    activities: [
      { src: "/images/programs/seasonal-ingredients-prep.webp", alt: "나무 작업대에서 제철 산나물과 채소를 손질하는 손", title: "제철 식재료 손질", description: "계절에 따라 달라지는 산나물과 채소를 살피고 정성스럽게 손질합니다.", generated: true },
      { src: "/images/group/element-life.webp", alt: "제철 산나물과 지역 채소 반찬, 밥과 국으로 차린 소박한 한식 상차림", title: "산촌의 소박한 한 끼", description: "지역 식재료의 맛을 살린 밥상으로 머무는 시간을 따뜻하게 채웁니다.", generated: true },
      { src: "/images/healing-table.jpg", alt: "채소와 산나물 반찬, 밥과 국이 놓인 열목어마을 치유밥상", title: "확인된 치유밥상 사진", description: "실제 식사 사진을 통해 밥상의 구성과 분위기를 살펴볼 수 있습니다." },
    ],
    stories: [{ slug: "spring-gomchwi", label: "계절 식재료 이야기", reason: "곰취와 봄 산나물이 마을 밥상에 전하는 계절감을 소개합니다." }],
  },
};

export const storyProgramSlugs = programSlugs.reduce<Record<string, ProgramSlug[]>>((result, programSlug) => {
  for (const story of programConnections[programSlug].stories) {
    result[story.slug] = [...(result[story.slug] ?? []), programSlug];
  }
  return result;
}, {});

export function isProgramSlug(value: string): value is ProgramSlug {
  return programSlugs.includes(value as ProgramSlug);
}

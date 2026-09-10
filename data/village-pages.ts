export const villageNavigation = [
  { label: "인사말", href: "/village/greeting", description: "쉬러 오는 분께 전하는 환영" },
  { label: "마을 비전", href: "/village/vision", description: "자연과 사람을 잇는 네 가지 가치" },
  { label: "열목어 이야기", href: "/village/yeolmokeo", description: "차가운 물에 사는 생명의 이야기" },
  { label: "시설 안내", href: "/village/facilities", description: "머무르고 함께하는 공간 안내" },
  { label: "찾아오시는 길", href: "/village/location", description: "주소·지도·방문 전 확인" },
] as const;

export const villageOfficial = {
  address: "강원특별자치도 홍천군 내면 명개로 98",
  phoneDisplay: "010-7431-9600",
  phoneHref: "tel:01074319600",
  naverMap: "https://map.naver.com/p/search/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%EB%82%B4%EB%A9%B4%20%EB%AA%85%EA%B0%9C%EB%A1%9C%2098",
  googleEmbed: "https://maps.google.com/maps?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%EB%82%B4%EB%A9%B4%20%EB%AA%85%EA%B0%9C%EB%A1%9C%2098&z=15&output=embed",
} as const;

export const villageSources = {
  village: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?key=2035&tourNo=1991",
  agriculture: "https://www.hongcheon.go.kr/agri/contents.do?key=1062",
  habitat: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=28&key=1948&pageIndex=2&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=2152",
  nieSpecies: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200133&speciesSn=114",
  nieProfile: "https://www.nie.re.kr/nie/bbs/BMSR00085/view.do?boardId=695966984&menuNo=200347",
  nibr: "https://www.nibr.go.kr/aiibook/access/ecatalogt.jsp?Dir=21&callmode=admin&catimage=&eclang=ko&start=104&um=s",
} as const;

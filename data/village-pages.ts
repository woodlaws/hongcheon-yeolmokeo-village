export const villageNavigation = [
  { label: "인사말", href: "/village/greeting", description: "쉬러 오는 분께 전하는 환영" },
  { label: "마을 비전", href: "/village/vision", description: "자연과 사람을 잇는 네 가지 가치" },
  { label: "열목어 이야기", href: "/village/yeolmokeo", description: "차가운 물에 사는 생명의 이야기" },
  { label: "시설 안내", href: "/village/facilities", description: "머무르고 함께하는 공간 안내" },
  { label: "찾아오시는 길", href: "/village/location", description: "주소·지도·방문 전 확인" },
] as const;

export const villageOfficial = {
  address: siteConfig.address,
  phoneDisplay: siteConfig.contact.phoneDisplay,
  phoneHref: siteConfig.contact.phoneHref,
  naverMap: siteConfig.mapUrl,
  googleEmbed: siteConfig.googleMapEmbedUrl,
} as const;

export const villageSources = {
  village: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?key=2035&tourNo=1991",
  agriculture: "https://www.hongcheon.go.kr/agri/contents.do?key=1062",
  habitat: "https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=28&key=1948&pageIndex=2&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=2152",
  nieSpecies: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200133&speciesSn=114",
  nieProfile: "https://www.nie.re.kr/nie/bbs/BMSR00085/view.do?boardId=695966984&menuNo=200347",
  nibr: "https://www.nibr.go.kr/aiibook/access/ecatalogt.jsp?Dir=21&callmode=admin&catimage=&eclang=ko&start=104&um=s",
} as const;
import { siteConfig } from "@/data/site";

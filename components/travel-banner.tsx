import { ArrowRight, MapPinned } from "lucide-react";
import Link from "@/components/static-link";

export function TravelBanner() {
  return <aside className="travel-banner" aria-label="주변 여행 안내"><div><MapPinned aria-hidden="true" /><span><b>하루로는 아쉬운 열목어마을</b>주변 여행코스도 확인해 보세요.</span></div><Link href="/travel">주변 여행 보기 <ArrowRight size={17} aria-hidden="true" /></Link></aside>;
}

import { ArrowRight, MapPinned } from "lucide-react";
import Link from "@/components/static-link";

export function TravelBanner({ includeStay = true }: { includeStay?: boolean }) {
  return <aside className="travel-banner" aria-label="숙박과 주변 여행 안내"><div><MapPinned aria-hidden="true" /><span><b>하루로는 아쉬운 열목어마을</b>숙박과 주변 여행코스를 함께 확인해 보세요.</span></div>{includeStay ? <Link href="/stay">숙박 안내 보기 <ArrowRight size={17} aria-hidden="true" /></Link> : null}<Link href="/travel">주변 여행 보기 <ArrowRight size={17} aria-hidden="true" /></Link></aside>;
}

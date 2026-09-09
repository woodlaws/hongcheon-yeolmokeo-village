import Link from "@/components/static-link";
import { Phone, MessageCircle } from "lucide-react";

export function MobileCta() {
  return <div className="mobile-cta"><button type="button" disabled title="전화번호 확인 중"><Phone size={18} /> 전화 문의 <small>번호 확인 중</small></button><Link href="/contact"><MessageCircle size={18} /> 예약 상담</Link></div>;
}

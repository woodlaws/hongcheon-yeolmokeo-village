"use client";

import { ConsultationLink, NaverBookingLink, PhoneReservationLink } from "@/components/booking-links";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileCta() {
  const pathname = usePathname();

  if (pathname === "/stay") {
    return <div className="mobile-cta">
      <PhoneReservationLink position="mobile-stay" analyticsLabel="전화 문의"><Phone size={18} /> 전화 문의</PhoneReservationLink>
      <NaverBookingLink position="mobile-stay" analyticsLabel="네이버 예약"><CalendarCheck size={18} /> 네이버 예약</NaverBookingLink>
    </div>;
  }

  if (pathname === "/group") {
    return <div className="mobile-cta">
      <PhoneReservationLink position="mobile-group" analyticsLabel="전화 상담"><Phone size={18} /> 전화 상담</PhoneReservationLink>
      <ConsultationLink href="/contact?type=group" type="group" position="mobile-group" analyticsLabel="단체 상담 신청"><MessageCircle size={18} /> 단체 상담 신청</ConsultationLink>
    </div>;
  }

  if (pathname.startsWith("/programs")) {
    const slug = pathname.split("/")[2];
    const consultationHref = slug ? `/contact?type=program&program=${encodeURIComponent(slug)}` : "/contact?type=program";
    return <div className="mobile-cta">
      <ConsultationLink href={consultationHref} type="program" position="mobile-programs" analyticsLabel="프로그램 상담"><MessageCircle size={18} /> 프로그램 상담</ConsultationLink>
      <NaverBookingLink position="mobile-programs" analyticsLabel="네이버 예약"><CalendarCheck size={18} /> 네이버 예약</NaverBookingLink>
    </div>;
  }

  return null;
}

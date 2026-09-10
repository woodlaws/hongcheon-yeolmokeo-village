import { CalendarDays } from "lucide-react";
import { NaverBookingLink } from "@/components/booking-links";

export function VisitPlanner() {
  return (
    <section className="visit-planner container" aria-label="네이버 예약 안내">
      <CalendarDays size={30} aria-hidden="true" />
      <div><strong>날짜와 객실은 네이버 예약에서 확인할 수 있습니다</strong><span>실시간 예약 가능 일정, 객실 요금 및 결제 정보를 확인해 주세요.</span></div>
      <NaverBookingLink className="planner-submit" position="home-planner">네이버에서 예약 가능 여부 확인</NaverBookingLink>
    </section>
  );
}

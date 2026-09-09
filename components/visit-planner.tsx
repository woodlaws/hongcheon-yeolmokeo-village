"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, Search, Users } from "lucide-react";
import { FormEvent, useState } from "react";

export function VisitPlanner() {
  const router = useRouter();
  const [visitType, setVisitType] = useState("personal");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/contact?${new URLSearchParams({ visitType, date, guests }).toString()}`);
  }
  return (
    <form className="visit-planner container" onSubmit={submit} aria-label="방문 조건 선택">
      <label><span>방문 유형</span><select value={visitType} onChange={(event) => setVisitType(event.target.value)}><option value="personal">개인 휴식</option><option value="family">가족 체험</option><option value="company">기업·기관 워크숍</option><option value="school">학교·단체 체험</option></select></label>
      <label><span><CalendarDays size={18} /> 희망 날짜</span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
      <label><span><Users size={18} /> 인원</span><input type="number" min="1" max="200" value={guests} onChange={(event) => setGuests(event.target.value)} /></label>
      <button className="planner-submit" type="submit"><Search size={21} /> 예약 가능 여부 확인</button>
    </form>
  );
}

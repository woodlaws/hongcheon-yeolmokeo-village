"use client";

import { ConsultationLink, NaverBookingLink } from "@/components/booking-links";
import { siteConfig } from "@/data/site";
import { AlertCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

const typeMap: Record<string, string> = {
  trip: "여행 일정 상담", program: "프로그램 문의", workation: "워케이션 문의",
  group: "단체 견적 문의", story: "방문 이야기 보내기", market: "상품 구매 문의",
};

const fieldLabels: Record<string, string> = {
  type: "문의 유형", name: "이름", phone: "연락처", email: "이메일",
  date: "방문 희망일", guests: "방문 인원", program: "관심 프로그램", message: "문의 내용",
};

function openEmailComposer(event: FormEvent<HTMLFormElement>, subject: string) {
  event.preventDefault();
  const entries = Array.from(new FormData(event.currentTarget).entries())
    .filter(([, value]) => typeof value === "string" && value.trim())
    .map(([key, value]) => `${fieldLabels[key] ?? key}: ${String(value).trim()}`);
  const separator = siteConfig.contact.emailHref.includes("?") ? "&" : "?";
  window.location.href = `${siteConfig.contact.emailHref}${separator}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(entries.join("\n"))}`;
}
const programMap: Record<string, string> = {
  "burnout-retreat": "직장인 번아웃 쉼", "family-experience": "가족 농촌 체험",
  "forest-healing": "숲과 계곡 치유", "healing-food": "제철 치유밥상",
  "corporate-refresh": "기업 리프레시 워크숍", "public-training": "공공기관 연수",
  "firefighter-recovery": "소방·안전 종사자 회복 프로그램", "welfare-health": "복지·보건기관 프로그램",
  "school-education": "학교·교육기관 농촌체험", "rural-workation": "농촌형 워케이션",
};

export function ContactForm() {
  const params = useSearchParams();
  return params.get("type") === "stay" ? <StayConsultationForm /> : <GeneralContactForm />;
}

function ContactAside() {
  return <aside className="contact-aside"><h3>문의 및 예약 안내</h3>
    <div><MapPin /><span><b>주소</b>{siteConfig.address}</span></div>
    <div><Phone /><span><b>예약문의</b><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phoneDisplay}</a></span></div>
    <div><Mail /><span><b>이메일</b><a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a></span></div>
    <p className="notice">일반 객실 예약은 네이버 예약을 이용해 주세요. 단체 방문과 숙박·식사·프로그램 결합 일정은 별도 상담이 필요합니다.</p>
  </aside>;
}

function StayConsultationForm() {
  const params = useSearchParams();
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    openEmailComposer(event, "[열목어마을] 숙박 맞춤 상담");
    setNotice(`이메일 작성 화면을 열었습니다. 열리지 않으면 ${siteConfig.contact.email}로 보내거나 ${siteConfig.contact.phoneDisplay}로 전화해 주세요.`);
  }
  return <div className="stay-consultation">
    <header className="stay-consultation-intro"><p className="section-kicker">CUSTOM STAY</p><h2>필요한 일정을 함께 구성해 드립니다</h2><p>객실만 예약하실 경우 네이버 예약을 이용해 주세요. 숙박과 치유 프로그램, 식사, 단체 일정을 함께 구성하려면 상담 내용을 남겨주세요.</p><div>
      <NaverBookingLink className="button button-primary" position="stay-contact-top">네이버에서 객실 예약</NaverBookingLink>
      <ConsultationLink className="button button-outline" position="stay-contact-top" href="#stay-consultation-form" type="stay">맞춤 상담 신청</ConsultationLink>
    </div><small>예약 가능 일정, 객실 요금 및 결제는 네이버 예약에서 확인할 수 있습니다.</small></header>
    <div className="contact-layout"><ContactAside /><form className="contact-form" id="stay-consultation-form" onSubmit={submit}>
      <label><span>상담 유형 *</span><select name="type" required defaultValue={params.get("stayMode") === "workation" ? "워케이션" : "숙박·프로그램 결합"}><option>단체 숙박</option><option>기업·기관 방문</option><option>숙박·프로그램 결합</option><option>식사 포함 일정</option><option>워케이션</option><option>맞춤 견적</option><option>기타 특별 요청</option></select></label>
      <label><span>이름 *</span><input name="name" required autoComplete="name" /></label>
      <label><span>연락처 *</span><input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" /></label>
      <label><span>이메일</span><input name="email" type="email" inputMode="email" autoComplete="email" /></label>
      <label><span>방문 희망일</span><input name="date" type="date" defaultValue={params.get("date") ?? ""} /></label>
      <label><span>방문 인원</span><input name="guests" type="number" inputMode="numeric" min="1" max="200" defaultValue={params.get("guests") ?? "2"} /></label>
      <label className="full"><span>상담 내용 *</span><textarea name="message" rows={6} required placeholder="숙박, 식사, 프로그램, 단체 일정 중 필요한 내용을 알려주세요." /></label>
      <label className="agree full"><input type="checkbox" required /><span>개인정보 수집·이용 안내를 확인했으며 상담을 위한 정보 제공에 동의합니다. *</span></label>
      <div className="form-footer full"><button type="submit" className="button button-primary"><Send size={18} /> 이메일로 상담 보내기</button><p>일반 객실 예약은 네이버 예약에서 바로 진행할 수 있습니다.</p></div>
      {notice && <div className="form-notice full" role="status"><AlertCircle /><p>{notice}</p></div>}
    </form></div>
  </div>;
}

function GeneralContactForm() {
  const params = useSearchParams();
  const initialType = useMemo(() => typeMap[params.get("type") ?? ""] ?? (params.get("program") ? "프로그램 문의" : "여행 일정 상담"), [params]);
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    openEmailComposer(event, `[열목어마을] ${initialType}`);
    setNotice(`이메일 작성 화면을 열었습니다. 열리지 않으면 ${siteConfig.contact.email}로 보내거나 ${siteConfig.contact.phoneDisplay}로 전화해 주세요.`);
  }
  return <div className="contact-layout"><ContactAside /><form className="contact-form" onSubmit={submit}>
    <label><span>문의 유형 *</span><select name="type" defaultValue={initialType} required><option>여행 일정 상담</option><option>프로그램 문의</option><option>워케이션 문의</option><option>단체 견적 문의</option><option>방문 이야기 보내기</option><option>상품 구매 문의</option><option>기타 문의</option></select></label>
    <label><span>이름 *</span><input name="name" required autoComplete="name" /></label><label><span>연락처 *</span><input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" /></label><label><span>이메일</span><input name="email" type="email" inputMode="email" autoComplete="email" /></label>
    <label><span>방문 희망일</span><input name="date" type="date" defaultValue={params.get("date") ?? ""} /></label><label><span>방문 인원</span><input name="guests" type="number" inputMode="numeric" min="1" max="200" defaultValue={params.get("guests") ?? "2"} /></label>
    <label><span>관심 프로그램</span><select name="program" defaultValue={params.get("program") ?? ""}><option value="">아직 정하지 못했어요</option>{Object.entries(programMap).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
    <label className="full"><span>문의 내용 *</span><textarea name="message" rows={6} required placeholder="방문 목적과 필요한 프로그램을 알려주세요." /></label><label className="agree full"><input type="checkbox" required /><span>개인정보 수집·이용 안내를 확인했으며 상담을 위한 정보 제공에 동의합니다. *</span></label>
    <div className="form-footer full"><button type="submit" className="button button-primary"><Send size={18} /> 이메일로 문의 보내기</button><p>일반 객실 예약은 네이버 예약을 이용해 주세요.</p></div>{notice && <div className="form-notice full" role="status"><AlertCircle /><p>{notice}</p></div>}
  </form></div>;
}

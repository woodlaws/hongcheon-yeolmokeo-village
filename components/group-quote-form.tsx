"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, Send } from "lucide-react";
import { groupAudiences } from "@/data/group";
import { siteConfig } from "@/data/site";

export function GroupQuoteForm() {
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const labels: Record<string, string> = {
      organization: "기관·회사명", manager: "담당자명", phone: "연락처", email: "이메일",
      organizationType: "기관 유형", purpose: "방문 목적", preferredDate: "희망 날짜",
      alternativeDate: "대체 가능 날짜", guests: "예상 인원", duration: "희망 일정",
      stay: "숙박", meals: "식사", meetingSpace: "회의공간", program: "관심 프로그램",
      budget: "예상 예산", request: "요청사항",
    };
    const body = Array.from(new FormData(event.currentTarget).entries())
      .filter(([, value]) => typeof value === "string" && value.trim())
      .map(([key, value]) => `${labels[key] ?? key}: ${String(value).trim()}`)
      .join("\n");
    window.location.href = `${siteConfig.contact.emailHref}?subject=${encodeURIComponent("[열목어마을] 단체 견적 문의")}&body=${encodeURIComponent(body)}`;
    setNotice(`이메일 작성 화면을 열었습니다. 열리지 않으면 ${siteConfig.contact.email}로 보내거나 ${siteConfig.contact.phoneDisplay}로 전화해 주세요.`);
  }
  return <form className="group-quote-form" onSubmit={submit}>
    <fieldset><legend>기관과 담당자</legend><div>
      <label><span>기관·회사명 *</span><input name="organization" required /></label>
      <label><span>담당자명 *</span><input name="manager" required autoComplete="name" /></label>
      <label><span>연락처 *</span><input name="phone" required inputMode="tel" autoComplete="tel" /></label>
      <label><span>이메일 *</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span>기관 유형 *</span><select name="organizationType" required defaultValue=""><option value="" disabled>선택해 주세요</option>{["기업", "공공기관", "학교·교육기관", "소방·안전기관", "복지·보건기관", "협회·모임", "기타"].map(item => <option key={item}>{item}</option>)}</select></label>
      <label><span>방문 목적 *</span><select name="purpose" required defaultValue=""><option value="" disabled>선택해 주세요</option>{["직원 재충전", "팀워크와 소통", "워케이션", "교육·연수", "농촌·생태 체험", "치유 프로그램", "기타"].map(item => <option key={item}>{item}</option>)}</select></label>
    </div></fieldset>
    <fieldset><legend>일정과 규모</legend><div>
      <label><span>희망 날짜 *</span><input name="preferredDate" type="date" required /></label>
      <label><span>대체 가능 날짜</span><input name="alternativeDate" type="date" /></label>
      <label><span>예상 인원 *</span><input name="guests" type="number" min="1" required placeholder="운영 가능 인원은 상담 후 확인" /></label>
      <label><span>희망 일정 *</span><select name="duration" required><option>당일</option><option>1박 2일</option><option>2박 3일</option></select></label>
    </div></fieldset>
    <fieldset><legend>필요한 구성</legend><div>
      <label><span>숙박 필요 여부 *</span><select name="stay" required><option>필요</option><option>불필요</option><option>상담 후 결정</option></select></label>
      <label><span>식사 필요 여부 *</span><select name="meals" required><option>필요</option><option>불필요</option><option>상담 후 결정</option></select></label>
      <label><span>회의공간 필요 여부 *</span><select name="meetingSpace" required><option>필요</option><option>불필요</option><option>상담 후 결정</option></select></label>
      <label><span>관심 프로그램</span><select name="program" defaultValue=""><option value="">아직 정하지 못했어요</option>{groupAudiences.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      <label className="full"><span>예상 예산</span><input name="budget" placeholder="총예산 또는 1인당 예산 · 협의가 필요하면 함께 적어주세요" /></label>
      <label className="full"><span>요청사항 *</span><textarea name="request" rows={6} required placeholder="참가자 특성, 필요한 프로그램·식사·공간, 안전 고려사항을 알려주세요." /></label>
    </div></fieldset>
    <label className="group-agree"><input type="checkbox" required /><span>개인정보 수집·이용 안내를 확인했으며 견적 상담을 위한 정보 제공에 동의합니다. *</span></label>
    <div className="group-form-footer"><button className="button button-primary" type="submit"><Send size={18} /> 이메일로 견적 문의</button><p>제출하면 공식 이메일 작성 화면이 열립니다.</p></div>
    {notice && <div className="group-form-notice" role="status"><AlertCircle /><p>{notice}</p></div>}
  </form>;
}

"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, Send } from "lucide-react";

const typeMap: Record<string,string> = { stay:"숙박 문의", "stay-only":"숙박 문의", "stay-package":"숙박 패키지 문의", workation:"워케이션 문의", group:"단체 견적 문의", "group-stay":"단체 숙박 견적 문의" };
const programMap: Record<string,string> = { "burnout-retreat":"직장인 번아웃 쉼", "family-experience":"가족 농촌 체험", "forest-healing":"숲과 계곡 치유", "healing-food":"제철 치유밥상", "corporate-refresh":"기업 리프레시 워크숍", "public-training":"공공기관 연수", "firefighter-recovery":"소방·안전 종사자 회복 프로그램", "welfare-health":"복지·보건기관 프로그램", "school-education":"학교·교육기관 농촌체험", "rural-workation":"농촌형 워케이션" };
const roomMap: Record<string,string> = { bogumjari:"보금자리", "bieum-center":"비움센터", hanok:"한옥 숙소", workation:"워케이션 객실(구성 확인 필요)" };
const stayModeMap: Record<string,string> = { "stay-only":"숙소만 이용", "stay-package":"숙박＋치유 프로그램", "healing-trip":"1박 2일 치유여행", workation:"2박 3일 워케이션", "group-stay":"기업·기관 단체 숙박" };

export function ContactForm(){
  const params=useSearchParams();
  const initialType=useMemo(()=>typeMap[params.get("type")??""] ?? (params.get("program") ? "프로그램 문의" : "숙박 문의"),[params]);
  const [notice,setNotice]=useState("");
  function submit(event:FormEvent<HTMLFormElement>){ event.preventDefault(); setNotice("현재 온라인 접수 연결 전입니다. 입력 내용은 전송되지 않았습니다. 운영자 이메일 또는 외부 신청 폼이 연결되면 이 자리에서 접수할 수 있습니다."); }
  return <form className="contact-form" onSubmit={submit}>
    <label><span>문의 유형 *</span><select name="type" defaultValue={initialType} required><option>숙박 문의</option><option>숙박 패키지 문의</option><option>워케이션 문의</option><option>프로그램 문의</option><option>단체 견적 문의</option><option>단체 숙박 견적 문의</option><option>상품 구매 문의</option><option>기타 문의</option></select></label>
    <label><span>관심 숙소</span><select name="room" defaultValue={params.get("room")??""}><option value="">아직 정하지 못했어요</option>{Object.entries(roomMap).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
    <label><span>체류 방식</span><select name="stayMode" defaultValue={params.get("stayMode")??""}><option value="">상담 후 정할게요</option>{Object.entries(stayModeMap).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
    <label><span>이름 *</span><input name="name" required autoComplete="name" /></label>
    <label><span>연락처 *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="연락 가능한 번호" /></label>
    <label><span>이메일</span><input name="email" type="email" autoComplete="email" /></label>
    <label><span>방문 희망일</span><input name="date" type="date" defaultValue={params.get("date")??""}/></label>
    <label><span>방문 인원</span><input name="guests" type="number" min="1" max="200" defaultValue={params.get("guests")??"2"}/></label>
    <label><span>방문 구분 *</span><select name="audience" defaultValue={params.get("visitType")??"personal"} required><option value="personal">개인</option><option value="family">가족</option><option value="company">기업</option><option value="institution">기관</option><option value="school">학교</option></select></label>
    <label><span>관심 프로그램</span><select name="program" defaultValue={params.get("program")??""}><option value="">아직 정하지 못했어요</option>{Object.entries(programMap).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
    <label className="full"><span>문의 내용 *</span><textarea name="message" rows={6} required placeholder="방문 목적, 연령대, 필요한 숙박·식사·프로그램을 알려주세요." /></label>
    <label className="agree full"><input type="checkbox" required/><span>개인정보 수집·이용 안내를 확인했으며 상담을 위한 정보 제공에 동의합니다. *</span></label>
    <div className="form-footer full"><button type="submit" className="button button-primary"><Send size={18}/> 문의 내용 확인</button><p>현재는 개발용 화면이며 실제 정보가 전송되지 않습니다.</p></div>
    {notice&&<div className="form-notice full" role="status"><AlertCircle/><p>{notice}</p></div>}
  </form>;
}

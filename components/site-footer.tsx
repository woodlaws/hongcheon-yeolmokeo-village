import Link from "@/components/static-link";
import { NaverBookingLink } from "@/components/booking-links";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="container footer-grid">
      <div><strong className="footer-brand">홍천 열목어마을</strong><p>{siteConfig.tagline}</p><p>{siteConfig.address}</p><a href={siteConfig.contact.phoneHref}>예약문의: {siteConfig.contact.phoneDisplay}</a><a href={siteConfig.contact.emailHref}>문의: {siteConfig.contact.email}</a></div>
      <div><h2>둘러보기</h2><Link href="/village">마을 이야기</Link><Link href="/programs">치유 프로그램</Link><Link href="/stay">숙소</Link><Link href="/group">단체·워크숍</Link></div>
      <div><h2>방문 안내</h2><Link href="/guide">여행 안내</Link><Link href="/market">마을장터</Link><Link href="/stories">소식·후기</Link><Link href="/contact">맞춤 상담</Link><NaverBookingLink position="footer">네이버 예약</NaverBookingLink></div>
      <div><h2>정보</h2><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link><a href={siteConfig.mapUrl} target="_blank" rel="noreferrer">오시는 길</a><span>SNS 준비 중</span></div>
    </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} 홍천 열목어마을</span><span>예약 가능 일정·객실 요금·결제는 네이버 예약에서 확인해 주세요.</span></div></footer>
  );
}

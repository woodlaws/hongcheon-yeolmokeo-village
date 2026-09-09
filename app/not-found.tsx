import Link from "@/components/static-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound(){return <><SiteHeader/><main className="not-found container"><p className="section-kicker">404</p><h1>찾으시는 페이지가 없습니다</h1><p>주소가 바뀌었거나 준비 중인 페이지입니다.</p><Link href="/" className="button button-primary">홈으로 돌아가기</Link></main><SiteFooter/></>}

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://hongcheon-yeolmokeo.vercel.app"),
  title: { default: "홍천 열목어마을 | 자연이 주는 쉼", template: "%s | 홍천 열목어마을" },
  description: "홍천의 1급수 계곡과 숲, 치유농업 프로그램, 숙박과 제철 밥상을 함께 만나는 열목어마을입니다.",
  alternates: { canonical: "/" },
  openGraph: { title: "홍천 열목어마을", description: "자연이 주는 쉼, 다시 살아가는 힘", type: "website", locale: "ko_KR", siteName: "홍천 열목어마을" },
  twitter: { card: "summary", title: "홍천 열목어마을", description: "자연이 주는 쉼, 다시 살아가는 힘" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const verifiedAddress = siteConfig.addressVerified && siteConfig.structuredAddress ? { address: { "@type": "PostalAddress", addressCountry: "KR", addressRegion: "강원특별자치도", addressLocality: "홍천군", streetAddress: siteConfig.structuredAddress } } : {};
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["Organization", "LocalBusiness"], "@id": "https://hongcheon-yeolmokeo.vercel.app/#organization", name: "홍천 열목어마을", url: "https://hongcheon-yeolmokeo.vercel.app", description: "홍천의 자연, 숙박, 치유농업 프로그램과 제철 밥상을 연결하는 산촌 마을", ...verifiedAddress },
      { "@type": "LodgingBusiness", "@id": "https://hongcheon-yeolmokeo.vercel.app/#lodging", name: "홍천 열목어마을 숙소", parentOrganization: { "@id": "https://hongcheon-yeolmokeo.vercel.app/#organization" }, ...verifiedAddress },
      { "@type": "TouristAttraction", "@id": "https://hongcheon-yeolmokeo.vercel.app/#attraction", name: "홍천 열목어마을", description: "열목어 서식지와 백두대간 숲을 품은 농촌 치유여행지", ...verifiedAddress }
    ]
  };
  return <html lang="ko"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}

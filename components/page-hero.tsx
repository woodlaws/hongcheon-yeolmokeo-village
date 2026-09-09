import Image from "next/image";

export function PageHero({ eyebrow, title, description, image = "/images/forest-3.jpg" }: { eyebrow: string; title: string; description: string; image?: string }) {
  return <section className="page-hero"><Image src={image} fill sizes="100vw" alt="홍천 열목어마을 자연 풍경" className="page-hero-image" /><div className="page-hero-shade"/><div className="container page-hero-content"><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></div></section>;
}

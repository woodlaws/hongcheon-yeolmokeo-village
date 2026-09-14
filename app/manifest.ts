import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "홍천 열목어마을",
    short_name: "열목어마을",
    description: "홍천의 자연, 숙박과 치유 프로그램을 만나는 열목어마을",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b6838",
    icons: [
      {
        src: "/icon-192.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png?v=2",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

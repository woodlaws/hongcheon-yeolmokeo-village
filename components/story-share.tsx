"use client";

import { Check, Link as LinkIcon, Share2 } from "lucide-react";
import { useState } from "react";

export function StoryShare({ title }: { title: string }) {
  const [notice, setNotice] = useState("");
  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `${title} | 홍천 열목어마을`, url });
        setNotice("공유 창을 열었습니다.");
      } else {
        await navigator.clipboard.writeText(url);
        setNotice("이야기 링크를 복사했습니다.");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") setNotice("공유하지 못했습니다. 주소창의 링크를 복사해 주세요.");
    }
  }
  return <div className="story-share"><button type="button" onClick={share}><Share2 size={18} aria-hidden="true" /> 이야기 공유</button><span role="status" aria-live="polite">{notice && <><Check size={15} aria-hidden="true" />{notice}</>}</span><LinkIcon size={16} aria-hidden="true" /></div>;
}

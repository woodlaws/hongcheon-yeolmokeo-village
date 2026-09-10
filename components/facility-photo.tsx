"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function FacilityPhoto({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  return <>
    <figure className="facility-photo">
      <button type="button" onClick={() => setOpen(true)} aria-label={`${alt} 크게 보기`}>
        <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 767px) calc(100vw - 40px), 55vw" />
        <span><Expand size={17} aria-hidden="true" /> 크게 보기</span>
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
    {open && <div className="facility-lightbox" role="dialog" aria-modal="true" aria-label={`${alt} 확대 이미지`} onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="확대 이미지 닫기"><X size={25} /></button>
      <figure><Image src={src} alt={alt} fill sizes="95vw" /><figcaption>{caption}</figcaption></figure>
    </div>}
  </>;
}

"use client";

import Image from "next/image";
import { Expand, Minus, Plus, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type FacilityMapViewerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export function FacilityMapViewer({ src, alt, width, height, caption }: FacilityMapViewerProps) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<{ pointerId: number; x: number; y: number; startX: number; startY: number } | null>(null);

  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };
  const close = () => { setOpen(false); reset(); };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setScale(1);
        setOffset({ x: 0, y: 0 });
      }
      if (event.key === "+" || event.key === "=") setScale((value) => Math.min(3, value + .25));
      if (event.key === "-") setScale((value) => Math.max(1, value - .25));
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return <>
    <figure className="facility-map-figure">
      <Image src={src} alt={alt} width={width} height={height} priority sizes="(max-width: 767px) calc(100vw - 40px), 1200px" />
      <div className="facility-map-meta"><figcaption>{caption}</figcaption><button ref={triggerRef} type="button" className="button button-outline" onClick={() => setOpen(true)}><Expand size={17} aria-hidden="true" /> 약도 크게 보기</button></div>
    </figure>
    {open && <div className="facility-map-dialog" role="dialog" aria-modal="true" aria-label="열목어마을 약도 크게 보기" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="facility-map-toolbar" aria-label="약도 확대 도구">
        <button type="button" onClick={() => setScale((value) => Math.max(1, value - .25))} disabled={scale <= 1} aria-label="축소"><Minus /></button>
        <output aria-live="polite">{Math.round(scale * 100)}%</output>
        <button type="button" onClick={() => setScale((value) => Math.min(3, value + .25))} disabled={scale >= 3} aria-label="확대"><Plus /></button>
        <button type="button" onClick={reset} aria-label="확대와 위치 초기화"><RotateCcw /></button>
      </div>
      <button ref={closeRef} className="facility-map-close" type="button" onClick={close} aria-label="약도 크게 보기 닫기"><X /></button>
      <div
        className={`facility-map-stage${scale > 1 ? " is-zoomed" : ""}`}
        onPointerDown={(event) => {
          if (scale <= 1) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, startX: offset.x, startY: offset.y };
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;
          setOffset({ x: drag.startX + event.clientX - drag.x, y: drag.startY + event.clientY - drag.y });
        }}
        onPointerUp={(event) => {
          if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }}
      >
        <Image src={src} alt={alt} width={width} height={height} draggable={false} sizes="100vw" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }} />
      </div>
      <p className="facility-map-help">확대 버튼을 누른 뒤 마우스나 손가락으로 약도를 이동할 수 있습니다. ESC를 누르면 닫힙니다.</p>
    </div>}
  </>;
}

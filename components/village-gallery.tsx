"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { villageGallery } from "@/data/village";

export function VillageGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeImage = activeIndex === null ? null : villageGallery[activeIndex];

  return (
    <>
      <div className="village-gallery-grid">
        {villageGallery.map((image, index) => (
          <button
            type="button"
            className={`village-gallery-item village-gallery-${image.size}`}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`${image.caption} 사진 크게 보기`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            <span>{image.caption}</span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="village-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.caption} 확대 사진`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <button ref={closeButtonRef} type="button" className="village-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="확대 사진 닫기">
            <X aria-hidden="true" />
          </button>
          <figure>
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="92vw" priority />
            <figcaption>{activeImage.caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

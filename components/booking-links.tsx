"use client";

import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, page: string, position: string, label: string) {
  window.gtag?.("event", eventName, {
    page,
    button_position: position,
    cta_text: label,
  });
}

type LinkProps = {
  children: ReactNode;
  className?: string;
  position: string;
  analyticsLabel?: string;
};

export function NaverBookingLink({ children, className, position, analyticsLabel }: LinkProps) {
  const pathname = usePathname();
  const label = analyticsLabel ?? (typeof children === "string" ? children : "네이버 예약");
  return (
    <a
      href={siteConfig.naverBookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("naver_booking_click", pathname, position, label)}
    >
      {children}<ExternalLink className="external-cta-icon" size={15} aria-hidden="true" />
      <span className="sr-only">네이버 예약 페이지가 새 창에서 열립니다.</span>
    </a>
  );
}

export function PhoneReservationLink({ children, className, position, analyticsLabel }: LinkProps) {
  const pathname = usePathname();
  const label = analyticsLabel ?? (typeof children === "string" ? children : "전화 문의");
  return (
    <a
      href={siteConfig.contact.phoneHref}
      className={className}
      onClick={() => track("phone_reservation_click", pathname, position, label)}
    >
      {children}
    </a>
  );
}

export function ConsultationLink({ children, className, position, analyticsLabel, href, type }: LinkProps & { href: string; type: "stay" | "group" }) {
  const pathname = usePathname();
  const label = analyticsLabel ?? (typeof children === "string" ? children : "상담 신청");
  return (
    <a
      href={href}
      className={className}
      onClick={() => track(type === "group" ? "group_consultation_click" : "stay_consultation_click", pathname, position, label)}
    >
      {children}
    </a>
  );
}

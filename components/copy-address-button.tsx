"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
export function CopyAddressButton({ address }: { address: string }) { const [copied, setCopied] = useState(false); async function copy() { try { await navigator.clipboard.writeText(address); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } } return <button type="button" className="button button-outline" onClick={copy} aria-live="polite">{copied ? <><Check size={17} />복사됨</> : <><Copy size={17} />주소 복사</>}</button>; }

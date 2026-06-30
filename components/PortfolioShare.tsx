"use client";

import { useState } from "react";

type PortfolioShareProps = {
  href: string;
  label: string;
  /** Icon-only pill used for per-reel share buttons inside the wall. */
  compact?: boolean;
};

export default function PortfolioShare({ href, label, compact = false }: PortfolioShareProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = href.startsWith("http") ? href : `${window.location.origin}${href}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      className={`portfolio-copy${compact ? " is-compact" : ""}${copied ? " is-copied" : ""}`}
      type="button"
      onClick={copyLink}
      aria-label={`Copy link to ${label}`}
      title={copied ? "Copied!" : "Copy share link"}
    >
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M9 7.5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1.5" />
        <path d="M6 9h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" />
      </svg>
      {compact ? (
        <span className="portfolio-copy-toast">{copied ? "Copied" : "Share"}</span>
      ) : (
        <span>{copied ? "Copied" : "Copy link"}</span>
      )}
    </button>
  );
}

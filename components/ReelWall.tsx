"use client";

import { useEffect, useRef, useState } from "react";
import {
  allTiles,
  categoryCount,
  compact,
  reelBrands,
  reelCategories,
} from "@/lib/reels";

const ALL = "all";

// The mosaic is a CSS multi-column layout, so a page must be a whole number of
// ROWS (columns × rows). Capping at an arbitrary tile count that isn't a
// multiple of the column count makes the browser balance the columns unevenly
// and leaves a ragged, half-empty bottom — that big white gap. So we detect the
// live column count (mirroring the .rw-mosaic breakpoints in globals.css) and
// round a rough per-page target up to fill complete rows.
const TARGET_DESKTOP = 15;
const TARGET_MOBILE = 10;
const DEFAULT_COLS = 6; // widest breakpoint; also the SSR assumption

function columnsForViewport() {
  if (typeof window === "undefined") return DEFAULT_COLS;
  const m = (q: string) => window.matchMedia(q).matches;
  if (m("(max-width: 460px)")) return 2;
  if (m("(max-width: 760px)")) return 3;
  if (m("(max-width: 980px)")) return 4;
  if (m("(max-width: 1200px)")) return 5;
  return 6;
}

// Round a target count up to the next full row for the given column count.
function pageForCols(cols: number) {
  const target = cols <= 3 ? TARGET_MOBILE : TARGET_DESKTOP;
  return Math.ceil(target / cols) * cols;
}

// Traditional Chinese (Taiwan) labels for the industry filter chips.
const zhCategories: Record<string, string> = {
  healthcare: "醫療保健",
  beauty: "美妝保養",
  automotive: "汽機車",
  home: "居家生活",
  pet: "寵物",
  finance: "財經",
  lifestyle: "生活風格",
};

const wallStrings = {
  en: {
    all: "All",
    filterAria: "Filter reels by industry",
    views: "views",
    followers: "followers",
    openReel: (name: string) => `Open ${name} reel on Instagram`,
    category: (slug: string, label: string) => label,
    showMore: "Show more",
  },
  zh: {
    all: "全部",
    filterAria: "依產業篩選影片",
    views: "觀看",
    followers: "粉絲",
    openReel: (name: string) => `在 Instagram 開啟 ${name} 的影片`,
    category: (slug: string, label: string) => zhCategories[slug] ?? label,
    showMore: "顯示更多",
  },
};

export default function ReelWall({ locale = "en" }: { locale?: "en" | "zh" }) {
  const t = wallStrings[locale];
  const [active, setActive] = useState(ALL);
  // Live column count of the mosaic. Defaults to the widest breakpoint so the
  // server render and first client render agree; a resize effect corrects it.
  const [cols, setCols] = useState(DEFAULT_COLS);
  // How many tiles are currently rendered — always a whole number of rows.
  // Grows by one page (a block of full rows) on "show more".
  const [limit, setLimit] = useState(() => pageForCols(DEFAULT_COLS));
  const mosaicRef = useRef<HTMLDivElement | null>(null);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const perPage = pageForCols(cols);
  const tiles = allTiles(reelBrands).filter((t) => active === ALL || t.brand.category === active);
  const total = allTiles(reelBrands).length;
  const visibleTiles = tiles.slice(0, limit);
  const remaining = tiles.length - visibleTiles.length;

  // Track the live column count so a page is always complete rows.
  useEffect(() => {
    const apply = () => setCols(columnsForViewport());
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // Reset back to a single page whenever the filter or column count changes, so
  // a new category (or a resize across a breakpoint) starts collapsed and even.
  useEffect(() => {
    setLimit(perPage);
  }, [active, perPage]);

  // Reels ship with preload="none" so an off-screen mosaic never fetches video.
  // But that makes the first hover laggy — the clip has to download before it
  // can play. So we warm up only the tiles near the viewport: once a tile scrolls
  // into range we upgrade it to preload="auto" and kick off buffering, so by the
  // time the pointer lands the clip plays instantly. Bandwidth stays bounded to
  // what's actually on screen. Re-runs when the active filter swaps the tiles.
  useEffect(() => {
    const root = mosaicRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const v = entry.target as HTMLVideoElement;
          if (v.preload !== "auto") {
            v.preload = "auto";
            v.load();
          }
          io.unobserve(v);
        }
      },
      { rootMargin: "300px 0px" }
    );
    root.querySelectorAll("video").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [active, limit]);

  // As the viewer approaches the "show more" button, warm the NEXT page's cover
  // images so the reveal is instant on click. Covers are cheap (webp) — the
  // heavier videos still lazy-load once revealed and near the viewport.
  useEffect(() => {
    const el = moreRef.current;
    if (!el || remaining <= 0 || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        tiles.slice(limit, limit + perPage).forEach((t) => {
          const img = new Image();
          img.src = t.cover;
        });
        io.disconnect();
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active, limit, perPage, tiles, remaining]);

  return (
    <>
      <div className="rw-dock">
        <div className="container">
          <nav className="rw-filter" aria-label={t.filterAria}>
            <button
              className={`rw-pill${active === ALL ? " is-on" : ""}`}
              onClick={() => setActive(ALL)}
            >
              {t.all} <span>{total}</span>
            </button>
            {reelCategories.map((c) => {
              const n = categoryCount(c.slug);
              if (!n) return null;
              return (
                <button
                  key={c.slug}
                  className={`rw-pill${active === c.slug ? " is-on" : ""}`}
                  data-cat={c.slug}
                  onClick={() => setActive(c.slug)}
                >
                  {t.category(c.slug, c.label)} <span>{n}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="rw-mosaic" ref={mosaicRef}>
        {visibleTiles.map((tile) => (
          <a
            key={`${tile.brand.handle}-${tile.code}`}
            className="rw-tile"
            data-cat={tile.brand.category}
            href={tile.embed}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => {
              const v = e.currentTarget.querySelector("video");
              if (v) void v.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              const v = e.currentTarget.querySelector("video");
              if (v) {
                v.pause();
                v.currentTime = 0;
              }
            }}
            aria-label={t.openReel(tile.brand.name)}
          >
            {tile.video ? (
              <video src={tile.video} poster={tile.cover} width={1080} height={1920} muted loop playsInline preload="none" tabIndex={-1} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tile.cover} alt={tile.brand.name} width={1080} height={1920} loading="lazy" decoding="async" />
            )}
            <span className="rw-tile-views">{compact(tile.views)}</span>
            <span className="rw-tile-meta">
              <strong>{tile.brand.name}</strong>
              <em>
                {compact(tile.brand.views)} {t.views} · {compact(tile.brand.followers)} {t.followers}
              </em>
            </span>
          </a>
        ))}
      </div>

      {remaining > 0 && (
        <div className="rw-more" ref={moreRef}>
          <button
            type="button"
            className="rw-more-btn"
            onClick={() => setLimit((l) => l + perPage)}
          >
            {t.showMore}
            <svg viewBox="0 0 24 24" aria-hidden>
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

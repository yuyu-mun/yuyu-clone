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
  },
  zh: {
    all: "全部",
    filterAria: "依產業篩選影片",
    views: "觀看",
    followers: "粉絲",
    openReel: (name: string) => `在 Instagram 開啟 ${name} 的影片`,
    category: (slug: string, label: string) => zhCategories[slug] ?? label,
  },
};

export default function ReelWall({ locale = "en" }: { locale?: "en" | "zh" }) {
  const t = wallStrings[locale];
  const [active, setActive] = useState(ALL);
  const mosaicRef = useRef<HTMLDivElement | null>(null);

  const tiles = allTiles(reelBrands).filter((t) => active === ALL || t.brand.category === active);
  const total = allTiles(reelBrands).length;

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
  }, [active]);

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
        {tiles.map((tile) => (
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
              <video src={tile.video} poster={tile.cover} muted loop playsInline preload="none" tabIndex={-1} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tile.cover} alt={tile.brand.name} loading="lazy" decoding="async" />
            )}
            <span className="rw-tile-views">{compact(tile.views)}</span>
            {tile.highlight && <span className="rw-tile-star">★</span>}
            <span className="rw-tile-meta">
              <strong>{tile.brand.name}</strong>
              <em>
                {compact(tile.brand.views)} {t.views} · {compact(tile.brand.followers)} {t.followers}
              </em>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}

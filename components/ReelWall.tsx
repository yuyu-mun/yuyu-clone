"use client";

import { useState } from "react";
import {
  allTiles,
  categoryCount,
  compact,
  reelBrands,
  reelCategories,
} from "@/lib/reels";

const ALL = "all";

export default function ReelWall() {
  const [active, setActive] = useState(ALL);

  const tiles = allTiles(reelBrands).filter((t) => active === ALL || t.brand.category === active);
  const total = allTiles(reelBrands).length;

  return (
    <>
      <div className="rw-dock">
        <div className="container">
          <nav className="rw-filter" aria-label="Filter reels by industry">
            <button
              className={`rw-pill${active === ALL ? " is-on" : ""}`}
              onClick={() => setActive(ALL)}
            >
              All <span>{total}</span>
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
                  {c.label} <span>{n}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="rw-mosaic">
        {tiles.map((t) => (
          <a
            key={`${t.brand.handle}-${t.code}`}
            className="rw-tile"
            data-cat={t.brand.category}
            href={t.embed}
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
            aria-label={`Open ${t.brand.name} reel on Instagram`}
          >
            {t.video ? (
              <video src={t.video} poster={t.cover} muted loop playsInline preload="none" tabIndex={-1} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.cover} alt={t.brand.name} loading="lazy" decoding="async" />
            )}
            <span className="rw-tile-views">{compact(t.views)}</span>
            {t.highlight && <span className="rw-tile-star">★</span>}
            <span className="rw-tile-meta">
              <strong>{t.brand.name}</strong>
              <em>
                {compact(t.brand.views)} views · {compact(t.brand.followers)} followers
              </em>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}

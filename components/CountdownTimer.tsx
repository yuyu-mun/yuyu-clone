"use client";

import { useEffect, useState } from "react";

// Rolling 48-hour window anchored to a fixed epoch so the "limited time"
// countdown stays evergreen and identical for every visitor without ever
// hitting zero or needing a hardcoded end date.
const WINDOW_MS = 48 * 60 * 60 * 1000;
const ANCHOR = Date.UTC(2026, 0, 1);

function remaining() {
  const elapsed = (Date.now() - ANCHOR) % WINDOW_MS;
  const left = WINDOW_MS - elapsed;
  const hours = Math.floor(left / (60 * 60 * 1000));
  const minutes = Math.floor((left % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((left % (60 * 1000)) / 1000);
  return { hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function CountdownTimer({ locale = "en" }: { locale?: "en" | "zh" }) {
  const [time, setTime] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTime(remaining());
    const id = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const labels = locale === "zh" ? ["時", "分", "秒"] : ["Hrs", "Min", "Sec"];
  const blocks: [string, number][] = [
    [labels[0], time?.hours ?? 0],
    [labels[1], time?.minutes ?? 0],
    [labels[2], time?.seconds ?? 0],
  ];

  return (
    <div className="offer-timer" role="timer" aria-label={locale === "zh" ? "限時優惠倒數" : "Limited time offer countdown"}>
      {blocks.map(([label, value], i) => (
        <span className="offer-timer-block" key={label}>
          <strong suppressHydrationWarning>{time ? pad(value) : "--"}</strong>
          <small>{label}</small>
          {i < blocks.length - 1 && <i aria-hidden>:</i>}
        </span>
      ))}
    </div>
  );
}

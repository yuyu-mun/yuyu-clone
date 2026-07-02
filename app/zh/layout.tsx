"use client";

import { useEffect } from "react";

// The root layout renders <html lang="en">; this segment layout flips the
// document language for the Traditional Chinese (Taiwan) pages so screen
// readers and search engines treat them correctly.
export default function ZhLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = "zh-Hant-TW";
    return () => {
      document.documentElement.lang = prev;
    };
  }, []);

  return children;
}

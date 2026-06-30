import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/Icons";
import { blog } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing Insight | Yuyu Creative",
  description: "Short video strategy — the thinking behind the work.",
};

export default function InsightPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Marketing Insight</span>
          <h1>Thinking Behind The Work</h1>
          <p>Short video strategy, social media marketing, and brand-building insights for the Malaysian market.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {blog.map((b) => (
              <Link href={b.href} className="card blog" key={b.title}>
                <div className="thumb"><Image src={b.img} alt={b.title} width={600} height={375} /></div>
                <div className="body">
                  <span className="tag">{b.category}</span>
                  <h3>{b.title}</h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.92rem" }}>{b.excerpt}</p>
                  <div className="meta">{b.date}</div>
                  <span className="readmore">Read More <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

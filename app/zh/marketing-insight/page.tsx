import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/Icons";
import { blogZh, blogIndexZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: blogIndexZh.metaTitle,
  description: blogIndexZh.metaDescription,
  alternates: {
    canonical: "/zh/marketing-insight",
  },
};

export default function InsightZhPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{blogIndexZh.eyebrow}</span>
          <h1>{blogIndexZh.title}</h1>
          <p>{blogIndexZh.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {blogZh.map((b) => (
              <Link href={b.href} className="card blog" key={b.title}>
                <div className="thumb"><Image src={b.img} alt={b.title} width={600} height={375} /></div>
                <div className="body">
                  <span className="tag">{b.category}</span>
                  <h3>{b.title}</h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.92rem" }}>{b.excerpt}</p>
                  <div className="meta">{b.date} · {blogIndexZh.noteEnglish}</div>
                  <span className="readmore">{blogIndexZh.readMore} <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

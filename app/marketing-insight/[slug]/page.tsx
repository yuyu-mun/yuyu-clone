import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { ArrowIcon } from "@/components/Icons";
import { blog } from "@/lib/site";

function getPost(slug: string) {
  return blog.find((b) => b.href.endsWith(`/${slug}`));
}

export function generateStaticParams() {
  return blog.map((b) => ({ slug: b.href.split("/").pop()! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} | Yuyu Creative` : "Article | Yuyu Creative" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <section className="page-hero">
          <div className="container" style={{ maxWidth: 820 }}>
            <span className="eyebrow">{post.category}</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>{post.title}</h1>
            <p style={{ marginBottom: 0 }}>{post.date}</p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 820 }}>
            <div style={{ borderRadius: "var(--radius)", overflow: "hidden", marginBottom: 40 }}>
              <Image src={post.img} alt={post.title} width={820} height={460} style={{ width: "100%", height: "auto" }} />
            </div>
            <p className="lead">{post.excerpt}</p>
            <p style={{ color: "var(--gray)" }}>
              This is a recreated layout of the original article on yuyu-creative.com.my. The full
              piece walks through practical strategy for brands and founders in Malaysia, covering
              positioning, content planning, distribution across major platforms, and how to measure
              real results from short-form video.
            </p>
            <p style={{ color: "var(--gray)" }}>
              At Yuyu Creative, every recommendation starts from your business model and audience —
              not from chasing trends. If you&apos;d like a strategy tailored to your brand, get in
              touch and we&apos;ll map it out with you.
            </p>
            <Link href="/marketing-insight" className="readmore" style={{ marginTop: 24 }}>
              <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><ArrowIcon /></span> Back to all insights
            </Link>
          </div>
        </section>
      </article>

      <CtaBand title="Want a short video strategy built for your brand?" cta="Get In Touch" />
    </>
  );
}

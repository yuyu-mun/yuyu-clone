import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section center" style={{ padding: "140px 0" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn ghost" style={{ marginTop: 16 }}>Back to Home</Link>
      </div>
    </section>
  );
}

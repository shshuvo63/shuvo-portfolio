import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap" style={{ padding: "120px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: 16 }}>Page not found</h1>
      <p className="lead" style={{ marginInline: "auto" }}>The page you are looking for does not exist.</p>
      <Link className="btn p" href="/">Back to home</Link>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectWindow from "@/components/ui/ProjectWindow";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.description } : {};
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="pts">
      {(items.length ? items : ["Not added yet."]).map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return href ? (
    <a className={`btn${primary ? " p" : ""}`} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <span className="btn off">{label}: coming soon</span>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main id="detail">
      <div className="wrap dv">
        <Link className="btn" href="/#projects">← Back to projects</Link>
        <h1 style={{ marginTop: 22, fontSize: "clamp(1.8rem,4vw,2.5rem)", background: "none", color: "var(--tx)" }}>{p.name}</h1>
        <p className="lead" style={{ marginTop: 14 }}>{p.description}</p>
        <ProjectWindow project={p} />
        <div className="dcols">
          <div>
            <div className="card">
              <h3>Challenges faced</h3>
              <List items={p.challenges} />
            </div>
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Improvements and future plans</h3>
              <List items={p.future} />
            </div>
          </div>
          <aside className="card">
            <h3>Main technology stack</h3>
            <div className="tags" style={{ margin: "12px 0 20px" }}>
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <h3>Key features</h3>
            <List items={p.features} />
            <div className="clinks" style={{ marginTop: 20 }}>
              <ExternalLink href={p.demo} label="Live project" primary />
              <ExternalLink href={p.repo} label="GitHub (client)" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

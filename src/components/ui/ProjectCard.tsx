import Link from "next/link";
import type { Project } from "@/types";
import ProjectWindow from "./ProjectWindow";

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="card proj rv">
      <ProjectWindow project={p} />
      <div className="pb">
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <div className="tags">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <ul>
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="row" style={{ marginTop: "auto" }}>
          <Link className="btn p" href={`/projects/${p.slug}`}>
            View details
          </Link>
          {p.repo && (
            <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {p.demo && (
            <a className="btn p" href={p.demo} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

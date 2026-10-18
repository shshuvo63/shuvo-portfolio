import Image from "next/image";
import type { Project } from "@/types";

/** Browser-style preview frame for a project image. */
export default function ProjectWindow({ project }: { project: Project }) {
  return (
    <div className="win">
      <div className="bar">
        <b />
        <b />
        <b />
        <span>{project.slug}.app</span>
      </div>
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1280}
          height={720}
          sizes="(max-width: 760px) 90vw, 520px"
        />
      ) : (
        <div className="thumb">Screenshot placeholder</div>
      )}
    </div>
  );
}

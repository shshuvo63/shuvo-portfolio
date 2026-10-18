import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Featured projects</h2>
        <p className="lead">Open any project to see its stack, the challenges I faced, and what I plan to improve.</p>
        <div className="grid g3" id="projList">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

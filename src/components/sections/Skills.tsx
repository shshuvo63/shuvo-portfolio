import { skillCategories } from "@/data/skills";
import { skillIcons } from "@/data/skillIcons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Technical skills</h2>
        <p className="lead">The tools I use to design, build, and ship.</p>
        <div id="skillList">
          {skillCategories.map((c) => (
            <div className="scard rv" key={c.title}>
              <div className="shead">
                <h3>{c.title}</h3>
                <span>{c.items.length} tools</span>
              </div>
              <div className="chips">
                {c.items.map((s) => (
                  <div className="chip" key={s}>
                    <i aria-hidden="true" dangerouslySetInnerHTML={{ __html: skillIcons[s] ?? "" }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

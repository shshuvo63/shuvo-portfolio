import Timeline from "@/components/ui/Timeline";
import { experience } from "@/data/site";

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Experience</h2>
        <Timeline entries={experience} />
      </div>
    </section>
  );
}

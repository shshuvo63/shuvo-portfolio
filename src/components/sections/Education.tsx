import { education } from "@/data/site";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <h2>Educational qualification</h2>
        <div className="edu">
          {education.map((e) => (
            <article className="ecard rv" key={e.title}>
              <div className="eyear">{e.year}</div>
              <div className="ebody">
                <h3>{e.title}</h3>
                <div className="einst">{e.institution}</div>
                <span className="eres">{e.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

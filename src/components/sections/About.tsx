const focus = [
  ["Full-Stack Development", "Responsive interfaces, backend services, and database-driven apps."],
  ["Problem Solving", "Breaking challenges into small, testable steps and shipping working solutions."],
  ["Data Analytics", "Exploring Python, Pandas, and NumPy to find insights in raw data."],
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About Me</h2>
        <p className="abt-sub">Turning Ideas into Digital Experiences</p>
        <div className="abt">
          <div className="abt-text">
            <p className="abt-lead">
              Hi, I’m Shamsul Haque Shuvo, a passionate Full-Stack Web Developer from Bangladesh who loves turning
              creative ideas into modern, responsive, and user-friendly web applications.
            </p>
            <h3>My programming journey</h3>
            <p>
              My programming journey started with learning HTML and CSS, where I discovered the excitement of building
              things for the web. As I continued exploring, I moved into JavaScript, TypeScript, React, and Tailwind
              CSS, gradually developing my frontend skills. Now, I’m expanding my knowledge of backend development with
              Node.js, databases like MongoDB, and API integration to build complete, scalable web applications.
            </p>
            <h3>The work I enjoy</h3>
            <p>
              I enjoy solving problems, creating clean and intuitive user interfaces, and transforming ideas into
              functional digital experiences. For me, coding isn’t just about writing code. It’s about thinking
              creatively, experimenting with new approaches, overcoming challenges, and continuously improving my
              skills.
            </p>
            <h3>Data and new technology</h3>
            <p>
              Beyond web development, I’m also interested in Data Analytics and how technologies like Python, Pandas,
              and NumPy can turn raw data into meaningful insights. I’m always curious about emerging technologies and
              enjoy exploring new concepts that help me grow both technically and creatively.
            </p>
          </div>
          <aside className="abt-side">
            <div className="card rv">
              <h3>Away from my computer</h3>
              <p>
                When I’m not coding, you’ll usually find me gaming or traveling. Both help me recharge, stay curious,
                and return to my work with renewed energy.
              </p>
              <div className="hob">
                <div>
                  <span aria-hidden="true">🎮</span>
                  <p>
                    <b>Gaming</b>
                    <br />
                    Keeps me entertained and lets me explore virtual worlds.
                  </p>
                </div>
                <div>
                  <span aria-hidden="true">✈️</span>
                  <p>
                    <b>Traveling</b>
                    <br />
                    Helps me discover new places, experience different environments, and gain fresh perspectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="card rv">
              <h3>Who I am</h3>
              <p>
                I’m a curious, dedicated, and growth-oriented person who believes that every challenge is an
                opportunity to learn something new. My goal is to become a skilled developer, contribute to meaningful
                projects, and build digital products that make a positive difference.
              </p>
            </div>
            <blockquote className="quote rv">
              My philosophy: Keep learning, keep exploring, keep building, and never stop improving.
            </blockquote>
          </aside>
        </div>
        <div className="grid g3" style={{ marginTop: 28 }}>
          {focus.map(([title, text]) => (
            <div className="card rv" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

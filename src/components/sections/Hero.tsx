import Image from "next/image";
import Link from "next/link";
import ResumeButton from "@/components/ui/ResumeButton";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <div className="wrap" id="home">
      <div className="hero">
        <div>
          {site.available && (
            <div className="badge">
              <span className="dot" />
              Open to opportunities
            </div>
          )}
          <div className="tag">Hi, I’m {site.name}</div>
          <div className="role">
            {site.title} · {site.location}
          </div>
          <h1>Building Digital Experiences That Make an Impact.</h1>
          <p>
            I build modern, responsive, and scalable web applications with a focus on clean code, thoughtful user
            experiences, and practical problem-solving. I’m also exploring Data Analytics to turn data into meaningful
            insights.
          </p>
          <div className="row">
            <Link className="btn p" href="#projects">Explore My Projects</Link>
            <ResumeButton href={site.resume} />
            <Link className="lnk" href="#contact">Let’s Connect</Link>
          </div>
          <div className="row" style={{ marginTop: 22 }}>
            <SocialLinks />
          </div>
        </div>
        <div className="avatar" id="avatar">
          <Image src={site.photo} alt={`Portrait of ${site.name}`} fill priority sizes="(max-width: 860px) 90vw, 380px" />
        </div>
      </div>
      <span className="scroll" aria-hidden="true" />
    </div>
  );
}

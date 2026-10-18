import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="logo">
              SHUVO<span>.DEV</span>
            </div>
            <p style={{ margin: "6px 0 0" }}>Clean code, thoughtful interfaces, useful products.</p>
            {site.email && (
              <p style={{ margin: "6px 0 0" }}>
                <a href={`mailto:${site.email}`} style={{ color: "var(--ac)", textDecoration: "underline" }}>
                  {site.email}
                </a>
              </p>
            )}
          </div>
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <div className="row">
            <SocialLinks />
          </div>
        </div>
        <p style={{ margin: "24px 0 0" }}>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { experience } from "@/data/site";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  ...(experience.length ? [{ id: "experience", label: "Experience" }] : []),
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header>
      <div className="wrap">
        <nav aria-label="Main">
          <Link className="logo" href="/">
            SHUVO<span>.DEV</span>
          </Link>
          <ul className={`links${open ? " open" : ""}`} id="links">
            {links.map((l) => (
              <li key={l.id}>
                <Link href={`/#${l.id}`} className={active === l.id ? "on" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="row">
            <Link className="btn p hideM" href="/#contact">
              Let’s Talk
            </Link>
            <ThemeToggle />
            <button
              type="button"
              className="ic"
              id="menuBtn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="links"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

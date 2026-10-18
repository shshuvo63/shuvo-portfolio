import { site } from "@/data/site";
import { socialPaths } from "@/data/socialIcons";

const items = [
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["twitter", "Twitter"],
  ["facebook", "Facebook"],
] as const;

export default function SocialLinks() {
  return (
    <>
      {items.map(([key, label]) => {
        const href = site[key];
        if (!href) return null;
        return (
          <a key={key} className="btn soc" href={href} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={socialPaths[key]} />
            </svg>
            {label}
          </a>
        );
      })}
    </>
  );
}

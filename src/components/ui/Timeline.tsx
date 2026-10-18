import type { Entry } from "@/types";

export default function Timeline({ entries, empty }: { entries: Entry[]; empty?: string }) {
  return (
    <div className="tl">
      {entries.length ? (
        entries.map((e) => (
          <div key={e.title}>
            <h3 style={{ fontSize: "1.05rem" }}>{e.title}</h3>
            {e.meta && <div className="note">{e.meta}</div>}
            {e.text && <p style={{ color: "var(--mu)", margin: "4px 0 0" }}>{e.text}</p>}
          </div>
        ))
      ) : (
        <div className="ph note">{empty}</div>
      )}
    </div>
  );
}

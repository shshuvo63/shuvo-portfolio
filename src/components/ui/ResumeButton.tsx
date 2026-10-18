"use client";

import { useState } from "react";

const FILE_NAME = "Shamsul_Haque_Shuvo_Resume.pdf";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/**
 * Downloads `href` (for example "/resume.pdf" from /public) as Shamsul_Haque_Shuvo_Resume.pdf.
 * Pass an empty string and the button stays clickable and shows a short notice instead.
 */
export default function ResumeButton({ href }: { href: string }) {
  const [msg, setMsg] = useState("");

  if (href) {
    return (
      <a className="btn resume-btn" href={href} download={FILE_NAME} aria-label="Download resume (PDF)">
        <DownloadIcon />
        Download Resume
      </a>
    );
  }
  return (
    <>
      <button
        type="button"
        className="btn resume-btn"
        onClick={() => {
          setMsg("Resume coming soon. It will download here once it is added.");
          window.setTimeout(() => setMsg(""), 3200);
        }}
      >
        <DownloadIcon />
        Download Resume
      </button>
      <div id="toast" role="status" aria-live="polite" className={msg ? "show" : ""}>
        {msg}
      </div>
    </>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = { ok: boolean; text: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [mailHref, setMailHref] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const subject = String(d.get("subject") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();

    if (!name || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ ok: false, text: "Fill in every field and enter a valid email address." });
      return;
    }
    if (!site.email) {
      setStatus({ ok: false, text: "Messages can’t be sent yet: no email address is configured." });
      return;
    }
    // No backend: open Gmail compose in a new tab, with a mailto link as a fallback.
    const bodyText = `${message}\n\n— ${name} (${email})`;
    const q = (v: string) => encodeURIComponent(v);
    const mail = `mailto:${site.email}?subject=${q(subject)}&body=${q(bodyText)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${q(site.email)}&su=${q(subject)}&body=${q(bodyText)}`;
    window.open(gmail, "_blank", "noopener");
    setMailHref(mail);
    setStatus({ ok: true, text: "Gmail is opening in a new tab with your message ready to send." });
    form.reset();
  }

  return (
    <form id="form" noValidate onSubmit={onSubmit}>
      <div className="frow">
        <div className="fld">
          <input id="fn" name="name" placeholder=" " required autoComplete="name" />
          <label htmlFor="fn">Name</label>
        </div>
        <div className="fld">
          <input id="fe" name="email" type="email" placeholder=" " required autoComplete="email" />
          <label htmlFor="fe">Email</label>
        </div>
      </div>
      <div className="fld">
        <input id="fs" name="subject" placeholder=" " required />
        <label htmlFor="fs">Subject</label>
      </div>
      <div className="fld">
        <textarea id="fm" name="message" rows={5} placeholder=" " required />
        <label htmlFor="fm">Message</label>
      </div>
      <button className="btn p send" type="submit">
        Send message
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
        </svg>
      </button>
      <div id="status" role="status" aria-live="polite">
        {status && (
          <div className={`msg ${status.ok ? "ok" : "err"}`}>
            {status.text}
            {status.ok && mailHref && (
              <>
                {" "}Not using Gmail?{" "}
                <a href={mailHref} style={{ textDecoration: "underline" }}>Open your mail app instead</a>.
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

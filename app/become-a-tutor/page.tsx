"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

type SubmitState = "idle" | "submitting" | "success" | "error";

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_SIZE_MB = 8;

const REQUIREMENTS = [
  {
    title: "Subject Mastery",
    desc: "A relevant qualification or strong, demonstrable command of your tutoring subject.",
  },
  {
    title: "Teaching Experience",
    desc: "Prior tutoring, teaching, or mentoring experience is preferred with a minimum of 5 years.",
  },
  {
    title: "Communication & Patience",
    desc: "The ability to explain clearly and adapt to each learner's pace and style.",
  },
  {
    title: "Availability",
    desc: "Reliable transport will be an added advantage.",
  },
  {
    title: "Curriculum Fluency",
    desc: "Comfortable working within CAPS, IEB, Cambridge, AS or A-Level syllabi.",
  },
];

export default function BecomeATutorPageOptionA() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const listRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() => REQUIREMENTS.map(() => false));

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const rows = Array.from(container.querySelectorAll<HTMLElement>("[data-feat-row]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-feat-row"));
          if (entry.isIntersecting) {
            const delay = index * 550;
            window.setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, delay);
          } else {
            setVisible((prev) => {
              const next = [...prev];
              next[index] = false;
              return next;
            });
          }
        });
      },
      { threshold: 0.25 }
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const validateAndSetFile = useCallback((candidate: File | null) => {
    if (!candidate) return;
    const ext = "." + candidate.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setErrorMsg("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      setState("error");
      return;
    }
    if (candidate.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrorMsg(`File must be smaller than ${MAX_FILE_SIZE_MB}MB.`);
      setState("error");
      return;
    }
    setErrorMsg("");
    setState("idle");
    setFile(candidate);
  }, []);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    validateAndSetFile(e.dataTransfer.files?.[0] || null);
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }
  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }

  async function handleSubmit() {
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please enter your name and email.");
      setState("error");
      return;
    }
    if (!file) {
      setErrorMsg("Please attach your CV before submitting.");
      setState("error");
      return;
    }
    setState("submitting");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("cv", file);

    try {
      const res = await fetch("/api/become-a-tutor", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <section style={{ background: "#111", padding: "140px 5% 100px", minHeight: "70vh" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2
            style={{
              fontFamily: '"Merriweather", serif',
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            CV Received
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 32 }}>
            Thanks, {name.split(" ")[0] || "there"}. We&apos;ve received your CV and
            we&apos;ll be in touch if there&apos;s a fit.
          </p>
          <Link
            href="/"
            style={{
              background: "#1a7a2e",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id="become-a-tutor"
      style={{ background: "#111", padding: "140px 5% 100px", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="tutor-grid">
          {/* LEFT: Requirements checklist */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#1a7a2e",
                marginBottom: 10,
              }}
            >
              Join Our Team
            </p>
            <h1
              style={{
                fontFamily: '"Merriweather", serif',
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              Become a Tutor
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              We&apos;re always looking for skilled, passionate tutors across Maths,
              Sciences, CAT, IT and Computer Science — Grades 1–12.
            </p>

            <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {REQUIREMENTS.map((req, i) => (
                <div
                  key={req.title}
                  data-feat-row={i}
                  className={`feat-row ${visible[i] ? "feat-row-in" : ""}`}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
                >
                  <div
                    className="feat-check-circle"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "rgba(26,122,46,0.15)",
                      border: "1.5px solid #1a7a2e",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        className="feat-check"
                        d="M2 6l3 3 5-5"
                        stroke="#1a7a2e"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="feat-title" style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 3 }}>
                      {req.title}
                    </p>
                    <p className="feat-desc" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                      {req.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form panel */}
          <div className="tutor-form-panel">
            <div style={fieldRow}>
              <div style={{ ...fieldGroup, flex: 1 }}>
                <label style={label} htmlFor="name">Full Name *</label>
                <input style={input} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div style={fieldGroup}>
              <label style={label} htmlFor="email">Email *</label>
              <input style={input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div style={fieldGroup}>
              <label style={label}>Your CV *</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                  ...dropZone,
                  borderColor: isDragging ? "#1a7a2e" : "rgba(255,255,255,0.12)",
                  background: isDragging ? "rgba(26,122,46,0.08)" : "rgba(255,255,255,0.02)",
                }}
              >
                {file ? (
                  <>
                    <div style={{ fontSize: 26, marginBottom: 8 }}>📄</div>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600 }}>{file.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>
                      Click or drop a new file to replace
                    </p>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 26, marginBottom: 8 }}>⬆️</div>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Drag and drop your CV here</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>
                      or click to browse — PDF or Word, max {MAX_FILE_SIZE_MB}MB
                    </p>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={(e) => validateAndSetFile(e.target.files?.[0] || null)}
              />
            </div>

            {state === "error" && (
              <p style={{ color: "#ff6b6b", fontSize: 14, marginBottom: 16 }}>{errorMsg}</p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={state === "submitting"}
              style={{
                background: "#1a7a2e",
                color: "#fff",
                padding: "13px 22px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                width: "100%",
                cursor: state === "submitting" ? "not-allowed" : "pointer",
                opacity: state === "submitting" ? 0.7 : 1,
              }}
            >
              {state === "submitting" ? "Sending..." : "Submit CV"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .tutor-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }
        .tutor-form-panel {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 32px;
        }
        @media (max-width: 900px) {
          .tutor-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .feat-row {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(.16,.84,.24,1), transform 1.2s cubic-bezier(.16,.84,.24,1);
        }
        .feat-row-in { opacity: 1; transform: translateY(0); }
        .feat-check-circle {
          transform: scale(0.5);
          opacity: 0;
          transition: transform .9s cubic-bezier(.34,1.56,.64,1) .3s, opacity .6s ease .3s;
        }
        .feat-row-in .feat-check-circle { transform: scale(1); opacity: 1; }
        .feat-check {
          stroke-dasharray: 12;
          stroke-dashoffset: 12;
          transition: stroke-dashoffset .6s ease .7s;
        }
        .feat-row-in .feat-check { stroke-dashoffset: 0; }
        @media (prefers-reduced-motion: reduce) {
          .feat-row, .feat-check-circle, .feat-check { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}

const fieldGroup: React.CSSProperties = { marginBottom: 20 };
const fieldRow: React.CSSProperties = { display: "flex", gap: 16, flexWrap: "wrap" as const };
const label: React.CSSProperties = { display: "block", color: "white", fontSize: 13, fontWeight: 600, marginBottom: 6 };
const input: React.CSSProperties = {
  width: "100%",
  background: "#000",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 6,
  padding: "11px 14px",
  fontSize: 14,
  color: "white",
  outline: "none",
  boxSizing: "border-box" as const,
};
const dropZone: React.CSSProperties = {
  border: "2px dashed rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "28px 20px",
  textAlign: "center" as const,
  cursor: "pointer",
  transition: "border-color .2s, background .2s",
};
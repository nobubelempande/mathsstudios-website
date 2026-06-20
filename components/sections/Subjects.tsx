import { SUBJECTS, CURRICULA } from "@/lib/constants";

// Maps a subject name to a faint background glyph shown on hover.
// Add an explicit `glyph` field on a subject in lib/constants.ts to override this.
function glyphFor(name: string) {
  const n = name.toLowerCase();
  if (n.includes("math")) return "x²";
  if (n.includes("comput") || n.includes(" it") || n.startsWith("it") || n.includes("cat")) return "{ }";
  if (n.includes("science") || n.includes("physical") || n.includes("life")) return "⚛";
  if (n.includes("account")) return "∑";
  if (n.includes("english") || n.includes("language")) return "Aa";
  return "∞";
}

export default function Subjects() {
  return (
    <>
    <section
      id="subjects"
      style={{
        background: "#111",
        padding: "90px 5%",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundRepeat: "repeat",
        backgroundSize: "900px 700px",
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNzAwIiB2aWV3Qm94PSIwIDAgOTAwIDcwMCI+CiAgPHN0eWxlPgogICAgdGV4dCB7IGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAiVGltZXMgTmV3IFJvbWFuIiwgc2VyaWY7IGZpbGw6ICNmZmZmZmY7IGZpbGwtb3BhY2l0eTogMC4wNTsgfQogICAgLmVxIHsgZm9udC1zaXplOiAyMnB4OyBmb250LXN0eWxlOiBpdGFsaWM7IH0KICAgIC5lcS1zbSB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1zdHlsZTogaXRhbGljOyB9CiAgICAuZXEtbGcgeyBmb250LXNpemU6IDI4cHg7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC13ZWlnaHQ6IGJvbGQ7IH0KICA8L3N0eWxlPgoKICA8dGV4dCBjbGFzcz0iZXEiIHg9IjIwIiB5PSI2MCI+eMKyICsgMnggKyAxID0gMDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjQwIiB5PSIxNjAiPmHCsiArIGLCsiA9IGPCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtbGciIHg9IjE1IiB5PSIyODAiPuKIqyBmKHgpIGR4PC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iMzAiIHk9IjM4MCI+c2luwrLOuCArIGNvc8KyzrggPSAxPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcS1zbSIgeD0iNTAiIHk9IjQ3MCI+eSA9IG14ICsgYzwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjIwIiB5PSI1NzAiPmxpbeKCk+KGkjAgKHNpbiB4KS94ID0gMTwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjQwIiB5PSI2NjAiPjJI4oKCICsgT+KCgiDihpIgMkjigoJPPC90ZXh0PgoKICA8dGV4dCBjbGFzcz0iZXEtbGciIHg9IjI2MCIgeT0iMTAwIj5FID0gbWPCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjI4MCIgeT0iMjAwIj54ID0gKC1iIMKxIOKIms6UKSAvIDJhPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcS1zbSIgeD0iMzAwIiB5PSIzMDAiPkYgPSBtYTwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjI2MCIgeT0iNDAwIj7iiJEgbihuKzEpLzI8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLXNtIiB4PSIyOTAiIHk9IjUwMCI+bG9nKHh5KSA9IGxvZyB4ICsgbG9nIHk8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLWxnIiB4PSIyNzAiIHk9IjYxMCI+z4AgcsKyPC90ZXh0PgoKICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjUyMCIgeT0iNjAiPmQvZHggKHjigb8pID0gbnjigb/igbvCuTwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjU0MCIgeT0iMTUwIj52ID0gdSArIGF0PC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcS1sZyIgeD0iNTEwIiB5PSIyNTAiPuKIhkFCQyB+IOKIhkRFRjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjUyMCIgeT0iMzUwIj5jb3MoQStCKSA9IGNvc0Fjb3NCIOKIkiBzaW5Bc2luQjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjU1MCIgeT0iNDUwIj5QViA9IG5SVDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjUyMCIgeT0iNTUwIj5mKHgpID0gYXjCsiArIGJ4ICsgYzwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjU0MCIgeT0iNjQwIj7iiJooeMKyICsgecKyKTwvdGV4dD4KCiAgPHRleHQgY2xhc3M9ImVxLWxnIiB4PSI3MzAiIHk9IjkwIj7iiJ48L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLXNtIiB4PSI2ODAiIHk9IjE4MCI+UChB4oipQikgPSBQKEEpUChCKTwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEtc20iIHg9IjcxMCIgeT0iMjgwIj5tID0gKHnigoIteeKCgSkvKHjigoIteOKCgSk8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLXNtIiB4PSI2OTAiIHk9IjM4MCI+4oiHwrdFID0gz4EvzrXigoA8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLWxnIiB4PSI3MDAiIHk9IjQ4MCI+ZV4oac+AKSsxPTA8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLXNtIiB4PSI2NjAiIHk9IjU3MCI+Q0jigoQgKyAyT+KCgiDihpIgQ0/igoIgKyAySOKCgk88L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxLXNtIiB4PSI2OTAiIHk9IjY2MCI+dGFuIM64ID0gc2luzrgvY29zzrg8L3RleHQ+Cjwvc3ZnPgo=")',
      }}
          >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#4ade80", marginBottom: 14 }}>
          What we cover
        </p>
        <h2 style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 900, color: "#fff", lineHeight: 1.18, marginBottom: 14, letterSpacing: "-0.3px" }}>
          Tutoring Services. Grades 1–12
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 560, marginBottom: 28 }}>
          Focused, expert tuition across core subjects.
        </p>

        {/* Curricula badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {CURRICULA.map((c) => (
            <span
              key={c}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "5px 14px",
                borderRadius: 4,
                background: "rgba(74,222,128,0.08)",
                color: "#4ade80",
                border: "1px solid rgba(74,222,128,0.2)",
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Subject cards */}
        <div className="subjects-grid">
          {SUBJECTS.map((subject) => {
            const isMore = "isMore" in subject && subject.isMore;
            const glyph = "glyph" in subject && (subject as { glyph?: string }).glyph
              ? (subject as { glyph?: string }).glyph
              : glyphFor(subject.name);

            return (
              <div
                key={subject.name}
                className={`scard ${subject.featured ? "scard-featured" : ""} ${isMore ? "scard-more" : ""}`}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: subject.featured
                    ? "#163d1f"
                    : isMore
                    ? "transparent"
                    : "#1a1a1a",
                  border: subject.featured
                    ? "1px solid rgba(74,222,128,0.25)"
                    : isMore
                    ? "2px dashed rgba(255,255,255,0.12)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  gridColumn: subject.featured ? "span 2" : "span 1",
                }}
              >
                {!isMore && (
                  <span aria-hidden="true" className="scard-glyph">
                    {glyph}
                  </span>
                )}

                <span className="scard-icon" style={{ fontSize: 24, position: "relative", zIndex: 1 }}>
                  {subject.icon}
                </span>
                <p
                  className="scard-name"
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: subject.featured
                      ? "#4ade80"
                      : isMore
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(255,255,255,0.9)",
                    marginBottom: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {subject.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: subject.featured
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(255,255,255,0.4)",
                    lineHeight: 1.65,
                    flex: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {subject.desc}
                </p>
                {subject.grade && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.35)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 4,
                      padding: "3px 10px",
                      alignSelf: "flex-start",
                      marginTop: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {subject.grade}
                  </span>
                )}
                {isMore && (
                  <a
                    href="#location"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#4ade80",
                      textDecoration: "none",
                      marginTop: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Enquire now →
                  </a>
                )}

                {!isMore && <span className="scard-underline" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .scard-featured {
          grid-column: span 2 !important;
        }

        .scard {
          transition: transform .35s cubic-bezier(.2,.8,.2,1),
                      box-shadow .35s cubic-bezier(.2,.8,.2,1),
                      border-color .35s ease,
                      background-color .35s ease;
        }
        .scard:not(.scard-more):hover {
          transform: translateY(-8px);
          border-color: rgba(74,222,128,0.45) !important;
          box-shadow: 0 20px 40px -14px rgba(0,0,0,0.55), 0 0 0 1px rgba(74,222,128,0.12) inset;
        }
        .scard:not(.scard-featured):not(.scard-more):hover {
  background: #1f2a1f !important;
}
        .scard-more:hover {
          border-color: rgba(255,255,255,0.25) !important;
        }

          .scard-glyph {
          position: absolute;
          right: -6px;
          bottom: -16px;
          font-size: 88px;
          font-family: "Merriweather", Georgia, serif;
          font-weight: 900;
          color: rgba(74,222,128,0);
          transform-origin: bottom right;
          transform: translateY(10px) rotate(-4deg) scale(0.92);
          transition: color .4s ease, transform .4s cubic-bezier(.2,.8,.2,1);
          pointer-events: none;
          line-height: 1;
          z-index: 0;
          will-change: transform;
        }
        .scard:hover .scard-glyph {
          color: rgba(74,222,128,0.13);
          transform: translateY(0) rotate(-4deg) scale(1);
        }

        .scard-icon {
          display: inline-block;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1);
        }
        .scard:hover .scard-icon {
          transform: scale(1.15) translateY(-2px);
        }

        .scard:not(.scard-featured) .scard-name {
          transition: color .3s ease;
        }
        .scard:not(.scard-featured):hover .scard-name {
          color: #4ade80 !important;
        }

        .scard-underline {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 0;
          height: 2px;
          width: 0;
          background: #4ade80;
          transition: width .4s cubic-bezier(.2,.8,.2,1);
        }
        .scard:hover .scard-underline {
          width: calc(100% - 44px);
        }

        @media (prefers-reduced-motion: reduce) {
          .scard, .scard-glyph, .scard-icon, .scard-name, .scard-underline {
            transition: none !important;
          }
          .scard:hover {
            transform: none;
          }
        }

        @media (max-width: 960px) {
          .subjects-grid { grid-template-columns: repeat(2, 1fr); }
          .scard-featured { grid-column: span 2 !important; }
        }
        @media (max-width: 640px) {
          .subjects-grid { grid-template-columns: 1fr; }
          .scard-featured { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
    </>
  );
}
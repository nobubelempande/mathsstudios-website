"use client";
import { WHY_FEATURES } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export default function Why() {
  const listRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() => WHY_FEATURES.map(() => false));

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

  return (
    <section id="why" style={{ background: "#111", padding: "70px 5%", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="why-video-grid">
          {/* LEFT: Video */}
          <div style={{ width: "100%", lineHeight: 0 }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", display: "block", borderRadius: 10, objectFit: "cover" }}
            >
              <source src="/videos/test.mp4" type="video/mp4" />
            </video>
          </div>

          {/* RIGHT: Features */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#1a7a2e", marginBottom: 10 }}>
                Why MathsStudios
              </p>
              <h2 style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(24px, 2.8vw, 36px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
                Expert Tutors. Real Results.
              </h2>
              {/* <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                Private one-on-one sessions or small group classes — structured around your child&apos;s needs, pace, and curriculum.
              </p> */}
            </div>

            <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {WHY_FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  data-feat-row={i}
                  className={`feat-row ${visible[i] ? "feat-row-in" : ""}`}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
                >
                  <div className="feat-check-circle"
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
                      {feat.title}
                    </p>
                    <p className="feat-desc" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-video-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .why-video-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .feat-row {
          opacity: 0;
          transform: translateY(80px);
          transition: opacity 1.6s cubic-bezier(.16,.84,.24,1), transform 1.6s cubic-bezier(.16,.84,.24,1);
        }
        .feat-row-in {
          opacity: 1;
          transform: translateY(0);
        }

        .feat-check-circle {
          transform: scale(0.5);
          opacity: 0;
          transition: transform .9s cubic-bezier(.34,1.56,.64,1) .5s, opacity .6s ease .5s;
        }
        .feat-row-in .feat-check-circle {
          transform: scale(1);
          opacity: 1;
        }

        .feat-check {
          stroke-dasharray: 12;
          stroke-dashoffset: 12;
          transition: stroke-dashoffset .6s ease .95s;
        }
        .feat-row-in .feat-check {
          stroke-dashoffset: 0;
        }

        .feat-title, .feat-desc {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 1s ease .3s, transform 1s ease .3s;
        }
        .feat-desc {
          transition-delay: .45s;
        }
        .feat-row-in .feat-title, .feat-row-in .feat-desc {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .feat-row, .feat-check-circle, .feat-check, .feat-title, .feat-desc {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
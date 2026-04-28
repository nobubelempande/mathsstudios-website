"use client";
import { TESTIMONIALS } from "@/lib/constants";
import { useState } from "react";

export default function TestimonialStrip() {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(3);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(TESTIMONIALS.length - visible, s + 1));

  const slice = TESTIMONIALS.slice(start, start + visible);

  return (
    <section style={{ background: "transparent", padding: "70px 5%", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", letterSpacing: 0.3 }}>
            What Our Students Say
          </h2>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

          <button
            onClick={prev}
            disabled={start === 0}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: start === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)",
              cursor: start === 0 ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 16,
            }}
          >‹</button>

          <div className="testimonial-grid">
            {slice.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "24px 20px",
                  display: "flex", flexDirection: "column", gap: 14,
                }}
              >
                <div style={{ color: "#f59e0b", fontSize: 13, letterSpacing: 2 }}>
                  {"★".repeat(t.stars)}
                </div>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontStyle: "italic", flex: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: t.color, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{t.name}</p>
                    <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.35)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={start >= TESTIMONIALS.length - visible}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: start >= TESTIMONIALS.length - visible ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)",
              cursor: start >= TESTIMONIALS.length - visible ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 16,
            }}
          >›</button>

        </div>
      </div>

      <style>{`
        .testimonial-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
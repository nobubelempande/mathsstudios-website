"use client";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialStrip() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
        'radial-gradient(circle at center, rgba(0,255,0,0.15), transparent 70%), url("/textures/rocky.png")',
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        padding: "70px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
<div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
          <h2
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              whiteSpace: "nowrap",
              letterSpacing: 0.3,
            }}
          >
            What Our Students Say
          </h2>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
        </div>
      </div>

      <div className="marquee-viewport">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />

        <div className="marquee-track">
          {looped.map((t, i) => (
            <div key={`${t.name}-${i}`} className="testimonial-card">
              <div style={{ color: "#f59e0b", fontSize: 13, letterSpacing: 2 }}>
                {"★".repeat(t.stars)}
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.35)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, #0a0a0a, transparent);
        }
        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, #0a0a0a, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }

        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 320px;
          flex-shrink: 0;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            width: 260px;
          }
          .marquee-fade {
            width: 40px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
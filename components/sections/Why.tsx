import { WHY_FEATURES, TESTIMONIALS } from "@/lib/constants";

export default function Why() {
  return (
    <section id="why" style={{ background: "#f9f9f7", padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="why-grid">
          {/* Left: features */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--green-light)", marginBottom: 14 }}>
              Why MathsStudios
            </p>
            <h2 style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 900, color: "var(--text-dark)", lineHeight: 1.18, marginBottom: 14, letterSpacing: "-0.3px" }}>
              Expert Tutors. Real Results.
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32 }}>
              Private one-on-one sessions or small group classes — structured around your child&apos;s needs, pace, and curriculum.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {WHY_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    background: ("highlight" in feat && feat.highlight) ? "var(--green-pale)" : "#ffffff",
                    padding: "18px 20px",
                    borderRadius: 8,
                    border: ("highlight" in feat && feat.highlight) ? "1px solid rgba(26,107,40,0.2)" : "1px solid var(--border)",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      flexShrink: 0,
                      background: ("highlight" in feat && feat.highlight) ? "rgba(26,107,40,0.08)" : "var(--off-white)",
                      borderRadius: 8,
                      border: ("highlight" in feat && feat.highlight) ? "1px solid rgba(26,107,40,0.2)" : "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: ("highlight" in feat && feat.highlight) ? "var(--green)" : "var(--text-dark)", marginBottom: 3 }}>
                      {feat.title}
                    </p>
                    <p style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: testimonials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid var(--border)",
                  borderLeft: "3px solid #2a2a2a",
                  borderRadius: 8,
                  padding: "20px 22px",
                  transition: "box-shadow .2s",
                }}
              >
                <div style={{ color: "#f59e0b", fontSize: 12, letterSpacing: 2, marginBottom: 8 }}>
                  {"★".repeat(t.stars)}
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-body)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 12 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: 12.5, fontWeight: 700, color: "var(--text-dark)" }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }
      `}</style>
    </section>
  );
}

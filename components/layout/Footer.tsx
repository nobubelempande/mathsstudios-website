import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { SITE, NAV_LINKS, SUBJECTS } from "@/lib/constants";

export default function Footer() {
  const subjectLinks = SUBJECTS.filter((s) => !("isMore" in s && s.isMore) && !s.featured).slice(0, 6);

  return (
    <footer style={{ background: "var(--text-dark)", fontFamily: '"Nunito", sans-serif' }}>
      {/* Top CTA band */}
      {/* <div
        style={{
          background: "var(--charcoal)",
          padding: "44px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>
            Ready to get started?
          </p>
          <h2 style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(20px, 2.2vw, 30px)", fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
            Give your child a{" "}
            <span style={{ color: "#6fcf83" }}>head start</span>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", flexShrink: 0 }}>
          <a
            href={`tel:${SITE.phone}`}
            style={{
              background: "var(--red)",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 6,
              fontSize: 14.5,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 20px rgba(196,30,30,0.35)",
            }}
          >
            📞 {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              padding: "13px 24px",
              borderRadius: 6,
              border: "1.5px solid rgba(255,255,255,0.25)",
              fontSize: 14.5,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ✉️ Email us
          </a>
        </div>
      </div> */}

      {/* Mid columns */}
      <div
        className="footer-mid-grid"
        style={{
          padding: "56px 5%",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr",
          gap: 40,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Brand */}
        <div style={{ paddingRight: 16 }}>
          <Logo height={44} />
          <p style={{ fontFamily: '"Merriweather",serif', fontSize: 12, fontStyle: "italic", color: "rgba(255,255,255,0.5)", margin: "14px 0 12px" }}>
            {SITE.tagline}
          </p>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
            Private one-on-one tutoring for 1–12 and Matric Re-Write. Operating for 10+ years.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 18 }}>
            Navigate
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`tel:${SITE.phone}`} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Enquire Now
              </a>
            </li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 18 }}>
            Subjects
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {subjectLinks.map((s) => (
              <li key={s.name}>
                <Link href="#subjects" style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#subjects" style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Matric Re-Write
              </Link>
            </li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 18 }}>
            Visit Us
          </p>
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{SITE.address.street}</p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{SITE.address.suburb}</p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{SITE.address.city}</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{SITE.hours.weekdays}</p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{SITE.hours.weekends}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.65)",
                fontSize: 12.5,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 5,
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Facebook
            </a>
            <a
              href={`mailto:${SITE.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.65)",
                fontSize: 12.5,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 5,
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: "18px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11.5,
          color: "rgba(255,255,255,0.2)",
          flexWrap: "wrap",
          gap: 8,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span>© {new Date().getFullYear()} MathsStudios. All rights reserved.</span>
        <span>www.mathsstudios.co.za</span>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-mid-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; padding: 44px 5% !important; }
        }
        @media (max-width: 480px) {
          .footer-mid-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; padding: 36px 4% !important; }
        }
      `}</style>
    </footer>
  );
}

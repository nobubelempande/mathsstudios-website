import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#0d1210", borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: '"Nunito", sans-serif' }}>

      {/* Main row */}
      <div className="footer-main">

        {/* Logo */}
        <div className="footer-logo">
          <Logo height={40} />
        </div>

        {/* Contact info */}
        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`} style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "block", marginBottom: 4 }}>
            📧 {SITE.email}
          </a>
          <a href={`tel:${SITE.phone}`} style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "block" }}>
            📞 {SITE.phoneDisplay}
          </a>
        </div>

        {/* Social icons */}
        <div className="footer-social">
          {/* Facebook */}
          <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" style={socialStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 500 }}
            >
              {l.label}
            </Link>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        padding: "16px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 11.5,
        color: "rgba(255,255,255,0.2)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <span>© {new Date().getFullYear()} MathsStudios. All rights reserved.</span>
        <span>www.mathsstudios.co.za</span>
      </div>

      <style>{`
        .footer-main {
          padding: 36px 5%;
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .footer-logo {
          flex-shrink: 0;
        }
        .footer-contact {
          flex: 1;
          min-width: 160px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-shrink: 0;
        }
        .footer-links {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .footer-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .footer-links {
            gap: 14px;
          }
        }
      `}</style>
    </footer>
  );
}

const socialStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "rgba(255,255,255,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};
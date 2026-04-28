"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 70,
          background: "black",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", height: 52 }}>
          <Logo height={52} />
        </Link>

        {/* Desktop nav */}
        <div className="nav-right-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: 14, fontWeight: 500, color: "white", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.1px", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            style={{
              background: "#1a7a2e",
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red)")}
          >
            Enquire Now
          </a>
        </div>

        {/* Burger */}
        <button
          id="navBurger"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="nav-burger-btn"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 28,
            height: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: 12,
          }}
        >
          <span style={{ display: "block", width: "100%", height: 2.5, background: "var(--text-dark)", borderRadius: 2 }} />
          <span style={{ display: "block", width: "100%", height: 2.5, background: "var(--text-dark)", borderRadius: 2 }} />
          <span style={{ display: "block", width: "100%", height: 2.5, background: "var(--text-dark)", borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 490,
          }}
        />
      )}

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 280,
          maxWidth: "85vw",
          background: "#fff",
          boxShadow: "-4px 0 40px rgba(0,0,0,0.18)",
          zIndex: 500,
          display: "flex",
          flexDirection: "column",
          padding: "28px 28px 40px",
          transform: drawerOpen ? "translateX(0)" : "translateX(110%)",
          transition: "transform .35s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <button
          onClick={closeDrawer}
          aria-label="Close menu"
          style={{
            alignSelf: "flex-end",
            width: 40,
            height: 40,
            background: "#f0f0ee",
            border: "1.5px solid #deded9",
            borderRadius: "50%",
            fontSize: 16,
            fontWeight: 700,
            color: "var(--text-dark)",
            cursor: "pointer",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <Logo height={44} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--text-dark)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            onClick={closeDrawer}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "var(--red)",
              color: "#fff",
              padding: "15px 24px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              marginTop: 28,
              boxShadow: "0 4px 16px rgba(185,28,28,0.3)",
            }}
          >
            📞 {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .nav-right-desktop { display: none !important; }
          .nav-burger-btn { display: flex !important; }
        }
        @media (max-width: 420px) {
          nav { height: 60px !important; padding: 0 4% !important; }
        }
          .nav-burger-btn span {
          background: #fff !important;
        }
      `}</style>
    </>
  );
}

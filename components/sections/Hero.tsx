"use client"
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/assetPath";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "80dvh",
        display: "flex",
        alignItems: "center",
        padding: "100px 2% 80px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/mathsstudios-website/videos/test.mp4" type="video/mp4" />
        </video> */}
        <img
    src="/mathsstudios-website/images/hero.jpg"
    alt="MathsStudios hero"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
       <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.05) 100%)",
  }}
/>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1.5px solid rgba(255,255,255,0.7)",
            borderRadius: 4,
            color: "#e8e4de",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase" as const,
            padding: "6px 14px",
            marginBottom: 28,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          Private lessons · Grades 1–12 · 10+ Years
        </div>

        <h1
          style={{
            fontFamily: '"Merriweather", serif',
            fontSize: "clamp(38px, 5vw, 68px)",
            fontWeight: 900,
            lineHeight: 1.08,
            color: "#f0ede8",
            marginBottom: 22,
            letterSpacing: "-0.5px",
            textShadow: "0 2px 12px rgba(0,0,0,0.7)",
          }}
        >
          Give Your Child A{" "}
          <em style={{ color: "#1a7a2e", fontStyle: "normal" }}>Head Start</em>
        </h1>

        <p
          style={{
            fontSize: 16.5,
            fontWeight: 400,
            lineHeight: 1.75,
            color: "#e8e4de",
            marginBottom: 36,
            maxWidth: 500,
            textShadow: "0 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          Private one-on-one and group tutoring for Grades 1–12 and Matric Re-Write.
        </p>

         <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
           <a href={`tel:${SITE.phone}`} style={{ background: "#1a7a2e", color: "#fff", fontFamily: '"Nunito", sans-serif', fontSize: 15, fontWeight: 700, padding: "13px 28px", borderRadius: 6, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 16px rgba(196,30,30,0.3)" }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
             {SITE.phoneDisplay}
           </a>
           <a href="#subjects" style={{ background: "var(--red)", color: "#fff", fontFamily: '"Nunito", sans-serif', fontSize: 15, fontWeight: 600, padding: "13px 26px", borderRadius: 6, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 16px rgba(196,30,30,0.3)"}}>
             See our subjects →
           </a>
         </div>
      </div>
    </section>
  );
}
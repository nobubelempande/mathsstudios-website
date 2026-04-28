const TRUST_ITEMS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#1a7a2e" opacity="0.15" />
        <path d="M8 20l4-4 3 3 5-6 4 4" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 24h12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    title: "Curriculum covered",
    desc: "CAPS, IEB, Cambridge, AS & A-Level — our tutors are trained across each one.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#f59e0b" opacity="0.12" />
        <path d="M16 8l2.5 5 5.5.8-4 3.9.95 5.5L16 20.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(245,158,11,0.2)" />
      </svg>
    ),
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    title: "10+ years of proven results",
    desc: "Reliable and dependable.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#818cf8" opacity="0.12" />
        <path d="M10 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="12" y="18" width="8" height="3" rx="1" stroke="#818cf8" strokeWidth="1.8" />
        <path d="M13 18v-1a3 3 0 016 0v1" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 22h14" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.2)",
    title: "Matric Upgrade specialists",
    desc: "Rebuild, refocus, and come back stronger. We have helped many succeed.",
  },
];

export default function TrustStrip() {
  return (
    <div
      style={{
        background: "#111",
        padding: "50px 5%",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "40px 60px",
          flexWrap: "wrap",
        }}
      >
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: 240,
              gap: 14,
            }}
          >
            {/* Coloured circle */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: item.bg,
                border: `1.5px solid ${item.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </div>

            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>
              {item.title}
            </p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginTop: -6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
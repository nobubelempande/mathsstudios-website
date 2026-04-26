import { CURRICULA } from "@/lib/constants";

export default function CurriculaStrip() {
  return (
    <div
      style={{
        background: "#1a7a2e",
        padding: "18px 5%",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }}
      >
        Curricula covered
      </span>
      {CURRICULA.map((c) => (
        <span
          key={c}
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            padding: "4px 14px",
            borderRadius: 4,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

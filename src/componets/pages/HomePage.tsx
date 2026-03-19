import type { FC } from "react";
import type { University, View, SharedProps } from "../../types";
import { universities, allRegions } from "../../data/universities";
import { UniversityCard } from "../ui/UniversityCard";

interface Props extends SharedProps {
  onNav: (v: View) => void;
  onViewUni: (u: University) => void;
}

export const HomePage: FC<Props> = ({ onNav, onViewUni, th, t, isMobile }) => {
  const totalDepts = universities.reduce((a, u) => a + u.departments.length, 0);

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      {/* ── Hero ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0f3d08 0%, #1a5c12 50%, #2d7a22 100%)",
          borderRadius: 16,
          padding: isMobile ? "28px 22px" : "52px 44px",
          color: "#fff",
          marginBottom: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            background: "rgba(255,255,255,0.04)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            opacity: 0.65,
            textTransform: "uppercase",
          }}
        >
          {t.heroTag}
        </p>
        <h1
          style={{
            margin: "0 0 12px",
            fontSize: isMobile ? 26 : 36,
            fontWeight: 900,
            lineHeight: 1.2,
            whiteSpace: "pre-line",
          }}
        >
          {t.heroTitle}
        </h1>
        <p
          style={{
            margin: "0 0 22px",
            fontSize: isMobile ? 13 : 15,
            opacity: 0.82,
            maxWidth: 500,
            lineHeight: 1.7,
          }}
        >
          {t.heroDesc}
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => onNav("search")}
            style={{
              background: "#fff",
              color: "#1a5c12",
              border: "none",
              borderRadius: 10,
              padding: isMobile ? "11px 18px" : "13px 24px",
              fontWeight: 800,
              fontSize: isMobile ? 13 : 14,
              cursor: "pointer",
            }}
          >
            🔍 {t.heroCTA1}
          </button>
          <button
            onClick={() => onNav("universities")}
            style={{
              background: "rgba(255,255,255,0.13)",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: 10,
              padding: isMobile ? "11px 18px" : "13px 24px",
              fontWeight: 700,
              fontSize: isMobile ? 13 : 14,
              cursor: "pointer",
            }}
          >
            🏛️ {t.heroCTA2}
          </button>
        </div>
      </div>

      {/* ── Stats ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 10,
          marginBottom: 24,
        }}
      >
        {(
          [
            ["🏛️", universities.length, t.statUniversities],
            ["📚", totalDepts, t.statDepartments],
            ["🗺️", allRegions.length, t.statRegions],
          ] as const
        ).map(([icon, val, label]) => (
          <div
            key={String(label)}
            style={{
              background: th.surface,
              border: `1px solid ${th.border}`,
              borderRadius: 12,
              padding: isMobile ? "14px 8px" : "20px 16px",
              textAlign: "center",
              boxShadow: th.shadow,
            }}
          >
            <div style={{ fontSize: isMobile ? 20 : 26, marginBottom: 4 }}>
              {icon}
            </div>
            <div
              style={{
                fontSize: isMobile ? 22 : 30,
                fontWeight: 900,
                color: "#2d7a22",
              }}
            >
              {val}
            </div>
            <div
              style={{
                fontSize: isMobile ? 10 : 13,
                color: th.textMuted,
                marginTop: 2,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Featured ── */}
      <h2
        style={{
          fontWeight: 800,
          fontSize: isMobile ? 17 : 20,
          color: th.text,
          marginBottom: 14,
        }}
      >
        {t.featuredTitle}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 14,
        }}
      >
        {universities.slice(0, isMobile ? 3 : 4).map((u) => (
          <UniversityCard
            key={u.id}
            university={u}
            onView={onViewUni}
            th={th}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};

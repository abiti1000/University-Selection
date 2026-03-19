import type { FC } from "react";
import type { University, View, SharedProps } from "../../types";
import { useUniversities } from "../../hooks/useUniversities";
import { UniversityCard } from "../ui/UniversityCard";

interface Props extends SharedProps {
  onNav: (v: View) => void;
  onViewUni: (u: University) => void;
}

export const HomePage: FC<Props> = ({ onNav, onViewUni, th, t, isMobile }) => {
  const { universities, loading } = useUniversities();

  const totalDepts = universities.reduce(
    (a, u) => a + (u.departments?.length ?? 0),
    0,
  );
  const allRegions = Array.from(new Set(universities.map((u) => u.region)));

  if (loading) return <p>Loading universities...</p>;

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      {/* Hero + Stats (same as your code) */}
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

      {/* Featured Universities */}
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

import type { FC } from "react";
import { useState, useMemo } from "react";
import type { University, SharedProps } from "../../types";
//import { universities, universities } from "../../data/universities";
import { useUniversities } from "../../hooks/useUniversities"; // ✅ ADD
import { UniversityCard } from "../ui/UniversityCard";
import { RegionPills } from "../ui/RegionPills";

interface Props extends SharedProps {
  onViewUni: (u: University) => void;
}

export const UniversitiesPage: FC<Props> = ({ onViewUni, th, t, isMobile }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  // ✅ ADD — fetch from Supabase
  const { universities, loading, error } = useUniversities();

  const filtered = useMemo(
    () =>
      universities.filter(
        (u) =>
          (region === "All" || u.region === region) &&
          (!search ||
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.city.toLowerCase().includes(search.toLowerCase())),
      ),
    [search, region, universities], // ✅ ADD universities to deps
  );

  const inputStyle = {
    width: "100%",
    background: th.inputBg,
    border: `1.5px solid ${th.border}`,
    color: th.text,
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
  };

  // ✅ ADD — loading and error states
  if (loading)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          color: th.textMuted,
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 12 }}>🏛️</div>
        <p>Loading universities…</p>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: "red" }}>
        <p>Failed to load: {error}</p>
      </div>
    );

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      <div style={{ marginBottom: 18 }}>
        <h2
          style={{
            fontWeight: 800,
            fontSize: isMobile ? 20 : 26,
            margin: "0 0 3px",
            color: th.text,
          }}
        >
          {t.uniPageTitle}
        </h2>
        <p style={{ color: th.textMuted, margin: 0, fontSize: 13 }}>
          {t.uniPageDesc(universities.length)} {/* ✅ now uses live count */}
        </p>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`🔍 ${t.searchUniPlaceholder}`}
        style={{ ...inputStyle, marginBottom: 14 }}
        onFocus={(e) =>
          ((e.target as HTMLInputElement).style.borderColor = "#2d7a22")
        }
        onBlur={(e) =>
          ((e.target as HTMLInputElement).style.borderColor = th.border)
        }
      />

      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: th.textMuted,
          marginBottom: 8,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        📍 {t.filterByRegion}
      </p>
      <div style={{ marginBottom: 20 }}>
        {/* ✅ Pass live universities so RegionPills derives regions from real data */}
        <RegionPills
          universities={universities}
          selected={region}
          onSelect={setRegion}
          th={th}
          t={t}
        />
      </div>

      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {filtered.map((u) => (
            <UniversityCard
              key={u.id}
              university={u}
              onView={onViewUni}
              th={th}
              t={t}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "50px 20px",
            color: th.textMuted,
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 10 }}>🏛️</div>
          <p>{t.noUnisFound}</p>
        </div>
      )}
    </div>
  );
};

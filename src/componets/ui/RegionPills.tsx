import type { FC } from "react";
import type { University, Theme, Translations } from "../../types";
// ❌ REMOVE: import { allRegions } from '../../data/universities'

interface Props {
  universities: University[]; // ✅ ADD — receive live data
  selected: string;
  onSelect: (r: string) => void;
  th: Theme;
  t: Translations;
}

export const RegionPills: FC<Props> = ({
  universities,
  selected,
  onSelect,
  th,
  t,
}) => {
  // ✅ Derive regions from live data instead of static import
  const regions = [...new Set(universities.map((u) => u.region))].sort();

  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {["All", ...regions].map((r) => {
        const active = selected === r;
        return (
          <button
            key={r}
            onClick={() => onSelect(r)}
            style={{
              background: active ? "#2d7a22" : th.pillBg,
              color: active ? "#fff" : th.pillText,
              border: `1.5px solid ${active ? "#2d7a22" : th.border}`,
              borderRadius: 24,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.18s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (!active) {
                (e.currentTarget as HTMLElement).style.borderColor = "#2d7a22";
                (e.currentTarget as HTMLElement).style.color = "#2d7a22";
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                (e.currentTarget as HTMLElement).style.borderColor = th.border;
                (e.currentTarget as HTMLElement).style.color = th.pillText;
              }
            }}
          >
            {r === "All" ? t.allRegions : r}
          </button>
        );
      })}
    </div>
  );
};

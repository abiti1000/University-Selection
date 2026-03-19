import type { FC } from "react";
import type { University, Theme, Translations } from "../../types";
import { Badge } from "./Badge";

interface Props {
  university: University;
  onView: (u: University) => void;
  th: Theme;
  t: Translations;
}

export const UniversityCard: FC<Props> = ({ university: u, onView, th, t }) => (
  <div
    style={{
      background: th.surface,
      border: `1px solid ${th.border}`,
      borderRadius: 16,
      padding: 18,
      boxShadow: th.shadow,
      transition: "all 0.2s",
      display: "flex",
      flexDirection: "column",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "translateY(-2px)";
      el.style.boxShadow = th.shadowLg;
      el.style.borderColor = "#2d7a22";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "";
      el.style.boxShadow = th.shadow;
      el.style.borderColor = th.border;
    }}
  >
    {/* Header */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          fontSize: 28,
          flexShrink: 0,
          background: th.accentBg,
          borderRadius: 10,
          width: 46,
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${th.accentBorder}`,
        }}
      >
        {u.logo}
      </div>
      <div style={{ minWidth: 0 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 800,
            color: th.text,
            lineHeight: 1.25,
          }}
        >
          {u.name}
        </h3>
        <p style={{ margin: "3px 0 0", fontSize: 12, color: th.textMuted }}>
          📍 {u.city}, {u.region}
        </p>
      </div>
    </div>

    <p
      style={{
        margin: "0 0 12px",
        fontSize: 13,
        color: th.textSubtle,
        lineHeight: 1.6,
        flex: 1,
      }}
    >
      {u.description}
    </p>

    <div
      style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}
    >
      <Badge color="green" th={th}>
        {t.publicLabel}
      </Badge>
      <Badge color="blue" th={th}>
        {t.established} {u.established}
      </Badge>
      <Badge color="purple" th={th}>
        {u.departments?.length || 0} {t.departments}
      </Badge>
    </div>

    <button
      onClick={() => onView(u)}
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #2d7a22, #1f5c18)",
        color: "#fff",
        border: "none",
        borderRadius: 10,
        padding: "11px 0",
        fontWeight: 700,
        fontSize: 13,
        cursor: "pointer",
        transition: "opacity 0.15s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.opacity = "0.88")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.opacity = "1")
      }
    >
      {t.viewDepts} →
    </button>
  </div>
);

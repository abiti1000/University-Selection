import { useState, type FC } from "react";
import type { Department, Theme, Translations } from "../../types";
import { Badge } from "./Badge";

interface Props {
  dept: Department;
  th: Theme;
  t: Translations;
  index: number;
}

export const DepartmentRow: FC<Props> = ({ dept, th, t, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: `1px solid ${th.border}`,
        animationDelay: `${index * 20}ms`,
        animation: "fadeSlideIn 0.3s ease both",
      }}
    >
      {/* Header row */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "13px 16px",
          cursor: "pointer",
          background: open ? th.accentBg : "transparent",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => {
          if (!open)
            (e.currentTarget as HTMLElement).style.background = th.surfaceHover;
        }}
        onMouseLeave={(e) => {
          if (!open)
            (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: th.text,
              lineHeight: 1.3,
            }}
          >
            {dept.name}
          </div>
          <div
            style={{
              fontSize: 11,
              color: th.textMuted,
              marginTop: 3,
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Badge color="blue" th={th}>
              {dept.degree}
            </Badge>
            <span>
              ⏱ {dept.duration} {t.years}
            </span>
            <span>👥 {dept.seats}</span>
          </div>
        </div>

        <span
          style={{
            fontSize: 14,
            color: th.textMuted,
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          ▾
        </span>
      </div>

      {/* Expanded detail */}
      {open && (
        <div
          style={{
            padding: "0 16px 16px",
            background: th.accentBg,
            borderTop: `1px dashed ${th.accentBorder}`,
            animation: "expandIn 0.2s ease",
          }}
        >
          <p
            style={{
              margin: "12px 0 10px",
              fontSize: 13,
              color: th.textSubtle,
              lineHeight: 1.65,
            }}
          >
            {dept.description}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: th.accentText,
                whiteSpace: "nowrap",
              }}
            >
              💼 {t.careerPaths}:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {dept.careers.map((c) => (
                <Badge key={c} color="green" th={th}>
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

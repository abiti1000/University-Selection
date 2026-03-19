import { useState, type FC } from "react";
import type { Department, Theme, Translations } from "../../types";
import { DepartmentRow } from "./DepartmentRow";

interface Props {
  faculty: string;
  departments: Department[];
  th: Theme;
  t: Translations;
}

export const FacultyGroup: FC<Props> = ({ faculty, departments, th, t }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        border: `1px solid ${th.border}`,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: th.shadow,
      }}
    >
      {/* Faculty header */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "11px 16px",
          background: th.surface,
          cursor: "pointer",
          borderBottom: open ? `1px solid ${th.border}` : "none",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = th.surfaceHover)
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = th.surface)
        }
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}
        >
          <span style={{ flexShrink: 0 }}>📂</span>
          <span
            style={{
              fontWeight: 700,
              fontSize: 13,
              color: th.text,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {faculty}
          </span>
          <span
            style={{
              background: th.tagBg,
              color: th.tagText,
              borderRadius: 12,
              padding: "2px 7px",
              fontSize: 11,
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {departments.length}
          </span>
        </div>

        <span
          style={{
            fontSize: 12,
            color: th.textMuted,
            flexShrink: 0,
            marginLeft: 8,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          ▾
        </span>
      </div>

      {open && (
        <div style={{ background: th.surface }}>
          {departments.map((d, i) => (
            <DepartmentRow key={d.id} dept={d} th={th} t={t} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

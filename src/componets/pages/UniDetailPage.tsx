import type { FC } from "react";
import type { University, Department, SharedProps } from "../../types"; // ← import Department as TYPE
import { Badge } from "../ui/Badge";
import { FacultyGroup } from "../ui/FacultyGroup";
import { useDepartments } from "../../hooks/useUseDepartmennts";

interface Props extends SharedProps {
  university: University;
  onBack: () => void;
}

export const UniDetailPage: FC<Props> = ({
  university: u,
  onBack,
  th,
  t,
  isMobile,
}) => {
  // ✅ Hook called inside component, passing u.id (number), not the whole object
  const { departments, loading } = useDepartments(u.id);

  // ✅ Use departments from hook, not u.departments
  const grouped = departments.reduce<Record<string, Department[]>>((acc, d) => {
    if (!acc[d.faculty]) acc[d.faculty] = [];
    acc[d.faculty].push(d);
    return acc;
  }, {});

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      <button
        onClick={onBack}
        style={{
          background: th.pillBg,
          border: `1px solid ${th.border}`,
          borderRadius: 8,
          padding: "8px 14px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 13,
          color: th.textMuted,
          marginBottom: 18,
          fontFamily: "inherit",
        }}
      >
        {t.back}
      </button>

      {/* University info card */}
      <div
        style={{
          background: th.surface,
          border: `1px solid ${th.border}`,
          borderRadius: 14,
          padding: isMobile ? 16 : 24,
          marginBottom: 20,
          boxShadow: th.shadow,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontSize: 32,
              background: th.accentBg,
              borderRadius: 12,
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${th.accentBorder}`,
              flexShrink: 0,
            }}
          >
            {u.logo}
          </div>
          <div style={{ minWidth: 0 }}>
            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? 17 : 22,
                fontWeight: 900,
                color: th.text,
                lineHeight: 1.2,
              }}
            >
              {u.name}
            </h2>
            <p style={{ margin: "3px 0 0", fontSize: 12, color: th.textMuted }}>
              📍 {u.city}, {u.region} · {t.established} {u.established}
            </p>
          </div>
        </div>

        <p
          style={{
            color: th.textSubtle,
            lineHeight: 1.7,
            marginBottom: 12,
            fontSize: 13,
          }}
        >
          {u.description}
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Badge color="green" th={th}>
            {t.publicLabel}
          </Badge>
          {/* ✅ Use departments.length from hook, not u.departments.length */}
          <Badge color="purple" th={th}>
            {departments.length} {t.departments}
          </Badge>
          <Badge color="blue" th={th}>
            🌐 {u.website}
          </Badge>
        </div>
      </div>

      <h3
        style={{
          fontWeight: 800,
          fontSize: isMobile ? 15 : 18,
          color: th.text,
          margin: "0 0 12px",
        }}
      >
        📚 {t.availableDepts}
      </h3>

      {/* ✅ Show loading state while fetching */}
      {loading ? (
        <p style={{ color: th.textMuted, fontSize: 14 }}>
          Loading departments…
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Object.entries(grouped).map(([faculty, depts]) => (
            <FacultyGroup
              key={faculty}
              faculty={faculty}
              departments={depts}
              th={th}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  );
};

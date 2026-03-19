import { useState, useMemo, type FC } from "react";
import type { SharedProps } from "../../types";
import { universities, allFaculties } from "../../data/universities";
import { Badge } from "../ui/Badge";
import { RegionPills } from "../ui/RegionPills";

export const SearchPage: FC<SharedProps> = ({ th, t, isMobile }) => {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("All");
  const [region, setRegion] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const results = useMemo(() => {
    if (!query && faculty === "All" && region === "All") return [];
    const out: {
      dept: (typeof universities)[0]["departments"][0];
      uni: (typeof universities)[0];
    }[] = [];
    universities.forEach((uni) => {
      if (region !== "All" && uni.region !== region) return;
      uni.departments.forEach((dept) => {
        const mQ =
          !query ||
          dept.name.toLowerCase().includes(query.toLowerCase()) ||
          uni.name.toLowerCase().includes(query.toLowerCase()) ||
          dept.faculty.toLowerCase().includes(query.toLowerCase());
        const mF = faculty === "All" || dept.faculty === faculty;
        if (mQ && mF) out.push({ dept, uni });
      });
    });
    return out;
  }, [query, faculty, region]);

  const baseInput = {
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
          {t.deptPageTitle}
        </h2>
        <p style={{ color: th.textMuted, margin: 0, fontSize: 13 }}>
          {t.deptPageDesc}
        </p>
      </div>

      {/* Filters card */}
      <div
        style={{
          background: th.surface,
          borderRadius: 12,
          padding: 16,
          border: `1px solid ${th.border}`,
          marginBottom: 20,
          boxShadow: th.shadow,
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`🔍 ${t.searchDeptPlaceholder}`}
          style={{ ...baseInput, marginBottom: 10 }}
          onFocus={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "#2d7a22")
          }
          onBlur={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = th.border)
          }
        />

        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          style={{ ...baseInput, marginBottom: 12 }}
        >
          <option value="All">{t.allFaculties}</option>
          {allFaculties.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

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
        <RegionPills
          universities={universities}
          selected={region}
          onSelect={setRegion}
          th={th}
          t={t}
        />
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <>
          <p
            style={{
              color: th.textMuted,
              marginBottom: 12,
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {t.resultsFound(results.length)}
          </p>
          <div
            style={{
              border: `1px solid ${th.border}`,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: th.shadow,
            }}
          >
            {results.map(({ dept, uni }, i) => {
              const exp = expandedId === dept.id;
              return (
                <div
                  key={`${uni.id}-${dept.id}`}
                  style={{
                    borderBottom:
                      i < results.length - 1
                        ? `1px solid ${th.border}`
                        : "none",
                    background: exp ? th.accentBg : th.surface,
                    transition: "background 0.15s",
                  }}
                >
                  <div
                    onClick={() => setExpandedId(exp ? null : dept.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "13px 16px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!exp)
                        (e.currentTarget as HTMLElement).style.background =
                          th.surfaceHover;
                    }}
                    onMouseLeave={(e) => {
                      if (!exp)
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: th.text,
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
                          gap: 6,
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        <Badge color="blue" th={th}>
                          {dept.degree}
                        </Badge>
                        <span
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          🏛️ {isMobile ? uni.shortName : uni.name}
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        color: th.textMuted,
                        flexShrink: 0,
                        transform: exp ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                        display: "inline-block",
                      }}
                    >
                      ▾
                    </span>
                  </div>

                  {exp && (
                    <div
                      style={{
                        padding: "0 16px 16px",
                        borderTop: `1px dashed ${th.accentBorder}`,
                        animation: "expandIn 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: th.textMuted,
                          marginBottom: 8,
                        }}
                      >
                        📍 {uni.name} · {dept.faculty} · ⏱ {dept.duration}{" "}
                        {t.years} · 👥 {dept.seats}
                      </div>
                      <p
                        style={{
                          margin: "0 0 10px",
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
                        <div
                          style={{ display: "flex", flexWrap: "wrap", gap: 5 }}
                        >
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
            })}
          </div>
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "50px 20px",
            color: th.textMuted,
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p
            style={{
              fontSize: 14,
              maxWidth: 320,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {t.noResults}
          </p>
        </div>
      )}
    </div>
  );
};

import type { FC } from "react";
import type { View, Theme, Translations } from "../../types";

interface Props {
  view: View;
  onNav: (v: View) => void;
  th: Theme;
  t: Translations;
}

const ITEMS: [View, string, string][] = [
  ["home", "🏠", ""],
  ["universities", "🏛️", ""],
  ["search", "🔍", ""],
];

export const BottomNav: FC<Props> = ({ view, onNav, th, t }) => {
  const labels = [t.navHome, t.navUniversities, t.navSearch];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: th.headerBg,
        borderTop: `1px solid ${th.border}`,
        display: "flex",
        zIndex: 400,
        boxShadow: "0 -4px 16px rgba(0,0,0,0.1)",
      }}
    >
      {ITEMS.map(([v, icon], i) => (
        <button
          key={v}
          onClick={() => onNav(v)}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 4px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: view === v ? "#2d7a22" : th.textMuted,
            transition: "color 0.15s",
            gap: 2,
          }}
        >
          <span style={{ fontSize: 20 }}>{icon}</span>
          <span style={{ fontSize: 10, fontWeight: 600 }}>{labels[i]}</span>
        </button>
      ))}
    </nav>
  );
};

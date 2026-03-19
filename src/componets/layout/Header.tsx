import type { FC } from "react";
import type { View, Theme, Translations, Language } from "../../types";
import { LanguageToggle } from "../ui/LanguageToggle";

interface Props {
  view: View;
  onNav: (v: View) => void;
  lang: Language;
  setLang: (l: Language) => void;
  dark: boolean;
  toggleDark: () => void;
  th: Theme;
  t: Translations;
  isMobile: boolean;
}

export const Header: FC<Props> = ({
  view,
  onNav,
  lang,
  setLang,
  dark,
  toggleDark,
  th,
  t,
  isMobile,
}) => {
  const navItems: [View, string][] = [
    ["home", t.navHome],
    ["universities", t.navUniversities],
    ["search", t.navSearch],
  ];

  return (
    <header
      style={{
        background: th.headerBg,
        borderBottom: `1px solid ${th.border}`,
        position: "sticky",
        top: 0,
        zIndex: 300,
        boxShadow: dark
          ? "0 1px 12px rgba(0,0,0,0.5)"
          : "0 1px 6px rgba(26,60,20,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => onNav("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 20 }}>🇪🇹🌟</span>
          <span
            style={{
              fontWeight: 900,
              fontSize: 15,
              color: th.text,
              letterSpacing: "-0.02em",
            }}
          >
            {t.appName}
          </span>
          <span style={{ fontWeight: 500, fontSize: 11, color: "#2d7a22" }}>
            {t.tagline}
          </span>
        </div>

        {/* Desktop nav tabs */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 2 }}>
            {navItems.map(([v, label]) => (
              <button
                key={v}
                onClick={() => onNav(v)}
                style={{
                  background: view === v ? "#2d7a22" : "transparent",
                  color: view === v ? "#fff" : th.textMuted,
                  border: "none",
                  borderRadius: 8,
                  padding: "7px 13px",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {/* Right controls */}
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <LanguageToggle
            lang={lang}
            setLang={setLang}
            th={th}
            compact={isMobile}
          />
          <button
            onClick={toggleDark}
            style={{
              background: th.pillBg,
              border: `1px solid ${th.border}`,
              borderRadius: 7,
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: 14,
              color: th.textMuted,
            }}
          >
            {dark ? t.lightMode : t.darkMode}
          </button>
        </div>
      </div>
    </header>
  );
};

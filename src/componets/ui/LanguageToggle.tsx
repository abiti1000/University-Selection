import type { FC } from "react";
import type { Language, Theme } from "../../types";

const LANGS: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "am", label: "አማ", flag: "🇪🇹" },
  { code: "or", label: "ORO", flag: "🌿" },
];

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
  th: Theme;
  compact?: boolean;
}

export const LanguageToggle: FC<Props> = ({
  lang,
  setLang,
  th,
  compact = false,
}) => (
  <div
    style={{
      display: "flex",
      gap: 2,
      background: th.bg,
      borderRadius: 9,
      padding: 2,
      border: `1px solid ${th.border}`,
    }}
  >
    {LANGS.map(({ code, label, flag }) => (
      <button
        key={code}
        onClick={() => setLang(code)}
        style={{
          background: lang === code ? "#2d7a22" : "transparent",
          color: lang === code ? "#fff" : th.textMuted,
          border: "none",
          borderRadius: 6,
          padding: compact ? "4px 6px" : "5px 8px",
          fontWeight: 700,
          fontSize: 10,
          cursor: "pointer",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        {flag}
        {!compact && ` ${label}`}
      </button>
    ))}
  </div>
);

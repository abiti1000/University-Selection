import type { FC } from "react";
import type { Theme } from "../../types";

export const Footer: FC<{ th: Theme }> = ({ th }) => (
  <footer
    style={{
      borderTop: `1px solid ${th.border}`,
      padding: "18px 24px",
      textAlign: "center",
      color: th.textMuted,
      fontSize: 12,
      background: th.headerBg,
    }}
  >
    💌 UniGuide Ethiopia — Helping students find their path · 2025
  </footer>
);

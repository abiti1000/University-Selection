import type { FC, ReactNode } from "react";
import type { BadgeColor, Theme } from "../../types";

interface Props {
  children: ReactNode;
  color?: BadgeColor;
  th: Theme;
}

export const Badge: FC<Props> = ({ children, color = "green", th }) => {
  const map: Record<BadgeColor, [string, string]> = {
    green: th.bGreen,
    blue: th.bBlue,
    amber: th.bAmber,
    purple: th.bPurple,
  };
  const [bg, fg] = map[color];
  return (
    <span
      style={{
        background: bg,
        color: fg,
        padding: "3px 9px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {children}
    </span>
  );
};

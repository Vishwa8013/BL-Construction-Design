import { Link } from "react-router";

type LogoProps = {
  to?: string;
  compact?: boolean;
  light?: boolean;
};

export function Logo({ to = "/", compact = false, light = false }: LogoProps) {
  const primaryColor = light ? "#F8F3EA" : "#1F2933";
  const accentColor = light ? "#D8B07A" : "#B88A52";

  const content = (
    <div
      className="flex items-center"
      style={{ gap: compact ? "0.65rem" : "0.85rem" }}
    >
      <svg
        width={compact ? "44" : "56"}
        height={compact ? "44" : "56"}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect x="34" y="53" width="45" height="8" rx="2" stroke={primaryColor} strokeWidth="4" />
        <rect x="52" y="33" width="27" height="20" rx="2" stroke={primaryColor} strokeWidth="4" />
        <path d="M16 56L49 27V61" stroke={accentColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M61 43H72" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
        <path d="M61 49H72" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: compact ? "1.3rem" : "1.6rem",
            color: primaryColor,
            letterSpacing: "-0.04em",
          }}
        >
          BL
        </div>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: compact ? "0.58rem" : "0.68rem",
            color: light ? "#E7D5BA" : "#5E6770",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Design & Construction
        </div>
      </div>
    </div>
  );

  return (
    <Link to={to} className="group" style={{ textDecoration: "none" }}>
      {content}
    </Link>
  );
}

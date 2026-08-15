import { Circle } from "lucide-react";
import gfgLogo from "../assets/gfg_logo.png";
import { community } from "../data/hiring";

type GfgMarkProps = {
  size?: "small" | "large";
};

type CampusLogoProps = {
  size?: "header" | "footer";
};

export function GfgMark({ size = "small" }: GfgMarkProps) {
  return (
    <span className={`gfg-mark gfg-mark-${size}`} aria-hidden="true">
      <span className="gfg-loop gfg-loop-left" />
      <span className="gfg-loop gfg-loop-right" />
    </span>
  );
}

export function CampusLogo({ size = "header" }: CampusLogoProps) {
  return (
    <img
      className={`campus-logo campus-logo-${size}`}
      src={gfgLogo}
      alt="GeeksforGeeks Chandigarh University"
    />
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="/" aria-label={`${community.name} hiring home`}>
        <CampusLogo />
      </a>

      <a className="hiring-badge" href={community.formHref} target="_blank" rel="noreferrer">
        <Circle size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        <span>{community.badge}</span>
      </a>
    </header>
  );
}

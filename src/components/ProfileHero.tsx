import { BadgeCheck, Code2, Rocket, UsersRound, Zap } from "lucide-react";
import gfgLogo from "../assets/GFG_logo_dark.png";
import { community } from "../data/hiring";

export function ProfileHero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-code-bubble" aria-hidden="true">
        <Code2 size={34} />
      </div>
      <div className="hero-people-bubble" aria-hidden="true">
        <UsersRound size={34} />
      </div>
      <div className="hero-bolt" aria-hidden="true">
        <Zap size={24} />
      </div>

      <div className="hero-logo-orbit" aria-hidden="true">
        <img className="hero-gfg-logo" src={gfgLogo} alt="GeeksforGeeks logo" />
        <span className="hero-verified">
          <BadgeCheck size={28} fill="currentColor" />
        </span>
      </div>

      <div className="hero-copy">
        <p className="hero-eyebrow">
          GFG CBCU <span>Community</span>
        </p>
        <h1 id="hero-title">
          <span>We're Hiring!</span>
          <Rocket size={60} strokeWidth={2.2} aria-hidden="true" />
        </h1>
        <p className="hero-subtitle">{community.subheadline}</p>
      </div>

      <div className="recruitment-pill">
        <span aria-hidden="true" />
        {community.status}
      </div>
    </section>
  );
}

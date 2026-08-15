import type { CSSProperties } from "react";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  ExternalLink,
  Handshake,
  Megaphone,
  Paintbrush,
  UsersRound,
} from "lucide-react";
import type { HiringTeam, TeamIcon } from "../data/hiring";

const iconMap: Record<TeamIcon, typeof UsersRound> = {
  calendar: CalendarDays,
  code: Code2,
  content: Megaphone,
  design: Paintbrush,
  outreach: Handshake,
  people: UsersRound,
};

type HiringCardProps = {
  team: HiringTeam;
};

export function HiringCard({ team }: HiringCardProps) {
  const Icon = iconMap[team.icon];
  const style = {
    "--team-accent": team.accent,
    "--team-accent-soft": team.accentSoft,
  } as CSSProperties;

  return (
    <article className="team-card" style={style}>
      <span className="team-accent-line" aria-hidden="true" />
      <div className="team-icon" aria-hidden="true">
        <Icon size={40} strokeWidth={2.25} />
      </div>

      <div className="team-copy">
        <div className="team-title-row">
          <h3>{team.title}</h3>
          <span>Core Team</span>
        </div>
        <p>{team.description}</p>
      </div>

      <div className="team-actions">
        <a className="apply-button" href={team.href} target="_blank" rel="noreferrer">
          <span>Apply Now</span>
          <ArrowRight size={22} aria-hidden="true" />
        </a>
        <a className="form-link" href={team.href} target="_blank" rel="noreferrer">
          Google Form
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

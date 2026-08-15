import { Github, Globe2, Heart, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { socialLinks, type SocialLink } from "../data/hiring";

const iconMap: Record<SocialLink["icon"], typeof Github> = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  website: Globe2,
  whatsapp: MessageCircle,
};

export function SocialLinks() {
  return (
    <section className="connect-section" aria-labelledby="connect-heading">
      <div className="section-kicker">
        <span />
        <h2 id="connect-heading">Connect With Us</h2>
        <Heart size={16} fill="currentColor" aria-hidden="true" />
      </div>

      <nav className="social-links" aria-label="Social links">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];

          return (
            <a
              key={link.label}
              className="social-button"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <Icon size={30} strokeWidth={2.2} aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </nav>
    </section>
  );
}

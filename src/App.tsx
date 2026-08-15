import { ArrowRight, Sparkles, Zap } from "lucide-react";
import communityTeamImage from "./assets/community-team.png";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HiringCard } from "./components/HiringCard";
import { ProfileHero } from "./components/ProfileHero";
import { SocialLinks } from "./components/SocialLinks";
import { community, hiringTeams } from "./data/hiring";

export default function App() {
  return (
    <>
      <div className="background-art" aria-hidden="true">
        <span className="grid-left" />
        <span className="ring-left" />
        <span className="ring-right" />
        <span className="circuit-one" />
        <span className="circuit-two" />
      </div>

      <Header />

      <main className="page-shell">
        <ProfileHero />

        <section className="teams-section" aria-labelledby="teams-heading">
          <div className="teams-heading">
            <Sparkles size={22} aria-hidden="true" />
            <div>
              <h2 id="teams-heading">Explore Community Teams</h2>
              <p>Choose a team that matches your passion and make an impact!</p>
            </div>
            <Sparkles size={22} aria-hidden="true" />
          </div>

          <div className="teams-list">
            {hiringTeams.map((team) => (
              <HiringCard key={team.title} team={team} />
            ))}
          </div>
        </section>

        <section className="cta-card" aria-labelledby="cta-heading">
          <img src={communityTeamImage} alt="" className="cta-image" />
          <div className="cta-copy">
            <h2 id="cta-heading">
              Be a Part of Something <span>Bigger!</span>
            </h2>
            <p>
              GFG CUSB Community is more than a team. It's a family of passionate individuals
              building the future together.
            </p>
            {/* <a className="cta-button" href={community.formHref} target="_blank" rel="noreferrer">
              <span>Apply Now</span>
              <ArrowRight size={20} aria-hidden="true" />
            </a> */}
          </div>
          <p className="cta-note">Your journey starts here!</p>
        </section>

        <aside className="notice-card">
          <span className="notice-icon" aria-hidden="true">
            <Zap size={28} fill="currentColor" />
          </span>
          <p>
            Applications are reviewed by the GFG CUSB team. Make sure you submit the{" "}
            <strong>correct form</strong> for the role you're applying for.
          </p>
        </aside>

        <SocialLinks />
      </main>

      <Footer />
    </>
  );
}

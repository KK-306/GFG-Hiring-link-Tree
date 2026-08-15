import { Code2, Heart } from "lucide-react";
import { community } from "../data/hiring";
import { CampusLogo } from "./Header";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <CampusLogo size="footer" />
      </div>

      <p className="footer-love">
        Made with <Heart size={14} fill="currentColor" aria-hidden="true" /> by {community.name}
      </p>

      <p className="footer-code">
        <span>Copyright 2026 {community.name}. All rights reserved.</span>
        <Code2 size={24} aria-hidden="true" />
      </p>
    </footer>
  );
}

export type TeamIcon =
  | "calendar"
  | "code"
  | "content"
  | "design"
  | "mic"
  | "outreach"
  | "people";

export type HiringTeam = {
  title: string;
  description: string;
  href: string;
  icon: TeamIcon;
  accent: string;
  accentSoft: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "instagram" | "linkedin" | "website" | "whatsapp";
};

export const community = {
  name: "GFG CBCU",
  university: "Chandigarh University",
  badge: "Community Hiring 2026",
  eyebrow: "GFG CBCU Community",
  headline: "We're Hiring!",
  subheadline:
    "Join our vibrant community of developers, creators, leaders and innovators. Build real impact. Learn together. Grow together.",
  status: "Recruitment Open",
  formHref: "https://forms.gle/replace-with-your-form",
};

export const hiringTeams: HiringTeam[] = [
  {
    title: "Technical Community",
    description:
      "Organize tech sessions, workshops, hackathons and empower developers and tech enthusiasts.",
    href: "https://forms.gle/YhVaouSZ2tcvkfBT9",
    icon: "code",
    accent: "#22d3c6",
    accentSoft: "rgba(34, 211, 198, 0.16)",
  },
  {
    title: "Design & Creative",
    description:
      "Create engaging visuals, brand assets and craft beautiful experiences for our community.",
    href: "https://forms.gle/AeuBbAJRYXFphtDm8",
    icon: "design",
    accent: "#f6bf2e",
    accentSoft: "rgba(246, 191, 46, 0.18)",
  },
  {
    title: "Content & Media",
    description:
      "Create content that informs, educates and inspires. Blogs, reels, posts and more.",
    href: "https://forms.gle/q4Pq8CEJseuZJYij9",
    icon: "content",
    accent: "#b763ff",
    accentSoft: "rgba(183, 99, 255, 0.16)",
  },
  {
    title: "Outreach & Partnerships",
    description:
      "Collaborate with communities, sponsors and partners to create meaningful opportunities.",
    href: "https://forms.gle/454LKUdgQ6FzBoBP6",
    icon: "outreach",
    accent: "#ff4ea1",
    accentSoft: "rgba(255, 78, 161, 0.16)",
  },
  {
    title: "Events & Operations",
    description:
      "Plan, manage and execute amazing events that bring our community together.",
    href: "https://forms.gle/J7b9q9LaH23gfefu7",
    icon: "calendar",
    accent: "#6c7dff",
    accentSoft: "rgba(108, 125, 255, 0.16)",
  },
  {
    title: "Anchors & Hosts",
    description:
      "Host events, moderate sessions, anchor live stages and energize our community.",
    href: "https://forms.gle/wT4tMJQNrx9rYQvFA",
    icon: "mic",
    accent: "#ff7b39",
    accentSoft: "rgba(255, 123, 57, 0.16)",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gfg.cu/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/geeksforgeeks-campus-body-cu/",
    icon: "linkedin",
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/I00TjbramNj3eFV841tYzL",
    icon: "whatsapp",
  },
  {
    label: "Website",
    href: "https://geeksforgeekscbcu.vercel.app/",
    icon: "website",
  },
];

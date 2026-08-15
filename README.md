# 🚀 GFG CUSB Hiring Portal

> **Build. Lead. Create. Grow.**

The **GFG CUSB Hiring Portal** is a modern, mobile-first recruitment landing page built for the **GeeksforGeeks CUSB Community**.

It provides students with a simple and polished way to explore open community roles and apply through Google Forms.

---

## ✨ Features

* 🟢 **GFG-inspired branding**
* 📱 **Mobile-first responsive design**
* 💻 Desktop-friendly centered layout
* 🎯 Dedicated recruitment cards for each team
* 🔗 Direct Google Form application links
* 🌐 Social media & community links
* 🎨 Modern UI with subtle glassmorphism
* ✨ Smooth hover and entrance animations
* ♿ Accessible navigation and focus states
* 🔒 Secure external links using `noopener noreferrer`
* ⚡ Lightweight single-page experience
* 🔧 Centralized configuration for easy updates
* 🔍 SEO-ready metadata

---

## 🧩 Available Teams

The portal currently supports recruitment for:

| Team                      | Focus                                   |
| ------------------------- | --------------------------------------- |
| 🎤 Anchoring & Hosting    | Hosting, communication & stage presence |
| 💻 Technical              | Development, websites & automation      |
| 🎨 Design & Creative      | Posters, branding & visual content      |
| 📱 Social Media & Content | Content creation & social presence      |
| 📢 Marketing & Outreach   | Promotions & collaborations             |
| 🤝 Event Management       | Planning & execution of events          |

---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **Lucide React**
* **HTML5**
* **CSS3**

---

## 📁 Project Structure

```text
gfg-hiring-portal/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProfileHero.tsx
│   │   ├── HiringCard.tsx
│   │   ├── SocialLinks.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── hiring.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/gfg-hiring-portal.git
```

### 2. Navigate to the project

```bash
cd gfg-hiring-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite, typically:

```text
http://localhost:5173
```

---

## 🔗 Updating Google Form Links

All recruitment information is centralized inside:

```text
src/data/hiring.ts
```

Example:

```ts
export const hiringRoles = [
  {
    title: "Technical Team",
    description:
      "Build websites, tools, automation, and technical experiences with the GFG CUSB team.",
    icon: Code2,
    buttonText: "Apply for Technical Team",
    link: "https://forms.gle/YOUR-FORM-ID",
  },
];
```

To update an application form, simply replace:

```ts
link: "https://forms.gle/YOUR-FORM-ID"
```

with the actual Google Form URL.

No component changes are required.

---

## 🌐 Updating Social Links

Social links are also maintained in:

```text
src/data/hiring.ts
```

Example:

```ts
export const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/YOUR_GFG_CUSB",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/YOUR_GFG_CUSB",
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK",
  },
  {
    name: "GitHub",
    href: "https://github.com/YOUR_GFG_CUSB",
  },
];
```

Replace the placeholder URLs with the official GFG CUSB links.

---

## 🎨 Design Philosophy

The portal follows a simple principle:

> **See Role → Understand Role → Apply**

The design combines:

* 🌱 GFG-inspired green branding
* 🖤 Modern dark accents
* 🤍 Clean backgrounds
* 🟢 Soft green gradients
* 🔲 Rounded cards
* ✨ Minimal animations
* 📱 Mobile-first layouts

The goal is to feel like a **modern Linktree + startup landing page + university tech community portal**.

---

## 📱 Responsive Design

The portal is optimized for users coming from:

* 📱 Instagram
* 💬 WhatsApp
* 💻 Desktop browsers
* 🔗 LinkedIn
* 📲 Mobile sharing

Special attention is given to:

* Large touch targets
* Readable typography
* No horizontal scrolling
* Fast interactions
* Clear application CTAs
* Responsive spacing

---

## ♿ Accessibility

The project includes accessibility-focused practices such as:

* Semantic HTML
* Keyboard-accessible links
* Visible focus states
* Descriptive `aria-label`s
* Good color contrast
* Reduced-motion support
* Accessible external links

Users who prefer reduced motion are automatically provided with a less animated experience.

---

## 🔐 External Link Security

Application links open in a new browser tab using:

```html
target="_blank"
rel="noopener noreferrer"
```

This prevents the newly opened page from gaining access to the original page's `window.opener`.

---

## 🔍 SEO

The portal includes optimized metadata:

```html
<title>GFG CUSB | Recruitment 2026</title>

<meta
  name="description"
  content="Join GFG CUSB. Explore open team opportunities and apply to become part of our developer, creative, technical, content, and event teams."
/>
```

This helps the recruitment portal appear correctly when shared or indexed.

---

## 🧪 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment

The project can be deployed easily using platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

For Vercel:

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repository directly through the Vercel dashboard.

---

## 🔄 Updating Recruitment

When a new recruitment cycle starts:

1. Update the recruitment year.
2. Update the available teams.
3. Replace Google Form URLs.
4. Update social/community links if required.
5. Update SEO metadata.
6. Deploy the latest version.

Most changes can be made from:

```text
src/data/hiring.ts
```

---

## 💡 Future Improvements

Potential future enhancements include:

* 📊 Application analytics
* 🔗 UTM tracking
* 🎯 Role filtering
* 📅 Recruitment deadline indicators
* 📨 Automated confirmation emails
* 📈 Application statistics
* 🌙 Dark mode
* 🌍 Custom domain
* 📲 PWA support

These are intentionally not included in the current version to keep the portal **fast, simple and focused on recruitment**.

---

## 👥 About GFG CUSB

**GFG CUSB** is a student-driven tech community focused on creating opportunities for students to:

* 💻 Learn technology
* 🚀 Build projects
* 🎤 Develop communication skills
* 🎨 Express creativity
* 🤝 Collaborate
* 🧠 Solve problems
* 🌱 Grow as leaders

---

## ❤️ Contributing

Contributions and improvements are welcome.

Before making changes:

```bash
git checkout -b feature/your-feature-name
```

Make your changes, test them locally, and submit a pull request.

---

## 📄 License

This project is created for the **GFG CUSB Community** and its recruitment activities.

© 2026 GFG CUSB. All rights reserved.

---

<div align="center">

### 🚀 Build. Lead. Create. Grow.

**Made with 💚 by GFG CUSB**

</div>

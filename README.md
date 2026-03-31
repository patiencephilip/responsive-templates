# ✦ Responsive Templates

**Free, open-source HTML/CSS/JS templates » no frameworks, no dependencies, no build steps.**

Open the file. Edit one config. Ship it.

---

## Templates

### 01 » Dark Portfolio *(available now)*
A dark, moody personal portfolio template with a custom cursor, scroll-reveal animations, noise texture overlay, and a cohesive editorial design system.

**[Live demo →](https://patiencephilip.github.io/responsive-templates/portfolio/)**

**Includes:**
- Fully responsive (mobile, tablet, desktop)
- Config-driven » edit one JS file, never touch the HTML
- Custom animated cursor (desktop only)
- Scroll-triggered reveal animations
- Sticky nav with backdrop blur on scroll
- Hero, About, Work, Experience, and Contact sections
- Zero dependencies » pure HTML, CSS, and vanilla JS

---

### 02 » SaaS Landing Page *(coming soon)*
### 03 » Documentation Site *(coming soon)*

---

## Getting started

### Option A » Fork (recommended)

1. Click **Fork** at the top right of this page
2. Open `portfolio/config.js` in your forked repo
3. Fill in your details (name, bio, projects, experience, socials)
4. Go to **Settings → Pages → Branch: main → Folder: / (root) → Save**
5. Your site will be live at:
   ```
   https://yourusername.github.io/responsive-templates/portfolio/
   ```

> **Tip:** add a root-level `index.html` with a redirect if you want the base URL to forward automatically » see [Adding a redirect](#adding-a-redirect) below.

---

### Option B » Download

1. Click **Code → Download ZIP** and extract it
2. Open `portfolio/config.js` in any text editor
3. Fill in your details
4. Open `portfolio/index.html` in your browser to preview
5. Deploy the `portfolio/` folder to any static host (GitHub Pages, Netlify, Vercel, etc.)

---

## Editing your config

Everything about the site lives in `portfolio/config.js`. You never need to touch `index.html`.

```js
const PORTFOLIO = {

  // ── Identity ──────────────────────────────────
  name:      "Your Name",
  initials:  "YN",           // shown in the nav
  role:      "designer & developer",
  location:  "Lagos, Nigeria",
  available: true,           // false hides the "Available for work" badge

  // ── Bio ───────────────────────────────────────
  bio: [
    "First paragraph of your about section.",
    "Second paragraph » optional, delete if you only want one."
  ],

  // ── Contact ───────────────────────────────────
  email: "hello@yourname.com",

  // ── Socials (set any to null to hide it) ──────
  socials: {
    github:   "https://github.com/yourname",
    twitter:  "https://twitter.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    dribbble: null,
  },

  // ── Skills ────────────────────────────────────
  // Add or remove groups freely
  skills: {
    "Design":              ["Figma", "UI/UX", "Typography"],
    "Development":         ["HTML/CSS", "JavaScript", "React"],
    "Currently exploring": ["WebGL", "Three.js"],
  },

  // ── Projects ──────────────────────────────────
  // Set featured: true on one project for the wide card layout
  projects: [
    {
      title:    "Project Name",
      desc:     "A short description of what this project does and why it matters.",
      tags:     ["Design", "React"],
      url:      "https://yourproject.com",
      featured: true,
    },
  ],

  // ── Experience ────────────────────────────────
  experience: [
    {
      period:  "2023 » Present",
      role:    "Your Role",
      company: "Company Name",
      desc:    "What you did and what you achieved.",
    },
  ],

  // ── Theme ─────────────────────────────────────
  theme: {
    accent: "#c8a96e",   // change this to rebrand the entire site
  },

};
```

### Config reference

| Key | What it controls |
|-----|-----------------|
| `name` | Your full name » splits across two lines in the hero |
| `initials` | Logo in the top-left nav |
| `role` | Italic subtitle under your name |
| `available` | `true` shows "Available for work" · `false` shows your location instead |
| `bio` | Array of paragraphs in the About section » add as many as you like |
| `email` | Contact section link and mailto |
| `socials` | Set any platform to `null` to hide it completely |
| `skills` | Object of group name → array of skills · add or remove groups freely |
| `projects` | Array of projects · first one with `featured: true` gets the wide card |
| `experience` | Array of roles shown in the Experience timeline |
| `theme.accent` | The gold accent color » changes buttons, highlights, and links sitewide |

---

## Adding a redirect

If you want `yourusername.github.io/responsive-templates/` to forward automatically to the portfolio, create a file called `index.html` at the **root** of your repo (not inside the `portfolio/` folder) with this content:

```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=./portfolio/" />
</head>
</html>
```

---

## Folder structure

```
responsive-templates/
├── index.html          ← optional redirect (see above)
├── README.md
├── CONTRIBUTING.md
└── portfolio/
    ├── index.html      ← the template (don't edit this)
    └── config.js       ← your details go here
```

---

## Contributing

Want to add a template or improve an existing one? Contributions are very welcome.

1. Fork this repo
2. Create a branch: `git checkout -b template/your-template-name`
3. Add your template in a new folder with a self-contained `index.html` and `config.js`
4. Update this README to list your template
5. Open a pull request with a short description and a live demo link

**Guidelines:**
- Pure HTML, CSS, and vanilla JS only » no frameworks, no npm, no build tools
- Must be fully responsive
- Must be config-driven (users edit a `config.js`, not the HTML)
- Must include a live demo link in your PR

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full details.

---

## License

MIT » free for personal and commercial use. Attribution appreciated but not required.

---

<p align="center">Made with intention · Star if it helped you ✦</p>

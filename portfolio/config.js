/**
 * ✦ PORTFOLIO CONFIG
 * Edit this file only — no need to touch index.html
 * ─────────────────────────────────────────────────
 */

const PORTFOLIO = {

  // ── Identity ──────────────────────────────────
  name:      "Your Name",
  initials:  "YN",
  role:      "designer & developer",
  location:  "Lagos, Nigeria",
  available: true,   // set to false to hide the "Available for work" badge

  // ── Bio (shown in About section) ──────────────
  bio: [
    "A developer and designer with a deep love for craft. I care about the details that most people don't notice — the weight of a typeface, the rhythm of an animation, the feel of an interaction.",
    "When I'm not writing code, I'm reading, drawing, or overthinking the perfect project name."
  ],

  // ── Contact ───────────────────────────────────
  email: "hello@yourname.com",

  // ── Social links (set to null to hide) ────────
  socials: {
    github:   "https://github.com/yourname",
    twitter:  "https://twitter.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    dribbble: null,   // set to null to hide
  },

  // ── Skills ────────────────────────────────────
  skills: {
    "Design":               ["Figma", "UI/UX", "Typography", "Motion", "Branding"],
    "Development":          ["HTML/CSS", "JavaScript", "React", "Node.js", "Python"],
    "Currently exploring":  ["WebGL", "Three.js", "Generative art"],
  },

  // ── Projects ──────────────────────────────────
  // First project with featured: true gets the wide card treatment
  projects: [
    {
      title:    "Project Name Here",
      desc:     "A brief but compelling description of this project — what it does, what problem it solves, and why it matters. Two sentences max.",
      tags:     ["Design", "React", "API Integration"],
      url:      "#",
      featured: true,
    },
    {
      title:    "Second Project",
      desc:     "Another strong project. Keep the description tight — one or two sentences describing the core value.",
      tags:     ["Full-stack", "Node.js"],
      url:      "#",
      featured: false,
    },
    {
      title:    "Third Project",
      desc:     "A third showcase. Mix up your project types to show range — design, development, open source.",
      tags:     ["UI Design", "CSS"],
      url:      "#",
      featured: false,
    },
  ],

  // ── Experience ────────────────────────────────
  experience: [
    {
      period:  "2023 — Present",
      role:    "Senior Frontend Developer",
      company: "Company Name",
      desc:    "Led the redesign of the core product UI, improving user retention by 30%. Built a design system from scratch used across 4 product teams.",
    },
    {
      period:  "2021 — 2023",
      role:    "UI/UX Designer & Developer",
      company: "Another Company",
      desc:    "Designed and built marketing sites, web apps, and interactive prototypes for a range of clients across fintech and health.",
    },
    {
      period:  "2019 — 2021",
      role:    "Freelance Developer",
      company: "Self-employed",
      desc:    "Worked with startups and small businesses to build their first web presence. Developed a strong eye for what makes a site actually work.",
    },
  ],

  // ── Theme (optional overrides) ────────────────
  theme: {
    accent: "#c8a96e",   // main gold accent color — change to your preferred color
  },

};

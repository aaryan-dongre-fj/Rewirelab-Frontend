export const siteConfig = {
  name: "The Rewire Lab",
  description:
    "The Rewire Lab is the company behind PredictiveMind. We build behavioral intelligence that makes human patterns measurable, predictable, and changeable.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  productName: "PredictiveMind",
  productUrl: "https://predictivemind.io/",
  email: "admin@predictivemind.io",
  legalEmail: "admin@breakmethod.com",
  address: "676 Triangle Dr., Ponderay, ID 83852",
  copyright: "© 2014-2026 The Rewire Lab Corp.",
  social: {
    instagram: "https://www.instagram.com/breakmethod/",
    linkedin: "https://www.linkedin.com/company/break-method/",
    facebook: "https://www.facebook.com/breakmethod/",
  },
} as const

export const approach = [
  {
    title: "Pattern mapping",
    description:
      "We uncover the psychological and behavioral patterns governing decisions, reactions, and relationship dynamics.",
  },
  {
    title: "Insight interpretation",
    description:
      "We translate those patterns into clear explanations of how they shape perception and real-world outcomes.",
  },
  {
    title: "Strategic direction",
    description:
      "We outline a targeted, evidence-based path forward so you know exactly how to create meaningful, sustainable change.",
  },
] as const

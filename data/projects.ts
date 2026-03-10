import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "kenstar",
    title: "Kenstar Plastics",
    tagline: "Building a scalable product management platform.",

    desktop: "/projects/kenstar-desktop.webp",
    mobile: "/projects/kenstar-mobile.webp",

    overview:
      "Kenstar Plastics required a digital system to manage their growing catalog of plastic products.",

    problem:
      "The company needed a structured way to manage hundreds of products across multiple categories.",

    solution:
      "I built a full-stack product management platform using Next.js and MongoDB.",

    gallery: [
      "/projects/kenstar/adminupload.webp",
      "/projects/kenstar/cart.webp",
      "/projects/kenstar/desktopview.webp",
      "/projects/kenstar/enquiries.webp",
      "/projects/kenstar/kenstarmobileview.webp",
      "/projects/kenstar/login.webp",
      "/projects/kenstar/productlist.webp",
      "/projects/kenstar/productpage.webp"

    ],

    engineering: [
      "JWT authentication with HTTP-only cookies",
      "Protected routes using Next.js middleware",
      "Multi-image uploads with Cloudinary",
      "Serverless API architecture"
    ],

    challenges: [
      "Solved case-sensitive filesystem bugs on Vercel",
      "Migrated from jsonwebtoken to JOSE for Edge runtime",
      "Debugged authentication cookies in production"
    ],

    stack: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "Cloudinary"
    ],

    live: "https://new-kenstar-b.vercel.app",
    github: ""
  },


  {
    slug: "raleigh",
    title: "Raleigh Motorbikes",
    tagline: "Modernizing a legacy cycling brand for the digital era.",

    desktop: "/projects/raleigh-desktop.webp",
    mobile: "/projects/raleigh-mobile.webp",

    problem:
      "The brand required a modern web presence that could highlight products clearly while maintaining performance and accessibility.",

    solution:
      "I built a modern, responsive platform focusing on UX clarity, fast loading times, and strong SEO foundations.",

    stack: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "SEO Optimization",
    ],

    live: "https://raleighmotorbikes.co.ke/",
    github: "",
  },
]
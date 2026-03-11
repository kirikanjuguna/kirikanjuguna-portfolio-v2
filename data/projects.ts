import { Project } from "@/types/project"

export const projects: Project[] = [

  {
    slug: "kenstar",
    title: "Kenstar Plastics",
    tagline: "Building a scalable product management platform.",

    desktop: "/projects/kenstar-desktop.webp",
    mobile: "/projects/kenstar-mobile.webp",

    overview:
      "Kenstar Plastics required a digital system to manage their growing catalog of plastic products. The platform needed to handle hundreds of SKUs, category hierarchies, and image uploads while maintaining performance and ease of management.",

    problem:
      "The company needed a structured way to manage hundreds of products across multiple categories. Their existing workflow relied on manual updates, which created inefficiencies and limited scalability.",

    solution:
      "I built a full-stack product management platform using Next.js and MongoDB with a scalable architecture supporting image uploads, product categorization, and secure admin access.",

    features: [
      {
        title: "Admin Product Upload",
        description:
          "A structured admin system allowing sellers to upload products with images, pricing, and metadata.",
        image: "/projects/kenstar/adminupload.webp",
        type: "desktop"
      },
      {
        title: "Product Discovery",
        description:
          "Customers can browse the full catalog with clear product pages and detailed specifications.",
        image: "/projects/kenstar/productpage.webp",
        type: "desktop"
      },
      {
        title: "Customer Enquiries",
        description:
          "Instead of checkout, the platform allows users to submit enquiries which are sent directly to the sales team.",
        image: "/projects/kenstar/enquiries.webp",
        type: "desktop"
      },
      {
        title: "Mobile view",
        description:
          "Instead of checkout, the platform allows users to submit enquiries which are sent directly to the sales team.",
        image: "/projects/kenstar/kenstarmobileview.webp",
        type: "mobile"
      },
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
      "Tailwind CSS",
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

    overview:
      "Raleigh required a modern digital platform that could showcase their products clearly while maintaining strong performance and SEO. The goal was to modernize the brand’s online presence without sacrificing usability.",

    problem:
      "The existing digital experience lacked clarity, speed, and modern design principles, making it difficult for users to explore the brand's products effectively.",

    solution:
      "I developed a responsive platform focused on performance, clean UX structure, and SEO optimization to help the brand present its products more effectively online.",

    gallery: [
      "/projects/raleigh-desktop.webp",
      "/projects/raleigh-mobile.webp"
    ],

    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "SEO Optimization"
    ],

    live: "https://raleighmotorbikes.co.ke/",
    github: ""
  },

]
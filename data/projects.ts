import { Project } from "@/types/project"

export const projects: Project[] = [

  {
    slug: "kenstar",
    title: "Kenstar Plastics",
    tagline: "Building a scalable full-stack product management platform for one of the leading Kenyan manufacturers.",

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
        title: "Admin Product Management",
        description:
          "A secure admin dashboard that allows product managers to upload, edit, and organize products with images, specifications, and category assignments.",
        image: "/projects/kenstar/admin-dashboard.webp",
        type: "desktop",
      },
      {
        title: "Multi-Image Upload System",
        description:
          "Products support multiple high-resolution images with previews before upload. Images are processed and stored using Cloudinary.",
        image: "/projects/kenstar/image-upload.webp",
        type: "desktop",
      },
      {
        title: "Structured Category Architecture",
        description:
          "Products are organized using a scalable multi-level category system supporting categories, subcategories, and nested product types.",
        image: "/projects/kenstar/categories.webp",
        type: "desktop",
      },
      {
        title: "Product Detail Experience",
        description:
          "Customers can browse detailed product pages with multiple images, specifications, and clear navigation through the product catalog.",
        image: "/projects/kenstar/product-page.webp",
        type: "desktop",
      },
      {
        title: "Customer Enquiry System",
        description:
          "Instead of traditional checkout, the platform enables customers to send product enquiries directly to the sales team.",
        image: "/projects/kenstar/enquiry-system.webp",
        type: "desktop",
      },
      {
        title: "Mobile Product Browsing",
        description:
          "The storefront is fully responsive, allowing customers to browse the product catalog and submit enquiries seamlessly on mobile devices.",
        image: "/projects/kenstar/mobile-view.webp",
        type: "mobile",
      },
    ],

    engineering: [
      "JWT authentication with secure HTTP-only cookies",
      "Protected admin routes using Next.js Edge middleware",
      "Multi-image upload pipeline integrated with Cloudinary",
      "Serverless API architecture using Next.js App Router",
      "Scalable MongoDB schema design with Mongoose",
    ],

    challenges: [
      "Resolved case-sensitive filesystem issues that caused production API failures on Vercel",
      "Migrated authentication from jsonwebtoken to JOSE to support Next.js Edge runtime",
      "Debugged production cookie behavior across secure environments",
      "Handled deployment inconsistencies between local development and serverless infrastructure"
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
    tagline: "Building a solution for a legacy cycling brand for the digital era and online presence.",

    desktop: "/projects/raleigh-desktop.webp",
    mobile: "/projects/raleigh-mobile.webp",

    overview:
      "Raleigh required a modern digital platform that could showcase their products clearly while maintaining strong performance and SEO. The goal was to modernize the brand’s online presence without sacrificing usability.",

    problem:
      "They had no prior digital presence, making it challenging to reach customers effectively online.",

    solution:
      "I developed a responsive platform focused on performance, clean UX structure, and SEO optimization to help the brand present its products more effectively online.",

    features: [
      {
        title: "Motorcycle Model Showcase",
        description:
          "A structured catalog presenting multiple motorcycle models with high-resolution imagery and key specifications to help customers quickly evaluate available options.",
        image: "/projects/raleigh-models.webp",
        type: "desktop",
      },
      {
        title: "Detailed Product Pages",
        description:
          "Each motorcycle includes a dedicated page featuring product imagery, engineering specifications, and performance data to assist buyers during research.",
        image: "/projects/raleigh-product.webp",
        type: "desktop",
      },
      {
        title: "Technical Specification Modules",
        description:
          "Structured specification tables present complex engine and performance data in a clear and readable format for both enthusiasts and commercial buyers.",
        image: "/projects/raleigh-specs.webp",
        type: "desktop",
      },
      {
        title: "Direct Customer Enquiry System",
        description:
          "Integrated contact channels including WhatsApp and direct inquiry actions allow potential customers to instantly connect with the sales team.",
        image: "/projects/raleigh-contact.webp",
        type: "desktop",
      },
      {
        title: "Mobile-Optimized Experience",
        description:
          "The entire platform is designed with a mobile-first approach, ensuring that customers browsing on smartphones can explore models and make enquiries seamlessly.",
        image: "/projects/raleigh-mobile-view.webp",
        type: "mobile",
      },
    ],

    engineering: [
      "Mobile-first responsive architecture optimized for product browsing",
      "Lightweight frontend implementation using modern HTML, CSS, and JavaScript",
      "Performance optimization for high-resolution product imagery",
      "Integrated WhatsApp lead generation workflow",
      "SEO-focused structure to improve discoverability for motorcycle searches",
    ],

    challenges: [
      "Balancing high-resolution product imagery with fast loading speeds",
      "Ensuring consistent rendering of motorcycle images across browsers",
      "Optimizing performance for users accessing the site over mobile networks",
      "Designing a user flow that reduces friction between browsing and contacting sales",
    ],

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Performance Optimization",
      "SEO",
    ],

    live: "https://raleighmotorbikes.co.ke/",
    github: ""
  },

]
export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectTechnology {
  category: string;
  items: string;
}

export type ProjectType = 'freelance' | 'student' | 'side' | 'personal' | undefined;

export interface Project {
  title: string;
  description: string;
  technologies: ProjectTechnology[];
  links?: ProjectLink[];
  visible: boolean;
  projectType?: ProjectType;
}

export const projects: Project[] = [
  // ---------------- FREELANCE ----------------
  {
    title: "Avventure Website",
    description:
      "Freelance project providing Travel, safari, and booking  trip. Built with React and Bootstrap, included form validation and Axios integration.",
    technologies: [
      { category: "Frontend", items: "html, css, Bootstrap, js, React" },
      { category: "APIs & Validation", items: "Axios, React Hook Form" }
    ],
    // links: [{ label: "GitHub", url: "https://github.com/karemahamdy/Education-Website" }],
    visible: true,
    projectType: "freelance"
  },
  {
    title: "S-Power-M Portfolio",
    description:
      "Dynamic personal portfolio showcasing skills, achievements, and professional growth. Built with React and Tailwind CSS.",
    technologies: [{ category: "Frontend", items: "React, Vite, Tailwind CSS" }],
    links: [{ label: "GitHub", url: "https://github.com/karemahamdy/S-power-M-portfolio" }],
    visible: true,
    projectType: "freelance"
  },
  // ---------------- STUDENT ----------------
  {
    title: "E-commerce with Admin Panel",
    description:
      "Full-stack e-commerce platform with Vue 3 and Pinia. Implemented authentication, shopping cart, payment processing, order management, product catalog, and dual interfaces for users and admin dashboard.",
    technologies: [
      { category: "Frontend", items: "Vue 3, Pinia, PrimeVue, Tailwind CSS" },
      { category: "Backend & Database", items: "Supabase, PostgreSQL" }
    ],
    links: [{ label: "GitHub", url: "https://github.com/karemahamdy/E-commerce" }],
    visible: true,
    projectType: "student"
  },
  {
    title: "Hotel Management System",
    description:
      "Room-based management system with admin dashboard to manage bookings, guests, cabins, and statistics. Integrated JWT authentication and Supabase backend. Client-side built with React, React Query, and ShadcnUI.",
    technologies: [
      { category: "Frontend", items: "Next, React, React Query, Tailwind CSS, ShadcnUI, React Hook Form" },
      { category: "Backend & Auth", items: "Supabase, JWT" }
    ],
    links: [{ label: "GitHub", url: "https://github.com/karemahamdy/The-Wild-Oasis" }],
    visible: true,
    projectType: "student"
  },
  {
    title: "iPhone Advertisement Project",
    description:
      "Interactive landing page to showcase iPhone features, video quality, and camera. Implemented animations with GSAP and optimized rendering using React DevTools.",
    technologies: [
      { category: "Frontend", items: "React, Vite, Tailwind CSS" },
      { category: "Animation", items: "GSAP" }
    ],
    visible: true,
    projectType: "side"
  },
  // ---------------- PERSONAL ----------------
  {
    title: "Forkify Recipes",
    description:
      "Recipe website following MVC principles with Vanilla JS. Allows users to search pizza recipes, bookmark favorites, and manage collections. Built with Parcel and Webpack.",
    technologies: [
      { category: "Frontend", items: "Vanilla JS, Sass" },
      { category: "Build Tools", items: "Parcel, Webpack" }
    ],
    links: [{ label: "GitHub", url: "https://github.com/karemahamdy/forkify?tab=readme-ov-file" }],
    visible: true,
    projectType: "personal"
  },


  // ---------------- SIDE ----------------

];



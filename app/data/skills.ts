interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  visible: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "Vue.js" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Sass" },
      { name: "MUI" },
      { name: "ShadCN" },
      { name: "Chakra UI" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "Axios" },
      { name: "Webpack" },
      { name: "Babel" },
      { name: "Vite" },
      { name: "Pinia" },
      { name: "Vuex" },
      { name: "Zustand" },
      { name: "Redux" },
      { name: "Redux Toolkit" },
      { name: "Prime UI" },
      { name: "Vuetify" },
      { name: "CSS Animation" },
      { name: "Framer Motion" },
      { name: "GSAP" },
      { name: "Context API" },
      { name: "ES6" }],
    visible: true
  },
    {
    name: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "SQL Server" },
      { name: "REST APIs" },   
      { name: "MongoDB" },
    ],
    visible: true
  },
  {
    name: "Tools & Services",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Visual Studio" },
      { name: "Swagger/OpenAPI" },
      { name: "ESLint" },
      { name: "Prettier" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Postman" },
      { name: "figma" },
      { name: "Jira" },

    ],
    visible: true
  },

];

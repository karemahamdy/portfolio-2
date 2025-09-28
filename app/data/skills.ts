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
    name: "Backend Development",
    skills: [
      { name: "C#" },
      { name: "ASP.NET Core" },
      { name: "ASP.NET Web API" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "Entity Framework Core" },
      { name: "Prisma ORM" },
      { name: "LINQ" },
      { name: "SQL Server" },
      { name: "REST APIs" },
      { name: "JWT Authentication" },
      { name: "Clerk" },
      { name: "Passport.js" },
      { name: "Docker" },
      { name: "Azure" }
    ],
    visible: true
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "Angular" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" }
    ],
    visible: true
  },
  {
    name: "Tools & Services",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Visual Studio" },
      { name: "Jest" },
      { name: "Swagger/OpenAPI" },
      { name: "ESLint" },
      { name: "Prettier" },
      { name: "Cloudinary" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Twilio" },
      { name: "Zoom API" },
      { name: "Geidea Payment Gateway" },
      { name: "Stripe" }
    ],
    visible: true
  },
  {
    name: "Software Practices",
    skills: [
      { name: "Clean Architecture" },
      { name: "Onion Architecture" },
      { name: "SOLID Principles" },
      { name: "Test-Driven Development (TDD)" },
      { name: "N-tier Architecture" },
      { name: "MVC" },
      { name: "API Documentation" },
      { name: "Specification Pattern" }
    ],
    visible: true
  }
];

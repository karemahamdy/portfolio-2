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
  {
    "title": "Car Rental Management System",
    "description": "Architected and developed a comprehensive car rental management platform using NestJS and TypeScript. Implemented clean architecture principles to ensure maintainability and scalability. Engineered secure authentication flows using JWT, Passport.js, and Clerk. Integrated Cloudinary for efficient car image management and Supabase for high-performance database operations. Implemented comprehensive API documentation with Swagger and established a robust testing framework using Jest.",
    "technologies": [
      { "category": "Backend", "items": "NestJS, TypeScript, Node.js" },
      { "category": "Database & ORM", "items": "Prisma, MikroORM, Supabase" },
      { "category": "Authentication & Security", "items": "JWT, Passport.js, Clerk" },
      { "category": "Media & Storage", "items": "Cloudinary" },
      { "category": "Testing & Documentation", "items": "Jest, Swagger" }
    ],
    "visible": true,
    "projectType": "freelance"
  },
  {
    "title": "Taafeei",
    "description": "Led the development of a sophisticated healthcare appointment management system. Engineered a scalable architecture using ASP.NET Core MVC, implementing secure payment processing through Geidea Payment Gateway for Saudi Arabian market. Integrated real-time communication features including SMS notifications via Twilio and telemedicine capabilities using Zoom API. Deployed the system on Azure with Docker containers for optimal performance and reliability.",
    "technologies": [
      { "category": "Backend", "items": "ASP.NET Core, SQL Server, Entity Framework Core, JWT Authentication, Google OAuth" },
      { "category": "APIs & Services", "items": "Geidea Payment Gateway, Twilio SMS, Zoom Video API" },
      { "category": "DevOps & Infrastructure", "items": "Docker, Azure, Git" },
      { "category": "Architecture", "items": "Clean Architecture, Repository Pattern, Dependency Injection" }
    ],
    "visible": true,
    "projectType": "freelance"
  },
  {
    "title": "Dross",
    "description": "Developed a full-featured e-learning platform with real-time communication capabilities. Built a robust course management system allowing instructors to create and update educational content. Implemented real-time messaging between students and instructors using Firebase. Designed and optimized database operations using SQL Server and Entity Framework for optimal performance.",
    "technologies": [
      { "category": "Frontend", "items": "Angular" },
      { "category": "Backend", "items": "ASP.NET Core, SQL Server, Entity Framework" },
      { "category": "Realtime & Messaging", "items": "Firebase" }
    ],
    "visible": true,
    "projectType": "freelance"
  },

  {
    "title": "Talabat API",
    "description": "Developed a scalable e-commerce platform following Clean Architecture principles, integrating secure payments, caching, and structured API endpoints.",
    "technologies": [
      { "category": "Backend", "items": "ASP.NET Core, Entity Framework, SQL Server, Redis, Docker" },
      { "category": "Patterns", "items": "Onion Architecture, Repository Pattern, Unit of Work, Specification Pattern" },
      { "category": "Payments & Auth", "items": "Stripe Payment Gateway, JWT Authentication" }
    ],
    "visible": true,
    "projectType": "student"
  }

];

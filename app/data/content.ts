export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  year: string;
  type: 'video' | 'blog' | 'repo';
  externalUrl: string;
  readTime?: string;
  excerpt?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  coverImage?: string;
  visible: boolean;
}

export const contentItems: ContentItem[] = [
  {
    slug: 'stop-using-interfaces',
    title: 'Stop Using Interfaces: Here\'s Why!',
    date: 'January 15, 2025',
    year: '2025',
    type: 'blog',
    externalUrl: 'https://medium.com/example/stop-using-interfaces',
    readTime: '5 min read',
    excerpt: 'Interfaces are a fundamental concept in TypeScript, but they might not always be the best choice. Learn when to use type aliases instead.',
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['TypeScript', 'Programming', 'Web Development'],
    visible: true
  },
  {
    slug: 'github-actions-tutorial',
    title: 'GitHub Actions Tutorial',
    date: 'December 10, 2024',
    year: '2024',
    type: 'video',
    externalUrl: 'https://youtube.com/watch?v=example',
    readTime: '8 min watch',
    excerpt: 'Learn how to automate your development workflow with GitHub Actions in this comprehensive tutorial.',
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['GitHub', 'CI/CD', 'DevOps'],
    visible: true
  },
  {
    slug: 'github-workflow-as-a-pro',
    title: 'GitHub Workflow as a Pro',
    date: 'October 5, 2024',
    year: '2024',
    type: 'blog',
    externalUrl: 'https://dev.to/example/github-workflow-as-a-pro',
    readTime: '6 min read',
    excerpt: 'Take your GitHub workflow to the next level with these professional tips and tricks.',
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['GitHub', 'Productivity', 'Collaboration'],
    visible: true
  },
  {
    slug: 'custom-printf-implementation',
    title: 'Custom Printf Implementation',
    date: 'July 22, 2023',
    year: '2023',
    type: 'repo',
    externalUrl: 'https://github.com/example/custom-printf',
    excerpt: 'A custom implementation of the printf function in C, demonstrating variadic functions and string parsing.',
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['C', 'Programming', 'Low-level'],
    visible: true
  },
  {
    slug: 'portfolio-website-nextjs',
    title: "Building a Portfolio Website with Next.js",
    type: "blog",
    date: "March 2025",
    year: "2025",
    externalUrl: "#",
    excerpt: "Learn how to build a modern portfolio website using Next.js and Tailwind CSS.",
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    visible: true
  },
  {
    slug: 'leetcode-journey',
    title: "How I Solved 250+ LeetCode Problems",
    type: "blog",
    date: "February 2025",
    year: "2025",
    externalUrl: "#",
    excerpt: "My journey through solving hundreds of LeetCode problems and how it transformed my problem-solving skills.",
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['LeetCode', 'Algorithms', 'Problem Solving'],
    visible: true
  },
  {
    slug: 'software-engineer-journey',
    title: "My Journey as a Software Engineer",
    type: "video",
    date: "January 2025",
    year: "2025",
    externalUrl: "#",
    excerpt: "A video overview of my career path and the lessons I've learned along the way.",
    author: {
      name: 'Hüsam Yıldırım',
    },
    tags: ['Career', 'Software Engineering', 'Personal Growth'],
    visible: true
  }
];

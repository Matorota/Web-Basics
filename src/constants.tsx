export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const SAMPLE_BLOG_POSTS: BlogPostType[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt:
      "Learn how to set up a modern React application with TypeScript, including best practices for type safety and component architecture. This comprehensive guide will walk you through everything you need to know.",
    author: "John Doe",
    date: "Jan 15, 2024",
    readTime: "5 min",
    tags: ["React", "TypeScript", "Frontend"],
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better UX",
    excerpt:
      "Explore advanced CSS techniques including Grid, Flexbox, and CSS Variables to create responsive and maintainable user interfaces. Perfect for both beginners and experienced developers.",
    author: "Jane Smith",
    date: "Jan 12, 2024",
    readTime: "7 min",
    tags: ["CSS", "Design", "UX"],
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for architecting large-scale web applications. Learn about code organization, state management, and performance optimization techniques that will make your apps shine.",
    author: "Mike Johnson",
    date: "Jan 10, 2024",
    readTime: "10 min",
    tags: ["Architecture", "Performance", "Best Practices"],
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt:
      "Discover emerging trends and technologies shaping the future of web development. From new frameworks to development tools, stay ahead of the curve with this insights-packed article.",
    author: "Sarah Wilson",
    date: "Jan 8, 2024",
    readTime: "6 min",
    tags: ["Trends", "Future", "Web Development"],
  },
  {
    id: 5,
    title: "Mastering JavaScript ES6+ Features",
    excerpt:
      "Deep dive into modern JavaScript features including arrow functions, destructuring, modules, and async/await. Learn how to write cleaner, more maintainable JavaScript code.",
    author: "Alex Chen",
    date: "Jan 5, 2024",
    readTime: "8 min",
    tags: ["JavaScript", "ES6", "Programming"],
  },
  {
    id: 6,
    title: "Node.js Performance Optimization",
    excerpt:
      "Techniques for optimizing Node.js applications including memory management, event loop optimization, and database query improvements. Make your backend blazingly fast.",
    author: "Maria Rodriguez",
    date: "Jan 3, 2024",
    readTime: "12 min",
    tags: ["Node.js", "Performance", "Backend"],
  },
  {
    id: 7,
    title: "Responsive Design with CSS Grid",
    excerpt:
      "Master CSS Grid layout to create responsive and flexible designs. Learn practical examples and techniques for building modern web layouts that work on all devices.",
    author: "David Kim",
    date: "Dec 30, 2023",
    readTime: "9 min",
    tags: ["CSS", "Grid", "Responsive"],
  },
  {
    id: 8,
    title: "Understanding React Hooks",
    excerpt:
      "Complete guide to React Hooks including useState, useEffect, useContext, and custom hooks. Transform your functional components with these powerful tools.",
    author: "Emily Taylor",
    date: "Dec 28, 2023",
    readTime: "11 min",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 9,
    title: "API Design Best Practices",
    excerpt:
      "Learn how to design RESTful APIs that are intuitive, secure, and scalable. Covering authentication, versioning, error handling, and documentation strategies.",
    author: "Tom Anderson",
    date: "Dec 25, 2023",
    readTime: "13 min",
    tags: ["API", "REST", "Backend", "Best Practices"],
  },
  {
    id: 10,
    title: "Testing React Applications",
    excerpt:
      "Comprehensive guide to testing React components using Jest and React Testing Library. Learn unit testing, integration testing, and end-to-end testing strategies.",
    author: "Lisa Chang",
    date: "Dec 22, 2023",
    readTime: "15 min",
    tags: ["React", "Testing", "Jest", "Quality Assurance"],
  },
];

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

export const SAMPLE_BLOG_POSTS: BlogPostType[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt:
      "Learn how to set up a modern React application with TypeScript, including best practices for type safety and component architecture. This comprehensive guide will walk you through everything you need to know.",
    author: "Matas Strimaitis",
    date: "Jan 15, 2024",
    readTime: "5 min",
    tags: ["React", "TypeScript", "Frontend"],
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better UX",
    excerpt:
      "Explore advanced CSS techniques including Grid, Flexbox, and CSS Variables to create responsive and maintainable user interfaces. Perfect for both beginners and experienced developers.",
    author: "Justas Kazlauskas",
    date: "Jan 12, 2024",
    readTime: "7 min",
    tags: ["CSS", "Design", "UX"],
    imageUrl:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for architecting large-scale web applications. Learn about code organization, state management, and performance optimization techniques that will make your apps shine.",
    author: "Paulius Vaitiekūnas",
    date: "Jan 10, 2024",
    readTime: "10 min",
    tags: ["Architecture", "Performance", "Best Practices"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt:
      "Discover emerging trends and technologies shaping the future of web development. From new frameworks to development tools, stay ahead of the curve with this insights-packed article.",
    author: "Gabrielė Petrauskaitė",
    date: "Jan 8, 2024",
    readTime: "6 min",
    tags: ["Trends", "Future", "Web Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Mastering JavaScript ES6+ Features",
    excerpt:
      "Deep dive into modern JavaScript features including arrow functions, destructuring, modules, and async/await. Learn how to write cleaner, more maintainable JavaScript code.",
    author: "Tomas Janulevičius",
    date: "Jan 5, 2024",
    readTime: "8 min",
    tags: ["JavaScript", "ES6", "Programming"],
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
  },
  {
    id: 6,
    title: "Node.js Performance Optimization",
    excerpt:
      "Techniques for optimizing Node.js applications including memory management, event loop optimization, and database query improvements. Make your backend blazingly fast.",
    author: "Inga Mockutė",
    date: "Jan 3, 2024",
    readTime: "12 min",
    tags: ["Node.js", "Performance", "Backend"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
  },
  {
    id: 7,
    title: "Responsive Design with CSS Grid",
    excerpt:
      "Master CSS Grid layout to create responsive and flexible designs. Learn practical examples and techniques for building modern web layouts that work on all devices.",
    author: "Lukas Jankauskas",
    date: "Dec 30, 2023",
    readTime: "9 min",
    tags: ["CSS", "Grid", "Responsive"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
  },
  {
    id: 8,
    title: "Understanding React Hooks",
    excerpt:
      "Complete guide to React Hooks including useState, useEffect, useContext, and custom hooks. Transform your functional components with these powerful tools.",
    author: "Austė Matijošaitienė",
    date: "Dec 28, 2023",
    readTime: "11 min",
    tags: ["React", "Hooks", "JavaScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
  },
  {
    id: 9,
    title: "API Design Best Practices",
    excerpt:
      "Learn how to design RESTful APIs that are intuitive, secure, and scalable. Covering authentication, versioning, error handling, and documentation strategies.",
    author: "Domantas Bernatavičius",
    date: "Dec 25, 2023",
    readTime: "13 min",
    tags: ["API", "REST", "Backend", "Best Practices"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
  },
  {
    id: 10,
    title: "Testing React Applications",
    excerpt:
      "Comprehensive guide to testing React components using Jest and React Testing Library. Learn unit testing, integration testing, and end-to-end testing strategies.",
    author: "Rūta Savickienė",
    date: "Dec 22, 2023",
    readTime: "15 min",
    tags: ["React", "Frontend", "JavaScript", "Best Practices"],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
  },
];

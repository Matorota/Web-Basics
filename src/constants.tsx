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
];

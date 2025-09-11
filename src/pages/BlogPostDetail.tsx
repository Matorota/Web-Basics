import React from "react";
import type { BlogPostType } from "../constants";

interface BlogPostDetailProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Posts
      </button>

      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <span className="font-medium">{post.author}</span>
          </div>
          <span className="mx-3 text-gray-300">•</span>
          <span>{post.date}</span>
          <span className="mx-3 text-gray-300">•</span>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{post.readTime} read</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {post.tags.includes("React") && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Setting Up Your React Environment
                </h2>
                <p>
                  Before diving into React development, you'll need to set up
                  your development environment properly. We'll use Vite for
                  faster builds and better developer experience compared to
                  Create React App.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Project Setup with Vite
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`# Create a new React project with TypeScript
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install

# Install additional dependencies
npm install @types/react @types/react-dom
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Modern React Component Patterns
                </h2>
                <p>
                  Let's explore how to build reusable components using modern
                  React patterns including hooks, TypeScript interfaces, and
                  proper state management.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Custom Hook for API Data Fetching
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// hooks/useApi.ts
import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(url: string): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ 
          data: null, 
          loading: false, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Reusable Blog Post Component
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// components/BlogPost.tsx
import React from 'react';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  tags: string[];
  onPostClick?: (id: number) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  author,
  publishedDate,
  tags,
  onPostClick
}) => {
  const handleClick = () => {
    onPostClick?.(id);
  };

  return (
    <article 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
          {title}
        </h2>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>By {author}</span>
          <span>•</span>
          <time dateTime={publishedDate}>{publishedDate}</time>
        </div>
      </header>
      
      <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
      
      <footer className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
};`}</code>
                  </pre>
                </div>
              </>
            )}

            {post.tags.includes("TypeScript") && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Advanced TypeScript Patterns
                </h2>
                <p>
                  TypeScript provides powerful tools for creating type-safe
                  applications. Let's explore advanced patterns including
                  generics, utility types, and conditional types.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Generic API Response Handler
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// types/api.ts
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  publishedAt: string;
}

// Generic API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`);
    return response.json();
  }

  async post<T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

// Usage examples
const api = new ApiClient('https://api.example.com');

// Type-safe API calls
const users = await api.get<User[]>('/users');
const blogPosts = await api.get<BlogPost[]>('/posts');
const newPost = await api.post<BlogPost, Partial<BlogPost>>('/posts', {
  title: 'New Post',
  content: 'Post content...',
  tags: ['TypeScript', 'React']
});`}</code>
                  </pre>
                </div>
              </>
            )}

            {post.tags.includes("CSS") && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Modern CSS Layout Techniques
                </h2>
                <p>
                  Modern CSS provides powerful layout tools like Grid and
                  Flexbox. Let's build a responsive blog layout using these
                  techniques along with custom properties for theming.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    CSS Grid Blog Layout
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`/* styles/blog-layout.css */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --background-color: #f8fafc;
  --text-color: #1e293b;
  --border-color: #e2e8f0;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.blog-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "main main sidebar"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1fr 300px;
  min-height: 100vh;
  gap: 2rem;
  padding: 0 2rem;
  background-color: var(--background-color);
}

.blog-header {
  grid-area: header;
  background: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blog-footer {
  grid-area: footer;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
}

/* Responsive design */
@media (max-width: 1024px) {
  .blog-container {
    grid-template-areas: 
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .blog-container {
    padding: 0 1rem;
    gap: 1rem;
  }
}

/* Blog post cards */
.blog-post {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-post:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
}

.blog-post-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.blog-post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.blog-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.blog-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--primary-color);
  font-size: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(59, 130, 246, 0.2);
}`}</code>
                  </pre>
                </div>
              </>
            )}

            {post.tags.includes("JavaScript") && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Modern JavaScript Features in Practice
                </h2>
                <p>
                  Let's explore ES6+ features that make JavaScript development
                  more efficient and enjoyable. We'll build practical examples
                  using async/await, destructuring, and modules.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Blog API Service with Modern JS
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// services/blogService.js
class BlogService {
  constructor(baseUrl = 'https://api.myblog.com') {
    this.baseUrl = baseUrl;
    this.cache = new Map();
  }

  // Async/await with error handling
  async fetchPosts({ page = 1, limit = 10, category = null } = {}) {
    const cacheKey = \`posts-\${page}-\${limit}-\${category}\`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(category && { category })
      });

      const response = await fetch(\`\${this.baseUrl}/posts?\${params}\`);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data = await response.json();
      
      // Cache the result for 5 minutes
      this.cache.set(cacheKey, data);
      setTimeout(() => this.cache.delete(cacheKey), 5 * 60 * 1000);
      
      return data;
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      throw new Error('Unable to load blog posts. Please try again later.');
    }
  }

  // Destructuring and default parameters
  async createPost({ title, content, author, tags = [], category }) {
    const post = {
      title,
      content,
      author,
      tags,
      category,
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID()
    };

    try {
      const response = await fetch(\`\${this.baseUrl}/posts\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${this.getAuthToken()}\`
        },
        body: JSON.stringify(post)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create post');
      }

      // Clear relevant cache entries
      this.clearPostsCache();
      
      return await response.json();
    } catch (error) {
      console.error('Failed to create post:', error);
      throw error;
    }
  }

  // Array methods and filtering
  async searchPosts(query, filters = {}) {
    const { category, tags, author, dateRange } = filters;
    
    try {
      const allPosts = await this.fetchPosts({ limit: 1000 });
      
      return allPosts.data.filter(post => {
        // Text search
        const matchesQuery = query ? 
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) : true;

        // Category filter
        const matchesCategory = category ? post.category === category : true;

        // Tags filter (post must have ALL specified tags)
        const matchesTags = tags?.length ? 
          tags.every(tag => post.tags.includes(tag)) : true;

        // Author filter
        const matchesAuthor = author ? post.author === author : true;

        // Date range filter
        const matchesDateRange = dateRange ? 
          new Date(post.createdAt) >= new Date(dateRange.start) &&
          new Date(post.createdAt) <= new Date(dateRange.end) : true;

        return matchesQuery && matchesCategory && matchesTags && 
               matchesAuthor && matchesDateRange;
      }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
      console.error('Search failed:', error);
      return [];
    }
  }

  // Private methods
  getAuthToken() {
    return localStorage.getItem('authToken') || '';
  }

  clearPostsCache() {
    for (const key of this.cache.keys()) {
      if (key.startsWith('posts-')) {
        this.cache.delete(key);
      }
    }
  }
}

// Usage example
const blogService = new BlogService();

// Fetch posts with destructuring
const { data: posts, pagination } = await blogService.fetchPosts({
  page: 1,
  limit: 5,
  category: 'javascript'
});

// Search with multiple filters
const searchResults = await blogService.searchPosts('react hooks', {
  tags: ['react', 'hooks'],
  dateRange: {
    start: '2024-01-01',
    end: '2024-12-31'
  }
});`}</code>
                  </pre>
                </div>
              </>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Best Practices and Performance Tips
            </h2>
            <p>
              Here are some key recommendations to keep in mind when
              implementing these patterns:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Code Organization:</strong> Keep components small and
                focused on a single responsibility
              </li>
              <li>
                <strong>Type Safety:</strong> Use TypeScript interfaces to catch
                errors at compile time
              </li>
              <li>
                <strong>Performance:</strong> Implement proper caching and
                memoization strategies
              </li>
              <li>
                <strong>Error Handling:</strong> Always handle errors gracefully
                with user-friendly messages
              </li>
              <li>
                <strong>Accessibility:</strong> Use semantic HTML and proper
                ARIA attributes
              </li>
              <li>
                <strong>Testing:</strong> Write unit tests for your components
                and utility functions
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Next Steps
            </h2>
            <p>
              Now that you've learned these fundamental concepts, try
              implementing them in your own projects. Start small with a simple
              blog component, then gradually add more features like search,
              filtering, and pagination. The key to mastering web development is
              consistent practice and building real applications.
            </p>

            <p>
              Consider exploring related topics like state management with Redux
              or Zustand, testing with Jest and React Testing Library, and
              deployment strategies with Vercel or Netlify. Each of these areas
              will help you become a more well-rounded developer.
            </p>
          </div>
        </div>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              Advanced Techniques in Web Development
            </h3>
            <p className="text-gray-600 text-sm">
              Explore advanced concepts and patterns for building scalable
              applications.
            </p>
            <div className="mt-3 text-xs text-gray-500">5 min read</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              Performance Optimization Tips
            </h3>
            <p className="text-gray-600 text-sm">
              Learn how to optimize your applications for better performance and
              user experience.
            </p>
            <div className="mt-3 text-xs text-gray-500">8 min read</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
